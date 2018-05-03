$(document).ready(function() {
    //------------- newsletter signUp ---------------//
    (function (id, src) {
        if (document.getElementById(id)) { return; }
        const js = document.createElement('script');
        js.src = src;
        js.type = 'text/javascript';
        js.id = id;
        const e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(js, e);
    })('hs-analytics', '//js.hs-analytics.net/analytics/1521740700000/4082766.js');
    hbspt.forms.create({
        portalId: "4082766",
        formId: "ba8d0f4b-f507-4750-a97c-cfc2e0b95c37",
        css: ""
    });
    const formId = document.getElementsByClassName('hbspt-form')[0].id;
    $(`#`.concat(formId)).detach().appendTo('#newsletterSignUpDiv');

    //------------ team section -----------------//
    $('#carouselExample').on('slide.bs.carousel', function (e) {

        console.log("carousel is clicked");
        let $e = $(e.relatedTarget);
        let idx = $e.index();
        let itemsPerSlide = 4;
        let totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            let it = itemsPerSlide - (totalItems - idx);
            for (let i=0; i<it; i++) {
                // append slides to end
                if (e.direction==="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

});

console.log("custom.js");
