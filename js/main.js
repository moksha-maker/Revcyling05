function avFb(el,i){el.outerHTML='<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="36" fill="'+(i%2?TE:OR)+'"/><circle cx="36" cy="28" r="12" fill="#fff"/><path d="M12 62q24-30 48 0" fill="#fff"/></svg>';}
const OR='#fc4b02',TE='#02819b';
// Dummy illustration generator: v = sunrise | paddy | sunset | hills
const FB2={beach:1,harbour:1,coconut:1,whale:1,lighthouse:1,roadside:1,tips:1};
function scene2(v,w,h){
const G={beach:['#ffe9c7','#ffb98a'],harbour:['#ffd7a6','#ff9a62'],coconut:['#cfeaf0','#ffe0b0'],whale:['#d3ebf3','#8cc7d8'],lighthouse:['#cfeaf0','#f1f7f9'],roadside:['#d8f0e2','#a6d9e2'],tips:['#d6eef3','#ffe6c8']}[v];
const sea=(y,c)=>`<rect y="${y}" width="800" height="${500-y}" fill="${c}"/><path d="M0 ${y+30}h800M0 ${y+65}h800M0 ${y+105}h800" stroke="#fff" stroke-opacity=".22" stroke-width="3"/>`;
const palm=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})" stroke="#04323c" stroke-width="7" fill="none" stroke-linecap="round"><path d="M0 0Q-10 -90 20 -170"/><path d="M20 -170Q-10 -200 -50 -185M20 -170Q30 -210 70 -212M20 -170Q60 -165 85 -135M20 -170Q0 -130 -35 -120"/></g>`;
const sun=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff3cf"/>`;
const B={
beach:()=>sun(600,150,52)+sea(270,'#1b8fa8')+'<path d="M0 500V340Q200 310 420 345T800 330V500Z" fill="#f2d49b"/><ellipse cx="520" cy="300" rx="34" ry="20" fill="#04323c"/>'+palm(140,430,1)+palm(260,450,.8)+'<path d="M560 430q40-45 80 0z" fill="#fc4b02"/><path d="M600 430v50" stroke="#04323c" stroke-width="5"/>',
harbour:()=>sun(560,170,60)+sea(260,'#0a6a80')+'<path d="M180 360h260l-40 50H225z" fill="#fc4b02"/><rect x="290" y="320" width="70" height="40" fill="#fff"/><path d="M330 320V230" stroke="#04323c" stroke-width="5"/><path d="M330 232l50 18-50 18z" fill="#02819b"/><path d="M520 400h170l-25 34H545z" fill="#02819b"/><path d="M600 400v-60" stroke="#04323c" stroke-width="4"/><rect y="450" width="800" height="50" fill="#04323c" opacity=".85"/>',
coconut:()=>sun(620,140,50)+sea(300,'#02819b')+'<path d="M0 500V330Q140 250 320 300T560 380V500Z" fill="#2f8f5b"/>'+palm(110,340,1)+palm(210,330,.85)+palm(320,355,.7),
whale:()=>'<rect y="260" width="800" height="240" fill="#065a73"/><path d="M0 300h800M0 350h800M0 410h800" stroke="#fff" stroke-opacity=".15" stroke-width="3"/><ellipse cx="200" cy="110" rx="90" ry="26" fill="#fff" opacity=".85"/><ellipse cx="560" cy="140" rx="110" ry="30" fill="#fff" opacity=".8"/>'+sun(680,70,34)+'<path d="M400 420Q392 330 372 280Q330 270 300 240Q350 240 398 270Q446 240 496 240Q466 270 424 280Q408 330 400 420Z" fill="#04323c"/><path d="M320 425q80-26 160 0" stroke="#fff" stroke-width="5" fill="none" opacity=".75"/>',
lighthouse:()=>sun(640,130,48)+sea(330,'#1f93ad')+'<path d="M180 500V420Q260 380 360 400T520 420V500Z" fill="#4a5b60"/><path d="M345 410L365 180H395L415 410Z" fill="#fff"/><path d="M351 360l9-55h40l9 55zM358 285l7-45h30l7 45z" fill="#fc4b02"/><rect x="360" y="150" width="40" height="30" fill="#04323c"/><path d="M355 150l25-30 25 30z" fill="#fc4b02"/>'+palm(600,430,.8),
roadside:()=>sun(150,120,50)+'<path d="M0 330Q200 230 400 300T800 270V500H0Z" fill="#3a9d5d"/><path d="M0 400Q250 340 500 410T800 380V500H0Z" fill="#1d6a3f"/><path d="M330 500Q420 420 460 330 470 312 480 330 540 420 700 500Z" fill="#2a3b40"/><path d="M430 500Q470 420 472 335" stroke="#fff" stroke-width="3" stroke-dasharray="14 12" fill="none"/>'+palm(130,380,.9)+palm(720,400,.8)+'<g stroke="#fff" stroke-width="3" fill="none"><circle cx="520" cy="440" r="14"/><circle cx="560" cy="440" r="14"/><path d="M520 440L538 418 556 418 560 440M538 418L534 440"/></g>',
tips:()=>sun(650,90,44)+'<rect y="400" width="800" height="100" fill="#cfe8c8"/><path d="M220 330a100 90 0 0 1 200 0z" fill="#02819b"/><path d="M250 320l30-60M300 312v-70M350 320l-14-62" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M215 330h215v14H215z" fill="#04323c"/><path d="M260 344q20 40 50 40" stroke="#04323c" stroke-width="6" fill="none"/><rect x="520" y="250" width="70" height="150" rx="22" fill="#fc4b02"/><rect x="540" y="222" width="30" height="34" rx="8" fill="#04323c"/><rect x="520" y="300" width="70" height="40" fill="#fff" opacity=".35"/>'
};
return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration"><defs><linearGradient id="g2${v}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${G[0]}"/><stop offset="1" stop-color="${G[1]}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g2${v})"/><svg x="0" y="0" width="${w}" height="${h}" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">${B[v]()}</svg></svg>`;}
function scene(v,w=800,h=500){
if(FB2[v])return scene2(v,w,h);
const P={sunrise:['#ffd2a1','#ff8a4d','#0a6a80','#04323c'],paddy:['#cdeaf0','#9ed3dc','#3a9d5d','#1d6a3f'],sunset:['#ff9a62',OR,'#7a2a6b','#04323c'],hills:['#bfe3ea','#6fb9c7',TE,'#04323c']}[v];
const sun=v==='sunset'?'<circle class="sun" cx="560" cy="270" r="70" fill="#ffe3b0"/>':v==='sunrise'?'<circle class="sun" cx="250" cy="280" r="60" fill="#fff0c9"/>':'<circle cx="620" cy="110" r="46" fill="#fff6d6"/>';
const sea=(v==='sunrise'||v==='sunset')?`<rect y="300" width="800" height="200" fill="${P[2]}"/><path d="M0 330h800M0 360h800M0 395h800" stroke="#fff" stroke-opacity=".18" stroke-width="3"/>`:`<path d="M0 290 Q200 190 400 270 T800 250V500H0Z" fill="${P[2]}"/><path d="M0 340 Q250 270 500 340 T800 320V500H0Z" fill="${P[3]}"/>`;
const palm=`<g stroke="${P[3]}" stroke-width="7" fill="none" stroke-linecap="round"><path d="M700 470Q690 380 720 300"/><path d="M720 300Q690 270 650 285M720 300Q730 260 770 258M720 300Q760 305 785 335M720 300Q700 340 665 350"/></g>`;
const road=`<path d="M300 500Q420 420 470 330 480 310 490 330 550 420 700 500Z" fill="${P[3]}" opacity=".9"/><path d="M420 500Q470 420 482 335" stroke="#fff" stroke-width="3" stroke-dasharray="14 12" fill="none"/>`;
const bike=`<g transform="translate(150 380)" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"><circle cx="0" cy="40" r="32"/><circle cx="105" cy="40" r="32"/><path d="M0 40L40 40 62 -8 98 -8 105 40M40 40L52 -8M62 -8L48 -12M40 40L62 10 100 -8" /><circle cx="60" cy="-48" r="11" fill="${OR}" stroke="none"/><path d="M60 -34L52 -10M58 -30L90 -10" stroke="${OR}" stroke-width="10"/></g>`;
return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of a coastal cycling route"><defs><linearGradient id="g${v}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P[0]}"/><stop offset="1" stop-color="${P[1]}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g${v})"/>${sun}${sea}${road}${palm}${bike}</svg>`;}

