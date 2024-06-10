import { useState, useEffect } from "react";

const useCurrencyConverter = (apiUrl) => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateExchangeRates = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.data) {
          setExchangeRates(data.data);
        } else {
          setError("Unexpected API response format");
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        setError(
          "Something went wrong... Please check your Internet connection or try again later"
        );
        console.error(
          "Something went wrong... Please check your Internet connection or try again later:",
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    updateExchangeRates();
  }, [apiUrl]);

  const onFormSubmit = (event, amount, fromCurrency, toCurrency, setResult) => {
    event.preventDefault();

    const result = calculateResult(amount, fromCurrency, toCurrency);
    setResult(result);
  };

  const handleAmountChange = (event, setAmount) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event, setFromCurrency) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event, setToCurrency) => {
    setToCurrency(event.target.value);
  };

  const calculateResult = (amount, fromCurrency, toCurrency) => {
    const fromRate = exchangeRates[fromCurrency]?.value;
    const toRate = exchangeRates[toCurrency]?.value;

    if (fromRate && toRate) {
      const convertedAmount = (amount * toRate) / fromRate;
      return convertedAmount.toFixed(2) + " " + toCurrency;
    } else {
      console.error("Invalid exchange rate values");
      return "Error";
    }
  };

  return {
    exchangeRates,
    isLoading,
    error,
    onFormSubmit,
    handleAmountChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
  };
};

export default useCurrencyConverter;
