APP.zoom1_mpde_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
      this.data_o =APP.db_o.execute_px("GET","data/personal.json");
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
    APP.db_o.execute_px("POST","data/personal.json",this.data_o);
  },
  updateBoxPos: function(id, x, y){
    this.data_o[id]['x'] = x;
    this.data_o[id]['y'] = y;
    APP.db_o.execute_px("POST","data/personal.json",this.data_o);

  },
  updateBox:function(id, conf){
    this.data_o[id]['name'] = conf[0]['value'];
    this.data_o[id]['auftraggeber'] = conf[1]['value'];
    this.data_o[id]['frist'] = conf[2]['value'];
    this.data_o[id]['kosten'] = conf[3]['value'];
    this.data_o[id]['text_c']['text'] = conf[0]['value'];

    APP.db_o.execute_px("POST","data/personal.json",this.data_o);

  },
  deleteBox:function(id){
    delete this.data_o[id];
    APP.db_o.execute_px("POST","data/personal.json",this.data_o);
  },
  getData:function(){
    return this.data_o;
  }



});