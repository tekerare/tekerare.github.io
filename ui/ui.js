const siteURL = 'texaskissrhinestone.github.io';
const mailAddress = '0ekekddddd@protonmail.com';

let img;

function enlarge(){
  document.getElementById('preview').style.display = 'block';
  document.getElementById('fullRes').setAttribute('src', img);
  document.getElementById('exLink').setAttribute('href', img);
}

function readerUI(){
  const y = document.createElement('div');
  y.setAttribute('id', 'preview');
  y.innerHTML = '<img src="" id="fullRes" alt="" title=""><br><a id="exLink" target="_blank" style="color:#ffffff;">open on external tab</a>';
  document.getElementsByTagName('body')[0].prepend(y);
  preview.onclick = function() {
	document.getElementById('preview').style.display = 'none';
  }
  const tbutt = document.createElement('a');
  const bbutt = document.createElement('a');
  tbutt.setAttribute('target', '_parent');
  bbutt.setAttribute('target', '_parent');
  tbutt.setAttribute('href', '#header');
  bbutt.setAttribute('href', '#footer');
  tbutt.innerHTML = '<img src="https://'+ siteURL +'/ui/reader_ui/top.png" alt="top" title="top" style="position:fixed;bottom:66px;right:0;">';
  bbutt.innerHTML = '<img src="https://'+ siteURL +'/ui/reader_ui/bottom.png" alt="bottom" title="bottom" style="position:fixed;bottom:0;right:0;">';
  document.body.appendChild(tbutt).appendChild(bbutt);
}
function badgeLink(){
  const x = document.createElement("div");
  x.innerHTML = '<center><br><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></center><textarea><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></textarea><quiet style="font-size:10px;">Authenticated for badge-represented linkage of TKR. This code allows updates across links.</quiet>';
  document.getElementById('lWrp').appendChild(x);
}
function galleryWidget(){
  const x = document.createElement('div');
  x.innerHTML = '<h3 style="text-align:center;">&rarr; newest in gallery &larr;</h3><span style="text-align:center;"><a href="/art/gallery"><img src="https://' + siteURL + '/media/og_rtwrk/orderofburgerandfrills.jpg" class="image" style="filter:grayscale(100%);"></a></span><quiet style="font-size:12px; padding:0px 0px 3px; 0px; text-align:center;">see more works @ <a href="https://' + siteURL + '/art/">/art/</a></quiet>';
  document.getElementById('lWrp').appendChild(x);
}

