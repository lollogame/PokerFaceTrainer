const images = [
  'img/1.png?w=1600&q=90',
  'img/2.png?w=1600&q=90',
  'img/3.png?w=1600&q=90',
  'img/4.png?w=1600&q=90',
  'img/5.png?w=1600&q=90',
  'img/6.png?w=1600&q=90',
  'img/7.png?w=1600&q=90',
];

const sounds = [
  'sfx/s1.mp3',
  'sfx/s2.mp3',
  'sfx/s3.mp3',
  'sfx/s4.mp3',
  'sfx/s5.mp3',
];

let usedIndices = [];
 
function show(id) {
  ['screen-start', 'screen-countdown', 'screen-image'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}
 
function startCountdown() {
  show('screen-countdown');
  let count = 3;
  const el = document.getElementById('countdown-number');
  el.textContent = count;
  el.classList.add('num-enter');
 
  const tick = setInterval(() => {
    el.classList.remove('num-enter');
    void el.offsetWidth;
    count--;
    if (count === 0) {
      clearInterval(tick);
      el.textContent = 'GO';
      el.classList.add('num-enter');
      setTimeout(showImage, 600);
    } else {
      el.textContent = count;
      el.classList.add('num-enter');
    }
  }, 1000);
}
 
function getRandomIndex() {
  if (usedIndices.length === images.length) usedIndices = [];
  let idx;
  do { idx = Math.floor(Math.random() * images.length); } while (usedIndices.includes(idx));
  usedIndices.push(idx);
  return idx;
}
 
let usedSoundIndices = [];
 
function getRandomSound() {
  if (usedSoundIndices.length === sounds.length) usedSoundIndices = [];
  let idx;
  do { idx = Math.floor(Math.random() * sounds.length); } while (usedSoundIndices.includes(idx));
  usedSoundIndices.push(idx);
  return new Audio(sounds[idx]);
}
 
function showImage() {
  const idx = getRandomIndex();
  const img = document.getElementById('photo');
  img.src = images[idx];
  img.style.animation = 'none';
  void img.offsetWidth;
  img.style.animation = '';
  document.getElementById('corner-count').textContent = `photo ${usedIndices.length} / ${images.length}`;
  show('screen-image');
  getRandomSound().play();
}
 
function nextImage() {
  startCountdown();
}
 