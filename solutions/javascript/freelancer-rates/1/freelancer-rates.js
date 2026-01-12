// 1️⃣ Calculate daily rate from hourly rate
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

// 2️⃣ Calculate how many full days fit in a budget
export function daysInBudget(fixedBudget, ratePerHour) {
  const dailyRate = ratePerHour * 8;
  const days = fixedBudget / dailyRate;
  return Math.floor(days);
}

// 3️⃣ Calculate project price with monthly discount
export function priceWithMonthlyDiscount(hourlyRate, billableDays, discount) {
  const dailyRate = hourlyRate * 8;

  const fullMonths = Math.floor(billableDays / 22);
  const remainingDays = billableDays % 22;

  const monthlyCost = dailyRate * 22;
  const discountedMonthlyCost = monthlyCost * (1 - discount);

  const fullMonthsCost = fullMonths * discountedMonthlyCost;
  const remainingDaysCost = remainingDays * dailyRate;

  const totalCost = fullMonthsCost + remainingDaysCost;

  return Math.ceil(totalCost);
}
dayRate(89); 
// → 712

daysInBudget(20000, 89); 
// → 28

priceWithMonthlyDiscount(89, 230, 0.42); 
// → correct rounded-up total
