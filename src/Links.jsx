import React from "react";

export default class Links extends React.Component{
    constructor(props){
        super(props)
        this.state = {link: props.link, canUpdate: props.canUpdate}        
    }

    onUpdate = () => {
        this.setState({canUpdate:!this.state.canUpdate})
    }

    onUpdateChange = (event) => {
        event.preventDefault()
        let text = event.target.elements.text.value
        if(text === "")
            this.setState({canUpdate:!this.state.canUpdate})
        else
            this.setState({link:text, canUpdate:!this.state.canUpdate})
    }

    render(){
        return(
            <div>
                {this.state.link}  
                {this.state.canUpdate && <form onSubmit={this.onUpdateChange}>
                    <input type="text" id="text" name="text" />
                    <button type="submit">Update</button>
                </form>}  
                <button onClick={this.onUpdate}>Edit</button>                
            </div>
        )
    }
}