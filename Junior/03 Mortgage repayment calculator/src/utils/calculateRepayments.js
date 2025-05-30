/* i dont know how to calculate the repayments so i ask ai to help me */
export const calculateRepayments = (principal, termYears, annualRatePercent, type) => {
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
