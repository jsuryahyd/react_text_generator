import React,{Component} from 'react';

class Select extends Component{
handleChange(e){
    
    this.setState({html:e.target.value},function(){
        this.props.changeChoice(this.refs.option.value)
            
    })
}

options(){
    
}


    render(){
        let options,options_html;
    options = this.props.options;   
    
    options_html = options.map((item,index)=>{return <option value={item} key={index}>{item.toUpperCase()}</option>});
        return (<select className="u-full-width" onChange={this.handleChange.bind(this)} ref="option" >
           {options_html}           
        </select>)
    }
}

export default Select;