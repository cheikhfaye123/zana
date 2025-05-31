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
    'nav.news': 'NOVEDADES',
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
	'menu.item.description': 'Descripción',
    
    // Plats classiques
    'menu.classic.ragu.title': 'Ragú a la Bolognesa',
    'menu.classic.ragu.description': 'Ternera, zanahoria, ajo, cebolla, apio, tomate, AOVE',
    'menu.classic.carbonara.title': 'Carbonara',
    'menu.classic.carbonara.description': 'Pecorino, guanciale, huevo, parmesano, pimienta',
    'menu.tomate.albahaca.title': 'Tomate y Albahaca',
    'menu.tomate.albahaca.description': 'Tomate fresco, albahaca, ajo, aceite de oliva virgen extra',
	 // Plats spéciaux
    'menu.trufa.parmesano.title': 'Trufa y Parmesano',
    'menu.trufa.parmesano.description': 'Salsa de trufa negra, parmesano reggiano, mantequilla',
    'menu.pesto.aguacate.title': 'Pesto de Aguacate',
    'menu.pesto.aguacate.description': 'Aguacate, albahaca, piñones, ajo, aceite de oliva',
    'menu.alfredo.pollo.title': 'Alfredo con Pollo',
	'menu.alfredo.pollo.description': 'Pollo, salsa alfredo, champiñones, parmesano',
    
    // Saveurs du monde
    'menu.pollo.tikka.title': 'Pollo Tikka Masala',
    'menu.pollo.tikka.description': 'Pollo, tomate, cebolla, ajo, especias indias, nata',
    'menu.world.harissa.title': 'Atún con Harissa',
    'menu.world.harissa.description': 'Atún, harissa, pimiento rojo, ajo, comino',
    
    // Saveurs locales
    'menu.local.requena.title': 'Ragú Blanco de Requena',
    'menu.local.requena.description': 'Salchicha de Requena, setas, vino blanco, nata',
	// Desserts
    'menu.desserts.white.lotus.title': ' White Lotus',
    'menu.desserts.white.lotus.description': 'Chocolate blanco, frambuesa, coco',
    'menu.desserts.ferrero.gold.title': 'Ferrero Gold',
    'menu.desserts.ferrero.gold.description': 'Chocolate, avellana, crocante',
    
    // Boissons
    'menu.drinks.coca.title': 'Coca-Cola',
    'menu.drinks.coca.zero.title': 'Coca-Cola Zero',
    'menu.drinks.water.title': 'Agua Mineral',
    'menu.drinks.lemonade.title': 'Limonada Casera',
    'menu.drinks.turia.title': 'Cerveza Turia',
    'menu.drinks.non.alcoholic.title': 'Cerveza Sin Alcohol',
	
	
    'location.title': 'VISÍTANOS',
    'location.hours': 'Lun-Dom: 11:00 - 22:00',
    'location.quality': 'Calidad Premium',
    'location.quality.desc': 'Solo los mejores ingredientes para un auténtico sabor del mundo',
    'cta.hungry': '¿Tienes Hambre?',
    'cta.visit': 'Visítanos en Valencia y prueba el auténtico sabor de Zana Street world Pasta',
    'cta.directions': 'Cómo Llegar',
    'footer.quicklinks': 'ENLACES RÁPIDOS',
