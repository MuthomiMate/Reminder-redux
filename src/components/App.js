import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add_reminder} from '../actions'


class App extends Component {

    constructor (props){
        super(props)
        this.state= {
            text: ""
        }
    }
    addReminder =()=> {
        this.props.add_reminder(this.state.text)
    }
    render(){
        console.log('this.state', this.state)
        return (
            <div className="App">
                <div className="title">Reminder</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="text"
                        placeholder="I have to ......"
                        onChange={event => this.setState({text:event.target.value})}/>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.addReminder}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        )
    }
}
function matchDispatchToProps(state){
    return {
        reminders: state
    }
}
export default connect (matchDispatchToProps, {add_reminder})(App);