import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import ToDoItem from "./ToDoItem";
import { data } from "../assets/data";

export default function ToDoList() {
  // initially checks for recent list exist in local storage or not , otherwise provide default todo list
  const [list, setList] = useState(
    window.localStorage.getItem("todolist")
      ? JSON.parse(window.localStorage.getItem("todolist"))
      : data
  );

  // this generally stores the object of item to be updated or added, type key's value decide between add and edit
  const [edit, setEdit] = useState({
    status: false,
    type: "",
    item: { id: 0, task: "", description: "" },
  });

  //Normal state
  const [showAdd, setShowAdd] = useState(false);

  //triggers when there is any change in list like edit, delete,update. And update list in localstorage
  useEffect(() => {
    window.localStorage.setItem("todolist", JSON.stringify(list));
  }, [list]);

  //this function, generally taked id as argument, looks for id, which is not equal to it and update the item.
  const handleDelete = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  //this function just manage the states, that which section should be visible at particular time 
  const handleEdit = (item, type) => {
    setShowAdd(true);
    setEdit({ status: true, type: type, item: item });
  };

  // this function checks the new/edit todo item is empty or not, and then according to type it changes its path to execute with adding the new item or edit the exist one.
  // add item generally create new object in array with fields like status, task,description
  // edit item display the selected item in edit mode after submission the updated content is changed in original array.
  const handleEditItem = () => {
    if (edit.item.task.length > 2 && edit.item.description.length > 2) {
      if (edit.type == "update") {
        setList((prev) =>
          prev.map((item) => {
            if (item.id === edit.item.id) {
              return {
                ...item,
                task: edit.item.task,
                description: edit.item.description,
              };
            } else {
              return item;
            }
          })
        );
      } else {
        setList((prev) => [
          ...prev,
          {
            id:
              prev.length > 0
                ? parseInt(
                    Math.max(...prev.map((item) => parseInt(item.id))) + 1
                  )
                : 1,
            task: edit.item.task,
            description: edit.item.description,
          },
        ]);
      }
      setEdit((prev) => ({ ...prev, status: false }));
      setShowAdd(false);
    }
  };
  //this function just changes status of Todo list item to completed
  const handleMarking = (id) => {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: true,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <section className="text-white flex flex-col gap-4 w-full md:w-1/2 h-full items-center self-center justify-center p-4">
      <h1 className="font-serif text-4xl md:text-6xl">My Task List</h1>
      {list.length > 0 || showAdd ? (
        !edit.status ? (
          <>
            <table className="w-full border-2 border-collapse">
              <thead className="font-bold text-[12xl] md:text-xl border-b-2">
                <tr>
                  <td>S.No.</td>
                  <td>Task</td>
                  <td>Status</td>
                  <td>Manipulate</td>
                </tr>
              </thead>
              <tbody className="text-[10xl] md:text-xl">
                {list.map((item, index) => (
                  <ToDoItem
                    key={`task/${index}`}
                    item={item}
                    index={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleMarking={handleMarking}
                  />
                ))}
              </tbody>
            </table>
            <button
              className="self-center shadow-[0.01rem_0.01rem_0.4rem_0_white_inset]"
              onClick={() =>
                handleEdit({ id: 0, task: "", description: "" }, "add")
              }
            >
              Add
            </button>
          </>
        ) : (
          <article className="relative w-[300px] rounded-md border-2 shadow-[0.01rem_0.01rem_0.4rem_0_white] flex flex-col gap-4 p-4">
            <input
              type="text"
              name="task"
              id="task"
              className="border-2 p-2 rounded-md"
              placeholder="Enter Task Name"
              value={edit.item.task}
              onChange={(e) => {
                setEdit((prev) => ({
                  ...prev,
                  item: { ...prev.item, task: e.target.value },
                }));
              }}
            />
            <textarea
              type="text"
              name="description"
              id="description"
              className="border-2 p-2 rounded-md"
              placeholder="Enter Task Description"
              value={edit.item.description}
              onChange={(e) => {
                setEdit((prev) => ({
                  ...prev,
                  item: { ...prev.item, description: e.target.value },
                }));
              }}
            ></textarea>
            <button
              className="self-center shadow-[0.01rem_0.01rem_0.4rem_0_white_inset]"
              onClick={handleEditItem}
            >
              Submit
            </button>
            <ImCross
              className="text-2xl text-red-500 absolute top-0 right-0 -mt-3 -mr-3 cursor-pointer"
              onClick={() => setEdit((prev) => ({ ...prev, status: false }))}
            />
          </article>
        )
      ) : (
        <>
          <p className="text-red-500 font-bold">No Task has been added yet!</p>
          <button
            className="self-center shadow-[0.01rem_0.01rem_0.4rem_0_white_inset]"
            onClick={() =>
              handleEdit(
                { id: 0, task: "", description: "", status: false },
                "add"
              )
            }
          >
            Add
          </button>
        </>
      )}
    </section>
  );
}
