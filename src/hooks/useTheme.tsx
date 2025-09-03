import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../components/AuthProvider';
import { useProgress } from './useProgress';

export function useTheme() {
  const { user, session } = useAuth();
  const { settings } = useProgress();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('light');

  const applyTheme = useCallback((theme: 'light' | 'dark' | 'auto') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (user) {
        localStorage.setItem('userTheme', 'dark');
      }
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (user) {
        localStorage.setItem('userTheme', 'light');
      }
    } else {
      // Auto mode - use system preference
      const darkMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkMq.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (user) {
          localStorage.setItem('userTheme', 'dark');
        }
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (user) {
          localStorage.setItem('userTheme', 'light');
        }
      }
    }
    setCurrentTheme(theme);
  }, [user]);

  // Initialize theme on mount
  useEffect(() => {
    // Priority: user theme > local theme > default
    let themeToApply: 'light' | 'dark' | 'auto' = 'light';
    
    if (user && settings?.theme) {
      // User has a saved theme preference
      themeToApply = settings.theme as 'light' | 'dark' | 'auto';
    } else {
      // Check local storage
      const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto';
      if (localTheme) {
        themeToApply = localTheme;
      }
    }
    
    applyTheme(themeToApply);
  }, [user, settings?.theme, applyTheme]);

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (currentTheme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [currentTheme]);

  return {
    currentTheme,
    applyTheme,
    isDark: document.documentElement.classList.contains('dark')
  };
}

