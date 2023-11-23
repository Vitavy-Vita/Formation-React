export default function TaskItem(props) {
    return (
      <li
        className="bg-slate-100 text-center py-4 rounded shadow shadow-slate-400">
        {props.name}
      </li>
    );
  }
  