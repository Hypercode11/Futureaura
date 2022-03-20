$(document).ready(function() {
preloaderFadeOutTime = 2157;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}hidePreloader();
});