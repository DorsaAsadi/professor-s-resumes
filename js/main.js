
//menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



//fetch data

let allprofs = [];

fetch("http://localhost:3000/professors")   //data address
    .then(response => {
      console.log("دریافت پاسخ:", response);
      return response.json();
    })
    .then(data => {  //گرفتن دیتا از fetch
      console.log("داده‌ها:", data);
      allprofs = data;  //ذخیره دیتا کامل
      setTimeout(() => {
        renderProfs(allprofs);
      }, 1500);

    });

//تابع نمایش کارتها
function renderProfs(data){
  console.log("داده‌ای که renderProfs گرفت:", data);
  const container = document.getElementById('prof-list');
  container.innerHTML = '';

  if(data.length === 0){
    const msg = document.createElement('p');
    msg.innerText = 'جستجوی مورد نظر یافت نشد';
    msg.className = 'text-center text-red-500 font-bold mt-8';
    container.appendChild(msg);
    return;
  }

  data.forEach(prof => {
    const card = document.createElement('div');
    card.className = 'prof-card '; 

    card.innerHTML = `
      <img src="${prof.profile_image}" alt="prof-image" class="prof-img" loading="lazy">
      <h2 class="prof-name">${prof.name}</h2>
      <p class="prof-rank">${prof.position} , ${prof.department}</p>
      <a href="prof-profile/profile.html?id=${prof.id}" class="show-profile">نمایش پروفایل</a>
    `;


    container.appendChild(card);
  });

  

}



//search and filter
document.getElementById('search-btn').addEventListener('click', () => {
  const searchVal = document.getElementById('search-input').value.trim();
  const deptVal = document.getElementById('filter-department').value;

  const filtered = allprofs.filter(prof => {
    const matchName = prof.name.includes(searchVal);
    const matchDept = deptVal === '' || prof.department === deptVal;
    return matchName && matchDept;
  });

  renderProfs(filtered);

  // smooth scroll
  document.getElementById("prof-list").scrollIntoView({ behavior: "smooth" });
});




//loading-skeletons
document.addEventListener("DOMContentLoaded", () => {
  const skeletonContainer = document.getElementById("loading-skeletons");
  const profList = document.getElementById("prof-list");

  // مخفی کردن کارت‌های واقعی تا داده لود بشه
  profList.classList.add("hidden");

  setTimeout(() => {
  // بعد از 1.5 ثانیه، اسکلت حذف و کارت‌ها نشون داده میشن
    skeletonContainer.remove();
    profList.classList.remove("hidden");
    console.log("اسکلتون حذف شد، profList نمایش داده شد");

    }, 1500);
});



//back to top button
const backToTopBtn = document.getElementById('backToTop');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


