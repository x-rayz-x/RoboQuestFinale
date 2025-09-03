export interface Translation {
  // Navigation & General
  roboquest: string;
  dashboard: string;
  courses: string;
  tutorials: string;
  practice: string;
  progress: string;
  achievements: string;
  settings: string;
  signOut: string;
  signIn: string;
  signUp: string;
  login: string;
  register: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  parentEmail: string;
  save: string;
  saved: string;
  cancel: string;
  close: string;
  back: string;
  next: string;
  previous: string;
  loading: string;
  
  // Landing Page
  landingTitle: string;
  landingSubtitle: string;
  landingDescription: string;
  unifiedLibrary: string;
  unifiedLibraryDesc: string;
  progressTracking: string;
  progressTrackingDesc: string;
  kidFriendly: string;
  kidFriendlyDesc: string;
  tutorials: string;
  uptime: string;
  accessAnywhere: string;
  allRightsReserved: string;
  
  // Dashboard
  welcomeBack: string;
  continueYourJourney: string;
  recentActivity: string;
  quickAccess: string;
  
  // Settings
  settingsTitle: string;
  customizeExperience: string;
  accountInformation: string;
  accountInfoDesc: string;
  learningPreferences: string;
  learningPreferencesDesc: string;
  appearance: string;
  appearanceDesc: string;
  audioSettings: string;
  audioSettingsDesc: string;
  notifications: string;
  notificationsDesc: string;
  privacySecurity: string;
  privacySecurityDesc: string;
  language: string;
  dailyGoal: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  autoMode: string;
  soundEffects: string;
  soundEffectsDesc: string;
  backgroundMusic: string;
  backgroundMusicDesc: string;
  pushNotifications: string;
  pushNotificationsDesc: string;
  emailUpdates: string;
  emailUpdatesDesc: string;
  parentNotifications: string;
  parentNotificationsDesc: string;
  dataProtection: string;
  dataProtectionDesc: string;
  coppaCompliant: string;
  coppaCompliantDesc: string;
  saveChanges: string;
  
  // Common phrases
  enterFirstName: string;
  enterLastName: string;
  enterEmail: string;
  parentGuardianEmail: string;
  parentEmailDesc: string;
  lessonsPerDay: string;
  
  // Loading states
  loadingAdventure: string;
  loadingSettings: string;
  
  // Additional common terms
  upload: string;
  adminDashboard: string;
  learningPlatform: string;
  keepLearning: string;
  adminModeActive: string;
  overviewQuickActions: string;
  youtubeVideoLibrary: string;
  handsOnExercises: string;
  analyticsStats: string;
  badgesCertificates: string;
  roboquestChannelContent: string;
  meetTheTeam: string;
  accountPreferences: string;
  
  // Progress page
  progressAnalytics: string;
  trackLearningJourney: string;
  currentLevel: string;
  totalXP: string;
  tutorialsCompleted: string;
  coursesCompleted: string;
  projectsBuilt: string;
  dailyLearningGoal: string;
  trackDailyProgress: string;
  todaysProgress: string;
  goalAchieved: string;
  moreTutorialsToReachGoal: string;
  learningStreak: string;
  consecutiveLearningDays: string;
  startStreakToday: string;
  dayStreak: string;
  daysStreak: string;
  amazingConsistency: string;
  buildingMomentum: string;
  keepLearningDaily: string;
  weeklyActivity: string;
  learningActivityWeek: string;
  learningCategories: string;
  focusAreas: string;
  recentAchievements: string;
  latestMilestones: string;
  gettingStarted: string;
  completedFirstTutorial: string;
  xpCollector: string;
  earned100XP: string;
  dedicatedLearner: string;
  tutorialsCompleted5: string;
  
  // Achievement updates
  tutorialMaster: string;
  completeTutorials: string;
  tutorialExpert: string;
  firstTutorial: string;
  completeFirstTutorial: string;
  levelUp: string;
  reachLevel: string;
  consistentLearner: string;
  maintainStreak: string;
  streakMaster: string;
  knowledgeSeeker: string;
  earnXP: string;
  xpMaster: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation & General
    roboquest: "RoboQuest",
    dashboard: "Dashboard",
    courses: "Courses",
    tutorials: "Tutorials",
    practice: "Practice",
    progress: "Progress",
    achievements: "Achievements",
    settings: "Settings",
    signOut: "Sign Out",
    signIn: "Sign In",
    signUp: "Sign Up",
    login: "Log in",
    register: "Register",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    firstName: "First Name",
    lastName: "Last Name",
    parentEmail: "Parent/Guardian Email",
    save: "Save",
    saved: "Saved!",
    cancel: "Cancel",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    loading: "Loading",
    
    // Landing Page
    landingTitle: "The Learning OS",
    landingSubtitle: "for Young Makers",
    landingDescription: "Build, learn, and explore with RoboQuest. Tutorials and projects unified in one simple experience.",
    unifiedLibrary: "Unified Library",
    unifiedLibraryDesc: "Tutorials, projects, and videos in one place.",
    progressTracking: "Progress Tracking",
    progressTrackingDesc: "Earn achievements as you learn new skills.",
    kidFriendly: "Kid-Friendly",
    kidFriendlyDesc: "A safe, simple interface for students.",
    tutorials: "Tutorials",
    uptime: "Uptime",
    accessAnywhere: "Access Anywhere",
    allRightsReserved: "All rights reserved.",
    
    // Dashboard
    welcomeBack: "Welcome back",
    continueYourJourney: "Continue your learning journey",
    recentActivity: "Recent Activity",
    quickAccess: "Quick Access",
    
    // Settings
    settingsTitle: "Settings",
    customizeExperience: "Customize your RoboQuest experience",
    accountInformation: "Account Information",
    accountInfoDesc: "Your personal information and account details",
    learningPreferences: "Learning Preferences",
    learningPreferencesDesc: "Customize your learning experience",
    appearance: "Appearance",
    appearanceDesc: "Customize the look and feel of RoboQuest",
    audioSettings: "Audio Settings",
    audioSettingsDesc: "Control sounds and music in RoboQuest",
    notifications: "Notifications",
    notificationsDesc: "Manage your notification preferences",
    privacySecurity: "Privacy & Security",
    privacySecurityDesc: "Your data protection and account security",
    language: "Language",
    dailyGoal: "Daily Learning Goal",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    autoMode: "Auto (Follow System)",
    soundEffects: "Sound Effects",
    soundEffectsDesc: "Play sounds for button clicks and achievements",
    backgroundMusic: "Background Music",
    backgroundMusicDesc: "Play ambient music while learning",
    pushNotifications: "Push Notifications",
    pushNotificationsDesc: "Receive notifications for achievements and reminders",
    emailUpdates: "Email Updates",
    emailUpdatesDesc: "Receive progress updates and new course announcements",
    parentNotifications: "Parent Notifications",
    parentNotificationsDesc: "Send progress reports to parent/guardian email",
    dataProtection: "Data Protection",
    dataProtectionDesc: "Your learning data is securely stored and never shared with third parties.",
    coppaCompliant: "COPPA Compliant",
    coppaCompliantDesc: "RoboQuest follows all children's privacy protection guidelines.",
    saveChanges: "Save Changes",
    
    // Common phrases
    enterFirstName: "Enter your first name",
    enterLastName: "Enter your last name",
    enterEmail: "Enter your email",
    parentGuardianEmail: "Parent or guardian email",
    parentEmailDesc: "Used for progress updates and important notifications",
    lessonsPerDay: "lessons per day",
    
    // Loading states
    loadingAdventure: "Loading your RoboQuest adventure...",
    loadingSettings: "Loading settings...",
    
    // Additional common terms
    upload: "Upload",
    adminDashboard: "Admin Dashboard",
    learningPlatform: "Learning Platform",
    keepLearning: "Keep learning and building amazing things!",
    adminModeActive: "Admin Mode Active",
    overviewQuickActions: "Overview & quick actions",
    youtubeVideoLibrary: "YouTube video library",
    handsOnExercises: "Hands-on exercises",
    analyticsStats: "Analytics & stats",
    badgesCertificates: "Badges & certificates",
    roboquestChannelContent: "RoboQuest channel content",
    meetTheTeam: "Meet the team behind RoboQuest",
    accountPreferences: "Account preferences",
    
    // Progress page
    progressAnalytics: "Progress Analytics",
    trackLearningJourney: "Track your learning journey and celebrate your achievements",
    currentLevel: "Current Level",
    totalXP: "Total XP",
    tutorialsCompleted: "Tutorials Completed",
    coursesCompleted: "Courses Completed", 
    projectsBuilt: "Projects Built",
    dailyLearningGoal: "Daily Learning Goal",
    trackDailyProgress: "Track your daily learning progress",
    todaysProgress: "Today's Progress",
    goalAchieved: "🎉 Goal achieved! Keep up the great work!",
    moreTutorialsToReachGoal: "more tutorials to reach your goal",
    learningStreak: "Learning Streak",
    consecutiveLearningDays: "Your consecutive learning days",
    startStreakToday: "Start your streak today!",
    dayStreak: "Day streak",
    daysStreak: "Days streak",
    amazingConsistency: "🏆 Amazing consistency!",
    buildingMomentum: "🎯 Building momentum!",
    keepLearningDaily: "Keep learning daily to build your streak!",
    weeklyActivity: "Weekly Activity",
    learningActivityWeek: "Your learning activity this week",
    learningCategories: "Learning Categories",
    focusAreas: "Your focus areas",
    recentAchievements: "Recent Achievements",
    latestMilestones: "Your latest milestones and accomplishments",
    gettingStarted: "Getting Started",
    completedFirstTutorial: "Completed first tutorial",
    xpCollector: "XP Collector",
    earned100XP: "Earned 100+ XP",
    dedicatedLearner: "Dedicated Learner",
    tutorialsCompleted5: "5+ tutorials completed",
    
    // Achievement updates
    tutorialMaster: "Tutorial Master",
    completeTutorials: "Complete tutorials",
    tutorialExpert: "Tutorial Expert",
    firstTutorial: "First Tutorial",
    completeFirstTutorial: "Complete your first tutorial",
    levelUp: "Level Up",
    reachLevel: "Reach Level",
    consistentLearner: "Consistent Learner",
    maintainStreak: "Maintain learning streak",
    streakMaster: "Streak Master",
    knowledgeSeeker: "Knowledge Seeker",
    earnXP: "Earn XP",
    xpMaster: "XP Master",
  },
  
  es: {
    // Navigation & General
    roboquest: "RoboQuest",
    dashboard: "Panel",
    courses: "Cursos",
    tutorials: "Tutoriales",
    practice: "Práctica",
    progress: "Progreso",
    achievements: "Logros",
    settings: "Configuración",
    signOut: "Cerrar Sesión",
    signIn: "Iniciar Sesión",
    signUp: "Registrarse",
    login: "Iniciar sesión",
    register: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar Contraseña",
    firstName: "Nombre",
    lastName: "Apellido",
    parentEmail: "Correo del Padre/Tutor",
    save: "Guardar",
    saved: "¡Guardado!",
    cancel: "Cancelar",
    close: "Cerrar",
    back: "Atrás",
    next: "Siguiente",
    previous: "Anterior",
    loading: "Cargando",
    
    // Landing Page
    landingTitle: "El Sistema de Aprendizaje",
    landingSubtitle: "para Jóvenes Creadores",
    landingDescription: "Construye, aprende y explora con RoboQuest. Tutoriales y proyectos unificados en una experiencia simple.",
    unifiedLibrary: "Biblioteca Unificada",
    unifiedLibraryDesc: "Tutoriales, proyectos y videos en un solo lugar.",
    progressTracking: "Seguimiento de Progreso",
    progressTrackingDesc: "Gana logros mientras aprendes nuevas habilidades.",
    kidFriendly: "Para Niños",
    kidFriendlyDesc: "Una interfaz segura y simple para estudiantes.",
    tutorials: "Tutoriales",
    uptime: "Tiempo Activo",
    accessAnywhere: "Acceso en Cualquier Lugar",
    allRightsReserved: "Todos los derechos reservados.",
    
    // Dashboard
    welcomeBack: "Bienvenido de vuelta",
    continueYourJourney: "Continúa tu viaje de aprendizaje",
    recentActivity: "Actividad Reciente",
    quickAccess: "Acceso Rápido",
    
    // Settings
    settingsTitle: "Configuración",
    customizeExperience: "Personaliza tu experiencia de RoboQuest",
    accountInformation: "Información de la Cuenta",
    accountInfoDesc: "Tu información personal y detalles de la cuenta",
    learningPreferences: "Preferencias de Aprendizaje",
    learningPreferencesDesc: "Personaliza tu experiencia de aprendizaje",
    appearance: "Apariencia",
    appearanceDesc: "Personaliza el aspecto de RoboQuest",
    audioSettings: "Configuración de Audio",
    audioSettingsDesc: "Controla sonidos y música en RoboQuest",
    notifications: "Notificaciones",
    notificationsDesc: "Gestiona tus preferencias de notificación",
    privacySecurity: "Privacidad y Seguridad",
    privacySecurityDesc: "Tu protección de datos y seguridad de cuenta",
    language: "Idioma",
    dailyGoal: "Meta Diaria de Aprendizaje",
    theme: "Tema",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    autoMode: "Auto (Seguir Sistema)",
    soundEffects: "Efectos de Sonido",
    soundEffectsDesc: "Reproduce sonidos para clics y logros",
    backgroundMusic: "Música de Fondo",
    backgroundMusicDesc: "Reproduce música ambiental mientras aprendes",
    pushNotifications: "Notificaciones Push",
    pushNotificationsDesc: "Recibe notificaciones de logros y recordatorios",
    emailUpdates: "Actualizaciones por Correo",
    emailUpdatesDesc: "Recibe actualizaciones de progreso y anuncios de nuevos cursos",
    parentNotifications: "Notificaciones para Padres",
    parentNotificationsDesc: "Envía informes de progreso al correo del padre/tutor",
    dataProtection: "Protección de Datos",
    dataProtectionDesc: "Tus datos de aprendizaje se almacenan de forma segura y nunca se comparten con terceros.",
    coppaCompliant: "Cumple con COPPA",
    coppaCompliantDesc: "RoboQuest sigue todas las pautas de protección de privacidad infantil.",
    saveChanges: "Guardar Cambios",
    
    // Common phrases
    enterFirstName: "Ingresa tu nombre",
    enterLastName: "Ingresa tu apellido",
    enterEmail: "Ingresa tu correo electrónico",
    parentGuardianEmail: "Correo del padre o tutor",
    parentEmailDesc: "Usado para actualizaciones de progreso y notificaciones importantes",
    lessonsPerDay: "lecciones por día",
    
    // Loading states
    loadingAdventure: "Cargando tu aventura RoboQuest...",
    loadingSettings: "Cargando configuración...",
    
    // Additional common terms
    upload: "Subir",
    adminDashboard: "Panel de Administrador",
    learningPlatform: "Plataforma de Aprendizaje",
    keepLearning: "¡Sigue aprendiendo y construyendo cosas increíbles!",
    adminModeActive: "Modo Administrador Activo",
    overviewQuickActions: "Resumen y acciones rápidas",
    youtubeVideoLibrary: "Biblioteca de videos de YouTube",
    handsOnExercises: "Ejercicios prácticos",
    analyticsStats: "Análisis y estadísticas",
    badgesCertificates: "Insignias y certificados",
    roboquestChannelContent: "Contenido del canal RoboQuest",
    meetTheTeam: "Conoce al equipo detrás de RoboQuest",
    accountPreferences: "Preferencias de cuenta",
    
    // Progress page
    progressAnalytics: "Análisis de Progreso",
    trackLearningJourney: "Rastrea tu viaje de aprendizaje y celebra tus logros",
    currentLevel: "Nivel Actual",
    totalXP: "XP Total",
    tutorialsCompleted: "Tutoriales Completados",
    coursesCompleted: "Cursos Completados",
    projectsBuilt: "Proyectos Construidos",
    dailyLearningGoal: "Meta Diaria de Aprendizaje",
    trackDailyProgress: "Rastrea tu progreso diario de aprendizaje",
    todaysProgress: "Progreso de Hoy",
    goalAchieved: "🎉 ¡Meta alcanzada! ¡Sigue con el gran trabajo!",
    moreTutorialsToReachGoal: "más tutoriales para alcanzar tu meta",
    learningStreak: "Racha de Aprendizaje",
    consecutiveLearningDays: "Tus días consecutivos de aprendizaje",
    startStreakToday: "¡Comienza tu racha hoy!",
    dayStreak: "Día de racha",
    daysStreak: "Días de racha",
    amazingConsistency: "🏆 ¡Consistencia increíble!",
    buildingMomentum: "🎯 ¡Construyendo impulso!",
    keepLearningDaily: "¡Sigue aprendiendo diariamente para construir tu racha!",
    weeklyActivity: "Actividad Semanal",
    learningActivityWeek: "Tu actividad de aprendizaje esta semana",
    learningCategories: "Categorías de Aprendizaje",
    focusAreas: "Tus áreas de enfoque",
    recentAchievements: "Logros Recientes",
    latestMilestones: "Tus últimos hitos y logros",
    gettingStarted: "Comenzando",
    completedFirstTutorial: "Completó primer tutorial",
    xpCollector: "Coleccionista de XP",
    earned100XP: "Ganó 100+ XP",
    dedicatedLearner: "Aprendiz Dedicado",
    tutorialsCompleted5: "5+ tutoriales completados",
    
    // Achievement updates
    tutorialMaster: "Maestro de Tutoriales",
    completeTutorials: "Completar tutoriales",
    tutorialExpert: "Experto en Tutoriales",
    firstTutorial: "Primer Tutorial",
    completeFirstTutorial: "Completa tu primer tutorial",
    levelUp: "Subir de Nivel",
    reachLevel: "Alcanzar Nivel",
    consistentLearner: "Aprendiz Consistente",
    maintainStreak: "Mantener racha de aprendizaje",
    streakMaster: "Maestro de Rachas",
    knowledgeSeeker: "Buscador de Conocimiento",
    earnXP: "Ganar XP",
    xpMaster: "Maestro de XP",
  },
  
  fr: {
    // Navigation & General
    roboquest: "RoboQuest",
    dashboard: "Tableau de Bord",
    courses: "Cours",
    tutorials: "Tutoriels",
    practice: "Pratique",
    progress: "Progrès",
    achievements: "Réalisations",
    settings: "Paramètres",
    signOut: "Se Déconnecter",
    signIn: "Se Connecter",
    signUp: "S'inscrire",
    login: "Se connecter",
    register: "S'inscrire",
    email: "Email",
    password: "Mot de Passe",
    confirmPassword: "Confirmer le Mot de Passe",
    firstName: "Prénom",
    lastName: "Nom de Famille",
    parentEmail: "Email du Parent/Tuteur",
    save: "Enregistrer",
    saved: "Enregistré !",
    cancel: "Annuler",
    close: "Fermer",
    back: "Retour",
    next: "Suivant",
    previous: "Précédent",
    loading: "Chargement",
    
    // Landing Page
    landingTitle: "Le Système d'Apprentissage",
    landingSubtitle: "pour Jeunes Créateurs",
    landingDescription: "Construisez, apprenez et explorez avec RoboQuest. Tutoriels et projets unifiés en une expérience simple.",
    unifiedLibrary: "Bibliothèque Unifiée",
    unifiedLibraryDesc: "Tutoriels, projets et vidéos en un seul endroit.",
    progressTracking: "Suivi des Progrès",
    progressTrackingDesc: "Gagnez des réalisations en apprenant de nouvelles compétences.",
    kidFriendly: "Adapté aux Enfants",
    kidFriendlyDesc: "Une interface sûre et simple pour les étudiants.",
    tutorials: "Tutoriels",
    uptime: "Temps de Fonctionnement",
    accessAnywhere: "Accès Partout",
    allRightsReserved: "Tous droits réservés.",
    
    // Dashboard
    welcomeBack: "Bon retour",
    continueYourJourney: "Continuez votre parcours d'apprentissage",
    recentActivity: "Activité Récente",
    quickAccess: "Accès Rapide",
    
    // Settings
    settingsTitle: "Paramètres",
    customizeExperience: "Personnalisez votre expérience RoboQuest",
    accountInformation: "Informations du Compte",
    accountInfoDesc: "Vos informations personnelles et détails du compte",
    learningPreferences: "Préférences d'Apprentissage",
    learningPreferencesDesc: "Personnalisez votre expérience d'apprentissage",
    appearance: "Apparence",
    appearanceDesc: "Personnalisez l'apparence de RoboQuest",
    audioSettings: "Paramètres Audio",
    audioSettingsDesc: "Contrôlez les sons et la musique dans RoboQuest",
    notifications: "Notifications",
    notificationsDesc: "Gérez vos préférences de notification",
    privacySecurity: "Confidentialité et Sécurité",
    privacySecurityDesc: "Votre protection des données et sécurité du compte",
    language: "Langue",
    dailyGoal: "Objectif Quotidien d'Apprentissage",
    theme: "Thème",
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",
    autoMode: "Auto (Suivre le Système)",
    soundEffects: "Effets Sonores",
    soundEffectsDesc: "Jouer des sons pour les clics et les réalisations",
    backgroundMusic: "Musique de Fond",
    backgroundMusicDesc: "Jouer de la musique ambiante pendant l'apprentissage",
    pushNotifications: "Notifications Push",
    pushNotificationsDesc: "Recevoir des notifications pour les réalisations et rappels",
    emailUpdates: "Mises à Jour par Email",
    emailUpdatesDesc: "Recevoir des mises à jour de progrès et annonces de nouveaux cours",
    parentNotifications: "Notifications Parents",
    parentNotificationsDesc: "Envoyer des rapports de progrès à l'email du parent/tuteur",
    dataProtection: "Protection des Données",
    dataProtectionDesc: "Vos données d'apprentissage sont stockées en sécurité et jamais partagées avec des tiers.",
    coppaCompliant: "Conforme COPPA",
    coppaCompliantDesc: "RoboQuest suit toutes les directives de protection de la vie privée des enfants.",
    saveChanges: "Enregistrer les Modifications",
    
    // Common phrases
    enterFirstName: "Entrez votre prénom",
    enterLastName: "Entrez votre nom de famille",
    enterEmail: "Entrez votre email",
    parentGuardianEmail: "Email du parent ou tuteur",
    parentEmailDesc: "Utilisé pour les mises à jour de progrès et notifications importantes",
    lessonsPerDay: "leçons par jour",
    
    // Loading states
    loadingAdventure: "Chargement de votre aventure RoboQuest...",
    loadingSettings: "Chargement des paramètres...",
    
    // Additional common terms
    upload: "Télécharger",
    adminDashboard: "Tableau de Bord Admin",
    learningPlatform: "Plateforme d'Apprentissage",
    keepLearning: "Continuez à apprendre et à construire des choses incroyables !",
    adminModeActive: "Mode Admin Actif",
    overviewQuickActions: "Aperçu et actions rapides",
    youtubeVideoLibrary: "Bibliothèque vidéo YouTube",
    handsOnExercises: "Exercices pratiques",
    analyticsStats: "Analyses et statistiques",
    badgesCertificates: "Badges et certificats",
    roboquestChannelContent: "Contenu de la chaîne RoboQuest",
    meetTheTeam: "Rencontrez l'équipe derrière RoboQuest",
    accountPreferences: "Préférences du compte",
  },
  
  hi: {
    // Navigation & General
    roboquest: "रोबोक्वेस्ट",
    dashboard: "डैशबोर्ड",
    courses: "कोर्स",
    tutorials: "ट्यूटोरियल",
    practice: "अभ्यास",
    progress: "प्रगति",
    achievements: "उपलब्धियां",
    settings: "सेटिंग्स",
    signOut: "साइन आउट",
    signIn: "साइन इन",
    signUp: "साइन अप",
    login: "लॉग इन",
    register: "रजिस्टर",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    firstName: "पहला नाम",
    lastName: "अंतिम नाम",
    parentEmail: "माता-पिता/अभिभावक ईमेल",
    save: "सेव करें",
    saved: "सेव हो गया!",
    cancel: "रद्द करें",
    close: "बंद करें",
    back: "वापस",
    next: "अगला",
    previous: "पिछला",
    loading: "लोड हो रहा है",
    
    // Landing Page
    landingTitle: "सीखने का ऑपरेटिंग सिस्टम",
    landingSubtitle: "युवा निर्माताओं के लिए",
    landingDescription: "रोबोक्वेस्ट के साथ बनाएं, सीखें और खोजें। ट्यूटोरियल और प्रोजेक्ट्स एक सरल अनुभव में एकीकृत।",
    unifiedLibrary: "एकीकृत लाइब्रेरी",
    unifiedLibraryDesc: "ट्यूटोरियल, प्रोजेक्ट्स और वीडियो एक ही जगह।",
    progressTracking: "प्रगति ट्रैकिंग",
    progressTrackingDesc: "नए कौशल सीखते समय उपलब्धियां अर्जित करें।",
    kidFriendly: "बच्चों के लिए उपयुक्त",
    kidFriendlyDesc: "छात्रों के लिए एक सुरक्षित, सरल इंटरफेस।",
    tutorials: "ट्यूटोरियल",
    uptime: "अपटाइम",
    accessAnywhere: "कहीं भी पहुंच",
    allRightsReserved: "सभी अधिकार सुरक्षित।",
    
    // Dashboard
    welcomeBack: "वापस स्वागत है",
    continueYourJourney: "अपनी सीखने की यात्रा जारी रखें",
    recentActivity: "हाल की गतिविधि",
    quickAccess: "त्वरित पहुंच",
    
    // Settings
    settingsTitle: "सेटिंग्स",
    customizeExperience: "अपने रोबोक्वेस्ट अनुभव को अनुकूलित करें",
    accountInformation: "खाता जानकारी",
    accountInfoDesc: "आपकी व्यक्तिगत जानकारी और खाता विवरण",
    learningPreferences: "सीखने की प्राथमिकताएं",
    learningPreferencesDesc: "अपने सीखने के अनुभव को अनुकूलित करें",
    appearance: "दिखावट",
    appearanceDesc: "रोबोक्वेस्ट के रूप और अनुभव को अनुकूलित करें",
    audioSettings: "ऑडियो सेटिंग्स",
    audioSettingsDesc: "रोबोक्वेस्ट में ध्वनि और संगीत को नियंत्रित करें",
    notifications: "सूचनाएं",
    notificationsDesc: "अपनी सूचना प्राथमिकताओं का प्रबंधन करें",
    privacySecurity: "गोपनीयता और सुरक्षा",
    privacySecurityDesc: "आपकी डेटा सुरक्षा और खाता सुरक्षा",
    language: "भाषा",
    dailyGoal: "दैनिक सीखने का लक्ष्य",
    theme: "थीम",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    autoMode: "ऑटो (सिस्टम का पालन करें)",
    soundEffects: "ध्वनि प्रभाव",
    soundEffectsDesc: "बटन क्लिक और उपलब्धियों के लिए ध्वनि चलाएं",
    backgroundMusic: "पृष्ठभूमि संगीत",
    backgroundMusicDesc: "सीखते समय परिवेशी संगीत चलाएं",
    pushNotifications: "पुश सूचनाएं",
    pushNotificationsDesc: "उपलब्धियों और अनुस्मारक के लिए सूचनाएं प्राप्त करें",
    emailUpdates: "ईमेल अपडेट",
    emailUpdatesDesc: "प्रगति अपडेट और नए कोर्स की घोषणाएं प्राप्त करें",
    parentNotifications: "माता-पिता सूचनाएं",
    parentNotificationsDesc: "माता-पिता/अभिभावक ईमेल पर प्रगति रिपोर्ट भेजें",
    dataProtection: "डेटा सुरक्षा",
    dataProtectionDesc: "आपके सीखने का डेटा सुरक्षित रूप से संग्रहीत है और कभी भी तीसरे पक्ष के साथ साझा नहीं किया जाता।",
    coppaCompliant: "COPPA अनुपालित",
    coppaCompliantDesc: "रोबोक्वेस्ट सभी बच्चों की गोपनीयता सुरक्षा दिशानिर्देशों का पालन करता है।",
    saveChanges: "परिवर्तन सहेजें",
    
    // Common phrases
    enterFirstName: "अपना पहला नाम दर्ज करें",
    enterLastName: "अपना अंतिम नाम दर्ज करें",
    enterEmail: "अपना ईमेल दर्ज करें",
    parentGuardianEmail: "माता-पिता या अभिभावक ईमेल",
    parentEmailDesc: "प्रगति अपडेट और महत्वपूर्ण सूचनाओं के लिए उपयोग किया जाता है",
    lessonsPerDay: "प्रति दिन पाठ",
    
    // Loading states
    loadingAdventure: "आपका रोबोक्वेस्ट साहसिक कार्य लोड हो रहा है...",
    loadingSettings: "सेटिंग्स लोड हो रही हैं...",
    
    // Additional common terms
    upload: "अपलोड",
    adminDashboard: "एडमिन डैशबोर्ड",
    learningPlatform: "लर्निंग प्लेटफॉर्म",
    keepLearning: "सीखते रहें और अद्भुत चीजें बनाते रहें!",
    adminModeActive: "एडमिन मोड सक्रिय",
    overviewQuickActions: "अवलोकन और त्वरित कार्य",
    youtubeVideoLibrary: "YouTube वीडियो लाइब्रेरी",
    handsOnExercises: "व्यावहारिक अभ्यास",
    analyticsStats: "विश्लेषण और आंकड़े",
    badgesCertificates: "बैज और प्रमाणपत्र",
    roboquestChannelContent: "रोबोक्वेस्ट चैनल सामग्री",
    meetTheTeam: "रोबोक्वेस्ट के पीछे की टीम से मिलें",
    accountPreferences: "खाता प्राथमिकताएं",
  },
  
  te: {
    // Navigation & General
    roboquest: "రోబోక్వెస్ట్",
    dashboard: "డాష్‌బోర్డ్",
    courses: "కోర్సులు",
    tutorials: "ట్యుటోరియల్స్",
    practice: "అభ్యాసం",
    progress: "పురోగతి",
    achievements: "సాధనలు",
    settings: "సెట్టింగ్స్",
    signOut: "సైన్ అవుట్",
    signIn: "సైన్ ఇన్",
    signUp: "సైన్ అప్",
    login: "లాగిన్",
    register: "రిజిస్టర్",
    email: "ఈమెయిల్",
    password: "పాస్‌వర్డ్",
    confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
    firstName: "మొదటి పేరు",
    lastName: "చివరి పేరు",
    parentEmail: "తల్లిదండ్రుల/సంరక్షకుల ఈమెయిల్",
    save: "సేవ్ చేయండి",
    saved: "సేవ్ అయ్యింది!",
    cancel: "రద్దు చేయండి",
    close: "మూసివేయండి",
    back: "వెనుకకు",
    next: "తదుపరి",
    previous: "మునుపటి",
    loading: "లోడ్ అవుతోంది",
    
    // Landing Page
    landingTitle: "లెర్నింగ్ ఆపరేటింగ్ సిస్టమ్",
    landingSubtitle: "యువ నిర్మాతల కోసం",
    landingDescription: "రోబోక్వెస్ట్‌తో నిర్మించండి, నేర్చుకోండి మరియు అన్వేషించండి. ట్యుటోరియల్స్ మరియు ప్రాజెక్ట్‌లు ఒక సరళమైన అనుభవంలో ఏకీకృతం.",
    unifiedLibrary: "ఏకీకృత లైబ్రరీ",
    unifiedLibraryDesc: "ట్యుటోరియల్స్, ప్రాజెక్ట్‌లు మరియు వీడియోలు ఒకే చోట.",
    progressTracking: "పురోగతి ట్రాకింగ్",
    progressTrackingDesc: "కొత్త నైపుణ్యాలు నేర్చుకునేటప్పుడు సాధనలను సంపాదించండి.",
    kidFriendly: "పిల్లలకు అనుకూలం",
    kidFriendlyDesc: "విద్యార్థుల కోసం సురక్షితమైన, సరళమైన ఇంటర్‌ఫేస్.",
    tutorials: "ట్యుటోరియల్స్",
    uptime: "అప్‌టైమ్",
    accessAnywhere: "ఎక్కడైనా యాక్సెస్",
    allRightsReserved: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    
    // Dashboard
    welcomeBack: "తిరిగి స్వాగతం",
    continueYourJourney: "మీ నేర్చుకునే ప్రయాణాన్ని కొనసాగించండి",
    recentActivity: "ఇటీవలి కార్యకలాపం",
    quickAccess: "త్వరిత యాక్సెస్",
    
    // Settings
    settingsTitle: "సెట్టింగ్స్",
    customizeExperience: "మీ రోబోక్వెస్ట్ అనుభవాన్ని అనుకూలీకరించండి",
    accountInformation: "ఖాతా సమాచారం",
    accountInfoDesc: "మీ వ్యక్తిగత సమాచారం మరియు ఖాతా వివరాలు",
    learningPreferences: "నేర్చుకునే ప్రాధాన్యతలు",
    learningPreferencesDesc: "మీ నేర్చుకునే అనుభవాన్ని అనుకూలీకరించండి",
    appearance: "రూపాన్ని",
    appearanceDesc: "రోబోక్వెస్ట్ యొక్క రూపాన్ని మరియు అనుభవాన్ని అనుకూలీకరించండి",
    audioSettings: "ఆడియో సెట్టింగ్స్",
    audioSettingsDesc: "రోబోక్వెస్ట్‌లో ధ్వనులు మరియు సంగీతాన్ని నియంత్రించండి",
    notifications: "నోటిఫికేషన్లు",
    notificationsDesc: "మీ నోటిఫికేషన్ ప్రాధాన్యతలను నిర్వహించండి",
    privacySecurity: "గోప్యత మరియు భద్రత",
    privacySecurityDesc: "మీ డేటా రక్షణ మరియు ఖాతా భద్రత",
    language: "భాష",
    dailyGoal: "రోజువారీ నేర్చుకునే లక్ష్యం",
    theme: "థీమ్",
    lightMode: "లైట్ మోడ్",
    darkMode: "డార్క్ మోడ్",
    autoMode: "ఆటో (సిస్టమ్‌ను అనుసరించండి)",
    soundEffects: "ధ్వని ప్రభావాలు",
    soundEffectsDesc: "బటన్ క్లిక్‌లు మరియు సాధనల కోసం ధ్వనులు ప్లే చేయండి",
    backgroundMusic: "నేపథ్య సంగీతం",
    backgroundMusicDesc: "నేర్చుకునేటప్పుడు పరిసర సంగీతం ప్లే చేయండి",
    pushNotifications: "పుష్ నోటిఫికేషన్లు",
    pushNotificationsDesc: "సాధనలు మరియు రిమైండర్ల కోసం నోటిఫికేషన్లు స్వీకరించండి",
    emailUpdates: "ఈమెయిల్ అప్‌డేట్లు",
    emailUpdatesDesc: "పురోగతి అప్‌డేట్లు మరియు కొత్త కోర్సు ప్రకటనలను స్వీకరించండి",
    parentNotifications: "తల్లిదండ్రుల నోటిఫికేషన్లు",
    parentNotificationsDesc: "తల్లిదండ్రుల/సంరక్షకుల ఈమెయిల్‌కు పురోగతి నివేదికలను పంపండి",
    dataProtection: "డేటా రక్షణ",
    dataProtectionDesc: "మీ నేర్చుకునే డేటా సురక్షితంగా నిల్వ చేయబడుతుంది మరియు మూడవ పక్షాలతో ఎప్పుడూ భాగస్వామ్యం చేయబడదు.",
    coppaCompliant: "COPPA అనుగుణం",
    coppaCompliantDesc: "రోబోక్వెస్ట్ అన్ని పిల్లల గోప్యత రక్షణ మార్గదర్శకాలను అనుసరిస్తుంది.",
    saveChanges: "మార్పులను సేవ్ చేయండి",
    
    // Common phrases
    enterFirstName: "మీ మొదటి పేరును నమోదు చేయండి",
    enterLastName: "మీ చివరి పేరును నమోదు చేయండి",
    enterEmail: "మీ ఈమెయిల్‌ను నమోదు చేయండి",
    parentGuardianEmail: "తల్లిదండ్రుల లేదా సంరక్షకుల ఈమెయిల్",
    parentEmailDesc: "పురోగతి అప్‌డేట్లు మరియు ముఖ్యమైన నోటిఫికేషన్ల కోసం ఉపయోగించబడుతుంది",
    lessonsPerDay: "రోజుకు పాఠాలు",
    
    // Loading states
    loadingAdventure: "మీ రోబోక్వెస్ట్ సాహసికత లోడ్ అవుతోంది...",
    loadingSettings: "సెట్టింగ్స్ లోడ్ అవుతున్నాయి...",
    
    // Additional common terms
    upload: "అప్‌లోడ్",
    adminDashboard: "అడ్మిన్ డాష్‌బోర్డ్",
    learningPlatform: "లెర్నింగ్ ప్లాట్‌ఫార్మ్",
    keepLearning: "నేర్చుకోవడం మరియు అద్భుతమైన విషయాలను నిర్మించడం కొనసాగించండి!",
    adminModeActive: "అడ్మిన్ మోడ్ యాక్టివ్",
    overviewQuickActions: "అవలోకనం మరియు త్వరిత చర్యలు",
    youtubeVideoLibrary: "YouTube వీడియో లైబ్రరీ",
    handsOnExercises: "ప్రాక్టికల్ వ్యాయామాలు",
    analyticsStats: "విశ్లేషణలు మరియు గణాంకాలు",
    badgesCertificates: "బ్యాడ్జ్‌లు మరియు సర్టిఫికేట్లు",
    roboquestChannelContent: "రోబోక్వెస్ట్ చానెల్ కంటెంట్",
    meetTheTeam: "రోబోక్వెస్ట్ వెనుక ఉన్న టీమ్‌ను కలవండి",
    accountPreferences: "ఖాతా ప్రాధాన్యతలు",
  },
  
  ta: {
    // Navigation & General
    roboquest: "ரோபோக்வெஸ்ட்",
    dashboard: "டாஷ்போர்டு",
    courses: "படிப்புகள்",
    tutorials: "பயிற்சிகள்",
    practice: "பயிற்சி",
    progress: "முன்னேற்றம்",
    achievements: "சாதனைகள்",
    settings: "அமைப்புகள்",
    signOut: "வெளியேறு",
    signIn: "உள்நுழை",
    signUp: "பதிவு செய்",
    login: "உள்நுழைவு",
    register: "பதிவு",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்து",
    firstName: "முதல் பெயர்",
    lastName: "கடைசி பெயர்",
    parentEmail: "பெற்றோர்/பாதுகாவலர் மின்னஞ்சல்",
    save: "சேமி",
    saved: "சேமிக்கப்பட்டது!",
    cancel: "ரத்து செய்",
    close: "மூடு",
    back: "திரும்பு",
    next: "அடுத்து",
    previous: "முந்தைய",
    loading: "ஏற்றுகிறது",
    
    // Landing Page
    landingTitle: "கற்றல் இயக்க முறைமை",
    landingSubtitle: "இளம் உருவாக்குநர்களுக்கு",
    landingDescription: "ரோபோக்வெஸ்ட்டுடன் உருவாக்கு, கற்று மற்றும் ஆராய். பயிற்சிகள் மற்றும் திட்டங்கள் ஒரே எளிய அனுபவத்தில் ஒன்றிணைக்கப்பட்டுள்ளன.",
    unifiedLibrary: "ஒருங்கிணைந்த நூலகம்",
    unifiedLibraryDesc: "பயிற்சிகள், திட்டங்கள் மற்றும் வீடியோக்கள் ஒரே இடத்தில்.",
    progressTracking: "முன்னேற்ற கண்காணிப்பு",
    progressTrackingDesc: "புதிய திறன்களை கற்கும்போது சாதனைகளை பெறுங்கள்.",
    kidFriendly: "குழந்தைகளுக்கு ஏற்றது",
    kidFriendlyDesc: "மாணவர்களுக்கு பாதுகாப்பான, எளிய இடைமுகம்.",
    tutorials: "பயிற்சிகள்",
    uptime: "செயல்பாட்டு நேரம்",
    accessAnywhere: "எங்கும் அணுகல்",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.",
    
    // Dashboard
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    continueYourJourney: "உங்கள் கற்றல் பயணத்தை தொடருங்கள்",
    recentActivity: "சமீபத்திய செயல்பாடு",
    quickAccess: "விரைவு அணுகல்",
    
    // Settings
    settingsTitle: "அமைப்புகள்",
    customizeExperience: "உங்கள் ரோபோக்வெஸ்ட் அனுபவத்தை தனிப்பயனாக்குங்கள்",
    accountInformation: "கணக்கு தகவல்",
    accountInfoDesc: "உங்கள் தனிப்பட்ட தகவல் மற்றும் கணக்கு விவரங்கள்",
    learningPreferences: "கற்றல் விருப்பத்தேர்வுகள்",
    learningPreferencesDesc: "உங்கள் கற்றல் அனுபவத்தை தனிப்பயனாக்குங்கள்",
    appearance: "தோற்றம்",
    appearanceDesc: "ரோபோக்வெஸ்ட்டின் தோற்றம் மற்றும் உணர்வை தனிப்பயனாக்குங்கள்",
    audioSettings: "ஆடியோ அமைப்புகள்",
    audioSettingsDesc: "ரோபோக்வெஸ்ட்டில் ஒலிகள் மற்றும் இசையை கட்டுப்படுத்துங்கள்",
    notifications: "அறிவிப்புகள்",
    notificationsDesc: "உங்கள் அறிவிப்பு விருப்பத்தேர்வுகளை நிர்வகிக்கவும்",
    privacySecurity: "தனியுரிமை மற்றும் பாதுகாப்பு",
    privacySecurityDesc: "உங்கள் தரவு பாதுகாப்பு மற்றும் கணக்கு பாதுகாப்பு",
    language: "மொழி",
    dailyGoal: "தினசரி கற்றல் இலக்கு",
    theme: "தீம்",
    lightMode: "ஒளி பயன்முறை",
    darkMode: "இருள் பயன்முறை",
    autoMode: "ஆட்டோ (முறைமையை பின்பற்றவும்)",
    soundEffects: "ஒலி விளைவுகள்",
    soundEffectsDesc: "பொத்தான் கிளிக்குகள் மற்றும் சாதனைகளுக்கு ஒலிகளை இயக்கவும்",
    backgroundMusic: "பின்னணி இசை",
    backgroundMusicDesc: "கற்கும்போது சுற்றுப்புற இசையை இயக்கவும்",
    pushNotifications: "புஷ் அறிவிப்புகள்",
    pushNotificationsDesc: "சாதனைகள் மற்றும் நினைவூட்டல்களுக்கான அறிவிப்புகளை பெறவும்",
    emailUpdates: "மின்னஞ்சல் புதுப்பிப்புகள்",
    emailUpdatesDesc: "முன்னேற்ற புதுப்பிப்புகள் மற்றும் புதிய படிப்பு அறிவிப்புகளை பெறவும்",
    parentNotifications: "பெற்றோர் அறிவிப்புகள்",
    parentNotificationsDesc: "பெற்றோர்/பாதுகாவலர் மின்னஞ்சலுக்கு முன்னேற்ற அறிக்கைகளை அனுப்பவும்",
    dataProtection: "தரவு பாதுகாப்பு",
    dataProtectionDesc: "உங்கள் கற்றல் தரவு பாதுகாப்பாக சேமிக்கப்பட்டு மூன்றாம் தரப்பினருடன் ஒருபோதும் பகிரப்படாது.",
    coppaCompliant: "COPPA இணக்கம்",
    coppaCompliantDesc: "ரோபோக்வெஸ்ட் அனைத்து குழந்தைகளின் தனியுரிமை பாதுகாப்பு வழிகாட்டுதல்களை பின்பற்றுகிறது.",
    saveChanges: "மாற்றங்களை சேமிக்கவும்",
    
    // Common phrases
    enterFirstName: "உங்கள் முதல் பெயரை உள்ளிடவும்",
    enterLastName: "உங்கள் கடைசி பெயரை உள்ளிடவும்",
    enterEmail: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    parentGuardianEmail: "பெற்றோர் அல்லது பாதுகாவலர் மின்னஞ்சல்",
    parentEmailDesc: "முன்னேற்ற புதுப்பிப்புகள் மற்றும் முக்கியமான அறிவிப்புகளுக்கு பயன்படுத்தப்படுகிறது",
    lessonsPerDay: "ஒரு நாளைக்கு பாடங்கள்",
    
    // Loading states
    loadingAdventure: "உங்கள் ரோபோக்வெஸ்ட் சாகசம் ஏற்றப்படுகிறது...",
    loadingSettings: "அமைப்புகள் ஏற்றப்படுகின்றன...",
    
    // Additional common terms
    upload: "பதிவேற்று",
    adminDashboard: "நிர்வாக டாஷ்போர்டு",
    learningPlatform: "கற்றல் தளம்",
    keepLearning: "கற்றல் மற்றும் அற்புதமான விஷயங்களை உருவாக்குவதைத் தொடருங்கள்!",
    adminModeActive: "நிர்வாக பயன்முறை செயலில்",
    overviewQuickActions: "கண்ணோட்டம் மற்றும் விரைவு செயல்கள்",
    youtubeVideoLibrary: "YouTube வீடியோ நூலகம்",
    handsOnExercises: "நடைமுறை பயிற்சிகள்",
    analyticsStats: "பகுப்பாய்வுகள் மற்றும் புள்ளிவிவரங்கள்",
    badgesCertificates: "பேட்ஜ்கள் மற்றும் சான்றிதழ்கள்",
    roboquestChannelContent: "ரோபோக்வெஸ்ட் சேனல் உள்ளடக்கம்",
    meetTheTeam: "ரோபோக்வெஸ்ட்டின் பின்னணியில் உள்ள குழுவை சந்திக்கவும்",
    accountPreferences: "கணக்கு விருப்பத்தேர்வுகள்",
  },
  
  gu: {
    // Navigation & General
    roboquest: "રોબોક્વેસ્ટ",
    dashboard: "ડેશબોર્ડ",
    courses: "કોર્સ",
    tutorials: "ટ્યુટોરિયલ્સ",
    practice: "પ્રેક્ટિસ",
    progress: "પ્રગતિ",
    achievements: "સિદ્ધિઓ",
    settings: "સેટિંગ્સ",
    signOut: "સાઇન આઉટ",
    signIn: "સાઇન ઇન",
    signUp: "સાઇન અપ",
    login: "લોગ ઇન",
    register: "રજિસ્ટર",
    email: "ઇમેઇલ",
    password: "પાસવર્ડ",
    confirmPassword: "પાસવર્ડની પુષ્ટિ કરો",
    firstName: "પ્રથમ નામ",
    lastName: "છેલ્લું નામ",
    parentEmail: "માતા-પિતા/વાલીનું ઇમેઇલ",
    save: "સેવ કરો",
    saved: "સેવ થયું!",
    cancel: "રદ કરો",
    close: "બંધ કરો",
    back: "પાછળ",
    next: "આગળ",
    previous: "પહેલાં",
    loading: "લોડ થઈ રહ્યું છે",
    
    // Landing Page
    landingTitle: "લર્નિંગ ઓપરેટિંગ સિસ્ટમ",
    landingSubtitle: "યુવા નિર્માતાઓ માટે",
    landingDescription: "રોબોક્વેસ્ટ સાથે બનાવો, શીખો અને અન્વેષણ કરો. ટ્યુટોરિયલ્સ અને પ્રોજેક્ટ્સ એક સરળ અનુભવમાં એકીકૃત.",
    unifiedLibrary: "એકીકૃત લાઇબ્રેરી",
    unifiedLibraryDesc: "ટ્યુટોરિયલ્સ, પ્રોજેક્ટ્સ અને વિડિયો એક જ જગ્યાએ.",
    progressTracking: "પ્રગતિ ટ્રેકિંગ",
    progressTrackingDesc: "નવી કુશળતા શીખતી વખતે સિદ્ધિઓ મેળવો.",
    kidFriendly: "બાળકો માટે અનુકૂળ",
    kidFriendlyDesc: "વિદ્યાર્થીઓ માટે સુરક્ષિત, સરળ ઇન્ટરફેસ.",
    tutorials: "ટ્યુટોરિયલ્સ",
    uptime: "અપટાઇમ",
    accessAnywhere: "ગમે ત્યાં પહોંચ",
    allRightsReserved: "બધા અધિકારો સુરક્ષિત.",
    
    // Dashboard
    welcomeBack: "પાછા આવવા બદલ સ્વાગત",
    continueYourJourney: "તમારી શીખવાની યાત્રા ચાલુ રાખો",
    recentActivity: "તાજેતરની પ્રવૃત્તિ",
    quickAccess: "ઝડપી પહોંચ",
    
    // Settings
    settingsTitle: "સેટિંગ્સ",
    customizeExperience: "તમારા રોબોક્વેસ્ટ અનુભવને કસ્ટમાઇઝ કરો",
    accountInformation: "ખાતાની માહિતી",
    accountInfoDesc: "તમારી વ્યક્તિગત માહિતી અને ખાતાની વિગતો",
    learningPreferences: "શીખવાની પસંદગીઓ",
    learningPreferencesDesc: "તમારા શીખવાના અનુભવને કસ્ટમાઇઝ કરો",
    appearance: "દેખાવ",
    appearanceDesc: "રોબોક્વેસ્ટના દેખાવ અને અનુભવને કસ્ટમાઇઝ કરો",
    audioSettings: "ઓડિયો સેટિંગ્સ",
    audioSettingsDesc: "રોબોક્વેસ્ટમાં અવાજો અને સંગીતને નિયંત્રિત કરો",
    notifications: "સૂચનાઓ",
    notificationsDesc: "તમારી સૂચના પસંદગીઓનું સંચાલન કરો",
    privacySecurity: "ગોપનીયતા અને સુરક્ષા",
    privacySecurityDesc: "તમારી ડેટા સુરક્ષા અને ખાતાની સુરક્ષા",
    language: "ભાષા",
    dailyGoal: "દૈનિક શીખવાનું લક્ષ્ય",
    theme: "થીમ",
    lightMode: "લાઇટ મોડ",
    darkMode: "ડાર્ક મોડ",
    autoMode: "ઓટો (સિસ્ટમને અનુસરો)",
    soundEffects: "અવાજ અસરો",
    soundEffectsDesc: "બટન ક્લિક્સ અને સિદ્ધિઓ માટે અવાજો વગાડો",
    backgroundMusic: "પૃષ્ઠભૂમિ સંગીત",
    backgroundMusicDesc: "શીખતી વખતે વાતાવરણીય સંગીત વગાડો",
    pushNotifications: "પુશ સૂચનાઓ",
    pushNotificationsDesc: "સિદ્ધિઓ અને રિમાઇન્ડર માટે સૂચનાઓ પ્રાપ્ત કરો",
    emailUpdates: "ઇમેઇલ અપડેટ્સ",
    emailUpdatesDesc: "પ્રગતિ અપડેટ્સ અને નવા કોર્સની જાહેરાતો પ્રાપ્ત કરો",
    parentNotifications: "માતા-પિતાની સૂચનાઓ",
    parentNotificationsDesc: "માતા-પિતા/વાલીના ઇમેઇલ પર પ્રગતિ રિપોર્ટ મોકલો",
    dataProtection: "ડેટા સુરક્ષા",
    dataProtectionDesc: "તમારા શીખવાનો ડેટા સુરક્ષિત રીતે સંગ્રહિત છે અને ક્યારેય ત્રીજા પક્ષો સાથે શેર કરવામાં આવતો નથી.",
    coppaCompliant: "COPPA અનુપાલન",
    coppaCompliantDesc: "રોબોક્વેસ્ટ બાળકોની ગોપનીયતા સુરક્ષાની બધી માર્ગદર્શિકાઓનું પાલન કરે છે.",
    saveChanges: "ફેરફારો સેવ કરો",
    
    // Common phrases
    enterFirstName: "તમારું પ્રથમ નામ દાખલ કરો",
    enterLastName: "તમારું છેલ્લું નામ દાખલ કરો",
    enterEmail: "તમારું ઇમેઇલ દાખલ કરો",
    parentGuardianEmail: "માતા-પિતા અથવા વાલીનું ઇમેઇલ",
    parentEmailDesc: "પ્રગતિ અપડેટ્સ અને મહત્વપૂર્ણ સૂચનાઓ માટે ઉપયોગ થાય છે",
    lessonsPerDay: "દિવસ દીઠ પાઠ",
    
    // Loading states
    loadingAdventure: "તમારું રોબોક્વેસ્ટ સાહસ લોડ થઈ રહ્યું છે...",
    loadingSettings: "સેટિંગ્સ લોડ થઈ રહી છે...",
    
    // Additional common terms
    upload: "અપલોડ",
    adminDashboard: "એડમિન ડેશબોર્ડ",
    learningPlatform: "લર્નિંગ પ્લેટફોર્મ",
    keepLearning: "શીખવાનું અને અદ્ભુત વસ્તુઓ બનાવવાનું ચાલુ રાખો!",
    adminModeActive: "એડમિન મોડ સક્રિય",
    overviewQuickActions: "ઝાંખી અને ઝડપી ક્રિયાઓ",
    youtubeVideoLibrary: "YouTube વિડિયો લાઇબ્રેરી",
    handsOnExercises: "વ્યવહારિક કસરતો",
    analyticsStats: "વિશ્લેષણ અને આંકડાકીય માહિતી",
    badgesCertificates: "બેજ અને પ્રમાણપત્રો",
    roboquestChannelContent: "રોબોક્વેસ્ટ ચેનલ સામગ્રી",
    meetTheTeam: "રોબોક્વેસ્ટ પાછળની ટીમને મળો",
    accountPreferences: "ખાતાની પસંદગીઓ",
  },
  
  mr: {
    // Navigation & General
    roboquest: "रोबोक्वेस्ट",
    dashboard: "डॅशबोर्ड",
    courses: "कोर्स",
    tutorials: "ट्यूटोरियल्स",
    practice: "सराव",
    progress: "प्रगती",
    achievements: "सिद्धी",
    settings: "सेटिंग्स",
    signOut: "साइन आउट",
    signIn: "साइन इन",
    signUp: "साइन अप",
    login: "लॉग इन",
    register: "नोंदणी",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्डची पुष्टी करा",
    firstName: "पहिले नाव",
    lastName: "आडनाव",
    parentEmail: "पालक/संरक्षकाचा ईमेल",
    save: "सेव्ह करा",
    saved: "सेव्ह झाले!",
    cancel: "रद्द करा",
    close: "बंद करा",
    back: "मागे",
    next: "पुढे",
    previous: "मागील",
    loading: "लोड होत आहे",
    
    // Landing Page
    landingTitle: "शिकण्याची ऑपरेटिंग सिस्टीम",
    landingSubtitle: "तरुण निर्मात्यांसाठी",
    landingDescription: "रोबोक्वेस्टसह बनवा, शिका आणि एक्सप्लोर करा. ट्यूटोरियल्स आणि प्रोजेक्ट्स एका सोप्या अनुभवात एकत्रित.",
    unifiedLibrary: "एकीकृत लायब्ररी",
    unifiedLibraryDesc: "ट्यूटोरियल्स, प्रोजेक्ट्स आणि व्हिडिओ एकाच ठिकाणी.",
    progressTracking: "प्रगती ट्रॅकिंग",
    progressTrackingDesc: "नवीन कौशल्ये शिकताना सिद्धी मिळवा.",
    kidFriendly: "मुलांसाठी योग्य",
    kidFriendlyDesc: "विद्यार्थ्यांसाठी सुरक्षित, सोपा इंटरफेस.",
    tutorials: "ट्यूटोरियल्स",
    uptime: "अपटाइम",
    accessAnywhere: "कुठेही प्रवेश",
    allRightsReserved: "सर्व हक्क राखीव.",
    
    // Dashboard
    welcomeBack: "परत आपले स्वागत",
    continueYourJourney: "तुमचा शिकण्याचा प्रवास सुरू ठेवा",
    recentActivity: "अलीकडील क्रियाकलाप",
    quickAccess: "द्रुत प्रवेश",
    
    // Settings
    settingsTitle: "सेटिंग्स",
    customizeExperience: "तुमचा रोबोक्वेस्ट अनुभव कस्टमाइझ करा",
    accountInformation: "खात्याची माहिती",
    accountInfoDesc: "तुमची वैयक्तिक माहिती आणि खात्याचे तपशील",
    learningPreferences: "शिकण्याची प्राधान्ये",
    learningPreferencesDesc: "तुमचा शिकण्याचा अनुभव कस्टमाइझ करा",
    appearance: "दिसणे",
    appearanceDesc: "रोबोक्वेस्टचे दिसणे आणि अनुभव कस्टमाइझ करा",
    audioSettings: "ऑडिओ सेटिंग्स",
    audioSettingsDesc: "रोबोक्वेस्टमध्ये आवाज आणि संगीत नियंत्रित करा",
    notifications: "सूचना",
    notificationsDesc: "तुमच्या सूचना प्राधान्यांचे व्यवस्थापन करा",
    privacySecurity: "गोपनीयता आणि सुरक्षा",
    privacySecurityDesc: "तुमचे डेटा संरक्षण आणि खाते सुरक्षा",
    language: "भाषा",
    dailyGoal: "दैनिक शिकण्याचे लक्ष्य",
    theme: "थीम",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    autoMode: "ऑटो (सिस्टमचे अनुसरण करा)",
    soundEffects: "आवाज प्रभाव",
    soundEffectsDesc: "बटण क्लिक आणि सिद्धींसाठी आवाज वाजवा",
    backgroundMusic: "पार्श्वभूमी संगीत",
    backgroundMusicDesc: "शिकताना वातावरणीय संगीत वाजवा",
    pushNotifications: "पुश सूचना",
    pushNotificationsDesc: "सिद्धी आणि स्मरणपत्रांसाठी सूचना प्राप्त करा",
    emailUpdates: "ईमेल अपडेट्स",
    emailUpdatesDesc: "प्रगती अपडेट्स आणि नवीन कोर्स घोषणा प्राप्त करा",
    parentNotifications: "पालकांच्या सूचना",
    parentNotificationsDesc: "पालक/संरक्षकाच्या ईमेलवर प्रगती अहवाल पाठवा",
    dataProtection: "डेटा संरक्षण",
    dataProtectionDesc: "तुमचा शिकण्याचा डेटा सुरक्षितपणे संग्रहित आहे आणि तृतीय पक्षांसह कधीही सामायिक केला जात नाही.",
    coppaCompliant: "COPPA अनुपालन",
    coppaCompliantDesc: "रोबोक्वेस्ट सर्व मुलांच्या गोपनीयता संरक्षण मार्गदर्शकतत्त्वांचे पालन करते.",
    saveChanges: "बदल सेव्ह करा",
    
    // Common phrases
    enterFirstName: "तुमचे पहिले नाव प्रविष्ट करा",
    enterLastName: "तुमचे आडनाव प्रविष्ट करा",
    enterEmail: "तुमचा ईमेल प्रविष्ट करा",
    parentGuardianEmail: "पालक किंवा संरक्षकाचा ईमेल",
    parentEmailDesc: "प्रगती अपडेट्स आणि महत्त्वाच्या सूचनांसाठी वापरले जाते",
    lessonsPerDay: "दिवसाला धडे",
    
    // Loading states
    loadingAdventure: "तुमचे रोबोक्वेस्ट साहस लोड होत आहे...",
    loadingSettings: "सेटिंग्स लोड होत आहेत...",
    
    // Additional common terms
    upload: "अपलोड",
    adminDashboard: "अ‍ॅडमिन डॅशबोर्ड",
    learningPlatform: "लर्निंग प्लॅटफॉर्म",
    keepLearning: "शिकत राहा आणि आश्चर्यकारक गोष्टी तयार करत राहा!",
    adminModeActive: "अ‍ॅडमिन मोड सक्रिय",
    overviewQuickActions: "विहंगावलोकन आणि जलद क्रिया",
    youtubeVideoLibrary: "YouTube व्हिडिओ लायब्ररी",
    handsOnExercises: "व्यावहारिक व्यायाम",
    analyticsStats: "विश्लेषण आणि आकडेवारी",
    badgesCertificates: "बॅज आणि प्रमाणपत्रे",
    roboquestChannelContent: "रोबोक्वेस्ट चॅनेल सामग्री",
    meetTheTeam: "रोबोक्वेस्ट मागील संघाला भेटा",
    accountPreferences: "खाते प्राधान्ये",
  },
  
  pa: {
    // Navigation & General
    roboquest: "ਰੋਬੋਕ੍ਵੈਸਟ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    courses: "ਕੋਰਸਾਂ",
    tutorials: "ਟਿਊਟੋਰਿਅਲਸ",
    practice: "ਅਭਿਆਸ",
    progress: "ਤਰੱਕੀ",
    achievements: "ਪ੍ਰਾਪਤੀਆਂ",
    settings: "ਸੈਟਿੰਗਜ਼",
    signOut: "ਸਾਈਨ ਆਊਟ",
    signIn: "ਸਾਈਨ ਇਨ",
    signUp: "ਸਾਈਨ ਅੱਪ",
    login: "ਲੌਗ ਇਨ",
    register: "ਰਜਿਸਟਰ",
    email: "ਈਮੇਲ",
    password: "ਪਾਸਵਰਡ",
    confirmPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    firstName: "ਪਹਿਲਾ ਨਾਮ",
    lastName: "ਆਖਰੀ ਨਾਮ",
    parentEmail: "ਮਾਤਾ-ਪਿਤਾ/ਸਰਪ੍ਰਸਤ ਈਮੇਲ",
    save: "ਸੇਵ ਕਰੋ",
    saved: "ਸੇਵ ਹੋ ਗਿਆ!",
    cancel: "ਰੱਦ ਕਰੋ",
    close: "ਬੰਦ ਕਰੋ",
    back: "ਵਾਪਸ",
    next: "ਅਗਲਾ",
    previous: "ਪਿਛਲਾ",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ",
    
    // Landing Page
    landingTitle: "ਸਿੱਖਣ ਦਾ ਆਪਰੇਟਿੰਗ ਸਿਸਟਮ",
    landingSubtitle: "ਨੌਜਵਾਨ ਨਿਰਮਾਤਾਵਾਂ ਲਈ",
    landingDescription: "ਰੋਬੋਕ੍ਵੈਸਟ ਨਾਲ ਬਣਾਓ, ਸਿੱਖੋ ਅਤੇ ਖੋਜੋ। ਟਿਊਟੋਰਿਅਲਸ ਅਤੇ ਪ੍ਰੋਜੈਕਟਸ ਇੱਕ ਸਧਾਰਨ ਤਜਰਬੇ ਵਿੱਚ ਏਕੀਕ੍ਰਿਤ।",
    unifiedLibrary: "ਏਕੀਕ੍ਰਿਤ ਲਾਇਬ੍ਰੇਰੀ",
    unifiedLibraryDesc: "ਟਿਊਟੋਰਿਅਲਸ, ਪ੍ਰੋਜੈਕਟਸ ਅਤੇ ਵੀਡੀਓ ਇੱਕ ਥਾਂ ਤੇ।",
    progressTracking: "ਤਰੱਕੀ ਦੀ ਟਰੈਕਿੰਗ",
    progressTrackingDesc: "ਨਵੇਂ ਹੁਨਰ ਸਿੱਖਦੇ ਸਮੇਂ ਪ੍ਰਾਪਤੀਆਂ ਕਮਾਓ।",
    kidFriendly: "ਬੱਚਿਆਂ ਲਈ ਅਨੁਕੂਲ",
    kidFriendlyDesc: "ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਸੁਰੱਖਿਅਤ, ਸਧਾਰਨ ਇੰਟਰਫੇਸ।",
    tutorials: "ਟਿਊਟੋਰਿਅਲਸ",
    uptime: "ਅੱਪਟਾਈਮ",
    accessAnywhere: "ਕਿਤੇ ਵੀ ਪਹੁੰਚ",
    allRightsReserved: "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ।",
    
    // Dashboard
    welcomeBack: "ਵਾਪਸ ਜੀ ਆਇਆਂ ਨੂੰ",
    continueYourJourney: "ਆਪਣੀ ਸਿੱਖਣ ਦੀ ਯਾਤਰਾ ਜਾਰੀ ਰੱਖੋ",
    recentActivity: "ਹਾਲੀਆ ਗਤੀਵਿਧੀ",
    quickAccess: "ਤੇਜ਼ ਪਹੁੰਚ",
    
    // Settings
    settingsTitle: "ਸੈਟਿੰਗਜ਼",
    customizeExperience: "ਆਪਣੇ ਰੋਬੋਕ੍ਵੈਸਟ ਤਜਰਬੇ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ",
    accountInformation: "ਖਾਤਾ ਜਾਣਕਾਰੀ",
    accountInfoDesc: "ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਅਤੇ ਖਾਤੇ ਦੇ ਵੇਰਵੇ",
    learningPreferences: "ਸਿੱਖਣ ਦੀਆਂ ਤਰਜੀਹਾਂ",
    learningPreferencesDesc: "ਆਪਣੇ ਸਿੱਖਣ ਦੇ ਤਜਰਬੇ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ",
    appearance: "ਦਿੱਖ",
    appearanceDesc: "ਰੋਬੋਕ੍ਵੈਸਟ ਦੀ ਦਿੱਖ ਅਤੇ ਮਹਿਸੂਸ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ",
    audioSettings: "ਆਡੀਓ ਸੈਟਿੰਗਜ਼",
    audioSettingsDesc: "ਰੋਬੋਕ੍ਵੈਸਟ ਵਿੱਚ ਆਵਾਜ਼ਾਂ ਅਤੇ ਸੰਗੀਤ ਨੂੰ ਕੰਟਰੋਲ ਕਰੋ",
    notifications: "ਸੂਚਨਾਵਾਂ",
    notificationsDesc: "ਆਪਣੀਆਂ ਸੂਚਨਾ ਤਰਜੀਹਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
    privacySecurity: "ਗੁਪਤਤਾ ਅਤੇ ਸੁਰੱਖਿਆ",
    privacySecurityDesc: "ਤੁਹਾਡੀ ਡੇਟਾ ਸੁਰੱਖਿਆ ਅਤੇ ਖਾਤਾ ਸੁਰੱਖਿਆ",
    language: "ਭਾਸ਼ਾ",
    dailyGoal: "ਰੋਜ਼ਾਨਾ ਸਿੱਖਣ ਦਾ ਟੀਚਾ",
    theme: "ਥੀਮ",
    lightMode: "ਲਾਈਟ ਮੋਡ",
    darkMode: "ਡਾਰਕ ਮੋਡ",
    autoMode: "ਆਟੋ (ਸਿਸਟਮ ਦੀ ਪਾਲਣਾ ਕਰੋ)",
    soundEffects: "ਆਵਾਜ਼ ਪ੍ਰਭਾਵ",
    soundEffectsDesc: "ਬਟਨ ਕਲਿੱਕਾਂ ਅਤੇ ਪ੍ਰਾਪਤੀਆਂ ਲਈ ਆਵਾਜ਼ਾਂ ਚਲਾਓ",
    backgroundMusic: "ਪਿਛੋਕੜ ਸੰਗੀਤ",
    backgroundMusicDesc: "ਸਿੱਖਦੇ ਸਮੇਂ ਮਾਹੌਲੀ ਸੰਗੀਤ ਚਲਾਓ",
    pushNotifications: "ਪੁਸ਼ ਸੂਚਨਾਵਾਂ",
    pushNotificationsDesc: "ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਯਾਦ ਦਿਵਾਉਣ ਵਾਲੀਆਂ ਲਈ ਸੂਚਨਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    emailUpdates: "ਈਮੇਲ ਅੱਪਡੇਟਸ",
    emailUpdatesDesc: "ਤਰੱਕੀ ਅੱਪਡੇਟਸ ਅਤੇ ਨਵੇਂ ਕੋਰਸ ਦੀਆਂ ਘੋਸ਼ਣਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    parentNotifications: "ਮਾਤਾ-ਪਿਤਾ ਸੂਚਨਾਵਾਂ",
    parentNotificationsDesc: "ਮਾਤਾ-ਪਿਤਾ/ਸਰਪ੍ਰਸਤ ਈਮੇਲ ਤੇ ਤਰੱਕੀ ਰਿਪੋਰਟਾਂ ਭੇਜੋ",
    dataProtection: "ਡੇਟਾ ਸੁਰੱਖਿਆ",
    dataProtectionDesc: "ਤੁਹਾਡਾ ਸਿੱਖਣ ਦਾ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਰੂਪ ਵਿੱਚ ਸਟੋਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕਦੇ ਵੀ ਤੀਜੀ ਪਾਰਟੀਆਂ ਨਾਲ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ।",
    coppaCompliant: "COPPA ਅਨੁਪਾਲਨ",
    coppaCompliantDesc: "ਰੋਬੋਕ੍ਵੈਸਟ ਸਾਰੇ ਬੱਚਿਆਂ ਦੀ ਗੁਪਤਤਾ ਸੁਰੱਖਿਆ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।",
    saveChanges: "ਤਬਦੀਲੀਆਂ ਸੇਵ ਕਰੋ",
    
    // Common phrases
    enterFirstName: "ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    enterLastName: "ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਰਜ ਕਰੋ",
    enterEmail: "ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    parentGuardianEmail: "ਮਾਤਾ-ਪਿਤਾ ਜਾਂ ਸਰਪ੍ਰਸਤ ਈਮੇਲ",
    parentEmailDesc: "ਤਰੱਕੀ ਅੱਪਡੇਟਸ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਸੂਚਨਾਵਾਂ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ",
    lessonsPerDay: "ਦਿਨ ਪ੍ਰਤੀ ਪਾਠ",
    
    // Loading states
    loadingAdventure: "ਤੁਹਾਡਾ ਰੋਬੋਕ੍ਵੈਸਟ ਸਾਹਸ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    loadingSettings: "ਸੈਟਿੰਗਜ਼ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    
    // Additional common terms
    upload: "ਅੱਪਲੋਡ",
    adminDashboard: "ਐਡਮਿਨ ਡੈਸ਼ਬੋਰਡ",
    learningPlatform: "ਲਰਨਿੰਗ ਪਲੇਟਫਾਰਮ",
    keepLearning: "ਸਿੱਖਣਾ ਅਤੇ ਸ਼ਾਨਦਾਰ ਚੀਜ਼ਾਂ ਬਣਾਉਣਾ ਜਾਰੀ ਰੱਖੋ!",
    adminModeActive: "ਐਡਮਿਨ ਮੋਡ ਸਰਗਰਮ",
    overviewQuickActions: "ਸੰਖੇਪ ਅਤੇ ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
    youtubeVideoLibrary: "YouTube ਵੀਡੀਓ ਲਾਇਬ੍ਰੇਰੀ",
    handsOnExercises: "ਵਿਹਾਰਕ ਅਭਿਆਸ",
    analyticsStats: "ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਅੰਕੜੇ",
    badgesCertificates: "ਬੈਜ ਅਤੇ ਸਰਟੀਫਿਕੇਟ",
    roboquestChannelContent: "ਰੋਬੋਕ੍ਵੈਸਟ ਚੈਨਲ ਸਮੱਗਰੀ",
    meetTheTeam: "ਰੋਬੋਕ੍ਵੈਸਟ ਦੇ ਪਿੱਛੇ ਟੀਮ ਨੂੰ ਮਿਲੋ",
    accountPreferences: "ਖਾਤਾ ਤਰਜੀਹਾਂ",
  }
};

export const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी",
  te: "తెలుగు",
  ta: "தமிழ்",
  gu: "ગુજરાતી",
  mr: "मराठी",
  pa: "ਪੰਜਾਬੀ"
};

export const supportedLanguages = Object.keys(translations);
