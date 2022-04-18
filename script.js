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

function night_day_handler(self) {
    $(document).ready(function () {
        $("body").sparkle({
            color: [
                "#2eafea", "#e56604"
            ],
            speed: 0.4
        });
        $("body").off("mouseover.sparkle");
        $("body").off("mouseout.sparkle");
        $("body").off("focus.sparkle");
        $("body").off("blur.sparkle");
        if (self.value == 'day') {
            Tag.swap_color('body');
            Tag.set_color('a, h1', 'aquamarine');
            self.value = 'night';
            $("body").trigger("start.sparkle");
        } else {
            Tag.swap_color('body');
            Tag.set_color('a, h1', 'pink');
            self.value = 'day';
            $("body").trigger("stop.sparkle");
        }
    });
}

var Tag = {
    swap_color: function (tag) {
        var color = $(tag).css('color');
        var bgcolor = $(tag).css('background-color');
        $(tag).css('color', bgcolor);
        $(tag).css('background-color', color);
    },
    set_color: function (tag, color) {
        $(tag).css('color', color);
    }
}