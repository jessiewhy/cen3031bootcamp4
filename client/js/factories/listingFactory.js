angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://cen3031bootcamp4-1.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('https://cen3031bootcamp4-1.herokuapp.com/api/listings', id);
    }
  }
  return methods;
})