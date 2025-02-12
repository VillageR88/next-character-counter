import Image from 'next/image';
import check from '../../public/assets/images/icon-check.svg';
const LabelCheckbox = ({ id, description }: { id: string; description: string }) => (
  <label className="flex cursor-pointer items-center gap-[10px]">
    <div className="flex items-center justify-center rounded-[4px] border border-[#12131A] [transition:background-color_300ms,border-color_300ms] has-[input:checked]:border-[#C27CF8] has-[input:checked]:bg-[#C27CF8] dark:border-[#E4E4EF] [&:has(input:checked)_img]:opacity-100">
      <Image alt="check icon" className="absolute opacity-0" src={check as string} />
      <input className="flex size-[16px] cursor-pointer opacity-0" id={id} type="checkbox" />
    </div>
    <p className="text-[#12131A] [transition:color_300ms] dark:text-[#E4E4EF]">{description}</p>
  </label>
);

export default LabelCheckbox;
