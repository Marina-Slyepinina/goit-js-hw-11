import{a as m,S as p,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="49653024-3e206daf7693dc60176f31220";function h(o){return m.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const n=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:u})=>`
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
                    <p class="card-info-text">${f}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Downloads</p>
                    <p class="card-info-text">${u}</p>
                </li>
            </ul>
        </div>`).join("");n.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){n.innerHTML=""}function x(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",v);function v(o){c.destroy(),L(),x(),o.preventDefault();const r=o.target.elements["search-text"].value.toLowerCase();if(r.trim()==="")return c.show({message:"Search query cannot be empty"});h(r).then(s=>{if(S(),s.data.hits.length){const a=s.data.hits;b(a);return}c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}).catch(s=>{c.show({message:s.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}),d.reset()}
//# sourceMappingURL=index.js.map
