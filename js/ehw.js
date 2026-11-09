// EHW Win2000 mirror: v16 defaults, v15 local time-only clock, pass 2 (Jy 2026-11-09).
(function(){
const BASE='assets/ehw/windows/';
const SLIDES='assets/ehw/slides/';
const IG_GLYPH='<svg class="ig-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>';
const MAIL_GLYPH='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 7.5 L12 13 L20 7.5"/></svg>';
const PWR_GLYPH_BLACK='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5v6.2" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M4.4 3.7a5.4 5.4 0 1 0 7.2 0" stroke="#000" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>';
const CRED_FOOT=
  '<div class="cred-foot">'+
    '<div class="icons">'+
      '<a href="https://www.instagram.com/thisisjyyeung/" target="_blank" rel="noopener" aria-label="Instagram">'+IG_GLYPH+'</a>'+
      '<a href="mailto:thisisjyyeung@gmail.com" aria-label="Email">'+MAIL_GLYPH+'</a>'+
    '</div>'+
    '<p class="copy">© 2026 JY YEÜNG. ALL RIGHTS RESERVED</p>'+
    '<p class="credit">WEBSITE BY JY YEÜNG</p>'+
    '<a class="privacy" href="privacy/">Privacy</a>'+
  '</div>';

const W={
 dang:{t:'DANG',c:'#597C86',cover:'cover-lilies-blue.jpg',stage:'stage-01-dang.jpg',carRatio:'16-9',
  body:'<h3 class="song-title">Dang</h3><p class="song-quote">"I wanted to explore the duality where I\'m good at making things look designed, while being pretty lost at making a corporate slide deck."</p>',
  slides:["01-dang/SELF INTRO_20261105_172740_0000.webp", "01-dang/SELF INTRO_20261105_172740_0001.webp", "01-dang/SELF INTRO_20261105_172740_0002.webp", "01-dang/SELF INTRO_20261105_172740_0003.webp", "01-dang/SELF INTRO_20261105_172740_0004.webp", "01-dang/SELF INTRO_20261105_172740_0005.webp", "01-dang/SELF INTRO_20261105_172740_0006.webp", "01-dang/SELF INTRO_20261105_172740_0007.webp", "01-dang/SELF INTRO_20261105_172740_0008.webp", "01-dang/SELF INTRO_20261105_172740_0009.webp", "01-dang/SELF INTRO_20261105_172740_0010.webp", "01-dang/SELF INTRO_20261105_172740_0011.webp", "01-dang/SELF INTRO_20261105_172740_0012.webp", "01-dang/SELF INTRO_20261105_172740_0013.webp", "01-dang/SELF INTRO_20261105_172740_0014.webp", "01-dang/SELF INTRO_20261105_172740_0015.webp", "01-dang/SELF INTRO_20261105_172740_0016.webp"],
  ig:'https://www.instagram.com/p/DbvWOeOEgox/?exln=eWRhMmNxYjVnMmU=',
  apple:{src:'https://embed.music.apple.com/us/song/1712185273',listen:'https://music.apple.com/us/album/dang-single/1712185258?i=1712185273',title:'Caroline Polachek – Dang',kind:'song'},
  spot:{src:'https://open.spotify.com/embed/track/7ddHGUPt5bOpVFAtX6TJN8?utm_source=generator',listen:'https://open.spotify.com/track/7ddHGUPt5bOpVFAtX6TJN8',title:'Dang on Spotify'}},
 mas:{t:'MAIN ANTAGONIST SYNDROME',c:'#B9270E',cover:'cover-orange-tongue.jpg',stage:'stage-02-mas.jpg',carRatio:'4-5',
  body:'<h3 class="song-title">Main Antagonist Syndrome</h3><p class="song-quote">"Main Character Syndrome is boring. I\'d rather have Main Antagonist Syndrome."</p>',
  slides:["02-mas/MAS_02_mix.webp", "02-mas/MAS_03.webp", "02-mas/MAS_04.webp", "02-mas/MAS_05.webp", "02-mas/MAS_06.webp", "02-mas/MAS_07.webp", "02-mas/MAS_08.webp", "02-mas/MAS_09.webp", "02-mas/MAS_10.webp"],
  ig:'https://www.instagram.com/p/DcgYMkEkuu3/?mdxt=MnR2d2x3andxYTJ4',
  apple:{src:'https://embed.music.apple.com/hk/playlist/pl.u-jV89b1Wud12y6xr',listen:'https://music.apple.com/hk/playlist/main-antagonist-syndrome/pl.u-jV89b1Wud12y6xr?l=en&ls',title:'Main Antagonist Syndrome on Apple Music',kind:'playlist'},
  spotSoon:true},
 ehw:{t:'EVERYTHING HE WANTED',c:'#096C71',cover:'cover-teal-smile.jpg',stage:'stage-03-ehw.jpg',carRatio:'4-5',
  body:'<h3 class="song-title">everything he wanted</h3><p class="song-quote"><span class="q-line">"Fueled by fantasy.</span><span class="q-line">In love with a feeling.</span><span class="q-line">Addicted to an architecture."</span></p>',
  slides:["03-ehw/EHW-_45crop-02.webp", "03-ehw/EHW-_45crop-03.webp", "03-ehw/EHW-_45crop-04.webp", "03-ehw/EHW-_45crop-05.webp", "03-ehw/EHW-_45crop-06.webp", "03-ehw/EHW-_45crop-07.webp", "03-ehw/EHW-_45crop-08.webp", "03-ehw/EHW-_45crop-09.webp", "03-ehw/EHW-_45crop-10.webp"],
  ig:'https://www.instagram.com/p/Deo-DPsnztj/?psln=MTYweXJsd290eDR5MA==',
  apple:{src:'https://embed.music.apple.com/us/song/1490336500',listen:'https://music.apple.com/us/album/in-the-afternoon/1490336497?i=1490336500',title:'MGMT – In the Afternoon',kind:'song'},
  spot:{src:'https://open.spotify.com/embed/track/3d9aUOk1b0muVMSt8eXeiV?utm_source=generator',listen:'https://open.spotify.com/track/3d9aUOk1b0muVMSt8eXeiV',title:'In the Afternoon on Spotify'}},
 about:{t:'ABOUT',c:'#0A246A',body:'<h3>everything he wanted</h3><p class="ph">[PLACEHOLDER] Art description — Jy copy coming next pass. Mustard field, three untidy portraits, stacked title. Full credit and process notes TBD.</p>'},
 credits:{t:'SPECIAL THANKS / CREDITS',c:'#0A246A',body:'<h3>CREDITS</h3><p class="ph">[PLACEHOLDER] Photography — Name here</p><p class="ph">[PLACEHOLDER] Styling — Name here</p><p class="ph">[PLACEHOLDER] Mix / Master — Name here</p><p class="ph">[PLACEHOLDER] Website — JY YEÜNG</p><h3>SPECIAL THANKS</h3><p class="ph">[PLACEHOLDER] Text here — Jy copy coming next pass</p><p class="ph">[PLACEHOLDER] Text here</p>'+CRED_FOOT}
};

const desk=innerWidth>800, B=document.body;
const RM=matchMedia('(prefers-reduced-motion: reduce)');
if(desk) B.classList.add('ehw-w2k-desk');
B.classList.add('ehw-w2k-align-left');
document.getElementById('ehw-stage').classList.add('is-entered');

const cue=document.getElementById('ehw-interact-cue');
cue.textContent='Tap each element to interact';
cue.classList.add('rect','is-on');
function placeBalloon(){
  // Reset to the CSS default (centred in the header→stage band, as on phone).
  cue.style.left=cue.style.right=cue.style.top=cue.style.transform='';
  if(!desk) return;
  const st=document.getElementById('ehw-stage').getBoundingClientRect();
  const m=document.querySelector('.ehw-main').getBoundingClientRect();
  // Beside the stage only when the gap really fits it; otherwise (≈801–999px) keep the band
  // placement so the cue never pushes the page wider than the viewport.
  if(innerWidth-st.right < cue.offsetWidth+2*12) return;
  cue.style.right='auto';
  cue.style.left=((st.right+innerWidth)/2 - m.left)+'px';
  cue.style.transform='translate(-50%,-50%)';
  cue.style.top=(st.top+st.height/2 - m.top)+'px';
}
placeBalloon();
addEventListener('resize',()=>{placeBalloon();if(desk)L.querySelectorAll('.win').forEach(fitDesk);});

const L=document.createElement('div');L.id='wlayer';B.appendChild(L);
let Z=10,tabs,clockEl;

function headerBottom(){
  const topbar=document.querySelector('.topbar');
  if(topbar){
    const b=topbar.getBoundingClientRect().bottom;
    if(b>0) return b;
  }
  const cs=getComputedStyle(document.documentElement);
  const th=parseFloat(cs.getPropertyValue('--top-h'))||52;
  return th;
}

function fmtClock(d){
  let time;
  try{ time=new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit',hour12:true}).format(d); }
  catch(e){ const h=d.getHours(); time=(h%12||12)+':'+String(d.getMinutes()).padStart(2,'0')+' '+(h<12?'AM':'PM'); }
  return time;
}
function tickClock(){ if(clockEl) clockEl.textContent=fmtClock(new Date()); }

if(desk){
  const tb=document.createElement('div');tb.id='taskbar';
  tb.innerHTML='<button class="tbtn power" title="Shut Down">'+PWR_GLYPH_BLACK+'Shut Down</button><span class="sep"></span><div class="tabs"></div><div class="clock" aria-live="off"></div>';
  B.appendChild(tb);tabs=tb.querySelector('.tabs');clockEl=tb.querySelector('.clock');
  tickClock(); setInterval(tickClock, 60*1000);
  tb.querySelector('.power').onclick=()=>showPower();
}

function siteReferrer(){
  try{
    if(!document.referrer) return null;
    const ref=new URL(document.referrer), root=new URL('./',document.baseURI);
    if(ref.origin!==location.origin||!ref.pathname.startsWith(root.pathname)) return null;
    if(ref.pathname===location.pathname) return null;
    return ref.href;
  }catch(e){ return null; }
}
function shutDown(){
  const ref=siteReferrer();
  if(!ref){ location.href='./'; return; }
  // Prefer a real Back when the previous entry in this tab is the referrer (keeps its scroll
  // position); otherwise (new tab, history unknown) navigate to the referrer directly.
  const nav=window.navigation, cur=nav&&nav.currentEntry;
  const prev=cur&&cur.index>0?nav.entries()[cur.index-1]:null;
  if(history.length>1&&prev&&prev.url===ref) history.back();
  else location.href=ref;
}
function showPower(){
  let dlg=document.getElementById('pwr-dlg');
  if(dlg){dlg.hidden=false;dlg._trigger=document.activeElement;dlg.querySelector('[data-a="no"]').focus({preventScroll:true});return;}
  dlg=document.createElement('div');dlg.id='pwr-dlg';dlg.setAttribute('role','alertdialog');dlg.setAttribute('aria-labelledby','pwr-title');
  dlg.innerHTML='<div class="scrim"></div><div class="box"><div class="tb"><span class="t" id="pwr-title">Shut Down</span><span class="btns"><button class="wb x" aria-label="Close">✕</button></span></div><div class="body"><div class="ico" aria-hidden="true">'+PWR_GLYPH_BLACK+'</div><div class="msg">Are you sure?</div></div><div class="acts"><button type="button" data-a="yes">Yes</button><button type="button" data-a="no">No</button></div></div>';
  B.appendChild(dlg);
  dlg._trigger=document.activeElement;
  const dismiss=()=>{dlg.hidden=true;if(dlg._trigger?.isConnected)dlg._trigger.focus({preventScroll:true});};
  dlg._dismiss=dismiss;
  dlg.querySelector('.scrim').onclick=dismiss;
  dlg.querySelector('.x').onclick=dismiss;
  dlg.querySelector('[data-a="no"]').onclick=dismiss;
  dlg.querySelector('[data-a="yes"]').onclick=shutDown;
  dlg.querySelector('[data-a="no"]').focus({preventScroll:true});
}

const win=id=>L.querySelector('.win[data-id="'+id+'"]');
const tab=id=>tabs&&tabs.querySelector('[data-id="'+id+'"]');
function sync(){if(!tabs)return;L.querySelectorAll('.win').forEach(w=>{const t=tab(w.dataset.id);if(t)t.classList.toggle('on',!w.classList.contains('inactive')&&!w.classList.contains('min'));});}
function focus(el){L.querySelectorAll('.win').forEach(w=>w.classList.add('inactive'));el.classList.remove('inactive','min');el.style.zIndex=++Z;sync();}
function minimise(id){const w=win(id);if(!w)return;const hadFocus=w.contains(document.activeElement);w.classList.add('min','inactive');if(hadFocus&&tab(id))tab(id).focus({preventScroll:true});const vis=[...L.querySelectorAll('.win:not(.min)')].sort((a,b)=>(+b.style.zIndex||0)-(+a.style.zIndex||0));if(vis[0])focus(vis[0]);else sync();}
function dispose(w){w._phoneDualObserver?.disconnect();w._scrollObserver?.disconnect();w._scrollTimers?.forEach(clearTimeout);}
// Phone modal: freeze the page behind the window and put it back exactly where it was.
let lockY=null;
const LOCK_PROPS=['position','top','left','right','width'];
function lockScroll(){
  if(lockY!==null) return;
  lockY=scrollY;
  Object.assign(B.style,{position:'fixed',top:(-lockY)+'px',left:'0',right:'0',width:'100%'});
}
function unlockScroll(){
  if(lockY===null) return;
  const y=lockY; lockY=null;
  LOCK_PROPS.forEach(k=>B.style.removeProperty(k));
  scrollTo(0,y);
}
function restore(t){if(t&&t.isConnected&&t!==document.body)t.focus({preventScroll:true});}
function close(id){const w=win(id);if(!w)return;const trigger=w._trigger;dispose(w);w.remove();if(tab(id))tab(id).remove();if(!desk){L.innerHTML='';B.classList.remove('ehw-w2k-pop');unlockScroll();}sync();restore(trigger);}
function closePhone(){const w=L.querySelector('.win');if(w)close(w.dataset.id);else{L.innerHTML='';B.classList.remove('ehw-w2k-pop');unlockScroll();}}

function dualHTML(d){
  if(!d.cover||!d.stage) return '';
  return `<div class="dual"><div class="cell"><img src="${BASE+d.cover}" alt=""></div><div class="cell"><img src="${BASE+d.stage}" alt=""></div></div>`;
}
function listenHTML(d){
  if(!d.apple) return '';
  // Locked platform label: LISTEN ON APPLE MUSIC SPOTIFY.
  let links=`<span class="listen-lead">LISTEN ON</span> <button type="button" class="tog is-on" data-prov="apple">APPLE MUSIC</button>`;
  if(d.spot) links+=` <button type="button" class="tog" data-prov="spot">SPOTIFY</button>`;
  else if(d.spotSoon) links+=` <span class="soon">SPOTIFY · SOON</span>`;
  return `<div class="listen-row">${links}</div>`;
}
function embedHTML(d){
  if(!d.apple) return '';
  const cls=d.apple.kind==='playlist'?'playlist':'song';
  let html=`<div class="embed-slot"><iframe class="apple-frame ${cls} is-on" data-prov="apple" title="${d.apple.title}" src="${d.apple.src}" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>`;
  if(d.spot){
    html+=`<iframe class="spot-frame" data-prov="spot" title="${d.spot.title}" src="${d.spot.src}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" frameborder="0" scrolling="no"></iframe>`;
  }
  html+='</div>';
  return html;
}
function wireToggle(el){
  const row=el.querySelector('.listen-row');
  const slot=el.querySelector('.embed-slot');
  if(!row||!slot) return;
  row.querySelectorAll('button.tog').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault(); e.stopPropagation();
      const prov=btn.dataset.prov;
      row.querySelectorAll('button.tog').forEach(b=>b.classList.toggle('is-on',b===btn));
      slot.querySelectorAll('iframe').forEach(f=>f.classList.toggle('is-on',f.dataset.prov===prov));
    });
  });
}
function igHTML(href){
  if(!href) return '';
  return `<a class="ig-link" href="${href}" target="_blank" rel="noopener">${IG_GLYPH}<span>View on Instagram</span></a>`;
}
function slideshowLabel(d){
  if(!d.slides||!d.slides.length) return '';
  return '<div class="slideshow-label">VIEW THE SLIDESHOW</div>';
}

