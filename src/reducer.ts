// src/reducer.ts
import { Theme, ThemeAction } from './types/Theme';

export const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
};