function fb(el,v,w,h,c){el.outerHTML=scene(v,w,h).replace('<svg','<svg class="'+c+'"');}
function pic(src,v,w,h,alt){return src?`<img class="pic photo" src="${src}" alt="${alt||''}" loading="lazy" onerror="fb(this,'${v}',${w},${h},'pic')">`:scene(v,w,h).replace('<svg','<svg class="pic"');}
function artHtml(src,v,w,h){return src?`<img class="photo" src="${src}" alt="" loading="lazy" onerror="fb(this,'${v}',${w},${h},'')">`:scene(v,w,h);}
const acts=SITE.tours.map(t=>[t.fb,t.name,t.meta,t.text,t.price,t.img]);
const cards=(list,btn)=>list.map(a=>`<article class="card">${pic(a[5],a[0],800,420,a[1])}<div class="b"><span class="tag">${a[2]}</span><h3>${a[1]}</h3><p>${a[3]}</p><p class="price" style="margin-top:8px">${a[4]} <small style="font:400 .85rem Figtree;color:var(--mut)">per rider</small></p>${btn?'<br><a class="btn" href="#contact">Book now</a>':''}</div></article>`).join('');
document.getElementById('homeCards').innerHTML=cards(acts.slice(0,3),false).replace(/class="card"/g,'class="card" style="color:var(--ink)"');
document.getElementById('acts').innerHTML=cards(acts,true);
const hs=SITE.hero.map(h=>[h.fb,h.title,h.img]);
const art=document.getElementById('heroArt'),ctl=document.getElementById('heroCtl');
art.innerHTML=hs.map((s,i)=>`<div class="slide${i?'':' on'}">${s[2]?`<img src="${s[2]}" alt="${s[1]}" onerror="this.outerHTML='<div class=ph></div>'">`:'<div class="ph"></div>'}</div>`).join('');
ctl.innerHTML=hs.map((s,i)=>`<button type="button" aria-label="Show slide ${i+1}: ${s[1]}"></button>`).join('');
let cur=0,tm;
function go(n){cur=(n+hs.length)%hs.length;art.querySelectorAll('.slide').forEach((e,i)=>e.classList.toggle('on',i===cur));ctl.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===cur));document.getElementById('cap').textContent=hs[cur][1];}
function play(){clearInterval(tm);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=SITE.heroAutoplay>0?setInterval(()=>go(cur+1),SITE.heroAutoplay*1000):0;}
ctl.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{go(i);play();});
document.getElementById('hprev').onclick=()=>{go(cur-1);play();};document.getElementById('hnext').onclick=()=>{go(cur+1);play();};
if(hs.length<2)document.querySelectorAll('.ctl,.arr').forEach(e=>e.style.display='none');
go(0);play();
addEventListener('scroll',()=>document.querySelector('header').classList.toggle('sc',scrollY>10),{passive:true});

