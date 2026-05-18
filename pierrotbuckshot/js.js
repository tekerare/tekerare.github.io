window.onload = function(){
  const x = document.getElementById('rWrp');
  x.innerHTML = '<div><p>アメイジング<br>デジタル・サーカス<br>2023.10.13<br>Fanpage curated By TKR<br>Original Work By Gooseworx</p></div><span style="text-align:center;"><a href="https://' + siteURL + '/pierrotbuckshot/"><img src="ui/3d_funnybunny.gif" alt="Spinning &quot;Pierrot Buckshot&quot; Gif." title="RETURN TO PORTAL" style="margin:0px auto -2px;"></a></span><div><h2>Blog - All Posts</h2><table><tbody><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/funnybunny">What Is FunnyBunny?</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/merch">My Merchandise Gallery</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/diyfashion">DIY Fashion Projects</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/#cosplayadventures">Cosplay Adventures</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/fanart">Fanart Gallery</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/funnybunnyplaylist">FunnyBunny Playlist</a></td></tr></table></div><h2>Blog Stats</h2><div><p><b>Created since:</b> 2025.09.10</div>';
  const jas = document.createElement('span');
  jas.innerHTML = '<a href="https://'+ siteURL +'/shop/"><img src="../media/prmo/maidjaxstandee.jpg" alt="a picture of a fanmade acrylic jax standee created by gristlepod" title="buy the maid jax standee here!" style="margin:3px;"></a>';
  document.getElementById('rWrp').appendChild(jas);
  const z = document.createElement('span');
  z.setAttribute('style' , 'cursor:not-allowed;');
  z.innerHTML = '<img src="ui/nsfwbanner.gif" alt="" title="(art by tkr)" style="margin:3px;">';
  document.getElementById('rWrp').appendChild(z);
  const locationTitle = document.getElementById('windowLocation');
  locationTitle.innerHTML = 'PIERROT BUCKSHOT - jax x pomni';
}