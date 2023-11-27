export default function Total(props){
    return (
        <div className="text-white flex space-between w-60 h-20 rounded ">
            <h2 className="mx-5 ">{props.title}</h2>
            $ {parseFloat(props.value).toFixed(2)}
        </div>
    )
}