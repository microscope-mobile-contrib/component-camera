'use strict';

// Imports
var angular = require('angular');
require('ng-cordova');
var CameraCtrl  = require('./controllers/cameraCtrl');

// Camera sub-module definition
var camera = angular.module('app.camera', ['ngCordova']);
camera.controller('CameraCtrl', [
	'cordovaCamera',
	CameraCtrl
]);

module.exports = camera;