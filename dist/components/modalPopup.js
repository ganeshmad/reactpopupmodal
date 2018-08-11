var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import './modalPopup.css';

var i = 0;

var modalPopup = function (_Component) {
	_inherits(modalPopup, _Component);

	function modalPopup(props) {
		_classCallCheck(this, modalPopup);

		var _this = _possibleConstructorReturn(this, (modalPopup.__proto__ || Object.getPrototypeOf(modalPopup)).call(this));

		_this.onEscapePress = _this.onEscapePress.bind(_this);
		_this.state = { isModalOpen: false, isFooter: true, styleName: 'toggle-enter' };
		return _this;
	}

	_createClass(modalPopup, [{
		key: 'onEscapePress',
		value: function onEscapePress(event) {
			if (this.props.show) {
				if (event.keyCode === 27) {
					this.props.close();
				}
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(nextProps, nextState) {
			var _this2 = this;

			var size = { width: window.innerWidth || document.body.clientWidth };
			if (size.width > 100) {
				var eachImageElement = document.querySelector('#rc_main_container');
				if (eachImageElement != null) {
					eachImageElement.style["max-width"] = size.width - 100 + 'px';
				}
			}

			if (i === 0) {
				i++;
				setTimeout(function () {
					if (_this2.props.isShowFooter !== undefined && _this2.props.isShowFooter !== null) {
						_this2.setState({ isFooter: _this2.props.isShowFooter });
					}
				}, 5);
			}
			if (!this.props.show && this.state.isModalOpen === true && this.state.styleName === 'toggle-enter') {
				this.setState({ styleName: 'toggle-leave' });
				setTimeout(function () {
					_this2.setState({ isModalOpen: false });
				}, 250);
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener("keydown", this.onEscapePress, false);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener("keydown", this.onEscapePress, false);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			if (nextProps.show === true && nextState.isModalOpen === false) {
				this.setState({ styleName: 'toggle-enter' });
				this.setState({ isModalOpen: nextProps.show });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			if (!this.state.isModalOpen) {
				return null;
			}
			return React.createElement(
				'div',
				{ className: 'rc-modal-wrapper' },
				React.createElement(
					'div',
					{ className: 'rc-modal-inner-wrapper ' + this.state.styleName },
					React.createElement(
						'div',
						{ className: 'rc-modal-content', id: 'rc_main_container' },
						React.createElement(
							'div',
							{ className: 'rc-modal-header' },
							React.createElement(
								'button',
								{ type: 'button', className: 'rc-modal-close', onClick: function onClick() {
										return _this3.props.close();
									} },
								'\xD7'
							),
							React.createElement(
								'h4',
								{ className: 'rc-modal-title' },
								' ',
								this.props.title,
								' '
							)
						),
						React.createElement(
							'div',
							{ className: 'rc-content-body' },
							this.props.children
						),
						this.state.isFooter ? React.createElement(
							'div',
							{ className: 'rc-modal-footer' },
							React.createElement(
								'button',
								{ onClick: function onClick() {
										return _this3.props.close();
									}, type: 'button', className: 'rc-btn rc-btn-default' },
								'Close'
							)
						) : null
					)
				)
			);
		}
	}]);

	return modalPopup;
}(Component);

export default modalPopup;