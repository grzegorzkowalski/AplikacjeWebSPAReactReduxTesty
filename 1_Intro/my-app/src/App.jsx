import './App.css'
import artist from "./data/artist";
import fruits from "./data/fruits";
import people from "./data/people";
import computer from "./data/computer";
import Search from "./components/chapter04/Search";
import CurrencyConverter from "./components/chapter05/CurrencyConverter";
import ShopItem from "./components/chapter06/ShopItem.jsx";
import HelloWorld from "./components/chapter07/HelloWorld.jsx";
import Box from "./components/chapter07/Box.jsx";

function App() {
  const color = prompt("Wybierz kolor z listy (red, green, blue)?");
  const colors = ["red", "green", "blue"];
  const styles = {
    width: "100px",
    height: "100px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: color
  }
  const box = <div style={styles} />;
  // const numberA = parseInt(prompt("Podaj liczbę A?"));
  // const numberB = parseInt(prompt("Podaj liczbę B?"));
  // const operator = prompt("Wybierz operator (+,-,*,/)?")
  // const year = parseInt(prompt("Podaj rok urodzenia?"));
  // let calculator = "";
  // switch (operator) {
  //     case "+":
  //         calculator = <h1>{numberA + numberB}</h1>
  //         break;
  //     case "-":
  //         calculator = <h2>{numberA - numberB}</h2>
  //         break;
  //     case "*":
  //         calculator = <h3>{numberA * numberB}</h3>
  //         break;
  //     case "/":
  //         calculator = <h4>{numberA / numberB}</h4>
  //         break;
  //     default:
  //         calculator = <h5>Wybrałeś niepoprawny operator.</h5>
  //         break;
  // }

  return (
    <>
        {colors.includes(color) ? box : <div>Nieprawidłowy kolor</div>}
        {/*<p>{numberA + numberB}</p>*/}
        {/*<h1>Twój wiek to: {new Date().getFullYear() - year}</h1>*/}
        {/*<ul>*/}
        {/*  <li>{artist.nickname}</li>*/}
        {/*  <li>{artist.firstName}</li>*/}
        {/*  <li>{artist.lastName}</li>*/}
        {/*  <li>{artist.age}</li>*/}
        {/*</ul>*/}
        {/*{calculator}*/}
        {/*<p>Owoce: {fruits.join("-")} {fruits.length}</p>*/}
      {
        people.map(el => {
          return (
              <div className="person" key={el.id}>
                <img src={el.avatar} />
                <div className="info">
                  <h1>{el.title} {el.name} {el.surname}</h1>
                  <p>{ el.bio }</p>
                </div>
              </div>
          )
        })
      }
      <Search />
      <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
      <CurrencyConverter from="EUR" to="PLN" value={200} rate={4} />
      <CurrencyConverter from="PLN" to="EUR" value={200} rate={0.25} />
      <ShopItem computer={computer} />
      <HelloWorld />
      <Box />
    </>
  )
}

export default App
