import { useState } from "react";
import "./App.css"
import {Lists} from "./Lists/Lists.jsx"
import {Menu} from "./Menu/Menu.jsx"

export default function App(){
  let [to_do_list, pushToDo] = useState([]);
  function addToDo(){
    let name = prompt('Enter ToDo Name ?');
    
    let price = prompt('Enter ToDo Price ?');    

    let desc = prompt('Enter ToDo Description ?');

    if(to_do_list.length == 0){
      pushToDo([{'id':to_do_list.length + 1, 'name':name, 'price':price, 'desc':desc}]);
      alert('ToDo Added');
    }else{
      pushToDo([...to_do_list, {'id':to_do_list.length + 1, 'name':name, 'price':price, 'desc':desc}]);
      alert('ToDo Added');
    }
  }
  return <>
    <div className="row">
      <div className="col-2">
        <Menu addToDo={addToDo}/>
      </div>
      <div className="col-10 head-div">
        <div className="container bg-warning text-center"><h1 className="text-danger"> Welcome To To-Do Lists </h1></div>
        <Lists to_do_lists={to_do_list} />
      </div>
    </div>
  </>
}