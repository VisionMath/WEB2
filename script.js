$(function () {
    $("#header").load("header.html");
});
$(function () {
    $("#sidebar").load("sidebar.html");
});
$(function () {
    $("#navbar").load("navbar.html");
});
$(function () {
    $("#footer").load("footer.html");
});
function height_equal() {
    article_height = $('#article').outerHeight();
    $('.sidebar-container').css('min-height', article_height);
    console.log(article_height);
}