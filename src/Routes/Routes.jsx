import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import BookDetail from "../Pages/BooksDetail/BookDetail";
import BooksList from "../Pages/BookList/BooksList";
import ReadPage from "../Pages/ReadPage/ReadPage";
import Login from "../Pages/Auth/Login";
import SingUp from "../Pages/Auth/SingUp";
import PrivetRoute from "../Routes/PrivetRoute";
import { Profile } from "../Pages/Profile/Profile";
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
        path: "/ListedBooks",
        element: <PrivetRoute> <BooksList></BooksList> </PrivetRoute> ,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        element: <BookDetail></BookDetail>,
      },
      {
        path: "/PagesToRead",
       element: <PrivetRoute><ReadPage></ReadPage> </PrivetRoute>,
      },
      {
        path: "/profile",
       element: <PrivetRoute> <Profile></Profile> </PrivetRoute>,
      }
    ],
  },
  {
    path: '/singUp',
    element:  <SingUp></SingUp> 
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
