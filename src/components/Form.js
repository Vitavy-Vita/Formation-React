export default function Form({addTaskHandler,onChangeHandler}) {

    return (
      <div>
        <form
          onSubmit={addTaskHandler}
          className="flex justify-center items-center gap-4">
          <input
            onChange={onChangeHandler}
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
