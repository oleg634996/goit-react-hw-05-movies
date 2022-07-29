import { useLocation } from 'react-router-dom';

function Button() {
  const localtion = useLocation();

  console.log(localtion);

  return <button type="button"> back</button>;
}

export default Button;
