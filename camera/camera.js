'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/homeCtrl');

// Camera sub-module definition
var camera = angular.module('app.camera', []);
camera.controller('CameraCtrl', [CameraCtrl]);

module.exports = camera;