import { InputContainer, Input } from "./styled";

const Inputs = ({ amount, handleAmountChange, result }) => (
    <InputContainer>
        <Input
            type="number"
            name="number"
            min="1"
            value={amount}
            onChange={handleAmountChange}
            required
            placeholder="amount"
        />
        <Input
            type="text"
            name="readonly"
            readOnly
            value={result}
            placeholder="result"
        />
    </InputContainer>
);

export default Inputs;