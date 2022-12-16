import React from 'react'

class ClassProp extends React.Component {
    render() {
        return (
            <div>
                <h4>Hello {this.props.name}! of {this.props.place}, Let's Create a React App</h4>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default ClassProp
