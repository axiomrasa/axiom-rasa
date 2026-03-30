/**
 * @constant MENU_ITEMS
 * @description Core navigation matrix. Only 'MEET ME' is active.
 */
export const MENU_ITEMS = [
  { id: 'me', label: 'MEET ME', href: '/meet-me' },
  { id: 'daily', label: 'READ MY DAILY (loading)', href: '#' },
  { id: 'clone', label: 'CHAT MY COG-CLONE (loading)', href: '#' },
  { id: 'links', label: 'CHECK MY LINKS (loading)', href: '#' }
];

/**
 * @constant SYSTEM_TEXTS
 * @description System-level narrative strings.
 */
export const SYSTEM_TEXTS = {
  intro: "hi, glad to see you here.",
  question: "WHAT DO YOU WANT TO DO?",
  initiate: "LET'S BEGIN"
};