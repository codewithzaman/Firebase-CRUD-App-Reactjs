import React, { useEffect,useState } from "react";
import { db } from "./FirebaseConfig";
import { collection, getDocs,addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
const userCollectionRef = collection(db,'crud');
const updateAge = async (id,age)=>{
  const usersDoc = doc(db,'crud',id);
  const newAge = {age:+age+5};
  await updateDoc(usersDoc,newAge)
}
const deleteUser = async(id)=>{
  const usersDoc = doc(db,'crud',id);
  await deleteDoc(usersDoc)
}
const createUser = async()=>{
  await addDoc(userCollectionRef,{
    name:name,
    age:age
  })
}

useEffect(()=>{
  const getUsers = async ()=>{
    const data = await getDocs(userCollectionRef);
    console.log(data);
    const docRef = data.docs.map((doc)=>({
      ...doc.data(),id:doc.id
    }))
    console.log(docRef);
    setUsers(docRef)
  }
  getUsers();
},[])
  return (
    <div className="App">
      <input type="text" value={name} placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
      <input type="number" value= {age} placeholder="Enter Your Age" onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return(
          <div>
             <h1>Name {user.name} </h1>
              <h1>Age {user.age}</h1>
              <button onClick={()=>updateAge(user.id,user.age)}>Update Age</button>
              <button onClick={()=>deleteUser(user.id)}>Delete User</button>
          </div>
         
        )
      })}
    </div>
  );
}

export default App;
