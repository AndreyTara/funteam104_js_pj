(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();window.addEventListener("load",h);function h(){const l=document.querySelector(".header-nav-checkbox"),r=document.querySelector(".header-nav-container>img"),c=document.documentElement,n=localStorage.getItem("user-theme");e(n);function e(o){o==="light"?(r.src=`/img/b-${o}.png`,r.alt=`theme-${o}`):o==="dark"&&(r.src=`./img/b-${o}.png`,r.alt=`theme-${o}`)}let t;window.matchMedia&&(t=window.matchMedia("prefer-color-sheme: dark").matches?"dark":"light"),window.matchMedia("prefer-color-sheme: dark").addEventListener("change",()=>{n||changeThemeLocalStore()});function s(){n?c.classList.add(n):c.classList.add(t)}s(),l.addEventListener("change",u);function u(o){o.target.checked,d(!0);function d(f=!1){let a=c.classList.contains("light")?"light":"dark",i;a==="light"?i="dark":a==="dark"&&(i="light"),c.classList.remove(a),e(i),c.classList.add(i),f&&localStorage.setItem("user-theme",i)}}}
//# sourceMappingURL=commonHelpers.js.map
