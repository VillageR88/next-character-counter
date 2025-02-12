import Logo from './components/Logo';

import ThemeButton from './components/ThemeButton';

export default function Home() {
  return (
    <nav className="mx-auto flex w-full max-w-[990px] justify-between">
      <Logo />
      <ThemeButton />
    </nav>
  );
}