document.getElementById('reviewArt').innerHTML=artHtml(SITE.stories,'sunset',800,500);
document.getElementById('aboutArt').innerHTML=artHtml(SITE.about,'paddy',800,560);
document.getElementById('team').innerHTML=SITE.team.map((t,i)=>`<div class="card" style="color:var(--ink)"><div class="b">${t.img?`<img class="av" src="${t.img}" alt="${t.name}" onerror="avFb(this,${i})">`:`<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="36" fill="${i%2?TE:OR}"/><circle cx="36" cy="28" r="12" fill="#fff"/><path d="M12 62q24-30 48 0" fill="#fff"/></svg>`}<h3 style="margin-top:12px">${t.name}</h3><p>${t.role}</p></div></div>`).join('');
const sv=[['Bike hire','Hybrid, road and e-bikes with helmets, lights and locks.'],['Guided tours','English-speaking guides who know every turn and every tea stop.'],['Hotel pickup','Free transfer from hotels in Mirissa, Weligama and Matara.'],['Support vehicle','Water, snacks and a lift if you need a rest on long routes.'],['Private groups','Family rides, birthdays and corporate days out.'],['Bike repairs','Quick fixes and servicing from our Mirissa workshop.']];
document.getElementById('svcs').innerHTML=sv.map(s=>`<div class="card"><div class="b"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="12" fill="${TE}"/><circle cx="20" cy="20" r="7" fill="none" stroke="#fff" stroke-width="3"/></svg><h3 style="margin-top:12px">${s[0]}</h3><p>${s[1]}</p></div></div>`).join('');
const pk=[['Day rider','From $25','One guided ride, bike, helmet, water'],['Weekend','$60','Two rides, hotel pickup, beach breakfast'],['Week explorer','$130','Five rides, support vehicle, tea tasting']];
document.getElementById('pkgs').innerHTML=pk.map(p=>`<div class="card"><div class="b"><h3>${p[0]}</h3><p class="price">${p[1]}</p><p>${p[2]}</p><br><a class="btn" href="#contact">Enquire</a></div></div>`).join('');
document.getElementById('mapArt').innerHTML=`<svg viewBox="0 0 400 200" style="width:100%;border-radius:18px" role="img" aria-label="Placeholder map"><rect width="400" height="200" fill="#bfe3ea"/><path d="M0 120Q100 90 200 130T400 110V200H0Z" fill="#9ed3dc"/><path d="M0 60Q120 40 250 80T400 50" stroke="#fff" stroke-width="8" fill="none"/><path d="M200 0V200" stroke="#fff" stroke-width="6"/><path d="M200 120c-14-22-22-30-22-42a22 22 0 0 1 44 0c0 12-8 20-22 42z" fill="${OR}"/><circle cx="200" cy="78" r="8" fill="#fff"/></svg>`;
document.getElementById('send').onclick=()=>{document.getElementById('ok').style.display='block'};

