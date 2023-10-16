import { useContext } from 'react';
import {store} from './StoreCompo';
import { Link } from 'react-router-dom';
function Student(){
    const contextData = useContext(store);
  return (
       <>
       <div className="flex">
        <h1>Student Details</h1>
        <Link to="/student-desc" className='addNew'>Add New Student</Link>
      </div>
      <table id="students">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {
              contextData.data.map((details) => {
                return <>
                <tr key={details.id} >
                  <td>{details.Name}</td>
                  <td>{details.Age}</td>
                  <td>{details.Course}</td>
                  <td>{details.Batch}</td>

                   {/* <td><Link to={`/studentform/${details.id}`}  className='editDetailsBtn'>Edit</Link></td>  */}
                   <td><Link to={`/student-desc/${details.id}`}>Edit</Link></td>
                </tr>
                </>
              })
            }
        </tbody>
      </table>
      </>
)
}
export default Student;