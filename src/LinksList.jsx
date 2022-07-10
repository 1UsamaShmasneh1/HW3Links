import React from "react";
import Links from "./Links";

export default class LinksList extends React.Component{
    constructor(props){
        super(props)
        this.state= {links:props.links, isSorted:false}
        //this.onSort = this.onSort.bind(this)
    }

    OnAdd = (e) => {
        e.preventDefault()
        let link = e.target.elements.text.value
        let links = [...this.state.links]
        links.push({link: link, canUpdate:false})
        this.setState({links: links})
        e.target.elements.text.value = ""
    }

    onSort = (e) => {
        if(!this.state.isSorted){
            const links = [].concat(this.state.links).sort((a,b) => {
                return a.link > b.link ? 1 : -1
            })
            this.setState({links: links})
            e.target.value = "&#8593;"
        }
    }

    onDelete = (linkV) => {
        let links = [...this.state.links]
        let filterdList = links.filter(link => link.link !== linkV)
        this.setState({links: filterdList})
    }

    RemoveUrlClick(u){
        let tempurllist = this.state.urls.filter((tempUrl) => tempUrl !== u.target.value)
        this.setState({urls : tempurllist})
     }
 

    render(){
        return(
            <div>
                <form onSubmit={this.OnAdd}>
                   Link: <input type="text" id="text" name="text" />
                   <button type="submit">Add</button>
                </form>
                <br />
                <h3>Links:</h3>
                    Sort:<button onClick={this.onSort}>&#61;</button>
                <ul>
                    {this.state.links.map((link, index) => {
                        return (<li key={index}>
                                    <Links link={link.link} canUpdate={link.canUpdate}/>
                                    <button onClick={this.onDelete(index)}>Delete</button>
                                </li>)
                    })}
                </ul>
            </div>
        )
    }
}