import React, { Component } from 'react'
import bell1 from './bell1.png';
import bell2 from './bell2.png';
class NewComps extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Subscribe to SimpliLearn",
            sub: "Subscribe",
            imageURL: bell1

        }
    }

    styles = {
        fontStyle: "italic",
        color: "purple"
    }
    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }

    imageChange = () => {
        this.setState({
            imageURL: bell2,
            message: "Thank you! Happy learning"
        })
    }
    render() {
        return (
            <div className='App'>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <br>
                </br>
                <img
                    style={{ width: "50px", margin: "10px", height: "50px" }}
                    src={this.state.imageURL}
                    alt=" " onClick={this.imageChange}>
                </img>
            </div >
        )
    }
}

export default NewComps
