import React,{Component} from 'react';
import Select from './Select.js';
import RadioInput from './RadioInput.js'
class OptionsForm extends Component{
    format_options=['html','text','json']
    text_type = ['paragraph','sentence']
    meat_type = ['all_meat','meat_filler']
    start_words = ['bacon','lorem']
state = {
    format:'html'
}

setStart(options){
    // console.log('starts with',options)
    let start;
    start = options === 'lorem' ? null : 1;
    this.setState({starts_with:start},()=>{this.props.showOutput(this.state)})

}
    setFormat(option){
        this.setState({format:option},()=>{
            console.log(this.state);
            this.props.showOutput(this.state);
        });
        
    }

    setParas(){
        this.setState({paras:this.refs.paras.value},()=>{
            // console.log(this.props)
            // this.setType(this.refs.paras.value);
        this.props.showOutput(this.state);
    });
        // console.log('outside callback, state :',this.state);
                
    }

    setMeat(option){
        option = option==='all_meat' ? 1:0;
        this.setState({all_meat:option},()=>{
            // console.log(this.props)
        this.props.showOutput(this.state)})
    }
    setType(option){
        console.log('text type ',option)
        // option = option==="paragraph" ? 0 : Number(this.refs.paras.value);
        //since above refs.paras.value doesnot update on change, use state.paras
        option = option==="paragraph" ? 0 : Number(this.state.paras);
        console.log('sentence',option);
        this.setState({sentence:option},()=>{
            // console.log(this.props)
        this.props.showOutput(this.state)})
    }
    render(){
        return <form className="u-full-width" onSubmit={()=>{return false;}}>
          <div className="u-full-width">
          <div className='one-half column' >
            <label>Show HTML : </label>
            <Select value={this.state.format} changeChoice={this.setFormat.bind(this)} ref="format" options={this.format_options} />
            </div>
            
            <div className="one-half column">
            <label>Number of Paragraphs(max 15)</label>
            <input type="number" className="u-full-width" onChange={this.setParas.bind(this)} ref="paras" min='1' max="15"/>
            </div>
          </div>

          <div className="u-full-width"> 
          <div className="one-third column">
            <RadioInput label="Starts with" value={this.state.startsWith} options={this.start_words} setTextOptions = {this.setStart.bind(this)} ref="startswith"/>
          </div>
          <div className="one-third column">
          <RadioInput label="Type" value={this.state.type} options={this.text_type} setTextOptions = {this.setType.bind(this)} ref="type" />         
          </div>
          <div className="one-third column" >
          <RadioInput label="Meat Type" value={this.state.meat_type} options={this.meat_type} setTextOptions = {this.setMeat.bind(this)} ref="meat_type"/>          
          </div>          
          </div>

        </form>
    }
}

export default OptionsForm;