export default function TipValue(props){
    const active = {}
    return (
        <div className="text-white bg-blue-500 pt-2 m-3 w-20 h-10 hover:text-blue-800 hover:bg-slate-300 rounded">
            <button onClick={props.onClickHandler}>{props.value}%</button>
            
        </div>
    )
}