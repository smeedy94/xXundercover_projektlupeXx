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

//------------------------------------------------------------------------------
APPLIB.Database_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {

   },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   execute_px: function (method_spl, path_spl, parameters_opl) {
      // hier zur Vereinfachung direkte Auswertung
      var data_o = null;
      switch (path_spl) {

      }
      return data_o;
   }
});
// EOF
