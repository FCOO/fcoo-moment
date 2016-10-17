/****************************************************************************
	fcoo-moment.js, 

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-moment
	https://github.com/FCOO

****************************************************************************/

(function ($, moment, i18next, window, document, undefined) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	//var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	var ns = window;






    //Change language in moment when i18next changes lang
    i18next.on('languageChanged', function(lng) {
        moment.locale(lng);
    });




	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { 

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, moment, i18next, this, document));