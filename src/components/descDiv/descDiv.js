import React from 'react'
import "./descDiv.css"


class DescDiv extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="main-container">
                <div className="heading">{this.props.heading}</div>
                <div className="problem">{this.props.problem}</div>
                <div className="solution">{this.props.solution}</div>
            </div>
            // WEB DESIGN:UI/UX
            // Hellow this is my problem that i want to resolve!
            // Solution: I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem
        )
    }
    
}
export default DescDiv