const FIRST_SLIDES=3;
function slideSrc(rel){
  return SLIDES + rel.split('/').map(encodeURIComponent).join('/');
}

function fmtCounter(i,n){
  const w=Math.max(2, String(n).length);
  return String(i+1).padStart(w,'0')+'/'+String(n).padStart(w,'0');
}

function carouselHTML(d){
  if(!d.slides||!d.slides.length) return '';
  const ratio=d.carRatio||'4-5';
  const slides=d.slides.map((s,i)=>{
    return `<div class="car-slide" data-i="${i}"><img src="${slideSrc(s)}" alt="" draggable="false" decoding="async"${i<FIRST_SLIDES?'':' fetchpriority="low"'}></div>`;
  }).join('');
  return `<div class="car ratio-${ratio}" data-i="0" aria-roledescription="carousel">`+
    `<div class="car-stage">`+
      `<button type="button" class="car-nav prev" aria-label="Previous slide">‹</button>`+
      `<div class="car-viewport"><div class="car-track">${slides}</div></div>`+
      `<button type="button" class="car-nav next" aria-label="Next slide">›</button>`+
    `</div>`+
    `<div class="car-meta"><span class="car-idx">${fmtCounter(0,d.slides.length)}</span></div>`+
  `</div>`;
}

function wireCarousel(el){
  const car=el.querySelector('.car');
  if(!car) return;
  const track=car.querySelector('.car-track');
  const slides=[...car.querySelectorAll('.car-slide')];
  const idxEl=car.querySelector('.car-idx');
  const n=slides.length;
  let i=0;
  const prev=car.querySelector('.car-nav.prev'), next=car.querySelector('.car-nav.next');
  function setDisabled(btn,off){btn.classList.toggle('is-disabled',off);btn.setAttribute('aria-disabled',off?'true':'false');}
  function go(ni, animate){
    i=Math.max(0,Math.min(n-1,ni));
    setDisabled(prev,i===0);setDisabled(next,i===n-1);
    car.dataset.i=String(i);
    if(animate===false){
      track.style.transition='none';
    } else {
      track.style.transition=RM.matches?'none':'';
    }
    track.style.transform=`translateX(${-i*100}%)`;
    if(idxEl) idxEl.textContent=fmtCounter(i,n);
  }
  prev.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(i>0)go(i-1);});
  next.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(i<n-1)go(i+1);});
  car._go=go;
  go(0,false);
}


