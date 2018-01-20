import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//disable form submit on enter key press
window.addEventListener('keypress',(e)=>{
    console.log(e.keycode)
if(e.keycode === 13){
    e.preventDefault();
}
})
