function attach () {
    document.getElementById('thanks').addEventListener( 'click', function () {
        alert( 'clicked!' );
        // add new section:
        // translucent overlay
        // text: seriously, you're awesome
        // text: pull from array,  reminders- you're awesome, etc
        // how to close it??

        //or

        // rain hearts

    });
}

window.onload = attach;
