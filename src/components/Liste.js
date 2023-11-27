export default function Liste(props) {
  return (
    <div className="w-full block rounded py-2 my-1">
      <input type="checkbox" id="test" checked={props.value} onChange={props.onChange}></input>
      <label for="test">{props.options}</label>
    </div>
  );
}
