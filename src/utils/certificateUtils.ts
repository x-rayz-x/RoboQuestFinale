import { PDFDocument, PDFFont, rgb, StandardFonts } from 'pdf-lib';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'learning' | 'social' | 'streak' | 'milestone';
  requirement: number;
  earned: boolean;
  progress: number;
  earnedDate?: string;
}

// Map achievement IDs to certificate numbers (1-15)
const achievementToCertificateMap: Record<string, number> = {
  'first_tutorial': 1,
  'tutorial_beginner': 2,
  'tutorial_intermediate': 3,
  'tutorial_advanced': 4,
  'tutorial_master': 5,
  'level_2': 6,
  'level_5': 7,
  'level_10': 8,
  'level_15': 9,
  'xp_seeker': 10,
  'xp_collector': 11,
  'xp_master': 12,
  'week_streak': 13,
  'month_streak': 14
};

export function getCertificateNumber(achievementId: string): number | null {
  return achievementToCertificateMap[achievementId] || null;
}

export async function downloadCertificate(achievement: Achievement, userName: string): Promise<void> {
  if (!achievement.earned) {
    alert('You must complete this achievement before downloading the certificate!');
    return;
  }

  const certificateNumber = getCertificateNumber(achievement.id);
  if (!certificateNumber) {
    alert('Certificate not found for this achievement!');
    return;
  }

  try {
    // Fetch the base certificate template
    const response = await fetch(`/Certificates/Blue Simple Achievement Certificate (${certificateNumber}).pdf`);
    if (!response.ok) {
      throw new Error(`Failed to fetch certificate template: ${response.status} ${response.statusText}`);
    }
    
    const pdfBytes = await response.arrayBuffer();
    
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    
    // Get the page dimensions
    const { width, height } = firstPage.getSize();
    
    // Embed the standard font
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Add user's name in the center of the certificate
    const fontSize = 24;
    const text = userName;
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    
    // Calculate center position (adjust these values based on your certificate layout)
    const centerX = (width - textWidth) / 2;
    const centerY = height / 2 + 20; // Adjust Y position as needed
    
    // Add the user's name
    firstPage.drawText(text, {
      x: centerX,
      y: centerY,
      size: fontSize,
      font: font,
      color: rgb(0.2, 0.2, 0.2), // Dark gray color
    });
    
    // Add achievement title below the name
    const titleFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const titleFontSize = 16;
    const titleText = achievement.title;
    const titleWidth = titleFont.widthOfTextAtSize(titleText, titleFontSize);
    const titleX = (width - titleWidth) / 2;
    const titleY = centerY - 40;
    
    firstPage.drawText(titleText, {
      x: titleX,
      y: titleY,
      size: titleFontSize,
      font: titleFont,
      color: rgb(0.4, 0.4, 0.4),
    });
    
    // Add completion date if available
    if (achievement.earnedDate) {
      const dateFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const dateText = `Completed: ${achievement.earnedDate}`;
      const dateWidth = dateFont.widthOfTextAtSize(dateText, 12);
      const dateX = (width - dateWidth) / 2;
      const dateY = titleY - 30;
      
      firstPage.drawText(dateText, {
        x: dateX,
        y: dateY,
        size: 12,
        font: dateFont,
        color: rgb(0.5, 0.5, 0.5),
      });
    }
    
    // Add RoboQuest branding
    const brandFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const brandText = 'RoboQuest Learning Platform';
    const brandWidth = brandFont.widthOfTextAtSize(brandText, 10);
    const brandX = (width - brandWidth) / 2;
    const brandY = 50;
    
    firstPage.drawText(brandText, {
      x: brandX,
      y: brandY,
      size: 10,
      font: brandFont,
      color: rgb(0.6, 0.6, 0.6),
    });
    
    // Serialize the PDF
    const modifiedPdfBytes = await pdfDoc.save();
    
    // Create download link
    const blob = new Blob([new Uint8Array(modifiedPdfBytes)], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `RoboQuest_${achievement.title.replace(/\s+/g, '_')}_${userName}_Certificate.pdf`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('Error generating certificate:', error);
    throw new Error(`Failed to generate certificate: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function downloadPreMadeCertificate(achievement: Achievement, userName: string): void {
  if (!achievement.earned) {
    alert('You must complete this achievement before downloading the certificate!');
    return;
  }

  const certificateNumber = getCertificateNumber(achievement.id);
  if (!certificateNumber) {
    alert('Certificate not found for this achievement!');
    return;
  }

  // Create a link to download the pre-made certificate
  const link = document.createElement('a');
  link.href = `/Certificates/Blue Simple Achievement Certificate (${certificateNumber}).pdf`;
  link.download = `RoboQuest_${achievement.title.replace(/\s+/g, '_')}_${userName}_Certificate.pdf`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Fallback function that tries enhanced certificate first, then falls back to pre-made
export async function downloadCertificateWithFallback(achievement: Achievement, userName: string): Promise<void> {
  try {
    // Try the enhanced certificate first
    await downloadCertificate(achievement, userName);
  } catch (error) {
    console.warn('Enhanced certificate failed, falling back to pre-made:', error);
    // Fall back to pre-made certificate
    downloadPreMadeCertificate(achievement, userName);
  }
}
