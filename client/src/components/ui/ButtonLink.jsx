import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className=" bg-white px-4 py-1 rounded-md">
    {children}
  </Link>
);
