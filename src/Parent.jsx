import Child from './Child';
import { useState } from 'react';

import './App.css';

export default function Parent() {
  const [dataForChild, setDataForChild] = useState('');
  const [dataFromChild, setDataFromChild] = useState('');

  function OnChangeHandler(event) {
    setDataForChild(event.target.value);
  }

  function onChangeHandlerCallBackFunction(value) {
    setDataFromChild(value);
  }

  return (
    <div className="card">
      <h2>Parent</h2>
      <p>{dataFromChild}</p>
      <input type="text" onChange={OnChangeHandler} />
      <Child
        dataForChild={dataForChild}
        onChange={onChangeHandlerCallBackFunction}
      />
    </div>
  );
}
