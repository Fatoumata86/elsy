import React from "react";

export class Box extends React.Component {
    render() {
        return(

        <div className="box col-sm-3 col-6">
            <span className='material-icons' 
            style={{color: this.props.color, fontSize: "100px"}}>
            {this.props.icon}</span>
            <p>{this.props.value}{this.props.unit}</p>
                {"local_drink"  !== this.props.icon &&
                <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange= {(e)=> {
                    this.props.onChange(e)
                }}/>
                }   
        </div>
       )
        }}
export default Box;