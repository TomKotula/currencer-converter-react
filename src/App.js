import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PLN");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const updateExchangeRates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/PLN");
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    updateExchangeRates();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(exchangeRates).length === 0) {
      console.log("Exchange rates not available. Waiting for update...");
      return;
    }

    calculateResult();
  };

  const calculateResult = () => {
    const convertedAmount =
      (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    const convertedResult = convertedAmount.toFixed(2) + " " + toCurrency;
    setResult(convertedResult);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return (
    <Container>
      <Header />
      <Form
        onSubmit={onFormSubmit}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        handleFromCurrencyChange={handleFromCurrencyChange}
        handleToCurrencyChange={handleToCurrencyChange}
        amount={amount}
        handleAmountChange={handleAmountChange}
        result={result}
      />
    </Container>
  );
}

export default App;
