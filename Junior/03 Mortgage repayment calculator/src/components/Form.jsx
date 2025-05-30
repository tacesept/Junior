import Calculator from "../assets/images/icon-calculator.svg?react";

export default function Form({ register, handleSubmit, errors, onSubmit }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
      {/* Mortgage Amount */}
      <div className="space-y-3">
        <label className="block" htmlFor="mortgage-amount">
          Mortgage Amount
        </label>
        <div
          className={`relative group border ${
            errors.mortgageAmount ? "border-red" : "border-slate-500"
          } rounded-md text-lg font-bold leading-[1.25] overflow-hidden`}
        >
          <span
            className={`absolute top-0 left-0 h-full ${
              errors.mortgageAmount
                ? "bg-red text-white"
                : "bg-slate-100 text-slate-700"
            } flex items-center px-4  group-focus-within:bg-lime group-focus-within:text-slate-900`}
          >
            £
          </span>
          <input
            type="number"
            id="mortgage-amount"
            aria-invalid={errors.mortgageAmount ? "true" : "false"}
            aria-describedby={
              errors.mortgageAmount ? "mortgage-amount-error" : undefined
            }
            {...register("mortgageAmount", { required: true })}
            onKeyDown={(e) => {
              if (/\D/.test(e.key)) {
                e.preventDefault();
              }
            }}
            className="relative z-10 w-full py-3 pl-16 pr-4 bg-transparent text-slate-900 group-focus-within:outline-lime"
          />
        </div>
        {errors.mortgageAmount && (
          <p
            className="text-sm text-red-500 font-medium"
            role="alert"
            id="mortgage-amount-error"
          >
            This field is required
          </p>
        )}
      </div>
      {/* Mortgage Term and Interest Rate */}
      <div className="space-y-6 md:flex md:justify-between md:space-x-6">
        <div className="space-y-3 md:w-1/2">
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <div
            className={`relative group border ${
              errors.mortgageTerm ? "border-red" : "border-slate-500"
            } rounded-md text-lg font-bold leading-[1.25] overflow-hidden`}
          >
            <input
              type="number"
              id="mortgage-term"
              aria-invalid={errors.mortgageTerm ? "true" : "false"}
              aria-describedby={
                errors.mortgageTerm ? "mortgage-term-error" : undefined
              }
              {...register("mortgageTerm", { required: true })}
              onKeyDown={(e) => {
                if (/\D/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className="relative z-10 w-full py-3 pl-4 pr-16 bg-transparent text-slate-900 group-focus-within:outline-lime"
            />
            <span
              className={`absolute top-0 right-0 h-full ${
                errors.mortgageTerm
                  ? "bg-red text-white"
                  : "bg-slate-100 text-slate-700"
              } flex items-center px-4 group-focus-within:bg-lime group-focus-within:text-slate-900`}
            >
              Years
            </span>
          </div>
          {errors.mortgageTerm && (
            <p className="text-sm text-red-500 font-medium">
              This field is required
            </p>
          )}
        </div>
        <div className="space-y-3 md:w-1/2">
          <label htmlFor="interest-rate-percentage">Interest Rate</label>
          <div
            className={`relative group border ${
              errors.interestRatePercentage ? "border-red" : "border-slate-500"
            } rounded-md text-lg font-bold leading-[1.25] overflow-hidden`}
          >
            <input
              type="number"
              step="0.01"
              id="interest-rate-percentage"
              aria-invalid={errors.interestRatePercentage ? "true" : "false"}
              aria-describedby={
                errors.interestRatePercentage
                  ? "interest-rate-percentage-error"
                  : undefined
              }
              {...register("interestRatePercentage", {
                required: true,
              })}
              onKeyDown={(e) => {
                if (/\D/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className="relative z-10 w-full py-3 pl-4 pr-16 bg-transparent text-slate-900 group-focus-within:outline-lime"
            />
            <span
              className={`absolute top-0 right-0 h-full ${
                errors.interestRatePercentage
                  ? "bg-red text-white"
                  : "bg-slate-100 text-slate-700"
              } flex items-center px-4 group-focus-within:bg-lime group-focus-within:text-slate-900`}
            >
              %
            </span>
          </div>
          {errors.interestRatePercentage && (
            <p className="text-sm text-red-500 font-medium">
              This field is required
            </p>
          )}
        </div>
      </div>
      {/* Mortgage Type */}
      <fieldset className="space-y-3">
        <legend>Mortgage Type</legend>
        <div className="space-y-3">
          {["Repayment", "Interest Only"].map((type) => (
            <label
              key={type}
              className="flex w-full items-center gap-4 border border-slate-500 rounded-md py-3 px-4
                    [&:has(input:checked)]:bg-[#D8DB2F15] [&:has(input:checked)]:border-lime"
            >
              <input
                type="radio"
                id={type}
                name="mortgage-type"
                value={type}
                aria-invalid={errors.mortgageType ? "true" : "false"}
                aria-describedby={
                  errors.mortgageType ? "mortgage-type-error" : undefined
                }
                className="w-5 h-5 accent-lime-700"
                {...register("mortgageType", { required: true })}
              />
              <span className="text-slate-900 font-bold text-lg">{type}</span>
            </label>
          ))}
        </div>
        {errors.mortgageType && (
          <p
            className="text-sm text-red-500 font-medium"
            role="alert"
            id="mortgage-type-error"
          >
            This field is required
          </p>
        )}
      </fieldset>
      {/* Calculate Repayments */}
      <button
        type="submit"
        className="w-full md:mt-10 py-4 flex items-center gap-2 justify-center 
              bg-lime text-slate-900 rounded-full font-bold text-lg hover:bg-[#ECED97] transition-colors"
      >
        <Calculator />
        <span>Calculate Repayments</span>
      </button>
    </form>
  );
}
