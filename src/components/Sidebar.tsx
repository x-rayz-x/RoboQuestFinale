import React from 'react';
import { Button } from './ui/button';
import { 
  Home, 
  BookOpen, 
  Video, 
  Code, 
  TrendingUp, 
  Award, 
  Settings,
  Trophy,
  FolderOpen,
  Users
} from 'lucide-react';
import logoImage from '/public/Transparent Logo.png';
import { useTranslation } from '../i18n/LanguageContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isAdmin?: boolean;
}

export function Sidebar({ activeSection, onSectionChange, isAdmin = false }: SidebarProps) {
  const { t } = useTranslation();
  
  const menuItems = [
    {
      id: 'dashboard',
      label: t.dashboard,
      icon: Home,
      description: t.overviewQuickActions
    },
    // Courses removed from navigation per product decision
    {
      id: 'tutorials',
      label: t.tutorials,
      icon: Video,
      description: t.youtubeVideoLibrary
    },
    {
      id: 'practice',
      label: t.practice,
      icon: Code,
      description: t.handsOnExercises
    },
    {
      id: 'progress',
      label: t.progress,
      icon: TrendingUp,
      description: t.analyticsStats
    },
    {
      id: 'achievements',
      label: t.achievements,
      icon: Award,
      description: t.badgesCertificates
    },
    {
      id: 'our-projects',
      label: 'Our Projects',
      icon: FolderOpen,
      description: t.roboquestChannelContent
    },
    {
      id: 'founders',
      label: 'Our Founders',
      icon: Users,
      description: t.meetTheTeam
    },
    {
      id: 'settings',
      label: t.settings,
      icon: Settings,
      description: t.accountPreferences
    }
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-border h-full flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="RoboQuest Logo" 
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">{t.roboquest}</h1>
            <p className="text-xs text-sidebar-accent-foreground">
              {isAdmin ? t.adminDashboard : t.learningPlatform}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'ghost'}
                className={`w-full justify-start h-auto p-3 text-left ${
                  isActive && 'bg-primary text-primary-foreground'
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <div className="flex items-center gap-3 w-full">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    <div className={`text-xs truncate ${
                      isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-center">
          <div className="text-2xl mb-2">🚀</div>
          <p className="text-xs text-sidebar-accent-foreground">
            {t.keepLearning}
          </p>
          {isAdmin && (
            <p className="text-xs text-blue-400 mt-1 font-medium">
              {t.adminModeActive}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}