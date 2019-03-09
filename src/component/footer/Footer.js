import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src="http://www.antonsetiawan.com/images/github10-inverse.png" alt="qwe" className="github"/>
                <a href="https://github.com/"> <p>GitHub</p></a>
                <p className="dev_name"> Developed by Vitalik Diadychko</p>

            </div>
        );
    }
}

export default Footer;