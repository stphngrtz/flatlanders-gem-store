(function() {
  var app = angular.module("store-directives", []);
  app.directive("productTitle", function() {
    return {
      restrict: "E", // E = Element, A = Attribute
      templateUrl: "product-title.html"
    };
  });
  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(val) {
          this.current = val || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: "tab"
    };
  });
  app.directive("productDescription", function() {
    return {
      restrict: "E",
      templateUrl: "product-description.html"
    };
  });
  app.directive("productSpecifications", function() {
    return {
      restrict: "E",
      templateUrl: "product-specifications.html"
    };
  });
  app.directive("productReviews", function() {
    return {
      restrict: "E",
      templateUrl: "product-reviews.html"
    };
  });
})();