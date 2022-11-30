import BaseLayout from "./layout/Base";
import Entry from "./pages/Entry";
import Result from "./pages/Result";
import Spin from "./pages/Spin";
import { Toaster } from "react-hot-toast";
import useStore from "./store";

function App() {
  const page = useStore((state) => state.page);
  return (
    <div className="App ">
      <Toaster />
      <BaseLayout>
        {page === "entry" && <Entry />}
        {page === "spin" && <Spin />}
        {page === "result" && <Result />}
      </BaseLayout>
    </div>
  );
}

export default App;
