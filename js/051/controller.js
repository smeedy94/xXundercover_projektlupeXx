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
         this.model = new APP.zoom0_mpde_cl();
         this.akt_o = null;
         // this.list = {};

         APP.es_o.subscribe_px(this, 'zoom0');


    },
   notify_px: function (self_opl, message_spl, data_apl) {
      this.addBox();
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
      
      this.loadBox();


      
   },
   loadBox:function(){
      var data = this.model.getData();

      for (var x in data){
         var box = this.canvas.display.rectangle(data[x]);

         that = this;
         box.dragAndDrop({
         start: this.select,
         end: this.updateBox
         });

         this.canvas.addChild(box);


      }

   },
   select:function(){

   },
   addBox: function(){
      var conf= {
          x: 50, 
          y: 150, 
          width: 50, 
          height: 50, 
          fill: "#000",
      };
      var box = this.canvas.display.rectangle(conf);
      
      that = this;

      box.dragAndDrop({
         start: this.select,
         end: this.updateBox
      });

      this.model.addBox(box.id, conf);

      this.canvas.addChild(box);
   },
   updateBox: function(){
      var id = this.id; 
      that.model.updateBox(this.id, this.x, this.y);
   }


});