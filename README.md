## React Modal Popup
  
  This package provide animated modal poup with responsive ui as well as flexible scrolling display.
  The modal header and footer can be show or hide as per requirement. 
  End users can close modal by Keyboard escape button on the press.This is resizable modal,which automatically fits the modal to the inner content.  
  
###Modal preview

[![Poup Modal  Preview Image](https://i.imgur.com/XyEckxv.jpg "Popup Modal  Preview Image")](https://i.imgur.com/XyEckxv.jpg "Poup Modal  Preview Image")

###To Install
  Run command:  `npm i reactpopupmodal`

###Popup Modal attributes

####title 

 - Define header title of Modal.
 - It is not required attribute to define title as result it show empty title on modal header. 

####show 

- Set true or false this attribute to open and close modal popup.
 - It is required attribute to set unless modal will not openb or close; 

####close 
 - Define to close for close or hide modal.
 - close attribute used to set close function from class that will set true and false property to show attribute.
 - It is required attribute to close the modal. 

####isShowFooter 
 - It is boolean attribute.
 - set to hide or show footer of modal.
 - Deafult value if true;
 - It is not required attribute to set on modal.
 
#Usage

The following are the sample code for how to use modal in your react project. In this example code already install the reactpopupmodal so you first upon need to install same reactpopupmodal by using given above command and follow the following code to use this super modal.
```javascript
import React, { Component } from 'react';
import Modal from 'reactpopupmodal';

class PopupModalSample extends Component {

constructor(props) {
  super();
  this.state = {isModalOpen:false,isFooter:true};
}

openPopupModal(){
  this.setState({isModalOpen:true});
}

closePopupModal(){
  this.setState({isModalOpen:false});
}

render() {
  return (
    <div>
     <button  onClick={() =>this.openPopupModal()}>Open Modal</button>
      <Modal close={()=>this.closePopupModal()} title="Modal Title"
	     show={this.state.isModalOpen} isShowFooter={this.state.isFooter}>
          This is resizable modal, which automatically fits the model to the inner content
      </Modal>
    </div>
  );
  }
}

export default PopupModalSample;
```
    