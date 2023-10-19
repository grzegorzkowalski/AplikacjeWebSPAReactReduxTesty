import students from "../data/students.js";
const LearnNesting = () => {
    return (
        <ul>
            {
                students.map((el) => {
                    return (
                        <li
                            key={el.id}
                            style={{color: el.result > 10 ? "green" : "red" }}
                        >
                            {el.name} {el.surname} - {el.result} pkt.
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default LearnNesting;