'use strict';
const data=window.PORTFOLIO;
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const images=[];
document.querySelectorAll('[data-profile]').forEach(element=>{
  const value=data[element.dataset.profile];
  if(typeof value==='string') element.textContent=value;
});
document.querySelector('#introduction').textContent=data.introduction;
if(typeof data.biography==='string') document.querySelector('#biography').textContent=data.biography;
document.querySelector('#credentials').innerHTML=data.credentials.map(c=>`<p>${escapeHTML(c)}</p>`).join('');
document.querySelectorAll('.email-link').forEach(a=>{a.href=`mailto:${data.email}`;if(a.classList.contains('contact-email'))a.textContent=data.email;});
document.querySelector('#linkedin').href=data.linkedin;
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#project-list').innerHTML=data.projects.map(p=>{
  const projectImages=p.groups.flatMap(g=>g.images.map(im=>({...im,group:g.title})));
  const gallery=projectImages.map(im=>{
    const index=images.push({...im,project:p.title})-1;
    return `
      <figure>
        <button type="button" class="image-button" data-image="${index}" aria-label="Enlarge ${escapeHTML(im.title)}" aria-haspopup="dialog" aria-controls="lightbox">
          <img src="${escapeHTML(im.src)}" alt="${escapeHTML(im.detail)}${im.placeholder?' — generic illustration':''}" loading="lazy" decoding="async" width="400" height="250">
          <span class="expand" aria-hidden="true">⤢</span>
        </button>
        <figcaption>
          <strong>${escapeHTML(im.title)}</strong>
          ${im.placeholder?'<span class="placeholder">Illustrative sample</span>':''}
        </figcaption>
      </figure>`;
  }).join('');
  return `
    <article id="${escapeHTML(p.id)}" class="project" aria-labelledby="${escapeHTML(p.id)}-title">
      <div class="project-overview">
        <div class="project-summary">
          <header class="project-header">
            <span class="project-index" aria-hidden="true">${escapeHTML(p.number)}</span>
            <div>
              <p class="project-category">${escapeHTML(p.category)}</p>
              <h3 id="${escapeHTML(p.id)}-title">${escapeHTML(p.title)}</h3>
              <p class="organization">${escapeHTML(p.organization)}</p>
              <p class="role">${escapeHTML(p.role)}</p>
            </div>
          </header>
          <p class="project-description">${escapeHTML(p.description)}</p>
        </div>
        <div class="project-details">
          <h4 class="detail-label">My contribution</h4>
          <p class="detail-copy">${escapeHTML(p.contribution)}</p>
          <div class="project-tools">
            <h4 class="detail-label" id="${escapeHTML(p.id)}-tools">Tools</h4>
            <ul class="tool-list" aria-labelledby="${escapeHTML(p.id)}-tools">${p.tools.map(tool=>`<li>${escapeHTML(tool)}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
      <div class="gallery" role="group" aria-label="${escapeHTML(p.title)} project images">${gallery}</div>
    </article>`;
}).join('');
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
// The portrait file is loaded directly. A reference crop is available if it is missing.
const portrait=document.querySelector('#profile-photo');
portrait.alt=`Portrait of ${data.name}`;
function useReferencePortrait(){
  if(!portrait.src.endsWith('/profile-reference.jpg')) portrait.src='assets/profile-reference.jpg';
}
portrait.addEventListener('error',useReferencePortrait,{once:true});
if(portrait.complete && portrait.naturalWidth===0) useReferencePortrait();
