'use client';
import Image from 'next/image';
import check from '../../public/assets/images/icon-check.svg';
import { useRef } from 'react';
const LabelCheckbox = ({
  id,
  description,
  passReference,
}: {
  id: string;
  description: string;
  passReference: (arg0: boolean) => void;
}) => {
  const inputReference = useRef<HTMLInputElement | null>(null);
  return (
    <label className="flex cursor-pointer items-center gap-[10px]">
      <div className="flex items-center justify-center rounded-[4px] border border-[#12131A] [transition:background-color_300ms,border-color_300ms] has-[input:checked]:border-[#C27CF8] has-[input:checked]:bg-[#C27CF8] dark:border-[#E4E4EF] [&:has(input:checked)_img]:opacity-100">
        <Image alt="check icon" className="absolute opacity-0" src={check as string} />
        <input
          onChange={() => {
            if (inputReference.current) {
              passReference(inputReference.current.checked);
            }
          }}
          ref={inputReference}
          className="flex size-[16px] cursor-pointer opacity-0"
          id={id}
          type="checkbox"
        />
      </div>
      <p className="text-[#12131A] [transition:color_300ms] dark:text-[#E4E4EF]">{description}</p>
    </label>
  );
};

export default LabelCheckbox;
