export const CATEGORIES = {
  CLASSIC: 'classic',
  SPECIAL: 'special',
  WORLD: 'world',
  LOCAL: 'local',
  DESSERTS: 'desserts',
  DRINKS: 'drinks'
} as const;

export type CategoryKey = typeof CATEGORIES[keyof typeof CATEGORIES];

export const getTranslatedCategory = (categoryKey: CategoryKey, t: (key: string) => string) => {
  return t(`menu.category.${categoryKey}`);
};