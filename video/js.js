function videoAside(){
  const x = document.getElementsByTagName('aside')[0];
  x.innerHTML = '<span style="text-align:center;"><a href="."><img src="../media/label/muleviewer.png" alt="all my videos" class="animation-bob-in hover-rotate" style="width:100%;"></a><a href="https://'+ siteURL +'/video/stream"><img src="../media/label/quitterspark.png" alt="my stream" class="animation-bob-in hover-rotate" style="width:100%;"></a></span>';
  browsePosts();
}