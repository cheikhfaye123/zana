export type Language = 'ES' | 'FR' | 'EN';

interface MenuTranslations {
  [key: string]: {
    'menu.button.view': string;
  };
}

export const menuButtonTranslations: MenuTranslations = {
  ES: {
    'menu.button.view': 'Ver menú',
  },
  FR: {
    'menu.button.view': 'Voir menu',
  },
  EN: {
    'menu.button.view': 'See menu',
  }
};
