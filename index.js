import{S as $,a as q,i}from"./assets/vendor-MjawMu3A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const h=document.querySelector(".loader"),m=document.querySelector(".gallery"),f=document.querySelector(".show-more-btn");let y=new $(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1});function w(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}function g(){m.innerHTML=""}function R(r){const t=r.map(e=>`<li class="gallery-item">
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
    </li>`).join("");m.innerHTML=t,y.refresh()}function T(r){const t=r.map(e=>`<li class="gallery-item">
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
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),y.refresh()}function a(){f.classList.add("hidden")}function L(){f.classList.remove("hidden")}function C(){return document.querySelector(".gallery-item").getBoundingClientRect().height+2*24}const E="https://pixabay.com/api/",H="53639618-7ccf198a06ad48a4b9e98f6f9";async function b(r,t=1,e=15){const c={key:H,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:t},s=await q.get(E,{params:c});return{array:s.data.hits,totalHits:s.data.totalHits}}const I=document.querySelector("#search-form"),D=document.querySelector(".form-input"),M=document.querySelector(".show-more-btn");let u=1,v=15,S="",d=0,n=[];l();a();I.addEventListener("submit",async r=>{r.preventDefault(),a();const t=D.value.trim();if(!t){g(),a(),i.error({message:"Please enter a query",position:"topRight"});return}w();try{S=t,u=1,n=[],g();const e=await b(t,u,v);if(e.array.length===0){l(),a(),i.error({message:"No images were found. Try another query.",position:"topRight"});return}l(),n=e.array,R(e.array),d=e.totalHits,n.length<d?L():(i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a())}catch(e){l(),console.log(e),i.error({message:"Something went wrong. Try again.",position:"topRight"})}});M.addEventListener("click",async r=>{r.preventDefault(),a(),w();try{u+=1;const t=await b(S,u,v);n=n.concat(t.array),l(),T(t.array),setTimeout(()=>{let e=C();window.scrollBy({top:e*2,behavior:"smooth"})},100),n.length>=d?(a(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch(t){console.log(t),l(),a(),i.error({message:"Something went wrong. Try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
