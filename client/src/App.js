import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setlistofUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getusers").then((response) => {
      setlistofUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name, 
      age: age, 
      username: username,
    }).then((response) => {
      alert("USER CREATED");
    });
  };
  
  return (
    <div className="App">
      <div className = "userDisplay">
        {listofUsers.map((user) => {
          return(
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input 
          type="text" 
          placeholder="Name..."
          onChange={(event) =>{
            setName(event.targer.value);
          }}
        />
        <input 
          type="number" 
          placeholder="Age..."
          onChange={(event) =>{
            setAge(event.targer.value);
          }}
        />
        <input 
          type="text" 
          placeholder="Username..."
          onChange={(event) =>{
            setUsername(event.targer.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
