import { useContext } from "react";
import "./App.css";
import BookProvider from "./Components/Context/BookProvider";
import Root from "./Pages/Root/Root";
import { LoadingContext } from "./Context/FirebaseAuthContext";
import Loader from "./Components/Loader/Loader";

function App() {
  const { loading } = useContext(LoadingContext);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <BookProvider>
          <div className="max-w-11/12 mx-auto">
            <Root></Root>
          </div>
        </BookProvider>
      )}
    </>
  );
}

export default App;
