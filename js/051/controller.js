APP.appController_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {

   		this.view_o = new APP.appUI_cl();

   		this.zoomState = 0;
   		this.zoom_o = new APP.zoom0_cl();


   },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
   },
   render_px: function (data_opl) {
   		this.view_o.render_px();
   		this.zoom_o.render_px();
   },
   succ: function(){
   		this.zoomState++;
   },
   prev: function(){
   		this.zoomState--;
   }


   
});

APP.zoom0_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
 
    },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
   },
   render_px: function (data_opl) {
     	this.canvas = oCanvas.create({
		canvas: "#canvas",
		background: "#A2B5CD",
		fps: 60
		});		   
   }


});