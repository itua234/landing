"use strict";

//-->> This file contains functions THAT ARE SPECIFIC to the application







function initialiseNavigationDrawer() {
    // get all necessary elements
    var navDrawer = document.querySelector('#nav-drawer');
    var mobileNav = document.querySelector('#mobile-navigation');
    var navDrawerBackground = document.querySelector('#nav-drawer-bg');
    var navDrawerTop = document.querySelector('#nav-drawer-top');
    var navDrawerToggler = document.querySelector('#primary-nav-toggler');
    var navDrawerWidth = null;
    // we only need to change to mobile navigatio when 
    // the window width is 991px or less
    if (window.innerWidth <= 991) {
        mobileNav.style.display = 'block';
        navDrawerToggler.style.display = 'block';
        // lets do everything offscreen to avoid flickering while setting
        // up the mobile navigation
        navDrawer.style.right = '-1000000px';
        navDrawer.style.display = 'block';
        navDrawerWidth = navDrawer.offsetWidth + 'px';
        navDrawerTop.style.height = document.getElementsByTagName('nav')[0].offsetHeight + 'px';
        if (navDrawer.dataset.state == 'open') {
            navDrawer.style.right = '0px';
            navDrawerBackground.style.marginRight = navDrawerWidth;
            navDrawerBackground.style.width = '100%';
            navDrawerBackground.style.opacity = '0.5';
        } else {
            navDrawer.style.right = '-' + navDrawerWidth;
            navDrawerBackground.style.marginRight = '0px';
            navDrawerBackground.style.width = '';
            navDrawerBackground.style.opacity = '0';
        }
    } else {
        document.querySelector("#desktop-navigation").style.display = '';
        navDrawer.style.display = '';
        navDrawerToggler.style.display = '';
    }
}

function toggleNavigationDrawer() {
    var navDrawer = document.querySelector('#nav-drawer');
    var navDrawerBackground = document.querySelector('#nav-drawer-bg');
    var navDrawerWidth = navDrawer.offsetWidth + 'px';
    if (navDrawer.classList.contains('transitioning')) {
        return;
    }
    if (navDrawer.dataset.state == 'closed') {
        navDrawer.classList.add('transitioning');
        navDrawer.classList.add('opening');
        navDrawer.style.right = '0px';
        navDrawerBackground.style.marginRight = navDrawerWidth;
        navDrawerBackground.style.width = '100%';
        navDrawerBackground.style.opacity = '0.5';
    } else {
        navDrawer.classList.add('transitioning');
        navDrawer.classList.add('closing');
        navDrawer.style.right = '-' + navDrawerWidth;
        navDrawerBackground.style.marginRight = '0px';
        navDrawerBackground.style.width = '';
        navDrawerBackground.style.opacity = '0';
    }
}

function cloneNavigationBar() {
    var navDrawer = document.querySelector('#nav-drawer');
    var navDrawerTop = document.querySelector('#nav-drawer-top');
    var navDrawerTogglerClone = document.querySelector("#primary-nav-toggler").cloneNode(true);
    var navBarClone = document.querySelector("#desktop-navigation").cloneNode(true);
    navDrawerTogglerClone.id = '';
    navDrawerTogglerClone.classList.add('d-block');
    navDrawerTop.append(navDrawerTogglerClone);
    navBarClone.id = "mobile-navigation";
    navDrawer.append(navBarClone); 
}

function initialiseEventHandlers() {
    var navDrawer = document.querySelector('#nav-drawer');
    var navDrawerTogglers = document.querySelectorAll('.sp-nav-drawer-toggler');
    var navDrawerBackground = document.querySelector('#nav-drawer-bg'); 
    navDrawer.addEventListener('transitionend', navBarTransitionHandler);
    navDrawerTogglers.forEach(toggler => {
        toggler.addEventListener('click', navDrawerTogglerHandler);
    });
    navDrawerBackground.addEventListener('click', navDrawerTogglerHandler);
}

function escapeNavigationBar() {
    var desktopNav = document.querySelector('#nav-bar-desktop');
    var escapeNode = document.querySelector('#escape-navbar');
    escapeNode.style.paddingTop = desktopNav.offsetHeight + 'px';
    console.log(desktopNav.offsetHeight);
}