'footer.contact': 'CONTÁCTANOS',
'footer.slogan': 'Deliciosa pasta fresca hecha diariamente con ingredientes de calidad.',
    'footer.copyright': '© 2025 Zana Street world Pasta. Todos los derechos reservados.',
    'gallery.title': 'FOTOS Y VIDEOS',
    'gallery.interior': 'Nuestro Interior Acogedor',
    'gallery.private': 'Área Privada',
    'gallery.bar': 'Nuestro Bar',
    'gallery.outdoor': 'Nuestros menus',
    'gallery.zanacup': 'Nuestros Vasos',
    'news.title': 'Últimas Noticias',
    'news.subtitle': 'Mantente al día con las últimas novedades de Zana Street world Pasta',
    'career.title': 'Únete a Nuestro Equipo',
    'career.subtitle': 'Comienza tu viaje con Zana Street world Pasta',
    'feedback.title': 'Tu Opinión',
    'feedback.subtitle': 'Valoramos tu opinión y nos esforzamos por mejorar tu experiencia',
    'franchising.title': 'Oportunidades de Franquicia',
    'franchising.subtitle': 'Únete a la familia Zana Street world Pasta y comienza tu propio negocio exitoso',
    'news.latest': 'Últimas Noticias',
    'news.stay_updated': 'Mantente al día con las últimas novedades de Zana Street world Pasta',
    'news.read_more': 'Leer Más →',
    'news.show_less': 'Mostrar Menos ↑',
    'news.coming_soon': 'Próximamente',
    'news.summer_pasta.title': 'En breve nuestra pasta de verano',
    'news.summer_pasta.excerpt': 'Prueba nuestros refrescantes platos de pasta de verano con ingredientes de temporada y salsas ligeras, perfectos para el clima cálido.',
    'news.new_location.title': 'Nueva apertura en Benidorm',
    'news.new_location.excerpt': '¡Estamos emocionados de anunciar nuestra nueva ubicación en Benidorm. ¡Únete a nosotros para la gran inauguración!',
    'news.app.title': 'En breve nuestra app Zana',
    'news.app.excerpt': 'Pide tus platos de pasta favoritos sobre la marcha con nuestra nueva aplicación móvil. Disponible ahora en iOS y Android.',
    'news.special.title': 'Chefs Special: Ragu blanco de salchicha de Requena',
    'news.special.excerpt': 'Nuestro chef premiado presenta una lujosa pasta con setas silvestres y parmesano envejecido.'
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
	'menu.item.description': 'Description',
    
    // Plats classiques
    'menu.classic.ragu.title': 'Ragù à la Bolognaise',
    'menu.classic.ragu.description': 'Bœuf, carottes, ail, oignon, céleri, tomates, huile d\'olive',
    'menu.classic.carbonara.title': 'Carbonara',
    'menu.classic.carbonara.description': 'Pecorino, guanciale, œuf, parmesan, poivre',
    'menu.tomate.albahaca.title': 'Tomate et Basilic',
    'menu.tomate.albahaca.description': 'Tomate fraîche, basilic, ail, huile d\'olive extra vierge',
    
    // Plats spéciaux
    'menu.trufa.parmesano.title': 'Truffe et Parmesan',
    'menu.trufa.parmesano.description': 'Sauce à la truffe noire, parmesan reggiano, beurre',
    'menu.pesto.aguacate.title': 'Pesto d\'Avocat',
    'menu.pesto.aguacate.description': 'Avocat, basilic, pignons, ail, huile d\'olive',
    'menu.alfredo.pollo.title': 'Alfredo au Poulet',
    'menu.alfredo.pollo.description': 'Poulet, sauce alfredo, champignons, parmesan',
    
    // Saveurs du monde
    'menu.pollo.tikka.title': 'Poulet Tikka Masala',
    'menu.pollo.tikka.description': 'Poulet, tomates, oignons, ail, épices indiennes, crème',
    'menu.world.harissa.title': 'Thon à la Harissa',
    'menu.world.harissa.description': 'Thon, harissa, poivron rouge, ail, cumin',
    
    // Saveurs locales
    'menu.local.requena.title': 'Ragù Blanc de Requena',
    'menu.local.requena.description': 'Saucisse de Requena, champignons, vin blanc, crème',
    
    // Desserts
    'menu.desserts.white.lotus.title': ' White Lotus',
    'menu.desserts.white.lotus.description': 'Chocolat blanc, framboise, noix de coco',
    'menu.desserts.ferrero.gold.title': 'Ferrero Gold',
    'menu.desserts.ferrero.gold.description': 'Chocolat, noisette, croustillant',
    
    // Boissons
    'menu.drinks.coca.title': 'Coca-Cola',
    'menu.drinks.coca.zero.title': 'Coca-Cola Zero',
    'menu.drinks.water.title': 'Eau Minérale',
    'menu.drinks.lemonade.title': 'Limonade Maison',
    'menu.drinks.turia.title': 'Bière Turia',
    'menu.drinks.non.alcoholic.title': 'Bière Sans Alcool',
    
	
	
	
    'location.title': 'VISITEZ-NOUS',
    'location.hours': 'Lun-Dim: 11h00 - 22h00',
    'location.quality': 'Qualité Premium',
    'location.quality.desc': 'Uniquement les meilleurs ingrédients pour un goût universel et  authentique',
    'cta.hungry': 'Envie de Plus ?',
    'cta.visit': "Visitez-nous à Valencia et goûtez à l'authentique saveur de Zana Street world Pasta",
    'cta.directions': 'Itinéraire',
    'footer.quicklinks': 'LIENS RAPIDES',
