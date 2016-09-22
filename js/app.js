$("form").on("submit", function(e){
	e.preventDefault();
	var template = Handlebars.compile($('#search-template').html());
	$.ajax({
		url: "https://api.spotify.com/v1/search?q="+$("#search").val()+"&type=track",
		type: "GET"
	}).done(function(data){
		$('.results').html(template({ tracks: data.tracks.items }));
	});
});