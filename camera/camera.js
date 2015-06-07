'use strict';

// Imports
var angular = require('angular');
var CameraCtrl  = require('./controllers/cameraCtrl');

// Camera sub-module definition
var camera = angular.module('app.camera', []);
camera.controller('CameraCtrl', [CameraCtrl]);

module.exports = camera;