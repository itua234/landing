"use strict";

//-->> This file contains all event handlers required by the application







var navBarTransitionHandler = function (event) {
    var navDrawer = document.querySelector('#nav-drawer');
    if (navDrawer.classList.contains('transitioning') && navDrawer.classList.contains('opening')) {
        navDrawer.dataset.state = 'open';
        navDrawer.classList.remove('opening');
        navDrawer.classList.remove('transitioning');
    } else if (navDrawer.classList.contains('transitioning') &&  navDrawer.classList.contains('closing')) {
        navDrawer.dataset.state = 'closed';
        navDrawer.classList.remove('closing');
        navDrawer.classList.remove('transitioning');
    }
}

var navDrawerTogglerHandler = function(event) {
    toggleNavigationDrawer();
}