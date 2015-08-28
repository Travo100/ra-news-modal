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
}());
