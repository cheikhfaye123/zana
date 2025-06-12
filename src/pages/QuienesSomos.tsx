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
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#292727] relative inline-block">
            <span className="relative z-10">{t('quienesSomos.title')}</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FE5000]/30 -z-0" style={{ transform: 'translateY(5px)' }}></span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Image avec effet moderne */}
          <div 
            ref={imageRef}
            className="w-full lg:w-5/12 relative mb-8 lg:mb-0 group"
            style={{
              transform: 'translateX(-30px)',
              opacity: 0,
            }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-72 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10"></div>
              <img 
                src="/images/identité/chef.jpg" 
                alt={t('quienesSomos.chefTitle')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: 'center center'
                }}
              />
              <div className="absolute">
                <span className="bg-[#FE5000] text-white px-4 py-1 rounded-lg text-lg font-bold inline-block transform -skew-x-6 shadow-lg">
                  {t('quienesSomos.chefTitle')}
                </span>
              </div>
            </div>
          </div>

          {/* Texte avec mise en page améliorée */}
          <div 
            ref={textRef}
            className="w-full lg:w-7/12 flex flex-col justify-start"
            style={{
              opacity: 0,
            }}
          >
            <div className="space-y-6 text-justify bg-white rounded-xl p-8 shadow-lg relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gradient-to-b from-[#FE5000] to-[#A16207]">
              {storyParagraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg leading-relaxed text-gray-800 relative pl-4"
                >
                  {index === 0 && (
                    <span className="text-5xl text-[#FE5000] font-serif absolute -left-2 -top-4">“</span>
                  )}
                  {paragraph}
                  {index === storyParagraphs.length - 1 && (
                    <span className="text-5xl text-[#FE5000] font-serif absolute -right-2 -bottom-4">”</span>
                  )}
                </p>
              ))}
            </div>

            {/* Signature stylisée */}
            <div className="mt-12 text-right">
              <div className="inline-flex flex-col items-end">
                <div className="w-24 h-1 bg-[#FE5000] mb-2"></div>
                <p className="text-2xl italic text-[#FE5000] font-serif tracking-wider">
                  {t('quienesSomos.signature')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;