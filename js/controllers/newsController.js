(function() {
angular
    .module('heroProgramApp')
    .controller('newsController', newsController);
    
    function newsController(masonryFactory, $window, $rootScope, $timeout) {
        var vm = this,
            count = 0,
            storiesView = "";
            storiesView = [];
            vm.stories = [];
            vm.carousel = carousel;

        // getAllStories gets all the stories from the masonryFactory.getStories endpoint
        function getAllStories() {
            masonryFactory
                .getStories()
                .then(function(response){
                    storiesView = response.data.stories;
                }, function(response){  
                    console.log('error!', response);
                });
        }
        getAllStories();

        function carousel(direction) {
            
            if(direction === "forward") {
                count++;
                if (count >= storiesView.length) {
                    count = 0;
                }
                vm.stories = [storiesView[count]];
            }

            if(direction === "back") {
                count--;
                if (count < 0) {
                    count = storiesView.length - 1;
                }
                vm.stories = [storiesView[count]];
            }
        }

        $rootScope.$on('windowWidth', function(event, data){

            $timeout(function() {

                if (data < 768) {
                    vm.stories = [storiesView[count]];
                }
                else if (data > 768 && data < 992) {
                    vm.stories = storiesView.slice(count, count + 2);
                } else {
                    vm.stories = storiesView;
                }
            });
        });

    }
})();