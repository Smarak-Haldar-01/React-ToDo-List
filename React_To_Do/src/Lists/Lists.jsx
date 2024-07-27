import SubList from "./SubList"
import No_Data from "./No_Data"
export function Lists({to_do_lists}){
  console.log(to_do_lists);
  return <>
    <table className="table table-bordered text-center table-dark">
      <thead>
        <tr>
          <th>
            SL. No.
          </th>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
          <th>
            Description
          </th>
          <th>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        { to_do_lists.length === 0 && <No_Data /> }
        { to_do_lists.map((item) => <SubList key={item.name} list={item} />) }
      </tbody>
    </table>
  </>
}