'footer.contact': 'CONTACTEZ-NOUS',
'footer.slogan': 'Pâtes fraîches préparées quotidiennement avec des ingrédients de qualité.',
    'footer.copyright': '© 2025 Zana Street world Pasta. Tous droits réservés.',
    'gallery.title': 'PHOTOS ET VIDÉOS',
    'gallery.interior': 'Notre Intérieur Cosy',
    'gallery.private': 'Espace Privé',
    'gallery.bar': 'Notre Bar',
    'gallery.outdoor': 'Nos menus',
    'gallery.zanacup': 'Nos pots',
    'news.title': 'Dernières Actualités',
    'news.subtitle': 'Restez informé des dernières nouvelles de Zana Street world Pasta',
    'career.title': 'Rejoignez Notre Équipe',
    'career.subtitle': 'Commencez votre voyage avec Zana Street world Pasta',
    'feedback.title': 'Votre Avis',
    'feedback.subtitle': "Nous apprécions votre opinion et nous nous efforçons d'améliorer votre expérience",
    'franchising.title': 'Opportunités de Franchise',
    'franchising.subtitle': 'Rejoignez la famille Zana Street world Pasta et lancez votre entreprise prospère',
    'news.latest': 'Dernières Actualités',
    'news.stay_updated': 'Restez informé des dernières nouvelles de Zana Street world Pasta',
    'news.read_more': 'Lire Plus →',
    'news.show_less': 'Voir Moins ↑',
    'news.coming_soon': 'Bientôt Disponible',
    'news.summer_pasta.title': 'Bientôt nos pâtes d\'été',
    'news.summer_pasta.excerpt': 'Essayez nos plats de pâtes d\'été rafraîchissants avec des ingrédients de saison et des sauces légères, parfaits pour les temps chauds.',
    'news.new_location.title': 'Nouvelle ouverture à Benidorm',
    'news.new_location.excerpt': 'Nous sommes ravis d\'annoncer notre nouveau restaurant à Benidorm. Rejoignez-nous pour la grande ouverture !',
    'news.app.title': 'Bientôt notre application Zana',
    'news.app.excerpt': 'Commandez vos plats de pâtes préférés en déplacement avec notre nouvelle application mobile. Disponible maintenant sur iOS et Android.',
    'news.special.title': 'Spécial Chef : Ragu blanc à la saucisse de Requena',
    'news.special.excerpt': 'Notre chef étoilé présente des pâtes luxueuses aux champignons sauvages et parmesan affiné.'
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
	'menu.item.description': 'Description',
    
    // Classic dishes
    'menu.classic.ragu.title': 'Bolognese Ragu',
    'menu.classic.ragu.description': 'Beef, carrots, garlic, onion, celery, tomatoes, olive oil',
    'menu.classic.carbonara.title': 'Carbonara',
    'menu.classic.carbonara.description': 'Pecorino, guanciale, egg, parmesan, pepper',
    'menu.tomate.albahaca.title': 'Tomato and Basil',
    'menu.tomate.albahaca.description': 'Fresh tomato, basil, garlic, extra virgin olive oil',
    
    // Special dishes
    'menu.trufa.parmesano.title': 'Truffle and Parmesan',
    'menu.trufa.parmesano.description': 'Black truffle sauce, parmesan reggiano, butter',
    'menu.pesto.aguacate.title': 'Avocado Pesto',
    'menu.pesto.aguacate.description': 'Avocado, basil, pine nuts, garlic, olive oil',
    'menu.alfredo.pollo.title': 'Chicken Alfredo',
    'menu.alfredo.pollo.description': 'Chicken, alfredo sauce, mushrooms, parmesan',
    
    // World flavors
    'menu.pollo.tikka.title': 'Chicken Tikka Masala',
    'menu.pollo.tikka.description': 'Chicken, tomatoes, onions, garlic, Indian spices, cream',
    'menu.world.harissa.title': 'Harissa Tuna',
    'menu.world.harissa.description': 'Tuna, harissa, red pepper, garlic, cumin',
    
    // Local flavors
    'menu.local.requena.title': 'White Ragu with Requena Sausage',
    'menu.local.requena.description': 'Requena sausage, mushrooms, white wine, cream',
    
    // Desserts
    'menu.desserts.white.lotus.title': 'White Lotus',
    'menu.desserts.white.lotus.description': 'White chocolate, raspberry, coconut',
    'menu.desserts.ferrero.gold.title': 'Ferrero Gold',
    'menu.desserts.ferrero.gold.description': 'Chocolate, hazelnut, crisp',
    
    // Drinks
    'menu.drinks.coca.title': 'Coca-Cola',
    'menu.drinks.coca.zero.title': 'Coca-Cola Zero',
    'menu.drinks.water.title': 'Mineral Water',
    'menu.drinks.lemonade.title': 'Homemade Lemonade',
    'menu.drinks.turia.title': 'Turia Beer',
    'menu.drinks.non.alcoholic.title': 'Non-Alcoholic Beer',
    
	
	
	
    'location.title': 'VISIT US',
    'location.hours': 'Mon-Sun: 11:00 AM - 10:00 PM',
    'location.quality': 'Premium Quality',
    'location.quality.desc': 'Only the finest ingredients for authentic world taste',
    'cta.hungry': 'Hungry for More?',
    'cta.visit': 'Visit us in Valencia and taste the authentic flavor of Zana Street world Pasta',
    'cta.directions': 'Get Directions',
    'footer.quicklinks': 'QUICK LINKS',
