import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import BookDetail from "../Pages/BooksDetail/BookDetail";
import BooksList from "../Pages/BookList/BooksList";
import ReadPage from "../Pages/ReadPage/ReadPage";
import Login from "../Pages/Auth/Login";
import SingUp from "../Pages/Auth/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Listed Books",
        Component:BooksList ,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        element: <BookDetail></BookDetail>,
      },
      {
        path: "/Pages to Read",
       Component: ReadPage,
      }
     
    ],
    
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/SingUp',
    Component: SingUp
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
