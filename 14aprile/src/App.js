import { data } from "./data";
import { BookCard } from "./components/BookCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Libri</h1>
      <div className="cardsContainer">
        {
        data.products.map(item =>
          <BookCard
            img={item.img}
            name={item.name}
            description={item.description.split("").slice(0, 200).join("") + "..."}
            key={item.id} />
        )}
      </div>
    </div>
  );
}

export default App;
