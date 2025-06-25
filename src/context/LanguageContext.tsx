import { createContext, useState, useContext, ReactNode } from 'react';
import { menuButtonTranslations } from './menuButtonTranslations';

type Language = 'ES' | 'FR' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ES: {
    ...menuButtonTranslations.ES,
    'nav.locations': 'UBICACIÓN',
    'nav.menu': 'MENÚ',
    'nav.news': 'NOVEDADES',
    'nav.career': 'EMPLEO',
    'nav.feedback': 'OPINIONES',
    'nav.franchising': 'FRANQUICIA',
    'menu.all': 'TODOS',
    'menu.subtitle': 'Elige tu tipo de pasta después descubre nuestras salsas auténticas, elaboradas con productos de alta calidad de forma artesanal por chefs profesionales y déjate viajar por el mundo bocado tras bocado.',
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
    'menu.world.huancaina.title': ' Huancaína',
    'menu.world.huancaina.description': 'Queso crema, aji amarillo,leche evaporada',
    
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
	
	   'location.address': 'Dirección',
'location.phone': 'Teléfono',
'location.hours_title': 'Horario',
'cta.view_map': 'Ver en el mapa',
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
    'footer.social': 'Síguenos',
    'gallery.title': 'FOTOS Y VIDEOS',
    'gallery.interior': 'Nuestro local',
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
    'news.special.excerpt': 'Nuestro chef premiado presenta una lujosa pasta con setas silvestres y parmesano envejecido.',
    'nav.quienesSomos': 'QUIÉNES SOMOS',
    'quienesSomos.title': 'NUESTRA HISTORIA',
    'quienesSomos.chefTitle': 'Nuestro equipo de chefs',
    'quienesSomos.signature': 'ZANA ',
    
'quienesSomos.fullStory': `
<p>SOMOS ZANA, Dos chefs, amigos y viajeros.</p>
<p>Amantes de la cocina auténtica.</p>
<p>Ciudadanos de un país llamado mundo.</p>
<p>Todo comenzó durante la pandemia, cuando el mundo estaba en pausa y nosotros cocinábamos para las personas que más queríamos: amigos y familia.</p>
<p>La buena comida casera se convirtió en un ritual, un lenguaje propio, y en una tradición que fue creciendo con el tiempo.</p>
<p>ZANA nació algún tiempo después, tras un viaje a Italia que nos cambió la vida. Allí conocimos a un maestro de la pasta que nos inspiró a transformar todo lo que habíamos aprendido en un concepto único: pasta de alta gastronomía con alma callejera.</p>
<p>Somos curiosos, creativos y obsesionados con los buenos ingredientes. Traemos los sabores del sur de Europa en clave street food: divertido, relajado y accesible. Pero con un nivel de calidad que se siente en cada bocado.</p>
<p>Toda nuestra pasta se elabora fresca cada día, con harinas superiores, traídas directamente de campos italianos. Nuestras salsas se cocinan de forma artesanal, con respeto por el medio ambiente, ingredientes sostenibles y procesos auténticos.</p>
<p>Cada salsa es el resultado de un viaje y una colaboración hermosa. El resultado es una experiencia de sabor que viaja contigo.</p>
<p class="text-right italic mt-3">In pasta we trust.</p>
`,
    
  },
  FR: {
    ...menuButtonTranslations.FR,
    'nav.locations': 'EMPLACEMENT',
    'nav.menu': 'MENU',
    'nav.news': 'ACTUALITÉS',
    'nav.career': 'CARRIÈRES',
    'nav.feedback': 'AVIS',
    'nav.franchising': 'FRANCHISE',
    'menu.all': 'TOUS',
    'menu.subtitle': 'Choisis ton type de pâtes, puis découvre nos sauces authentiques, préparées de manière artisanale avec des produits de haute qualité par des chefs professionnels, et laisse-toi voyager à travers le monde bouchée après bouchée.',
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
    
	
	'location.address': 'Adresse',
'location.phone': 'Téléphone',
'location.hours_title': 'Horaires',
'cta.view_map': 'Voir sur la carte',
	
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
    'footer.social': 'Suivez-nous',
    'gallery.title': 'PHOTOS ET VIDÉOS',
    'gallery.interior': 'Notre établissement',
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
    'news.special.excerpt': 'Notre chef étoilé présente des pâtes luxueuses aux champignons sauvages et parmesan affiné.',
    'nav.quienesSomos': 'QUI SOMMES-NOUS',
    'quienesSomos.title': 'NOTRE HISTOIRE',
    'quienesSomos.chefTitle': 'NOTRE CHEF',
    'quienesSomos.signature': 'ZANA STREET WORLD PASTA',
    // Version FR
'quienesSomos.fullStory': `
<p>NOUS SOMMES ZANA,</p>
<p>Deux chefs, amis et voyageurs.</p>
<p>Passionnés de cuisine authentique.</p>
<p>Citoyens d'un pays appelé le monde.</p>
<p>Tout a commencé pendant la pandémie, lorsque le monde était à l'arrêt et que nous cuisinions pour ceux que nous aimions le plus : nos amis et notre famille.</p>
<p>La bonne cuisine maison est devenue un rituel, un langage à part entière, et une tradition qui a grandi avec les années.</p>
<p>ZANA est née quelque temps plus tard, après un voyage en Italie qui a changé notre vie.</p>
<p>Là-bas, nous avons rencontré un maître de la pasta qui nous a inspirés à transformer tout ce que nous avions appris en une proposition unique : des pâtes de haute gastronomie avec une âme de street food.</p>
<p>Nous sommes curieux, créatifs, et fous de bons produits.</p>
<p>Nous apportons la saveur du sud de l'Europe dans un esprit street food : ludique, décontracté, accessible.</p>
<p>Mais avec un niveau de qualité qu'on ressent à chaque bouchée.</p>
<p>Toutes nos pâtes sont préparées chaque jour avec des farines de haute qualité, directement issues des champs italiens.</p>
<p>Nos sauces sont cuisinées de manière artisanale, dans le respect de l'environnement, avec des ingrédients durables et des méthodes authentiques.</p>
<p>Chaque sauce est le fruit d'un voyage et d'un bel accord.</p>
<p>Le résultat : une expérience de saveurs qui voyage avec toi.</p>
<p class="text-right italic mt-3">In pasta we trust.</p>
`,
  },
  EN: {
    ...menuButtonTranslations.EN,
    'nav.locations': 'LOCATION',
    'nav.menu': 'MENU',
    'nav.news': 'NEWS',
    'nav.career': 'CAREER',
    'nav.feedback': 'FEEDBACK',
    'nav.franchising': 'FRANCHISING',
    'menu.all': 'ALL',
    'menu.subtitle': 'Choose your type of pasta, then discover our authentic sauces, crafted with high-quality ingredients in an artisanal way by professional chefs, and let yourself travel the world bite by bite.',
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


    'location.address': 'Address',
'location.phone': 'Phone',
'location.hours_title': 'Opening Hours',
'cta.view_map': 'View on Map',
    
	
	
	
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
    'footer.social': 'Follow us',
    'gallery.title': 'PHOTOS & VIDEOS',
    'gallery.interior': 'Our place',
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
    'news.special.excerpt': 'Our award-winning chef presents a luxurious pasta with wild mushrooms and aged parmesan.',

    'nav.quienesSomos': 'ABOUT US',
    'quienesSomos.title': 'OUR STORY',
    'quienesSomos.signature': 'ZANA STREET WORLD PASTA',
    'quienesSomos.chefTitle': 'OUR CHEF',
    'quienesSomos.fullStory': `
<p>WE ARE ZANA,</p>
<p>Two chefs, friends, and travelers.</p>
<p>Lovers of authentic cuisine.</p>
<p>Citizens of a country called the world.</p>
<p>It all began during the pandemic, when the world was on pause and we were cooking for the people we loved most: friends and family.</p>
<p>Good homemade food became a ritual, a language of its own, and a tradition that grew over the years.</p>
<p>ZANA was born some time later, after a life-changing trip to Italy.</p>
<p>There, we met a pasta master who inspired us to turn everything we had learned into a unique concept: high-end pasta with a street food soul.</p>
<p>We're curious, creative, and obsessed with great ingredients.</p>
<p>We bring the flavors of Southern Europe in a street food style: fun, laid-back, and accessible.</p>
<p>But with a level of quality you can taste in every bite.</p>
<p>All our pasta is made fresh daily with superior flours, sourced directly from Italian fields.</p>
<p>Our sauces are crafted by hand, with respect for the environment, using sustainable ingredients and authentic processes.</p>
<p>Each sauce is the result of a journey and a beautiful collaboration.</p>
<p>The result is a flavor experience that travels with you.</p>
<p class="text-right italic mt-3">In pasta we trust.</p>
`
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