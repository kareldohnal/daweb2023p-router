import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
        <span> | </span>
        <a href="http://google.com">Google</a>
      </nav>
      <Outlet />
    </div>
  );
};