APP.zoom1_mpde_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
      this.data_o =APP.db_o.execute_px("GET","data/work_group.json");
      this.data_o2 =APP.db_o.execute_px("GET","data/personal.json");
      if (this.data_o == null)
        this.data_o = {};
      if (this.data_o2 == null)
        this.data_o2 = {};
    },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
   },
   render_px: function (data_opl) {
     
   },
   addBox: function(id,conf){
    this.data_o[id] =conf;
    APP.db_o.execute_px("POST","data/work_group.json",this.data_o);
  },
   addBox2: function(id,conf){
    this.data_o2[id] =conf;
    APP.db_o.execute_px("POST","data/personal.json",this.data_o2);
  },
  updateBoxPos: function(id, x, y){
    this.data_o[id]['x'] = x;
    this.data_o[id]['y'] = y;
    APP.db_o.execute_px("POST","data/work_group.json",this.data_o);

  },
  updateBox:function(id, conf){
    this.data_o[id]['name'] = conf[0]['value'];
    this.data_o[id]['fachbereich'] = conf[1]['value'];

    this.data_o[id]['text_c']['text'] = conf[0]['value'];

    

    APP.db_o.execute_px("POST","data/personal.json",this.data_o);

  },
  deleteBox:function(id){
    delete this.data_o[id];
    APP.db_o.execute_px("POST","data/personal.json",this.data_o);
  },
  getData:function(id){
    var sel={};

    for (var x in this.data_o){
      if(this.data_o[x]['parent_id'] == id){
        sel[x] = this.data_o[x];
      }
    }
    console.log(sel);

    return sel;
  },

  getData2:function(id){
    var sel={};

    for (var x in this.data_o2){
      if(this.data_o2[x]['parent_id'] == id){
        sel[x] = this.data_o2[x];
      }
    }
    console.log(sel);


    return sel;
  }



});