window.onload = function(){
  const x = document.getElementById('rWrp');
  x.innerHTML = '<div><p>アメイジング<br>デジタル・サーカス<br>2023.10.13<br>Fanpage curated By TKR<br>Original Work By Gooseworx</p></div><span style="text-align:center;"><a href="https://' + siteURL + '/pierrotbuckshot/"><img src="ui/3d_funnybunny.gif" alt="Spinning &quot;Pierrot Buckshot&quot; Gif." title="RETURN TO PORTAL" style="margin:0px auto -2px;"></a></span><div><h2>Blog - All Posts</h2><table><tbody><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/funnybunny">What Is FunnyBunny?</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/dsotm_trip">Trip To DSOTM</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/merch">My Merchandise Gallery</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/fanart">Fanart Gallery</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/funnybunnyplaylist">FunnyBunny  Playlist</a></td></tr></tbody></table></div><div><h2>Conventions</h2><table><tbody><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/cosplay">Cosplay Showcase</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/af2025">Anime Frontier 2025</a></td></tr><tr><td><a href="https://' + siteURL + '/pierrotbuckshot/tsumicon2025">TsumiCon 2025</a></td></tr></tbody></table></div><h2>Blog Stats</h2><div><p><b>Created since:</b> 2025.09.10</div>';
  const z = document.createElement('span');
  z.setAttribute('style' , 'cursor:not-allowed;');
  z.innerHTML = '<img src="ui/nsfwbanner.gif" alt="" title="(art by tkr)" style="margin:3px;">';
  document.getElementById('rWrp').appendChild(z);
  const locationTitle = document.getElementById('windowLocation');
  locationTitle.innerHTML = 'PIERROT BUCKSHOT - jax x pomni';
}