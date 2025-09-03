import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useAuth } from './AuthProvider';
import { useTranslation } from '../i18n/LanguageContext';
import { languageNames } from '../i18n/translations';
import { projectId } from '../utils/supabase/info';
import { useProgress } from '../hooks/useProgress';
import { useTheme } from '../hooks/useTheme';
import { 
  User, 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette,
  Volume2,
  Mail,
  Save,
  Check
} from 'lucide-react';

export function Settings() {
  const { user, session, signOut, refreshSession } = useAuth();
  const { progress, settings, loading, error, refetch } = useProgress();
  const { language, setLanguage, t } = useTranslation();
  const { applyTheme } = useTheme();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    firstName: (user as any)?.user_metadata?.firstName || '',
    lastName: (user as any)?.user_metadata?.lastName || '',
    email: user?.email || '',
    parentEmail: (user as any)?.user_metadata?.parentEmail || '',
    language: language,
    theme: settings?.theme || 'light',
    soundEffects: settings?.soundEffects ?? true,
    backgroundMusic: settings?.backgroundMusic ?? false,
    notifications: settings?.notifications ?? true,
    emailUpdates: settings?.emailUpdates ?? false,
    parentalNotifications: settings?.parentalNotifications ?? true
  });

  // Sync local formData when backend data is fetched
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      firstName: (user as any)?.user_metadata?.firstName || '',
      lastName: (user as any)?.user_metadata?.lastName || '',
      email: user?.email || '',
      parentEmail: (user as any)?.user_metadata?.parentEmail || '',
      language: language,
      theme: settings?.theme || 'light',
      soundEffects: settings?.soundEffects ?? true,
      backgroundMusic: settings?.backgroundMusic ?? false,
      notifications: settings?.notifications ?? true,
      emailUpdates: settings?.emailUpdates ?? false,
      parentalNotifications: settings?.parentalNotifications ?? true
    }));
    
    // Apply theme from settings if available
    if (settings?.theme) {
      applyTheme(settings.theme as 'light' | 'dark' | 'auto');
    }
  }, [user?.id, (user as any)?.user_metadata, language, settings?.theme]);

  // Apply theme on component mount and when settings change
  React.useEffect(() => {
    // First check if user has a saved theme preference
    const userTheme = localStorage.getItem('userTheme');
    if (userTheme) {
      applyTheme(userTheme);
    } else {
      // Fallback to general theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        applyTheme(savedTheme);
      }
    }
  }, []);



  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'theme') {
      applyTheme(value as 'light' | 'dark' | 'auto');
    }
    if (field === 'language') {
      setLanguage(value);
    }
  };

  const handleSave = async () => {
    try {
      const accessToken = session?.access_token;
      const base = `https://${projectId}.supabase.co/functions/v1/make-server-4b9cf438`;
      if (accessToken) {
        await fetch(`${base}/user/profile`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            parentEmail: formData.parentEmail
          })
        });

        await fetch(`${base}/user/settings`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            language: formData.language,
            theme: formData.theme,
            soundEffects: formData.soundEffects,
            backgroundMusic: formData.backgroundMusic,
            notifications: formData.notifications,
            emailUpdates: formData.emailUpdates,
            parentalNotifications: formData.parentalNotifications
          })
        });

        // Apply theme immediately after saving
        if (formData.theme) {
          applyTheme(formData.theme as 'light' | 'dark' | 'auto');
        }
        
        // Refresh auth to reflect new user metadata and refetch settings/progress
        await refreshSession();
        await refetch();
      }
    } catch (e) {
      console.error('Failed to save settings', e);
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-lg">{t.loadingSettings}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚙️</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t.settingsTitle}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.customizeExperience}
          </p>
        </div>

        <div className="space-y-6">
          {/* Account Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {t.accountInformation}
              </CardTitle>
              <CardDescription>
                {t.accountInfoDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.firstName}</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder={t.enterFirstName}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.lastName}</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder={t.enterLastName}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t.enterEmail}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentEmail">{t.parentEmail}</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  value={formData.parentEmail}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  placeholder={t.parentGuardianEmail}
                />
                <p className="text-sm text-muted-foreground">
                  {t.parentEmailDesc}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Learning Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                {t.learningPreferences}
              </CardTitle>
              <CardDescription>
                {t.learningPreferencesDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">{t.language}</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languageNames).map(([code, name]) => (
                      <SelectItem key={code} value={code}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                {t.appearance}
              </CardTitle>
              <CardDescription>
                {t.appearanceDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t.theme}</Label>
                <Select value={formData.theme} onValueChange={(value) => handleInputChange('theme', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">{t.lightMode}</SelectItem>
                    <SelectItem value="dark">{t.darkMode}</SelectItem>
                    <SelectItem value="auto">{t.autoMode}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                {t.audioSettings}
              </CardTitle>
              <CardDescription>
                {t.audioSettingsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="soundEffects">{t.soundEffects}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.soundEffectsDesc}
                  </p>
                </div>
                <Switch
                  id="soundEffects"
                  checked={formData.soundEffects}
                  onCheckedChange={(checked) => handleInputChange('soundEffects', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="backgroundMusic">{t.backgroundMusic}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.backgroundMusicDesc}
                  </p>
                </div>
                <Switch
                  id="backgroundMusic"
                  checked={formData.backgroundMusic}
                  onCheckedChange={(checked) => handleInputChange('backgroundMusic', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                {t.notifications}
              </CardTitle>
              <CardDescription>
                {t.notificationsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications">{t.pushNotifications}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.pushNotificationsDesc}
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={formData.notifications}
                  onCheckedChange={(checked) => handleInputChange('notifications', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailUpdates">{t.emailUpdates}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.emailUpdatesDesc}
                  </p>
                </div>
                <Switch
                  id="emailUpdates"
                  checked={formData.emailUpdates}
                  onCheckedChange={(checked) => handleInputChange('emailUpdates', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="parentalNotifications">{t.parentNotifications}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t.parentNotificationsDesc}
                  </p>
                </div>
                <Switch
                  id="parentalNotifications"
                  checked={formData.parentalNotifications}
                  onCheckedChange={(checked) => handleInputChange('parentalNotifications', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t.privacySecurity}
              </CardTitle>
              <CardDescription>
                {t.privacySecurityDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-800 mb-2">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">{t.dataProtection}</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    {t.dataProtectionDesc}
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-800 mb-2">
                    <Check className="w-4 h-4" />
                    <span className="font-medium">{t.coppaCompliant}</span>
                  </div>
                  <p className="text-sm text-green-700">
                    {t.coppaCompliantDesc}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={signOut} className="text-red-600 hover:text-red-700">
              {t.signOut}
            </Button>
            
            <Button onClick={handleSave} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              {saved ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {t.saved}
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {t.saveChanges}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}