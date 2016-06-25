<h3>Projekt</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['projekt']['name']#</li>
	<li>Auftraggeber: #context['projekt']['auftraggeber']#</li>
	<li>Kosten: #context['projekt']['kosten']#</li>
	<li>Frist: #context['projekt']['frist']#</li>
</ul>

<h3>Aufgabengruppe</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['work_grp']['name']#</li>
	<li>Status: #context['work_grp']['Status']#</li>
	<li>Frist: #context['work_grp']['Frist']#</li>
	<li>Stunden: #context['work_grp']['Stunden']#</li>
</ul>


<h3>Aufgabe</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['aufgabe']['name']#</li>
	<li>Status: #context['aufgabe']['Status']#</li>
	<li>Frist: #context['aufgabe']['Frist']#</li>
	<li>Stunden: #context['aufgabe']['Stunden']#</li>
</ul>



<h3>Personal</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['personal']['name']#</li>
	<li>Fachbereich: #context['personal']['Fachbereich']#</li>
</ul>



<h3>Personen</h3>
<table class="uk-table uk-table-hover uk-table-striped">
	<tbody>
		    <thead>
		        <tr>
		            <th>ID</th>
		            <th>Name</th>
		            <th>Alter</th>
		            <th>Position</th>
		        </tr>
		    </thead>
			@for var x  in context['person']@
			<tr id="#x#">
				<td>#context['person'][x]['id_s']#</td>
				<td>#context['person'][x]['name']#</td>
				<td>#context['person'][x]['alter']#</td>
				<td>#context['person'][x]['position']#</td>
			</tr>
			@endfor@		
	</tbody>
</table>
