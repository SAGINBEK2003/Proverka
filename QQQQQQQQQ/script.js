const Bce = document.getElementsByClassName("btn__obshye")[0];
const BceBoxs = document.getElementsByClassName("donates-obshye")[0];
const Bw = document.getElementsByClassName("btn__bedwars")[0];
const BwBoxs = document.getElementsByClassName("donates-bedwars")[0];
const Bridge = document.getElementsByClassName("btn__the-bridge")[0];
const BridgeBoxes = document.getElementsByClassName("donates-the-bridge")[0];
const TntRun = document.getElementsByClassName("btn__tnt-tun")[0];
const TntRunBoxs = document.getElementsByClassName("donates-tnt-run")[0];

Bce.onclick = function() {
  BceBoxs.style.display = "block";
  BwBoxs.style.display = "none";
  BridgeBoxes.style.display = "none";
  TntRunBoxs.style.display = "none";
}

Bw.onclick = function() {
  BceBoxs.style.display = "none";
  BwBoxs.style.display = "block";
  BridgeBoxes.style.display = "none";
  TntRunBoxs.style.display = "none";
}

Bridge.onclick = function() {
  BceBoxs.style.display = "none";
  BwBoxs.style.display = "none";
  BridgeBoxes.style.display = "block";
  TntRunBoxs.style.display = "none";
}
TntRun.onclick = function() {
  BceBoxs.style.display = "none";
  BwBoxs.style.display = "none";
  BridgeBoxes.style.display = "none";
  TntRunBoxs.style.display = "block";
}




$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });
  });