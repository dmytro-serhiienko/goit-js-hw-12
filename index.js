import{S as q,a as R,i as n}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const f=document.querySelector(".loader"),m=document.querySelector(".gallery"),h=document.querySelector(".show-more-btn");let y=new q(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1});function w(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}function g(){m.innerHTML=""}function T(o){const t=o.map(e=>`<li class="gallery-item">
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
    </li>`).join("");m.innerHTML=t,y.refresh()}function C(o){const t=o.map(e=>`<li class="gallery-item">
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
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),y.refresh()}function a(){h.classList.add("hidden")}function L(){h.classList.remove("hidden")}function H(){return document.querySelector(".gallery-item").getBoundingClientRect().height+2*24}const I="https://pixabay.com/api/",M="53639618-7ccf198a06ad48a4b9e98f6f9";async function b(o,t=1,e=15){const l={key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:t},s=await R.get(I,{params:l});return{array:s.data.hits,totalHits:s.data.totalHits}}const B=document.querySelector("#search-form"),D=document.querySelector(".form-input"),O=document.querySelector(".show-more-btn");let u=1;const v=15;let $="",d=0,i=[];c();a();B.addEventListener("submit",async o=>{o.preventDefault(),a();const t=D.value.trim();if(!t){g(),a(),n.error({message:"Please enter a query",position:"topRight"});return}w();try{$=t,u=1,i=[],g();const{array:e,totalHits:l}=await b(t,u,v);if(e.length===0){c(),a(),n.error({message:"No images were found. Try another query.",position:"topRight"});return}c(),i=e,S(i,!0),d=l,i.length<d?L():(n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a()),u+=1}catch(e){c(),console.log(e),n.error({message:"Something went wrong. Try again.",position:"topRight"})}});O.addEventListener("click",async o=>{o.preventDefault(),a(),w();try{const{array:t}=await b($,u,v);i=i.concat(t),c(),S(t,!1),setTimeout(()=>{let e=H();window.scrollBy({top:e*2,behavior:"smooth"})},100),i.length>=d?(a(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L(),u+=1}catch(t){console.log(t),c(),a(),n.error({message:"Something went wrong. Try again.",position:"topRight"})}});function S(o,t=!1){t?T(o):C(o)}
//# sourceMappingURL=index.js.map
