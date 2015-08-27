(function() {
angular
    .module('heroProgramApp')
    .controller('newsController', newsController);
    
    function newsController(masonryFactory, $window, $scope) {
        var vm = this;
            vm.stories = [];

        // getAllStories gets all the stories from the masonryFactory.getStories endpoint
        function getAllStories() {
            masonryFactory
                .getStories()
                .then(function(response){
                    vm.stories = response.data.stories;
                }, function(response){  
                    console.log('error!', response);
                });
        }
        getAllStories();


    }
})();