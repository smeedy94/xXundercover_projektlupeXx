//------------------------------------------------------------------------------
// Laden von lokal gespeicherten js-Script-Dateien
//------------------------------------------------------------------------------
// file: loader.js
// revision: 0 03.06.2016
//------------------------------------------------------------------------------
// depends-on:
//    jquery
//    nwjs(node)/fs, path
//------------------------------------------------------------------------------
// TODO:
//    - Erkennung Ausnahmen
//    - Robustheit
//------------------------------------------------------------------------------

var FS = require('fs');
var PATH = require('path');

/*
Die Organisation der Scripts soll sicherstellen, dass Abhängigkeiten berücksichtigt
werden und die richtige Reihenfolge beim Laden eingehalten wird.

Konventionen:

- Scripts befinden sich in nummerierten Verzeichnissen im Verzeichnis js
- im Verzeichnis 000 befinden sich die scripts, die durch das HTML-Dokument
   direkt geladen werden
    - darin befindet sich auch das loader-Script
    - dieses Verzeichnis wird durch durch das loader-Script nicht ausgewertet
- die Scripts in den anderen nummerierten Verzeichnissen werden in der Reihenfolge der
  Verzeichnisse ausgewertet
- die Reihenfolge der Scripts innerhalb eines Verzeichnisses ist ohne Bedeutung

Nachteil des dynamischen Ladens: Script tauchen, da keine Beziehung zu Dateien besteht,
im
*/

//------------------------------------------------------------------------------
function loadScripts_px () {
//------------------------------------------------------------------------------
   var dir_s = './js/';
   var entries_a = FS.readdirSync(dir_s);
   var files_a;
   var loop_i;
   var iloop_i;
   var path_s;
   var fpath_s;
   var stat_o;
   var code_s;
   entries_a.sort();
   //console.log("entries:"+entries_a);
   for (loop_i = 0; loop_i < entries_a.length; loop_i++) {
      if (entries_a[loop_i] != '000') {
         path_s = PATH.join(dir_s,entries_a[loop_i]);
         stat_o = FS.statSync(path_s);
         if (stat_o.isDirectory()) {
            files_a = FS.readdirSync(path_s);
            for (iloop_i = 0; iloop_i < files_a.length; iloop_i++) {
               fpath_s = PATH.join(path_s, files_a[iloop_i]);
               //console.log("Load: " + fpath_s);
               //code_s = FS.readFileSync(fpath_s, {encoding:'utf8'});
               //$.globalEval(code_s);
               $("head").append('<script type="text/javascript" src="' + fpath_s + '"></script>');
               //$("head").append('<script type="text/javascript">' + code_s + '</script>');

            }
         }
      }
   }

}
// EOF
