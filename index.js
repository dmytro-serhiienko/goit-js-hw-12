import{S as q,a as S,i as l}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const h=document.querySelector(".loader"),g=document.querySelector(".gallery"),f=document.querySelector(".show-more-btn");let w=new q(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1});function L(){h.classList.remove("hidden")}function n(){h.classList.add("hidden")}function y(){g.innerHTML=""}function R(r){const t=r.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${e.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${e.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${e.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");g.innerHTML=t,w.refresh()}function C(r){const t=r.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${e.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${e.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${e.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join("");g.insertAdjacentHTML("beforeend",t),w.refresh()}function a(){f.classList.add("hidden")}function b(){f.classList.remove("hidden")}function T(){return document.querySelector(".gallery-item").getBoundingClientRect().height+2*24}const B="https://pixabay.com/api/",H="53639618-7ccf198a06ad48a4b9e98f6f9";async function v(r,t=1,e=15){const c={key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:t},s=await S.get(B,{params:c});return{array:s.data.hits,totalHits:s.data.totalHits}}const I=document.querySelector(".submit-btn"),M=document.querySelector(".form-input"),D=document.querySelector(".show-more-btn");let i=1,u=15,$="",m=0,p=[];n();a();I.addEventListener("click",async r=>{r.preventDefault(),a();const t=M.value.trim();if(!t){y(),a(),l.error({message:"Please enter a query",position:"topRight"});return}L();try{$=t,i=1,p=[],y();const e=await v(t,i,u);if(e.array.length===0){n(),a(),l.error({message:"No images were found. Try another query.",position:"topRight"});return}n(),p=e.array,R(e.array),m=e.totalHits,i+=1,i*u<=m?b():(l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a())}catch(e){n(),console.log(e),l.error({message:"Something went wrong. Try again.",position:"topRight"})}});D.addEventListener("click",async r=>{r.preventDefault(),a(),L();try{const t=await v($,i,u);p=p.concat(t.array),n(),C(t.array),setTimeout(()=>{let e=T();window.scrollBy({top:e*2,behavior:"smooth"})},100),i+=1,i*u>m?(a(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch(t){console.log(t),n(),a(),l.error({message:"Something went wrong. Try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
