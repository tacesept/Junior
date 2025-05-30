import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import FormSection from "./layouts/FormSection";
import ResultSection from "./layouts/ResultSection";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false); 
  const firstInputRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    /* reset(); */
    const { monthlyPayment, totalPayment } = calculateRepayments(
      data.mortgageAmount,
      data.mortgageTerm,
      data.interestRatePercentage,
      data.mortgageType
    );
    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setIsCalculated(true); 
  };

  const handleReset = () => {
    reset();
    setIsCalculated(false);
    firstInputRef.current.focus();
  };

  /* i dont know how to calculate the repayments so i ask ai to help me */
  const calculateRepayments = (
    principal,
    termYears,
    annualRatePercent,
    type
  ) => {
    // ─────────── cast to Number ───────────
    const P = Number(principal);
    const years = Number(termYears);
    const rate = Number(annualRatePercent) / 100 / 12;
    const n = years * 12;

    let monthlyPayment, totalPayment;

    if (type === "Repayment") {
      // amortizing loan formula
      if (rate === 0) {
        monthlyPayment = P / n;
      } else {
        monthlyPayment = (P * rate) / (1 - Math.pow(1 + rate, -n));
      }
      totalPayment = monthlyPayment * n;
    } else if (type === "Interest Only") {
      // pay interest only each month
      monthlyPayment = P * rate;
      totalPayment = monthlyPayment * n + P;
    } else {
      throw new Error("Type must be 'Repayment' or 'Interest Only'");
    }

    // ─────────── round safely ───────────
    return {
      monthlyPayment: monthlyPayment.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      totalPayment: totalPayment.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    };
  }; 

  return (
    <main>
      <h1 className="sr-only">Mortgage Calculator</h1>
      <div className="md:m-10 lg:m-20">
        <div className="lg:grid lg:grid-cols-2 max-w-[1008px] mx-auto bg-white md:rounded-3xl overflow-hidden">
          <FormSection
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            handleReset={handleReset} 
          />
          <ResultSection
            isCalculated={isCalculated}
            monthlyPayment={monthlyPayment}
            totalPayment={totalPayment} 
          />
        </div>
      </div>
    </main>
  );
}

export default App;
