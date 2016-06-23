

APP.licens_cl = Class.create({
//------------------------------------------------------------------------------
   initialize: function () {
         this.model = new APP.liscens_mpde_cl();
         
         APP.es_o.subscribe_px(this, 'licens');



    },
   notify_px: function (self_opl, message_spl, data_apl) {
      this.render_px();
   },
   canClose_px: function () {
      return true;
   },
   close_px: function () {
      this.destroyEventHandler_p();
   },
   render_px: function (data_opl) {
      

      this.licens = this.model.getData();

      console.log(this.licens);


     var markup_s = APP.tm_o.execute_px('licens.tpl', this.licens);

     $('#add_licens_vie_modal .uk-modal-page').html(markup_s);


      
      this.createEventHandler_p();
   },
   loadBox:function(id){


   },
   select:function(){
      
   },

   delete: function(id){

    that99.model.deleteBox(id);

    that99.render_px(null);

   },

   addBox: function(data_apl){

   },
   addLicens:function(data_apl){
    
   },

   updateBoxPos: function(){
  
   },
   updateBox:function(conf){
   

   },
 
   onClick: function(event_opl){
     var id = $(event_opl.target.parentNode).attr('id');
      event_opl.preventDefault();

      that99=this;
      UIkit.modal.confirm('Wirklich löschen?', function(){
        that99.delete(id);
      });



      
   },
   createEventHandler_p:function(){
    $("#add_licens_vie_modal").on('click','tr', this.onClick.bind(this));
    
   },
   destroyEventHandler_p:function(){

   }

});




