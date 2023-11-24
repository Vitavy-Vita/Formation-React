import { FiDollarSign } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
export default function Inputs(props) {
  const chooseIcon = function () {
    if (props.iconType === "dollar") {
      return <FiDollarSign />;
    } else {
      return <IoPerson />;
    }
  };
  return (
    <div className="text-start  py-5">
      <h2 className="mx-5">{props.title}</h2>
      <form className="bg-white flex justify-between items-center border-2 m-5 pl-2 rounded-md ">
        {chooseIcon()}
        <input onChange={props.onSubmitHandler} className=" m-3 w-7"></input>
      </form>
    </div>
  );
}
