



$(function() {

    var getData = (function(data) {
        $.ajax("../accordions.json", {
            success: function(data) {
                buildAccordions(data);
            }
        });

    })();

    var buildAccordions = function(data) {
        var accordions = data;
        var $container = $(".accordions").empty();

        _.each(accordions, function(accordion) {
            var header = "<div class='accordion-header'>" + accordion.header + "</div>";
            var body = "<div class='accordion-body'><div class='inner-body'>" + accordion.body + "</div></div>";
            var shell = "<div class='accordion'>" + header + body + "</div>";
            $container.append(shell);
        });

        listeners();
        
    };

    var listeners = function() {
        $(".accordion:not(:first-child").addClass("closed");   
        $(".accordions").on("click", ".accordion", function(event) {
            var $target = $(event.currentTarget);
            $(".accordion").addClass("closed");
            $target.toggleClass("closed");
        })
    };









});