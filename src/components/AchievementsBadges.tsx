import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Spinner } from './ui/spinner';
import { useAuth } from './AuthProvider';
import { useProgress } from '../hooks/useProgress';
import { useTranslation } from '../i18n/LanguageContext';
import { downloadCertificateWithFallback } from '../utils/certificateUtils';
import { 
  Trophy, 
  Award, 
  Star, 
  Download, 
  Share,
  Lock,
  CheckCircle,
  Target,
  Zap,
  BookOpen,
  Code,
  Calendar,
  Users,
  Flame
} from 'lucide-react';

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

export function AchievementsBadges() {
  // All hooks must be called at the top level, before any conditional logic
  const { user } = useAuth();
  const { progress, loading, error } = useProgress();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [downloadingCertificates, setDownloadingCertificates] = useState<Set<string>>(new Set());
  const [componentError, setComponentError] = useState<string | null>(null);

  // Memoized values - all hooks must be called before any conditional returns
  const achievements = useMemo(() => {
    if (!t || !progress || !user) {
      return [];
    }

    const tutorialsCompleted = progress.completedTutorials?.length || 0;
    const currentXP = progress.totalXP || 0;
    const streakDays = progress.streakDays || 0;
    const currentLevel = progress.level || 1;

    return [
      // Tutorial Category - Now the main focus
      {
        id: 'first_tutorial',
        title: t.firstTutorial,
        description: t.completeFirstTutorial,
        icon: '🎯',
        category: 'learning' as const,
        requirement: 1,
        earned: tutorialsCompleted >= 1,
        progress: Math.min(tutorialsCompleted, 1),
        earnedDate: tutorialsCompleted >= 1 ? '2024-01-15' : undefined
      },
      {
        id: 'tutorial_beginner',
        title: t.dedicatedLearner,
        description: `${t.completeTutorials} 5`,
        icon: '📚',
        category: 'learning' as const,
        requirement: 5,
        earned: tutorialsCompleted >= 5,
        progress: Math.min(tutorialsCompleted, 5)
      },
      {
        id: 'tutorial_intermediate',
        title: t.tutorialMaster,
        description: `${t.completeTutorials} 15`,
        icon: '🎓',
        category: 'learning' as const,
        requirement: 15,
        earned: tutorialsCompleted >= 15,
        progress: Math.min(tutorialsCompleted, 15)
      },
      {
        id: 'tutorial_advanced',
        title: t.tutorialExpert,
        description: `${t.completeTutorials} 30`,
        icon: '🏅',
        category: 'learning' as const,
        requirement: 30,
        earned: tutorialsCompleted >= 30,
        progress: Math.min(tutorialsCompleted, 30)
      },
      {
        id: 'tutorial_master',
        title: 'Tutorial Champion',
        description: `${t.completeTutorials} 50`,
        icon: '👑',
        category: 'learning' as const,
        requirement: 50,
        earned: tutorialsCompleted >= 50,
        progress: Math.min(tutorialsCompleted, 50)
      },

      // Level Category - Focus on progression
      {
        id: 'level_2',
        title: 'Rising Star',
        description: `${t.reachLevel} 2`,
        icon: '⭐',
        category: 'milestone' as const,
        requirement: 2,
        earned: currentLevel >= 2,
        progress: Math.min(currentLevel, 2)
      },
      {
        id: 'level_5',
        title: 'Skilled Learner',
        description: `${t.reachLevel} 5`,
        icon: '🌟',
        category: 'milestone' as const,
        requirement: 5,
        earned: currentLevel >= 5,
        progress: Math.min(currentLevel, 5)
      },
      {
        id: 'level_10',
        title: 'Expert Coder',
        description: `${t.reachLevel} 10`,
        icon: '💫',
        category: 'milestone' as const,
        requirement: 10,
        earned: currentLevel >= 10,
        progress: Math.min(currentLevel, 10)
      },
      {
        id: 'level_15',
        title: 'Programming Pro',
        description: `${t.reachLevel} 15`,
        icon: '🚀',
        category: 'milestone' as const,
        requirement: 15,
        earned: currentLevel >= 15,
        progress: Math.min(currentLevel, 15)
      },

      // XP Category - Tutorial focused XP
      {
        id: 'xp_seeker',
        title: t.knowledgeSeeker,
        description: `${t.earnXP} 250`,
        icon: '⚡',
        category: 'milestone' as const,
        requirement: 250,
        earned: currentXP >= 250,
        progress: Math.min(currentXP, 250)
      },
      {
        id: 'xp_collector',
        title: t.xpCollector,
        description: `${t.earnXP} 500`,
        icon: '💎',
        category: 'milestone' as const,
        requirement: 500,
        earned: currentXP >= 500,
        progress: Math.min(currentXP, 500)
      },
      {
        id: 'xp_master',
        title: t.xpMaster,
        description: `${t.earnXP} 1500`,
        icon: '🏆',
        category: 'milestone' as const,
        requirement: 1500,
        earned: currentXP >= 1500,
        progress: Math.min(currentXP, 1500)
      },

      // Streak Category - Consistent learning
      {
        id: 'week_streak',
        title: t.consistentLearner,
        description: `${t.maintainStreak} 7 days`,
        icon: '🔥',
        category: 'streak' as const,
        requirement: 7,
        earned: streakDays >= 7,
        progress: Math.min(streakDays, 7)
      },
      {
        id: 'month_streak',
        title: t.streakMaster,
        description: `${t.maintainStreak} 30 days`,
        icon: '🎯',
        category: 'streak' as const,
        requirement: 30,
        earned: streakDays >= 30,
        progress: Math.min(streakDays, 30)
      }
    ];
  }, [t, progress, user]);

  const categories = useMemo(() => [
    { id: 'all', label: 'All Achievements', icon: Trophy },
    { id: 'learning', label: 'Tutorials', icon: BookOpen },
    { id: 'milestone', label: 'Milestones', icon: Target },
    { id: 'streak', label: 'Streaks', icon: Flame }
  ], []);

  const filteredAchievements = useMemo(() => 
    selectedCategory === 'all' 
      ? achievements 
      : achievements.filter((a: Achievement) => a.category === selectedCategory),
    [selectedCategory, achievements]
  );

  const earnedCount = useMemo(() => achievements.filter((a: Achievement) => a.earned).length, [achievements]);
  const totalCount = useMemo(() => achievements.length, [achievements]);
  const completionPercentage = useMemo(() => Math.round((earnedCount / totalCount) * 100), [earnedCount, totalCount]);

  // Event handlers
  const handleDownloadCertificate = async (achievement: Achievement) => {
    try {
      if (!achievement.earned) {
        alert('You must complete this achievement before downloading the certificate!');
        return;
      }

      if (!achievement.id || !achievement.title) {
        throw new Error('Invalid achievement data');
      }

      // Debug: Log user object to see what's available
      console.log('User object:', user);
      console.log('User metadata:', (user as any)?.user_metadata);
      console.log('User email:', user?.email);

      // Get user name from user_metadata or fallback to email
      const userName = (user as any)?.user_metadata?.firstName || user?.email?.split('@')[0] || 'Student';
      
      console.log('Resolved userName:', userName);
      
      if (!userName) {
        throw new Error('User name not available');
      }
    
      setDownloadingCertificates((prev: Set<string>) => new Set(prev).add(achievement.id));
    
      // Use the enhanced certificate with user's name embedded, with fallback
      await downloadCertificateWithFallback(achievement, userName);
      
      // Show success message
      const successMessage = `Certificate for "${achievement.title}" downloaded successfully!`;
      console.log(successMessage);
      
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert(`Failed to download certificate: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setDownloadingCertificates((prev: Set<string>) => {
        const newSet = new Set(prev);
        newSet.delete(achievement.id);
        return newSet;
      });
    }
  };

  const handleShareAchievement = (achievement: Achievement) => {
    try {
      if (!achievement.title || !achievement.description) {
        throw new Error('Invalid achievement data for sharing');
      }

      // In a real app, this would open a share dialog
      if (navigator.share) {
        navigator.share({
          title: `RoboQuest Achievement: ${achievement.title}`,
          text: `I just earned the "${achievement.title}" achievement on RoboQuest! ${achievement.description}`,
          url: window.location.href
        }).catch((error) => {
          console.error('Error sharing achievement:', error);
          alert(`Share: I just earned "${achievement.title}" on RoboQuest!`);
        });
      } else {
        alert(`Share: I just earned "${achievement.title}" on RoboQuest!`);
      }
    } catch (error) {
      console.error('Error in handleShareAchievement:', error);
      alert('Failed to share achievement. Please try again.');
    }
  };

  // Error boundary for the component
  if (componentError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
            Component Error
          </h2>
          <p className="text-lg text-red-600 dark:text-red-400 mb-4">
            {componentError}
          </p>
          <Button 
            onClick={() => setComponentError(null)}
            variant="outline"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-lg text-foreground">Loading achievements...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-lg text-red-600 dark:text-red-400">Error loading achievements: {error}</p>
        </div>
      </div>
    );
  }

  // Validation checks
  if (!t) {
    setComponentError('Translation object not available');
    return null;
  }

  if (!user) {
    setComponentError('User not authenticated');
    return null;
  }

  if (!progress) {
    setComponentError('Progress data not available');
    return null;
  }

  const userName = (user as any)?.user_metadata?.firstName || user?.email?.split('@')[0] || 'Student';

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t.achievements} & Badges
          </h1>
          <p className="text-lg text-muted-foreground">
            Celebrate your learning milestones, {userName}!
          </p>
        </div>

        {/* Achievement Overview */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold">{earnedCount}</div>
                <div className="text-yellow-100">Achievements Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{completionPercentage}%</div>
                <div className="text-yellow-100">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{totalCount - earnedCount}</div>
                <div className="text-yellow-100">Still to Unlock</div>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={completionPercentage} className="h-3 bg-yellow-400" />
            </div>
          </CardContent>
        </Card>

        {/* Certificate Information */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">Download Your Achievement Certificates</h3>
              <p className="text-blue-100 mb-4">
                Once you complete an achievement, you can download a personalized certificate with your name!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <Download className="w-4 h-4" />
                  <span>Personalized with your name</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4" />
                  <span>Only available after completion</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Star className="w-4 h-4" />
                  <span>Professional achievement proof</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                
                return (
                  <Button
                    key={category.id}
                    variant={isActive ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <Card 
              key={achievement.id}
              className={`transition-all hover:shadow-lg ${
                achievement.earned 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 dark:from-yellow-950 dark:to-orange-950 dark:border-yellow-800' 
                  : 'bg-gray-50 border-gray-200 dark:bg-muted dark:border-border'
              }`}
            >
              <CardHeader className="text-center pb-3">
                <div className={`text-4xl mb-2 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                  {achievement.earned ? achievement.icon : '🔒'}
                </div>
                <CardTitle className={`text-lg ${achievement.earned ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-600 dark:text-foreground'}`}>
                  {achievement.title}
                </CardTitle>
                <CardDescription className={achievement.earned ? 'text-yellow-600 dark:text-yellow-300' : 'text-gray-500 dark:text-muted-foreground'}>
                  {achievement.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm">
                      {achievement.progress} / {achievement.requirement}
                    </span>
                  </div>
                  <Progress 
                    value={(achievement.progress / achievement.requirement) * 100} 
                    className="h-2"
                  />
                </div>

                {/* Status and Actions */}
                {achievement.earned ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Earned!</span>
                      {achievement.earnedDate && (
                        <span className="text-xs text-muted-foreground">
                          on {achievement.earnedDate}
                        </span>
                      )}
                    </div>
                    
                    {/* Certificate Available Badge */}
                    <div className="flex items-center gap-2 text-blue-600">
                      <Download className="w-4 h-4" />
                      <span className="text-xs font-medium">Certificate Available</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleDownloadCertificate(achievement)}
                        disabled={downloadingCertificates.has(achievement.id)}
                      >
                        {downloadingCertificates.has(achievement.id) ? (
                          <>
                            <Spinner size="sm" className="mr-1" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </>
                        )}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleShareAchievement(achievement)}
                      >
                        <Share className="w-3 h-3 mr-1" />
                        Share
                      </Button>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="text-xs text-muted-foreground text-center">
                      Certificate includes your name and achievement details
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm">Not yet earned</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.requirement - achievement.progress} more to unlock
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg text-muted-foreground">
              No achievements found in this category
            </p>
          </div>
        )}

        {/* Motivational Footer */}
        <Card className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Keep Going, {userName}! 🌟</h3>
            <p className="text-blue-100 mb-4">
              Every lesson completed and project built brings you closer to your next achievement.
            </p>
            <p className="text-sm text-blue-200">
              You're making amazing progress on your coding journey!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}