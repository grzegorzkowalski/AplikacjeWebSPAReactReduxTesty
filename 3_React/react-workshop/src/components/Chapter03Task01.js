import people from "../data/people";

const Chapter03Task01 = () => {
    return (
        <>
            {
                people.map(el => <div key={el.id}>{el.name} {el.surname}</div>)
            }
        </>
    );
};

export default Chapter03Task01;
