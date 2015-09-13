(function() {
  var app = angular.module("gemStore", []);
  app.controller("StoreController", function() {
    this.products = gems;
  });
  app.controller("TabController", function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
  app.controller("GalleryController", function() {
    this.current = 0;
    this.setCurrent = function(val) {
      this.current = val || 0;
    };
  });
  app.controller("ReviewController", function() {
    this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
  var gems = [{
    name: "Azurite",
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: "#CCC",
    faces: 14,
    canPurchase: true,
    soldOut: false,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this product!",
      author: "joe@thomas.com",
      createdOn: 1288323623006
    },{
      stars: 1,
      body: "This product sucks",
      author: "tim@hater.com",
      createdOn: 1288323623006
    }]
  },{
    name: "Bloodstone",
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: "#EEE",
    faces: 12,
    canPurchase: false,
    soldOut: false,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ]
  },{
    name: "Zircon",
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: "#000",
    faces: 6,
    canPurchase: false,
    soldOut: false,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-09.gif"
    ]
  }];
})();