//------------------------------------------------------------------------------
// Datenbasis - Interface
//------------------------------------------------------------------------------
// file: db.js
// revision: 0 03.06.2016
// depends-on:
//    inheritance
//    lib
//------------------------------------------------------------------------------

var FS = require ('fs');
var JS = require('jsonfile');
JS.spaces=4;

//------------------------------------------------------------------------------
APPLIB.Database_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
      // var x=this.execute_px("POST","data/test.json",y);
      // var x=this.execute_px("GET","data/test.json",null);
   },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   execute_px: function (method_spl, path_spl, parameters_opl) {
      // hier zur Vereinfachung direkte Auswertung
      var data_o = null;
      try{
         FS.accessSync(path_spl);
         
         switch(method_spl){
            case 'GET':
                  data_o = JS.readFileSync(path_spl);
                  break;
            case 'POST':
                  JS.writeFileSync(path_spl, parameters_opl);
                  break;
         }
      }
      catch(e){
         // console.error("Die Datei ist nicht vorhanden!");
         console.error(e);
      }
      return data_o;
   }
});
// EOF
