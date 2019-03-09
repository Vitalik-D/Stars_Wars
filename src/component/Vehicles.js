import React from "react";




class Vehicles extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            names: []
        };
        this.getVehicles = this.getVehicles.bind(this)
    }

    getVehicles = async() => {
        const response = await fetch(`${URL}vehicles/`);
        const data = await response.json();
        console.log(data.results);
        return this.setState({names: data.results})
    };

    componentDidMount() {
        this.getVehicles()
    }


    render() {

        return (
            <div >

                dfdsfd
            </div>

        )
    }
}

export default Vehicles;
