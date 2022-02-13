const useFormattedPrice = (qty) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(qty);
};

export default useFormattedPrice;
