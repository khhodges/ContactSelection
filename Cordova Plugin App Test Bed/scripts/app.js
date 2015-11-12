(function () {
    
    var app, selectedContact, selectedContactId;

    document.addEventListener('deviceready', function () {  
        navigator.splashscreen.hide();
        app = new kendo.mobile.Application(document.body, {skin: 'flat', transition: 'slide'});
    }, false);

    function onError() {
        alert("Sorry, but there was error!");
    }
    
    // Handles iOS not returning displayName or returning null
    function getName(c) {
    	if(c.name.formatted) return c.name.formatted;
    	if(c.name.givenName && c.name.familyName) return c.name.givenName + " " + c.name.familyName;
    	return "No Name Listed";
    }

}());