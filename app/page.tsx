import Logo from './components/Logo';
import iconMoon from '../public/assets/images/icon-moon.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <nav className="mx-auto flex w-full max-w-[990px] justify-between">
      <Logo />
      <button
        type="button"
        className="flex min-h-[44px] w-full max-w-[44px] items-center justify-center rounded-[8px] bg-[#F2F2F7]"
      >
        <Image src={iconMoon as string} alt="theme icon" />
      </button>
    </nav>
  );
}
