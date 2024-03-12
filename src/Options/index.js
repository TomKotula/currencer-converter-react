
const Options = ({ fromCurrency, toCurrency, handleFromCurrencyChange, handleToCurrencyChange }) => (
    <div className="form__select--container">
        <select className="form__select" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option></option>
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
        </select>
        <select className="form__select" value={toCurrency} onChange={handleToCurrencyChange}>
            <option></option>
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
        </select>
    </div>
);

export default Options;