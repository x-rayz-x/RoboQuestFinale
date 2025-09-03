export const DIFFICULTY_COLORS = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200'
} as const;

export const CATEGORY_EMOJIS = {
  python: '🐍',
  javascript: '💛',
  robotics: '🤖',
  scratch: '🎨',
  web: '🌐',
  general: '📚',
  algorithms: '🧮',
  games: '🎮',
  data: '📊'
} as const;

export const SOURCE_LABELS = {
  exercism: 'Exercism',
  youtube: 'YouTube',
  internal: 'RoboQuest',
  codewars: 'Codewars',
  hackerrank: 'HackerRank',
  leetcode: 'LeetCode',
  codingame: 'Codingame',
  edabit: 'Edabit',
  freecodecamp: 'freeCodeCamp',
  kaggle: 'Kaggle',
  codecombat: 'CodeCombat'
} as const;

export const TYPE_ICONS = {
  coding: '💻',
  hardware: '🔧',
  visual: '🎨'
} as const;