import { useSelector } from 'react-redux';
import { selectInputValue } from '../store/input/selector';

const View = () => {
  const inputValue = useSelector(selectInputValue);

  return <div>Value: {inputValue}</div>;
};

export default View;
