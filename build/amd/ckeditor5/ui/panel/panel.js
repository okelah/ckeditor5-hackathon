define(['exports', '../controller.js', '../controllercollection.js'], function (exports, _controller, _controllercollection) {
	/**
  * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
  * For licensing, see LICENSE.md.
  */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _controller2 = _interopRequireDefault(_controller);

	var _controllercollection2 = _interopRequireDefault(_controllercollection);

	function _interopRequireDefault(obj) {
		/* istanbul ignore next */
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/**
  * The basic panel controller class.
  *
  * @memberOf ui.panel
  * @extends ui.Controller
  */
	class Panel extends _controller2.default {
		/**
   * Creates a Panel instance.
   *
   * @param {utils.Observable} model
   * @param {ui.View} view
   */
		constructor(model, view) {
			super(model, view);

			this.collections.add(new _controllercollection2.default('content'));
		}

	}
	exports.default = Panel;
});