const siteURL = 'tekerare.github.io';
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
  x.innerHTML = '<center><br><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="tekerare: homepage" title="TEKERARE"></a></center><textarea><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="tekerare: homepage" title="TEKERARE"></a></textarea><quiet style="font-size:10px;">Authenticated for badge-represented linkage of TKR. This code allows updates across links.</quiet>';
  document.getElementById('asideWrp').appendChild(x);
}
function galleryWidget(){
  const x = document.createElement('div');
  x.innerHTML = '<h3 style="text-align:center;">&rarr; newest in gallery &larr;</h3><span style="text-align:center;"><a href="/art/gallery"><img src="https://' + siteURL + '/media/og_rtwrk/tadc_2026-04-08_jaxatyourservice.jpg" class="image" style=""></a></span><quiet style="font-size:12px; padding:0px 0px 3px; 0px; text-align:center;">see more works @ <a href="https://' + siteURL + '/art/">/art/</a></quiet>';
  document.getElementById('asideWrp').appendChild(x);
}

function eventWidget(){
  const x = document.createElement('div');
  x.setAttribute('id', 'eventsWidget');
  x.innerHTML = '<h3>upcoming booths</h3><div id="eventsList"><ul><li><a href="https://www.kimokawaii.net" target="_blank">kimokawaii</a> @ conroe tx<br>(june 06-07)</li><li><a href="https://www.instagram.com/p/DXE-ipRjlHb/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" target="_blank">tadc fan popup @ sugarland tx</a><br>(june 27 - 28)</li><li>identity v popup @ sugarland tx<br>(oct 10)</li><strike><li>artist alley houston part 2<br>(april 18 - 19)</li><li>artist alley houston<br>(jan 31 10am - 5pm)</li><li>zakicon @ friendswood tx<br>(jan 09-11)</strike></li></ul></div><p style="text-align:end;">virtual booth tour @ <a href="https://' + siteURL + '/art/merch" target="_parent">/art/</a></p>';
  document.getElementById('asideWrp').appendChild(x);
}
function kofiWidget(){
  const x = document.createElement('div');
  x.setAttribute('id' , 'kofiWidget');
  x.setAttribute('style','bottom-padding:2px;');
  x.innerHTML = '<h3>support me on ko-fi</h3><span style="text-align:center;"><a href="https://ko-fi.com/s/2fe85de556" target="_blank"><img src="https://' + siteURL + '/media/prmo/sticker_nickjudycarkeys.jpg" class="image" alt="promotional image for nickjudy car keys stickers" title="nickjudy car keys sticker available on my ko-fi"></a></span>';
  document.getElementById('asideWrp').appendChild(x);
}
function browsePosts(){
  const x = document.createElement("div");
  const y = document.createElement("h1");
  x.innerHTML = '<table><tbody><tr><th colspan="2" style="text-align:center;">/sub/ navigation</th></tr><tr><td colspan="2" style="text-align:center;"><a href="https://' + siteURL + '">[ home ]</a></td></tr><tr><td style="width:50%;"><a href="https://' + siteURL + '/log/">/log/</a></td><td><a href="https://' + siteURL + '/jfashion/">/jfashion/</a></td></tr><tr><td><a href="https://' + siteURL + '/art/">/art/</a></td><td><a href="https://' + siteURL + '/shrines">/shrines</a></td></tr><tr><td><a href="https://' + siteURL + '/music/">/music/</a></td><td><a href="https://' + siteURL + '/update">/update</a></td></tr><tr><td><a href="https://' + siteURL + '/stream/">/stream/</a></td><td><a href="https://' + siteURL + '/about">/about</a></td></tr></tbody></table>';
  document.getElementById('asideWrp').appendChild(x);
}
function rssBlock(){
  document.write('<article id="rss-feed"><h2>latest site update <a href="https://' + siteURL + '/update">(read more @ update log)</a> <img src="https://' + siteURL + 'ui/icons/flag.gif" alt=""></h2><div><script src="https://rss.bloople.net/?url=https%3A%2F%2F' + siteURL + '%2Frss%2Frss.xml&limit=2&showtitle=false&type=js"></script></div></article>');
}
function logMap(){
  badgeLink();
  browsePosts();
}
function loadTheme(){
  const findBody = document.getElementById('body');
  function defaultHtmlBase(){
	const x = document.createElement("map");
	const y = document.createElement("img");
	const footer = document.createElement("div");
	y.setAttribute('src', 'https://'+ siteURL + '/ui/theme/body_headerTransparent.gif');
	y.setAttribute('usemap', '#top_map');
	x.setAttribute('name','top_links');
	x.setAttribute('id','top_map');
	x.setAttribute('title','[Click here to front page]');
	x.innerHTML = '<area shape="rect" href="https://'+ siteURL +'" target="_parent" alt="Home" coords="11,8,249,76">';
	document.getElementById('header').appendChild(x).appendChild(y);
	footer.innerHTML = '<a href="https://'+ siteURL +'/" target="_parent"><button>/home/</button></a><a href="https://'+ siteURL +'/log" target="_parent"><button>/log/</button></a><a href="https://'+ siteURL +'/shrines" target="_parent"><button>/shrines</button></a><a href="https://'+ siteURL +'/jfashion" target="_parent"><button>/jfashion</button></a><a href="https://'+ siteURL +'/art/" target="_parent"><button>/art/</button></a><a href="https://'+ siteURL +'/music/" target="_parent"><button>/music/</button></a><a href="https://'+ siteURL +'/stream/" target="_parent"><button>/stream/</button></a><a href="https://'+ siteURL +'/update" target="_parent"><button>/update</button></a><a href="https://'+ siteURL +'/about" target="_parent"><button>/about</button></a>';
	document.getElementById('footer').appendChild(footer);
	readerUI();
  }
  const fauxWindowHTML = '<h1>mule viewer 1.0<button class="closeDec"></button><button class="minmaxDec"></button><button class="minmaxDec2"></button></h1><div><a href="https://' + siteURL + '">Home</a> <a href="https://' + siteURL + '/log/">Blog</a> <a href="https://' + siteURL + '/shrines">Shrines</a> <a href="https://' + siteURL + '/jfashion">Fashion</a> <a href="https://' + siteURL + '/art/">Art</a> <a href="https://' + siteURL + '/music/">Music</a> <a href="https://' + siteURL + '/stream/">Stream</a> <a href="https://' + siteURL + '/update">Update</a> <a href="https://' + siteURL + '/about">About</a> <a href="https://' + siteURL + '/rss/rss.xml">RSS</a></div><div class="flex"><div style="width:auto;margin:3px 0px; padding:3px 2px;">Location:</div><div class="fauxField" id="windowLocation" style="cursor:not-allowed;width:100%;"></div><div style="width:auto;"><button class="dropDown"></button></div></div>';
  function spawnSDTitle(){
    const sdtitle = document.createElement('span');
	sdtitle.setAttribute('id' , 'sdTitle');
    sdtitle.innerHTML = '<a href="." style=" text-decoration-line: none;"> <img src="ui/sdtitle.png" id="sdTitle" style="max-height:200px;" alt="return to previous page" title="main page"></a>';
	document.getElementsByTagName('main')[0].prepend(sdtitle);
  }
  switch(theme){
	case 0:
	  readerUI();
	break;
	case 1:
	  defaultHtmlBase();
	 return;
	break;
	case 2:
	  defaultHtmlBase();
	  spawnSDTitle();
	break;
	case 3:
	  defaultHtmlBase();
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
	  x.innerHTML = fauxWindowHTML;
      readerUI();
	break;
	case 5:
	  findBody.setAttribute('id', 'fauxWindow');
	  const p = document.getElementById('header');
	  p.innerHTML = fauxWindowHTML;
      spawnSDTitle();
      readerUI();
	break;
  }
}