function wirePhoneDual(el){
  if(desk) return;
  const row=el.querySelector('.dual');
  if(!row) return;
  const imgs=[...row.querySelectorAll('img')];
  const fit=()=>{
    if(imgs.some(img=>!img.naturalWidth||!img.naturalHeight)) return;
    const gap=parseFloat(getComputedStyle(row).columnGap)||0;
    const ratios=imgs.map(img=>img.naturalWidth/img.naturalHeight);
    // Round down to Chrome's layout unit so rounding can never cause overflow.
    const h=Math.floor(((row.clientWidth-gap)/ratios.reduce((a,b)=>a+b,0))*64)/64;
    row.style.height=h+'px';
    imgs.forEach((img,i)=>{img.parentElement.style.width=(h*ratios[i])+'px';});
  };
  imgs.forEach(img=>img.addEventListener('load',fit,{once:true}));
  fit();
  const ro=new ResizeObserver(fit);ro.observe(row);
  el._phoneDualObserver=ro;
}


function wireScrollbar(el){
  const content=el.querySelector('.content');
  const sb=el.querySelector('.sb');
  if(!content||!sb) return;
  const th=sb.querySelector('.th');
  const tr=sb.querySelector('.tr');
  const up=sb.querySelector('.up');
  const dn=sb.querySelector('.dn');
  const LINE=48;

  function metrics(){
    const sh=content.scrollHeight;
    const ch=content.clientHeight;
    const st=content.scrollTop;
    const maxScroll=Math.max(0, sh-ch);
    const trackH=tr.clientHeight;
    const ratio=sh>0? Math.min(1, ch/sh) : 1;
    const thH=Math.max(18, Math.min(trackH, Math.round(trackH*ratio)));
    const maxTop=Math.max(0, trackH-thH);
    const top=maxScroll>0 ? Math.round((st/maxScroll)*maxTop) : 0;
    return {sh,ch,st,maxScroll,trackH,thH,maxTop,top};
  }
  function syncThumb(){
    const m=metrics();
    th.style.height=m.thH+'px';
    th.style.top=m.top+'px';
    // Always show classic chrome; dim when no overflow
    sb.style.opacity=m.maxScroll>0?'1':'0.55';
  }

  content.addEventListener('scroll', syncThumb, {passive:true});
  if(window.ResizeObserver){
    const ro=new ResizeObserver(()=>syncThumb());
    ro.observe(content);
    ro.observe(tr);
    el._scrollObserver=ro;
  }
  content.querySelectorAll('img').forEach(img=>{
    if(!img.complete) img.addEventListener('load', syncThumb);
    else syncThumb();
  });
  // iframes / late layout
  el._scrollTimers=[80,400,1200].map(ms=>setTimeout(syncThumb,ms));

  // Hold-to-repeat on arrows (classic feel) — covers click + hold
  function hold(btn, dir){
    let timer=null, first=null;
    const step=()=>{ content.scrollTop += dir*LINE; };
    const clear=()=>{ if(first) clearTimeout(first); if(timer) clearInterval(timer); first=timer=null; };
    btn.addEventListener('pointerdown', e=>{
      e.preventDefault();
      try{ btn.setPointerCapture(e.pointerId); }catch(_){}
      step();
      first=setTimeout(()=>{ timer=setInterval(step, 60); }, 350);
    });
    btn.addEventListener('pointerup', clear);
    btn.addEventListener('pointercancel', clear);
    btn.addEventListener('lostpointercapture', clear);
  }
  hold(up, -1); hold(dn, 1);

  // Track page jump
  tr.addEventListener('pointerdown', e=>{
    if(e.target===th || th.contains(e.target)) return;
    e.preventDefault();
    const rect=tr.getBoundingClientRect();
    const y=e.clientY-rect.top;
    const m=metrics();
    const clickTop=y - m.thH/2;
    content.scrollTop = m.maxTop>0 ? (Math.max(0, Math.min(m.maxTop, clickTop))/m.maxTop)*m.maxScroll : 0;
  });

  // Thumb drag
  th.addEventListener('pointerdown', e=>{
    e.preventDefault(); e.stopPropagation();
    try{ th.setPointerCapture(e.pointerId); }catch(_){}
    const startY=e.clientY;
    const startTop=th.offsetTop;
    const mv=ev=>{
      const m=metrics();
      const dy=ev.clientY-startY;
      const newTop=Math.max(0, Math.min(m.maxTop, startTop+dy));
      content.scrollTop = m.maxTop>0 ? (newTop/m.maxTop)*m.maxScroll : 0;
    };
    const upEv=()=>{
      th.removeEventListener('pointermove', mv);
      th.removeEventListener('pointerup', upEv);
      th.removeEventListener('pointercancel', upEv);
    };
    th.addEventListener('pointermove', mv);
    th.addEventListener('pointerup', upEv);
    th.addEventListener('pointercancel', upEv);
  });

  el._syncScroll=syncThumb;
}

