export default function TipValue(props){
    return (
        <div className="text-white bg-blue-500 pt-2 m-3 w-20 h-10">
            <button>{props.value}%</button>
            
        </div>
    )
}