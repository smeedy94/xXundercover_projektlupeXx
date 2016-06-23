<h3>Raum</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['room']['name']#</li>
	<li>Nummer: #context['room']['Nummer']#</li>
	<li>Lage: #context['room']['Lage']#</li>
</ul>

<h3>Gerätegruppe</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['device_group']['name']#</li>
</ul>

<h3>Gerät</h3>
<ul class="uk-list uk-list-striped">
	<li>Name: #context['device']['name']#</li>
	<li>Bezeichnung: #context['device']['Bezeichnung']#</li>
	<li>Hersteller: #context['device']['Hersteller']#</li>
	<li>Typ: #context['device']['typ']#</li>
</ul>

<h3>Lizenzen</h3>
<table class="uk-table uk-table-hover uk-table-striped">
	<tbody>
		    <thead>
		        <tr>
		            <th>ID</th>
		            <th>Name</th>
		            <th>Hersteller</th>
		            <th>Lizenznummer</th>
		        </tr>
		    </thead>
			@for var x  in context['li']@
			<tr id="#x#">
				<td>#context['li'][x]['id_s']#</td>
				<td>#context['li'][x]['Name']#</td>
				<td>#context['li'][x]['Hersteller']#</td>
				<td>#context['li'][x]['Lizenznummer']#</td>
			</tr>
			@endfor@		
	</tbody>
</table>


