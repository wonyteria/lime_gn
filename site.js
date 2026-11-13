const dialog = document.querySelector('dialog');
const enlarged = dialog.querySelector('img');
let opener;
document.querySelectorAll('.zoom').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    enlarged.src = link.href;
    enlarged.alt = link.querySelector('img').alt;
    dialog.showModal();
  });
});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());

const hero = document.querySelector('.hero');
const heroPhoto = hero.querySelector('img');
const heroCaption = hero.querySelector('figcaption');
const heroHeading = hero.querySelector('h1');
const heroLead = hero.querySelector('.lead');
const slides = [
  ['IMG_7558.jpg', '라임하우스 지하 카페테리아', '아침부터 챙겨주는', '학사형 원룸텔', '지하 카페테리아 조식과', '세탁·모닝콜 서비스를 이용하세요.'],
  ['KakaoTalk_20220105_231420612.jpg', '라임하우스 세탁실', '세탁은 가볍게,', '공부에 집중할 시간은 더 길게', '지하 세탁실에 세탁기와 건조기가', '각각 4대씩 마련되어 있습니다.'],
  ['사진2-1-1.jpg', '라임하우스 건물 외관', '강남역 4번 출구에서', '도보 5분', '서울 강남구 역삼로5길 5', '라임하우스 강남역점'],
  ["IMG_7561.jpg", "카페테리아 입구 쪽 통로", "지하 카페테리아로", "이어지는 통로", "라임하우스 지하에서", "카페테리아를 이용하실 수 있습니다."],
  ["KakaoTalk_20220105_231347538.jpg", "라임하우스 조식 코너", "카페테리아에서", "가볍게 아침을", "토스트와 시리얼, 우유 등", "간단한 아침 식사를 제공합니다."],
  ["Untitled-6.jpg", "라임하우스 객실 복도", "객실로 이어지는", "라임하우스 복도", "미니룸과 미니원룸을", "객실 둘러보기에서 확인하세요."]
];
let slideIndex = 0;
function showSlide(index) {
  slideIndex = index;
  const [file, caption, title, titleEnd, lead, leadEnd] = slides[index];
  heroPhoto.src = 'assets/' + file;
  heroPhoto.alt = caption;
  heroCaption.textContent = caption;
  heroHeading.replaceChildren(title, document.createElement('br'), titleEnd);
  heroLead.replaceChildren(lead, document.createElement('br'), leadEnd);
} 
slides.slice(1).forEach(([file]) => { const preload = new Image(); preload.src = 'assets/' + file; });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => showSlide((slideIndex + 1) % slides.length), 7000);
}
