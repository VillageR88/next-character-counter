import Logo from './components/Logo';
import LabelCheckbox from './components/LabelCheckbox';

import ThemeButton from './components/ThemeButton';
const HEAD_TEXT = 'Analyze your text\nin real-time.';
const MAIN_TEXT_PLACEHOLDER = 'Start typing here… (or paste your text)';
const mainSettings = {
  exclude: {
    id: 'exclude-spaces',
    description: 'Exclude Spaces',
  },
  limit: {
    id: 'character-limit',
    description: 'Set Character Limit',
  },
};

export default function Home() {
  return (
    <>
      <nav className="mx-auto flex w-full max-w-[990px] justify-between">
        <Logo />
        <ThemeButton />
      </nav>
      <main className="mx-auto flex w-full max-w-[990px] flex-col">
        <h1 className="mx-auto w-fit text-center text-[#12131A] [transition:color_300ms] dark:text-[#F2F2F7]">
          {HEAD_TEXT}
        </h1>
        <label className="mt-[48px]">
          <textarea
            id="main-text"
            className="min-h-[200px] w-full resize-none rounded-[12px] border-2 border-[#E4E4EF] bg-[#F2F2F7] p-[20px] text-[20px] leading-[140%] tracking-[-0.6px] text-[#2A2B37] outline-none [transition:background-color_300ms,color_300ms,border_300ms] dark:border-[#404254] dark:bg-[#2A2B37]"
            placeholder={MAIN_TEXT_PLACEHOLDER}
          />
        </label>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <LabelCheckbox id={mainSettings.exclude.id} description={mainSettings.exclude.description} />
            <div id="character-div" className="flex items-center gap-[10px]">
              <LabelCheckbox id={mainSettings.limit.id} description={mainSettings.limit.description} />
              <label
                className="pointer-events-none select-none opacity-0 [transition:opacity_300ms]"
                id="max-char-container"
              >
                <input
                  id="max-char-input"
                  className="pointer-events-none flex min-h-[29px] w-[55px] select-none rounded-[6px] border border-[#404254] bg-[unset] text-center text-[#12131A] outline-none [transition:color_300ms] dark:text-[#FFFFFF]"
                  type="number"
                />
              </label>
            </div>
          </div>
          <p className="text-[#12131A] [transition:color_300ms] dark:text-[#E4E4EF]">Approx. reading time: 0 minute</p>
        </div>
      </main>
    </>
  );
}
