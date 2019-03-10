import React from 'react';

import * as peopleApi from "../../api/peopleApi";
import Header from "../header/Header";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";

class People extends React.Component {
    state = {
        isLoaded: false,
        people: []
    };

    async componentDidMount() {
        const people = await peopleApi.getAll();


        this.setState({
            people,
            isLoaded: true
        })
    }

    render() {
        const {people, isLoaded} = this.state;
        return (
            <div>
                { isLoaded ? (
                    <ul>
                        {people.map(person => (
                                <li>{person.name}</li>
                            ))}
                    </ul>
                )
                : (
                    <p>Loading..</p>
                )}

            </div>

        );
    }
}

export default People;