import React from "react";
import Links from "./Links";

export default class LinksList extends React.Component{
    constructor(props){
        super(props)
        this.state= {links:props.links,
                        editValue:"",
                        addValue:"",
                        IsEditing:false, 
                        isSorted:false}
    }

    onAdd = (e) => {
        e.preventDefault()
        const link = {link: this.state.addValue}
        if(this.state.addValue !== ""){
            this.setState({links: this.state.links.concat(link)})
            this.setState({addValue: ""})
        }
    }

    onEdit = (e) => {
        this.setState({IsEditing: true})
    }

    onDelete = (linkStr) =>{
        this.setState({
            links: [...this.state.links].filter((l) => l.link !== linkStr)
        })
    }

    onSave = (e) => {
        e.preventDefault()
        this.onSaveChanges(this.state.links[e.target.key].link)
    }

    onSaveChanges = (link) => {
        this.state.links.map((l) => {
            if(l.link === link){
                l.link = this.state.editValue
                return l
            }
            return l
        })
        this.setState({editValue : ""})
        this.setState({IsEditing : false})
    }

    onSort = (e) => {}

    onChangeAddValue = (e) => {
        this.setState({addValue: e.target.value})
    }

    onChangeEditValue = (e) => {
        this.setState({editValue: e.target.value})
    }
 

    render(){
        let liList = this.state.links.map((link, index) => <li key={index}>
                                                                <Links link={link.link} />
                                                                {this.state.IsEditing && <form onSubmit={this.onSave}>
                                                                    <input onChange={this.onChangeEditValue} />
                                                                    <button type="submit">Save</button>
                                                                </form>}  
                                                                <button onClick={this.onEdit} >Edit</button>
                                                                <button onClick={() => this.onDelete(link.link)} >Delete</button>
                                                            </li>)
        return(
            <div>
                <form onSubmit={this.onAdd}>
                   Link: <input onChange={this.onChangeAddValue} />
                   <button type="submit">Add</button>
                </form>
                <br />
                <h3>Links:</h3>
                    Sort:<button onClick={this.onSort}>&#61;</button>
                <ul>
                    {liList}
                </ul>
            </div>
        )
    }
}