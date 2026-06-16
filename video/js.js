window.onload = function(){
  const x = document.getElementById('asideWrp');
  x.innerHTML = '<span style="text-align:center;"><a href="."><img src="ui/sdtitle.png" alt=""></a></span><br><ul class="ulSiteMap"><li><a href="https://' + siteURL + '/video/" target="_parent">All Videos</a></li><li><a href="https://' + siteURL + '/video/stream/" target="_parent">Stream</a></li></ul>';
}