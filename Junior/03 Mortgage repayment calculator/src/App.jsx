import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { calculateRepayments } from "./utils/calculateRepayments";

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
