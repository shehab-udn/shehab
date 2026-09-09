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
document.querySelector('#project-list').innerHTML=data.projects.map(p=>`<article id="${escapeHTML(p.id)}" class="project"><header class="project-header"><h3>${escapeHTML(p.title)}</h3><p class="organization">${escapeHTML(p.organization)} · ${escapeHTML(p.role)}</p></header><p class="project-description">${escapeHTML(p.description)}</p><details><summary>My contribution &amp; tools</summary><p>${escapeHTML(p.contribution)}</p><p>${p.tools.map(escapeHTML).join(' · ')}</p></details><div class="gallery">${p.groups.flatMap(g=>g.images.map(im=>({...im,group:g.title}))).map(im=>{const index=images.push({...im,project:p.title})-1;return `<figure><button class="image-button" data-image="${index}" aria-label="Enlarge ${escapeHTML(im.title)}"><img src="${escapeHTML(im.src)}" alt="${escapeHTML(im.detail)}${im.placeholder?' — generic illustration':''}" loading="lazy" width="240" height="132"><span class="expand" aria-hidden="true">⤢</span></button><figcaption>${escapeHTML(im.title)}${im.placeholder?'<span class="placeholder">Illustrative sample</span>':''}</figcaption></figure>`;}).join('')}</div></article>`).join('');
const dialog=document.querySelector('#lightbox');let current=0;let opener=null;
function showImage(index){current=(index+images.length)%images.length;const im=images[current];const img=document.querySelector('#lightbox-image');img.src=im.src;img.alt=im.detail;document.querySelector('#lightbox-title').textContent=im.title;document.querySelector('#lightbox-description').textContent=`${im.project} · ${im.detail}${im.placeholder?' · Generic illustration, not original project work.':''}`;document.querySelector('#lightbox-counter').textContent=`${String(current+1).padStart(2,'0')} / ${images.length}`;}
document.querySelector('#project-list').addEventListener('click',e=>{const button=e.target.closest('[data-image]');if(!button)return;opener=button;showImage(Number(button.dataset.image));dialog.showModal();document.body.style.overflow='hidden';});
function close(){dialog.close();}
document.querySelector('#close-lightbox').addEventListener('click',close);
dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
document.querySelector('#previous-image').addEventListener('click',()=>showImage(current-1));
document.querySelector('#next-image').addEventListener('click',()=>showImage(current+1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showImage(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();showImage(current-1);}});
// Use the user's existing portrait when present; otherwise show the supplied-reference crop.
const customPortrait=new Image();customPortrait.onload=()=>{document.querySelector('#profile-photo').src=customPortrait.src;};customPortrait.src='assets/profile.jpg';