// Desktop defaults: top already >= header (~52). Phone untouched.
// [left, top, width, height]. DANG/MAS/EHW share one width per tier (Jy 2026-11-09).
const SONG_W_DESK=400, SONG_W_PHONE=366;
const DB={dang:[540,56,SONG_W_DESK,720],mas:[660,56,SONG_W_DESK,740],ehw:[800,56,SONG_W_DESK,720],about:[480,360,360,260],credits:[720,80,380,520]};
const PB={dang:[null,48,SONG_W_PHONE,780],mas:[null,48,SONG_W_PHONE,780],ehw:[null,48,SONG_W_PHONE,780],about:[null,110,342,560],credits:[null,90,358,640]};
const EDGE=12;
// Desktop: keep every window above the taskbar and ≥EDGE inside the viewport. When the viewport is
// narrower than the stagger (rightmost window ends at 1200), slide the whole stagger left so its
// spacing survives; heights shrink to fit between header and taskbar.
const STAGGER_RIGHT=Math.max(...Object.values(DB).map(b=>b[0]+b[2])), TB_GAP=4, GRAB=80;
function deskBounds(){ return {top:headerBottom(), bottom:L.clientHeight-TB_GAP, right:L.clientWidth}; }
function clampXY(el,x,y){
  const k=deskBounds(), r=el.getBoundingClientRect(), btns=el.querySelector('.tb .btns').getBoundingClientRect();
  const rightChrome=r.right-btns.left;               // close/min/max cluster + frame on the right
  x=Math.min(Math.max(x, GRAB+rightChrome-el.offsetWidth), k.right-GRAB-8); // ≥80px of grab area visible
  y=Math.min(Math.max(y, k.top), Math.max(k.top, k.bottom-el.offsetHeight)); // under header, above taskbar
  return [x,y];
}
function fitDesk(el){
  const k=deskBounds(), top=Math.max(el.offsetTop,k.top);
  el.style.height=Math.max(120,Math.min(el._h, k.bottom-top))+'px';
  const [x,y]=clampXY(el,el.offsetLeft,top);
  el.style.left=x+'px'; el.style.top=y+'px';
}

