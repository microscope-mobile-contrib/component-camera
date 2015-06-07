'use strict';

// privates
var _$cordovaCamera;

// Camera controller class
function CameraCtrl ($cordovaCamera) {
    this.image = null;
    _$cordovaCamera = $cordovaCamera;
}

/**
 * take picture
 * @return {[type]}
 */
CameraCtrl.prototype.take = function () {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

	_$cordovaCamera.getPicture(options).then(function(imageData) {
  		this.image = "data:image/jpeg;base64," + imageData;
	}, function(err) {
  		// error
	});
};

module.exports = CameraCtrl;