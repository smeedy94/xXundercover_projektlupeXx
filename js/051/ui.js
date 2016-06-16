//------------------------------------------------------------------------------
// Test Implementierung Übung 2
//------------------------------------------------------------------------------
// file: ui.js
// revision: 0 03.06.2016
//------------------------------------------------------------------------------
// Zusammenfassung UI-spezifische Klassen
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// APP.EmptyContent_cl = Class.create({
// //------------------------------------------------------------------------------
//    initialize: function () {
//    },
//    notify_px: function (self_opl, message_spl, data_apl) {
//    },
//    canClose_px: function () {
//       return true;
//    },
//    close_px: function () {
//    },
//    render_px: function (data_opl) {
//    }
// });
// EOF


APP.appUI_cl = Class.create({

	initialize: function () {
    this.element_o = $("#header button");

   },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
   },
   createEventHandler_p: function () {
	    /* Ereignisbehandlung einrichten */
      // $("#header button").on('click', this.onClick_p.bind(this));
	     
   },
   render_px: function (data_opl) {
      this.dis_buttons();
      this.createEventHandler_p();

   },
   dis_buttons: function(){
      $(".uk-button-group button").each(function(){
        if($(this).attr("data-action") == "edit" 
          || $(this).attr("data-action") == "delete")
        this.disabled = true;
      });
   },
   en_buttons: function(){
      $(".uk-button-group button").each(function(){
        this.disabled = false;
      });
   },
   onClick_p: function(event_opl){
      }
});