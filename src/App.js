import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";
import useCurrencyConverter from "./useCurrencyConverter";
import { Loading, Error } from "./loadingAndErrorStyles";
import { apiUrl } from "./constans";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("PLN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");
  const {
    isLoading,
    error,
    onFormSubmit,
    handleAmountChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
  } = useCurrencyConverter(apiUrl);

  return (
    <Container>
      <Header />
      {isLoading && <Loading>Give us a moment...</Loading>}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && (
        <Form
          onSubmit={(event) =>
            onFormSubmit(event, amount, fromCurrency, toCurrency, setResult)
          }
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          handleFromCurrencyChange={(event) =>
            handleFromCurrencyChange(event, setFromCurrency)
          }
          handleToCurrencyChange={(event) =>
            handleToCurrencyChange(event, setToCurrency)
          }
          amount={amount}
          handleAmountChange={(event) => handleAmountChange(event, setAmount)}
          result={result}
        />
      )}
    </Container>
  );
}

export default App;
