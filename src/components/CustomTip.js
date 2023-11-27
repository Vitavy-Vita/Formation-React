export default function CustomTip(props) {
    
  return (
    <div
      className={`text-white bg-${
        props.value === props.tipPerPeople ? "blue-800" : "blue-500"
      }  m-3 w-20 h-10  rounded`}
    >
      <input
        onChange={props.onSubmitHandler}
        placeholder={props.placeholder}
        className="w-full h-full bg-transparent text-center placeholder-white "
      ></input>
    </div>
  );
}
