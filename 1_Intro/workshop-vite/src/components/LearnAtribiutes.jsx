const LearnAtribiutes = () => {
    const boxColor = prompt("Wybierz kolor (red, green, blue)?");
    let colors = ["red", "green", "blue"];

    const styles = {
        width: "100px",
        height: "100px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: boxColor
    }
    let el = colors.includes(boxColor)
        ? <div style={styles} />
        : <div>Niepoprawny kolor</div>;

    return (
        <div>
            {el}
        </div>
    );
};

export default LearnAtribiutes;