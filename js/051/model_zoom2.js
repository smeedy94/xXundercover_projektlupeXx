APP.zoom2_mpde_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
      this.data_o =APP.db_o.execute_px("GET","data/device.json");
      if (this.data_o == null)
        this.data_o = {};
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
    APP.db_o.execute_px("POST","data/device.json",this.data_o);
  },
  updateBoxPos: function(id, x, y){
    this.data_o[id]['x'] = x;
    this.data_o[id]['y'] = y;
    APP.db_o.execute_px("POST","data/device.json",this.data_o);

  },
  updateBox:function(id, conf){
    this.data_o[id]['name'] = conf[0]['value'];
    this.data_o[id]['text_c']['text'] = conf[0]['value'];

    APP.db_o.execute_px("POST","data/device.json",this.data_o);

  },
  deleteBox:function(id){
    delete this.data_o[id];
    APP.db_o.execute_px("POST","data/device.json",this.data_o);
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
  }



});


