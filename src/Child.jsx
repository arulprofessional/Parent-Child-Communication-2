import './App.css';

export default function Child(props) {
  function onChangeHandler(event) {
    props.onChange(event.target.value);
  }
  return (
    <div className="card">
      <h2>Child</h2>
      <p>{props.dataForChild}</p>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}
