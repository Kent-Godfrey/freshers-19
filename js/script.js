var endDate = new Date("Aug 19, 2019 00:09:00").getTime();
/*var endDateFresher = new Date("Sept 20, 2019 00:09:00").getTime();*/

var timer = setInterval(function() {

    let now = new Date().getTime(); 
    let t = endDate - now; 

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("countdown-days").innerHTML = days + "<span>DAY(S)</span>";

    document.getElementById("countdown-hours").innerHTML= ("0" + hours).slice(-2) + "<span>HR(S)</span>";

    document.getElementById("countdown-minutes").innerHTML= ("0" + mins).slice(-2) +"<span>MIN(S)</span>";

    document.getElementById("countdown-seconds").innerHTML= ("0" + secs).slice(-2) +"<span>SEC(S)</span>"
    }

    

},1000);

$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

function toggleIcon(e) {
    $(e.target)
        .prev(".panel-heading")
        .find(".more-less")
        .toggleClass("minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);