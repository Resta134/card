// script.js
function nextStep(step) {
  document.querySelectorAll('.step').forEach(div => div.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');

  if (step === 3) {
    typeWriterEffect("doa-text", "salam kenal umi, aku resta temen nya haidar.");
  } else if (step === 4) {
    typeWriterEffect("harapan-text", "kata hedar hari ini ultah nya umi yaaa.");
  } else if (step === 5) {
    typeWriterEffect("pesan-text", "Selamat ulang tahun umi...");
  } else if (step === 6) {
    typeWriterEffect("pesan1-text", "Semoga sehat selalu wish you all the best 😊");
  }
}

function typeWriterEffect(elementId, text, speed = 50) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  element.style.width = 'auto';
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriterEffect("hb-text", "Happy Birthday Umi Hedarrr!");
});
