import React from 'react';
import results from "../data/results";

const Results = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>wynik</th>
                    <th>zaliczony</th>
                </tr>
            </thead>
            <tbody>
            {
                results.toSorted((a,b) => b.points - a.points).map((el, i) => {
                    return (
                        <tr key={i}>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.points}</td>
                            <td>
                                {
                                    el.passed
                                    ? <span style={{color: "green"}}>zaliczony</span>
                                    : <span style={{color: "red"}}>niezaliczony</span>
                                }
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default Results;
