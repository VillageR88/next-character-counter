'use client';
import { useRef } from 'react';

const MAIN_INPUT_PLACEHOLDER = 'Start typing here… (or paste your text)';

const MainTextarea = ({ passRef }: { passRef: (arg0: string) => void }) => {
  const mainRef = useRef<null | HTMLTextAreaElement>(null);

  return (
    <label className="mt-[48px]">
      <textarea
        onInput={() => {
          if (mainRef.current) passRef(mainRef.current.value);
        }}
        ref={mainRef}
        id="main-text"
        className="min-h-[200px] w-full resize-none rounded-[12px] border-2 border-[#E4E4EF] bg-[#F2F2F7] p-[20px] text-[20px] leading-[140%] tracking-[-0.6px] text-[#2A2B37] outline-none [transition:background-color_300ms,color_300ms,border_300ms] dark:border-[#404254] dark:bg-[#2A2B37] dark:text-[#E4E4EF]"
        placeholder={MAIN_INPUT_PLACEHOLDER}
      />
    </label>
  );
};

export default MainTextarea;
