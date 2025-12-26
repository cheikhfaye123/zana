import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuienesSomos = () => {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation image
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateX(-40px)';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition =
            'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease';
          imageRef.current.style.opacity = '1';
          imageRef.current.style.transform = 'translateX(0)';
        }
      }, 100);
    }

    // Animation texte
    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition =
            'opacity 1s ease 0.3s, transform 0.8s ease 0.3s';
          textRef.current.style.opacity = '1';
          textRef.current.style.transform = 'translateY(0)';
        }
      }, 150);
    }
  }, []);

  const fullStory = t('quienesSomos.fullStory');
  const storyParagraphs = fullStory
    .split('\n')
    .map(p => p.trim())
    .filter(p => p && p !== '<p></p>');

  return (
    <section className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100 text-gray-900 ">
      <div className="max-w-6xl mx-auto ">
        {/* Titre */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000] relative inline-block">
            <span className="relative z-10">{t('quienesSomos.title')}</span>
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FE5000]/30 -z-0 translate-y-1.5"></span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Image */}
          <div
            ref={imageRef}
            className="w-full lg:w-5/12 mb-4 lg:mb-0 relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-52 sm:h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10" />
              <img
                src="/images/identité/chef.jpg"
                alt={t('quienesSomos.chefTitle')}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
            </div>
          </div>

          {/* Texte */}
          <div
            ref={textRef}
            className="w-full lg:w-7/12 flex flex-col justify-start"
          >
            <div className="relative bg-white shadow-md rounded-xl p-4 sm:p-6 space-y-4 text-left before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-gradient-to-b from-[#FE5000] to-[#A16207]">
            {storyParagraphs.map((paragraph, index) => (
  <p
    key={index}
    className="text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-800 font-light relative px-3 py-0.5 pl-6 sm:pl-8"
  >
    {index === 0 && (
      <span className="text-3xl text-[#FE5000] font-serif absolute left-1 top-0">“</span>
    )}
    <span
      dangerouslySetInnerHTML={{
        __html: paragraph.replace(/<p>|<\/p>/g, ''),
      }}
    />
    {index === storyParagraphs.length - 1 && (
      <span className="text-3xl text-[#FE5000] font-serif absolute right-1 bottom-0">”</span>
    )}
  </p>
))}
            </div>

            {/* Signature */}
            <div className="mt-6 sm:mt-8 text-right">
              <div className="inline-flex flex-col items-end">
                <div className="w-20 h-0.5 bg-[#FE5000] mb-1.5"></div>
                <img
                  src="/images/identité/logo2.png"
                  alt="Zana Signature"
                  className="h-9 sm:h-11 w-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
