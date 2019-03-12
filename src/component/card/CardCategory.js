import React from "react";

class CardCategory extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.src} alt="card"/>
                <span className="category_text">{this.props.name}</span>
            </div>
        );
    }
}

export default CardCategory;