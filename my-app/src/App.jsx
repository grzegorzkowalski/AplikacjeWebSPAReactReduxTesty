import Search from "./components/Search";
import Hello from "./components/Chapter05/Hello";
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";
import ParentComponent from "./components/Chapter06/ParentComponent.jsx";
import ShopItem from "./components/Chapter06/ShopItem.jsx";
import data from "./data/computer";
import artist from "./data/artist";
import fruits from "./data/fruits";
import people from "./data/people.js";
import Box from "./components/Chapter07/Box.jsx";
import StrobeLight from "./components/Chapter07/StrobeLight.jsx";
import ShowUserFunc from "./components/Chapter08/ShowUserFunc.jsx";
import TextTyper from "./components/Chapter08/TextTyper.jsx";
import Shop from "./components/Chapter09/Shop.jsx";
import NumberInfo from "./components/Chapter10/NumberInfo";
import Hello2 from "./components/Chapter11/Hello";
import './App.css';
import SelectOrType from "./components/Chapter11/SelectOrType.jsx";

function App() {
  // const numberA = parseInt(prompt("Podaj liczbę A?"));
  // const numberB = parseInt(prompt("Podaj liczbę B?"));
  // const operator = prompt("Wybierz działanie? *,/,-,+")
  // const birthYear = parseInt(prompt("Podaj rok urodzenia?"));
  // const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  //
  // let result = null;
  // switch (operator) {
  //     case "+":
  //         result = <h1>{numberA + numberB}</h1>
  //         break;
  //     case "-":
  //         result = <h2>{numberA - numberB}</h2>
  //         break;
  //     case "*":
  //         result = <h3>{numberA * numberB}</h3>
  //         break;
  //     case "/":
  //         if (!numberB) {
  //           result = <h4>Błędne dane</h4>
  //           break;
  //         }
  //         result = <h4>{numberA / numberB}</h4>
  //         break;
  //     default:
  //         result = <h5>Błędny wybór</h5>
  //         break;
  // }
  //
  //   const randomNumber = () => {
  //       return Math.round(Math.random() * 9 + 1);
  //   }
  //
  //   const randomA = randomNumber();
  //   const randomB = randomNumber();
  //   const sum = parseInt(prompt(`Podaj wynik dodawania ${randomA} + ${randomB}?`));
  const numbers = [1,2,5,7,10,12];

  return (
    <>
      <div className="card">
          {/*<p>{numberA + numberB}</p>*/}
          {/*<h1>{new Date().getFullYear() - birthYear} lat</h1>*/}
          {/*{result}*/}
          {/*<ul>*/}
          {/*    <li>{artist.firstName}</li>*/}
          {/*    <li>{artist.nickname}</li>*/}
          {/*    <li>{artist.lastName}</li>*/}
          {/*    <li>{artist.age}</li>*/}
          {/*</ul>*/}
          {/*<p>{fruits.join("-")}</p>*/}
          {/*<img src={imageUrl} alt="samochód" />*/}
          {/*<div style={{*/}
          {/*    width: "100px",*/}
          {/*    height: "100px",*/}
          {/*    backgroundColor: sum === randomA + randomB ? "green" : "red"*/}
          {/*}}>*/}
          {/*    <p>{sum === randomA + randomB ? "Odpowiedź poprawna" : "Odpowiedź błędna"}</p>*/}
          {/*</div>*/}
          {/*{*/}
          {/*    people.map((el) => {*/}
          {/*        return (*/}
          {/*            <div className="person" key={el.id}>*/}
          {/*                <img src={el.avatar} alt={el.surname} />*/}
          {/*                <div className="info">*/}
          {/*                    <h1>{el.title} {el.name} {el.surname}</h1>*/}
          {/*                    <p>{el.bio}</p>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        )*/}
          {/*    })*/}
          {/*}*/}
          {/*<Search />*/}
          {/*<Hello name="Grzegorz" surname="Kowalski" />*/}
          {/*<Hello name="Grzegorz2" surname="Kowalski" />*/}
          {/*<Hello name="Grzegorz3" surname="Kowalski" />*/}
          {/*<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />*/}
          {/*<CurrencyConverter from="PLN" to="USD" value={100} rate={0.25} />*/}
          {/*<CurrencyConverter from="EUR" to="PLN" value={100} rate={4} />*/}
          {/*<ParentComponent />*/}
          {/*<ShopItem data={data} />*/}
          {/*<Box />*/}
          {/*<StrobeLight color="deeppink" frequency={500} />*/}
          {/*<StrobeLight color="magenta" frequency={100} />*/}
          {/*<StrobeLight color="blue" frequency={200} />*/}
          {/*<ShowUserFunc name="Grzegorz" surname="Kowalski" />*/}
          {/*<TextTyper text="Witaj!" />*/}
          {/*<Shop />*/}
          {/*{*/}
          {/*    numbers.map((el) => <NumberInfo number={el} key={el} />)*/}
          {/*}*/}
          {/*<Hello2 />*/}
          <SelectOrType items={["BMW", "Jaguar", "Porsche"]} />
      </div>
    </>
  )
}

export default App
