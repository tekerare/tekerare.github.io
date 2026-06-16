window.onload = function(){
  const x = document.getElementById('asideWrp');
  x.innerHTML = '<div><p>アメイジング<br>デジタル・サーカス<br>fanpage curated by tkr<br>original series property of gooseworx</p><h2>Browse</h2><ul class="ulSiteMap"><li><a href="https://' + siteURL + '/pierrotbuckshot/">Entrance</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/funnybunny" target="_parent">What Is FunnyBunny?</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/merch">My Merchandise Gallery</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/diyfashion">DIY Fashion Projects</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/cosplay">Cosplay Adventures</a></li><ul><li><a href="https://' + siteURL + '/pierrotbuckshot/con_nchouston2026">Nostalgia Con 2026</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/con_avhouston2026">Animeverse 2026</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/con_af2025">Anime Frontier 2025</a><li><a href="https://' + siteURL + '/pierrotbuckshot/con_TSUMICON2025">Tsumicon 2025</a></li></li></ul><li><a href="https://' + siteURL + '/pierrotbuckshot/fanart">Fanart Gallery</a></li><li><a href="https://' + siteURL + '/pierrotbuckshot/music">FunnyBunny Playlist</a></li></ul></div><h2>Blog Stats</h2><div><p><b>Created since:</b> 2025.09.10</div>';
  const jas = document.createElement('span');
  jas.innerHTML = '<a href="https://'+ siteURL +'/shop/"><img src="../media/prmo/maidjaxstandee.jpg" alt="a picture of a fanmade acrylic jax standee created by gristlepod" title="buy the maid jax standee here!" style="margin:3px;"></a>';
  document.getElementById('asideWrp').appendChild(jas);
  const z = document.createElement('span');
  z.setAttribute('style' , 'cursor:not-allowed;');
  z.innerHTML = '<img src="ui/nsfwbanner.gif" alt="" title="(art by tkr)" style="margin:3px;">';
  document.getElementById('asideWrp').appendChild(z);
  const locationTitle = document.getElementById('windowLocation');
  locationTitle.innerHTML = 'PIERROT BUCKSHOT - jax x pomni';
}