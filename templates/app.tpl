	<div class="uk-block uk-block-primary uk-block" id="header">
		<div class="uk-grid uk-grid-width-1-3">
			<div class="uk-margin-remove">
				<h3 class="uk-h3 uk-text-contrast" id="zoomStateText">Zoom 0</h3>
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


<!--Projekt-->

<div id="add_projekt_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header"><p>Projekt erstellen</p></div>

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
			     	<button class="uk-button" data-action="save" id='addbtninform'>Erstellen</button>
			     	<button class="uk-button" data-action="update" id='editbtninform'>Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>




<!--Arbeitsgruppe-->

<div id="add_workgrp_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header"><p>Arbeitsgruppe erstellen</p></div>

			<form class="uk-form uk-form-stacked">:

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Frist</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Frist" class="uk-width-1-1" name="Frist">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Status</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Status" class="uk-width-1-1" name="Status">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Stunden</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Stunden" class="uk-width-1-1" name="Stunden">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Personal</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Personal" class="uk-width-1-1" name="Personal">
			        </div>
			    </div>
			     <div class="uk-modal-footer">
			     	<button class="uk-button" data-action="save" id='addbtninform'>Erstellen</button>
			     	<button class="uk-button" data-action="update" id='editbtninform'>Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>



<!--Personal-->

<div id="add_personal_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header"><p>Personal erstellen</p></div>

			<form class="uk-form uk-form-stacked">

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Fachbereich</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Fachbereich" class="uk-width-1-1" name="Fachbereich">
			        </div>
			    </div>

			     <div class="uk-modal-footer">
			     	<button class="uk-button" data-action="save" id='addbtninform'>Erstellen</button>
			     	<button class="uk-button" data-action="update" id='editbtninform'>Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>


<!--Aufgabe-->

<div id="add_aufgabe_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header"><p>Aufgabe erstellen</p></div>

			<form class="uk-form uk-form-stacked">

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Status</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Status" class="uk-width-1-1" name="Status">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Frist</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Frist" class="uk-width-1-1" name="Frist">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Person</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Person" class="uk-width-1-1" name="Person">
			        </div>
			    </div>
			     <div class="uk-modal-footer">
			     	<button class="uk-button" data-action="save" id='addbtninform'>Erstellen</button>
			     	<button class="uk-button" data-action="update" id='editbtninform'>Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>


<!--Person-->

<div id="add_person_modal" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
       
		<div class="uk-modal-header"><p>Person erstellen</p></div>

			<form class="uk-form uk-form-stacked">

			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Name</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Name" class="uk-width-1-1" name="name">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Alter</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Alter" class="uk-width-1-1" name="Alter">
			        </div>
			    </div>
			    <div class="uk-form-row">
			        <label class="uk-form-label" for="">Position</label>
			        <div class="uk-form-controls">
			        	<input type="text" placeholder="Position" class="uk-width-1-1" name="Position">
			        </div>
			    </div>
			     <div class="uk-modal-footer">
			     	<button class="uk-button" data-action="save" id='addbtninform'>Erstellen</button>
			     	<button class="uk-button" data-action="update" id='editbtninform'>Speichern</button>
					<button class="uk-button" data-action="cancel">Abbrechen</button>
			     </div>
			</form>
    </div>
</div>