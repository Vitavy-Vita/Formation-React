import { FaRegTrashAlt } from "react-icons/fa";
export default function CompleteTaskItem(props) {
  return (
    <div className="bg-slate-100 text-center py-4 rounded shadow shadow-slate-400 flex justify-between item-center px-8">
      <input type="checkbox"/>
      {props.name}
      <FaRegTrashAlt
        onClick={props.removeItem}
        className=" w-5 inline pl-1 cursor-pointer"
      />
    </div>
  );
}