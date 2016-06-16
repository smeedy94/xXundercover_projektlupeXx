APP.zoom0_mpde_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
      this.data_o =APP.db_o.execute_px("GET","data/projekte.json");
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
    APP.db_o.execute_px("POST","data/projekte.json",this.data_o);
  },
  updateBox: function(id, x, y){
    this.data_o[id]['x'] = x;
    this.data_o[id]['y'] = y;
    APP.db_o.execute_px("POST","data/projekte.json",this.data_o);

  },
  getData:function(){
    return this.data_o;
  }



});