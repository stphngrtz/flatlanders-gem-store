(function() {
  var app = angular.module("gemStore", []);
  app.controller("StoreController", function() {
    this.products = gems;
  });
  var gems = [
  {
    name: "Dodecahedron",
    price: 2.95,
    description: "...",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "...",
    canPurchase: false,
    soldOut: false
  },
  {
    name: "Tridimensional Gem",
    price: 8,
    description: "...",
    canPurchase: false,
    soldOut: false
  }
  ];
})();