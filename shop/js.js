function guLogMap(){
  document.write('<a href="https://' + siteURL + '/shop/" target="_parent"><img src="https://' + siteURL + '/art/ui/sdtitle.gif" alt="*GRISTLEPOD*" style="filter: drop-shadow(0 0 .2rem #ffffff);max-width:180px; image-rendering:crisp-edges;"></a>');
  artSiteMap();
  eventWidget();
}
window.onload = function(){
  const x = document.createElement("span");
  x.setAttribute("style", "text-align:center;");
  x.innerHTML = '<img src="../media/label/gristlepod_180.png" alt="">';
  document.getElementById('mainWrp').appendChild(x);
}