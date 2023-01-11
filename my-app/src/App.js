import "./App.css";
import Nav from "./components/navbar";
import Hero from "./components/hero_section";
import Card from "./components/card";
import data from "./data.js";

function App() {
  const dataElements = data.map((data) => {
    return (
      <Card
        key={data.id}
        {...data}
        // image={data.image}
        // rating={data.stats.rating}
        // review={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div>
        <section className="cards-list">{dataElements}</section>
      </div>
    </div>
  );
}

export default App;
