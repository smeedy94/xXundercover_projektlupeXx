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
		this.template_s = "app.tpl";
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
	    this.element_o.on('click','button', this.onClick_p.bind(this));
   },
   render_px: function (data_opl) {
	    var markup_s = APP.tm_o.execute_px(this.template_s, null);
	    this.element_o = $("body");
	    this.element_o.html(markup_s);
      this.createEventHandler_p();
      this.dis_buttons();
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
      var action = $(event_opl.target).attr("data-action");
      switch(action){
        case 'add':
          alert("add");
          break;
        case 'edit':
          alert("edit");
          break;
        case 'delete':
          alert("delete");
          break;
        case 'out':
          alert("zoomout");
          break;
        case 'in':
          alert("zoomin");
          break;
      }
   }



});