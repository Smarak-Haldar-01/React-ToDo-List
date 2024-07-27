export default function SubList({list}){
  return <>
    <tr>
      <td>
        {list.id}
      </td>
      <td>
        {list.name}
      </td>
      <td>
        {list.price}
      </td>
      <td>
        {list.desc}
      </td>
      <td>
        <button id="edit_toDo" className="btn btn-warning">Edit</button>
        <button id="delete_toDo" className="btn btn-danger m-2">Delete</button>
      </td>
    </tr>
  </>
}