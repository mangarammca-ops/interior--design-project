const I=["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg"];
const C=["Living & dining","Bedrooms","Kitchens","Bathrooms","Entrance & stairs"];
const K=[0,1,2,3,4,0,1,2,4,1,4,0,2,1,3];
K[0]=0;K[3]=0;K[4]=3;K[5]=0;K[6]=1;K[7]=2;K[8]=4;K[9]=1;K[10]=4;K[11]=0;K[12]=2;K[13]=1;K[14]=3;K[1]=1;K[2]=2;
const SV=[["Full-home interiors","From ₹1,100 / sq ft","Planned and built by one team",0],["Modular kitchens","From ₹95,000","Smart storage, easy to clean",2],["Bedrooms & wardrobes","From ₹1,200 / sq ft","Calm rooms with space to store",1],["Living rooms & TV units","From ₹38,000","Wall panels, cove lights, seating",5],["Bathrooms","From ₹65,000","Waterproof, bright, easy to maintain",4],["Entrance, stairs & lighting","From ₹18,000","A first impression that lasts",10]];
const RC=[["Modular kitchen (L-shape)","from ₹95,000"],["Wardrobe, laminate finish","₹1,200–2,200 / sq ft"],["TV unit with wall panel","from ₹38,000"],["Bed with upholstered headboard","from ₹28,000"],["False ceiling with cove lights","₹85–140 / sq ft"],["Dining and crockery unit","from ₹32,000"],["Wall paneling","₹180–350 / sq ft"],["Bathroom makeover","from ₹65,000"],["Foyer and shoe unit","from ₹22,000"],["Designer lighting package","from ₹18,000"]];
const BH=[["1 BHK",650],["2 BHK",1000],["3 BHK",1400],["4 BHK",1900]];
const TR=[["Essential",1100,1400,"Branded ply carcass, laminate finish, standard hardware."],["Premium",1600,2100,"BWP ply, acrylic or veneer finish, soft-close fittings, false ceiling."],["Luxury",2600,3500,"Imported finishes, wall paneling, designer lighting, smart storage."]];
const $=i=>document.getElementById(i);
document.querySelectorAll("[data-i]").forEach(e=>e.src=I[e.dataset.i]);
$("sv").innerHTML=SV.map(s=>`<a href="#contact"><img src="${I[s[3]]}" alt="${s[0]}" loading="lazy"><span class="tag">${s[1]}</span><i class="go">↗</i><div><h3>${s[0]}</h3><p>${s[2]}</p></div></a>`).join("");
let f=-1,cur=0,vis=[];
function gal(){$("fl").innerHTML=["All",...C].map((c,i)=>{const n=i?K.filter(k=>k==i-1).length:I.length;return`<button class="${i-1==f?"on":""}" data-f="${i-1}">${c} <small>${n}</small></button>`}).join("");
vis=I.map((s,i)=>i).filter(i=>f<0||K[i]==f);$("ms").innerHTML=vis.map((i,j)=>`<figure data-j="${j}"><img src="${I[i]}" alt="${C[K[i]]}" loading="lazy"><figcaption><b>${C[K[i]]}</b><span>View ↗</span></figcaption></figure>`).join("")}
$("fl").onclick=e=>{const b=e.target.closest("button");if(b){f=+b.dataset.f;gal()}};
const lb=$("lb"),li=lb.querySelector("img");
function show(j){cur=(j+vis.length)%vis.length;const i=vis[cur];li.src=I[i];$("lc").textContent=`${C[K[i]]} · ${cur+1} of ${vis.length}`;$("lq").href="https://wa.me/919876543210?text="+encodeURIComponent(`Hi, I like the ${C[K[i]].toLowerCase()} design (photo ${i+1}) on your website. Please share a quote.`);lb.classList.add("on")}
$("ms").onclick=e=>{const g=e.target.closest("figure");if(g)show(+g.dataset.j)};
lb.querySelector(".x").onclick=()=>lb.classList.remove("on");lb.querySelector(".p").onclick=()=>show(cur-1);lb.querySelector(".n").onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target==lb)lb.classList.remove("on")};
document.onkeydown=e=>{if(!lb.classList.contains("on"))return;if(e.key=="Escape")lb.classList.remove("on");if(e.key=="ArrowLeft")show(cur-1);if(e.key=="ArrowRight")show(cur+1)};
gal();
$("rc").innerHTML=RC.map(r=>`<li><span>${r[0]}</span><b>${r[1]}</b></li>`).join("");
let b=1,t=1,est="";
const L=n=>{const v=n/1e5;return "₹"+(v>=10?Math.round(v):v.toFixed(1))+" lakh"};
function calc(){const sq=BH[b][1],T=TR[t];$("bh").innerHTML=BH.map((x,i)=>`<button class="${i==b?"on":""}" data-b="${i}">${x[0]}</button>`).join("");
$("tr").innerHTML=TR.map((x,i)=>`<button class="${i==t?"on":""}" data-t="${i}">${x[0]}</button>`).join("");
const lo=Math.round(sq*T[1]/5e3)*5e3,hi=Math.round(sq*T[2]/5e3)*5e3;est=`${BH[b][0]} ${T[0]}: ${L(lo)} to ${L(hi)}`;
$("out").textContent=L(lo)+" – "+L(hi);$("nt").textContent=`About ${sq} sq ft. ${T[3]}`;
$("eb").href="https://wa.me/919876543210?text="+encodeURIComponent("Hi, I would like a quote. Estimate I saw: "+est)}
$("bh").onclick=e=>{if(e.target.dataset.b){b=+e.target.dataset.b;calc()}};$("tr").onclick=e=>{if(e.target.dataset.t){t=+e.target.dataset.t;calc()}};
$("eb").onclick=()=>{$("eb").target="_blank"};calc();
const ok=p=>p.replace(/\D/g,"").length>=10;
$("qf").onsubmit=e=>{e.preventDefault();if(!ok($("qp").value)){$("qp").placeholder="Enter a 10-digit number";$("qp").value="";return}
open("https://wa.me/919876543210?text="+encodeURIComponent("Please call me back on "+$("qp").value+" about interior design."),"_blank")};
$("cf").onsubmit=e=>{e.preventDefault();if(!$("n").value.trim()||!ok($("p").value)){$("er").textContent="Please enter your name and a 10-digit phone number.";return}
$("er").textContent="";open("https://wa.me/919876543210?text="+encodeURIComponent(`New enquiry\nName: ${$("n").value}\nPhone: ${$("p").value}\nCity: ${$("c").value}\nHome: ${$("h").value}\n${$("b").value}\n${$("m").value}`),"_blank")};
const H=[[55,19,"Designer chandelier","Warm brass ring with dimmable LED lights.","from ₹18,000"],[25,40,"TV unit with fluted panel","Wall-mounted unit, wood panel and hidden cove lighting.","from ₹38,000"],[78,38,"Layered curtains","Sheer and blackout curtains on a concealed track.","from ₹12,000 / window"],[68,64,"L-shaped sofa","Made to your room size, in the fabric you choose.","from ₹65,000"],[58,77,"Marble-top table","Round marble top on a brass-finish frame.","from ₹14,000"]];
let hs=0;
function hot(){$("hs").innerHTML=H.map((h,i)=>`<button class="dot ${i==hs?"on":""}" style="left:${h[0]}%;top:${h[1]}%" data-h="${i}" aria-label="${h[2]}"></button>`).join("");
$("hl").innerHTML=H.map((h,i)=>`<li class="${i==hs?"on":""}" data-h="${i}"><span>${h[2]}</span><b>${h[4]}</b></li>`).join("");$("hd").textContent=H[hs][3]}
const pick=e=>{const t=e.target.closest("[data-h]");if(t){hs=+t.dataset.h;hot()}};$("hs").onclick=pick;$("hl").onclick=pick;hot();
const ST=[["Warm modern","Neutral stone, soft wood and brass lighting.",0,["#d9cdb8","#8c7a62","#2b2118","#c9a35a"]],["Emerald classic","Deep green, gold accents and layered curtains.",11,["#1f5c52","#c9a35a","#e9e2d3","#3a2a20"]],["Soft blush","Gentle pinks with natural wood and greenery.",6,["#e8b4b0","#f3e3df","#b98a6d","#7a8b6e"]],["Midnight blue","Navy upholstery with crisp white and pattern.",9,["#1f4e79","#e8eef3","#b9c4cf","#3b3b3b"]]];
$("st").innerHTML=ST.map(s=>`<article><div class="pic"><img src="${I[s[2]]}" alt="${s[0]}" loading="lazy"><div class="sw">${s[3].map(c=>`<i style="background:${c}"></i>`).join("")}</div></div><h3>${s[0]}</h3><p>${s[1]}</p><a href="https://wa.me/919876543210?text=${encodeURIComponent("Hi, I like the "+s[0]+" style. Please share design ideas and a quote.")}" target="_blank" rel="noopener">Get this look →</a></article>`).join("");
