var files = [
    "vendor/bootstrap/css/bootstrap.min.css",
    "css/util.js",
    "css/main.js"
]
function loadcssfile(filename){
    if(Array.isArray(filename)){
        for(var i = 0; i<filename.length; i++){
            var filetype = filename[i].split('.').pop();
            if(filetype == "css"){
                var link = document.createElement( "link" );
                link.href = filename[i];
                link.type = "text/css";
                link.rel = "stylesheet";
                link.media = "screen,print";
                document.getElementsByTagName( "head" )[0].appendChild( link );
            }
        }  
    }
}
function loadjsfile(filename){
    if(Array.isArray(filename)){
        for(var i = 0; i<filename.length; i++){
            var filetype = filename[i].split('.').pop();
            if(filetype == "js"){
                var fileref = document.createElement( "script" );
                fileref.href = filename[i];
                fileref.type = "text/javascript";
                document.getElementsByTagName( "head" )[0].appendChild( fileref );
            }
        }  
    }
}
loadcssfile(files) ////dynamically load and add this .css file
loadjsfile(files) ////dynamically load and add this .js file
