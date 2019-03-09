import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.src} alt="card"/>
                <span className="category_text">{this.props.name}</span>
            </div>
        );
    }
}

export default Card;