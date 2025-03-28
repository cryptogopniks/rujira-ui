// Extend the Number interface with your custom method
interface Number {
  toLocaleDecimal: (decimals: number) => string;
}

// Add the method to the Number prototype
Number.prototype.toLocaleDecimal = function (decimals = 0): string {
  return this.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
};