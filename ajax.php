<!doctype html>
<html lang="en">
    
<!-- Mirrored from www.salesplat.xyz/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 23 Dec 2021 08:32:18 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.ico">
        <link href="assets/lib/font/poppins/poppins.css" rel="stylesheet">
        <link href="assets/lib/font/raleway/raleway.css" rel="stylesheet">
        <link href="assets/lib/js/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/it.css" rel="stylesheet">
        <title>Sales, Distribution And Support Solutions For Your Business' Growth | Laravel</title>
    </head>
    <body>
        <div class="container" style="border:2px solid red;">
            <form id="ajax-form">
                <input type="email" value="ituaosemeilu234@gmail.com" id="email" name="email">
                <button type="submit" class="">Submit</button>
            </form>
        </div>



        <script>
            var form_ajax = document.getElementById("ajax-form");
            form_ajax.addEventListener("submit", (event) => {
                event.preventDefault();
                let formData = {
                    email : document.getElementById("email").value
                }
                const url = "spark.php";
                let fetchData = {
                    method : "POST",
                    body: JSON.stringify(formData),
                    headers : new Headers({
                        'Content-Type' : 'application/json; charset=UTF-8'
                    })
                };
                fetch(url, fetchData)
                .then(function(response){
                    alert (response.status);
                    return response.json();
                })
                .then(function(data){
                    if(data){
                        alert(data.name + " " + data.age);
                    }
                })
                .catch(function(){

                })
            })
        </script>
</body>

</html>

