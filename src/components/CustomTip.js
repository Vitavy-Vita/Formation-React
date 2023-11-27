export default function CustomTip(props){
    return (
        <div className="text-blue-500 bg-blue-500 pt-2 m-3 w-20 h-10">
            <input onChange={props.onSubmitHandler} ></input>
        </div>
    )
}