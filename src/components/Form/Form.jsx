import { useState } from 'react';

function Form({ onSubmit }) {
  const [inputText, setInputText] = useState();

  const handelSubmit = event => {
    event.preventDefault();

    onSubmit(inputText.toLowerCase().trim());
  };

  return (
    <form onSubmit={handelSubmit}>
      <input type="text" onChange={event => setInputText(event.target.value)} />
      <button type="submit">search</button>
    </form>
  );
}

export default Form;
