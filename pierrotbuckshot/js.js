window.onload = function(){
  const x = document.getElementById('lWrp');
  x.innerHTML = '<div><p>アメイジング<br>デジタル・サーカス<br>2023.10.13<br>Fanpage curated By TKR<br>Original Work By Gooseworx</p></div><a href="."><img src="ui/3d_funnybunny.gif" alt="Spinning &quot;Pierrot Buckshot&quot; Gif." title="RETURN TO PORTAL" style="margin:0px auto -2px;"></a><h4>Blog - All Posts</h4><div><table><tbody><tr><td><a href="funnybunny">What Is FunnyBunny?</a></td></tr><tr><td><a href="dsotm_trip">Trip To DSOTM</a></td></tr><tr><td><a href="cosplay">Cosplay Adventures</a></td></tr><tr><td><a href="merch">My Merchandise Gallery</a></td></tr><tr><td><a href="fanart">Fanart Gallery</a></td></tr><tr><td><a href="funnybunnyplaylist">FunnyBunny  Playlist</a></td></tr></tbody></table><h4>Soft Doujin</h4><table><tbody><tr><td><a href="jaxeggcomic">Jax Egg</a></td></tr><tr><td><a href="maiddresscomic">Maid Dress</a></td></tr></tbody></table></div><h4>Blog Stats</h4><div><p><b>Created since:</b> 2025.09.10<br><b>Favorite Character:</b> Pomni</p></div><a href="https://web.archive.org/web/20040730071408fw_/http://omoh.clayangel.net/" target="_blank"><img src="../ui/images/yaoi_yuri.jpg" alt="Yaoi &amp; yuri support on the web - open your mind, open your heart." title="Yaoi &amp; yuri support on the web - open your mind, open your heart."></a>';
  const z = document.createElement('a');
  z.setAttribute('href', '.');
  z.innerHTML = '<img src="ui/3d_funnybunny.gif" alt="Spinning &quot;Pierrot Buckshot&quot; Gif." title="RETURN TO PORTAL" style="margin:0px auto -2px;">';
  document.getElementsByTagName('main')[0].prepend(z);
  const y = document.getElementById('windowLocation');
  y.innerHTML = 'PIERROT BUCKSHOT - funnybunny web portal @ texaskissrhinestone';
}