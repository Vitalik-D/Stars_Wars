import React from 'react';

import * as peopleApi from "../../api/peopleApi";
import ApiPagination from "../pagination/ApiPagination";


class People extends React.Component {
    state = {
        isLoaded: false,
        page: 1,
        count: 0,
        people: []
    };

    componentDidMount() {
        this.updatePageFromUrl();
    }

    componentDidUpdate() {
        this.updatePageFromUrl();
    }

    updatePageFromUrl(){
        const { location } = this.props;
        const urlParams = new URLSearchParams(location.search);
        const page = +urlParams.get('page') || 1;
        
        if (page === this.state.page) {
            return
        }else{
            this.setState({page}, this.loadPeople)
        }
    }

    loadPeople = async () =>{
        const {page} = this.state;
        const {count, results: people} = await peopleApi.getAll({page});

        this.setState({
            people,
            count,
            isLoaded: true
        })
    }

    render() {
        const {people, isLoaded, count, page} = this.state;
        return (
            <div>

                { isLoaded ? (
                    <>
                        <ApiPagination count={count} page={page} />
                        <ul>
                            {people.map(person => (
                                <li key={person.name}>{person.name}</li>
                            ))}
                        </ul>
                    </>

                )
                : (
                    <p>Loading..</p>
                )}

            </div>

        );
    }
}

export default People;