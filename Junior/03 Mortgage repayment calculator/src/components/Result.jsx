export default function Result({ monthlyPayment, totalPayment }) {
  return (
    <div className="leading-[1.5]">
      <h2 className="text-white text-2xl leading-[1.25] font-bold mb-4">
        Your results
      </h2>
      <p className="text-slate-300 mb-6 md:mb-10">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <dl className="shadow-[0_-4px_0_0_#D8DB2F] rounded-lg py-6 px-4 md:p-8 bg-[#00000025]">
        <div className="border-b border-slate-700 pb-4 space-y-2">
          <dt className="text-slate-300">Your monthly repayments</dt>
          <dd className="text-lime text-[3.5rem] font-bold leading-[1.25]">
            £{monthlyPayment}
          </dd>
        </div>
        <div className="mt-4 space-y-2">
          <dt className="text-slate-300">Total you'll repay over the term</dt>
          <p className="text-white text-2xl font-bold leading-[1.25]">
            £{totalPayment}
          </p>
        </div>
      </dl>
    </div>
  );
}