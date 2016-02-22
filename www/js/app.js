// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var model = angular.module('blog', ['ionic']);

model.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// 路由
model.config(['$stateProvider',function($stateProvider) {
    $stateProvider
      .state('home',{
            url:'/home',
            templateUrl:'templates/home.html',
            controller:'home'
      })
      .state('find',{
            url:'/find',
            templateUrl:'templates/find.html',
            controller:'find'
      })
      .state('set',{
            url:'/set',
            templateUrl:'templates/set.html',
            controller:'set'
      })
      .state('articleList',{
            url:'/articleList/:id/:title',
            templateUrl:'templates/articleList.html',
            controller:'articleList'
      })

}])

// 控制器
model.controller('nav', ['$scope','$location' ,function($scope,$location){
  $scope.$location = $location;
}])

// 左侧导航栏控制器
model.controller('left', ['$scope','$location','$ionicSideMenuDelegate' ,function($scope,$location,$ionicSideMenuDelegate){
    $scope.$location = $location;
    $scope.left = [
      {
        title:'编码',
        icon:'ion-ionic',
        id:1,
        active:''
      },
      {
        title:'娱乐',
        icon:'ion-happy-outline',
        id:2,
        active:''
      },
      {
        title:'暴雪',
        icon:'ion-social-bitcoin',
        id:3,
        active:''
      }
    ]

    $scope.leftNav = function(path,index){
        $location.path(path); //改变url
        $ionicSideMenuDelegate.toggleLeft(); //关闭侧边栏
        $scope.left[index].active = 'active'; //active 
        //同胞元素至空
        var len = $scope.left.length;
        for(var i = 0;i!=len;i++){
            if(i!=index){
                $scope.left[i].active='';
            }
        }
    }

}])

model.controller('home', ['$scope', function($scope){
    
}])

model.controller('find', ['$scope', function($scope){
    
}])

model.controller('set', ['$scope', function($scope){
    
}])

model.controller('articleList', ['$scope','$stateParams', function($scope,$stateParams){
    $scope.id = $stateParams.id;
    $scope.title = $stateParams.title;
    console.log($scope.title);
}])