import React, { Component } from 'react';
import './modalPopup.css';

var i=0;
class modalPopup extends Component {

constructor(props) {
	super();
	this.onEscapePress = this.onEscapePress.bind(this);
	this.state = {isModalOpen:false,isFooter:true,styleName:'toggle-enter'};
}

onEscapePress(event){
	if(this.props.show){
		if(event.keyCode === 27) {
			this.props.close();
		}
	}
}

componentDidUpdate(nextProps, nextState){
	var size = { width: window.innerWidth || document.body.clientWidth};
	if(size.width > 100){
		var eachImageElement = document.querySelector('#rc_main_container');
		if(eachImageElement!=null){
		  eachImageElement.style["max-width"]=size.width-100 +'px';
		}
	}

	if(i===0){
		i++;
		setTimeout(()=>{
			if(this.props.isShowFooter!==undefined && this.props.isShowFooter!==null){
				this.setState({isFooter:this.props.isShowFooter});
			}
		},5)
	}
	if(!this.props.show && this.state.isModalOpen===true && this.state.styleName==='toggle-enter'){
		this.setState({styleName:'toggle-leave'});
		setTimeout(()=>{this.setState({isModalOpen:false});},250);
	}
}

componentDidMount(){
  document.addEventListener("keydown", this.onEscapePress, false);
}

componentWillUnmount(){
	document.removeEventListener("keydown", this.onEscapePress, false);
}

componentWillUpdate(nextProps, nextState) {
 if (nextProps.show === true && nextState.isModalOpen===false) {
 	this.setState({styleName:'toggle-enter'});
	this.setState({isModalOpen:nextProps.show});
  } 
}

render()  {
    if(!this.state.isModalOpen){return (null);}
    return (
		<div className="rc-modal-wrapper">
			<div className={`rc-modal-inner-wrapper ${ this.state.styleName }`}>
				<div className="rc-modal-content" id="rc_main_container">
					<div className="rc-modal-header">
						<button type="button" className="rc-modal-close" onClick={() => this.props.close()}>×</button>
						<h4 className="rc-modal-title"> {this.props.title} </h4>
					</div>
					<div className="rc-content-body">
						{this.props.children}
					</div>
					{
						this.state.isFooter ?
						<div className="rc-modal-footer">
	          				<button onClick={() => this.props.close()} type="button" className="rc-btn rc-btn-default">Close</button>
	        			</div>
	        			: null
        			}
				</div>
			</div>
		</div>
    );
  }
}

export default modalPopup;