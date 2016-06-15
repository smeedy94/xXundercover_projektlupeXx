//------------------------------------------------------------------------------
// Verwaltung von Konfigurationen
//------------------------------------------------------------------------------
// file: config.js
// revision: 0 03.06.2016
// depends-on:
//    inheritance
//    nwjs/node: fs
//------------------------------------------------------------------------------

var FS = require ('fs');

//------------------------------------------------------------------------------
APPLIB.Config_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {

   },
   notify_px: function (self_opl, message_spl, data_apl) {
   },
   getUIConfig_px: function () {
      // aus dem Verzeichnis "/data" uiconfig.json lesen und als Ergebnis liefern
      var uiConfig_o = null;
      var path_s = './config/uiconfig.json';
      // TODO: Fehlerbehandlung ...
      var content_s = FS.readFileSync(path_s, {encoding:'utf8'});
      uiConfig_o = JSON.parse(content_s);
      return uiConfig_o;
   }
});
// EOF
