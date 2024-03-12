
const Inputs = ({ amount, handleAmountChange, result }) => (
    <div className="form__input--container">
        <input
            className="form__input form__input--grey"
            type="number"
            name="number"
            min="1"
            value={amount}
            onChange={handleAmountChange}
            required
            placeholder="amount"
        />
        <input
            className="form__input form__input--grey"
            type="text"
            name="readonly"
            readOnly
            value={result}
            placeholder="result"
        />
    </div>
);

export default Inputs;