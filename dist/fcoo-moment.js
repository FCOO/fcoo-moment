/****************************************************************************
	fcoo-moment.js,

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-moment
	https://github.com/FCOO

Set-up of common systems, objects, and methods for FCOO web applications use of moment.js and plugins
Sections:
1: Translation for moment-simple-format
2: Add time-zones and translation of there names
4:
5: Define common Modernizr-tests used to display moment
6: Load format for date, time and timezone from fcoo.settings

****************************************************************************/

(function ($, moment, i18next, window/*, document, undefined*/) {
	"use strict";

	//Create fcoo-namespace
	var ns = window.fcoo = window.fcoo || {};

    /***********************************************************************
    ************************************************************************
    1: Translation for moment-simple-format
    ************************************************************************
    ***********************************************************************/
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


    //Change language in moment and call sfInit when the language is changed
    ns.events.on(ns.events.LANGUAGECHANGED, function(){

        //Special case: Norwegian (no) using "Bokmål" (nb)
        moment.locale(i18next.language == 'no' ? 'nb' : i18next.language);

        //Call moment.sfInit( options ) to set text
        moment.sfInit({
           text: {
                utc     : i18next.t('moment:utc'),
                local   : i18next.t('moment:local'),
                dayAbbr : i18next.t('moment:dayAbbr'),
                hourAbbr: i18next.t('moment:hourAbbr'),
                minAbbr : i18next.t('moment:minAbbr'),
                now     : i18next.t('moment:now'),
                to      : i18next.t('moment:to')
           }
       });
    });

    /***********************************************************************
    ************************************************************************
    2: Add time-zones and translation of there names
    ************************************************************************
    ***********************************************************************/
    //Adding the timezones and adding a 'group' options
    moment.sfAddTimezone(
        [
            { id:'Europe/Copenhagen',    group: 'europe' },
            { id:'Europe/London',        group: 'europe' },

            { id:'Atlantic/Faeroe',      group: 'atlantic' },
            { id:'Atlantic/Reykjavik',   group: 'atlantic' },

            { id:'America/Godthab',      group: 'greenland' },
            { id:'America/Scoresbysund', group: 'greenland' },
            { id:'America/Danmarkshavn', group: 'greenland' },
            { id:'America/Thule',        group: 'greenland' }
        ],
        null /* offsetMoment */
    );

    //Add the translation of the timezones incl. the two default id:'local' and id:'utc'
    //Østgrønland (grønlandsk: "Tunu"), Vestgrønland (Grønlandsk: "Kitaa"), Nordgrønland (grønlandsk: "Avannaarsua")
    i18next.addPhrases( 'timezone', {
        'local'               : { en: 'Local time',                      da: 'Lokaltid'           },
        'utc'                 : { en: 'UTC',                             da: 'UTC'                },
        'Europe/Copenhagen'   : { en: 'Europe/Copenhagen',               da: 'Europa/København'   },
        'Europe/London'       : { en: 'Europe/London',                   da: 'Europa/London'      },
        'Atlantic/Faeroe'     : { en: 'Atlantic/Faeroe Islands',         da: 'Atlanten/Færøerne'  },
        'Atlantic/Reykjavik'  : { en: 'Atlantic/Reykjavik',              da: 'Atlanten/Reykjavik' },
        'America/Godthab'     : { en: 'West Greenland/Nuuk',             da: 'Vestgrøndland/Nuuk',           kl: 'Kitaa/Nuuk'             },
        'America/Scoresbysund': { en: 'East Greenland/Ittoqqortoormiit', da: 'Østgrønland/Ittoqqortoormiit', kl: 'Tunu/Ittoqqortoormiit'  },
        'America/Danmarkshavn': { en: 'East Greenland/Danmarkshavn',     da: 'Østgrønland/Danmarkshavn',     kl: 'Tunu/Danmarkshavn'      },
        'America/Thule'       : { en: 'North Greenland/Thule Air Base',  da: 'Nordgrønland/Thule Air Base',  kl: 'Avannaarsua/Pituffik'   },
    });

    //Add the translation of the different timezone-groups incl. 'standard' for local and utc
    i18next.addPhrases( 'timezonegroup', {
        'standard'  : {da: 'Standard', en: 'Standard'  },
        'europe'    : {da: 'Europa',   en: 'Europe'    },
        'atlantic'  : {da: 'Atlanten', en: 'Atlantic'  },
        'greenland' : {da: 'Grønland', en: 'Greenland' }
    });

    //Translate the names of the timezones when the language is changed
    ns.events.on(ns.events.LANGUAGECHANGED, function(){
        $.each( moment.simpleFormat.timezoneList, function( index, timezone ){
            timezone.update( i18next.t('timezone:' + timezone.id) );
        });

    });


/*
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
*/




    /***********************************************************************
    ************************************************************************
    5: Define common Modernizr-tests used to display moment
    ************************************************************************
    ***********************************************************************/

    /* The following Modernizr-test are deffined in fcoo-moment.scss and are set in momentSimpleFormatSetFormat
    showrelative: Show also the date/time as relative to now. Can be created using fcoo-value-format
    showutc     : Show also the date/time in UTC
    timezoneutc : On when the selected time zone is UTC

    NOTE: To only show a element when the user has selected "showutc" AND the time zone isn't UTC: class="show-for-showutc hide-for-timezoneutc"
    */


    /***********************************************************************
    ************************************************************************
    6: Load format for date, time and timezone from fcoo.settings
    ************************************************************************
    ***********************************************************************/
    //function to set options in moment.simpleFormat and call global event
    function momentSimpleFormatSetFormat( options ){
        options = $.extend( true, {}, {
                        'date'              : ns.globalSetting.get('date'),
                        'time'              : ns.globalSetting.get('time'),
                        'timezone'          : ns.globalSetting.get('timezone'),
                        '_fcoo_showrelative': ns.globalSetting.get('showrelative'),
                        '_fcoo_showutc'     : ns.globalSetting.get('showutc'),
                    },
                    options );

        //Update moment-formats
        moment.sfSetFormat( options );

        //Update modernizr-test
        window.modernizrToggle( 'showrelative', options._fcoo_showrelative );
        window.modernizrToggle( 'showutc',      options._fcoo_showutc );
        window.modernizrToggle( 'timezoneutc',  options.timezone == 'utc');

        //Fire global event
        ns.events.fire(ns.events.DATETIMEFORMATCHANGED);
    }

    //Set up and load 'date', 'time', 'timezone', 'showrelative', and 'showutc'  via fcoo.settings
    ns.globalSetting.add({
        id          : 'date',
        validator   : function( date ){ return $.inArray( date, ['DMY', 'MDY', 'YMD']) > -1; },
        applyFunc   : function( date ){ momentSimpleFormatSetFormat({ 'date': date });       },
        defaultValue: 'DMY',
        callApply   : false,
        globalEvents: ns.events.DATETIMEFORMATCHANGED
    });
    ns.globalSetting.add({
        id          : 'time',
        validator   : function( time ){ return $.inArray( time, ['12', '24']) > -1;    },
        applyFunc   : function( time ){ momentSimpleFormatSetFormat({ 'time': time }); },
        defaultValue: '24',
        callApply   : false,
        globalEvents: ns.events.DATETIMEFORMATCHANGED
    });
    ns.globalSetting.add({
        id          : 'timezone',
        validator   : function( timezone ){ return moment.sfGetTimezone( timezone ) !== null;      },
        applyFunc   : function( timezone ){ momentSimpleFormatSetFormat({ 'timezone': timezone }); },
        defaultValue: 'local',
        callApply   : false,
        globalEvents: ns.events.TIMEZONECHANGED
    });
    ns.globalSetting.add({
        id          : 'showrelative',
        validator   : function( showrelative ){ return jQuery.type( showrelative ) === "boolean";                    },
        applyFunc   : function( showrelative ){ momentSimpleFormatSetFormat({ '_fcoo_showrelative': showrelative }); },
        defaultValue: false,
        callApply   : false,
        globalEvents: ns.events.DATETIMEFORMATCHANGED
    });
    ns.globalSetting.add({
        id          : 'showutc',
        validator   : function( showutc ){ return jQuery.type( showutc ) === "boolean";               },
        applyFunc   : function( showutc ){ momentSimpleFormatSetFormat({ '_fcoo_showutc': showutc }); },
        defaultValue: false,
        callApply   : false,
        globalEvents: ns.events.DATETIMEFORMATCHANGED
    });

    //Also fire "datetimeformatchanged" when the language or the time zone is changed
    ns.events.on(ns.events.LANGUAGECHANGED, momentSimpleFormatSetFormat);
    ns.events.on(ns.events.TIMEZONECHANGED, momentSimpleFormatSetFormat);

    momentSimpleFormatSetFormat();

    /*****************************************************
    Create content for globalSetting modal-form
    *****************************************************/
    //Time-zone
    var items = [],
        currentGroupId;
    $.each(moment.simpleFormat.timezoneList, function(index, timezone){
        var groupId = timezone.group || 'standard';
        if (groupId != currentGroupId){
            currentGroupId = groupId;
            items.push('timezonegroup:'+currentGroupId);
        }
        items.push({id: timezone.id, text:['timezone:'+timezone.id, timezone.utcOffsetText]});
    });
    ns.globalSetting.addModalContent(ns.events.TIMEZONECHANGED, {id: 'timezone', type: 'selectlist', items: items});


    //Date and Time format
//       var content = [], items = [];
    var lastDate = moment().month(11).date(31),
        dateFormat = {weekday:'None', month: 'Short', year: 'Full'};

    ns.globalSetting.addModalContent(ns.events.DATETIMEFORMATCHANGED, [
        //Date-format
        {
            id  : 'date',
            type: 'select',
            label: {da:'Dato', en:'Date'},
            items: [
                {id: 'DMY', text: [{da:'Dag-Måned-År ', en:'Day-Month-Year '}, '('+lastDate.dateFormat({date: 'DMY', dateFormat: dateFormat})+')'] },
                {id: 'MDY', text: [{da:'Måned-Dag-År ', en:'Month-Day-Year '}, '('+lastDate.dateFormat({date: 'MDY', dateFormat: dateFormat})+')'] },
                {id: 'YMD', text: [{da:'År-Måned-Dag ', en:'Year-Month-Day '}, '('+lastDate.dateFormat({date: 'YMD', dateFormat: dateFormat})+')'] }
            ]
        },
        //Time-format
        {
            id  : 'time',
            type: 'select',
            label: {da:'Klokkeslæt', en:'Time'},
            items: [
                {id: '12', text: [{da:'12 timer', en:'12 hours'}, '(01:00pm)']},
                {id: '24', text: [{da:'24 timer', en:'24 hours'}, '(13:00)']}
            ]
        },
        {
            type: 'inputgroup',
            label: {da:'Vis (når det er muligt)', en:'Show (when possible)'},
            content: [
                //Show relative
                {
                    id  : 'showrelative',
                    type: 'checkbox',
                    text: {da:'Relativ tid (F.eks. "Nu + 2t")', en: 'Relative time (E.q. "Now + 2h")'},
                    smallBottomPadding: true
                },
                //Show UTC
                {
                    id      : 'showutc',
                    type    : 'checkbox',
                    text    : {da: 'Klokkeslæt i UTC', en:'Time in UTC'},
                    hideWhen: {timezone:'utc'},
                    smallBottomPadding: true
                }
            ]
        }



    ]);

    //Initialize/ready
	$(function() {

	});



}(jQuery, window.moment, window.i18next, this, document));
;
/****************************************************************************
    kl.js, 

    Translation of Moment text to Kalaallisut/Greenlandic (language code = kl)

****************************************************************************/

moment.defineLocale('kl', {
    parentLocale: 'da',
  
    /* TODO */



});
