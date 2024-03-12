import Header from "./Header";
import Options from "./Options";
import Inputs from "./Inputs";
import Button from "./Button";
import Container from "./Container";
import Form from "./Form";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  useEffect(() => {
    console.log("Hello every single person visiting this app! :D");
  }, []);

  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const course = 4.45;

    const convertedResult = (amount * course).toFixed(2) + "zł";

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
    <Container >
      <Header />
      <Form onSubmit={onFormSubmit}>
        <Options
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          handleFromCurrencyChange={handleFromCurrencyChange}
          handleToCurrencyChange={handleToCurrencyChange}
        />
        <Inputs
          amount={amount}
          handleAmountChange={handleAmountChange}
          result={result}
        />
        <Button />
      </Form>
    </Container>
  );
}

export default App;
