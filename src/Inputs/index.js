
const Inputs = () => (
    <div className="form__input--container">
        <input
            className="form__input form__input--grey"
            type="number"
            name="number"
            min="1"
            required
            placeholder="amount"
        />
        <input
            className="form__input form__input--grey"
            type="text"
            name="readonly"
            readOnly
            placeholder="result"
        />
    </div>
);

export default Inputs;