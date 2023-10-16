import { useNavigate } from "react-router-dom";

function StudentForm(){
    const studentNavigation = useNavigate();
    return(
        <>
        <form className="flex">
            <label>Name :</label>
            <input type="text" name="name" placeholder="name"></input>
            <label>Course :</label>
            <input type="text" name="course" placeholder="course"></input>
            <label>Batch :</label>
            <br></br>
            <input type="text" name="batch" placeholder="batch"></input>
            <label>Age :</label>
            <input type="number" name="age" placeholder="age"></input>
        </form>
        <button type="button" className="cancel" onClick={() => studentNavigation("/student")}>cancel</button>
        <button type="button" className="submit">submit</button>
        </>
    )
}
export default StudentForm;