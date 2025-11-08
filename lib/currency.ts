// Currency formatting utilities
export const formatCurrency = (amount: number): string => {
  return `Rs.${amount.toFixed(2)}`;
};

// Amount thresholds for color coding
export const AMOUNT_THRESHOLDS = {
  HIGH: 100,    // > 100 Rs: High expense (red)
  MEDIUM: 50,   // > 50 Rs: Medium expense (yellow)
  // <= 50 Rs: Low expense (green)
};

// Get color class based on amount
export const getAmountColorClass = (amount: number): string => {
  if (amount > AMOUNT_THRESHOLDS.HIGH) return 'border-red-500';
  if (amount > AMOUNT_THRESHOLDS.MEDIUM) return 'border-yellow-500';
  return 'border-green-500';
};