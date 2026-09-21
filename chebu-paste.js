(function(){
if(window.__chebuPicker)return;
window.__chebuPicker=1;
var P={"265788019":"r","695724311":"v","835236352":"m"},U="https://docs.google.com/spreadsheets/d/117MqsXjhzQqp1u9lVrlc7Ro_wfoSr5KvxQGiBsNKsG8/gviz/tq?tqx=out:csv&gid=0",R,S,B,M;
if(!document.getElementById("cb-css")){var e=document.createElement("style");e.id="cb-css";e.textContent=".hz{display:none!important}.cb{font-family:inherit;color:#191919}.cb .w{margin:0 0 6px;font-size:28px;font-weight:800;line-height:1;letter-spacing:-.03em}.cb [class$=__qty]{display:flex!important;align-items:center!important;gap:10px;margin:0 0 8px}.cb [class$=__qty] label{margin:0!important;font-weight:600}.cb [class$=__qty] .form-control,.cb [name=ec-qty]{position:absolute!important;width:1px!important;height:1px!important;opacity:0!important;pointer-events:none!important;overflow:hidden!important}.cb .d,.cb .r{display:flex!important;align-items:center!important;gap:6px;background:#fff!important;border:1px solid #e6e6e6;border-radius:10px;margin:3px 0;padding:3px 6px}.cb h2{margin:0 0 2px;font-size:16px}.cb .k{margin:2px 0 8px;font-size:14px;font-weight:600}.cb .bar{flex:1;height:6px;background:#eee;border-radius:8px;overflow:hidden}.cb .bar i{display:block;height:6px;width:0;background:#333}.cb .nr{width:26px;height:26px;border-radius:50%;background:#333!important;color:#fff;display:grid!important;place-items:center;font-size:10px;font-weight:700;flex:none}.cb .bd{flex:1;min-width:0}.cb .nm{margin:0;font-weight:600;font-size:13px;line-height:1.15}.cb .mt,.cb .x,.cb .g{margin:0;color:#757575;font-size:11px;line-height:1.15}.cb .st{display:flex!important;align-items:center!important;background:#333!important;border-radius:99px;overflow:hidden;flex:none}.cb .st button,.cb .qn{display:grid!important;place-items:center!important;height:32px}.cb .st button{width:32px;background:#333!important;color:#fff!important;border:0!important;padding:0!important;margin:0!important;font-size:18px;box-shadow:none!important}.cb .st button:disabled{opacity:.35}.cb .qn{background:#fff!important;color:#191919!important;min-width:20px;font-weight:700}";document.head.appendChild(e)}
function rows(t){return t.trim().split(/\n/).map(function(l){return l.split('","').map(function(c){return c.replace(/"/g,"")})})}
function load(){return M?Promise.resolve(M):fetch(U).then(function(r){return r.text()}).then(function(t){var a=rows(t),G=[],V=[],i,c,d;for(i=1;i<a.length;i++){c=a[i];if(!c[3])continue;d={n:+c[2],a:c[3],g:+c[4]||350,k:+c[5]||0};((c[1]||"").toLowerCase().indexOf("veg")==0?V:G).push(d)}M={w:a[1][0],G:G,V:V};return M})}
function tx(e){return(e.innerText||"").replace(/\s+/g," ").trim()}
function find(re,s){var a=document.querySelectorAll(s),i,n;for(i=0;i<a.length;i++){n=a[i];while(n&&n.tagName!="FORM"){if(/option|field/i.test(n.className||"")&&re.test(tx(n)))return{el:a[i],w:n};n=n.parentElement}}}
function cap(s){if(!s||/^l|^please/i.test(s.value))return s?0:5;var m=s.value.match(/\d+/);return m?+m[0]:5}
function lim(){var n=+(S.qty&&S.qty.value)||1;return cap(S.sel)*(n>0?n:1)}
function trim(){var i;if(!S)return;S.m=lim();while(S.m&&sum()>S.m){i=S.items.length;while(i--)if(S.c[S.items[i].k]){S.c[S.items[i].k]--;break}}paint()}
function setQty(q,n){var d;if(n<1)n=1;d=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");if(d&&d.set)d.set.call(q,String(n));else q.value=String(n);q.dispatchEvent(new Event("input",{bubbles:1}));q.dispatchEvent(new Event("change",{bubbles:1}))}
function place(){var q=document.querySelector("[name=ec-qty]"),n,w,ui,lab,num,b;if(!q||!R||!S)return;n=q.closest("[class$=__qty]")||q.parentElement;S.qty=q;w=R.querySelector(".w");if(w&&w.nextElementSibling!=n)w.after(n);q.oninput=q.onchange=trim;q.readOnly=1;q.tabIndex=-1;q.setAttribute("inputmode","none");lab=n.querySelector("label");if(lab)lab.htmlFor="";if(!n.querySelector(".qs")){ui=document.createElement("div");ui.className="qs";ui.innerHTML='<div class=st><button type=button data-q=m>−</button><b class=qn>1</b><button type=button data-q=p>+</button></div>';n.appendChild(ui);ui.onclick=function(e){var b=e.target.closest("button"),v,show;if(!b||!b.dataset.q)return;e.preventDefault();e.stopPropagation();v=+(q.value)||1;setQty(q,b.dataset.q=="p"?v+1:v-1);show=n.querySelector(".qs .qn");if(show)show.textContent=q.value;b=n.querySelector("[data-q=m]");if(b)b.disabled=(+(q.value)||1)<=1}}num=n.querySelector(".qs .qn");if(num)num.textContent=String(+(q.value)||1);b=n.querySelector("[data-q=m]");if(b)b.disabled=(+(q.value)||1)<=1}
function setV(el,v){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value").set.call(el,v);el.dispatchEvent(new Event("input",{bubbles:1}));el.dispatchEvent(new Event("change",{bubbles:1}))}
function bag(a,suf,g){return a.map(function(d){return{k:g+d.n,c:d.n+suf,g:g,d:d}})}
function items(k){return k=="v"?bag(M.V,"V","v"):k=="m"?bag(M.G,"G","g").concat(bag(M.V,"V","v")):bag(M.G,"G","g")}
function sum(){var n=0,k;for(k in S.c)n+=S.c[k];return n}
function card(it){var d=it.d;return '<div class=d data-key='+it.k+'><b class=nr>'+it.c+'</b><div class=bd><p class=nm>'+d.a.replace(/&/g,"&amp;")+'</p><p class=mt>~'+d.g+'g · '+d.k+'kcal</p></div><div class=st><button type=button data-act=m>−</button><b class=qn>0</b><button type=button data-act=p>+</button></div></div>'}
function paint(){if(!R||!R.isConnected)return;var u=sum(),m=S.m,ok=m&&u==m,i,code=[],q=R.querySelector.bind(R),b=S.num.form?S.num.form.querySelectorAll("button"):[];q(".n").textContent=u+" / "+(m||"—");q(".bar i").style.width=(m?Math.min(100,u/m*100):0)+"%";q("h2").textContent="Izvēlies savas "+(m||0)+" porcijas";q(".x").textContent=u<m?"Vēl "+(m-u):"Gatavs";S.items.forEach(function(it){var el=q('[data-key="'+it.k+'"]'),n=S.c[it.k]||0,j;el.querySelector(".qn").textContent=n;el.querySelector("[data-act=m]").disabled=!n;el.querySelector("[data-act=p]").disabled=!m||u>=m;for(j=0;j<n;j++)code.push(it.c)});q("[data-code]").textContent=code.join(" ")||"—";setV(S.num,code.join(" "));for(i=0;i<b.length;i++)if(/grozā/.test(tx(b[i])))b[i].disabled=!ok}
function wk(w){w=w||"";return /ēdienkarte piegādei/i.test(w)?w:"Ēdienkarte piegādei "+w}
function mount(k){if(document.querySelector(".cb"))return;var num=find(/NUMURUS/,"textarea"),por=find(/skaits/,"select"),keep=S?S.c:{},list=items(k),box=document.createElement("div"),html;if(!num)return;html=k=="m"?'<p class=g>Gaļa</p>'+list.filter(function(x){return x.g=="g"}).map(card).join("")+'<p class=g>Veģetārie</p>'+list.filter(function(x){return x.g=="v"}).map(card).join(""):list.map(card).join("");box.className="cb";box.innerHTML='<p class=w>'+wk(M.w)+'</p><h2></h2><div class=r><b class=n></b><div class=bar><i></i></div></div><p class=x></p><p class=k>Mana izvēle <b data-code>—</b></p>'+html;(por?por.w:num.w).after(box);num.w.classList.add("hz");S={items:list,c:keep,m:0,num:num.el,sel:por&&por.el,por:por&&por.w};R=box;box.onclick=function(e){var b=e.target.closest("button"),key;if(!b||!b.dataset.act)return;e.preventDefault();key=b.closest(".d").dataset.key;if(b.dataset.act=="p"){if(S.m&&sum()<S.m)S.c[key]=(S.c[key]||0)+1}else if(S.c[key])S.c[key]--;paint()};if(por)por.el.onchange=trim;place();trim()}
function boot(){var s=document.getElementById("cb-css");if(s)document.documentElement.appendChild(s);var h=location.href.match(/-p(\d+)|pid=(\d+)/),k=P[h&&(h[1]||h[2])];if(!k)return;if(document.querySelector(".cb")){place();if(S&&lim()!=S.m)trim();return}if(B||!find(/NUMURUS/,"textarea"))return;B=1;load().then(function(){B=0;mount(k)}).catch(function(){B=0})}
setInterval(boot,800)})();

/* Checkout: delivery-time lookup, floor field, door-code warning. */
(()=>{
if(window.__chebuEta)return;
window.__chebuEta=1;
const start=()=>{
if(!document.body){document.addEventListener("DOMContentLoaded",start);return}
const A="https://script.google.com/macros/s/AKfycbwYf3V5MElQQOl8YsvXZEBHNwFOsd80EeWYZujXrRNPMt4d_9LDpazaR-wer9m0dWldxw/exec",q=s=>document.querySelector(s),Q=s=>[...document.querySelectorAll(s)],id=s=>document.getElementById(s);
/* Private house, or pickup / "nav nozīmes", means no entrance code and no floor. */
const H=v=>{v=(v||"").toLowerCase();return /privāt|privat/.test(v)&&/māj|maj/.test(v)||/nav būtiski|nav butiski|paņem|panem|nozīm|nozim/.test(v)};
const rowOf=el=>{var n=el,best=el&&el.parentElement;while(n&&n!==document.body){var c=String(n.className||"");if(/ec-form__row|form__row|extrafield|extra-field/i.test(c))return n;if(/form-control/.test(c))best=n.parentElement||n;n=n.parentElement}return best};

let m=document.createElement("div");
m.style="display:none;position:fixed;inset:0;z-index:999999;background:#0009;align-items:center;justify-content:center;padding:20px";
m.innerHTML=`<div style="max-width:460px;background:#fff;padding:28px;text-align:center;border-radius:14px;position:relative"><button id=x style="position:absolute;right:16px;top:10px;border:0;background:none;font-size:28px">×</button><div style="font-size:28px;font-weight:700;margin:8px 30px 12px">Uzzini savu piegādes laiku</div><p>Ievadi pasūtījuma numuru un telefona pēdējos 3 ciparus.</p><input id=o placeholder="Pasūtījuma numurs CHEBUXXXXX" style="width:100%;padding:12px;box-sizing:border-box;border:1px solid #bbb;border-radius:5px;background:#fff"><input id=p maxlength=3 inputmode=numeric placeholder="Telefona pēdējie 3 cipari" style="width:100%;padding:12px;box-sizing:border-box;margin:8px 0;border:1px solid #bbb;border-radius:5px;background:#fff"><button id=g style="width:100%;padding:14px;background:#111;color:#fff;border:0">PĀRBAUDĪT</button><div id=r style="margin-top:15px"></div><small>Piegādes laiks ir orientējošs un piegādes gaitā var nedaudz mainīties.<br><br><b>Piegādes laiku svētdienas un pirmdienas piegādei vari noskaidrot sākot ar sestdienas 12:00.</b></small></div>`;
document.body.append(m);
id("x").onclick=()=>m.style.display="none";
id("p").oninput=()=>{let p=id("p");p.value=p.value.replace(/\D/g,"").slice(0,3)};
/* Menu item is an <a href="https://#piegades-laiks">. Match the raw href and the label, or the click does nothing. */
document.addEventListener("click",e=>{let n=e.target.closest("a,button,[role=button]");if(!n)return;let h=(n.getAttribute("href")||"")+" "+(n.getAttribute("aria-label")||"")+" "+(n.textContent||"");if(!/piegades-laiks|noskaidrot\s+piegādes/i.test(h))return;e.preventDefault();e.stopPropagation();m.style.display="flex"},true);
id("g").onclick=async()=>{let O=id("o").value.trim(),P=id("p").value.replace(/\D/g,""),r=id("r");if(!O||P.length!=3){r.textContent="Ievadi pasūtījuma numuru un telefona pēdējos 3 ciparus.";return}r.textContent="Meklējam...";try{let d=await fetch(A+"?order="+encodeURIComponent(O)+"&phone="+P).then(x=>x.json());r.innerHTML=d.success?"Tavs plānotais piegādes laiks:<br><b style='font-size:30px'>"+d.eta+"</b>":d.message}catch(_){r.textContent="Neizdevās pārbaudīt."}};

let lf;
function F(){
 let f=q('[name="bqcte57"]'),R=Q('[name="n8r2js8"]');if(!f||!R.length)return;
 let z=f.closest(".form-control");if(z)z.style.cssText+=";width:55px;max-width:55px";
 if(f!=lf){f.inputMode="numeric";f.oninput=()=>{f.value=f.value.replace(/\D/g,"");f.setCustomValidity("")};lf=f}
 let h=H(R.find(x=>x.checked)?.value||""),row=rowOf(f);
 row.style.display=h?"none":"";if(h){f.value="";f.setCustomValidity("")}
 R.forEach(x=>{if(!x.dataset.c){x.dataset.c=1;x.onchange=()=>{F();D()}}})
}

let ok=0;
function D(){
 let c=q('[name="w1uhhvp"]'),n=q('input[type=checkbox][value="Durvju koda nav"]'),t=q('[name="n8r2js8"]:checked');if(!c||!n)return;
 let h=H(t?.value||""),cr=rowOf(c),nr=rowOf(n),z=c.closest(".form-control");
 if(z){z.style.width="180px";z.style.maxWidth="180px"}
 if(h){cr.style.display=nr.style.display="none";c.value="";c.setCustomValidity("");return}
 nr.style.display="";
 if(!n.dataset.c){
  n.dataset.c=1;
  n.onchange=()=>{
   if(n.checked&&!ok){n.checked=false;W("Durvju koda nav?","Ja durvju kods tomēr ir, bet nevēlaties to norādīt - Jums ir jābūt sazvanām, citādi Jūsu pasūtījums netiks piegādāts.",null,1);return}
   D()
  };
  c.oninput=()=>{c.value=c.value.replace(/[^0-9A-Za-zĀ-ž#*\/,\-\s]/g,"").replace(/([A-Za-zĀ-ž]{3})[A-Za-zĀ-ž]+/g,"$1");c.setCustomValidity("")}
 }
 cr.style.display=n.checked?"none":"";if(n.checked){c.value="";c.setCustomValidity("")}
}

let w=document.createElement("div"),pb,mode=0,skip=0;
w.style="display:none;position:fixed;inset:0;z-index:9999999;background:#0007;align-items:center;justify-content:center;padding:20px";
w.innerHTML=`<div style="position:relative;width:260px;background:#d93636;color:#fff;padding:20px;border-radius:10px;text-align:center"><button id=we style="position:absolute;right:7px;top:3px;border:0;background:none;color:#fff;font-size:24px">×</button><b id=wt></b><p id=wm style="font-size:14px"></p><button id=wg style="border:0;background:#fff;color:#b51f1f;padding:10px 14px;border-radius:6px;font-weight:bold">SAPRATU, TURPINĀT</button></div>`;
document.body.append(w);

const W=(t,s,b,z=0)=>{id("wt").textContent=t;id("wm").textContent=s;pb=b;mode=z;w.style.display="flex"};

id("we").onclick=()=>{
 w.style.display="none";
 if(mode)q('[name="w1uhhvp"]')?.focus();
 mode=0
};

id("wg").onclick=()=>{
 w.style.display="none";
 if(mode){
  let n=q('input[type=checkbox][value="Durvju koda nav"]');
  ok=1;n.checked=true;D();ok=0;mode=0;return
 }
 skip=1;let b=pb;pb=null;b?.click()
};

document.addEventListener("click",e=>{
 let b=e.target.closest("button");if(!b||["g","x","we","wg"].includes(b.id)||b.closest(".cb,.qs"))return;
 let f=q('[name="bqcte57"]'),t=q('[name="n8r2js8"]:checked'),c=q('[name="w1uhhvp"]'),n=q('input[type=checkbox][value="Durvju koda nav"]'),h=H(t?.value||"");
 if(f&&t&&t.value=="Dzīvokļu māja"&&!f.value.trim()){e.preventDefault();e.stopImmediatePropagation();f.setCustomValidity("Lūdzu, norādi stāvu.");f.reportValidity();f.focus();return}
 if(c&&n&&t&&!h&&!n.checked&&!c.value.trim()){e.preventDefault();e.stopImmediatePropagation();W("Nav norādīts durvju kods",'Norādi durvju kodu vai atzīmē "Durvju koda nav".',b);return}
 if(skip){skip=0;return}
 if(c&&n&&t&&!h&&!n.checked&&/^\d{1,3}$/.test(c.value.trim())){e.preventDefault();e.stopImmediatePropagation();W("Dzīvokļa numurs?","Ja norādījāt dzīvokļa numuru namrunim, nevis durvju kodu — piegādes laikā jābūt sazvanāmam.",b)}
},true);

new MutationObserver(()=>{F();D()}).observe(document.body,{childList:true,subtree:true});F();D()
};
start()
})();
