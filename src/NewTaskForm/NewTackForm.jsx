import React from "react";
import PropTypes from "prop-types";
import './NewTackForm.css'

class NewTaskForm extends React.Component{
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        const value =  e.target.value
        this.setState({
            label: value
        })
    };

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
          label: ''
        })
    };

    render() {

        return (
            <form className="header" onSubmit={this.onSubmit}>

                <h1>todos</h1>

                <input 
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus
                    onChange = {this.onLabelChange}
                    value = {this.state.label}
                />

            </form>
        )
    }
}

export default NewTaskForm