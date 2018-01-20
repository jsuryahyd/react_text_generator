import React , { Component } from 'react';
import './RadioInput.css';

class RadioInput extends Component{

sendOptions(e){
    let input;
    input = e.target;
  if(input.checked){
    this.props.setTextOptions(input.value);
  }
}

    render(){
        let options;
        options = this.props.options;
        options = options.map((item,index)=>{
            return <label  key={item+index}><input type="radio" value={item} name={this.props.label} onClick={this.sendOptions.bind(this)} ref=""/>{item} </label>
        },this);
        return (
            <div>
                <p>{this.props.label}</p>
               {options}
            </div>
        )
    }

}
export default RadioInput;