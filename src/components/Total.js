export default function Total(props){
    return (
        <div className="flex space-between w-60 h-20">
            <h2 className="mx-5">{props.title}</h2>
            ${props.value}
        </div>
    )
}