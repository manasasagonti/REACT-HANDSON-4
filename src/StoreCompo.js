import { createContext, useState } from "react";

export const store = createContext();

function StoreCompo(props){
    const[data,setdata] = useState([
        {Name:'john' , Age:26, Course:'MERN', Batch:'October', id:1},
        {Name:'Doe' , Age:25, Course:'MERN', Batch:'November', id:2},
        {Name:'Biden' , Age:26, Course:'MERN', Batch:'September',id:3},
        {Name:'Barar' , Age:22, Course:'MERN', Batch:'September',id:4},
        {Name:'Christ' , Age:23, Course:'MERN', Batch:'October',id:5},
        {Name:'Elent' , Age:24, Course:'MERN', Batch:'November',id:6}
    ])
    return(
        <>
        <store.Provider value={{data,setdata}}>
            {props.children}
        </store.Provider>
        </>
    )
}
export default StoreCompo;