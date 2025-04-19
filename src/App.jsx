import "./App.css";
import BookProvider from "./Components/Context/BookProvider";
import Root from "./Pages/Root/Root";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BookProvider>
      <div className="max-w-11/12 mx-auto">
        <Root></Root>
      </div>
      <ToastContainer></ToastContainer>
    </BookProvider>
  );
}

export default App;
