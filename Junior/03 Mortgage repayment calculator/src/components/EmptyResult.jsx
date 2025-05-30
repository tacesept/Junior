import Empty from "../assets/images/illustration-empty.svg?react";

export default function EmptyResult() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center lg:mt-[112px]">
      <Empty />
      <h2 className="text-white text-2xl font-bold leading-[1.25]">
        Results shown here
      </h2>
      <p className="text-slate-300 leading-[1.5]">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
