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

    setTimeout(function(){
        $('#email-ba8d0f4b-f507-4750-a97c-cfc2e0b95c37').attr('placeholder','Type your email here');
        $('.actions input[type="submit"]').attr('value', '');
    } ,2000);

    //------------ team section -----------------//
    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 3; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
    $('.carousel').carousel({
        interval: false
    });

});