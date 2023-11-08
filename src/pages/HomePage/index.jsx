import { Link } from "react-router-dom";
import "./style.css"

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Homepage!</h1>
      <nav>
        <Link className="link" to="/invoices"><button>Invoices</button></Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
        <span> | </span>
        <a href="http://google.com">Google</a>
      </nav>
    </div>
  );
};