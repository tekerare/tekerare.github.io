window.onload = function(){
  const y = document.getElementById('asideWrp');
  y.innerHTML = '<a href="https://' + siteURL + '/shop/" target="_parent"><img src="https://' + siteURL + '/media/label/gristlepod_spin.gif" alt="*GRISTLEPOD*" style="filter: drop-shadow(0 0 .2rem #ffffff);max-width:180px; image-rendering:crisp-edges;"></a>';
  artSiteMap();
  eventWidget();
  browsePosts();
}