
function openFilter() {
  document.getElementById("myBtnContainer").style.height = "600px";
}

function closeFilter() {
  document.getElementById("myBtnContainer").style.height = "0px";
}
$(document).ready(function() {

$(function(){
  $.get("data/videos.json", function(videos) {
    $.get("tpl/video.tpl.html", function(source){
      var template = Handlebars.compile(source);
      var html = template(videos);
      $(".container").append(html);
    });
  });
});
});