const why=[['Rich wildlife','Rainforest, wetlands and coral reefs packed into one small island.'],['Living culture','Temples, forts and village rituals that are centuries old.'],['Roads cars never reach','Back lanes, jungle paths and coast tracks that buses skip.'],['Guides who grew up here','Local shortcuts, the best lunch spots and views nobody else finds.'],['Food at every stop','Fresh king coconut, hoppers and home-cooked rice and curry along the route.'],['Rides for every level','Gentle coast loops to tough hill climbs, with e-bikes available.']];
document.getElementById('why').innerHTML=why.map((w,i)=>`<div class="pt"><b>0${i+1}</b><h3>${w[0]}</h3><p>${w[1]}</p></div>`).join('');
const qs=[['Quiet lanes, a great guide and never a worry about lunch or luggage.','James and Karen','USA','Sunrise Sunburn Ride'],['The support van was never far away and the pace suited everyone.','Emma','Australia','Paddy & Cinnamon Trail'],['Sunset ride, fresh seafood on the sand. Easily our best evening.','Thabo and Nomsa','South Africa','Sunset Beach Cruise'],['A local home lunch with curry by hand made the whole day.','Rachel','Australia','Hill Country Challenge']];
let qi=0,qt;const qd=document.getElementById('qdots');
qd.innerHTML=qs.map((q,i)=>`<button type="button" aria-label="Story ${i+1}"></button>`).join('');
function showQ(n){qi=n;const q=qs[n];document.getElementById('quote').innerHTML=`<p class="q" style="color:var(--ink)">“${q[0]}”</p><p style="margin-top:12px"><b style="color:var(--ink)">${q[1]}</b>, ${q[2]}. ${q[3]}</p>`;qd.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('on',i===n));}
qd.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>showQ(i));showQ(0);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)qt=setInterval(()=>showQ((qi+1)%qs.length),6000);
document.getElementById('theme').onclick=()=>{const r=document.documentElement;r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';};
document.getElementById('sq').addEventListener('keydown',e=>{if(e.key==='Enter')location.hash='#activities'});
document.getElementById('aboutHomeArt').innerHTML=artHtml(SITE.aboutHome,'paddy',800,1000);
document.getElementById('nlBtn').onclick=()=>{const m=document.getElementById('nlMail').value;const o=document.getElementById('nlOk');o.style.display='block';o.textContent=/\S+@\S+\.\S+/.test(m)?'Thanks! This is a demo form, so nothing was sent.':'Please enter a valid email address.';};
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
function closeMenu(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu');}
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(o));burger.setAttribute('aria-label',o?'Close menu':'Open menu');};
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
addEventListener('resize',()=>{if(innerWidth>1024)closeMenu();});
addEventListener('hashchange',closeMenu);
(function(){const t=document.querySelector('.trust');if(!t||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
const items=[...t.querySelectorAll('b')].map(b=>{const m=b.textContent.match(/[\d,.]+/);return {b,txt:b.textContent,n:parseFloat(m[0].replace(/,/g,'')),d:(m[0].split('.')[1]||'').length,pre:b.textContent.slice(0,m.index),suf:b.textContent.slice(m.index+m[0].length),com:m[0].includes(',')};});
items.forEach(i=>i.b.textContent=i.pre+(0).toFixed(i.d)+i.suf);
const co=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;co.disconnect();setTimeout(()=>{const t0=performance.now();(function f(now){const p=Math.min(1,(now-t0)/1400),e=1-Math.pow(1-p,3);items.forEach(i=>{let v=(i.n*e).toFixed(i.d);if(i.com)v=Number(v).toLocaleString('en-US',{minimumFractionDigits:i.d,maximumFractionDigits:i.d});i.b.textContent=i.pre+v+i.suf;});if(p<1)requestAnimationFrame(f);else items.forEach(i=>i.b.textContent=i.txt);})(t0);},Math.max(0,3300-performance.now()));},{threshold:.4});co.observe(t);})();
document.getElementById('aboutBannerArt').innerHTML=SITE.aboutBanner?`<img src="${SITE.aboutBanner}" alt="" onerror="this.outerHTML='<div class=ph></div>'">`:'<div class="ph"></div>';
document.getElementById('certArt').innerHTML=artHtml(SITE.tours[1].img,'paddy',800,560);
const vals=[['Safety first','Briefings, helmets, checked bikes and a support vehicle on every ride.'],['Local at heart','Local guides, family-run stops and money that stays in Mirissa.'],['Small groups','Never more than 8 riders, so everyone gets time with the guide.'],['Ride responsibly','Quiet roads, no litter and respect for villages and wildlife.']];
document.getElementById('values').innerHTML=vals.map((v,i)=>`<div class="card"><div class="b"><svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="22" fill="${i%2?TE:OR}"/><path d="M13 23l6 6 12-13" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg><h3 style="margin-top:14px">${v[0]}</h3><p>${v[1]}</p></div></div>`).join('');
const blogCard=b=>`<article class="card"><a href="#post-${b.slug}" style="display:block;text-decoration:none;color:inherit">${pic(b.img,b.fb,800,420,b.title)}</a><div class="b"><span class="tag">${b.tag}, ${b.date}</span><h3><a href="#post-${b.slug}" style="text-decoration:none;color:inherit">${b.title}</a></h3><p>${b.excerpt}</p><p style="margin-top:10px"><a href="#post-${b.slug}" style="color:var(--te);font-weight:600;text-decoration:none">Read more &rarr;</a></p></div></article>`;
function fbFig(el,v){el.outerHTML=v?scene(v,800,500):'<div class=ph></div>';}
function bannerImg(src,fb){return src?`<img src="${src}" alt="" onerror="fbFig(this,'${fb||''}')">`:(fb?scene(fb,1600,600):'<div class="ph"></div>');}
document.getElementById('blog').innerHTML=SITE.blog.map(blogCard).join('');
document.getElementById('blogAll').innerHTML=SITE.blog.map(blogCard).join('');
document.getElementById('blogBannerArt').innerHTML=bannerImg(SITE.aboutBanner);
function renderPost(b){
document.getElementById('postBannerArt').innerHTML=bannerImg(b.img,b.fb);
document.getElementById('postTitle').textContent=b.title;
document.getElementById('postMeta').textContent=b.tag+', '+b.date+', '+b.read+' read';
document.getElementById('postBody').innerHTML=b.sections.map(s=>`<h2>${s.h}</h2>${(s.p||[]).map(t=>`<p>${t}</p>`).join('')}${s.list?`<ul class="chk">${s.list.map(l=>`<li>${l}</li>`).join('')}</ul>`:''}${s.img?`<figure><img src="${s.img}" alt="${s.cap||''}" loading="lazy" onerror="fbFig(this,'${s.fb||'sunrise'}')"><figcaption>${s.cap||''}</figcaption></figure>`:(s.fb?`<figure>${scene(s.fb,800,500)}<figcaption>${s.cap||''}</figcaption></figure>`:'')}`).join('');
document.getElementById('postRelated').innerHTML=SITE.blog.filter(x=>x!==b).map(blogCard).join('');
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('section h2,.pagehead,.card,.pt,.split>*,.tli,.cta').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*90+'ms';io.observe(el);});
// Simple hash router
function route(){
const h=(location.hash||'#home').slice(1);
const post=SITE.blog.find(b=>'post-'+b.slug===h);
const id=post?'post':((h!=='post'&&document.getElementById('p-'+h))?h:'home');
if(post)renderPost(post);
document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on',p.id==='p-'+id));
const navId=id==='post'?'blog':id;
document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+navId));
const T={home:'Rev Cycling | Guided Cycling Tours in Mirissa',about:'About us | Rev Cycling',activities:'Activities | Rev Cycling',services:'Services | Rev Cycling',blog:'Blog | Rev Cycling',contact:'Contact us | Rev Cycling'};
document.title=post?post.title+' | Rev Cycling':T[id];
window.scrollTo(0,0);}
addEventListener('hashchange',route);route();
