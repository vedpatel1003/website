$("#button").click(function() {  
  $("#box form").toggle("slow");
  return false;
});

<script>
// Get the video
var video = document.getElementById("Education_video");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>