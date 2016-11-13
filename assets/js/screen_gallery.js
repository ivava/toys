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
    };
});