function open(id){
  if(!W[id])return;
  const trigger=document.activeElement;
  if(!desk){lockScroll();L.querySelectorAll('.win').forEach(w=>dispose(w));L.innerHTML='<div class="dim"></div>';B.classList.add('ehw-w2k-pop');L.firstChild.onclick=closePhone;}
  else if(win(id)){focus(win(id));return;}
  const d=W[id],b=(desk?DB:PB)[id],el=document.createElement('div');
  el.className='win '+id;el.dataset.id=id;el.setAttribute('role','dialog');el.setAttribute('aria-label',d.t);if(!desk)el.setAttribute('aria-modal','true');
  const btns=desk?'<button class="wb mn" aria-label="Minimise window" title="Minimise"></button><button class="wb mx" disabled aria-disabled="true" title="Maximise (disabled)"></button><button class="wb x" aria-label="Close window">✕</button>':'<button class="wb x" aria-label="Close window">✕</button>';
  // Song windows: dual → title+quote → listen → embed → VIEW THE SLIDESHOW → carousel → IG
  const body=dualHTML(d)+d.body+listenHTML(d)+embedHTML(d)+slideshowLabel(d)+carouselHTML(d)+igHTML(d.ig);
  el.innerHTML=`<div class="tb"><span class="t">${d.t}</span><span class="btns">${btns}</span></div><div class="client"><div class="content">${body}</div><div class="sb" aria-hidden="true"><div class="a up" role="button" aria-label="Scroll up"></div><div class="tr"><div class="th"></div></div><div class="a dn" role="button" aria-label="Scroll down"></div></div></div>`;
  el._trigger=trigger;
  let top=b[1], w=Math.min(b[2], innerWidth-2*EDGE), h=b[3], left;
  el._h=b[3];
  if(desk){
    const k=deskBounds(), shift=Math.max(0, STAGGER_RIGHT-(innerWidth-EDGE));
    top=Math.max(top, k.top); h=Math.min(h, k.bottom-top);
    left=Math.max(EDGE, Math.min(b[0]-shift, innerWidth-w-EDGE));
  }
  else left=Math.round((innerWidth-w)/2);
  Object.assign(el.style,{left:left+'px',top:top+'px',width:w+'px',height:h+'px'});
  L.appendChild(el);
  wirePhoneDual(el);
  wireToggle(el);
  wireCarousel(el);
  wireScrollbar(el);
  el.querySelector('.x').onclick=()=>close(id);
  el.addEventListener('pointerdown',()=>focus(el));
  if(desk){
    el.querySelector('.mn').onclick=e=>{e.stopPropagation();minimise(id);};
    const t=document.createElement('button');t.className='tbtn tab';t.dataset.id=id;
    t.innerHTML=`<i style="background:${d.c}"></i><span>${d.t}</span>`;tabs.appendChild(t);
    t.onclick=()=>{if(t.classList.contains('on'))minimise(id);else focus(el);};
    drag(el);
  }
  focus(el);
  el.querySelector('.x').focus({preventScroll:true});
}
function drag(el){
  const tb=el.querySelector('.tb');
  tb.addEventListener('pointerdown',e=>{
    if(e.target.closest('.wb'))return;
    tb.setPointerCapture(e.pointerId);
    const sx=e.clientX-el.offsetLeft,sy=e.clientY-el.offsetTop;
    const mv=ev=>{
      // Header is a restricted zone; taskbar too. Keep ≥80px of title-bar grab area on screen.
      const [x,y]=clampXY(el,ev.clientX-sx,ev.clientY-sy);
      el.style.left=x+'px';el.style.top=y+'px';
    };
    const up=()=>{tb.removeEventListener('pointermove',mv);tb.removeEventListener('pointerup',up);};
    tb.addEventListener('pointermove',mv);tb.addEventListener('pointerup',up);
  });
}

