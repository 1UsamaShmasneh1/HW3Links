import React from "react";
import Links from "./Links";

export default class LinksList extends React.Component{
    constructor(props){
        super(props)
        this.state= {links:props.links,
                        editValue:"",
                        addValue:"",
                        isSorted:false,
                        counter:3
                    }
    }

    onAdd = (e) => {
        e.preventDefault()
        const link = {link: this.state.addValue, isEditing: false}
        if(this.state.addValue !== ""){
            this.setState({links: this.state.links.concat(link)})
            this.setState({addValue: ""})
        }
    }

    onEdit = (i) => {
        let links = [...this.state.links]
        links.map((l) => {
            if(l.id === i){
                if(l.isEditing)
                    l.isEditing = false
                else
                    l.isEditing = true
            }
            return l
        })
        this.setState({links: links})
    }

    onDelete = (i) =>{
        let links = [...this.state.links]
        links = links.filter((l) => l.id !== i)
        this.setState({links: links})
    }

    onSave = (e,i) => {
        e.preventDefault()
        let links = [...this.state.links]
        let value = this.state.editValue
        links.map((l) => {
            if(l.id === i){
                if(value !== "")
                    l.link = value
                l.isEditing = false
            }
            return l
        })
        this.setState({links: links})
        this.setState({editValue: ""})
    }

    onSort = (e) => {}

    onChangeAddValue = (e) => {
        this.setState({addValue: e.target.value})
    }

    onChangeEditValue = (e) => {
        this.setState({editValue: e.target.value})
    }
 

    render(){
        const liList = this.state.links.map((link, index) => <li key={index}>
                                                                <Links id = {link.id} link = {link.link} isEditing = {link.isEditing} />
                                                                {link.isEditing && <form onSubmit={(e) => this.onSave(e,link.id)}>
                                                                    <input value={this.state.editValue} onChange={this.onChangeEditValue} />
                                                                    <button type="submit">Save</button>
                                                                </form>}  
                                                                <button onClick={() => this.onEdit(link.id)} >Edit</button>
                                                                <button onClick={() => this.onDelete(link.id)} >Delete</button>
                                                            </li>)
        return(
            <div>
                <form onSubmit={this.onAdd}>
                   Link: <input value={this.state.addValue} onChange={this.onChangeAddValue} />
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