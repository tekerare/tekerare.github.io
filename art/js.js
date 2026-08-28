function guLogMap(){
  const x = document.getElementById('asideWrp');
  x.innerHTML = '<a href="https://' + siteURL + '/art/" target="_parent"><img src="https://' + siteURL + '/media/label/gristlepod_spin.gif" alt="*GRISTLEPOD*" style="max-width:180px; image-rendering:crisp-edges;"></a>';
  artSiteMap();
  eventWidget();
  browsePosts();
}