angular
	.module('heroProgramApp', ['masonry', 'ngAnimate']);
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
    newsController.$inject = ["masonryFactory", "$window", "$scope"];
})();
(function() {
angular
    .module('heroProgramApp')
    .factory('masonryFactory', masonryFactory);
    
    function masonryFactory($http) {

        var masonry = {
            getStories : getStories
        };
        
        return masonry;
        
        function getStories() {
            var storiesURL = "../stories.json";
            return $http.get(storiesURL);
        }
        
    }
    masonryFactory.$inject = ["$http"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9Qcm9ncmFtQXBwLmpzIiwiY29udHJvbGxlcnMvbmV3c0NvbnRyb2xsZXIuanMiLCJmYWN0b3JpZXMvbWFzb25yeUZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPLGtCQUFrQixDQUFDLFdBQVcsY0FBYztBQ0RyRCxDQUFDLFdBQVc7QUFDWjtLQUNLLE9BQU87S0FDUCxXQUFXLGtCQUFrQjs7SUFFOUIsU0FBUyxlQUFlLGdCQUFnQixTQUFTLFFBQVE7UUFDckQsSUFBSSxLQUFLO1lBQ0wsR0FBRyxVQUFVOzs7UUFHakIsU0FBUyxnQkFBZ0I7WUFDckI7aUJBQ0s7aUJBQ0EsS0FBSyxTQUFTLFNBQVM7b0JBQ3BCLEdBQUcsVUFBVSxTQUFTLEtBQUs7bUJBQzVCLFNBQVMsU0FBUztvQkFDakIsUUFBUSxJQUFJLFVBQVU7OztRQUdsQzs7Ozs7S0FJSDtBQ3ZCTCxDQUFDLFdBQVc7QUFDWjtLQUNLLE9BQU87S0FDUCxRQUFRLGtCQUFrQjs7SUFFM0IsU0FBUyxlQUFlLE9BQU87O1FBRTNCLElBQUksVUFBVTtZQUNWLGFBQWE7OztRQUdqQixPQUFPOztRQUVQLFNBQVMsYUFBYTtZQUNsQixJQUFJLGFBQWE7WUFDakIsT0FBTyxNQUFNLElBQUk7Ozs7O0tBSXhCIiwiZmlsZSI6ImFsbC1oZXJvNC1hbmd1bGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJywgWydtYXNvbnJ5JywgJ25nQW5pbWF0ZSddKTsiLCIoZnVuY3Rpb24oKSB7XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuICAgIC5jb250cm9sbGVyKCduZXdzQ29udHJvbGxlcicsIG5ld3NDb250cm9sbGVyKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbmV3c0NvbnRyb2xsZXIobWFzb25yeUZhY3RvcnksICR3aW5kb3csICRzY29wZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZtLnN0b3JpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZ2V0QWxsU3RvcmllcyBnZXRzIGFsbCB0aGUgc3RvcmllcyBmcm9tIHRoZSBtYXNvbnJ5RmFjdG9yeS5nZXRTdG9yaWVzIGVuZHBvaW50XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsU3RvcmllcygpIHtcclxuICAgICAgICAgICAgbWFzb25yeUZhY3RvcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTdG9yaWVzKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICB2bS5zdG9yaWVzID0gcmVzcG9uc2UuZGF0YS5zdG9yaWVzO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIScsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRBbGxTdG9yaWVzKCk7XHJcblxyXG5cclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuICAgIC5mYWN0b3J5KCdtYXNvbnJ5RmFjdG9yeScsIG1hc29ucnlGYWN0b3J5KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbWFzb25yeUZhY3RvcnkoJGh0dHApIHtcclxuXHJcbiAgICAgICAgdmFyIG1hc29ucnkgPSB7XHJcbiAgICAgICAgICAgIGdldFN0b3JpZXMgOiBnZXRTdG9yaWVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbWFzb25yeTtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdG9yaWVzKCkge1xyXG4gICAgICAgICAgICB2YXIgc3Rvcmllc1VSTCA9IFwiLi4vc3Rvcmllcy5qc29uXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoc3Rvcmllc1VSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==