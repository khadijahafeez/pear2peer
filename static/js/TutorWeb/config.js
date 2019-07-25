/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */



function config($locationProvider ,$httpProvider,$resourceProvider,$stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $resourceProvider.defaults.stripTrailingSlashes = false;
        // Setup header stuff for CSRF token
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $urlRouterProvider.otherwise("/home",{templateUrl:"/static/views/TutorWeb/home.html"});

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
    //     .state('login',{
    //     url:"/login",
    //     templateUrl:"/static/views/psgAdmin/auth/login.html",
    //     data:{pageTitle : 'Login'}
    //
    //     })

        .state('home', {
            url: "/home",
            templateUrl: "/static/views/TutorWeb/home.html",
            data: { pageTitle: 'Landing page', specialClass: 'landing-page' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['/static/js/plugins/wow/wow.min.js']
                        }
                    ]);
                }
            }
        })
        // .state('users', {
        //     abstract: true,
        //     url: "/users",
        //     templateUrl: "/static/views/common/content.html",
        //     controller:'DataTableController',
        //     controllerAs: 'datatable',
        //        resolve: {
        //         loadPlugin: function ($ocLazyLoad) {
        //             return $ocLazyLoad.load([
        //                 {
        //                     serie: true,
        //                     files: ['/static/js/plugins/dataTables/datatables.min.js','/static/css/plugins/dataTables/datatables.min.css']
        //                 },
        //                 {
        //                     serie: true,
        //                     name: 'datatables',
        //                     files: ['/static/js/plugins/dataTables/angular-datatables.min.js']
        //                 },
        //                 {
        //                     serie: true,
        //                     name: 'datatables.buttons',
        //                     files: ['/static/js/plugins/dataTables/angular-datatables.buttons.min.js']
        //                 }
        //             ]);
        //         }
        //     }
        // })
        // .state('users.umac', {
        //     url: "/umac",
        //     templateUrl: "/static/views/psgAdmin/users/macbinding_user.html",
        //     data: { pageTitle: 'PTCL PSG Portal | User' },
        //     controller:'UserBindingController',
        //     controllerAs: 'bindings'
        // })

//        $locationProvider.html5Mode(true);

}


angular
    .module('TutorApp')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
        // $rootScope.username = 'Anonymous';
        // if(!$localStorage.username)
        // {
        //   $localStorage.username = '';
        // }


    //     $rootScope.$on("$locationChangeStart", function () {
    // //Here you can check whatever you want (servercall, cookie...)
    //         if (!isLoggedService.isLoggedIn()){
    //             $location.path('/login');
    //         }
    //
    //     });
    });
