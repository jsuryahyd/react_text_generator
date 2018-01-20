import React, { Component } from 'react';
import './App.css';
import PageHeading from './components/PageHeading.js';
import OptionsForm from './components/OptionsForm.js';
import axios from 'axios';
// const xhr =require('xmlhttprequest').XMLHttpRequest;

class App extends Component {
  output = '';
state={option:true,output:[]}
renderParas(options){
  console.log(options);
  let params = {};
  params['start-with-lorem'] = options.starts_with;
  params['format']=options.format;
  params['sentences']=options.sentence;
  params['paras'] = Number(options.paras);
  params['type'] = options.all_meat ? 'all-meat' : 'meat-and-filler';
  console.log(params);
  axios.get('https://baconipsum.com/api/',{params:params}).then((response)=>{console.log(response);
this.setState({output:response.data});
console.table(response.headers);
}).catch((err)=>{console.log(err)});


// //xhr for nodejs
// let req;
// req = new xhr();
// let paramStr;
// paramStr = `start-with-lorem=${options.starts_with}&format=${options.format}&type=${options.all_meat ? 'all-meat' : 'meat-and-filler'}&paras=${Number(options.paras)}&sentences=${options.sentence}`;
// console.log(paramStr);
// req.open('get','https://baconipsum.com/api/?'+paramStr,true);
// req.onerror = (err)=>{
//   console.log(err);
// }
// req.onload = (response)=>{
//   console.log(req.responseText);
//   this.setState( {output : req.responseText});
// }
// req.send()

}


  render() {
    return (
<div className='container'>
<PageHeading />
<OptionsForm showOutput={this.renderParas.bind(this)}/>
<div className="well" ref="output" >
{
    this.state.output
}
</div>
</div>
    );
  }
}

export default App;
