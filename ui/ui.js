const siteURL = 'texaskissrhinestone.github.io';
const mailAddress = '0ekekddddd@protonmail.com';


window.onload = function(){
  preview.onclick = function() {
	document.getElementById('preview').style.display = 'none';
  }
}
let img;
function imgPreview(){
  document.body.setAttribute('id', 'imgWindow');
  const y = document.createElement('div');
  y.setAttribute('id', 'preview');
  y.innerHTML = '<img src="" id="fullRes" alt="" title="">';
  document.getElementById('imgWindow').appendChild(y);
}
function enlarge(){
  document.getElementById('preview').style.display = 'block';
  document.getElementById('fullRes').setAttribute('src', 'media/'+img);
}

function quickBio(){
  const x = document.createElement("div");
  x.innerHTML = '<p><img src="ui/images/atglasses.gif" style="pointer-events:none;float:left;padding:0px 9px 0px 0px;"> Web developer &amp; designer. Looking for work. E-mail for collaboration.</p>';
   document.getElementById('lContainer').appendChild(x);
}
function badgeLink(){
  const x = document.createElement("div");
  x.innerHTML = '<center><br><a href="'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></center><textarea><a href="'+ siteURL +'"><img src="https://' + siteURL +'/ui/buttons/button.gif" alt="texas kiss rhinestone: homepage" title="TEXAS KISS RHINESTONE"></a></textarea><quiet style="font-size:10px;">Authenticated for badge-represented linkage of TKR. This code allows updates across links.</quiet>';
  document.getElementById('lContainer').appendChild(x);
}
function browsePosts(){
  const x = document.createElement("div");
  const y = document.createElement("h1");
  x.innerHTML = '<table><tbody><tr><th colspan="2"><a href="https://' + siteURL + '/log/update/">update log</a> / <a href="https://' + siteURL + '/rss/rss.xml" target="_blank" download>rss feed</a></th></tr><tr><td><a href="https://' + siteURL + '/log/">blog</a></td><td><a href="https://' + siteURL + '/microlog/">microlog</a></td></tr><tr><td><a href="https://' + siteURL + '/jfashion/">fashion</a></td><td><a href="https://' + siteURL + '/shrines">shrines</a></td></tr><tr><td><a href="https://' + siteURL + '/music/">my music</a></td><td><a href="https://' + siteURL + '/about">about the site</a></td></tr><tr><td><a href="https://' + siteURL + '/stream/">stream</a></td><td><a href="https://' + siteURL + '/art/">illustrations</a></td></tr></tbody></table>';
  document.getElementById('lContainer').appendChild(x);
}
function rssBlock(){
  const y = document.createElement("h1");
  y.innerHTML = 'Latest Site Update <a href="https://' + siteURL + '/log/update/">(read more @ update log)</a>';
  document.getElementById('rContainer').appendChild(y);
  document.write('<div class="feedBlock"><script src="https://rss.bloople.net/?url=https%3A%2F%2Ftexaskissrhinestone.github.io%2Frss%2Frss.xml&limit=1&showtitle=false&type=js"></script></div>');
}
function updateIcon(){
  const x = document.createElement('img');
  x.setAttribute('src', '../ui/user_int/update.gif');
  x.setAttribute('style', 'margin: 0px -5px -5px 0px');
  document.getElementById('newestPost').appendChild(x);
}
function logMap(){
  badgeLink();
  browsePosts();
}
function loadAsset(){
  var assetPiece;
  function readerUI(){
    const x = document.createElement('a');
	x.setAttribute('href', '#top');
	x.setAttribute('target', '_parent');
	x.innerHTML = '<img src="https://'+ siteURL +'/ui/user_int/top.png" alt="top" title="top" style="position:fixed;bottom:0;right:0;">';
	document.body.appendChild(x);
  }
  function imageMapHTML(){ document.write('<section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
  }
  switch(siteArea){
	case 1:
	  imgPreview();
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://' + siteURL + '/art/" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="body">');
	  imageMapHTML();
	  document.write('<div class="inContent"><section id="lContainer">');
	break;
	;
	case 2:
	  document.write('</section><section id="rContainer">');
	break;
	case 3:
	  assetPiece = "bottom"
	  document.write('<hr><center><a href="https://' + siteURL + '">home</a> | <a href="https://' + siteURL + '/log/update/">update log</a> | <a href="https://' + siteURL + '/music/">my music</a> | <a href="https://' + siteURL + '/log/">personal log</a> | <a href="https://' + siteURL + '/about">about me</a> | <a href="https://' + siteURL + '/guestbook">guestbook</a><br><a href="https://' + siteURL + '/rss/rss.xml">subscribe to the rss</a></center></section></div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
	case 4:
	  imgPreview();
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://' + siteURL + '/art/" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="treeBody">');
	  imageMapHTML();
	  document.write('<div class="inContent"><section id="lContainer"><div class="banner"></div>');
	break;
	;
	case 5:
	  document.write('</section><section id="rContainer">');
	break;
	case 6:
	  assetPiece = "bottom"
	  document.write('</section></div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
	case 7:
	  imgPreview();
	  assetPiece = "top";
	  document.write('<map name="top_links"><area shape="rect" alt="[Home]" coords="389,19,631,89" href="https://'+ siteURL +'" target="_parent"></map><map name="bottom_links"><area shape="rect" alt="[E-Mail Me]" title="[E-mail Me]" coords="43,61,74,88" href="mailto:' + mailAddress + '" target="_parent"><area alt="[Home]" title="[Home]" href="https://'+ siteURL +'" coords="131,49,182,95" shape="rect" target="_parent"><area alt="[Log]" title="[Log]" href="https://' + siteURL + '/log/" coords="240,57,270,85" shape="rect" target="_parent"><area alt="[TOS/International]" title="[TOS/International]" href="https://' + siteURL + '/art/" coords="84,62,117,88" shape="rect"  target="_blank"><area alt="[My Music]" title="[My Music]" href="https://' + siteURL + '/music/" coords="196,58,227,86" shape="rect" target="_parent"></map><div id="singleBody">');
	  imageMapHTML();
	  document.write('<div class="inContent">');
	break;
	case 8:
	  assetPiece = "bottom"
	  document.write('</div><section id="' + assetPiece + '"><img src="https://' + siteURL + '/ui/layout_pieces/layout_' + assetPiece + '_transparent.gif" alt="" usemap="#' + assetPiece + '_links"></section>');
	  readerUI();
	break;
	case 9:
	  imgPreview();
	  document.write('<div id="preview"><img src="" id="fullRes" alt="" title=""></div><div id="fauxWindow"><h1>mule viewer 1.0<button class="closeDec"></button><button class="minmaxDec"></button><button class="minmaxDec2"></button></h1><div><a href="../">Home</a> <a href="../log/">Blog</a> <a href="../microlog/">Microlog</a> <a href="../shrines">Shrines</a> <a href="../art/">Illustrations</a> <a href="../music/">Music</a> <a href="../stream/">Stream</a> <a href="../log/update/">Update</a> <a href="../about">About</a> <a href="../rss/rss.xml">RSS</a></div><div class="flex"><div style="width:auto;margin:3px 0px; padding:0px 2px;">Location:</div><div class="fauxField" style="margin: -2px 0px 0px 0px; cursor:not-allowed;width:100%;">https://'+ siteURL +'</div><div style="width:auto;"><button class="dropDown"></button></div></div><div class="inContent fauxField" style="width:auto;"><div id="lContainer">');
	break;
	case 10:
	  guLogMap();
	  document.write('</div><div id="rContainer">');
	  checkPoint();
	break;
	case 11:
	  document.write('<hr><center><a href="https://' + siteURL + '">home</a> | <a href="https://' + siteURL + '/log/update/">update log</a> | <a href="https://' + siteURL + '/music/">my music</a> | <a href="https://' + siteURL + '/log/">personal log</a> | <a href="https://' + siteURL + '/about">about me</a> | <a href="https://' + siteURL + '/guestbook">guestbook</a><br><a href="https://' + siteURL + '/rss/rss.xml">subscribe to the rss</a></center>');
	  readerUI();
	break;
  }
}