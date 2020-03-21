$(document).ready(function(){
    var img = document.querySelector('[name="image"]');
    img.onchange = function() {
        var image = this.files[0];
        if (image == undefined) {
            document.querySelector('#course-img').src = "";
        } else {
            getBase64(image, '#img-course');
        }
    }
    function getBase64(file, selector) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            document.querySelector(selector).src = reader.result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
});
