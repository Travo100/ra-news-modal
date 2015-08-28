angular
	.module('heroProgramApp', ['masonry', 'ngAnimate', 'ngTouch']);
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
    newsController.$inject = ["masonryFactory", "$window", "$rootScope", "$timeout"];
})();
(function(){
	angular
		.module('heroProgramApp')
		.directive('windowResize', windowResize);

		function windowResize($rootScope) {
			var directive = {
				restrict: 'EA',
				link : link
			};
			return directive;
			
			function link(scope, element, attrs) {
				window.addEventListener("resize", resize);
				window.addEventListener("load", resize);

				function resize() {
					var winWidth = Math.max(document.body.clientWidth||0, window.innerWidth||0); 
					$rootScope.$emit('windowWidth', winWidth); 
				}
			}
		}
		windowResize.$inject = ["$rootScope"];
}());

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9Qcm9ncmFtQXBwLmpzIiwiY29udHJvbGxlcnMvbmV3c0NvbnRyb2xsZXIuanMiLCJkaXJlY3RpdmVzL3dpbmRvdy1yZXNpemUtZGlyZWNpdHZlLmpzIiwiZmFjdG9yaWVzL21hc29ucnlGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLGFBQWEsWUFBWTtBQ0RoRSxDQUFDLFdBQVc7QUFDWjtLQUNLLE9BQU87S0FDUCxXQUFXLGtCQUFrQjs7SUFFOUIsU0FBUyxlQUFlLGdCQUFnQixTQUFTLFlBQVksVUFBVTtRQUNuRSxJQUFJLEtBQUs7WUFDTCxRQUFRO1lBQ1IsY0FBYztZQUNkLGNBQWM7WUFDZCxHQUFHLFVBQVU7WUFDYixHQUFHLFdBQVc7OztRQUdsQixTQUFTLGdCQUFnQjtZQUNyQjtpQkFDSztpQkFDQSxLQUFLLFNBQVMsU0FBUztvQkFDcEIsY0FBYyxTQUFTLEtBQUs7bUJBQzdCLFNBQVMsU0FBUztvQkFDakIsUUFBUSxJQUFJLFVBQVU7OztRQUdsQzs7UUFFQSxTQUFTLFNBQVMsV0FBVzs7WUFFekIsR0FBRyxjQUFjLFdBQVc7Z0JBQ3hCO2dCQUNBLElBQUksU0FBUyxZQUFZLFFBQVE7b0JBQzdCLFFBQVE7O2dCQUVaLEdBQUcsVUFBVSxDQUFDLFlBQVk7OztZQUc5QixHQUFHLGNBQWMsUUFBUTtnQkFDckI7Z0JBQ0EsSUFBSSxRQUFRLEdBQUc7b0JBQ1gsUUFBUSxZQUFZLFNBQVM7O2dCQUVqQyxHQUFHLFVBQVUsQ0FBQyxZQUFZOzs7O1FBSWxDLFdBQVcsSUFBSSxlQUFlLFNBQVMsT0FBTyxLQUFLOztZQUUvQyxTQUFTLFdBQVc7O2dCQUVoQixJQUFJLE9BQU8sS0FBSztvQkFDWixHQUFHLFVBQVUsQ0FBQyxZQUFZOztxQkFFekIsSUFBSSxPQUFPLE9BQU8sT0FBTyxLQUFLO29CQUMvQixHQUFHLFVBQVUsWUFBWSxNQUFNLE9BQU8sUUFBUTt1QkFDM0M7b0JBQ0gsR0FBRyxVQUFVOzs7Ozs7O0tBTTVCO0FDNURMLENBQUMsVUFBVTtDQUNWO0dBQ0UsT0FBTztHQUNQLFVBQVUsZ0JBQWdCOztFQUUzQixTQUFTLGFBQWEsWUFBWTtHQUNqQyxJQUFJLFlBQVk7SUFDZixVQUFVO0lBQ1YsT0FBTzs7R0FFUixPQUFPOztHQUVQLFNBQVMsS0FBSyxPQUFPLFNBQVMsT0FBTztJQUNwQyxPQUFPLGlCQUFpQixVQUFVO0lBQ2xDLE9BQU8saUJBQWlCLFFBQVE7O0lBRWhDLFNBQVMsU0FBUztLQUNqQixJQUFJLFdBQVcsS0FBSyxJQUFJLFNBQVMsS0FBSyxhQUFhLEdBQUcsT0FBTyxZQUFZO0tBQ3pFLFdBQVcsTUFBTSxlQUFlOzs7Ozs7QUFLckM7QUN2QkEsQ0FBQyxXQUFXO0FBQ1o7S0FDSyxPQUFPO0tBQ1AsUUFBUSxrQkFBa0I7O0lBRTNCLFNBQVMsZUFBZSxPQUFPOztRQUUzQixJQUFJLFVBQVU7WUFDVixhQUFhOzs7UUFHakIsT0FBTzs7UUFFUCxTQUFTLGFBQWE7WUFDbEIsSUFBSSxhQUFhO1lBQ2pCLE9BQU8sTUFBTSxJQUFJOzs7OztLQUl4QiIsImZpbGUiOiJhbGwtaGVybzQtYW5ndWxhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcclxuXHQubW9kdWxlKCdoZXJvUHJvZ3JhbUFwcCcsIFsnbWFzb25yeScsICduZ0FuaW1hdGUnLCAnbmdUb3VjaCddKTsiLCIoZnVuY3Rpb24oKSB7XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuICAgIC5jb250cm9sbGVyKCduZXdzQ29udHJvbGxlcicsIG5ld3NDb250cm9sbGVyKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbmV3c0NvbnRyb2xsZXIobWFzb25yeUZhY3RvcnksICR3aW5kb3csICRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcyxcclxuICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICBzdG9yaWVzVmlldyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHN0b3JpZXNWaWV3ID0gW107XHJcbiAgICAgICAgICAgIHZtLnN0b3JpZXMgPSBbXTtcclxuICAgICAgICAgICAgdm0uY2Fyb3VzZWwgPSBjYXJvdXNlbDtcclxuXHJcbiAgICAgICAgLy8gZ2V0QWxsU3RvcmllcyBnZXRzIGFsbCB0aGUgc3RvcmllcyBmcm9tIHRoZSBtYXNvbnJ5RmFjdG9yeS5nZXRTdG9yaWVzIGVuZHBvaW50XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsU3RvcmllcygpIHtcclxuICAgICAgICAgICAgbWFzb25yeUZhY3RvcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTdG9yaWVzKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yaWVzVmlldyA9IHJlc3BvbnNlLmRhdGEuc3RvcmllcztcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKXsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciEnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0QWxsU3RvcmllcygpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYXJvdXNlbChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJmb3J3YXJkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gc3Rvcmllc1ZpZXcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdm0uc3RvcmllcyA9IFtzdG9yaWVzVmlld1tjb3VudF1dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09IFwiYmFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc3Rvcmllc1ZpZXcubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZtLnN0b3JpZXMgPSBbc3Rvcmllc1ZpZXdbY291bnRdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ3dpbmRvd1dpZHRoJywgZnVuY3Rpb24oZXZlbnQsIGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS5zdG9yaWVzID0gW3N0b3JpZXNWaWV3W2NvdW50XV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhID4gNzY4ICYmIGRhdGEgPCA5OTIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS5zdG9yaWVzID0gc3Rvcmllc1ZpZXcuc2xpY2UoY291bnQsIGNvdW50ICsgMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLnN0b3JpZXMgPSBzdG9yaWVzVmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuXHRcdC5kaXJlY3RpdmUoJ3dpbmRvd1Jlc2l6ZScsIHdpbmRvd1Jlc2l6ZSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gd2luZG93UmVzaXplKCRyb290U2NvcGUpIHtcclxuXHRcdFx0dmFyIGRpcmVjdGl2ZSA9IHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0VBJyxcclxuXHRcdFx0XHRsaW5rIDogbGlua1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gZGlyZWN0aXZlO1xyXG5cdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZXNpemUpO1xyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiByZXNpemUoKSB7XHJcblx0XHRcdFx0XHR2YXIgd2luV2lkdGggPSBNYXRoLm1heChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRofHwwLCB3aW5kb3cuaW5uZXJXaWR0aHx8MCk7IFxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kZW1pdCgnd2luZG93V2lkdGgnLCB3aW5XaWR0aCk7IFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG59KCkpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2hlcm9Qcm9ncmFtQXBwJylcclxuICAgIC5mYWN0b3J5KCdtYXNvbnJ5RmFjdG9yeScsIG1hc29ucnlGYWN0b3J5KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbWFzb25yeUZhY3RvcnkoJGh0dHApIHtcclxuXHJcbiAgICAgICAgdmFyIG1hc29ucnkgPSB7XHJcbiAgICAgICAgICAgIGdldFN0b3JpZXMgOiBnZXRTdG9yaWVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbWFzb25yeTtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdG9yaWVzKCkge1xyXG4gICAgICAgICAgICB2YXIgc3Rvcmllc1VSTCA9IFwiLi4vc3Rvcmllcy5qc29uXCI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoc3Rvcmllc1VSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==