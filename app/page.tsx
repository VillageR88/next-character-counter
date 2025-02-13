import Logo from './components/Logo';
import LabelCheckbox from './components/LabelCheckbox';

import ThemeButton from './components/ThemeButton';
const HEAD_TITLE = 'Analyze your text\nin real-time.';
const MAIN_INPUT_PLACEHOLDER = 'Start typing here… (or paste your text)';
const DENSITY_TITLE = 'Letter Density';
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
          {HEAD_TITLE}
        </h1>
        <label className="mt-[48px]">
          <textarea
            id="main-text"
            className="min-h-[200px] w-full resize-none rounded-[12px] border-2 border-[#E4E4EF] bg-[#F2F2F7] p-[20px] text-[20px] leading-[140%] tracking-[-0.6px] text-[#2A2B37] outline-none [transition:background-color_300ms,color_300ms,border_300ms] dark:border-[#404254] dark:bg-[#2A2B37] dark:text-[#E4E4EF]"
            placeholder={MAIN_INPUT_PLACEHOLDER}
          />
        </label>
        <div className="mt-[16px] flex items-center justify-between">
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
        <ul className="mt-[48px] flex gap-[16px]">
          {[
            {
              description: 'Total Characters',
              background: 'bg-[#D3A0FA]',
              pattern: 'bg-[url(../public/assets/images/pattern-character-count.svg)]',
            },
            {
              description: 'Word Count',
              background: 'bg-[#FF9F00]',
              pattern: 'bg-[url(../public/assets/images/pattern-word-count.svg)]',
            },
            {
              description: 'Sentence Count',
              background: 'bg-[#FE8159]',
              pattern: 'bg-[url(../public/assets/images/pattern-sentence-count.svg)]',
            },
          ].map((item, index) => {
            return (
              <li
                className={`flex min-h-[150px] w-full flex-col rounded-[12px] bg-[calc(100%+1.9em)_center] bg-no-repeat ${item.pattern} ${item.background} px-[16px] py-[26.5px] text-[#12131A]`}
                key={item.background}
              >
                <h2 className="text-[64px] font-bold leading-[100%] tracking-[-1px]">0</h2>
                {index === 0 ? (
                  <div className="flex items-center gap-1">
                    <p className="text-[20px] leading-[140%] tracking-[-0.6px]">{item.description}</p>
                    <p
                      id="no-space-info"
                      className="leading-[130%] tracking-[-0.6px] opacity-0 [transition:opacity_300ms]"
                    >
                      (no space)
                    </p>
                  </div>
                ) : (
                  <p className="text-[20px] leading-[140%] tracking-[-0.6px]">{item.description}</p>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-[24px] flex flex-col gap-[20px] text-[#12131A] dark:text-[#E4E4EF]">
          <h2 className="text-[24px] font-semibold leading-[130#] tracking-[-1px] [transition:color_300ms]">
            {DENSITY_TITLE}
          </h2>
          <p className="[transition:color_300ms]">No characters found. Start typing to see letter density.</p>
        </div>
      </main>
    </>
  );
}
