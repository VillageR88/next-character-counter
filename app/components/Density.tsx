const DENSITY_TITLE = 'Letter Density';
const DENSITY_DESCRIPTION_EMPTY = 'No characters found. Start typing to see letter density.';

const Density = ({ textAreaValue, isExcludedSpaces }: { textAreaValue: string; isExcludedSpaces: boolean }) => {
  const calculationMap = {} as Record<string, number>;
  for (const item of textAreaValue.split('')) {
    if (calculationMap[item]) calculationMap[item]++;
    else calculationMap[item] = 1;
  }
  return (
    <div className="mt-[24px] flex flex-col gap-[20px] text-[#12131A] dark:text-[#E4E4EF]">
      <h2 className="text-[24px] font-semibold leading-[130#] tracking-[-1px] [transition:color_300ms]">
        {DENSITY_TITLE}
      </h2>
      {textAreaValue.length === 0 ? (
        <p className="[transition:color_300ms]">{DENSITY_DESCRIPTION_EMPTY}</p>
      ) : (
        <ul className="flex flex-col gap-[12px]">
          {Object.keys(calculationMap).map((x) => (
            <li
              key={x}
              className={`${x === ' ' && isExcludedSpaces ? 'absolute opacity-0' : 'opacity-100 [transition:opacity_300ms]'} flex items-center gap-[14px]`}
            >
              <div className="flex h-[12px] min-w-[16px] items-center">
                <p className="leading-[130%] tracking-[-0.6px] [transition:color_300ms]">{x.toUpperCase()}</p>
              </div>
              <div className="h-[12px] w-full max-w-[859px] rounded-[999px] bg-[#F2F2F7] [transition:background_300ms] dark:bg-[#21222C]">
                <div
                  style={{ width: `${((calculationMap[x] / textAreaValue.length) * 100).toString()}%` }}
                  className="min-h-full rounded-[999px] bg-[#D3A0FA]"
                />
              </div>
              <p className="ml-auto leading-[130%] tracking-[-0.6px] [transition:color_300ms]">
                {calculationMap[x].toString()}&nbsp;(
                {((calculationMap[x] / textAreaValue.length) * 100).toFixed(2)}%)
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Density;
