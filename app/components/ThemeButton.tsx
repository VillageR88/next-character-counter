'use client';
import Image from 'next/image';
import iconMoon from '../../public/assets/images/icon-moon.svg';
import iconSun from '../../public/assets/images/icon-sun.svg';

const ThemeButton = () => {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle('dark')}
      type="button"
      className="flex min-h-[44px] w-full max-w-[44px] items-center justify-center rounded-[8px] bg-[#F2F2F7] [transition:background-color_300ms] dark:bg-[#2A2B37]"
    >
      <Image className="absolute [transition:opacity_300ms] dark:opacity-0" src={iconMoon as string} alt="theme icon" />
      <Image
        className="absolute opacity-0 [transition:opacity_300ms] dark:opacity-100"
        src={iconSun as string}
        alt="theme icon"
      />
    </button>
  );
};

export default ThemeButton;
