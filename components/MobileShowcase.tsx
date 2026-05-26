import React from 'react';

type Props = {
  imageSrc: string;
  alt?: string;
  className?: string;
};

const MobileShowcase: React.FC<Props> = ({ imageSrc, alt = 'mobile screenshot', className = '' }) => {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="mx-auto w-[260px] md:w-[340px] lg:w-[420px] rounded-[36px] bg-black/90 shadow-2xl overflow-hidden">
        <div className="bg-black p-3 rounded-[28px]">
          <div className="bg-white rounded-[22px] overflow-hidden">
            <img src={imageSrc} alt={alt} className="w-full h-[560px] md:h-[640px] object-cover block" />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22px]">
        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"> 
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileShowcase;
