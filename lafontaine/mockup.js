
const L=["fr","nl","en"];
function setLang(l){
  document.documentElement.dataset.lang=l; document.documentElement.lang=l;
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.set===l));
  history.replaceState(null,'','?lang='+l+location.hash);
  document.querySelectorAll('a[href^="mockup-"]').forEach(a=>{const [p,h]=a.getAttribute('href').split('#');a.setAttribute('href',p.split('?')[0]+'?lang='+l+(h?'#'+h:''));});
}
document.querySelectorAll('.langs button').forEach(b=>b.onclick=()=>setLang(b.dataset.set));
const lb=document.getElementById('lb');
if(lb){
  document.querySelectorAll('.zoom').forEach(b=>b.onclick=()=>{lb.querySelector('img').src=b.dataset.src;lb.showModal();});
  lb.onclick=()=>lb.close();
}
const q=new URLSearchParams(location.search).get('lang'); setLang(L.includes(q)?q:'fr');