function eventWidget(){
  const x = document.createElement('div');
  x.setAttribute('id', 'eventsWidget');
  x.innerHTML = '<h3>upcoming booths</h3><div id="eventsList"><quiet style="text-align:center;">nearest &rarr; distant</quiet><ul><li><a href="https://www.kimokawaii.net" target="_blank">kimokawaii</a> @ conroe tx (june 06-07)</li></ul></div><p style="text-align:end;">virtual booth tour @ <a href="https://' + siteURL + '/art/merch" target="_parent">/art/</a></p>';
  document.getElementById('lWrp').appendChild(x);
}
function kofiWidget(){
  const x = document.createElement('div');
  x.setAttribute('id' , 'kofiWidget');
  x.innerHTML = '<h3>support me on ko-fi</h3><div><a href="https://ko-fi.com/s/1800cb6ae7" target="_blank"><img src="https://' + siteURL + '/media/prmo/sticker_fujochud.jpg" alt="promotional image for fujochud sticker" title="fujochud stickers available on my ko-fi"></a> <a href="https://ko-fi.com/s/2fe85de556" target="_blank"><img src="https://' + siteURL + '/media/prmo/bundle_nortluchi.jpg" alt="promotional image for slateship merch bundle"title="*23% off* norton x luchino merch bundle"></a></div>';
  document.getElementById('lWrp').appendChild(x);
}
function browsePosts(){
  const x = document.createElement("div");
  const y = document.createElement("h1");
  x.innerHTML = '<table><tbody><tr><th colspan="2" style="text-align:center;">/sub/ navigation</th></tr><tr><td colspan="2" style="text-align:center;"><a href="https://' + siteURL + '">[ home ]</a></td></tr><tr><td style="width:50%;"><a href="https://' + siteURL + '/log/">/log/</a></td><td><a href="https://' + siteURL + '/jfashion/">/jfashion/</a></td></tr><tr><td><a href="https://' + siteURL + '/art/">/art/</a></td><td><a href="https://' + siteURL + '/shrines">/shrines</a></td></tr><tr><td><a href="https://' + siteURL + '/music/">/music/</a></td><td><a href="https://' + siteURL + '/update">/update</a></td></tr><tr><td><a href="https://' + siteURL + '/stream/">/stream/</a></td><td><a href="https://' + siteURL + '/about">/about</a></td></tr></tbody></table>';
  document.getElementById('lWrp').appendChild(x);
}
function rssBlock(){
  const y = document.createElement("h1");
  y.innerHTML = 'Latest Site Update <a href="https://' + siteURL + '/update">(read more @ update log)</a> <img src="https://' + siteURL + 'ui/icons/flag.gif" alt="">';
  document.getElementById('rWrp').appendChild(y);
  document.write('<article class="rssBlock"><script src="https://rss.bloople.net/?url=https%3A%2F%2Ftexaskissrhinestone.github.io%2Frss%2Frss.xml&limit=2&showtitle=false&type=js"></script></article>');
}
function logMap(){
  badgeLink();
  browsePosts();
}
function loadTheme(){
  const findBody = document.getElementById('body');
  function htmlBse(){
	const x = document.createElement("map");
	const y = document.createElement("img");
	const footer = document.createElement("div");
	y.setAttribute('src', 'https://'+ siteURL + '/ui/theme/layout_top_transparent.gif');
	y.setAttribute('usemap', '#top_map');
	x.setAttribute('name','top_links');
	x.setAttribute('id','top_map');
	x.setAttribute('title','[Click here to front page]');
	x.innerHTML = '<area shape="rect" href="https://'+ siteURL +'" target="_parent" alt="Home" coords="11,21,249,88">';
	document.getElementById('header').appendChild(x).appendChild(y);
	footer.innerHTML = '<a href="https://'+ siteURL +'/" target="_parent"><button>/home/</button></a><a href="https://'+ siteURL +'/log" target="_parent"><button>/log/</button></a><a href="https://'+ siteURL +'/shrines" target="_parent"><button>/shrines</button></a><a href="https://'+ siteURL +'/art/" target="_parent"><button>/art/</button></a><a href="https://'+ siteURL +'/music/" target="_parent"><button>/music/</button></a><a href="https://'+ siteURL +'/stream/" target="_parent"><button>/stream/</button></a><a href="https://'+ siteURL +'/update" target="_parent"><button>/update</button></a><a href="https://'+ siteURL +'/about" target="_parent"><button>/about</button></a>';
	document.getElementById('footer').appendChild(footer);
	readerUI();
  }
  function spawnSDTitle(){
    const sdtitle = document.createElement('span');
	sdtitle.setAttribute('style','text-align:center; font-size:25px;');
    sdtitle.innerHTML = '<a href="." style=" text-decoration-line: none;"> <img src="ui/sdtitle.png" id="sdTitle" style="max-height:200px;" alt="return to previous page" title="main page"></a>';
	document.getElementsByTagName('main')[0].prepend(sdtitle);
  }
  switch(theme){
	case 0:
	  readerUI();
	break;
	case 1:
	  htmlBse();
	 return;
	break;
	case 2:
	  htmlBse();
	  spawnSDTitle();
	break;
	case 3:
	  htmlBse();
	  findBody.setAttribute('id', 'singleBody');
	  const y = document.createElement('a');
      y.setAttribute('href', '.');
	  const z = document.createElement('a');
      z.setAttribute('href', '.');
      spawnSDTitle();
	break;
	case 4:
	  findBody.setAttribute('id', 'fauxWindow');
	  const x = document.getElementById('header');
	  x.innerHTML = '<h1>mule viewer 1.0<button class="closeDec"></button><button class="minmaxDec"></button><button class="minmaxDec2"></button></h1><div><a href="../">Home</a> <a href="../log/">Blog</a> <a href="../shrines">Shrines</a> <a href="../art/">Art</a> <a href="../music/">Music</a> <a href="../stream/">Stream</a> <a href="../update">Update</a> <a href="../about">About</a> <a href="../rss/rss.xml">RSS</a></div><div class="flex"><div style="width:auto;margin:3px 0px; padding:0px 2px;">Location:</div><div class="fauxField" id="windowLocation" style="cursor:not-allowed;width:100%;"></div><div style="width:auto;"><button class="dropDown"></button></div></div>';
      spawnSDTitle();
      readerUI();
	break;
  }
}