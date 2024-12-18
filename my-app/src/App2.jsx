import './App.css'
import person from "./data/artist";

function App() {
  const color = prompt("Wybierz kolor (red, green, blue)?");
  const isOkColor = ["red", "green", "blue"].includes(color);

  const styles = {
    width: "100px",
    height: "100px",
    borderColor: color,
    borderStyle: "solid",
    borderWidth: "5px"
  }

  const basicStyles = {
    width: "100px",
    height: "100px",
  }

  const redDiv = <div style={{...basicStyles, backgroundColor: "red"}} />;
  const greenDiv = <div style={{...basicStyles, backgroundColor: "green"}} />;
  const blueDiv = <div style={{...basicStyles, backgroundColor: "blue"}} />;
  // const numberA = parseInt(prompt("Podaj pierwszą liczbę?"));
  // const numberB = parseInt(prompt("Podaj drugą liczbę?"));
  // const birthdate = parseInt(prompt("Podaj rok urodzenia?"));
  // const operator = prompt("Wybierz działanie (+,-,*,/)?");
  //
  // // throw new Error("testujemy");
  // // console.error("Zepsuliśmy");
  // // console.log("test");
  // let result;
  // switch (operator) {
  //   case "+":
  //     result = <h1>{numberA} + {numberB} = {numberA + numberB}</h1>;
  //     break;
  //   case "-":
  //     result = <h2>{numberA} - {numberB} = {numberA - numberB}</h2>;
  //     break;
  //   case "*":
  //     result = <h3>{numberA} * {numberB} = {numberA * numberB}</h3>;
  //     break;
  //   case "/":
  //     result = <h4>{numberA} / {numberB} = {numberA / numberB}</h4>;
  //     break;
  //   default:
  //     result = <h5>Błedne dane</h5>
  //     break;
  // }

  return (
    <>
      {/*<h2>Suma: {numberA + numberB}</h2>*/}
      {/*<h3>Twój wiek: {!isNaN(birthdate) ? new Date().getFullYear() - birthdate : "złe dane"}</h3>*/}
      {/*<ul>*/}
      {/*  <li>{person.firstName}</li>*/}
      {/*  <li>{person.lastName}</li>*/}
      {/*  <li>{person.nickname}</li>*/}
      {/*  <li>{person.age}</li>*/}
      {/*</ul>*/}
      {/*{result}*/}
      {
        isOkColor ? <div style={styles} /> : <div>Nieprawidłowy wybór koloru</div>
      }
      {redDiv}
      {greenDiv}
      {blueDiv}
    </>
  );
}

export default App;
