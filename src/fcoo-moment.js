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


    //Add translations for moment-simple-format
    i18next.addPhrases( 'moment', {
        utc     : { en: 'UTC'                },
        local   : { en: 'local', da: 'lokal' },
        dayAbbr : { en: 'd'                  },
        hourAbbr: { en: 'h'    , da: 't'     },
        minAbbr : { en: 'm'                  },
        now     : { en: 'now'  , da: 'nu'    },
        to      : { en: 'to'   , sa: 'til'   }
    });


    //Change language in moment and call sfInit when i18next changes lang
    window.fcoo.events.on('languagechanged', function(){

        //Special case: Norwegian (no) using "Bokmål" (nb)
        moment.locale(i18next.language == 'no' ? 'nb' : i18next.language);

        //Call moment.sfInit( options ) to set text - TODO
        moment.sfInit({
           text: {
                utc     : i18next.t('moment:utc'),
                local   : i18next.t('moment:local'),
                dayAbbr : i18next.t('moment:dayAbbr'),
                hourAbbr: i18next.t('moment:hourAbbr'),
                minAbbr : i18next.t('moment:minAbbr'),
                now     : i18next.t('moment:now'),
                to      : i18next.t('moment:to')
           });

    });



//console.log( moment.simpleFormat.options );

    //Add different timezones. Add options.group {string} to be able to sort the timezomes in groups
/*
    moment.sfAddTimezone([
            { id:'Atlantic/Faeroe' },
            { id:'Europe/Copenhagen' },
            { id:'Europe/London' },
            { id:'America/Thule' },
            { id:'America/Scoresbysund', name:"East Greenland/Ittoqqortoormiit" },             //Østgrønland (grønlandsk: "Tunu")
            { id:'America/Godthab', name:"West Greenland/Nuuk" },                              //Vestgrønland (Grønlandsk: "Kitaa")
            { id:'America/Danmarkshavn', name:"East Greenland/Danmarkshavn" },                 //Østgrønland (grønlandsk: "Tunu")
            { id:'Atlantic/Reykjavik', name:"Iceland" }
        ] );
//Nordgrønland (grønlandsk: "Avannaarsua") 
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