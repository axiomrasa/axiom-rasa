/**
 * @module System_Data
 * @description Central configuration matrix for the Rasa Core environment. 
 * Reverted to original narrative strings per visual reference.
 */

export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

/**
 * @constant MENU_ITEMS
 * @description Core navigation matrix. Matches visual state in Screenshot 19.24.49.
 */
export const MENU_ITEMS: MenuItem[] = [
  { id: 'me', label: 'MEET ME', href: '/meet-me' },
  { id: 'daily', label: 'READ MY DAILY (LOADING)', href: '#' },
  { id: 'clone', label: 'CHAT MY COG-CLONE (LOADING)', href: '#' },
  { id: 'links', label: 'CHECK MY LINKS (LOADING)', href: '#' }
];

/**
 * @constant SYSTEM_TEXTS
 * @description System-level narrative strings. Matches visual states in 19.24.51 and 19.25.12.
 */
export const SYSTEM_TEXTS = {
  intro: "hi, glad to see you here.",
  question: "WHAT DO YOU WANT TO DO?",
  initiate: "LET'S BEGIN"
} as const;