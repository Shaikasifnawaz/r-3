import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { useState } from "react";
import NavBar from "./components/NavBar";

const users = [
  {
    name: "Ronaldo",
    email: "ronaldo@gmail.com",
    pic: "https://i.pinimg.com/originals/d2/f3/28/d2f32866b1bdce2870d62f444052e433.jpg",
    id: "1",
  },
  {
    name: "Messi",
    email: "messi@gmail.com",
    pic: "https://i0.wp.com/bustop.tv/wp-content/uploads/2020/08/Messi.jpg?fit=2530%2C2468&ssl=1",
    id: "2",
  },
  {
    name: "Neymar",
    email: "neymar@hotmail.com",
    pic: "https://s.yimg.com/sr/img/1/f146671c-995c-316a-b6ce-ab27cce462a6",
    id: "3",
  },
  {
    name: "Bale",
    email: "bale@hotmail.com",
    pic: "https://s.yimg.com/sr/img/1/0d168914-6c12-354e-ba4e-fdad844ead0f",
    id: "4",
  },
  {
    name: "Mbappe",
    email: "mbappe@hotmail.com",
    pic: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/07/22/14/gettyimages-1227721416.jpg?width=982&height=726",
    id: "5",
  },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" exact>
            <Home
              users={userList}
              userList={userList}
              setUserList={setUserList}
            />
          </Route>
          <Route path="/adduser">
            <AddUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/edit/:id">
            <EditUser userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="/profile/:id">
            <Profile userList={userList} />
          </Route>
          <Route path="/editprofile/:id">
            <EditProfile userList={userList} setUserList={setUserList} />
          </Route>
          <Route path="**" exact>
            <h2>404</h2>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
