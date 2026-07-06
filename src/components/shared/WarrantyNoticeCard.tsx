export function WarrantyNoticeCard() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.5rem] border border-red-500/30 bg-[#2b0505] px-5 py-5 shadow-[0_18px_60px_rgba(127,29,29,0.22)] sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-200/80">
            Important Notice
          </p>
          <h2 className="mt-2 text-lg font-semibold text-red-100 sm:text-xl">
            Your pool pump and pool filter must be in good running order, or it might void your
            warranty.
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-red-100/82 sm:text-base">
            Make sure the system is operating properly before installation or service work.
          </p>
        </div>
      </div>
    </section>
  );
}
