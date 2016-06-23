APP.model_data_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {

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
  getData:function(id){
  var data_o ={device:null ,li:{}, device_group:null , room:null};

  var device= APP.db_o.execute_px("GET","data/device.json");
  var li= APP.db_o.execute_px("GET","data/liscens.json");
  var device_group= APP.db_o.execute_px("GET","data/work_group.json");
  var room= APP.db_o.execute_px("GET","data/room.json");

  for (var x in device){
    if(x == id){
      data_o['device'] = device[x];
    }
  }

  for (var x in li){
    if(li[x]['device_id'] == id){
      data_o['li'][x] = li[x];
    }
  }

  for(var x in device_group){
    if(x == data_o['device']['parent_id']){
      data_o['device_group'] = device_group[x];
    }
  }

  for(var x in room){
    if(x == data_o['device_group']['parent_id']){
      data_o['room'] = room[x];
    }
  }

  return data_o;
  }



});


