var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n(r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)):o(r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t={delay:i.delay.value,step:i.step.value,amount:i.amount.value};let n=Number(t.delay);for(let e=0;e<Number(t.amount);e++){l(e,n).then(((e,t)=>{})).catch(((e,t)=>{}));n+=Number(t.step)}}));
//# sourceMappingURL=03-promises.56be7b7c.js.map
