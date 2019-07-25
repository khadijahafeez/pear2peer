/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function HomeCtrl( ) {

    this.userName = 'Initial user';
    this.date = new Date();
};


angular
    .module('TutorApp')
    .controller('HomeCtrl', HomeCtrl)
