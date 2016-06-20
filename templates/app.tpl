	<div class="uk-block uk-block-primary uk-block" id="header">
		<div class="uk-grid uk-grid-width-1-3">
			<div class="uk-button-group uk-margin-remove">
				
			</div>
			
			<div class="uk-button-group uk-align-center uk-margin-remove">
				<button class="material-icons" data-action="out">zoom_out</button>
				<button class="material-icons" data-action="in">zoom_in</button>
			</div>


			<div class="uk-button-group uk-margin-remove">
				<button class="uk-button uk-button-success" data-action="add">Hinzufügen</button>
				<button class="uk-button uk-button-success" data-action="edit">Bearbeiten</button>
				<button class="uk-button uk-button-danger" data-action="delete">Löschen</button>
				<button class="uk-button uk-button-danger material-icons" data-action="close">close</button>
			</div>
		</div>
	</div>

	<div>
		<canvas id="canvas" width="1200px" height="840px"></canvas>
	</div>




<div id="add_projekt_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header">Projekt erstellen</div>

			<form class="uk-form uk-form-stacked">

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Auftraggeber</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Auftraggeber" class="uk-width-1-1" name="Auftraggeber">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Frist</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Frist" class="uk-width-1-1" name="Frist">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Aufgabengruppe</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Aufgabengruppe" class="uk-width-1-1" name="Aufgabengruppe">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Personal</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Personal" class="uk-width-1-1" name="Personal">
			        </div>
			    </div>
				<div class="uk-form-row">
			        <label class="uk-form-label" for="">Kosten</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Kosten" class="uk-width-1-1" name="Kosten">
			        </div>
			    </div>
			     <div class="uk-modal-footer">
			     	<button class="uk-button" data-action="save">Erstellen</button>
			     	<button class="uk-button uk-hidden" data-action="update">Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>


<div id="edit_projekt_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header">Projekt bearbeiten</div>

			<form class="uk-form uk-form-stacked">

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Auftraggeber</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Auftraggeber" class="uk-width-1-1" name="Auftraggeber">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Frist</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Frist" class="uk-width-1-1" name="Frist">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Aufgabengruppe</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Aufgabengruppe" class="uk-width-1-1" name="Aufgabengruppe">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Personal</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Personal" class="uk-width-1-1" name="Personal">
			        </div>
			    </div>
				<div class="uk-form-row">
			        <label class="uk-form-label" for="">Kosten</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Kosten" class="uk-width-1-1" name="Kosten">
			        </div>
			    </div>
			     <div class="uk-modal-footer">
			     	<button class="uk-button uk-hidden" data-action="save">Erstellen</button>
			     	<button class="uk-button" data-action="update">Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>


