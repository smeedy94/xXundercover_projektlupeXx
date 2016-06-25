<h3>Projekt</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['projekt']['name']#</li>
	<li>Auftraggeber: #context['projekt']['auftraggeber']#</li>
	<li>Kosten: #context['projekt']['kosten']#</li>
	<li>Frist: #context['projekt']['frist']#</li>
</ul>

<h3>Personal</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['personal']['name']#</li>
	<li>Fachbereich: #context['personal']['fachbereich']#</li>
</ul>

<h3>Person</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['person']['name']#</li>
	<li>Alter: #context['person']['alter']#</li>
	<li>Position: #context['person']['position']#</li>
</ul>



<h1>Aufgabengruppen</h1>
@for var y in context['work_grp']@
<h3>Aufgabengruppe #context['work_grp'][y]['name']#</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['work_grp'][y]['name']#</li>
	<li>Status: #context['work_grp'][y]['Stauts']#</li>
	<li>Frist: #context['work_grp'][y]['Frist']#</li>
	<li>Stunden: #context['work_grp'][y]['Stunden']#</li>
</ul>

<table class="uk-table uk-table-hover uk-table-striped">
	<tbody>
		    <thead>
		        <tr>
		            <th>Name</th>
		            <th>Status</th>
		            <th>Frist</th>
		            <th>Stunden</th>
		        </tr>
		    </thead>
			@for var x  in context['work_grp'][y]['aufgaben_d']@
			<tr>
				<td>#context['work_grp'][y]['aufgaben_d'][x]['name']#</td>
				<td>#context['work_grp'][y]['aufgaben_d'][x]['Stauts']#</td>
				<td>#context['work_grp'][y]['aufgaben_d'][x]['Frist']#</td>
				<td>#context['work_grp'][y]['aufgaben_d'][x]['Stunden']#</td>
			</tr>
			@endfor@		
	</tbody>
</table>
@endfor@