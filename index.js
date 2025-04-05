import{a as p,S as g,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="49653024-3e206daf7693dc60176f31220";function y(o){return p.get("https://pixabay.com/api/",{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
        <div class="card" id="">
            <div class="card-img">
                <a href=${a}><img src=${s} alt=${e} title=""/></a>
            </div>
            <ul class="card-info-list">
                <li class="card-info-item">
                    <p class="card-info-title">Likes</p>
                    <p class="card-info-text">${t}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Views</p>
                    <p class="card-info-text">${i}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Comments</p>
                    <p class="card-info-text">${u}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Downloads</p>
                    <p class="card-info-text">${m}</p>
                </li>
            </ul>
        </div>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function x(){l.innerHTML=""}function S(){d.classList.remove("hidden")}function n(){d.classList.add("hidden")}n();const f=document.querySelector(".form");f.addEventListener("submit",v);function v(o){c.destroy(),x(),S(),o.preventDefault();const r=o.target.elements["search-text"].value.toLowerCase();if(r.trim()==="")return n(),c.show({message:"Search query cannot be empty"});y(r).then(s=>{if(n(),s.data.hits.length){const a=s.data.hits;L(a);return}c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}).catch(s=>{c.show({message:s.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}),f.reset()}
//# sourceMappingURL=index.js.map
