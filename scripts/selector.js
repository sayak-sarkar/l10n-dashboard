(function ($) {
	//setTimeout(function () {
		$.ajax({
			url: "resources/languages.json",
			crossDomain: true,
			dataType: "json",
			success: function (data) {
				console.log(data);
				$.each(data, function(key, value) {
					var opt = document.createElement("option");
					opt.setAttribute("value", value);
					opt.innerHTML=key;
					document.getElementById('language-selector').appendChild(opt);
				});
			},
			error: function (jqXHR, status, e) {
				console.log(jqXHR.status);
			},
		});
	//}, 3000);
})(jQuery);

function toggleDisplay() {
	var img = document.getElementById("dropper");
	if (document.getElementById("mozBlock").className==='unhidden') {
  		img.setAttribute("class", "non-rotated-image");
		document.getElementById("mozBlock").className='hidden'
	} 
	else {
		img.setAttribute("class", "rotated-image");
		document.getElementById("mozBlock").className='unhidden';
	};
}

function languageChanged(languageCode){
	var kde = document.getElementsByClassName('kde');
	var gnome = document.getElementsByClassName('gnome');
	var pootle = document.getElementsByClassName('pootle');
	var locamotion = document.getElementsByClassName('locamotion');
	var transifex = document.getElementsByClassName('transifex');
	
	for (var i = 0; i<kde.length; i++) {

		//Update the project URL.
		if(languageCode == "Choose Language") {
            		kde.item(i).setAttribute("href", "http://l10n.kde.org/teams-list.php");
        	}
		else {
			kde.item(i).setAttribute("href", "http://l10n.kde.org/team-infos.php?teamcode="+languageCode);
			console.log(kde.item(i));
        	}
	}
	for (var i = 0; i<gnome.length; i++) {

		//Update the project URL.
		if(languageCode == "Choose Language") {
            		gnome.item(i).setAttribute("href", "https://l10n.gnome.org/teams/");
        	}
        	else {
        		gnome.item(i).setAttribute("href", "https://l10n.gnome.org/teams/"+languageCode+"/");
        	}
		
	}
	for (var i = 0; i<pootle.length; i++) {
		//Extract Project's URL Slug from URL.
		var arr = pootle.item(i).href.split("/");
		var projectSlug = arr[4];

		//Generate the required URL.
		var urlArr = pootle.item(i).href.split("/",3);
		var url = urlArr.join("/");

		//Update the project URL.
		if (languageCode == "Choose Language") {
            		pootle.item(i).setAttribute("href", url);
        	}
		else {
			pootle.item(i).setAttribute("href", url+'/'+languageCode+"/");
		}
	}
	for (var i = 0; i < locamotion.length; i++) {

		//Generate the required URL.
		var arr = locamotion.item(i).href.split("/");
		var projectSlug = arr[arr.length - 2];

		//Update the project URL.
		if (languageCode == "Choose Language") {
            		locamotion.item(i).setAttribute("href", "http://mozilla.locamotion.org/projects/"+projectSlug+"/");
        	}
		else {
			locamotion.item(i).setAttribute("href","http://mozilla.locamotion.org/"+languageCode+"/"+projectSlug+"/");
		}
	}


	for (var i = 0; i<transifex.length; i++) {

		//Extract Project's URL Slug from URL.
		var arr = transifex.item(i).href.split("/");
		var projectSlug = arr[5];
		
		//Update the project URL.
		if (languageCode == "Choose Language") {
            		transifex.item(i).setAttribute("href", "https://www.transifex.com/projects/p/"+projectSlug+"/");
        	}
		else {
			transifex.item(i).setAttribute("href", "https://www.transifex.com/projects/p/"+projectSlug+"/"+"language/"+languageCode+"/");
		}
	}
}
