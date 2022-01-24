"use strict";

//-->> This file contains code to initialise different aspects of the application







window.onload = function(event) {
    escapeNavigationBar();
    cloneNavigationBar();
    initialiseEventHandlers();
    initialiseNavigationDrawer();
}

window.onresize = function(event) {
    initialiseNavigationDrawer();
}