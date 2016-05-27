'use strict';

/* eslint max-len: ["error", 200] */
/* global angular */
/* eslint-env browser */

(function () {
  'use strict';

  var app = angular.module('gemStore', []);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  app.controller('TabController', function () {
    this.tab = 3;
    this.setTab = function (newValue) {
      this.tab = newValue;
    };
    this.isSet = function (tabName) {
      return this.tab === tabName;
    };
  });

  app.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive("productDescription", function () {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive("productSpecs", function () {
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

  app.directive('productTabs', function () {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function controller() {
        this.tab = 1;
        this.isSet = function (checkTab) {
          return this.tab === checkTab;
        };
        this.setTab = function (setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: "tab"
    };
  });

  var gems = [{
    name: 'Azurite',
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: ['img/gem-02.gif', 'img/gem-05.gif', 'img/gem-09.gif'],
    reviews: [{
      stars: 5,
      body: 'I love this gem!',
      author: 'joe@example.org',
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: 'This gem sucks.',
      author: 'tim@example.org',
      createdOn: 1397490980837
    }]
  }, {
    name: 'Bloodstone',
    description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: ['img/gem-01.gif', 'img/gem-03.gif', 'img/gem-04.gif'],
    reviews: [{
      stars: 3,
      body: 'I think this gem was just OK, could honestly use more shine, IMO.',
      author: 'JimmyDean@example.org',
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: 'Any gem with 12 faces is for me!',
      author: 'gemsRock@example.org',
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: 'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: ['img/gem-06.gif', 'img/gem-07.gif', 'img/gem-10.gif'],
    reviews: [{
      stars: 1,
      body: 'This gem is WAY too expensive for its rarity value.',
      author: 'turtleguyy@example.org',
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: 'BBW: High Shine != High Quality.',
      author: 'LouisW407@example.org',
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: 'Don\'t waste your rubles!',
      author: 'nat@example.org',
      createdOn: 1397490980837
    }]
  }];
})();
//# sourceMappingURL=data:application/json;base64,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O0FBR0gsY0FBUSxzQkFITDtBQUlILGlCQUFXO0FBSlIsS0FMSTtBQWJOLEdBeEJNLEVBZ0ROO0FBQ0gsVUFBTSxRQURIO0FBRUgsaUJBQWEsK0hBRlY7QUFHSCxXQUFPLEVBSEo7QUFJSCxXQUFPLElBSko7QUFLSCxZQUFRLENBTEw7QUFNSCxXQUFPLE1BTko7QUFPSCxXQUFPLENBUEo7QUFRSCxZQUFRLENBQ0osZ0JBREksRUFFSixnQkFGSSxFQUdKLGdCQUhJLENBUkw7QUFhSCxhQUFTLENBQUM7QUFDUixhQUFPLENBREM7QUFFUixZQUFNLHFEQUZFO0FBR1IsY0FBUSx3QkFIQTtBQUlSLGlCQUFXO0FBSkgsS0FBRCxFQUtKO0FBQ0gsYUFBTyxDQURKO0FBRUgsWUFBTSxrQ0FGSDtBQUdILGNBQVEsdUJBSEw7QUFJSCxpQkFBVztBQUpSLEtBTEksRUFVSjtBQUNILGFBQU8sQ0FESjtBQUVILFlBQU0sMkJBRkg7QUFHSCxjQUFRLGlCQUhMO0FBSUgsaUJBQVc7QUFKUixLQVZJO0FBYk4sR0FoRE0sQ0FBWDtBQStFRCxDQXpJQSxHQUFEIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBtYXgtbGVuOiBbXCJlcnJvclwiLCAyMDBdICovXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2dlbVN0b3JlJywgW10pO1xuXG4gIGFwcC5jb250cm9sbGVyKCdTdG9yZUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9kdWN0cyA9IGdlbXM7XG4gIH0pO1xuXG4gIGFwcC5jb250cm9sbGVyKCdUYWJDb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudGFiID0gMztcbiAgICB0aGlzLnNldFRhYiA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy50YWIgPSBuZXdWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuaXNTZXQgPSBmdW5jdGlvbiAodGFiTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFiID09PSB0YWJOYW1lO1xuICAgIH07XG4gIH0pO1xuXG4gIGFwcC5jb250cm9sbGVyKCdSZXZpZXdDb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmV2aWV3ID0ge307XG4gICAgdGhpcy5hZGRSZXZpZXcgPSBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgdGhpcy5yZXZpZXcuY3JlYXRlZE9uID0gRGF0ZS5ub3coKTtcbiAgICAgIHByb2R1Y3QucmV2aWV3cy5wdXNoKHRoaXMucmV2aWV3KTtcbiAgICAgIHRoaXMucmV2aWV3ID0ge307XG4gICAgfTtcbiAgfSk7XG5cbiAgYXBwLmRpcmVjdGl2ZShcInByb2R1Y3REZXNjcmlwdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3Byb2R1Y3QtZGVzY3JpcHRpb24uaHRtbCdcbiAgICB9O1xuICB9KTtcblxuICBhcHAuZGlyZWN0aXZlKFwicHJvZHVjdFNwZWNzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHRlbXBsYXRlVXJsOiBcInByb2R1Y3Qtc3BlY3MuaHRtbFwiXG4gICAgfTtcbiAgfSk7XG5cbiAgYXBwLmRpcmVjdGl2ZSgncHJvZHVjdFRhYnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICAgIHRlbXBsYXRlVXJsOiBcInByb2R1Y3QtdGFicy5odG1sXCIsXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGFiID0gMTtcbiAgICAgICAgdGhpcy5pc1NldCA9IGZ1bmN0aW9uIChjaGVja1RhYikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRhYiA9PT0gY2hlY2tUYWI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0VGFiID0gZnVuY3Rpb24gKHNldFRhYikge1xuICAgICAgICAgIHRoaXMudGFiID0gc2V0VGFiO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ0YWJcIlxuICAgIH07XG4gIH0pO1xuXG4gIHZhciBnZW1zID0gW3tcbiAgICBuYW1lOiAnQXp1cml0ZScsXG4gICAgZGVzY3JpcHRpb246ICdTb21lIGdlbXMgaGF2ZSBoaWRkZW4gcXVhbGl0aWVzIGJleW9uZCB0aGVpciBsdXN0ZXIsIGJleW9uZCB0aGVpciBzaGluZS4uLiBBenVyaXRlIGlzIG9uZSBvZiB0aG9zZSBnZW1zLicsXG4gICAgc2hpbmU6IDgsXG4gICAgcHJpY2U6IDExMC41MCxcbiAgICByYXJpdHk6IDcsXG4gICAgY29sb3I6ICcjQ0NDJyxcbiAgICBmYWNlczogMTQsXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgICdpbWcvZ2VtLTAyLmdpZicsXG4gICAgICAgICdpbWcvZ2VtLTA1LmdpZicsXG4gICAgICAgICdpbWcvZ2VtLTA5LmdpZidcbiAgICAgIF0sXG4gICAgcmV2aWV3czogW3tcbiAgICAgIHN0YXJzOiA1LFxuICAgICAgYm9keTogJ0kgbG92ZSB0aGlzIGdlbSEnLFxuICAgICAgYXV0aG9yOiAnam9lQGV4YW1wbGUub3JnJyxcbiAgICAgIGNyZWF0ZWRPbjogMTM5NzQ5MDk4MDgzN1xuICAgICAgfSwge1xuICAgICAgc3RhcnM6IDEsXG4gICAgICBib2R5OiAnVGhpcyBnZW0gc3Vja3MuJyxcbiAgICAgIGF1dGhvcjogJ3RpbUBleGFtcGxlLm9yZycsXG4gICAgICBjcmVhdGVkT246IDEzOTc0OTA5ODA4MzdcbiAgICAgIH1dXG4gICAgfSwge1xuICAgIG5hbWU6ICdCbG9vZHN0b25lJyxcbiAgICBkZXNjcmlwdGlvbjogJ09yaWdpbiBvZiB0aGUgQmxvb2RzdG9uZSBpcyB1bmtub3duLCBoZW5jZSBpdHMgbG93IHZhbHVlLiBJdCBoYXMgYSB2ZXJ5IGhpZ2ggc2hpbmUgYW5kIDEyIHNpZGVzLCBob3dldmVyLicsXG4gICAgc2hpbmU6IDksXG4gICAgcHJpY2U6IDIyLjkwLFxuICAgIHJhcml0eTogNixcbiAgICBjb2xvcjogJyNFRUUnLFxuICAgIGZhY2VzOiAxMixcbiAgICBpbWFnZXM6IFtcbiAgICAgICAgJ2ltZy9nZW0tMDEuZ2lmJyxcbiAgICAgICAgJ2ltZy9nZW0tMDMuZ2lmJyxcbiAgICAgICAgJ2ltZy9nZW0tMDQuZ2lmJ1xuICAgICAgXSxcbiAgICByZXZpZXdzOiBbe1xuICAgICAgc3RhcnM6IDMsXG4gICAgICBib2R5OiAnSSB0aGluayB0aGlzIGdlbSB3YXMganVzdCBPSywgY291bGQgaG9uZXN0bHkgdXNlIG1vcmUgc2hpbmUsIElNTy4nLFxuICAgICAgYXV0aG9yOiAnSmltbXlEZWFuQGV4YW1wbGUub3JnJyxcbiAgICAgIGNyZWF0ZWRPbjogMTM5NzQ5MDk4MDgzN1xuICAgICAgfSwge1xuICAgICAgc3RhcnM6IDQsXG4gICAgICBib2R5OiAnQW55IGdlbSB3aXRoIDEyIGZhY2VzIGlzIGZvciBtZSEnLFxuICAgICAgYXV0aG9yOiAnZ2Vtc1JvY2tAZXhhbXBsZS5vcmcnLFxuICAgICAgY3JlYXRlZE9uOiAxMzk3NDkwOTgwODM3XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICBuYW1lOiAnWmlyY29uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ppcmNvbiBpcyBvdXIgbW9zdCBjb3ZldGVkIGFuZCBzb3VnaHQgYWZ0ZXIgZ2VtLiBZb3Ugd2lsbCBwYXkgbXVjaCB0byBiZSB0aGUgcHJvdWQgb3duZXIgb2YgdGhpcyBnb3JnZW91cyBhbmQgaGlnaCBzaGluZSBnZW0uJyxcbiAgICBzaGluZTogNzAsXG4gICAgcHJpY2U6IDExMDAsXG4gICAgcmFyaXR5OiAyLFxuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgZmFjZXM6IDYsXG4gICAgaW1hZ2VzOiBbXG4gICAgICAgICdpbWcvZ2VtLTA2LmdpZicsXG4gICAgICAgICdpbWcvZ2VtLTA3LmdpZicsXG4gICAgICAgICdpbWcvZ2VtLTEwLmdpZidcbiAgICAgIF0sXG4gICAgcmV2aWV3czogW3tcbiAgICAgIHN0YXJzOiAxLFxuICAgICAgYm9keTogJ1RoaXMgZ2VtIGlzIFdBWSB0b28gZXhwZW5zaXZlIGZvciBpdHMgcmFyaXR5IHZhbHVlLicsXG4gICAgICBhdXRob3I6ICd0dXJ0bGVndXl5QGV4YW1wbGUub3JnJyxcbiAgICAgIGNyZWF0ZWRPbjogMTM5NzQ5MDk4MDgzN1xuICAgICAgfSwge1xuICAgICAgc3RhcnM6IDEsXG4gICAgICBib2R5OiAnQkJXOiBIaWdoIFNoaW5lICE9IEhpZ2ggUXVhbGl0eS4nLFxuICAgICAgYXV0aG9yOiAnTG91aXNXNDA3QGV4YW1wbGUub3JnJyxcbiAgICAgIGNyZWF0ZWRPbjogMTM5NzQ5MDk4MDgzN1xuICAgICAgfSwge1xuICAgICAgc3RhcnM6IDEsXG4gICAgICBib2R5OiAnRG9uXFwndCB3YXN0ZSB5b3VyIHJ1YmxlcyEnLFxuICAgICAgYXV0aG9yOiAnbmF0QGV4YW1wbGUub3JnJyxcbiAgICAgIGNyZWF0ZWRPbjogMTM5NzQ5MDk4MDgzN1xuICAgICAgfV1cbiAgICB9XTtcblxufSgpKTsiXX0=