'footer.contact': 'CONTACT US',
'footer.slogan': 'Delicious pasta made fresh daily with quality ingredients.',
    'footer.copyright': '© 2025 Zana Street world Pasta. All rights reserved.',
    'gallery.title': 'PHOTOS & VIDEOS',
    'gallery.interior': 'Our Cozy Interior',
    'gallery.private': 'Private Dining Area',
    'gallery.bar': 'Our Restaurant Bar',
    'gallery.outdoor': 'Our menu',
    'gallery.zanacup': 'Our Zana Cups',
    'news.title': 'Latest News',
    'news.subtitle': 'Stay updated with the latest happenings at Zana Street world Pasta',
    'career.title': 'Join Our Team',
    'career.subtitle': 'Start your journey with Zana Street world Pasta',
    'feedback.title': 'Your Feedback',
    'feedback.subtitle': 'We value your opinion and strive to improve your dining experience',
    'franchising.title': 'Franchise Opportunities',
    'franchising.subtitle': 'Join the Zana Street world Pasta family and start your own successful business',
    'news.latest': 'Latest News',
    'news.stay_updated': 'Stay updated with the latest happenings at Zana Street world Pasta',
    'news.read_more': 'Read More →',
    'news.show_less': 'Show Less ↑',
    'news.coming_soon': 'Coming Soon',
    'news.summer_pasta.title': 'Coming Soon: Our Summer Pasta',
    'news.summer_pasta.excerpt': 'Try our refreshing summer pasta dishes with seasonal ingredients and light sauces, perfect for warm weather.',
    'news.new_location.title': 'New Opening in Benidorm',
    'news.new_location.excerpt': 'We are excited to announce our new location in Benidorm. Join us for the grand opening celebration!',
    'news.app.title': 'Coming Soon: Zana App',
    'news.app.excerpt': 'Order your favorite pasta dishes on the go with our new mobile app. Available now on iOS and Android.',
    'news.special.title': 'Chefs\' Special: White Ragu with Requena Sausage',
    'news.special.excerpt': 'Our award-winning chef presents a luxurious pasta with wild mushrooms and aged parmesan.'
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