import './App.css';

import { User } from "./components/User";
import { Description } from "./components/Description";
import { FlexSection } from "./components/FlexSection";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <User />
      <Description />
      <FlexSection />
      <Form />
    </div>
  );
}

export default App;
