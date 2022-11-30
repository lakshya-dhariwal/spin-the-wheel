import BaseLayout from "./layout/Base";
import Entry from "./pages/Entry";
import Result from "./pages/Result";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App ">
      <Toaster />
      <BaseLayout>
        <Result />
      </BaseLayout>
    </div>
  );
}

export default App;
