import React from 'react'
import "./imageDiv.css"
import img from "../../components/imageDiv/images/image.png"


class ImageDiv extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="image-container">
                {
                (this.props.rotate=="right")?
                    <img style={{width:'120px',transform:'rotate(15deg)',msTransform:'rotate(15deg)'}} src={img} ></img>
                :
                <img style={{width:'120px',transform:'rotate(-15deg)',msTransform:'rotate(15deg)'}} src={img} ></img>
                }
              
            </div>
        )
    }
    
}
export default ImageDiv