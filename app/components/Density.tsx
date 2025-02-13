const DENSITY_TITLE = 'Letter Density';
const DENSITY_DESCRIPTION_EMPTY = 'No characters found. Start typing to see letter density.';

const Density = ({ textAreaValue }: { textAreaValue: string }) => {
  console.log(textAreaValue);
  return (
    <div className="mt-[24px] flex flex-col gap-[20px] text-[#12131A] dark:text-[#E4E4EF]">
      <h2 className="text-[24px] font-semibold leading-[130#] tracking-[-1px] [transition:color_300ms]">
        {DENSITY_TITLE}
      </h2>
      <p className="[transition:color_300ms]">{DENSITY_DESCRIPTION_EMPTY}</p>
    </div>
  );
};

export default Density;
