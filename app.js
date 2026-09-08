'use strict';
const data=window.PORTFOLIO;
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const images=[];
const names=['Air handling units','Mining components','Reactor research','Rover challenge','Boiler & vessels'];
document.querySelector('#introduction').textContent=data.introduction;
document.querySelector('#credentials').innerHTML=data.credentials.map(c=>`<p>${escapeHTML(c)}</p>`).join('');
document.querySelectorAll('.email-link').forEach(a=>{a.href=`mailto:${data.email}`;if(a.classList.contains('contact-email'))a.textContent=data.email;});
document.querySelector('#linkedin').href=data.linkedin;
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#navigation').innerHTML=data.projects.map((p,i)=>`<a href="#${escapeHTML(p.id)}"><span>${p.number}</span>${escapeHTML(names[i]||p.title)}</a>`).join('');
document.querySelector('#projects').innerHTML=data.projects.map(p=>`<section id="${escapeHTML(p.id)}" class="project" aria-labelledby="title-${escapeHTML(p.id)}"><header class="project-header"><span class="section-number">${p.number}</span><div><p class="eyebrow">${escapeHTML(p.category)}</p><h2 id="title-${escapeHTML(p.id)}">${escapeHTML(p.title)}</h2><p class="organization">${escapeHTML(p.organization)}</p><p class="role">${escapeHTML(p.role)}</p></div></header><div class="project-summary"><p>${escapeHTML(p.description)}</p><p><strong>My contribution</strong>${escapeHTML(p.contribution)}</p></div><div class="tags">${p.tools.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>${p.groups.map(g=>`<div class="gallery-group"><h3 class="group-title">${escapeHTML(g.title)}</h3><div class="gallery ${g.images.length===3?'three':''}">${g.images.map((im,i)=>{const index=images.push({...im,project:p.title})-1;return `<figure><button class="image-button" data-image="${index}" aria-label="Enlarge ${escapeHTML(im.title)}${im.placeholder?', generic illustration':''}"><img src="${escapeHTML(im.src)}" alt="${escapeHTML(im.detail)}${im.placeholder?' — generic placeholder illustration':''}" loading="${index<2?'eager':'lazy'}" width="768" height="512">${im.placeholder?'<span class="placeholder">ILLUSTRATIVE PLACEHOLDER</span>':''}<span class="expand" aria-hidden="true">⤢</span></button><figcaption><div><strong>${escapeHTML(im.title)}</strong><p>${escapeHTML(im.detail)}</p></div><span class="fig-no">FIG. ${p.number}.${p.groups.slice(0,p.groups.indexOf(g)).reduce((n,x)=>n+x.images.length,0)+i+1}</span></figcaption></figure>`;}).join('')}</div></div>`).join('')}</section>`).join('');
if(!images.some(im=>im.placeholder))document.querySelector('.sample-note').hidden=true;
const dialog=document.querySelector('#lightbox');let current=0;let opener=null;
function showImage(index){current=(index+images.length)%images.length;const im=images[current];const img=document.querySelector('#lightbox-image');img.src=im.src;img.alt=im.detail;document.querySelector('#lightbox-title').textContent=im.title;document.querySelector('#lightbox-description').textContent=`${im.project} · ${im.detail}${im.placeholder?' · Generic illustration, not original project work.':''}`;document.querySelector('#lightbox-counter').textContent=`${String(current+1).padStart(2,'0')} / ${images.length}`;}
document.querySelector('#projects').addEventListener('click',e=>{const button=e.target.closest('[data-image]');if(!button)return;opener=button;showImage(Number(button.dataset.image));dialog.showModal();document.body.style.overflow='hidden';});
function close(){dialog.close();}
document.querySelector('#close-lightbox').addEventListener('click',close);
dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
document.querySelector('#previous-image').addEventListener('click',()=>showImage(current-1));
document.querySelector('#next-image').addEventListener('click',()=>showImage(current+1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showImage(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();showImage(current-1);}});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.getAttribute('href')===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('.project').forEach(p=>observer.observe(p));
