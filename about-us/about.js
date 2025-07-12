//menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});





// آرایه‌ای شامل آدرس عکس‌هایی که قراره در اسلایدر نمایش داده بشن
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
];

// اندیسی که مشخص می‌کنه الان کدوم عکس در حال نمایش هست
let currentIndex = 0;

// گرفتن المنت‌های HTML با آیدی مشخص
const sliderImage = document.getElementById('slider-image'); // تصویر فعلی اسلایدر
const prevBtn = document.getElementById('prev-btn');         // دکمه قبلی
const nextBtn = document.getElementById('next-btn');         // دکمه بعدی

// تابعی برای نمایش عکس با اندیسی که براش فرستاده میشه
function showImage(index) {
  sliderImage.src = images[index];  // تغییر سورس عکس به تصویر جدید
}

// هندلر برای دکمه بعدی
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  showImage(currentIndex);
});

// هندلر برای دکمه قبلی
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  showImage(currentIndex);
});
