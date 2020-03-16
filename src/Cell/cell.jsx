import React, { Component } from 'react';
import Validator from '../Helpers/Validators';


const _Validator= new Validator();
class Cell extends Component {

     log =(ip)=>{
        console.log(ip)
    }
    render = () => {
       this.log(_Validator.checkBy('rest','email','all'));

        return (<></>)
    }

}

export default Cell;