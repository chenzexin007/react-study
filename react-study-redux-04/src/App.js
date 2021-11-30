import Count from "./container/Count";
import Person from "./container/Person";
import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Count/>
      <Person/>
    </div>
  );
}

export default App;
