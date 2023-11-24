import { FaRegTrashAlt } from "react-icons/fa";
export default function TaskItem(props) {
    return (
      <li
        className="bg-slate-100 text-center py-4 rounded shadow shadow-slate-400">
        {props.name}
        <FaRegTrashAlt onClick={props.removeItem} className=" w-5 inline pl-1 cursor-pointer"/>
      </li>
    );
  }
  