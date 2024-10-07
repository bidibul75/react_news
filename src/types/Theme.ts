// src/types/Theme.ts
export type Theme = 'light' | 'dark';

export type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_THEME'; payload: Theme };