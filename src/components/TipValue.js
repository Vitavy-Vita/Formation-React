export default function TipValue(props){
    const active = {}
    return (
        <div className={`text-white bg-${
            props.value === props.tip? 'blue-800':'blue-500' } pt-2 m-3 w-20 h-10 rounded`}>
            <button onClick={props.onClickHandler}>{props.value}%</button>
            
        </div>
    )
}