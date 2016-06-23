

APP.zoom2_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function (can) {
         this.model = new APP.zoom2_mpde_cl();
         this.model_li = new APP.liscens_mpde_cl();
         this.model_data = new APP.model_data_cl();
         this.akt_o = null;
         this.canvas = can;
         this.scene = can.scenes.create("zoom2", function(){});

         this.items={}



         APP.es_o.subscribe_px(this, 'zoom2');


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
      for(var x in this.items){
        this.scene.remove(this.items[x]);
      }
      this.canvas.scenes.unload("zoom2");
      APP.es_o.publish_px('ui', ['dis']);
      this.destroyEventHandler_p();
   },
   render_px: function (data_opl) {
      $("#zoomStateText").html("Zoom 2");
      
      this.parent_id = data_opl;

      this.loadBox(data_opl);

      
      this.canvas.scenes.load("zoom2");
      this.createEventHandler_p();
   },
   loadBox:function(id){
      var data = this.model.getData(id);

      for (var x in data){
         var box = this.canvas.display.image(data[x]);
         var text = this.canvas.display.text( data[x].text_c );
         
         that3 = this;

         box.dragAndDrop({
         start: this.select,
         end: this.updateBoxPos
         });

         box.addChild(text);
         box['text_o'] = text;
         this.scene.add(box);
         this.items[x] = box;
      }

   },
   select:function(){
      console.log(that3);
         this.fadeTo(1,"short","ease-in-out-cubic", function(){})
         if(that3.akt_o != null && that3.akt_o != this)
            that3.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
         that3.akt_o = this;

         APP.es_o.publish_px('ui', ['en']);
   },

   delete: function(){
      // this.canvas.removeChild(this.akt_o);
      this.scene.remove(this.akt_o);

      this.model.deleteBox(this.akt_o.id_s);

      APP.es_o.publish_px('ui', ['dis']);

      this.akt_o=null;


   },

   addBox: function(data_apl){
      var next_id = APP.db_o.getNextId("data/device.json");
      var name=data_apl[0]['value'];
      var Hersteller = data_apl[1]['value'];
      var Bezeichnung = data_apl[2]['value'];
      var typ = data_apl[3]['value'];
      var pic= null;

      switch(typ){
        case 'pc':
          pic= "/images/RechnerT.png";
          break;
        case 'drucker':
          pic="/images/DruckerT.png";
          break;
        case 'beamer':
          pic="/images/BeamerT.png";
          break;
        case 'laptop':
          pic="/images/LaptopT.png";
          break;

      }
      
      var conf= {
          x: 50, 
          y: 150,
          width:64,
          height:64, 
          image: pic,
          opacity: 0.55,
          parent_id: this.parent_id,
          id_s:next_id,
          name:name,
          Hersteller:Hersteller,
          Bezeichnung:Bezeichnung,
          typ:typ,






          text_c: {
            x: 40,
            y: 85,
            origin: { x: "center", y: "bottom" },
            font: "bold 15px sans-serif",
            text: name,
            fill: "#F0F"
          }
      };
      
      var box = this.canvas.display.image(conf);
      var text = this.canvas.display.text( conf.text_c );


      that3 = this;
      box.dragAndDrop({
         start: this.select,
         end: this.updateBoxPos
      });

      box.addChild(text);
      box['text_o'] = text;
      this.scene.add(box);

      this.items[box.id_s] =box;

      this.model.addBox(box.id_s, conf);
   },
   addLicens:function(data_apl){
      if(this.akt_o == null){
        UIkit.notify("Sie müssen ein Gerät auswählen",{
          status: 'danger',
          timeout: 3500
        });

        UIkit.modal("#add_licens_modal").hide();

        return false;
      }

      var next_id = APP.db_o.getNextId("data/liscens.json");

      var Name = data_apl[0]['value'];
      var Hersteller = data_apl[1]['value'];
      var Lizenznummer = data_apl[2]['value'];


      var conf = {
        Name: Name,
        Hersteller:Hersteller,
        Lizenznummer:Lizenznummer,
        id_s:next_id,
        device_id:this.akt_o.id_s
      };

      this.model_li.addBox(next_id,conf);

        UIkit.notify("Lizenz erfolgreich dem Gerät zugewiesen",{
          status: 'success',
          timeout: 3500
        });

        UIkit.modal("#add_licens_modal").hide();


       APP.es_o.publish_px('licens', null);


   },

   updateBoxPos: function(){
      var id = this.id; 
      that3.model.updateBoxPos(this.id_s, this.x, this.y);
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
      var modal = UIkit.modal("#add_device_modal");
      if(case_s=='add'){
         $("#add_device_modal .uk-modal-header").html('Gerät erstellen');
         $("#add_device_modal #editbtninform").hide();
         $("#add_device_modal #addbtninform").show();
      }else{
         $("#add_device_modal .uk-modal-header").html('Gerät bearbeiten');
         $("#add_device_modal #editbtninform").show();
         $("#add_device_modal #addbtninform").hide();
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
          APP.es_o.publish_px('zoom2', ['add',null]);
          break;
        case 'edit':
            var data = $("#add_device_modal form").serializeArray();
            APP.es_o.publish_px('zoom2', ['edit',data]);
          break;
        case 'delete':
          APP.es_o.publish_px('zoom2', ['delete']);
          break;
        case 'out':
          APP.es_o.publish_px('app_cont', ['out']);
          
          break;
        case 'in':
          this.openModelDetail();
          break;
        case 'close':
          window.close();
          break;
         case 'save':
            var data = $("#add_device_modal form").serializeArray();
            APP.es_o.publish_px('zoom2', ['save',data]);
            break;
         case 'update':
            var data = $("#add_device_modal form").serializeArray();
            APP.es_o.publish_px('zoom2', ['update',data]);
            break;
          case 'save_li':
            var data = $("#add_licens_modal form").serializeArray();
            this.addLicens(data);
            break;
          case 'update_li':
            break;

      }
   },
   openModelDetail:function(){
      if(this.akt_o == null){
        UIkit.notify("Bitte wählen sie ein Gerät aus!");
        return false;
      }

     var data = this.model_data.getData(this.akt_o.id_s);
     console.log(data);
     var markup_s = APP.tm_o.execute_px('device.tpl',data );


      $('#add_device_vie_modal .uk-modal-page').html(markup_s);

      UIkit.modal("#add_device_vie_modal").show();



   },
   createEventHandler_p:function(){
      $("#header button:not(#li_btn)").on('click', this.onClick.bind(this));
      $("#add_device_modal").on('click','button', this.onClick.bind(this));
      $("#add_licens_modal").on('click','button', this.onClick.bind(this));
   },
   destroyEventHandler_p:function(){
      $("#header button:not(#li_btn)").off();
      $("#add_device_modal button").off();
      $("#add_licens_modal button").off();
   }

});




