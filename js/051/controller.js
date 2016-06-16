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
      // this.addBox();
      this.addProjekt();
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
            this.fadeTo(1,"short","ease-in-out-cubic", function(){})
            if(that.akt_o != null)
               that.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
            that.akt_o = this;

   },

   addBox: function(){
      var conf= {
          x: 50, 
          y: 150, 
          width: 50, 
          height: 50, 
          fill: "#000",
          opacity: 0.55,
          name: "test"
      };
      
      var text = this.canvas.display.text({
         x: 25,
         y: 65,
         origin: { x: "center", y: "bottom" },
         font: "bold 15px sans-serif",
         text: "test",
         fill: "#F00"
      });

      var box = this.canvas.display.rectangle(conf);
      box.addChild(text);
      console.log(box);
      that = this;

      box.dragAndDrop({
         start: this.select,
         end: this.updateBox
      });

      this.model.addBox(box.id, conf);
      // this.canvas.addChild(text);
      this.canvas.addChild(box);
   },
   updateBox: function(){
      var id = this.id; 
      that.model.updateBox(this.id, this.x, this.y);
   },
   addProjekt: function(){
      var modal = UIkit.modal("#add_projekt_modal");

      if ( modal.isActive() ) {
             modal.hide();
      } else {
             modal.show();
      }
   }

});