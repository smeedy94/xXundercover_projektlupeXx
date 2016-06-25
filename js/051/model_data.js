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
  getDataAufgabe:function(id){
  var data_o ={projekt:null ,work_grp:null , personal:null, person:{}, aufgabe:null};

  var projekt = APP.db_o.execute_px("GET","data/projekte.json");
  var work_grp = APP.db_o.execute_px("GET","data/work_group.json");
  var personal = APP.db_o.execute_px("GET","data/personal.json");
  var person = APP.db_o.execute_px("GET","data/person.json");
  var aufgabe = APP.db_o.execute_px("GET","data/aufgabe.json");

  for (var x in aufgabe){
    if(x == id){
      data_o['aufgabe'] = aufgabe[x];
    }
  }

  for(var x in work_grp){
    if(work_grp[x]['id_s'] == data_o['aufgabe']['parent_id']){
      data_o['work_grp'] = work_grp[x];
    }
  }

  for(var x in personal){
    if(data_o['work_grp']['fill'] == personal[x]['fill']){
      data_o['personal'] = personal[x];
    }
  }

  for (var x in person){
    if(person[x]['parent_id'] == data_o['personal']['id_s']){
      data_o['person'][x] = person[x];
    }
  }

  for(var x in projekt){
    if(projekt[x]['id_s'] == data_o['work_grp']['parent_id']){
      data_o['projekt'] = projekt[x];
    }
  }

  return data_o;
  },
  getDataPerson:function(id){
      var data_o ={projekt:null , work_grp:{} , personal:null, person:null };

      var projekt = APP.db_o.execute_px("GET","data/projekte.json");
      var work_grp = APP.db_o.execute_px("GET","data/work_group.json");
      var personal = APP.db_o.execute_px("GET","data/personal.json");
      var person = APP.db_o.execute_px("GET","data/person.json");
      var aufgabe = APP.db_o.execute_px("GET","data/aufgabe.json");


  for (var x in person){
      if(x == id){
        data_o['person'] = person[x];
      }
    }
  for(var x in personal){
    if(data_o['person']['parent_id'] == x)
      data_o['personal'] = personal[x];
  }
  for(var x in work_grp){
    if(data_o['personal']['fill'] == work_grp[x]['fill']){
      data_o['work_grp'][x] = work_grp[x];
    }
  }
  
   for (var x in data_o['work_grp']){
        for(var y in aufgabe){
            if(data_o['work_grp'][x]['id_s'] == aufgabe[y]['parent_id'])
              data_o['work_grp'][x]['aufgaben_d'][y] = aufgabe[y];
        }
    }

    for (var x in projekt){
      if(data_o['personal']['parent_id'] == x)
        data_o['projekt'] = projekt[x];
    }


    return data_o;
  }

});


