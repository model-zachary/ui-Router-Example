//module
var app = angular.module('myApp', ['ui.router']);
//ui.router
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url:'/index',
            views : {
    
            	 '@' : { 
            	 	templateUrl:  'templ/index.html'
            	 },
            	 'topbar@index' : {
            	 	templateUrl:  'templ/topbar.html'
            	 },
            	 'main@index' : {
            	 	templateUrl:  'templ/main.html'
            	 },
                 'navDetail@index' : { //起初  右边  默认 显示的位置
                    template:  '<p>导航菜单</p>'
                 }
            }
        })
        .state('index.detail', {
        	url: '/detail',
        	views : {
        		'navDetail@index' : {
        			templateUrl:  'templ/detail.html'
        		}
        	}
        })
         .state('index.nav', {
            url: '/nav',
            views : {
                'navDetail@index' : {
                    template:  '<p>导航菜单</p>'
                }
            }
        })
         .state('index.add', {
            url: '/add',
            views : {
                'navDetail@index' : {
                    template:  '<p>新增页面</p>'
                }
            }
        })

        .state('index.about', {
            url:'/about',
            views: {
            	
            	'main@index' : {
            		templateUrl: 'templ/about.html'
            	},
            }
            /*controller: 'AboutController'*/
        })
        .state('index.login', {
            url:'/login',
        	views: {
            	'main@index' : {
            		templateUrl: 'templ/login.html'
            	},
            }
        });
}]);