const $ = s => document.querySelector(s);
const nav = ['Home','About','Journey','Skills','Projects','Services','Experience','Contact'];
nav.forEach(n => {
  const a = `<a href="#${n.toLowerCase()}" class="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400">${n}</a>`;
  $('#links').insertAdjacentHTML('beforeend', `<li>${a}</li>`);
  $('#mobile').insertAdjacentHTML('beforeend', `<li>${a}</li>`);
});
$('#burger').onclick = () => { const m = $('#mobile'); const open = m.classList.toggle('hidden') === false; $('#burger').setAttribute('aria-expanded', open); $('#burger').textContent = open ? '✕' : '☰'; };
$('#mobile').onclick = e => { if (e.target.tagName === 'A') { $('#mobile').classList.add('hidden'); $('#burger').textContent = '☰'; } };
$('#theme').onclick = () => { const d = document.documentElement.classList.toggle('dark'); try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch (e) {} };
$('#yr').textContent = new Date().getFullYear();

const chip = 'px-3.5 py-2 rounded-lg text-sm font-medium border ';
['HTML5','CSS3','JavaScript','Tailwind CSS','Bootstrap','Responsive Web Design','WordPress','Git & GitHub','MS Office / Excel',].forEach(s =>
  $('#core').insertAdjacentHTML('beforeend', `<span class="${chip}bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 hover:-translate-y-0.5 transition">${s}</span>`));
['Basic Node.js','Basic React','Basic MongoDB','Canva','AI Tools & Prompt Writing'].forEach(s =>
  $('#basic').insertAdjacentHTML('beforeend', `<span class="${chip}bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 transition">${s}</span>`));

const projects = [
  ['E-Commerce Product Website','Product listing with search, category filtering, a shopping cart UI and a fully responsive layout.',['HTML','CSS','JavaScript','Tailwind CSS'],'🛒','from-indigo-500 to-violet-500'],
  ['Personal Portfolio Website','Responsive portfolio with mobile menu toggle, smooth navigation and a contact section.',['HTML','CSS','JavaScript','Tailwind CSS'],'💼','from-sky-500 to-indigo-500'],
  ['AquaCare Tank Cleaning Website','Responsive service-business site with service sections, booking/contact CTA, and WhatsApp and Call buttons.',['HTML','CSS','JavaScript','Tailwind CSS'],'💧','from-cyan-500 to-blue-500'],
  ['WordPress Business Website','Custom-layout business site with service pages, contact form, responsive design and SEO-friendly structure.',['WordPress','Responsive Design','SEO Basics'],'🌐','from-emerald-500 to-teal-500']
];
projects.forEach((p,i) => $('#proj').insertAdjacentHTML('beforeend', `
<article class="card3d tilt relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"><div class="shine"></div>
  <div class="relative h-44 overflow-hidden bg-gradient-to-br ${p[4]} flex items-center justify-center text-6xl" role="img" aria-label="${p[0]} preview">${p[3]}<img src="images/project-${i+1}.jpg" alt="${p[0]} screenshot" class="absolute inset-0 w-full h-full object-cover" onerror="this.remove()"></div>
  <div class="p-5">
    <h3 class="font-semibold text-lg text-slate-900 dark:text-white">${p[0]}</h3>
    <p class="mt-2 text-sm leading-relaxed">${p[1]}</p>
    <div class="mt-3 flex flex-wrap gap-1.5">${p[2].map(t => `<span class="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800">${t}</span>`).join('')}</div>
    <div class="mt-5 flex gap-3">
      <a href="#" data-demo class="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Live Demo</a>
      <a href="#" data-gh class="px-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800">GitHub</a>
    </div>
  </div>
</article>`));

[['Responsive Website Development','Sites that work smoothly on mobile, tablet and desktop.'],['Frontend Development','Clean, maintainable HTML, CSS and JavaScript.'],['Landing Page Development','Focused pages designed to convert visitors.'],['WordPress Website Development','Business sites on WordPress with custom layouts.'],['Website UI Development','Tidy, consistent interfaces with good spacing and hierarchy.'],['Website Maintenance','Updates, fixes and small improvements for existing sites.']]
.forEach(s => $('#svc').insertAdjacentHTML('beforeend', `<div class="card3d tilt relative p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"><div class="shine"></div><h3 class="font-semibold text-slate-900 dark:text-white">${s[0]}</h3><p class="mt-2 text-sm">${s[1]}</p></div>`));

$('#send').onclick = () => {
  const n = $('#fn').value.trim(), e = $('#fe').value.trim(), s = $('#fs').value.trim(), m = $('#fm').value.trim();
  if (!n || !e || !s || !m) { $('#msg').classList.remove('hidden'); return; }
  $('#msg').classList.add('hidden');
  location.href = `mailto:shailesh77030@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(m + '\n\n— ' + n + ' (' + e + ')')}`;
};

const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) x.target.classList.add('show'); }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


