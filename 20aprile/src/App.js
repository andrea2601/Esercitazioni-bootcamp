import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";

import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <List />
      </div>
    </main>
  );
}

export default App;
