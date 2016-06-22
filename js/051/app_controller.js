APP.appController_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {

   		this.view_o = new APP.appUI_cl();

   		this.zoomState = 0;
   		this.zoom_o = null

         this.canvas = null;

         APP.es_o.subscribe_px(this, 'app_cont');


   },
   notify_px: function (self_opl, message_spl, data_apl) {
      console.log(data_apl);
      switch(data_apl[0]){
         case 'in':
            this.succ();
            break;
         case 'out':
            this.prev();
            break;
      }
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
   },
   createEventHandler_p: function () {
    /* Ereignisbehandlung einrichten */
   this.zoom_o[this.zoomState].createEventHandler_p();

   },
   destroyEventHandler_p:function(){
   this.zoom_o[this.zoomState].destroyEventHandler_p();

   },
   render_px: function (data_opl) {
     this.canvas = oCanvas.create({
            canvas: "#canvas",
            background: "#FFF",
            fps: 60
      });
      this.zoom_o = [new APP.zoom0_cl(this.canvas),new APP.zoom1_cl(this.canvas),new APP.zoom2_cl(this.canvas) ];




   	this.view_o.render_px();
		this.zoom_o[this.zoomState].render_px();
      // this.createEventHandler_p();

   },
   succ: function(){
         if(this.zoomState<2)
         {
         var id = this.zoom_o[this.zoomState].akt_o.id_s;
         this.zoom_o[this.zoomState].close_px();
   		this.zoomState++;
         this.zoom_o[this.zoomState].render_px(id);
         }

   },
   prev: function(){
         if(this.zoomState>0)
         {
         this.zoom_o[this.zoomState].close_px();
   		this.zoomState--;
         this.zoom_o[this.zoomState].render_px();
        }
 }

});