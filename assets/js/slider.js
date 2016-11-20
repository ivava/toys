
var Slider = function(sliderContainer, controlsContainer){
    this.sliderContainer = sliderContainer;
    this.controlsContainer = controlsContainer;
    this.slides = sliderContainer.find('li');
    this.controls = controlsContainer.find('li');
    this.slidesCount = [];
};
Slider.prototype.constants = {
  active_class: 'active'
};
Slider.prototype.initControlsEvent = function(target) {
    var targetSlide = target.attr('data-target');
    for (var i = 0; i < this.slides.length; i++) {
        this.slidesCount[i] = this.slides[i];
    };
   var activeClass = this.constants.active_class;
    this.slides.removeClass(activeClass);
    targetSlide = this.slidesCount[targetSlide];
    $(targetSlide).addClass(activeClass);
    this.controls.remove(activeClass);
    target.addClass(activeClass);
};
Slider.prototype.initDirectionControls = function(controls) {
    this.directionControls = controls;
    this.nextControl = this.directionControls.find('.next');
    this.prevControl = this.directionControls.find('prev');
    var count = 0;
};
