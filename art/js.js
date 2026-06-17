function guLogMap(){
  const x = document.getElementById('asideWrp');
  x.innerHTML = '<a href="https://' + siteURL + '/art/" target="_parent"><img src="https://' + siteURL + '/media/label/gristlepod_spin.gif" alt="*GRISTLEPOD*" style="max-width:180px; image-rendering:crisp-edges;"></a>';
  artSiteMap();
  eventWidget();
}
window.onload = function(){
  const x = document.createElement("span");
  x.setAttribute("style", "text-align:center;");
  x.innerHTML = '<img src="../media/label/gristlepod_180.png" alt="">';
  document.getElementById('mainWrp').appendChild(x);
}