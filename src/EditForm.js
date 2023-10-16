import { useNavigate } from "react-router-dom";
import { store  } from "./StoreCompo";
import { useContext } from "react";
import { useParams } from "react-router-dom";
function EditForm(){
  let param=useParams();
  const  contextData = useContext(store);
  let studentNavigation = useNavigate();
 
let filterData = (data)=>{
     if (Number(data.id) === Number(param.ID)) {
       return data;
     }
  }
  var currentData = contextData.data.filter(filterData)
   
     const editform = useNavigate;
    return(
        <>
        <form>
            <label>Name :</label>
            <input type="text" name="name" placeholder="name" value={currentData[0].Name}></input>
            <label>Course :</label>
            <input type="text" name="course" placeholder="course" value={currentData[0].Course}></input>
            <label>Batch :</label>
            <input type="text" name="batch" placeholder="batch" value={currentData[0].Batch}></input>
            <label>Age :</label>
            <input type="number" name="age" placeholder="age" value={currentData[0].Age}></input>

        </form>
        <button onClick={() => studentNavigation("/student")}>cancel</button>
        <button onClick={() => studentNavigation("/student")}>update</button>
        </>
    )
}
export default EditForm;