/* ---------- Extras: typing, counters, bars, gallery, 3D tilt, glow ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// typing effect
const roles = ['responsive websites','clean UI with Tailwind','interactive JavaScript apps','WordPress business sites'];
let ri = 0, ci = 0, del = false;
(function type(){
  const w = roles[ri], t = $('#typed');
  if (reduce) { t.textContent = w; return; }
  t.textContent = w.slice(0, ci += del ? -1 : 1);
  let d = del ? 35 : 75;
  if (!del && ci === w.length) { del = true; d = 1400; }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 350; }
  setTimeout(type, d);
})();

// marquee of skills
const mqItems = ['HTML5','CSS3','JavaScript','Tailwind CSS','Bootstrap','WordPress','Git & GitHub','Node.js','MongoDB','Responsive Design','Canva'];
$('#mq').innerHTML = [...mqItems, ...mqItems].map(x => `<span class="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap">${x}</span>`).join('');

// skill bars
[['HTML5 / CSS3',90],['JavaScript',75],['Tailwind CSS',85],['Responsive Design',90]].forEach(s =>
  $('#bars').insertAdjacentHTML('beforeend', `<div><div class="flex justify-between text-sm font-medium mb-1.5"><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><span data-w="${s[1]}"></span></div></div>`));

// gallery (images/gallery-1.jpg ... gallery-6.jpg)
// const gg = ['from-indigo-500 to-violet-500','from-sky-500 to-indigo-500','from-cyan-500 to-blue-500','from-emerald-500 to-teal-500','from-fuchsia-500 to-pink-500','from-amber-500 to-orange-500'];
// gg.forEach((c, i) => $('#gal').insertAdjacentHTML('beforeend', `<div class="gal tilt card3d bg-gradient-to-br ${c}"><span>Image ${i+1}</span><img src="images/gallery-${i+1}.jpg" alt="Gallery image ${i+1}" loading="lazy" onerror="this.remove()"><div class="shine"></div></div>`));

// profile photo preview (local only)
$('#pick').onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { const im = $('#profileImg'); im.src = r.result; im.style.display = 'block'; }; r.readAsDataURL(f); };

// reveal: counters + bars
const io2 = new IntersectionObserver(es => es.forEach(x => { if (!x.isIntersecting) return; io2.unobserve(x.target);
  if (x.target.dataset.count) { const end = +x.target.dataset.count, t0 = performance.now(); (function f(t){ const p = Math.min((t - t0) / 1200, 1); x.target.textContent = Math.round(end * p) + (p === 1 ? x.target.dataset.suffix : ''); if (p < 1) requestAnimationFrame(f); })(t0); }
  else x.target.style.width = x.target.dataset.w + '%';
}), { threshold: .5 });
document.querySelectorAll('[data-count],[data-w]').forEach(el => io2.observe(el));

// 3D tilt + light shine
if (!reduce && matchMedia('(hover:hover)').matches) {
  document.querySelectorAll('.tilt').forEach(el => {
    const max = el.id === 'photo' ? 14 : 8;
    el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(.5 - y) * max}deg) rotateY(${(x - .5) * max}deg) translateY(-4px)`;
      el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%'); });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });
  const g = $('#glow'); addEventListener('mousemove', e => { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });
}

// scroll progress
addEventListener('scroll', () => { const h = document.documentElement; $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });


/* ---------- Journey timeline ---------- */
const journey = [

  ['2021 – 2025','B.Tech, Information Technology','Abdul Kalam Technical University','Learned programming, then HTML, CSS, JavaScript and Tailwind. 7.2 CGPA.','🎓'],
  ['2025','Projects & Practice','E-Commerce site, Service Booking app','Built real projects: cart logic, filtering, forms, plus Node.js and MongoDB basics.','🛠️'],
  ['Dec 2025 – Jul 2026','Web Developer','Alphaxite Technologies','Shipped responsive sites, fixed cross-browser bugs and helped with deployment.','💼'],
  ['Now','Open to new roles','Lucknow, Uttar Pradesh','Looking for a frontend role where I can keep growing and ship great UI.','🚀']
];
journey.forEach((x, i) => {
  const right = i % 2;
  $('#jr').insertAdjacentHTML('beforeend', `<div class="jin ${right ? 'r' : ''} relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 mb-10 last:mb-0"><span class="jdot"></span>
  <div class="card3d tilt relative p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${right ? 'md:col-start-2' : 'md:col-start-1'}"><div class="shine"></div>
    <div class="flex items-center justify-between gap-3"><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">${x[0]}</span><span class="text-2xl">${x[4]}</span></div>
    <h3 class="mt-3 font-semibold text-lg text-slate-900 dark:text-white">${x[1]}</h3>
    <p class="text-sm text-indigo-600 dark:text-indigo-400 font-medium">${x[2]}</p>
    <p class="mt-2 text-sm leading-relaxed">${x[3]}</p></div></div>`);
});
const io3 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io3.unobserve(e.target); } }), { threshold: .2 });
document.querySelectorAll('.jin').forEach(el => io3.observe(el));
function jProgress(){ const r = $('#jr').getBoundingClientRect(), vh = innerHeight; $('#jfill').style.height = Math.max(0, Math.min(r.height, vh * .6 - r.top)) + 'px'; }
addEventListener('scroll', jProgress, { passive: true }); jProgress();
if (!reduce && matchMedia('(hover:hover)').matches) document.querySelectorAll('#jr .tilt').forEach(el => {
  el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 8}deg) translateY(-4px)`; el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%'); });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});
