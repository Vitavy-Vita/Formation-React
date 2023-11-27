import { FaRegCopy } from "react-icons/fa6";
export default function Inputs(props) {
    return (
        <div className="flex justify-center items-center">
            <input value={props.value} className="bg-white  h-10 relative rounded"></input>
            <FaRegCopy className="absolute right-2 top-2"/>
        </div>
    )
}