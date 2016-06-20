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
   createEventHandler_p: function () {
    /* Ereignisbehandlung einrichten */
   $("#header button").on('click', this.onClick_0.bind(this));
   $("#add_projekt_modal").on('click','button', this.onClick_0.bind(this));
   $("#edit_projekt_modal").on('click','button', this.onClick_0.bind(this));

   },
   render_px: function (data_opl) {
   		this.view_o.render_px();
   		this.zoom_o.render_px();
      this.createEventHandler_p();

   },
   succ: function(){
   		this.zoomState++;
   },
   prev: function(){
   		this.zoomState--;
   },
   onClick_0: function(event_opl){
         var action = $(event_opl.target).attr("data-action");
            event_opl.preventDefault();

      switch(action){
        case 'add':
          APP.es_o.publish_px('zoom0', ['add',null]);
          break;
        case 'edit':
            var data = $("#edit_projekt_modal form").serializeArray();
            APP.es_o.publish_px('zoom0', ['edit',data]);
          break;
        case 'delete':
          APP.es_o.publish_px('zoom0', ['delete']);
          break;
        case 'out':
          alert("zoomout");
          break;
        case 'in':
          alert("zoomin");
          break;
        case 'close':
          window.close();
          break;
         case 'save':
            var data = $("#add_projekt_modal form").serializeArray();
            APP.es_o.publish_px('zoom0', ['save',data]);

            break;
      }
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
     
      switch(data_apl[0]){
         case 'add':
            this.addProjekt();
            break;
         case 'save':
            this.addBox(data_apl[1])
            break;
         case 'delete':
            this.delete();
            break;
         case 'edit':
            this.editProjekt();
            break;
      }

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
         var text = this.canvas.display.text( data[x].text_o );
         
         that = this;

         box.dragAndDrop({
         start: this.select,
         end: this.updateBox
         });

         box.addChild(text);
         this.canvas.addChild(box);
      }
   },
   select:function(){
         this.fadeTo(1,"short","ease-in-out-cubic", function(){})
         if(that.akt_o != null && that.akt_o != this)
            that.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
         that.akt_o = this;

         APP.es_o.publish_px('ui', ['en']);
   },

   delete: function(){
      console.log(this.akt_o);
      this.canvas.removeChild(this.akt_o);

      this.model.deleteBox(this.akt_o.id_s);

      APP.es_o.publish_px('ui', ['dis']);

      this.akt_o=null;

   },

   addBox: function(data_apl){
      var next_id = APP.db_o.getNextId("data/projekte.json");
      var name=data_apl[0]['value'];
      
      var conf= {
          x: 50, 
          y: 150, 
          width: 50, 
          height: 50, 
          fill: "#000",
          opacity: 0.55,
          id_s:next_id,
          text_o: {
            x: 25,
            y: 65,
            origin: { x: "center", y: "bottom" },
            font: "bold 15px sans-serif",
            text: name,
            fill: "#F00"
          }
      };
      
      var box = this.canvas.display.rectangle(conf);
      var text = this.canvas.display.text( conf.text_o );


      that = this;
      box.dragAndDrop({
         start: this.select,
         end: this.updateBox
      });

      box.addChild(text);
      this.canvas.addChild(box);

      this.model.addBox(box.id_s, conf);
   },
   updateBox: function(){
      var id = this.id; 
      that.model.updateBox(this.id_s, this.x, this.y);
   },
   addProjekt: function(){
      var modal = UIkit.modal("#add_projekt_modal");

      if ( modal.isActive() ) {
             modal.hide();
      } else {
             modal.show();
      }
   },
   editProjekt: function(){
      var modal = UIkit.modal("#edit_projekt_modal");

      if ( modal.isActive() ) {
             modal.hide();
      } else {
             modal.show();
      }
      
   }

});