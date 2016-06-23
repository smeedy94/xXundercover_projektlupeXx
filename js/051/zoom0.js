

APP.zoom0_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function (can) {
         this.model = new APP.zoom0_mpde_cl();
         this.akt_o = null;
         this.canvas = can;
         this.scene = can.scenes.create("zoom0", function(){});

         this.loadBox();


         APP.es_o.subscribe_px(this, 'zoom0');


    },
   notify_px: function (self_opl, message_spl, data_apl) {
     
      switch(data_apl[0]){
         case 'add':
            this.openModel('add');
            break;
         case 'save':
            this.addBox(data_apl[1])
            break;
         case 'delete':
            this.delete();
            break;
         case 'edit':
            this.openModel('edit');
            break;
         case 'update':
            this.updateBox(data_apl[1]);
            break; 

      }

   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
      this.canvas.scenes.unload("zoom0");
      APP.es_o.publish_px('ui', ['dis']);
      this.destroyEventHandler_p();
   },
   render_px: function (data_opl) {
      $("#zoomStateText").html("Zoom 0");
      
      
      this.canvas.scenes.load("zoom0");
      this.createEventHandler_p();
   },
   loadBox:function(){
      var data = this.model.getData();

      for (var x in data){
         var box = this.canvas.display.image(data[x]);
         var text = this.canvas.display.text( data[x].text_c );
         
         that = this;

         box.dragAndDrop({
         start: this.select,
         end: this.updateBoxPos
         });

         box.addChild(text);
         box['text_o'] = text;
         this.scene.add(box);
      }

   },
   select:function(){
      console.log(that);
         this.fadeTo(1,"short","ease-in-out-cubic", function(){})
         if(that.akt_o != null && that.akt_o != this)
            that.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
         that.akt_o = this;

         APP.es_o.publish_px('ui', ['en']);
   },

   delete: function(){
      this.canvas.removeChild(this.akt_o);

      this.model.deleteBox(this.akt_o.id_s);

      APP.es_o.publish_px('ui', ['dis']);

      this.akt_o=null;


   },

   addBox: function(data_apl){
      var next_id = APP.db_o.getNextId("data/room.json");
      var name=data_apl[0]['value'];
      var Lage=data_apl[1]['value'];
      var Nummer=data_apl[2]['value'];

      
      var conf= {
          x: 50, 
          y: 150, 
          image: "/images/room.png",
          opacity: 0.55,
          id_s:next_id,
          name:name,
          Lage:Lage,
          Nummer:Nummer,

          text_c: {
            x: 25,
            y: 65,
            origin: { x: "center", y: "bottom" },
            font: "bold 15px sans-serif",
            text: name,
            fill: "#F0F"
          }
      };
      
      var box = this.canvas.display.image(conf);
      var text = this.canvas.display.text( conf.text_c );


      that = this;
      box.dragAndDrop({
         start: this.select,
         end: this.updateBoxPos
      });

      box.addChild(text);
      box['text_o'] = text;
      this.scene.add(box);

      this.model.addBox(box.id_s, conf);
   },
   updateBoxPos: function(){
      var id = this.id; 
      that.model.updateBoxPos(this.id_s, this.x, this.y);
   },
   updateBox:function(conf){
      // console.log(conf);
      // alert(this.akt_o.id_s);

      this.model.updateBox(this.akt_o.id_s, conf);

      this.akt_o.text_o.text = conf[0]['value'];
      console.log(this.akt_o);
      this.canvas.redraw();

   },
   openModel: function(case_s){
      var modal = UIkit.modal("#add_room_modal");
      if(case_s=='add'){
         $("#add_room_modal .uk-modal-header").html('Raum erstellen');
         $("#editbtninform").hide();
         $("#addbtninform").show();
      }else{
         $("#add_room_modal .uk-modal-header").html('Raum bearbeiten');
         $("#editbtninform").show();
         $("#addbtninform").hide();
      }
      if ( modal.isActive() ) {
             modal.hide();
      } else {
             modal.show();
      }
    },
   onClick: function(event_opl){
         var action = $(event_opl.target).attr("data-action");
            event_opl.preventDefault();

      switch(action){
        case 'add':
          APP.es_o.publish_px('zoom0', ['add',null]);
          break;
        case 'edit':
            var data = $("#add_room_modal form").serializeArray();
            APP.es_o.publish_px('zoom0', ['edit',data]);
          break;
        case 'delete':
          APP.es_o.publish_px('zoom0', ['delete']);
          break;
        case 'out':
          APP.es_o.publish_px('app_cont', ['out']);
          
          break;
        case 'in':
          APP.es_o.publish_px('app_cont', ['in']);
          break;
        case 'close':
          window.close();
          break;
         case 'save':
            var data = $("#add_room_modal form").serializeArray();
            APP.es_o.publish_px('zoom0', ['save',data]);
            break;
         case 'update':
            var data = $("#add_room_modal form").serializeArray();
            APP.es_o.publish_px('zoom0', ['update',data]);
            break;
      }
   },
   createEventHandler_p:function(){
      $("#header button:not(#li_btn)").on('click', this.onClick.bind(this));
      $("#add_room_modal").on('click','button', this.onClick.bind(this));
   },
   destroyEventHandler_p:function(){
      $("#header button:not(#li_btn)").off();
      $("#add_room_modal").off();
   }

});




