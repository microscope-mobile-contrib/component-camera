# microscope-component-camera
This is an addon starter component for the Ionic Framework.

## Dependencies
### Cordova Plugin

 - cordova-plugin-camera

### ngCordova Service

 - $cordovaCamera

## How to use this template

*This component does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, add the component using the microscope-mobile node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

Add angular module :

     require('./components/camera/camera');
     
     // application definition
     var app = angular.module('app', [
     	'app.camera'
     ]);
     
Add route :

    $stateProvider
      .state('app.camera', {
        url: '/camera',
        views: {
          'menuContent': {
            templateUrl: 'components/camera/controllers/camera.html',
            controller: 'CameraCtrl as vm'
          }
        }
    });




