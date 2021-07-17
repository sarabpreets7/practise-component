import React from 'react'
import "./container.css"

import ImageDiv from '../components/imageDiv/imageDiv';
import DescDiv from '../components/descDiv/descDiv';
import img from "../components/imageDiv/images/image.png"
class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            
            <div className="container">
               {
                (this.props.arrange=="0")?
                <div className="secondary-contain">
                <ImageDiv  Image={img} rotate={this.props.rotate}></ImageDiv>
                <DescDiv heading="WEB DESIGN:UI/UX"
                        problem="Hellow this is my problem that i want to resolve!"
                        solution="Solution: I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem"
                        
                ></DescDiv>
                </div>
                :
                <div className="secondary-contain">
              <DescDiv heading="WEB DESIGN:UI/UX"
                        problem="Hellow this is my problem that i want to resolve!"
                        solution="Solution: I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem.I am brilliantly smart so i can solve any problem"
                        
                ></DescDiv>
                <ImageDiv  Image={img} rotate={this.props.rotate}></ImageDiv>
                </div>

        }
            </div>
            
          

        )
    }
    
}
export default Container