<h3>Raum</h3>
<ul class="uk-list uk-list-striped">
	<li>#context['room']['name']#</li>
	<li>#context['room']['Nummer']#</li>
	<li>#context['room']['Lage']#</li>
</ul>

<h3>Gerätegruppe</h3>
<ul class="uk-list uk-list-striped">
	<li>#context['device_group']['name']#</li>
</ul>

<h3>Gerät</h3>
<ul class="uk-list uk-list-striped">
	<li>#context['device']['name']#</li>
	<li>#context['device']['Bezeichnung']#</li>
	<li>#context['device']['Hersteller']#</li>
	<li>#context['device']['typ']#</li>
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


