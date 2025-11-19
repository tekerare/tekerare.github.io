const siteURL = 'texaskissrhinestone.github.io';
const mailAddress = '0ekekddddd@protonmail.com';

let img;
function imgPreview(){
  const y = document.createElement('div');
  y.setAttribute('id', 'preview');
  y.innerHTML = '<img src="" id="fullRes" alt="" title="">';
  document.getElementsByTagName('body')[0].prepend(y);
}
function closePreview(){
  preview.onclick = function() {
	document.getElementById('preview').style.display = 'none';
  }
}
function enlarge(){
  document.getElementById('preview').style.display = 'block';
  document.getElementById('fullRes').setAttribute('src', 'media/'+img);
}

function quickBio(){
  const x = document.createElement("div");
  x.innerHTML = '<p><img src="ui/images/atglasses.gif" style="pointer-events:none;float:left;padding:0px 9px 0px 0px;"> Web developer &amp; designer. Looking for work. E-mail for collaboration.</p>';
   document.getElementById('lWrp').appendChild(x);
}
function badgeLink(){
  const x = document.createElement("div");
  x.innerHTML = '<center><br><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></center><textarea><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></textarea><quiet style="font-size:10px;">Authenticated for badge-represented linkage of TKR. This code allows updates across links.</quiet>';
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
  document.write('<div class="feedBlock"><script src="https://rss.bloople.net/?url=https%3A%2F%2Ftexaskissrhinestone.github.io%2Frss%2Frss.xml&limit=1&showtitle=false&type=js"></script></div>');
}
function logMap(){
  badgeLink();
  browsePosts();
}
function loadTheme(){
  const findBody = document.getElementById('body');
  function readerUI(){
    const x = document.createElement('a');
	const y = document.createElement('a');
	x.setAttribute('target', '_parent');
	y.setAttribute('target', '_parent');
	x.setAttribute('href', '#header');
	y.setAttribute('href', '#footer');
	x.innerHTML = '<img src="https://'+ siteURL +'/ui/user_int/top.png" alt="top" title="top" style="position:fixed;bottom:66px;right:0;">';
	y.innerHTML = '<img src="https://'+ siteURL +'/ui/user_int/bottom.png" alt="bottom" title="bottom" style="position:fixed;bottom:0;right:0;">';
	document.body.appendChild(x).appendChild(y);
  }
  function htmlBse(){
	const x = document.createElement("map");
	const y = document.createElement("img");
	const z = document.createElement("map");
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
	z.setAttribute('name','bottom_links');
	z.setAttribute('id','bottom_map');
	z.innerHTML = '<area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://' + siteURL + '/art/" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent">';
	document.getElementById('footer').appendChild(z).appendChild(s);
  }
  switch(theme){
	case 0:
	  imgPreview();
	  closePreview();
	break;
	case 1:
	  htmlBse();
	  imgPreview();
	  closePreview();
	 return;
	break;
	case 2:
	  htmlBse();
	  findBody.setAttribute('id', 'treeBody');
	  imgPreview();
	  closePreview();
	break;
	case 3:
	  htmlBse();
	  findBody.setAttribute('id', 'singleBody');
	  imgPreview();
	break;
	case 4:
	  findBody.setAttribute('id', 'fauxWindow');
	  const x = document.getElementById('header');
	  x.innerHTML = '<h1>mule viewer 1.0<button class="closeDec"></button><button class="minmaxDec"></button><button class="minmaxDec2"></button></h1><div><a href="../">Home</a> <a href="../log/">Blog</a> <a href="../microlog/">Microlog</a> <a href="../shrines">Shrines</a> <a href="../art/">Illustrations</a> <a href="../music/">Music</a> <a href="../stream/">Stream</a> <a href="../log/update/">Update</a> <a href="../about">About</a> <a href="../rss/rss.xml">RSS</a></div><div class="flex"><div style="width:auto;margin:3px 0px; padding:0px 2px;">Location:</div><div class="fauxField" id="windowLocation" style="cursor:not-allowed;width:100%;"></div><div style="width:auto;"><button class="dropDown"></button></div></div>';
	  imgPreview();
	  readerUI();
	break;
  }
  var audio = document.getElementById("audio");
  audio.volume = 0.5;
  readerUI();
}