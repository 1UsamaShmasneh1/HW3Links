import React from "react";

export default class Links extends React.Component{
    constructor(props){
        super(props)
        this.state = {id:props.id, link: props.link, isEditing: props.isEditing}        
    }

    render(){
        return(
            <div>
                {this.state.link}
            </div>
        )
    }
}