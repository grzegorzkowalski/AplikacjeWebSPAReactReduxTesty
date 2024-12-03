import './App.css';
import people from "./data/people";
import Results from "./components/Results";
import Search from "./components/04_Chapter/Search";
import Hello from "./components/05_Chapter/Hello";
import elements from "./data/elements";
import Menu from "./components/05_Chapter/Menu";

function App() {

  const createPeople = (el) => {
    return (
        <div className="person" key={el.id}>
          <img src={el.avatar} alt={`${el.name} ${el.surname}`} />
          <div className="info">
            <h1>{el.title} {el.name} {el.surname}</h1>
            <p>{el.bio}</p>
          </div>
        </div>
    )
  }

  return (
    <>
      {/*<h1>Lista osób:</h1>*/}
      {/*{*/}
      {/*  people.map(el => createPeople(el))*/}
      {/*}*/}
      <Results />
      <Search />
      <Hello name="Grzegorz" surname="Kowalski" />
      <Menu elements={elements} />
    </>
  );
}

export default App;
