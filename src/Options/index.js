import { SelectContainer, Select } from "./styled";

const Options = ({ fromCurrency, toCurrency, handleFromCurrencyChange, handleToCurrencyChange }) => (
    <SelectContainer>
        <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
        </Select>
        <Select value={toCurrency} onChange={handleToCurrencyChange}>
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
        </Select>
    </SelectContainer>
);

export default Options;