//------------------------------------------------------------------------------
// Test Implementierung Übung 2
//------------------------------------------------------------------------------
// Zur Verwendung mit nwjs (siehe nwjs.io)
//------------------------------------------------------------------------------
// file: nwmain.js
// revision: 0 03.06.2016
//------------------------------------------------------------------------------

// Zugriff auf gui ermöglichen
var window_o = nw.Window.get();

if (nw.App.argv.length > 0) {
   if (nw.App.argv[0] == "showdebug") {
      window_o.showDevTools();
      window.alert("Debug"); // damit die devTools vor dem Anwendungsfenster angezeigt werden können
   }
}

// Zur Weitergabe an die Applikation, damit dort jederzeit die Anwendung beendet
// werden kann
// --------------------------------------------------------
function forcedClose_p () {
// --------------------------------------------------------
   window_o.close(true);
}

// --------------------------------------------------------
window.onload = function () {
// --------------------------------------------------------

   loadScripts_px();
   
   if ((APP == undefined) || (APP.main == undefined)) {
      console.error("APP oder APP.main nicht definiert");
      window_o.close(true);
   }

   // Applikation aufrufen
   APP.main(forcedClose_p);

   // Main-Window anzeigen, sobald die Initialisierungen erfolgt sind
   window_o.show();

   window_o.on('close', function() {
      if (window.confirm("Wollen Sie die Anwendung schließen?")) {
         window_o.hide(); // Pretend to be closed already
         window_o.close(true);
      }
   });
}
// EOF
