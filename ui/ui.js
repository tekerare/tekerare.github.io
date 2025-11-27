const siteURL = 'texaskissrhinestone.github.io';
const mailAddress = '0ekekddddd@protonmail.com';

let img;

function enlarge(){
  document.getElementById('preview').style.display = 'block';
  document.getElementById('fullRes').setAttribute('src', 'media/'+img);
  document.getElementById('exLink').setAttribute('href', 'media/'+img);
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
  tbutt.innerHTML = '<img src="https://'+ siteURL +'/ui/user_int/top.png" alt="top" title="top" style="position:fixed;bottom:66px;right:0;">';
  bbutt.innerHTML = '<img src="https://'+ siteURL +'/ui/user_int/bottom.png" alt="bottom" title="bottom" style="position:fixed;bottom:0;right:0;">';
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
  x.innerHTML = '<table><tbody><tr><th colspan="2"><a href="https://' + siteURL + '/update">update log</a> / <a href="https://' + siteURL + '/rss/rss.xml" target="_blank" download>rss feed</a></th></tr><tr><td><a href="https://' + siteURL + '/log/">blog</a></td><td><a href="https://' + siteURL + '/microlog/">microlog</a></td></tr><tr><td><a href="https://' + siteURL + '/jfashion/">fashion</a></td><td><a href="https://' + siteURL + '/shrines">shrines</a></td></tr><tr><td><a href="https://' + siteURL + '/music/">my music</a></td><td><a href="https://' + siteURL + '/about">about the site</a></td></tr><tr><td><a href="https://' + siteURL + '/stream/">stream</a></td><td><a href="https://' + siteURL + '/art/">illustrations</a></td></tr></tbody></table>';
  document.getElementById('lWrp').appendChild(x);
}
function rssBlock(){
  const y = document.createElement("h1");
  y.innerHTML = 'Latest Site Update <a href="https://' + siteURL + '/update">(read more @ update log)</a> <img src="https://' + siteURL + 'ui/icons/flag.gif" alt="">';
  document.getElementById('rWrp').appendChild(y);
  document.write('<div class="rssBlock"><script src="https://rss.bloople.net/?url=https%3A%2F%2Ftexaskissrhinestone.github.io%2Frss%2Frss.xml&limit=2&showtitle=false&type=js"></script></div>');
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
	const bottommap = document.createElement("map");
	const s = document.createElement("img");
	y.setAttribute('src', 'https://'+ siteURL + '/ui/theme/layout_top_transparent.gif');
	y.setAttribute('usemap', '#top_map');
	x.setAttribute('name','top_links');
	x.setAttribute('id','top_map');
	x.setAttribute('title','[Click here to front page]');
	x.innerHTML = '<area shape="rect" href="https://'+ siteURL +'" target="_parent" alt="Home" coords="389,19,631,89">';
	document.getElementById('header').appendChild(x).appendChild(y);
	s.setAttribute('src', 'https://'+ siteURL + '/ui/theme/layout_bottom_transparent.gif');
	s.setAttribute('usemap', '#bottom_map');
	bottommap.setAttribute('name','bottom_links');
	bottommap.setAttribute('id','bottom_map');
	bottommap.innerHTML = '<area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://' + siteURL + '/art/" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent">';
	document.getElementById('footer').appendChild(bottommap).appendChild(s);
	readerUI();
  }
  function spawnSDTitle(){
    const sdtitle = document.createElement('center');
    sdtitle.innerHTML = '<a href="."> <img src="ui/sdtitle.png" style=" max-height:200px;" alt="Back To Main Page" title="RETURN TO PORTAL"></a>';
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
	  findBody.setAttribute('id', 'treeBody');
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
	  x.innerHTML = '<h1>mule viewer 1.0<button class="closeDec"></button><button class="minmaxDec"></button><button class="minmaxDec2"></button></h1><div><a href="../">Home</a> <a href="../log/">Blog</a> <a href="../microlog/">Microlog</a> <a href="../shrines">Shrines</a> <a href="../art/">Illustrations</a> <a href="../music/">Music</a> <a href="../stream/">Stream</a> <a href="../log/update/">Update</a> <a href="../about">About</a> <a href="../rss/rss.xml">RSS</a></div><div class="flex"><div style="width:auto;margin:3px 0px; padding:0px 2px;">Location:</div><div class="fauxField" id="windowLocation" style="cursor:not-allowed;width:100%;"></div><div style="width:auto;"><button class="dropDown"></button></div></div>';
      spawnSDTitle();
      readerUI();
	break;
  }
}