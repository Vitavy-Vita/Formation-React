export default function Form(props) {
  return (
    <div>
      <form
        onSubmit={props.addTaskHandler}
        className="flex justify-center items-center gap-4"
      >
        <input
          onChange={props.onChangeHandler}
          value={props.value}
          type="text"
          className="w-full md:w-2/3"
        />
        <input
          type="submit"
          value="Add Task"
          className="text-yellow-400 text-2xl"
        />
      </form>
    </div>
  );
}
