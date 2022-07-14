import React from "react";

export default class Links extends React.Component{
    constructor(props){
        super(props)
        this.state = {link: props.link}        
    }

    render(){
        return(
            <div>
                {this.state.link}
            </div>
        )
    }
}