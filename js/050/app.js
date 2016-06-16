//------------------------------------------------------------------------------
// Test Implementierung Übung 2
//------------------------------------------------------------------------------
// file: app.js
// revision: 0 03.06.2016
//------------------------------------------------------------------------------
// Variante1: einfache Ablaufsteuerung
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Namensraum einrichten, um Verwendung von Bezeichnern zu vereinfachen
// und Namenskonflikte zu vermeiden
//------------------------------------------------------------------------------
var APP = {};
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
APP.main = function (appClose_ppl) {
//------------------------------------------------------------------------------
   // Startpunkt der Anwendung, notwendige Objekte einrichten
   // appClose_ppl: externe Funktion zum Schließen der gesamten Anwendung
   //               (nur bei Desktop-Variante mit nwjs z.B. sinnvoll)

   APP.es_o = new APPLIB.EventService_cl();

   // Konfigurationsdaten verwalten
   APP.cm_o = new APPLIB.Config_cl();
   APP.uiConfig_o = APP.cm_o.getUIConfig_px(); // ToDo: bessere Aufteilung, Robustheit ...

   APP.tm_o = new APPLIB.TemplateManager_cl();

   // Schnittstelle zur Datenbasis
   APP.db_o = new APPLIB.Database_cl();


   // Steuerung des Ablaufs im Applikations-Objekt
   APP.app_o = new APP.Application_cl(appClose_ppl);

}

//------------------------------------------------------------------------------
APP.Application_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function (appClose_ppl) {

      this.appClose_p = appClose_ppl;

      this.instances_o = {};
      this.actContent_o = null;
      this.actTemplate_s = '';

      APP.es_o.subscribe_px(this, 'app.action');
      APP.es_o.publish_px('app.action', ['app_cont']);

      // Applikations-Objekt verwaltet die UI-Ereignisse aus dem NavBar und dem SideBar direkt
      // da der Bezug das body-Element ist, kann die Einrichtung bereits jetzt erfolgen
      this.createEventHandler_p();
   },
   notify_px: function (self_opl, message_spl, data_apl) {
debugger
      switch (message_spl) {
      case 'app.action':
         console.log(data_apl);
         if (data_apl[0] == 'quit') {
            // direkt vollständig beenden
            if (self_opl.appClose_p != null) {
               self_opl.appClose_p();
            }
         } else {
            if (data_apl[0] in APP.uiConfig_o) {
               self_opl.doAction_p(data_apl);
            }
         }
         break;
      }
   },
   render_px: function (appTemplate_spl) {
      // muss ein anderes appTemplate ausgeführt werden?
      if (this.actTemplate_s != appTemplate_spl) {
         this.actTemplate_s = appTemplate_spl;
         var markup_s = APP.tm_o.execute_px(appTemplate_spl, null);
         $('body').html(markup_s);
      }
   },
   createEventHandler_p: function () {
      /* Ereignisbehandlung einrichten */
      // $('body').on('click', this.onClick_p.bind(this));
   },
   onClick_p: function (event_opl) {
      // Zur Entkopplung (= kein direkter Aufruf) UI-Event als Nachricht mit dem Event-Service weitergeben
      var action_s = $(event_opl.target).attr("data-action");
      APP.es_o.publish_px('app.action', [action_s]);
      event_opl.preventDefault();
      return false;
   },
   doAction_p: function (action_spl) {
      var instanceName_s = APP.uiConfig_o[action_spl].instanceName;
      var class_s = APP.uiConfig_o[action_spl].class;
      var appTemplate_s = APP.uiConfig_o[action_spl].appTemplate;

      var instance_o = null;
      // Instanz erzeugen oder vorhandene verwenden
      if (instanceName_s in this.instances_o) {
         instance_o = this.instances_o[instanceName_s];
      } else {
         if (class_s in APP) {
            this.instances_o[instanceName_s] = new APP[class_s]();
            instance_o = this.instances_o[instanceName_s];
         }
      }
      if (instance_o != null) {
         // soll ein anderer Inhalt präsentiert / bearbeitet werden?
         if (this.actContent_o == null) {
            this.actContent_o = instance_o;
            this.render_px(appTemplate_s);
            this.actContent_o.render_px();
         } else {
            if (this.actContent_o.canClose_px()) {
               this.actContent_o.close_px();
               this.actContent_o = instance_o;
               this.render_px(appTemplate_s);
               this.actContent_o.render_px();
            }
         }
      }
   }
});
// EOF
