import { SiTicktick } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
export default function ToDoItem(props) {
  const { item, index, handleMarking, handleDelete, handleEdit } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.task}</td>
      <td className={`${item.status ? "text-green-500" : "text-orange-500 animate-pulse"}`}>
        {item.status ? "complete" : "todo"}
      </td>
      <td className="flex flex-row gap-4 items-center justify-center py-2">
        {!item.status && (
          <SiTicktick
            className="text-green-400 text-xl cursor-pointer"
            title="Mark as done"
            onClick={() => handleMarking(item.id)}
          />
        )}
        <MdEdit
          className="text-blue-700 text-xl cursor-pointer"
          title="Edit Task"
          onClick={() => handleEdit(item, "update")}
        />
        <MdDelete
          className="text-red-600 text-xl cursor-pointer"
          title="Delete Task"
          onClick={() => handleDelete(item.id)}
        />
      </td>
    </tr>
  );
}
