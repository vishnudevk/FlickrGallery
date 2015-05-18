/** @author Vishnudev.K
 * This is the javascript file for getting images from Flickr using flickr API.
 * It calls angularjs function to complete the gallery building
 * 
 */
$(function () {
    'use strict';

    // Load images from flickr:
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        angular.element(document.getElementById('body')).scope().makeGallerySlider(result);
    });

});


showTandC = function(){
   swal({
		title: "Disclaimer",
		text: "The contents of this app is for general information purposes only. "+
                " We are not holding the responsibility for quality or authority of contents",
		type: "warning",
		showCancelButton: false,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'I Agree',
		closeOnConfirm: false
	},
	function(){
		swal("Thank you!", "", "success");
	});
}
