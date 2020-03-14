import React, { Component } from 'react';
import Validator from '../Helpers/Validators';



class Cell extends Component {
     log =(ip)=>{
        console.log(ip)
    }
    render = () => {
       this.log(Validator.typeOf())

        return (<></>)
    }

}

export default Cell;