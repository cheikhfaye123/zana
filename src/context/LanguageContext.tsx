import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ES' | 'FR' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ES: {
    'nav.locations': 'UBICACIÓN',
    'nav.menu': 'MENÚ',
    'nav.news': 'NOTICIAS',
    'nav.career': 'EMPLEO',
    'nav.feedback': 'OPINIONES',
    'nav.franchising': 'FRANQUICIA',
    'menu.all': 'TODOS',
    'menu.subtitle': 'Descubre nuestros deliciosos platos de pasta hechos con ingredientes frescos y recetas auténticas',
    'menu.category.classic': 'CLÁSICA',
    'menu.category.special': 'ESPECIAL',
    'menu.category.world': 'SABORES DEL MUNDO',
    'menu.category.local': 'LOCAL',
    'menu.category.desserts': 'DULCE',
    'menu.category.drinks': 'BEBIDA',
    'location.title': 'VISÍTANOS',
    'location.hours': 'Lun-Dom: 11:00 - 22:00',
    'location.quality': 'Calidad Premium',
    'location.quality.desc': 'Solo los mejores ingredientes para un auténtico sabor italiano',
    'cta.hungry': '¿Tienes Hambre?',
    'cta.visit': 'Visítanos en Valencia y prueba el auténtico sabor de Zana Street world Pasta',
    'cta.directions': 'Cómo Llegar',
    'footer.copyright': '© 2025 Zana Street world Pasta. Todos los derechos reservados.',
    'gallery.title': 'FOTOS Y VIDEOS',
    'gallery.interior': 'Nuestro Interior Acogedor',
    'gallery.private': 'Área Privada',
    'gallery.bar': 'Nuestro Bar',
    'gallery.outdoor': 'Terraza',
    'news.title': 'Últimas Noticias',
    'news.subtitle': 'Mantente al día con las últimas novedades de Zana Street world Pasta',
    'career.title': 'Únete a Nuestro Equipo',
    'career.subtitle': 'Comienza tu viaje con Zana Street world Pasta',
    'feedback.title': 'Tu Opinión',
    'feedback.subtitle': 'Valoramos tu opinión y nos esforzamos por mejorar tu experiencia',
    'franchising.title': 'Oportunidades de Franquicia',
    'franchising.subtitle': 'Únete a la familia Zana Street world Pasta y comienza tu propio negocio exitoso'
  },
  FR: {
    'nav.locations': 'EMPLACEMENT',
    'nav.menu': 'MENU',
    'nav.news': 'ACTUALITÉS',
    'nav.career': 'CARRIÈRES',
    'nav.feedback': 'AVIS',
    'nav.franchising': 'FRANCHISE',
    'menu.all': 'TOUS',
    'menu.subtitle': 'Découvrez nos délicieux plats de pâtes préparés avec des ingrédients frais et des recettes authentiques',
    'menu.category.classic': 'CLASSIQUE',
    'menu.category.special': 'SPÉCIAL',
    'menu.category.world': 'SAVEURS DU MONDE',
    'menu.category.local': 'LOCAL',
    'menu.category.desserts': 'DESSERT',
    'menu.category.drinks': 'BOISSON',
    'location.title': 'VISITEZ-NOUS',
    'location.hours': 'Lun-Dim: 11h00 - 22h00',
    'location.quality': 'Qualité Premium',
    'location.quality.desc': 'Uniquement les meilleurs ingrédients pour un goût italien authentique',
    'cta.hungry': 'Envie de Plus ?',
    'cta.visit': "Visitez-nous à Valencia et goûtez à l'authentique saveur de Zana Street world Pasta",
    'cta.directions': 'Itinéraire',
    'footer.copyright': '© 2025 Zana Street world Pasta. Tous droits réservés.',
    'gallery.title': 'PHOTOS ET VIDÉOS',
    'gallery.interior': 'Notre Intérieur Cosy',
    'gallery.private': 'Espace Privé',
    'gallery.bar': 'Notre Bar',
    'gallery.outdoor': 'Terrasse',
    'news.title': 'Dernières Actualités',
    'news.subtitle': 'Restez informé des dernières nouvelles de Zana Street world Pasta',
    'career.title': 'Rejoignez Notre Équipe',
    'career.subtitle': 'Commencez votre voyage avec Zana Street world Pasta',
    'feedback.title': 'Votre Avis',
    'feedback.subtitle': "Nous apprécions votre opinion et nous nous efforçons d'améliorer votre expérience",
    'franchising.title': 'Opportunités de Franchise',
    'franchising.subtitle': 'Rejoignez la famille Zana Street world Pasta et lancez votre entreprise prospère'
  },
  EN: {
    'nav.locations': 'LOCATION',
    'nav.menu': 'MENU',
    'nav.news': 'NEWS',
    'nav.career': 'CAREER',
    'nav.feedback': 'FEEDBACK',
    'nav.franchising': 'FRANCHISING',
    'menu.all': 'ALL',
    'menu.subtitle': 'Discover our delicious pasta dishes made with fresh ingredients and authentic recipes',
    'menu.category.classic': 'CLASSIC',
    'menu.category.special': 'SPECIAL',
    'menu.category.world': 'WORLD FLAVORS',
    'menu.category.local': 'LOCAL',
    'menu.category.desserts': 'DESSERT',
    'menu.category.drinks': 'DRINKS',
    'location.title': 'VISIT US',
    'location.hours': 'Mon-Sun: 11:00 AM - 10:00 PM',
    'location.quality': 'Premium Quality',
    'location.quality.desc': 'Only the finest ingredients for authentic Italian taste',
    'cta.hungry': 'Hungry for More?',
    'cta.visit': 'Visit us in Valencia and taste the authentic flavor of Zana Street world Pasta',
    'cta.directions': 'Get Directions',
    'footer.copyright': '© 2025 Zana Street world Pasta. All rights reserved.',
    'gallery.title': 'PHOTOS & VIDEOS',
    'gallery.interior': 'Our Cozy Interior',
    'gallery.private': 'Private Dining Area',
    'gallery.bar': 'Our Restaurant Bar',
    'gallery.outdoor': 'Outdoor Seating',
    'news.title': 'Latest News',
    'news.subtitle': 'Stay updated with the latest happenings at Zana Street world Pasta',
    'career.title': 'Join Our Team',
    'career.subtitle': 'Start your journey with Zana Street world Pasta',
    'feedback.title': 'Your Feedback',
    'feedback.subtitle': 'We value your opinion and strive to improve your dining experience',
    'franchising.title': 'Franchise Opportunities',
    'franchising.subtitle': 'Join the Zana Street world Pasta family and start your own successful business'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}