
var links = ['joinit','joinh','hell','letters'];
var titles = ['Join It','Join the Hearts','Hell Puzzle','Letters App'];
var subtitles = ['Jigsaw Puzzle','Jigsaw Puzzle','',''];
var tags = ['puzzle','ipad game','ios','join the hearts','puzzles','puzles','haloween','hell','ipad games','baby game'];

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
	request.open("GET",'site/'+id+'.txt',true);
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

function loadContentForProduct(id)
{
	var index = groupNumberWithID(id);
	var content = '<div class="logoElement"><img src="site/'+id+'.png"></div>';
	content += '<div class="description">';
	content += '<h3>'+titles[index]+'</h3>'
	content += '<span class="simpleText" id="descriptionFromText">';
	descriptionForProduct(id);
	content += '</span>';
	content += '<h4>Screenshots:</h4>';
	for (var i = 0; i < 3; i++) 
	{
		content += '<div class="screenshot"><a href="site/'+id+'-screen_'+(i+1)+'.png" rel="lightbox[screen]" title="">';
		content += '<img src="site/'+id+'-screen_'+(i+1)+'.png" class="screenshot"></a></div>';
	};
	content += "</div>";
	document.getElementById('productDescription').innerHTML = content;
}

function loadStyle (productName) 
{
	loadMenu();
	loadHead();
	if (productName != null) loadContentForProduct(productName);
}
