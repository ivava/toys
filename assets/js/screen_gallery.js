$(document).ready(function() {
    initScreenGallery($('.controls_container'), $('.slides_container'));

    function initScreenGallery(controlContainer, slideContainer) {
        var controls = $(controlContainer.find('li'));
        var slides = $(slideContainer.find('li'));
        var slidesCount = [];
            for (var i = 0; i < slides.length; i++) {
               slidesCount[i] =  slides[i];
            }
            controls.click(function(event) {
                slides.removeClass('active');
               var targetCount = $(this).attr('data-target');
                var target = slidesCount[targetCount];
                $(target).addClass('active');
                controls.removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        var carouselControls = $('.carousel_controls');
        var next = carouselControls.find('.next');
        var prev = carouselControls.find('.prev');
        var count = 0;
        next.click(function(event) {
           slides.removeClass('active');
            event.preventDefault();
            if (count != 0) {
                if (count == slides.length) {
                    count = 0;
                    $(slidesCount[count]).addClass('active');
                    count++;
                } else {
                    $(slidesCount[count]).addClass('active');
                    count++;
                }
            } else {
                $(slidesCount[count + 1]).addClass('active');
                count++;
            }
        });
            prev.click(function(event) {
                event.preventDefault();
                slides.removeClass('active');
                if (count < 0) {
                    count = slides.length - 1;
                    console.log(count);
                    $(slidesCount[count]).addClass('active');
                } else {
                    $(slidesCount[count]).addClass('active');
                }
                count--;
            })
    };
});