/****************************************************************************
	fcoo-moment.js, 

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-moment
	https://github.com/FCOO

****************************************************************************/

(function (/*$, */moment, i18next, window/*, document, undefined*/) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	//var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//var ns = window;

    //Change language in moment when i18next changes lang
    i18next.on('languageChanged', function(lng) {
        //Special case: Norwegian (no) using "Bokmål" (nb)
        moment.locale(lng == 'no' ? 'nb' : lng);
    });



//console.log( moment.simpleFormat.options );

    //Add different timezones. Add options.group {string} to be able to sort the timezomes in groups
/*
    moment.sfAddTimezone([
            { id:'Atlantic/Faeroe' },
            { id:'Europe/Copenhagen' },
            { id:'Europe/London' },
            { id:'America/Thule' },
            { id:'America/Scoresbysund', name:"East Greenland/Ittoqqortoormiit" },
            { id:'America/Godthab', name:"West Greenland/Nuuk" },
            { id:'America/Danmarkshavn', name:"East Greenland/Danmarkshavn" },
            { id:'Atlantic/Reykjavik', name:"Iceland" }
        ] );

        $('#timezone option').each( function( index, elem ){
            var timezone = moment.sfGetTimezone( elem.value );
            if (timezone)
                $(elem).text( timezone.fullName );  


Standard
    value="local" Local
    value="utc" UTC
Europe
    value="Europe/Copenhagen">Europe / Copenhagen</option>
    value="Europe/London">Europe / London</option>
Atlantic
    value="Atlantic/Faeroe">Faeroe</option>
    value="Atlantic/Reykjavik">Iceland</option>
Greenland
    value="America/Godthab">West Greenland / Nuuk</option>
    value="America/Scoresbysund">East Greenland / Ittoqqortoormiit</option>
    value="America/Danmarkshavn">East Greenland / Danmarkshavn</option>
    value="America/Thule">Thule Air Base</option>






	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { 

	
	}); //End of initialize/ready
	//******************************************



}(/*jQuery, */moment, i18next, this, document));