export default function Liste(props) {
  return (
    <div className="bg-white  w-2/4 block rounded py-2 my-1">
      <input type="checkbox" id="test"></input>
      <label for="test">{props.options}</label>
    </div>
  );
}
