const siteURL = 'tekerare.github.io';
const mailAddress = 'tekerare@protonmail.com';

let img;

function enlarge(){
  document.getElementById('preview').style.display = 'block';
  document.getElementById('fullRes').setAttribute('src', img);
}
function setScreen(){
  document.getElementById('mediaViewer').setAttribute('src', img);
  document.getElementById('mediaViewer').setAttribute('title', "click to enlarge.");
  document.getElementById('mediaViewer').setAttribute('onclick', "img='"+ img + "';enlarge();");
}
function mobileAsideToggle() {
  var x = document.getElementsByTagName('aside')[0];
  var y = document.querySelector('.aside-mobile-button');
  if (x.style.display === "block") {
    x.style.display = "none";
	
  } else {
    x.style.display = "block";
  }
}
function readerUI(){
  const y = document.createElement('div');
  y.setAttribute('id', 'preview');
  y.innerHTML = '<img src="" id="fullRes" alt="" title=""><br><a id="exLink" target="_blank" style="color:#ffffff70;">click anywhere to close</a>';
  document.getElementsByTagName('body')[0].prepend(y);
  preview.onclick = function() {
	document.getElementById('preview').style.display = 'none';
  }
  const mobilebutton = document.createElement('label');
  mobilebutton.setAttribute('class', 'aside-mobile-button');
  mobilebutton.setAttribute('onclick' , 'mobileAsideToggle();');
  document.getElementsByTagName('body')[0].append(mobilebutton);
  const tbutt = document.createElement('a');
  const bbutt = document.createElement('a');
  tbutt.setAttribute('target', '_parent');
  bbutt.setAttribute('target', '_parent');
  tbutt.setAttribute('href', '#header');
  bbutt.setAttribute('href', '#footer');
  tbutt.innerHTML = '<label class="reader-navigate-header">上</label>';
  bbutt.innerHTML = '<label class="reader-navigate-footer">下</label>';
  document.body.appendChild(tbutt).appendChild(bbutt);
}
function badge(){
  const x = document.createElement("div");
  x.innerHTML = '<span style="text-align:center;"><br><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/media/buttons/button.gif" alt="88 x 31 badge" title="テケラレ"></a></span><textarea><a href="https://'+ siteURL +'"><img src="https://' + siteURL +'/media/buttons/button.gif" alt="88 x 31 badge" title="テケラレ"></a></textarea><subtext>this code allows updates across links.</subtext>';
  document.getElementsByTagName('aside')[0].appendChild(x);
}
function changeLog(){
  document.write('<article id="rss-feed"><h2>most recent change // 更新履歴</h2><div class="change-log"><script src="https://rss.bloople.net/?url=https%3A%2F%2F' + siteURL + '%2Frss%2Frss.xml&showtitle=false&type=js"></script></div></article>');
}
function galleryWidget(){
  const x = document.createElement('div');
  x.setAttribute('id', 'galleryWidget');
  x.innerHTML = '<h2 style="text-align:center;">&rarr; Newest In Gallery &larr;</h2><span style="text-align:center;"><a href="/art/gallery"><img src="https://' + siteURL + '/media/og_rtwrk/tadc-2026_06_08.png" class="image" style=""></a></span><quiet style="font-size:12px; padding:0px 0px 3px; 0px; text-align:center;">see more works @ <a href="https://' + siteURL + '/art/">/art/</a></quiet>';
  document.getElementsByTagName('aside')[0].appendChild(x);
}
function artSiteMap(){
  const x = document.createElement("div");
  x.setAttribute('class','asideMap');
  x.innerHTML = '<h2>tk_rtwrk</h2><ul class="ulSiteMap"><li><a href="https://' + siteURL + '/art/">portfolio</a></li><ul><li><a href="https://' + siteURL + '/art/gallery" target="_parent">gallery</a></li><li><a href="https://' + siteURL + '/art/sketches" target="_parent">sketches</a></li></ul><li><a href="https://' + siteURL + '/shop/" target="_parent">merch shop</a></li><ul><li><a href="https://' + siteURL + '/shop/testimonials" target="_parent">reviews</a></li><li><a href="https://' + siteURL + '/shop/booths" target="_parent">my booths</a></li></ul><li><a href="https://' + siteURL + '/shop/packmule" target="_parent">packmule</a></li><li><a href="https://' + siteURL + '/shop/terms" target="_parent">commission info</a></li><li><a href="https://www.patreon.com/cw/tekerare" target="_blank">patreon</a></li></ul>';
  document.getElementsByTagName('aside')[0].appendChild(x);
}
function eventWidget(){
  const x = document.createElement('div');
  x.setAttribute('id', 'eventsWidget');
  x.innerHTML = '<h2>Upcoming Booths</h2><div id="eventsList"><ol><li>nostalgia con @ htx<br>(oct 2-4)</li><li>idv popup @ sugarland tx<br>(oct 10)</li><li><a href="https://www.instagram.com/monstermeadowmart/" target="_blank">monster meadow</a> @ POST<br>(dec 19-20)</li><strike><li>idv popup @ sugarland tx<br>(july 4)</li><li>tadc fan popup @ sugarland tx<br>(june 27 - 28)</li><li>kimokawaii @ conroe tx<br>(june 06-07)</li><li>artist alley houston part 2<br>(april 18 - 19)</li><li>artist alley houston<br>(jan 31 10am - 5pm)</li><li>zakicon @ friendswood tx<br>(jan 09-11)</strike></li></ol></div><p style="text-align:end;">visit my <a href="https://' + siteURL + '/shop/" target="_parent">/shop/</a></p>';
  document.getElementsByTagName('aside')[0].appendChild(x);
}
function browsePosts(){
  const x = document.createElement("div");
  x.innerHTML = '<h2>Browse Site</h2><ul class="ulSiteMap"><li><a href="https://' + siteURL + '">home</a></li><li><a href="https://' + siteURL + '/shop/">shop</a></li><li><a href="https://' + siteURL + '/art/">art</a></li><li><a href="https://' + siteURL + '/blog/">blog</a></li><li><a href="https://' + siteURL + '/mu/">music</a></li><li><strike>shrines</strike></li><li><a href="https://' + siteURL + '/video/">video</a></li><ul><li><a href="https://' + siteURL + '/video/stream">stream</a></li></ul><li><a href="https://' + siteURL + '/update">update</a></li><ul><li><a href="https://' + siteURL + '/rss/rss.xml">rss</a></li></ul><li><a href="https://' + siteURL + '/contact">contact</a></li><li><a href="https://' + siteURL + '/about">about</a></li></ul><br>';
  document.getElementsByTagName('aside')[0].appendChild(x);
}
function asideMap(){
  browsePosts();
  badge();
}
window.onload = function(){
  const header = document.createElement('span');
  header.innerHTML = '<a href="https://'+ siteURL +'">tekerare</a>';
  document.getElementsByTagName('header')[0].appendChild(header);
  const titleLink = document.createElement('a');
  titleLink.setAttribute('style','margin:0px 7px 0px 0px;');
  titleLink.setAttribute('href','.');
  titleLink.innerHTML = '<img src="https://' + siteURL + '/media/icons/h1_redirect.png" alt="&larr;" title="&larr; go back">';
  document.getElementsByTagName('h1')[0].prepend(titleLink);
  const footer = document.createElement('span');
  footer.innerHTML = 'intended for adults. mackerelfarming since 2019.';
  document.getElementsByTagName('footer')[0].appendChild(footer);
  readerUI();
}