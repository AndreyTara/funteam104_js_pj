(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();window.addEventListener("load",f);function f(){const l=document.querySelector(".header-nav-checkbox"),r=document.querySelector(".header-nav-container>img"),o=document.documentElement,s=localStorage.getItem("user-theme");e(s);function e(c){c==="light"?(r.src="../assets/blight.png",r.alt=`theme-${c}`):c==="dark"&&(r.src="../assets/bdark.png",r.alt=`theme-${c}`)}let t;window.matchMedia&&(t=window.matchMedia("prefer-color-sheme: dark").matches?"dark":"light"),window.matchMedia("prefer-color-sheme: dark").addEventListener("change",()=>{s||changeThemeLocalStore()});function n(){s?o.classList.add(s):o.classList.add(t)}n(),l.addEventListener("change",u);function u(c){c.target.checked,d(!0);function d(h=!1){let a=o.classList.contains("light")?"light":"dark",i;a==="light"?i="dark":a==="dark"&&(i="light"),o.classList.remove(a),e(i),o.classList.add(i),h&&localStorage.setItem("user-theme",i)}}}
//# sourceMappingURL=commonHelpers.js.map
