import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Global from "./style/global";

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}
export default App;
