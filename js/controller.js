var app = angular.module('fickerGallery', []);
app.controller('controller', function($scope) {
    
    /**This method takes output from the json returned from flickr
     * make another json and feed it into Gallery method to make gallery
     **/
    $scope.makeGallerySlider = function(data){
      $scope.flickerJson = data;
      $scope.galleryJson = [];
      
      
      for ( var i = 0; i < data.photos.photo.length; i++) {
        var photo = data.photos.photo[i];
        var baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret ;
                
        var href  = baseUrl + '_b.jpg';    
        var src  = baseUrl  + '_s.jpg'; //this should come as thumpnail for the big image (not working now)
        var title = photo.title;
        
        var json = { };
        json.title = title;
        json.src = src;
        json.href = href;
        
        $scope.galleryJson.push(json);
        
      }
      
      //set the configuration properties
      $('#blueimp-gallery').data('useBootstrapModal', false);
      $('#blueimp-gallery').data('closeOnEscape', false);
      $('#blueimp-gallery').data('closeOnSlideClick', false);
      $('#blueimp-gallery').data('closeOnSwipeUpOrDown', false);
      
      blueimp.Gallery($scope.galleryJson, $('#blueimp-gallery').data());
      
    };
});