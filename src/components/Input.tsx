import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue } from '../store/input/reducer';
import { selectInputValue } from '../store/input/selector';

const Input = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector(selectInputValue);

  return (
    <div>
      <h3>Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => dispatch(updateInputValue(e.target.value))}
      />
    </div>
  );
};

export default Input;
