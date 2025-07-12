
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});





const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('http://localhost:3000/professors')
  .then(res => res.json())
  .then(data => {
    const prof = data.find(p => p.id == id);
    if (prof) {
      document.getElementById('name').innerText = prof.name;
      document.getElementById('email').innerText = prof.email;
      document.getElementById('department').innerText = prof.department;
      document.getElementById('position').innerText = prof.position;
      document.getElementById('profile_image').src = prof.profile_image;
      document.getElementById('about').innerText = prof.about;
      

      //دروس تدریسی
      const coursesUI  = document.getElementById('courses');
      coursesUI.innerHTML = "";
      prof.courses.forEach(course => {
        const li = document.createElement('li');
        li.innerText = course;
        coursesUI.appendChild(li);
      });


      //مقالات
      const publishUI = document.getElementById('publications');
      publishUI.innerHTML = '';
      prof.publications.forEach( pub => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'resume-link';
        a.innerText = pub;
        li.appendChild(a);
        publishUI.appendChild(li);
      });


      //رزومه
      const resumeUl = document.getElementById("resume");
      resumeUl.innerHTML = "";
      const resumeLi = document.createElement("li");
      const resumeA = document.createElement("a");
      resumeA.href = prof.resume;
      resumeA.className = "resume-link";
      resumeA.innerText = "دانلود رزومه";
      resumeLi.appendChild(resumeA);
      resumeUl.appendChild(resumeLi);

    } else {

      document.body.innerHTML = '<p>استاد مورد نظر یافت نشد.</p>';
    }
  });
