

// function App() {
//   return (
//     <div>
//       <ul>
//         {users.map((v, i) => {
//           return (
//             <li key={i}>
//               {v.address.geo.lat}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   );
// }

// import MAZAR from './assets/images/mazar.jpg'


// function App(){
//   return (
//     <div>
//       <img src={MAZAR} />
//     </div>
//   )
// }



// function App() {
//   return (
//     <div>
//       <Button arr={["ghous","ahmed"]} title="Login" />
//       <Button arr={["ghous","ahmed"]} title="Signup"/>
//       <Button arr={["ghous","ahmed"]} title="Logout"/>
//     </div>
//   )
// }

// import { useState } from 'react'

// function App() {
//   const [name, setName] = useState("ahmed")
//   const [detail,setDetail] = useState({
//     name: "ghous",
//     email: "ghous@gmail.com",
//     phone: 354545454
//   })

//   const handleClick = (msg) => {
//     console.log(msg)
//   }
//   return (
//     <div>
//       <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
//       <h1>{name}</h1>

//       <Card name={detail.name} email={detail.email} phone={detail.phone} />
//       <Button onClick={()=> {
//         setDetail({
//           name: "ahmed",
//           email: "ahmed@gmail.com",
//           phone: 345554
//         })
//       }}>Update</Button>



//       {/* <Input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Enter your name" />
//       <Button onClick={() => handleClick("Hello World")}>
//         Register
//       </Button> */}
//     </div>
//   )
// }

// import { Button, Input, Card } from './components';
// import React from 'react'

import { Button, Input, Card } from './components';
import React from 'react';

function App() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([])
    const addTodo = () => {
        let arr = [...todos];
        arr.push(value)
        setTodos(arr)
        setValue("")
    }

    const deleteTodo = (i) => {
        let arr = [...todos];
        arr.splice(i, 1)
        setTodos(arr)
    }

    const deleteTodos = () => {
        let arr = [""];
        setTodos(arr)
    }

    return (
        <div>
            <center><h1>Todos App</h1></center>
            <div className="maindiv">
                <div className="subdiv">
                    <Input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Todo" />
                    <Button onClick={addTodo}>Add</Button>
                    <Button onClick={deleteTodos}>Delete All</Button>
                    </div>
                <ul>
                    {todos.map((v, i) => {
                        return <li key={i}>{v} <Button onClick={() => deleteTodo(i)}>Delete</Button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}






export default App;
