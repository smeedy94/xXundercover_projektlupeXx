APP.zoom1_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function (can) {
         this.model = new APP.zoom1_mpde_cl();
         this.akt_o = null;
         this.canvas = can;
         this.scene = can.scenes.create("zoom1", function(){});

         //alle Obejekte die angelegt werden, werdne hier referenziert
         this.items={};
         this.items2={};




         APP.es_o.subscribe_px(this, 'zoom1');


    },
   notify_px: function (self_opl, message_spl, data_apl) {
     
      switch(data_apl[0]){
         case 'add':
            this.openModel('add');
            break;
         case 'save':
            this.addBox2(data_apl[1])
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
      console.log(this.scene);
      //scene leeren
      for(var x in this.items){
        console.log(x);
        this.scene.remove(this.items[x]);
      }
       for(var x in this.items){
        console.log(x);
        this.scene.remove(this.items2[x]);
      }
      this.scene.remove();
      this.canvas.scenes.unload("zoom1");
      this.destroyEventHandler_p();

   },
   render_px: function (data_opl) {
      this.parent_id=data_opl;

      this.loadTimeLine();
      this.loadBox(data_opl);
      this.loadBox2(data_opl);

      $("#zoomStateText").html("Zoom 1");
      this.canvas.scenes.load("zoom1");
      this.createEventHandler_p();
   },
   loadBox:function(id){
      var data = this.model.getData(id);

      for (var x in data){
         var box = this.canvas.display.rectangle(data[x]);
         var text = this.canvas.display.text( data[x].text_c );
         
         that2 = this;

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
   loadBox2:function(id){
      var data = this.model.getData2(id);

      for (var x in data){
         var cir = this.canvas.display.ellipse(data[x]);
         var text = this.canvas.display.text( data[x].text_c );
         
         that3 = this;

         cir.bind("click tap", this.selectCir);


         cir.addChild(text);
         cir['text_o'] = text;
         this.scene.add(cir);
         this.items2[x] = cir;
      }

   },
   loadTimeLine:function(){
      for (var x = 200; x < 1200; x+=200 ){
        var line =  this.canvas.display.line({
            start: { x: x, y: 0 },
            end: { x: x, y: 640 },
            stroke: "10px #000",
            cap: "round"
        });
        this.scene.add(line);
      }
        var line =  this.canvas.display.line({
            start: { x: 0, y: 640 },
            end: { x: 1240, y: 640 },
            stroke: "13px #000",
            cap: "round"
        });
        this.scene.add(line);

   },
   select:function(){
         this.fadeTo(1,"short","ease-in-out-cubic", function(){})
         if(that2.akt_o != null && that2.akt_o != this)
            that2.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
         that2.akt_o = this;

         APP.es_o.publish_px('ui', ['en']);
   },
   selectCir:function(){
        this.fadeTo(1,"short","ease-in-out-cubic", function(){})
         if(that3.akt_o != null && that3.akt_o != this)
            that3.akt_o.fadeTo(0.55,"short","ease-in-out-cubic", function(){})
         that3.akt_o = this;

         APP.es_o.publish_px('ui', ['en']);
   },
   isbox:function(){
      return this.akt_o.type != "ellipse" 
   },

   delete: function(){
      this.scene.remove(this.akt_o);

      this.model.deleteBox(this.akt_o.id_s);

      APP.es_o.publish_px('ui', ['dis']);

      this.akt_o=null;


   },

   addBox: function(data_apl){
      if (this.akt_o == null ||  this.isbox()){
        UIkit.notify('Sie Müssen ein Personal auswählen',{
         status  : 'danger',
         timeout : 3500,
        });

        UIkit.modal("#add_workgrp_modal").hide();

        return false;
      }
      var next_id = APP.db_o.getNextId("data/work_group.json");
      var name=data_apl[0]['value'];
      var Frist=data_apl[1]['value'];
      var Status= data_apl[2]['value'];
      var Stunden= data_apl[3]['value'];
      var color = this.akt_o['fill'];
      var cir_id = this.akt_o['id_s'];

      
      var conf= {
          x: 50, 
          y: 150, 
          width: 50, 
          height: 50, 
          fill: color,
          opacity: 0.40,
          id_s:next_id,
          cir_id:cir_id,
          parent_id:this.parent_id,
          name:name,
          Frist:Frist,
          Status:Status,
          Stunden:Stunden,
          aufgaben_d:{},
          

          text_c: {
            x: 25,
            y: 65,
            origin: { x: "center", y: "bottom" },
            font: "bold 15px sans-serif",
            text: name,
            fill: "#F00"
          }
      };
      
      var box = this.canvas.display.rectangle(conf);
      var text = this.canvas.display.text( conf.text_c );


      that2 = this;
      box.dragAndDrop({
         start: this.select,
         end: this.updateBoxPos
      });

      box.addChild(text);
      box['text_o'] = text;
      this.scene.add(box);

      this.items[box.id_s] = box;

      this.model.addBox(box.id_s, conf);
   },
   addBox2: function(data_apl){

      var next_id = APP.db_o.getNextId("data/personal.json");
      var name=data_apl[0]['value'];
      var fachbereich=data_apl[1]['value'];
      var color= data_apl[2]['value'];
      var x = 50;
      for (var item in this.items2)
        x += 100;
      
      var conf= {
          x: x, 
          y: 730, 
          radius:30,
          fill: color,
          opacity: 0.50,
          id_s:next_id,
          parent_id:this.parent_id,
          name:name,
          fachbereich:fachbereich,
          text_c: {
            x: 0,
            y: 50,
            origin: { x: "center", y: "bottom" },
            font: "bold 15px sans-serif",
            text: name,
            fill: "#F00"
          }
      };
      
      var cir = this.canvas.display.ellipse(conf);
      var text = this.canvas.display.text( conf.text_c );


      that3 = this;
      cir.bind("click tap", this.selectCir);

      cir.addChild(text);
      cir['text_o'] = text;
      this.scene.add(cir);

      this.items2[cir.id_s] = cir;

      this.model.addBox2(cir.id_s, conf);
   },
   updateBoxPos: function(){
      var id = this.id; 
      that2.model.updateBoxPos(this.id_s, this.x, this.y);
   },
   updateBox:function(conf){
      // console.log(conf);
      // alert(this.akt_o.id_s);

      this.model.updateBox(this.akt_o.id_s, conf);

      this.akt_o.text_o.text = conf[0]['value'];
      this.canvas.redraw();

   },
   openModel: function(case_s){
      var modal = UIkit.modal("#add_personal_modal");
      if(case_s=='add'){
         $("#add_personal_modal .uk-modal-header").html('Personal erstellen');
         $("#add_personal_modal #editbtninform").hide();
         $("#add_personal_modal #addbtninform").show();
      }else{
         $("#add_personal_modal .uk-modal-header").html('Personal bearbeiten');
         $("#add_personal_modal #editbtninform").show();
         $("#add_personal_modal #addbtninform").hide();
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
          APP.es_o.publish_px('zoom1', ['add',null]);
          break;
        case 'edit':
            var data = $("#add_personal_modal form").serializeArray();
            APP.es_o.publish_px('zoom1', ['edit',data]);
          break;
        case 'delete':
          APP.es_o.publish_px('zoom1', ['delete']);
          break;
        case 'out':
          APP.es_o.publish_px('app_cont', ['out']);
          
          break;
        case 'in':
          if (this.isbox())
              APP.es_o.publish_px('zoom2', ['aufgabe']);
          else
              APP.es_o.publish_px('zoom2', ['person']);

          APP.es_o.publish_px('app_cont', ['in']);
          break;

        case 'close':
          window.close();
          break;
         case 'save':
            var data = $("#add_personal_modal form").serializeArray();
            APP.es_o.publish_px('zoom1', ['save',data]);
            break;
         case 'update':
            var data = $("#add_personal_modal form").serializeArray();
            APP.es_o.publish_px('zoom1', ['update',data]);
            break;
      }
   },
   onClick2:function(event_opl){
    var action = $(event_opl.target).attr("data-action");
    event_opl.preventDefault();
    switch(action){
      case 'save':
        var data = $("#add_workgrp_modal form").serializeArray();
        this.addBox(data);
        break;
    }
   },
   createEventHandler_p:function(){
      $("#header button").on('click', this.onClick.bind(this));
      $("#add_personal_modal").on('click','button', this.onClick.bind(this));
      $("#add_workgrp_modal").on('click','button', this.onClick2.bind(this));

   },
   destroyEventHandler_p:function(){
      $("#header button").off();
      $("#add_personal_modal").off(this.onclick);
      $("#add_workgrp_modal").off(this.onclick2);
   }

});
