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
            method: 'flickr.people.getPhotos',
            api_key: '7617adae70159d09ba78cfec73c13be3',
            user_id:  '131888081@N08'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        angular.element(document.getElementById('body')).scope().makeGallerySlider(result);
    });

});
