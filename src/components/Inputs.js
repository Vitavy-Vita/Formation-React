import { FiDollarSign } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
export default function Inputs(props) {
  const chooseIcon = function () {
    return props.iconType === "dollar" ? <FiDollarSign /> : <IoPerson />;
  };
  return (
    <div className="text-start  py-5">
      <h2 className="mx-5">{props.title}</h2>
      <form className="bg-white flex justify-between items-center border-2 m-5  rounded-md ">
        <label className="absolute pl-2">{chooseIcon()}</label>
        <input
          value={props.value}
          onChange={props.onSubmitHandler}
          className="w-full text-right p-3"
        ></input>
      </form>
    </div>
  );
}
