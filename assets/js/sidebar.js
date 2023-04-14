/*!
 * Start Bootstrap - SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */
//
// !function (l) {
//     "use strict";
//     l("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
//         l("body").toggleClass("sidebar-toggled"), l(".sidebar").toggleClass("toggled"), l(".sidebar").hasClass("toggled") && l(".sidebar .collapse").collapse("hide")
//     }), l(window).resize(function () {
//         l(window).width() < 768 && l(".sidebar .collapse").collapse("hide"), l(window).width() < 480 && !l(".sidebar").hasClass("toggled") && (l("body").addClass("sidebar-toggled"), l(".sidebar").addClass("toggled"), l(".sidebar .collapse").collapse("hide"))
//     }), l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
//         var o;
//         768 < l(window).width() && (o = (o = e.originalEvent).wheelDelta || -o.detail, this.scrollTop += 30 * (o < 0 ? 1 : -1), e.preventDefault())
//     }), l(document).on("scroll", function () {
//         100 < l(this).scrollTop() ? l(".scroll-to-top").fadeIn() : l(".scroll-to-top").fadeOut()
//     }), l(document).on("click", "a.scroll-to-top", function (e) {
//         var o = l(this);
//         l("html, body").stop().animate({scrollTop: l(o.attr("href")).offset().top}, 1e3, "easeInOutExpo"), e.preventDefault()
//     })
// }(jQuery);

//اضافة صورة او فيديو بالداشبورد
document.getElementById('output')[0].addEventListener('change', function(event) {
    var file = event.target.files[0];
    var fileReader = new FileReader();
    if (file.type.match('image')) {
        fileReader.onload = function() {
            var img = document.createElement('img');
            img.src = fileReader.result;
            document.getElementsByTagName('div')[0].appendChild(img);
        };
        fileReader.readAsDataURL(file);
    } else {
        fileReader.onload = function() {
            var blob = new Blob([fileReader.result], {type: file.type});
            var url = URL.createObjectURL(blob);
            var video = document.createElement('video');
            var timeupdate = function() {
                if (snapImage()) {
                    video.removeEventListener('timeupdate', timeupdate);
                    video.pause();
                }
            };
            video.addEventListener('loadeddata', function() {
                if (snapImage()) {
                    video.removeEventListener('timeupdate', timeupdate);
                }
            });
            var snapImage = function() {
                var canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                var image = canvas.toDataURL();
                var success = image.length > 100000;
                if (success) {
                    var img = document.createElement('img');
                    img.src = image;
                    document.getElementsByTagName('div')[0].appendChild(img);
                    URL.revokeObjectURL(url);
                }
                return success;
            };
            video.addEventListener('timeupdate', timeupdate);
            video.preload = 'metadata';
            video.src = url;
            // Load video in Safari / IE11
            video.muted = true;
            video.playsInline = true;
            video.play();
        };
        fileReader.readAsArrayBuffer(file);
    }
});