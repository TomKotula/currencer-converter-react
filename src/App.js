import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";
import useCurrencyConverter from "./useCurrencyConverter";
import { Loading, Error } from "./loadingAndErrorStyles";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("PLN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");
  const apiUrl =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_n0t0wy9gOpDWE1xRmKNv89VIKYH4M0T9ElbhbG4C&currencies=PLN%2CUSD%2CEUR%2CCHF";
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
