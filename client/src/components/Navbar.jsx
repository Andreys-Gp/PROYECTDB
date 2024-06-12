import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <nav className="bg-black my-3 flex justify-between py-5 px-10 rounded-lg  flex-row">
      <h1 className="text-2xl font-bold  text-white">
        <Link to={isAuthenticated ? "/tasks" : "/"}>Welcome React Vectors</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
          

            <li className="text-fuchsia-800	"	>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/add-task">Add Task</ButtonLink>
            </li>
            <li>
              <Link className="text-white" to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className=" ">
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
