import { Outlet, Link } from "react-router-dom";

export const InvoicesPage = () => {
    return (
      <main>
        <h2>Invoices</h2>
        <p>Here are your issued invoices for the last month</p>
        <Link to={"/invoices/36248"}>Faktura 36248</Link>
        <br/>
        <Link to={"/invoices/12759"}>Faktura 12759</Link>
        <br/>
        <Link to={"/invoices/28613"}>Faktura 28613</Link>
        <br/>
        <Link to={"/invoices/123456"}>Faktura 123456</Link>
        <Outlet />
      </main>
    );
  };