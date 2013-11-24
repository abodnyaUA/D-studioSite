
var links = ['joinit','joinh','hell','letters'];
var titles = ['Join It','Join the Hearts','Hell Puzzle','Letters App'];
var subtitles = ['Jigsaw Puzzle','Jigsaw Puzzle','',''];
var tags = ['puzzle','ipad game','ios','join the hearts','puzzles','puzles','haloween','hell','ipad games','baby game'];

var descriptionPath = "";
var posterPath = "";
var screenshots = [];

function loadMenu () 
{
	var content = "<table>";

	// Images
	content += "<tr>";
	for (var i = 0; i < links.length; i++) 
	{
		content += "<td><a href='"+links[i]+".html'>"
		content += "<div class='menuElement'>"
		content += "<img src='site/"+links[i]+".png' class='menuElement' alt="+tags[Math.floor(Math.random()*tags.length)]+"></div></a></td>";
	};
	
	content += "</tr>";

	// Labels
	content += "<tr>";
	for (var i = 0; i < links.length; i++) 
	{
		content += "<td><a href="+links[i]+"'.html'><div class='menuElement'>";
		content += "<span class='productTitle'>"+titles[i]+"</span><br>";
		content += "<span class='productSubTitle'>"+subtitles[i]+"</span></div></a></td>";
	}
	content += "</tr>";
	content += "</table>";
	document.getElementById('menu').innerHTML = content;
}

function loadHead()
{
	var content = '<a href="index.html"><div class="logo"><img src="site/logo.png"'+tags[Math.floor(Math.random()*tags.length)]+'></div></a>';
	content += '<div class="logotext">Competence and experience are our primary assets</div>';
	document.getElementById('head').innerHTML = content;
}

function groupNumberWithID (id) 
{
	for (var i = 0; i < links.length; i++) 
	{
		if (id == links[i]) return i;
	}	
}

function descriptionForProduct (id) 
{
	var request = new XMLHttpRequest();
	request.open("GET",descriptionPath,true);
	request.onreadystatechange = function ()
	{
		if (request.readyState == 4)
		{
			if (request.status == 200)
			{
				document.getElementById('descriptionFromText').innerHTML = request.responseText;
			}
			else
			{
				alert('Some problems');
			}
		}
	}
	request.send(null);
	// body...
}

function loadFieldsWithJSONFromPHPScript(id)
{
	var request = new XMLHttpRequest();
	request.open("GET",'site/finder.php?product='+id,true);
	request.onreadystatechange = function ()
	{
		if (request.readyState == 4)
		{
			if (request.status == 200)
			{
				var json = request.responseText;
				var data = JSON.parse(json);
				descriptionPath = data.description_path;
				posterPath = data.poster_path;
				for (var i = 0; i < data.screenshots.length; i++) 
				{
					screenshots.push(data.screenshots[i])
				};
				loadContentForProduct(id);
			}
			else
			{
				alert('Some problems');
			}
		}
	}
	request.send(null);
}

function loadContentForProduct(id)
{
	var index = groupNumberWithID(id);
	var content = '<div class="logoElement"><img src="'+posterPath+'"></div>';
	content += '<div class="description">';
	content += '<h3>'+titles[index]+'</h3>'
	content += '<span class="simpleText" id="descriptionFromText">';
	descriptionForProduct(id);
	content += '</span>';
	content += '<h4>Screenshots:</h4>';
	for (var i = 0; i < 3; i++) 
	{
		content += '<div class="screenshot"><a href="'+screenshots[i]+'" rel="lightbox[screen]" title="">';
		content += '<img src="'+screenshots[i]+'" class="screenshot"></a></div>';
	};
	content += "</div>";
	document.getElementById('productDescription').innerHTML = content;
}

function loadStyle (productName) 
{
	loadMenu();
	loadHead();
	if (productName != null) loadFieldsWithJSONFromPHPScript(productName);
}
