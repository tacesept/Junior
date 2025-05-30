import { useEffect, useRef } from "react";
import EmptyResult from "../components/EmptyResult";
import Result from "../components/Result";

export default function ResultSection({
  isCalculated,
  monthlyPayment,
  totalPayment, 
}) {
  const liveRegionRef = useRef(null);

  useEffect(() => {
    if (isCalculated && liveRegionRef.current) {
      liveRegionRef.current.focus();
    }
  }, [isCalculated]);
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      tabIndex={-1}
      ref={liveRegionRef}
      className="bg-slate-900 py-8 px-6 md:px-10 lg:rounded-bl-[5rem]"
    >
      {!isCalculated && <EmptyResult />}
      {isCalculated && (
        <Result monthlyPayment={monthlyPayment} totalPayment={totalPayment} />
      )}
    </div>
  );
}
