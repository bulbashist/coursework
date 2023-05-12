import { Input, Wrapper } from "./styles";
import { useAppDispatch } from "../../hooks";
import { changeProductAmount } from "../../pages/cart/slice";

type Props = {
  id: number;
  count: number;
};

const Counter = ({ id, count }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => dispatch(changeProductAmount({ id, count: count - 1 }))}
      >
        -
      </button>
      <Input>{count}</Input>
      <button
        onClick={() => dispatch(changeProductAmount({ id, count: count + 1 }))}
      >
        +
      </button>
    </Wrapper>
  );
};

export default Counter;
