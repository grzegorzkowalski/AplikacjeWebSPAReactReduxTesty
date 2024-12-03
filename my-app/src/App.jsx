import './App.css';
import people from "./data/people";

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
      <h1>Lista osób:</h1>
      {
        people.map(el => createPeople(el))
      }
    </>
  );
}

export default App;
