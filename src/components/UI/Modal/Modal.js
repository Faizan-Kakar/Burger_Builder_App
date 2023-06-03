import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../hoc/Auxillary';

class Modal extends Component{

   shouldComponentUpdate(nextProps, nextStates){
      if(nextProps.show !== this.props.show)
      {
         return true;
      }
      else return false;
   }

   componentWillUpdate(){
      console.log("[Modal] componentWillUpdate");
   }

   render(){
      return(
         <Auxillary>

         <Backdrop show= {this.props.show} clicked = {this.props.modalClosed}/>
     
        <div 
        className={classes.Modal}
        style={{
           transform : this.props.show? 'translateY(0)' : 'translateY(-100vh)',
           opacity : this.props.show?'1':'0',
        }}>
     
         {this.props.children}
         
        </div>
           </Auxillary>
      );
   }
}

export default Modal;