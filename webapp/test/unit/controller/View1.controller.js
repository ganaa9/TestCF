/*global QUnit*/

sap.ui.define([
	"project1/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controllerrrrrrr");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
