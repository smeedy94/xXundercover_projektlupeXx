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
			@for var x  in context@
			<tr id="#x#">
				<td>#context[x]['id_s']#</td>
				<td>#context[x]['Name']#</td>
				<td>#context[x]['Hersteller']#</td>
				<td>#context[x]['Lizenznummer']#</td>
			</tr>
			@endfor@		
	</tbody>
</table>


