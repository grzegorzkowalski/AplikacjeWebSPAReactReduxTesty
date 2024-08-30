import {useDispatch, useSelector} from "react-redux";
import {addToList, startCounter, stopCounter} from "../redux/actions.js";

const Main = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state);
    console.log(values);
    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(startCounter())} disabled={values.isCounting}>start</button>
                    <button onClick={() => dispatch(stopCounter())} disabled={!values.isCounting}>stop</button>
                    <h1>{values.value}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList())}>zapisz</button>
                    <ul>
                        {
                            values.list.map((el,i) => <li key={el}>{i}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
