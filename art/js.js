function guLogMap(){
  document.write('<a href="https://' + siteURL + '/art/" target="_parent"><img src="https://' + siteURL + '/media/label/gristlepod_spin.gif" alt="*GRISTLEPOD*" style="max-width:180px; image-rendering:crisp-edges;"></a><br><div class="altm1"><ol><li><a href="https://' + siteURL + '/art/gallery" target="_parent">gallery</a></li><li><a href="https://' + siteURL + '/art/sketches" target="_parent">sketches</a></li><li><a href="https://' + siteURL + '/shop/" target="_parent">shop</a></li></ol></div>');
  eventWidget();
}
window.onload = function(){
  const x = document.createElement("span");
  x.setAttribute("style", "text-align:center;");
  x.innerHTML = '<img src="../media/label/gristlepod_180.png" alt="">';
  document.getElementById('mainWrp').appendChild(x);
}