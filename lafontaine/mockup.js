
const L=["fr","nl","en"];
function setLang(l){
  document.documentElement.dataset.lang=l; document.documentElement.lang=l;
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.set===l));
  history.replaceState(null,'','?lang='+l+location.hash);
  document.querySelectorAll('a[href^="mockup-"]').forEach(a=>{a.href=a.getAttribute('href').split('?')[0]+'?lang='+l;});
}
document.querySelectorAll('.langs button').forEach(b=>b.onclick=()=>setLang(b.dataset.set));
const q=new URLSearchParams(location.search).get('lang'); setLang(L.includes(q)?q:'fr');
