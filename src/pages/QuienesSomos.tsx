import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuienesSomos = () => {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation pour l'image
    if (imageRef.current) {
      imageRef.current.style.transform = 'translateX(-30px)';
      imageRef.current.style.opacity = '0';
      
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease';
          imageRef.current.style.transform = 'translateX(0)';
          imageRef.current.style.opacity = '1';
        }
      }, 100);
    }

    // Animation pour le texte
    if (textRef.current) {
      textRef.current.style.opacity = '0';
      
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = 'opacity 1s ease-out 0.4s';
          textRef.current.style.opacity = '1';
        }
      }, 100);
    }
  }, []);

  const storyParagraphs = t('quienesSomos.fullStory').split('\n\n');

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {t('quienesSomos.title')}
        </h1>

        <div className="flex flex-col md:flex-row gap-0 md:gap-12 items-start">
          {/* Image avec cadre à gauche - hauteur réduite */}
          <div 
            ref={imageRef}
            className="w-full md:w-5/12 relative mb-8 md:mb-0"
            style={{
              transform: 'translateX(-30px)',
              opacity: 0,
            }}
          >
           <div className="h-60 md:h-72 w-full border-4 border-[#FE5000] rounded-lg overflow-hidden shadow-2xl bg-black">
              <img 
                src="/images/identité/chef.jpg" 
                alt={t('quienesSomos.chefTitle')}
                className="w-full h-full object-cover opacity-90"
                style={{
                  objectPosition: 'center center'
                }}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#FE5000] text-white px-3 py-1 rounded text-sm font-bold">
              {t('quienesSomos.chefTitle')}
            </div>
          </div>

          {/* Texte à droite - parfaitement aligné et typographie soignée */}
          <div 
            ref={textRef}
            className="w-full md:w-7/12 flex flex-col justify-start"
            style={{
              opacity: 0,
            }}
          >
            <div className="space-y-6 text-justify bg-gradient-to-br from-white/5 to-white/15 rounded-xl p-6 border-l-4 border-[#FE5000]">
              {storyParagraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg leading-[1.8] tracking-wide text-black/90"
                  style={{
                    textAlignLast: 'left',
                    wordSpacing: '0.05em',
                    hyphens: 'auto'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature alignée à droite */}
            <div className="mt-10 text-right">
              <p className="text-2xl italic text-[#FE5000] font-serif tracking-wider">
                {t('quienesSomos.signature')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;