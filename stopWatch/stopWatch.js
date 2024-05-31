let min = 0;
let sec = 0;
let ms = 0;
let timmer;
function watch() {
  if (val) {
    ms++;

    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
      ms = 0;
    }
  }

  let mins = min;
  let secs = sec;
  let mss = ms;

  if (min < 10) {
    mins = "0" + min;
  }
  if (sec < 10) {
    secs = "0" + sec;
  }
  if (ms < 10) {
    mss = "0" + ms;
  }

  document.getElementById("min").innerHTML = mins;
  document.getElementById("sec").innerHTML = secs;
  document.getElementById("ms").innerHTML = mss;

  timmer = setTimeout(watch, 10);
}

function startWatch() {
  val = true;
  watch();
}

function stopWatch() {
  val = false;
  clearTimeout(timmer);
}
function resetWatch() {
  val = false;
  min = 0;
  sec = 0;
  ms = 0;
  document.location.reload();
}