const map={dang:'dang',mas:'mas',ehw:'ehw',art:'about',credits:'credits'};
document.querySelectorAll('.ehw-hotspot').forEach(h=>h.addEventListener('click',e=>{e.preventDefault();open(map[h.dataset.modal]);}));
// Escape closes the focused window; no delayed open/close animation.
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  const power=document.getElementById('pwr-dlg');
  if(power&&!power.hidden){power._dismiss();return;}
  const active=L.querySelector('.win:not(.inactive):not(.min)');
  if(active){e.preventDefault();close(active.dataset.id);}
});
// Focus trap: Tab/Shift+Tab cycle inside the window that holds focus (phone: the one modal window).
const FOCUSABLE='a[href],button:not([disabled]),iframe,input,select,textarea,[tabindex]:not([tabindex="-1"])';
function focusables(scope){return [...scope.querySelectorAll(FOCUSABLE)].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&!e.closest('[hidden]'));}
function trapScope(){
  const power=document.getElementById('pwr-dlg');
  if(power&&!power.hidden) return power.querySelector('.box');
  if(!desk) return L.querySelector('.win');
  const a=document.activeElement;
  return a&&a.closest?a.closest('#wlayer .win:not(.min)'):null;
}
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab')return;
  const scope=trapScope(); if(!scope)return;
  const f=focusables(scope); if(!f.length)return;
  const first=f[0], last=f[f.length-1], a=document.activeElement;
  if(!scope.contains(a)){e.preventDefault();(e.shiftKey?last:first).focus();return;}
  if(e.shiftKey&&a===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&a===last){e.preventDefault();first.focus();}
},true);
// Safety net for focus leaving through an embed iframe or by script on modal surfaces.
document.addEventListener('focusin',e=>{
  const power=document.getElementById('pwr-dlg');
  const scope=power&&!power.hidden?power.querySelector('.box'):(!desk?L.querySelector('.win'):null);
  if(scope&&!scope.contains(e.target)){const f=focusables(scope);if(f[0])f[0].focus();}
});
// Preload window images while the load gate shows: dual images + slide 1 gate the loader
// (bounded by the existing 2.2s cap); slides 2-3 follow at high priority, the rest at low priority. Images are decoded and
// kept referenced so windows paint them on open from memory cache.
const KEEP=[];
function preload(src,priority){
  return new Promise(resolve=>{
    const img=new Image(); img.decoding='async'; if('fetchPriority' in img) img.fetchPriority=priority;
    img.onload=()=>{(img.decode?img.decode():Promise.resolve()).catch(()=>{}).then(()=>resolve(src));};
    img.onerror=()=>resolve(src);
    img.src=src; KEEP.push(img);
  });
}
const SONGS=['dang','mas','ehw'];
// Gate waits (bounded) only for what each window paints first: its two dual images + slide 1.
const critical=[].concat(...SONGS.map(id=>[BASE+W[id].cover,BASE+W[id].stage,slideSrc(W[id].slides[0])]));
const soon=[].concat(...SONGS.map(id=>W[id].slides.slice(1,FIRST_SLIDES).map(slideSrc)));
const later=[].concat(...SONGS.map(id=>W[id].slides.slice(FIRST_SLIDES).map(slideSrc)));
const criticalLoaded=Promise.all(critical.map(src=>preload(src,'high')));
const tipFont=document.querySelector('.load-gate-tip')&&document.fonts?document.fonts.load('17px "VT323"').catch(()=>{}):Promise.resolve();
criticalLoaded.then(()=>Promise.all(soon.map(src=>preload(src,'high')))).then(()=>later.forEach(src=>preload(src,'low')));
window.__ehwPreload={critical:critical.length,soon:soon.length,later:later.length,done:criticalLoaded.then(()=>performance.now())};
// Preserve the established first-open load gate; never wait on third-party embeds.
const gate=document.getElementById('loadGate');
if(gate){
  const started=performance.now();
  const reduced=RM.matches;
  // Phone tip must stay readable: on phone keep the gate up at least TIP_MS (VT323 is preloaded and awaited).
  const TIP_MS=1200;
  const images=[...document.querySelectorAll('.ehw-stage img')];
  const loaded=Promise.all(images.map(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});})));
  const ready=Promise.all([loaded,criticalLoaded,tipFont]);
  Promise.race([ready,new Promise(resolve=>setTimeout(resolve,2200))]).then(()=>{
    const min=(!desk&&gate.querySelector('.load-gate-tip'))?TIP_MS:(reduced?0:320);
    setTimeout(()=>{gate.classList.add('is-done');gate.setAttribute('aria-busy','false');setTimeout(()=>gate.remove(),700);},Math.max(0,min-(performance.now()-started)));
  });
}
})();
