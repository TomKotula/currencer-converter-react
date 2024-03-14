import Options from "../Options";
import Inputs from "../Inputs";
import Button from "../Button";

const Form = ({
    onSubmit,
    fromCurrency,
    toCurrency,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    amount,
    handleAmountChange,
    result
    
}) => (
    <form className="form" onSubmit={onSubmit}>
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
    </form>
);

export default Form;