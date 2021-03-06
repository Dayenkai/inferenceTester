import React, { Component } from "react"
import Icon from "./Icon"
import "./AlgoCSS.css";

class ButtonAlgoEFF extends Component {
    constructor() {
        super()
        this.state = {
            selected : false
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({selected: !this.state.selected})
    }
    
    render() {
        let btn_class = this.state.selected ? "selectedButton" : "unselectedButton";
        let btn_box_class = this.state.selected ? "selectedBox3" : "unselectedBox3"
        return (
            <div className={btn_class} onClick={this.handleClick}>
                <div class="buttonBox1"><Icon /></div>
                <div class="buttonBox2">
                    <p className="ssd">{this.props.algoName}</p>
                </div>
                <div class={btn_box_class}><div className="ssdText">Training time : 00:00:00:00 / EPOCH : 65    Average Detection: 0%</div></div>
            </div>
        )
    }
}

export default ButtonAlgoEFF