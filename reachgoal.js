function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}

jQuery(document).ready(function ($) {

    /* Show phone */

    // $(".hide-phone").click(function () {
    //     yaCounter72402853.reachGoal('showphone');
    //     gtag('event', 'send', {
    //         'event_category': 'show',
    //         'event_action': 'phone'
    //     });
    // });

    /* Phones */

    $("[href='tel:+375447986686']").click(function () {
        yaCounter72402853.reachGoal('phonecall');
        gtag('event', 'send', {
            'event_category': 'phone',
            'event_action': 'call'
        });
    });


    $(document).bind("copy", function (e) {
        var text = getSelectedText();
        if (text.indexOf('+375 (44) 798-66-86') !== -1) {
            yaCounter72402853.reachGoal('phonecall');
            gtag('event', 'send', {
                'event_category': 'phone',
                'event_action': 'call'
            });
        }
    });

    /* Email */

    $("[href='mailto:info@ecodez.by']").click(function () {
        yaCounter72402853.reachGoal('emailsend');
        gtag('event', 'send', {
            'event_category': 'mail',
            'event_action': 'send'
        });
    });

    $(document).bind("copy", function (e) {
        var text = getSelectedText();
        if (text.indexOf('info@ecodez.by') !== -1) {
            yaCounter72402853.reachGoal('emailsend');
            gtag('event', 'send', {
                'event_category': 'mail',
                'event_action': 'send'
            });
        }
    });

    /*Form Send*/

    document.addEventListener('wpcf7mailsent', function (event) {
        gtag('event', 'send', {
            'event_category': 'form',
            'event_action': 'submit'
        });
        yaCounter72402853.reachGoal('formsend');
    }, false);
});