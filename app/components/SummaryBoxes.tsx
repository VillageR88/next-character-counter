const SummaryBoxes = () => (
  <ul className="mt-[48px] flex gap-[16px]">
    {[
      {
        description: 'Total Characters',
        background: 'bg-[#D3A0FA]',
        pattern: 'bg-[url(../public/assets/images/pattern-character-count.svg)]',
        amount: 0,
      },
      {
        description: 'Word Count',
        background: 'bg-[#FF9F00]',
        pattern: 'bg-[url(../public/assets/images/pattern-word-count.svg)]',
        amount: 0,
      },
      {
        description: 'Sentence Count',
        background: 'bg-[#FE8159]',
        pattern: 'bg-[url(../public/assets/images/pattern-sentence-count.svg)]',
        amount: 0,
      },
    ].map((item, index) => {
      return (
        <li
          className={`flex min-h-[150px] w-full flex-col rounded-[12px] bg-[calc(100%+1.9em)_center] bg-no-repeat ${item.pattern} ${item.background} px-[16px] py-[26.5px] text-[#12131A]`}
          key={item.background}
        >
          <h2 className="text-[64px] font-bold leading-[100%] tracking-[-1px]">{item.amount.toString()}</h2>
          {index === 0 ? (
            <div className="flex items-center gap-1">
              <p className="text-[20px] leading-[140%] tracking-[-0.6px]">{item.description}</p>
              <p id="no-space-info" className="leading-[130%] tracking-[-0.6px] opacity-0 [transition:opacity_300ms]">
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
);

export default SummaryBoxes;
