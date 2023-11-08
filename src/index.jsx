import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { ExpensesPage } from './pages/ExpensesPage';
import { InvoicesPage } from './pages/InvoicesPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './global.css';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { Invoice } from './pages/Invoice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
      },
      {
        path: 'invoices',
        element: <InvoicesPage />,
      },
      {
        path: 'invoices/:idInvoice',
        element: <Invoice />,
      },
    ]
  },
  
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
