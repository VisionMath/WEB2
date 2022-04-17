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
        if (self.value == 'day') {            
            Tag.swap_color('body');
            Tag.set_color('a, h1', 'aquamarine');
            self.value = 'night';                    

            $("body").sparkle({
                color: [
                    "#2eafea", "#e56604"
                ],
                speed: 0.4
            });
        } else {            
            Tag.swap_color('body');
            Tag.set_color('a, h1', 'pink');
            self.value = 'day';            

            var sakura = new Sakura('body', {
                colors: [
                    {
                        gradientColorStart: 'rgba(255, 183, 197, 0.9)',
                        gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
                        gradientColorDegree: 120
                    }, {
                        gradientColorStart: 'rgba(255,189,189)',
                        gradientColorEnd: 'rgba(227,170,181)',
                        gradientColorDegree: 120
                    }, {
                        gradientColorStart: 'rgba(212,152,163)',
                        gradientColorEnd: 'rgba(242,185,196)',
                        gradientColorDegree: 120
                    }
                ],
                delay: 200
            });
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