function guLogMap(){
  document.write('<a href="https://' + siteURL + '/shop/" target="_parent"><img src="https://' + siteURL + '/art/ui/sdtitle.gif" alt="*GRISTLEPOD*" style="filter: drop-shadow(0 0 .2rem #ffffff);max-width:180px; image-rendering:crisp-edges;"></a><br><div class="altm1"><ol><li><a href="https://' + siteURL + '/art/" target="_parent">portfolio</a></li><li><a href="https://' + siteURL + '/shop/terms" target="_parent">terms</a></li><li><a href="https://' + siteURL + '/shop/timeline" target="_parent">booths</a></li><li><a href="https://ko-fi.com/tekerare" target="_parent">ko-fi store</a><span style="font-size:12px;">recommended for purchasing more than 1 item</span> </li></ol></div>');
  eventWidget();
}
window.onload = function(){
  const x = document.createElement("span");
  x.setAttribute("style", "text-align:center;");
  x.innerHTML = '<img src="../media/label/gristlepod_180.png" alt="">';
  document.getElementById('mainWrp').appendChild(x);
}