'use client';
import Logo from './components/Logo';
import LabelCheckbox from './components/LabelCheckbox';
import SummaryBoxes from './components/SummaryBoxes';
import ThemeButton from './components/ThemeButton';
import MainTextarea from './components/MainTextarea';
import { useState } from 'react';
const HEAD_TITLE = 'Analyze your text\nin real-time.';
const DENSITY_TITLE = 'Letter Density';
const DENSITY_DESCRIPTION_EMPTY = 'No characters found. Start typing to see letter density.';
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
const CHARACTERS_PER_MINUTE = 1000;

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [isExcludedSpaces, setIsExcludedSpace] = useState<boolean>(false);
  const [isCharacterLimit, setIsCharacterLimit] = useState<boolean>(false);

  const calculateReadTime = (text: string) => {
    const characters = text.length;
    const minutes = characters / CHARACTERS_PER_MINUTE;
    return Math.floor(minutes);
  };
  const calculateReadTimeValue = calculateReadTime(textAreaValue);
  const APPROX_DESCRIPTION = `Approx. reading time: ${calculateReadTimeValue < 1 ? '< 1' : calculateReadTimeValue.toString()} minute${Number(calculateReadTimeValue) <= 1 ? '' : 's'}`;

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
        <MainTextarea
          passRef={(passedRef) => {
            setTextAreaValue(passedRef);
          }}
        />
        <div className="mt-[16px] flex items-center justify-between">
          <div className="flex items-center gap-[24px]">
            <LabelCheckbox
              passReference={(value) => {
                setIsExcludedSpace(value);
              }}
              id={mainSettings.exclude.id}
              description={mainSettings.exclude.description}
            />
            <div id="character-div" className="flex items-center gap-[10px]">
              <LabelCheckbox
                passReference={(value) => {
                  setIsCharacterLimit(value);
                }}
                id={mainSettings.limit.id}
                description={mainSettings.limit.description}
              />
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
          <p className="text-[#12131A] [transition:color_300ms] dark:text-[#E4E4EF]">{APPROX_DESCRIPTION}</p>
        </div>
        <SummaryBoxes
          textAreaValue={textAreaValue}
          isExcludedSpaces={isExcludedSpaces}
          isCharacterLimit={isCharacterLimit}
        />
        <div className="mt-[24px] flex flex-col gap-[20px] text-[#12131A] dark:text-[#E4E4EF]">
          <h2 className="text-[24px] font-semibold leading-[130#] tracking-[-1px] [transition:color_300ms]">
            {DENSITY_TITLE}
          </h2>
          <p className="[transition:color_300ms]">{DENSITY_DESCRIPTION_EMPTY}</p>
        </div>
      </main>
    </>
  );
}
