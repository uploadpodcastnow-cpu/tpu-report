/* TPU Podcast Impact Report — shared design. Every client's portal loads this one file.
   Change the design here once; every client sees it the next time their report opens.
   Each portal sets window.TPU_DATA_URL (the client's published Data tab) before loading this file. */
(function(){
  var host=document.getElementById('tpu-report');
  if(!host){host=document.createElement('div');host.id='tpu-report';document.body.appendChild(host);}
  var st=document.createElement('style');st.textContent="\n#tpu-report{--accent:#7d8261;--c-ep:var(--accent);--c-reel:#46555e;--c-clip:color-mix(in srgb,var(--accent) 55%,#fff);--ink:#1c1c1a;--muted:#6b6b66;--line:#e7e4dc;--card:#f7f5f0;--good:#2e7d4f;--bad:#b3412e;\n  font-family:'Poppins','Segoe UI',Helvetica,Arial,sans-serif;color:var(--ink);background:#fff;max-width:1040px;margin:0 auto;padding:28px 22px 36px;box-sizing:border-box}\n#tpu-report *{box-sizing:border-box}\n.t-head{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:16px;padding-bottom:18px;border-bottom:1px solid var(--line)}\n.t-logo img{max-height:64px;max-width:220px;display:block}\n.t-badge{display:inline-block;background:#46555e;color:#fff;padding:8px 14px;border-radius:4px;font-size:13px;letter-spacing:.08em;text-transform:uppercase}\n.t-title{margin:14px 0 0;font-size:clamp(26px,4.6vw,40px);font-weight:800;letter-spacing:-.01em;line-height:1.05}\n.t-title span,.t-h2 span{color:var(--accent)}\n.t-right{display:flex;align-items:center;gap:14px}\n.t-art{width:104px;height:104px;border-radius:10px;object-fit:cover;box-shadow:0 2px 10px rgba(0,0,0,.12);display:block}\n.t-period{font-size:15px;color:var(--muted);text-align:right;padding-top:4px}\n@media(max-width:560px){.t-art{width:72px;height:72px}.t-right{flex-direction:column-reverse;align-items:flex-end;gap:6px}.t-period{font-size:12px;padding-top:0}.t-badge{font-size:11px;padding:6px 10px}}\n.t-period b{color:var(--ink)}\n.t-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0 6px}\n.t-tab{border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:8px;padding:7px 14px;font:inherit;font-size:13px;cursor:pointer;min-width:54px;transition:border-color .15s,background .15s}\n.t-tab:hover{border-color:var(--accent)}\n.t-tab[aria-selected=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}\n.t-lede{font-size:18px;line-height:1.5;margin:18px 0 6px;max-width:none}\n.t-sec{margin-top:30px}\n.t-h2{font-size:15px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;margin:0 0 4px;display:flex;align-items:center;gap:8px}\n.t-h2::before{content:'';width:4px;height:16px;border-radius:2px;background:var(--accent);flex:none}\n.t-h2 span{margin-left:-4px}\n.t-sub{font-size:13px;color:var(--muted);margin:0 0 14px}\n.t-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}\n.t-card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}\n.t-kpi.hero{border-left:4px solid var(--accent);background:color-mix(in srgb,var(--accent) 10%,#fff)}\n.t-klabel{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}\n.t-kval{font-size:clamp(26px,3.6vw,34px);font-weight:800;margin:6px 0 4px;font-variant-numeric:tabular-nums}\n.t-kchg{font-size:12.5px;color:var(--muted)}\n.t-kchg b.up{color:var(--good)} .t-kchg b.down{color:var(--bad)}\n.t-seg{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}\n.t-seg button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}\n.t-seg button[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff}\n.t-chart{position:relative}\n.t-chart svg{display:block;width:100%;height:auto;overflow:visible}\n.t-chart text{font-size:11px;fill:var(--muted)}\n.t-tip{position:absolute;pointer-events:none;background:#fff;border:1px solid var(--line);box-shadow:0 4px 14px rgba(0,0,0,.08);border-radius:8px;padding:6px 10px;font-size:12px;opacity:0;white-space:nowrap}\n.t-tip b{display:block;font-size:14px}\n.t-grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px}\n.t-mixtot{font-size:13px;color:var(--muted);margin:4px 0 14px}\n.t-mixtot b{color:var(--ink)}\n.t-row{display:grid;grid-template-columns:minmax(84px,1fr) 2fr auto;gap:8px;align-items:center;font-size:12.5px;margin-bottom:9px}\n.t-track{height:10px;background:rgba(0,0,0,.06);border-radius:5px;overflow:hidden}\n.t-bar{height:100%;background:var(--accent);border-radius:5px}\n.t-val{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}\n.t-val span{color:var(--muted);margin-left:6px}\n.t-wrap{overflow-x:auto}\n.t-table{width:100%;border-collapse:collapse;font-size:14px}\n.t-table th{text-align:left;font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--ink);font-weight:700;padding:8px 10px;border-bottom:2px solid var(--accent);white-space:nowrap}\n.t-table td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}\n.t-num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.t-strong{font-weight:700}\n.t-boost{color:var(--accent);font-weight:800;margin-left:3px;cursor:help}\n.t-rank{width:34px;font-weight:800;font-size:18px;color:var(--accent);font-variant-numeric:tabular-nums}\n.t-small{display:block;font-size:12px;color:var(--muted);margin-top:2px}\n.t-callout{text-align:center;font-weight:700;font-size:17px;margin:16px 0 0}\n.t-callout b{color:var(--accent)}\n.t-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:12px}\n.t-ins{display:grid;gap:12px}\n.t-insc{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:14px 16px;line-height:1.55;font-size:14.5px}\n.t-insc b{display:block;margin-bottom:2px;color:var(--ink)}\n.t-insc{background:color-mix(in srgb,var(--accent) 5%,#fff)}\n.t-wait p{margin:8px 0 0;font-size:15px;line-height:1.6;max-width:none}\n.t-empty{color:var(--muted);font-size:13px;margin:0}\n.t-foot{margin-top:30px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;font-size:12px;color:var(--muted)}\n.t-foot details summary{cursor:pointer;color:var(--ink);font-weight:600}\n.t-foot dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 12px;margin:8px 0 0}\n.t-foot dt{font-weight:600;color:var(--ink)} .t-foot dd{margin:0}\n.t-brand{font-size:18px;font-weight:700;color:var(--ink)} .t-brand span{color:#c9a46a}\n.t-msg{padding:40px 0;text-align:center;color:var(--muted)}\n.t-nav{margin:18px 0 6px;display:grid;gap:0;padding:4px 18px;border:1px solid var(--line);border-color:color-mix(in srgb,var(--accent) 28%,#fff);border-left:4px solid var(--accent);border-radius:12px;background:#fbfaf7;background:color-mix(in srgb,var(--accent) 6%,#fff)}\n.t-navrow{display:grid;grid-template-columns:118px minmax(0,1fr);align-items:start;gap:10px;padding:12px 0}\n.t-navrow+.t-navrow{border-top:1px solid color-mix(in srgb,var(--accent) 18%,#fff)}\n.t-navctl{display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.t-nav .t-tabs{margin:0;gap:6px;display:contents}\n.t-nav .t-navctl.t-tabs{display:flex}\n.t-lbl{font-size:11.5px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.08em;padding-top:9px}\n.t-year{appearance:none;-webkit-appearance:none;border:1px solid var(--line);background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%236b6b66' stroke-width='1.5'/%3E%3C/svg%3E\") no-repeat right 10px center/10px;border-radius:8px;padding:7px 28px 7px 12px;font:inherit;font-size:13px;font-weight:600;color:var(--ink);cursor:pointer}\n.t-tools{display:flex;gap:6px;flex-wrap:wrap}\n.t-tool{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:8px;padding:6px 11px;font:inherit;font-size:12.5px;cursor:pointer}\n.t-tool:hover{border-color:var(--accent)}\n.t-tool svg{width:14px;height:14px}\n.t-tab.t-range[aria-selected=\"true\"]{background:var(--accent);border-color:var(--accent)}\n@media(max-width:560px){.t-navrow{grid-template-columns:1fr;gap:6px}.t-lbl{padding-top:0}}\n.t-mlink{background:none;border:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px;text-align:left}\n.t-mlink:hover{text-decoration-color:var(--accent)}\n.t-hl{display:grid;gap:8px}\n.t-hl div{font-size:14px;line-height:1.5}\n.t-hl b{display:inline-block;min-width:76px;color:var(--accent)}\n#tpu-report a.t-link{color:inherit;text-decoration:underline;text-decoration-color:var(--accent);text-decoration-thickness:2px;text-underline-offset:3px}\n#tpu-report a.t-link:hover{color:var(--accent)}\n#tpu-report a.t-nlink{color:inherit;text-decoration:none;border-bottom:1px dotted var(--muted)}\n#tpu-report a.t-nlink:hover{color:var(--accent);border-color:var(--accent)}\n.t-watch{display:inline-block;margin-top:6px;font-size:13px;font-weight:600}\n#tpu-report .t-watch a{color:var(--accent);text-decoration:none}\n.t-pnote{display:none}\n.t-page+.t-page{break-before:page;page-break-before:always}\n@page{margin:12mm}\n@media print{\n  #tpu-report{max-width:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n  .t-nav,.t-seg,.t-tip,.t-foot summary{display:none!important}\n  .t-mlink{text-decoration:none}\n  .t-pnote{display:block;font-size:11px;color:var(--muted);margin:4px 0 0}\n  .t-card,.t-kpi,.t-insc,.t-table tr,.t-head{break-inside:avoid;page-break-inside:avoid}\n  .t-sec{margin-top:18px}\n  .t-two{grid-template-columns:1fr!important}\n  .t-grid3{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n  .t-wrap{overflow:visible}\n  .t-scr{display:none}\n  .t-h2,.t-sub{break-after:avoid;page-break-after:avoid}\n  .t-keep{break-inside:avoid;page-break-inside:avoid}\n  .t-kpis{grid-template-columns:repeat(4,minmax(0,1fr))}\n  .t-lede{font-size:15px}\n  .t-foot details>*{display:block}\n  #tpu-report a.t-link,#tpu-report a.t-nlink{text-decoration:none;border:0}\n  #tpu-report.t-all #t-root{display:none!important}\n}\n.t-newhead{font-size:15.5px;line-height:1.5;margin:4px 0 16px}.t-newhead b{color:var(--accent);font-size:18px}\n.t-nrow{display:grid;grid-template-columns:110px minmax(0,1fr) 250px;gap:12px;align-items:center;font-size:13px;margin-bottom:12px}\n.t-nlbl{font-weight:600}.t-ntrack{height:16px;border-radius:8px;overflow:hidden;background:color-mix(in srgb,var(--accent) 22%,#fff)}\n.t-nnew{height:100%;background:var(--accent)}.t-nval{white-space:nowrap;text-align:right;font-variant-numeric:tabular-nums;color:var(--muted)}\n.t-dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--accent);margin:0 5px 0 0;vertical-align:0}.t-dot2{background:color-mix(in srgb,var(--accent) 22%,#fff);margin-left:10px}\n.t-nkey{display:flex;gap:18px;font-size:12px;color:var(--muted);margin-top:6px}.t-nkey .t-dot2{margin-left:0}\n@media(max-width:560px){.t-nrow{grid-template-columns:1fr}}\n.t-tdot{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:7px;vertical-align:-1px}\n.t-seg button[aria-pressed=\"true\"]{background:var(--sc,var(--accent));border-color:var(--sc,var(--accent))}\n.t-kpi.t-typed{border-top:5px solid var(--tc);background:color-mix(in srgb,var(--tc) 7%,#fff)}\n.t-kpi.t-typed .t-klabel{color:var(--tc)}\n.t-tcard{border-top:5px solid var(--tc)!important;background:color-mix(in srgb,var(--tc) 5%,#fff)!important}.t-tcard>.t-klabel{color:var(--tc)}\n.t-rel .t-cv{background:color-mix(in srgb,var(--c-ep) 11%,#fff);width:130px}\n.t-rel th.t-cv svg,.t-rel th.t-cl svg{vertical-align:-1px;margin-right:3px}\n.t-rel .t-cl{background:color-mix(in srgb,var(--ink) 4%,#fff);width:130px}\n.t-rel .t-num.t-strong{width:110px}\n.t-rel .t-grp th{font-size:10.5px;letter-spacing:.08em;text-align:center;border-bottom:0;padding:6px 10px 2px;color:var(--muted)}\n.t-rel .t-grp th svg,.t-key svg{vertical-align:-1px;margin-right:2px}\n.t-rel .t-grp th.t-cv{border-radius:8px 8px 0 0;color:color-mix(in srgb,var(--c-ep) 70%,#1c1c1a)}\n.t-rel .t-grp th.t-cl{border-radius:8px 8px 0 0}\n.t-rel .t-totrow td{border-top:2px solid var(--line);border-bottom:0}\n.t-key{display:inline-block;padding:1px 7px;border-radius:6px;font-weight:600;color:var(--ink);white-space:nowrap}\n.t-kv{background:color-mix(in srgb,var(--c-ep) 14%,#fff)}.t-kl{background:color-mix(in srgb,var(--ink) 6%,#fff)}\n.t-dash{color:#c9c6bd}\n#t-print{display:none}\n@media print{#tpu-report.t-all #t-print{display:block}}\n";document.head.appendChild(st);
  host.innerHTML="<div class=\"t-msg\" id=\"t-loading\">Loading your report\u2026</div><div id=\"t-root\" hidden></div><div id=\"t-print\"></div>";
})();

(function(){
var DATA_URL = window.TPU_DATA_URL || "";

var root = document.getElementById('t-root'), loading = document.getElementById('t-loading');
var fmt = function(n){return n==null||isNaN(n)?'—':Math.round(n).toLocaleString('en-US');};
var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
var monthName=function(m){var p=m.split('-');return MONTHS[+p[1]-1]+' '+p[0];};
var monthShort=function(m){var p=m.split('-');return MONTHS[+p[1]-1].slice(0,3)+" '"+p[0].slice(2);};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};

function parseCSV(text){
  var rows=[],row=[],f='',q=false,i,c;
  for(i=0;i<text.length;i++){c=text[i];
    if(q){ if(c=='"'){ if(text[i+1]=='"'){f+='"';i++;} else q=false; } else f+=c; }
    else if(c=='"') q=true; else if(c==','){row.push(f);f='';}
    else if(c=='\n'||c=='\r'){ if(c=='\r'&&text[i+1]=='\n') i++; row.push(f); rows.push(row); row=[]; f=''; }
    else f+=c; }
  if(f!==''||row.length){row.push(f);rows.push(row);}
  var h=rows.shift().map(function(s){return s.trim().toLowerCase();});
  return rows.filter(function(r){return r.some(function(x){return x.trim()!=='';});}).map(function(r){var o={};h.forEach(function(k,j){o[k]=(r[j]||'').trim();});return o;});
}

function build(data){
  var S={}; data.filter(function(r){return r.metric==='setting';}).forEach(function(r){S[r.platform]=r.detail;});
  var box=document.getElementById('tpu-report');
  if(S.accent_color) box.style.setProperty('--accent',S.accent_color);
  if(S.badge_color) box.style.setProperty('--c-reel',S.badge_color);
  // Content-type colors: bright versions of the brand colors, kept clearly apart.
  (function(){
    var hx=function(c){return /^#[0-9a-f]{6}$/i.test(c||'')?c:null;};
    var hsl=function(c){var r=parseInt(c.substr(1,2),16)/255,g=parseInt(c.substr(3,2),16)/255,b=parseInt(c.substr(5,2),16)/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,d=mx-mn,h=0,s2=d?d/(1-Math.abs(2*l-1)):0;
      if(d){h=mx===r?((g-b)/d)%6:mx===g?(b-r)/d+2:(r-g)/d+4;h*=60;if(h<0)h+=360;}return {h:h,s:s2};};
    var toHex=function(h,s2,l){var c=(1-Math.abs(2*l-1))*s2,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2,v=[[c,x,0],[x,c,0],[0,c,x],[0,x,c],[x,0,c],[c,0,x]][Math.floor(((h%360)+360)%360/60)];
      return '#'+v.map(function(q){return ('0'+Math.round((q+m)*255).toString(16)).slice(-2);}).join('');};
    var dist=function(a,b){var d=Math.abs(a-b)%360;return d>180?360-d:d;};
    var hueOf=function(c){if(!hx(c))return null;var o=hsl(c);return o.s<0.12?null:o.h;};
    var hs=[hueOf(S.accent_color),hueOf(S.badge_color),hueOf(S.clip_color||S.third_color)];
    if(hs[0]==null)hs[0]=hs[1]!=null?hs[1]:205;
    var pick=function(taken,pref){if(pref!=null&&taken.every(function(t){return dist(t,pref)>=35;}))return pref;
      var LIST=[210,42,24,175,135,8,195,55];
      for(var th=60;th>=30;th-=10)for(var k=0;k<LIST.length;k++){var cand=LIST[k];if(taken.every(function(t){return dist(t,cand)>=th;}))return cand;}
      return (taken[0]+180)%360;};
    hs[1]=pick([hs[0]],hs[1]);hs[2]=pick([hs[0],hs[1]],hs[2]);
    var L=function(h){return h>48&&h<85?0.38:h>35&&h<190?0.42:0.50;},SAT=function(h){return h>48&&h<85?0.58:h>35&&h<75?0.78:0.68;};
    [['episode_color','--c-ep',0],['reel_color','--c-reel',1],['clip_color','--c-clip',2]].forEach(function(c){
      var set=c[0]!=='clip_color'||S.vivid_clip==='No'?hx(S[c[0]]):null;
      box.style.setProperty(c[1],set||toHex(hs[c[2]],SAT(hs[c[2]]),L(hs[c[2]])));});
  })();
  var CV={total:'var(--accent)',episodes:'var(--c-ep)',reels:'var(--c-reel)',clips:'var(--c-clip)'};
  var TD=function(k){return '<span class="t-tdot" style="background:'+CV[k]+'"></span>';};
  var yes=function(v){return /^(yes|true|y|1)$/i.test(v||'');};
  var months=data.filter(function(r){return r.metric==='approved'&&yes(r.value);}).map(function(r){return r.month;}).sort();
  if(!months.length){loading.hidden=true;root.hidden=false;
    root.innerHTML='<header class="t-head"><div><div class="t-logo">'+(S.logo_url?'<img src="'+esc(S.logo_url)+'" alt="'+esc(S.client_name)+'">':'<span class="t-badge"'+(S.badge_color?' style="background:'+esc(S.badge_color)+'"':'')+'>'+esc(S.client_name||'Your Podcast')+'</span>')+'</div><h1 class="t-title">Podcast <span>Impact</span> Report</h1></div><div class="t-right">'+(S.artwork_url?'<img class="t-art" src="'+esc(S.artwork_url)+'" alt="'+esc(S.client_name)+' show artwork">':'')+'</div></header>'
      +'<section class="t-sec t-card t-wait"><h2 class="t-h2">Your first report <span>is on its way</span></h2><p>We are gathering your numbers from every platform your show is on. Your first monthly report will appear right here as soon as it is ready, and every month after that it updates on its own.</p><p class="t-sub" style="margin:10px 0 0">You will see total views and listens, where your audience finds you, your top episodes and reels, and our recommendations.</p></section>'
      +'<footer class="t-foot"><span></span><div class="t-brand">The<span>Podcast</span>Upload</div></footer>';
    return;}
  var num=function(v){var n=parseFloat(String(v).replace(/,/g,''));return isNaN(n)?null:n;};
  var inM=function(ms){var o={};ms.forEach(function(m){o[m]=1;});return o;};
  var by=function(ms,metric){var o=inM(ms);return data.filter(function(r){return o[r.month]&&r.metric===metric&&num(r.value)!=null;});};
  var sum=function(rs){return rs.reduce(function(a,r){return a+num(r.value);},0);};
  var byPlatform=function(rs){var o={},out=[];rs.forEach(function(r){if(!o[r.platform]){o[r.platform]={platform:r.platform,value:0};out.push(o[r.platform]);}o[r.platform].value+=num(r.value);});return out;};
  var showClips=S.show_clips===undefined||yes(S.show_clips);
  var okUrl=function(u){return /^https?:\/\//i.test(u||'');};
  // Each top episode / reel link must be that platform's own single-post link, or it isn't shown.
  var LP={'YouTube Shorts':/^https:\/\/(www\.|m\.)?youtube\.com\/shorts\/[\w-]{6,}/i,'YouTube':/^https:\/\/(www\.|m\.)?(youtube\.com\/(watch\?v=|shorts\/|live\/)|youtu\.be\/)[\w-]{6,}/i,'Instagram':/^https:\/\/(www\.)?instagram\.com\/(reel|reels|p)\/[\w-]+/i,
    'Facebook':/^https:\/\/(www\.|m\.)?(facebook\.com\/(reel\/\d+|watch\/?\?v=\d+|[^\/?]+\/videos\/|share\/(r|v)\/)|fb\.watch\/)/i,'TikTok':/^https:\/\/(www\.)?tiktok\.com\/@[\w.]+\/video\/\d+/i,'X':/^https:\/\/(www\.)?(x|twitter)\.com\/\w+\/status\/\d+/i,'LinkedIn':/^https:\/\/(www\.)?linkedin\.com\/(posts\/|feed\/update\/)/i};
  var linkFits=function(pl,u){var ps=String(pl||'').split('/').map(function(x){return LP[x.trim()];}).filter(Boolean);return !ps.length?okUrl(u):ps.some(function(re){return re.test(u);});};
  data.forEach(function(r){if((r.metric==='top_reel'||r.metric==='top_episode')&&r.link&&!linkFits(r.platform,r.link))r.link='';});
  var isB=function(r){return yes(r.boosted);};var BST='<span class="t-boost" title="Boosted (paid promotion)">✱</span>';var BNOTE='<p class="t-sub" style="margin:10px 0 0">✱ Boosted (paid promotion)</p>';
  var A=function(u,inner,cls){return okUrl(u)?'<a class="'+(cls||'t-link')+'" href="'+esc(u)+'" target="_blank" rel="noopener">'+inner+'</a>':inner;};
  var yearOf=function(m){return m.slice(0,4);};
  var years=months.map(yearOf).filter(function(y,i,a){return a.indexOf(y)===i;});
  function totals(ms){var au=sum(by(ms,'episode_audio')),vi=sum(by(ms,'episode_video')),re=sum(by(ms,'reel')),cl=showClips?sum(by(ms,'clip')):0;
    return {total:au+vi+re+cl,episodes:au+vi,reels:re,clips:cl};}
  var series=months.map(function(m){var t=totals([m]);t.month=m;return t;});
  var latest=months[months.length-1];
  var state={kind:'month',month:latest,n:0,year:yearOf(latest),metric:'total'};
  var ICON_PRINT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>';

  // A "view" is a list of months plus labels. Month view = one month.
  function viewFor(st){
    if(st.kind==='month')return {kind:'month',months:[st.month],label:monthName(st.month),short:monthName(st.month)};
    var ms,label;
    if(st.kind==='last'){ms=months.slice(-st.n);label='Last '+st.n+' months';}
    else {ms=months.filter(function(m){return yearOf(m)===st.year;});label=st.year+' at a glance';}
    var span=ms.length>1?monthShort(ms[0]).replace(" '",' ')+' – '+monthShort(ms[ms.length-1]).replace(" '",' '):monthName(ms[0]);
    span=span.replace(/ (\d\d)( |$)/g,' 20$1$2');
    var note=(st.kind==='last'&&ms.length<st.n)?' ('+ms.length+' months of data so far)':'';
    return {kind:'range',months:ms,label:label,note:note,short:span};
  }
  function prevOf(v){var i=months.indexOf(v.months[0]),n=v.months.length;
    if(v.kind==='range'&&state.kind==='year'){var py=String(+v.months[0].slice(0,4)-1),pm=v.months.map(function(m){return py+m.slice(4);});
      return pm.every(function(m){return months.indexOf(m)>-1;})?{months:pm,label:'the same months in '+py}:null;}
    if(i-n<0)return null;var pm2=months.slice(i-n,i);
    return {months:pm2,label:n===1?monthName(pm2[0]):'the '+n+' months before'};}

  function topContent(ms){
    var te={};by(ms,'top_episode').forEach(function(r){var k=r.title;if(!te[k])te[k]={title:r.title,detail:r.detail,month:r.month,p:{},links:{},total:0};
      te[k].p[r.platform]=(te[k].p[r.platform]||0)+num(r.value);te[k].total+=num(r.value);if(isB(r))te[k].boosted=true;if(okUrl(r.link))te[k].links[r.platform]=r.link;});
    var tes=Object.keys(te).map(function(k){var e=te[k];e.link=e.links.YouTube||e.links.Facebook||e.links.Audio||'';
      Object.keys(e.links).forEach(function(p){if(!e.link)e.link=e.links[p];});return e;}).sort(function(a,b){return b.total-a.total;});
    var tr=by(ms,'top_reel').sort(function(a,b){return num(b.value)-num(a.value);});
    return {eps:tes,reels:tr};
  }
  function linkify(text,tc){
    var h=esc(text),used={};
    var items=tc.eps.map(function(e){var ep=(e.detail.match(/Ep\.?\s?\d+/i)||[''])[0];return {keys:[e.title,ep],link:e.link};})
      .concat(tc.reels.map(function(r){return {keys:[r.title],link:r.link};}));
    items.forEach(function(it){if(!okUrl(it.link))return;
      for(var j=0;j<it.keys.length;j++){var k=it.keys[j];if(!k||k.length<4||used[k])continue;var ek=esc(k),at=h.indexOf(ek);
        if(at>-1&&h.lastIndexOf('<a',at)<=h.lastIndexOf('</a>',at)){h=h.slice(0,at)+A(it.link,ek)+h.slice(at+ek.length);used[k]=1;break;}}});
    return h;
  }

  function nav(v){
    var h='<div class="t-nav">';
    var ym=months.filter(function(m){return yearOf(m)===state.year;});
    h+='<div class="t-navrow"><span class="t-lbl">Month</span><div class="t-navctl">'+(years.length>1?'<select class="t-year" aria-label="Year">'+years.slice().reverse().map(function(y){return '<option'+(y===state.year?' selected':'')+'>'+y+'</option>';}).join('')+'</select>':'');
    h+='<div class="t-tabs" role="tablist">'+ym.map(function(x){return '<button class="t-tab" role="tab" data-m="'+x+'" aria-selected="'+(state.kind==='month'&&x===state.month)+'">'+MONTHS[+x.slice(5)-1].slice(0,3)+'</button>';}).join('')+'</div></div></div>';
    var opts=[];[3,6,12].forEach(function(n){if(months.length>=2&&(n<=months.length||n===3||months.length>n/2))opts.push(['last',n,'Last '+n+' months']);});
    opts.push(['year',state.year,'All of '+state.year]);
    h+='<div class="t-navrow"><span class="t-lbl">At a glance</span><div class="t-navctl t-tabs">'+opts.map(function(o){var on=state.kind===o[0]&&(o[0]==='last'?state.n===o[1]:state.year===o[1]);
      return '<button class="t-tab t-range" data-kind="'+o[0]+'" data-v="'+o[1]+'" aria-selected="'+on+'">'+o[2]+'</button>';}).join('')+'</div></div>';
    h+='<div class="t-navrow"><span class="t-lbl">Print</span><div class="t-navctl t-tools"><button class="t-tool" data-print="view">'+ICON_PRINT+(v.kind==='month'?'This month':'This view')+'</button>'+(months.length>1?'<button class="t-tool" data-print="all">'+ICON_PRINT+'Every month</button>':'')+'</div></div>';
    return h+'</div>';
  }

  function html(v,printing){
    var ms=v.months,multi=v.kind==='range',cur=totals(ms),pv=prevOf(v),prev=pv?totals(pv.months):null;
    var chg=function(k){if(!prev||!prev[k])return '';var c=(cur[k]-prev[k])/prev[k]*100;
      return '<b class="'+(c>=0?'up':'down')+'">'+(c>=0?'▲ +':'▼ ')+c.toFixed(1)+'%</b> vs '+pv.label;};
    // Only show reels / clips when this view actually has them (views or pieces made).
    var made=function(k){return by(ms,'created').filter(function(r){return r.platform===k;}).reduce(function(a,r){return a+num(r.value);},0);};
    var SR=sum(by(ms,'reel'))>0||made('Reels')>0, SC=showClips&&(sum(by(ms,'clip'))>0||made('Clips')>0);
    if((state.metric==='reels'&&!SR)||(state.metric==='clips'&&!SC))state.metric='total';
    var h='';
    h+='<header class="t-head"><div><div class="t-logo">'+(S.logo_url?'<img src="'+esc(S.logo_url)+'" alt="'+esc(S.client_name)+'">':'<span class="t-badge"'+(S.badge_color?' style="background:'+esc(S.badge_color)+'"':'')+'>'+esc(S.client_name||'Your Podcast')+'</span>')+'</div>';
    h+='<h1 class="t-title">Podcast <span>Impact</span> Report</h1></div><div class="t-right"><div class="t-period">'+(multi?esc(v.label)+':':'Period:')+'<br><b>'+v.short+'</b></div>'+(S.artwork_url?'<img class="t-art" src="'+esc(S.artwork_url)+'" alt="'+esc(S.client_name)+' show artwork">':'')+'</div></header>';
    if(!printing)h+=nav(v);
    var when=multi?'From '+v.short+' ('+ms.length+' months'+(v.note?' of data so far':'')+')':'In '+monthName(ms[0]);
    h+='<p class="t-lede">'+when+', your content earned <b>'+fmt(cur.total)+'</b> views and listens across every platform'+(prev&&prev.total?', <b>'+(cur.total>=prev.total?'up ':'down ')+Math.abs((cur.total-prev.total)/prev.total*100).toFixed(1)+'%</b> from '+pv.label:'')+'.'+(multi?' That is an average of <b>'+fmt(cur.total/ms.length)+'</b> a month.':'')+'</p>';
    var cards=[['total','Total views &amp; listens',1],['episodes','Episode listens &amp; views']];if(SR)cards.push(['reels','Reel views']);if(SC)cards.push(['clips','Clip views']);
    h+='<section class="t-sec"><h2 class="t-h2">Overview <span>metrics</span></h2><p class="t-sub">Everything viewed or listened to '+(multi?'during these '+ms.length+' months':'during the month')+', on all of your content.'+(pv?' The green or red percent shows how much each number went up or down compared with '+pv.label+'.':'')+'</p><div class="t-kpis">';
    cards.forEach(function(c){h+='<div class="t-card t-kpi'+(c[2]?' hero':' t-typed')+'"'+(c[2]?'':' style="--tc:'+CV[c[0]]+'"')+'><div class="t-klabel">'+(c[2]?'':TD(c[0]))+c[1]+'</div><div class="t-kval">'+fmt(cur[c[0]])+'</div><div class="t-kchg">'+(chg(c[0])||'&nbsp;')+'</div></div>';});
    h+='</div></section>';
    // Full episodes released in this view: views (video) and listens (audio) per platform.
    var RE=by(ms,'released_episode');
    if(RE.length){
      var VC=['YouTube','Facebook'],LC=['Audio'],AUD={'Audio':1,'Apple Podcasts':1,'Spotify':1,'Other podcast apps':1,'Other apps':1};
      var re={},ro=[];RE.forEach(function(r){var k=r.month+'|'+r.title;if(!re[k]){re[k]={title:r.title,detail:r.detail,month:r.month,p:{},links:{}};ro.push(re[k]);}
        var e=re[k],pl=AUD[r.platform]?'Audio':r.platform;e.p[pl]=(e.p[pl]||0)+num(r.value);if(okUrl(r.link)&&linkFits(pl,r.link)&&!e.links[pl])e.links[pl]=r.link;});
      ro.sort(function(a,b){return a.month<b.month?1:a.month>b.month?-1:0;});
      var sm=function(e,cs){return cs.reduce(function(a,c){return a+(e.p[c]||0);},0);};
      var ICV='<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',ICL='<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/></svg>';
      var cell=function(e,cs,cls){var has=cs.some(function(c){return e.p[c]!=null;});return '<td class="t-num '+cls+'">'+(has?fmt(sm(e,cs)):'<span class="t-dash">—</span>')+'</td>';};
      h+='<section class="t-sec t-card t-rel"><h2 class="t-h2">Full episodes <span>released '+(multi?'in this time frame':'this month')+'</span></h2><p class="t-sub">Every full episode we released'+(multi?' from '+v.short:' in '+monthName(ms[0]))+'. <span class="t-key t-kv">'+ICV+' Views</span> are video plays on YouTube and Facebook. <span class="t-key t-kl">'+ICL+' Listens</span> are audio plays in podcast apps.</p>';
      h+='<div class="t-wrap"><table class="t-table"><thead><tr><th>Episode</th><th class="t-num t-cv">'+ICV+' Views</th><th class="t-num t-cl">'+ICL+' Listens</th><th class="t-num">Total</th></tr></thead><tbody>';
      var TV=0,TL=0;ro.forEach(function(e){var vw=sm(e,VC),ls=sm(e,LC);TV+=vw;TL+=ls;var lk=e.links.YouTube||e.links.Facebook||e.links.Audio||'';
        h+='<tr><td>'+A(lk,esc(e.title))+'<span class="t-small">'+esc(e.detail)+(multi?(e.detail?' · ':'')+monthName(e.month):'')+'</span></td>'+cell(e,VC,'t-cv')+cell(e,LC,'t-cl')+'<td class="t-num t-strong">'+fmt(vw+ls)+'</td></tr>';});
      if(ro.length>1)h+='<tr class="t-totrow"><td><b>All '+ro.length+' episodes</b></td><td class="t-num t-cv"><b>'+fmt(TV)+'</b></td><td class="t-num t-cl"><b>'+fmt(TL)+'</b></td><td class="t-num t-strong">'+fmt(TV+TL)+'</td></tr>';
      h+='</tbody></table></div><p class="t-sub t-scr" style="margin:10px 0 0">Click a title to watch it.</p></section>';
    }
    h+='<section class="t-sec t-card"><h2 class="t-h2">Views <span>over time</span></h2><p class="t-sub">'+(multi?'The months in this view are highlighted.':'The 12 months up to '+monthName(ms[0])+'.')+'<span class="t-scr"> Click a month to open it.</span></p>';
    if(printing){h+='<div class="t-chart">'+trendSVG(680,ms,'total')+'</div>';}
    else{h+='<div class="t-seg">';[['total','Total'],['episodes','Episodes']].concat(SR?[['reels','Reels']]:[]).concat(SC?[['clips','Clips']]:[]).forEach(function(b){h+='<button data-k="'+b[0]+'" style="--sc:'+CV[b[0]]+'" aria-pressed="'+(state.metric===b[0])+'">'+b[1]+'</button>';});
      h+='</div><div class="t-chart" id="t-trend"></div>';}
    h+='</section>';
    if(multi){
      h+='<section class="t-sec t-card"><h2 class="t-h2">Month <span>by month</span></h2><p class="t-sub">Each month in this view. <b>Change</b> is how much that month\'s total views and listens went up or down compared with the month before it.<span class="t-scr"> Click a month to open its full report.</span></p><div class="t-wrap"><table class="t-table"><thead><tr><th>Month</th><th class="t-num">'+TD('episodes')+'Episodes</th>'+(SR?'<th class="t-num">'+TD('reels')+'Reels</th>':'')+''+(SC?'<th class="t-num">'+TD('clips')+'Clips</th>':'')+'<th class="t-num">Total</th><th class="t-num">Change</th></tr></thead><tbody>';
      ms.slice().reverse().forEach(function(m){var t=series[months.indexOf(m)],pi=months.indexOf(m)-1,pt=pi>=0?series[pi]:null,c=pt&&pt.total?(t.total-pt.total)/pt.total*100:null;
        h+='<tr><td><button class="t-mlink" data-m="'+m+'">'+monthName(m)+'</button></td><td class="t-num">'+fmt(t.episodes)+'</td>'+(SR?'<td class="t-num">'+fmt(t.reels)+'</td>':'')+(SC?'<td class="t-num">'+fmt(t.clips)+'</td>':'')+'<td class="t-num t-strong">'+fmt(t.total)+'</td><td class="t-num t-kchg">'+(c==null?'—':'<b class="'+(c>=0?'up':'down')+'">'+(c>=0?'+':'')+c.toFixed(1)+'%</b>')+'</td></tr>';});
      h+='</tbody></table></div></section>';
    }
    function mix(title,rows,unit,k){rows=byPlatform(rows);var t=rows.reduce(function(a,r){return a+r.value;},0),mx=Math.max.apply(null,rows.map(function(r){return r.value;}).concat([1]));
      rows.sort(function(a,b){return b.value-a.value;});
      var s='<div class="t-card t-tcard" style="--tc:'+CV[k]+'"><div class="t-klabel">'+TD(k)+title+'</div><div class="t-mixtot"><b>'+fmt(t)+'</b> '+unit+'</div>';
      if(!rows.length)return s+'<p class="t-empty">No numbers recorded for this period.</p></div>';
      rows.forEach(function(r){var v2=r.value;s+='<div class="t-row"><div>'+esc(r.platform)+'</div><div class="t-track"><div class="t-bar" style="background:'+CV[k]+';width:'+Math.max(1.5,v2/mx*100)+'%"></div></div><div class="t-val">'+fmt(v2)+'<span>'+(t?(v2/t*100).toFixed(1):'0')+'%</span></div></div>';});
      return s+'</div>';}
    h+='<section class="t-sec t-keep"><h2 class="t-h2">Views <span>by platform</span></h2><p class="t-sub">Where your audience found you'+(multi?' across these months':' in '+monthName(ms[0]))+', and each platform\'s share of the total.</p><div class="t-grid3">';
    h+=mix('Core episodes',by(ms,'episode_audio').concat(by(ms,'episode_video')),'listens &amp; views','episodes')+(SR?mix('Reels',by(ms,'reel'),'views','reels'):'')+(SC?mix('Clips',by(ms,'clip'),'views','clips'):'');
    h+='</div></section>';
    var NT=[['Core episodes','new_episode',by(ms,'episode_audio').concat(by(ms,'episode_video')),'listens &amp; views','episodes']];if(SR)NT.push(['Reels','new_reel',by(ms,'reel'),'views','reels']);if(SC)NT.push(['Clips','new_clip',by(ms,'clip'),'views','clips']);
    NT=NT.map(function(t){var nr=by(ms,t[1]);return {label:t[0],has:nr.length>0,nw:sum(nr),all:sum(t[2]),unit:t[3],col:CV[t[4]]};}).filter(function(t){return t.has&&t.all>0;});
    if(NT.length){var tn=0,ta=0;NT.forEach(function(t){t.nw=Math.min(t.nw,t.all);tn+=t.nw;ta+=t.all;});var pn=Math.round(tn/ta*100);
      h+='<section class="t-sec t-card t-keep"><h2 class="t-h2">'+(multi?'Content posted in this time frame':'This month\'s content')+' <span>vs. content still working for you</span></h2><p class="t-sub">'+(multi?'Views and listens on what we released from '+v.short+', compared with everything released before.':'Views and listens on what we released this month, compared with everything released in past months.')+'</p>';
      h+='<p class="t-newhead"><b>'+pn+'%</b> of your views and listens came from posts released '+(multi?'in this time frame':'this month')+'. The other <b>'+(100-pn)+'%</b> came from past posts that are still working for you.</p>';
      NT.forEach(function(t){var a=Math.round(t.nw/t.all*100);
        h+='<div class="t-nrow"><div class="t-nlbl">'+t.label+'</div><div class="t-ntrack" style="background:color-mix(in srgb,'+t.col+' 22%,#fff)"><div class="t-nnew" style="background:'+t.col+';width:'+a+'%"></div></div><div class="t-nval"><span class="t-dot" style="background:'+t.col+'"></span>'+fmt(t.nw)+(multi?' new':' this month')+' <span class="t-dot t-dot2" style="background:color-mix(in srgb,'+t.col+' 22%,#fff)"></span>'+fmt(t.all-t.nw)+' past</div></div>';});
      h+='<div class="t-nkey"><span><span class="t-dot" style="background:#6b6b66"></span>Released '+(multi?'in this time frame':'this month')+'</span><span><span class="t-dot t-dot2" style="background:#dcdad4"></span>Released in past months</span></div></section>';}
    var cr={};by(ms,'created').forEach(function(r){cr[r.platform]=(cr[r.platform]||0)+num(r.value);});
    if(Object.keys(cr).length){var ce=cr['Core episodes']||0,rl=cr['Reels']||0,cl=SC?(cr['Clips']||0):0;
      var ap=num(S.audio_platforms)||0,rp=num(S.reel_platforms)||0,cp=num(S.clip_platforms)||0;
      var vs=[['Core audio',ce,(ap||'')+(ap?'+ platforms':''),ce*ap,'episodes'],['YouTube episodes',ce,'YouTube',ce,'episodes']];if(SR)vs.push(['Reels',rl,rp+' platforms',rl*rp,'reels']);if(SC)vs.push(['Clips',cl,cp+' platforms',cl*cp,'clips']);
      var pl=vs.reduce(function(a,r){return a+r[3];},0);
      h+='<section class="t-sec t-card"><h2 class="t-h2">The value <span>snapshot</span></h2><p class="t-sub">What we created for you and everywhere it was posted'+(multi?' over these months':'')+'.</p><div class="t-wrap"><table class="t-table"><thead><tr><th>Content type</th><th class="t-num">Created</th><th>Platforms</th><th class="t-num">Total placements</th></tr></thead><tbody>';
      vs.forEach(function(r){h+='<tr><td>'+TD(r[4])+r[0]+'</td><td class="t-num">'+fmt(r[1])+'</td><td>'+r[2]+'</td><td class="t-num t-strong">'+fmt(r[3])+'</td></tr>';});
      h+='</tbody></table></div><p class="t-callout"><b>'+fmt(ce+rl+cl)+'</b> pieces of content, working in <b>'+fmt(pl)+'</b> places for you '+(multi?'over '+ms.length+' months':'this month')+'</p></section>';}
    var tc=topContent(ms),tes=tc.eps,tr=tc.reels;
    if(!multi&&(tes.length||tr.length)){h+='<div class="t-two t-sec">';
      if(tes.length){h+='<section class="t-card"><h2 class="t-h2">Top performing <span>episodes</span></h2><div class="t-wrap"><table class="t-table"><thead><tr><th>Episode</th><th class="t-num">YouTube</th><th class="t-num">Facebook</th><th class="t-num">Audio</th><th class="t-num">Total</th></tr></thead><tbody>';
        var cell=function(e,p){return '<td class="t-num">'+(e.links[p]&&e.p[p]!=null?A(e.links[p],fmt(e.p[p]),'t-nlink'):fmt(e.p[p]))+'</td>';};
        tes.forEach(function(e){h+='<tr><td>'+A(e.link,esc(e.title))+(e.boosted?BST:'')+'<span class="t-small">'+esc(e.detail)+'</span></td>'+cell(e,'YouTube')+cell(e,'Facebook')+cell(e,'Audio')+'<td class="t-num t-strong">'+fmt(e.total)+'</td></tr>';});
        h+='</tbody></table></div>'+(tes.some(function(e){return e.boosted;})?BNOTE:'')+'</section>';}
      if(tr.length){h+='<section class="t-card"><h2 class="t-h2">Top performing <span>reels</span></h2><div class="t-wrap"><table class="t-table"><thead><tr><th>Platform</th><th>Title</th><th class="t-num">Views</th></tr></thead><tbody>';
        tr.forEach(function(r){h+='<tr><td>'+esc(r.platform)+'</td><td>'+A(r.link,esc(r.title))+(isB(r)?BST:'')+'</td><td class="t-num t-strong">'+fmt(num(r.value))+'</td></tr>';});
        h+='</tbody></table></div>'+(tr.some(isB)?BNOTE:'')+'<p class="t-sub t-scr" style="margin:10px 0 0">Click any underlined title to watch it.</p></section>';}
      h+='</div>';}
    if(multi&&(tes.length||tr.length)){
      var mlab=function(m){return MONTHS[+m.slice(5)-1].slice(0,3)+' '+m.slice(0,4);};
      var rk={};tr.forEach(function(r){var k=r.title;if(!rk[k])rk[k]={title:r.title,total:0,plats:[],months:{},link:''};var o=rk[k];
        o.total+=num(r.value);if(isB(r))o.boosted=true;if(o.plats.indexOf(r.platform)<0)o.plats.push(r.platform);o.months[r.month]=1;if(!o.link&&okUrl(r.link))o.link=r.link;});
      var topR=Object.keys(rk).map(function(k){return rk[k];}).sort(function(x,y){return y.total-x.total;}).slice(0,3);
      var topE=tes.slice(0,3);
      var epMonths=function(e){return by(ms,'top_episode').filter(function(r){return r.title===e.title;}).map(function(r){return r.month;}).filter(function(m,i,a2){return a2.indexOf(m)===i;}).sort();};
      var rank=function(i){return '<td class="t-rank">'+(i+1)+'</td>';};
      h+='<div class="t-two t-sec">';
      if(topE.length){h+='<section class="t-card"><h2 class="t-h2">Top '+(topE.length===3?'3 ':'')+'<span>episode'+(topE.length===1?'':'s')+'</span></h2><p class="t-sub">Most listened to and watched, '+v.short+'.</p><div class="t-wrap"><table class="t-table"><thead><tr><th>#</th><th>Episode</th><th class="t-num">Listens &amp; views</th></tr></thead><tbody>';
        topE.forEach(function(e,i){h+='<tr>'+rank(i)+'<td>'+A(e.link,esc(e.title))+(e.boosted?BST:'')+'<span class="t-small">'+esc(e.detail)+' · '+epMonths(e).map(mlab).join(', ')+'</span></td><td class="t-num t-strong">'+fmt(e.total)+'</td></tr>';});
        h+='</tbody></table></div></section>';}
      if(topR.length){h+='<section class="t-card"><h2 class="t-h2">Top '+(topR.length===3?'3 ':'')+'<span>reel'+(topR.length===1?'':'s')+'</span></h2><p class="t-sub">Most viewed, '+v.short+'.</p><div class="t-wrap"><table class="t-table"><thead><tr><th>#</th><th>Reel</th><th class="t-num">Views</th></tr></thead><tbody>';
        topR.forEach(function(r,i){h+='<tr>'+rank(i)+'<td>'+A(r.link,esc(r.title))+(r.boosted?BST:'')+'<span class="t-small">'+esc(r.plats.join(', '))+' · '+Object.keys(r.months).sort().map(mlab).join(', ')+'</span></td><td class="t-num t-strong">'+fmt(r.total)+'</td></tr>';});
        h+='</tbody></table></div></section>';}
      h+='</div>'+(topE.some(function(e){return e.boosted;})||topR.some(function(r){return r.boosted;})?BNOTE:'')+'<p class="t-sub t-scr" style="margin:10px 0 0">Click any underlined title to watch it.</p>';}
    var ins=data.filter(function(r){return ms.indexOf(r.month)>-1&&r.metric==='insight';});
    if(ins.length&&!multi){h+='<section class="t-sec"><h2 class="t-h2">Key insights <span>&amp; recommendations</span></h2><div class="t-ins">';
      ins.forEach(function(r){h+='<div class="t-insc">'+(r.title?'<b>'+esc(r.title)+'</b>':'')+linkify(r.detail,tc)+(okUrl(r.link)?'<div class="t-watch">'+A(r.link,'Watch it &rarr;','')+'</div>':'')+'</div>';});h+='</div></section>';}
    if(ins.length&&multi){h+='<section class="t-sec t-card"><h2 class="t-h2">Highlights <span>by month</span></h2><p class="t-sub">The headline from each month\'s insights.<span class="t-scr"> Open a month to read them all.</span></p><div class="t-hl">';
      ms.slice().reverse().forEach(function(m){var mi=ins.filter(function(r){return r.month===m&&!/^recommend/i.test(r.title);});if(!mi.length)return;
        h+='<div><b>'+MONTHS[+m.slice(5)-1].slice(0,3)+' '+m.slice(0,4)+'</b> '+mi.map(function(r){var t=(r.title||'').replace(/:$/,'')||(r.detail||'').split(/(?<=[.!?])\s/)[0];return esc(t.replace(/\.$/,''));}).join(' · ')+'</div>';});
      h+='</div></section>';}
    h+='<footer class="t-foot"><details'+(printing?' open':'')+'><summary>How these numbers are counted</summary><dl><dt>Total views &amp; listens</dt><dd>Episode listens and views, plus reel and clip views, for everything viewed during the month.</dd><dt>Core episodes</dt><dd>Full episodes: video over 15 minutes, plus every audio listen.</dd>'+(SR?'<dt>Reels</dt><dd>Short videos under 3 minutes.</dd>':'')+(SC?'<dt>Clips</dt><dd>Videos from 3 to 15 minutes.</dd>':'')+'<dt>This month\'s content vs. content still working for you</dt><dd>Views and listens on episodes, reels and clips released during the month, compared with everything released before it. Some platforms count a post\'s views to date, so new posts can include views from the first few days of the next month. For a range of months, each post is counted as new in the month it came out.</dd><dt>Placements</dt><dd>Pieces created times the platforms each is posted to under your plan.</dd></dl></details><div class="t-brand">The<span>Podcast</span>Upload</div></footer>';
    return h;
  }

  function openMonth(m){state.kind='month';state.month=m;state.year=yearOf(m);render();}
  function render(){
    var v=viewFor(state);
    root.innerHTML=html(v,false);
    root.querySelectorAll('.t-tab[data-m],.t-mlink').forEach(function(b){b.onclick=function(){openMonth(b.dataset.m);};});
    root.querySelectorAll('.t-range').forEach(function(b){b.onclick=function(){state.kind=b.dataset.kind;if(state.kind==='last')state.n=+b.dataset.v;else state.year=b.dataset.v;render();};});
    var ys=root.querySelector('.t-year');if(ys)ys.onchange=function(){var y=ys.value,ym=months.filter(function(m){return yearOf(m)===y;});
      if(state.kind==='year'){state.year=y;render();}else openMonth(ym[ym.length-1]);};
    root.querySelectorAll('.t-seg button').forEach(function(b){b.onclick=function(){state.metric=b.dataset.k;render();};});
    root.querySelectorAll('[data-print]').forEach(function(b){b.onclick=function(){doPrint(b.dataset.print==='all');};});
    drawTrend(v);
  }

  function doPrint(all){
    var pr=document.getElementById('t-print');
    if(all){pr.innerHTML=months.slice().reverse().map(function(m){return '<div class="t-page">'+html({kind:'month',months:[m],label:monthName(m),short:monthName(m)},true)+'</div>';}).join('');box.classList.add('t-all');}
    else{pr.innerHTML='';box.classList.remove('t-all');root.querySelectorAll('.t-foot details').forEach(function(d){d.open=true;});}
    var done=function(){box.classList.remove('t-all');pr.innerHTML='';window.removeEventListener('afterprint',done);};
    window.addEventListener('afterprint',done);
    setTimeout(function(){window.print();},50);
  }

  // Chart window: 12 months ending at the view's last month (or the whole view if longer)
  function windowFor(ms){var end=months.indexOf(ms[ms.length-1]),start=Math.max(0,Math.min(months.indexOf(ms[0]),end-11));return series.slice(start,end+1);}
  function geom(W,ser,metric){var H=230,L=46,R=14,T=24,B=28,vals=ser.map(function(s){return s[metric];}),mx=Math.max.apply(null,vals)*1.12||1;
    var step=Math.pow(10,Math.floor(Math.log10(mx))),nice=Math.ceil(mx/step)*step;
    return {H:H,vals:vals,nice:nice,x:function(i){return ser.length>1?L+8+i*(W-L-R-16)/(ser.length-1):W/2;},y:function(v){return T+(H-T-B)*(1-v/nice);},L:L,R:R,half:ser.length>1?(W-L-R-16)/(ser.length-1)/2:W/2};}
  function trendSVG(W,ms,metric){
    var ser=windowFor(ms),g=geom(W,ser,metric),x=g.x,y=g.y,H=g.H,vals=g.vals,on=inM(ms),multi=ms.length>1,col=CV[metric]||'var(--accent)';
    var short=function(v){return v>=1e6?(v/1e6).toFixed(v%1e6?1:0)+'M':v>=1e3?(v/1e3).toFixed(v%1e3?1:0)+'k':String(v);};
    var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Views by month">';
    if(multi){var fi=-1,li=-1;ser.forEach(function(p,i){if(on[p.month]){if(fi<0)fi=i;li=i;}});
      if(fi>-1)s+='<rect x="'+(x(fi)-g.half)+'" y="'+(y(g.nice)-6)+'" width="'+(x(li)-x(fi)+2*g.half)+'" height="'+(y(0)-y(g.nice)+6)+'" fill="var(--accent)" opacity=".07" rx="6"/>';}
    for(var k=0;k<=4;k++){var gv=g.nice*k/4;s+='<line x1="'+g.L+'" x2="'+(W-g.R)+'" y1="'+y(gv)+'" y2="'+y(gv)+'" stroke="#ece9e2"/><text x="'+(g.L-6)+'" y="'+(y(gv)+4)+'" text-anchor="end">'+short(gv)+'</text>';}
    var pts=vals.map(function(v,i){return x(i)+','+y(v);}).join(' ');
    s+='<polygon points="'+x(0)+','+y(0)+' '+pts+' '+x(vals.length-1)+','+y(0)+'" fill="'+col+'" opacity=".1"/>';
    s+='<polyline points="'+pts+'" fill="none" stroke="'+col+'" stroke-width="2.5"/>';
    var every=W<560?2:1;
    ser.forEach(function(p,i){var sel=on[p.month],big=sel&&!multi;
      s+='<circle cx="'+x(i)+'" cy="'+y(vals[i])+'" r="'+(big?6:sel?4.5:3.5)+'" fill="'+(sel?col:'#fff')+'" stroke="'+col+'" stroke-width="2"/>';
      if(i%every===0||big)s+='<text x="'+x(i)+'" y="'+(H-8)+'" text-anchor="middle"'+(sel?' font-weight="700" style="fill:#1c1c1a"':'')+'>'+monthShort(p.month)+'</text>';
      if(big)s+='<text x="'+x(i)+'" y="'+(y(vals[i])-12)+'" text-anchor="'+(x(i)>W-60?'end':'middle')+'" font-weight="700" style="fill:#1c1c1a;font-size:12px">'+fmt(vals[i])+'</text>';
      s+='<rect class="t-hit" data-m="'+p.month+'" data-i="'+i+'" x="'+(x(i)-g.half)+'" y="0" width="'+(g.half*2)+'" height="'+(H-20)+'" fill="transparent" style="cursor:pointer"/>';});
    return s+'</svg>';
  }
  function drawTrend(v){
    v=v||viewFor(state);var el=document.getElementById('t-trend');if(!el)return;var W=Math.max(300,el.clientWidth||700);
    el.innerHTML=trendSVG(W,v.months,state.metric)+'<div class="t-tip"></div>';
    var ser=windowFor(v.months),g=geom(W,ser,state.metric),tip=el.querySelector('.t-tip'),svg=el.querySelector('svg');
    el.querySelectorAll('.t-hit').forEach(function(r){var i=+r.dataset.i;
      r.onmousemove=function(){var sc=svg.clientWidth/W;tip.innerHTML=monthName(ser[i].month)+'<b>'+fmt(g.vals[i])+'</b>';tip.style.opacity=1;
        tip.style.left=Math.min(Math.max(g.x(i)*sc-55,0),el.clientWidth-130)+'px';tip.style.top=Math.max(g.y(g.vals[i])*sc-58,0)+'px';};
      r.onmouseleave=function(){tip.style.opacity=0;};
      r.onclick=function(){openMonth(r.dataset.m);};});
  }
  loading.hidden=true;root.hidden=false;render();
  window.__tpuDraw=drawTrend;if(!window.__tpuRs){window.__tpuRs=1;var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){if(window.__tpuDraw)window.__tpuDraw();},150);});}
}

if(window.TPU_PREVIEW_CSV){build(parseCSV(window.TPU_PREVIEW_CSV));return;}
// Speed: show the last copy of the numbers this browser saw right away, then refresh from Google in the background.
// Google's published sheets are sometimes slow or don't answer, so each try times out after 8 seconds and retries.
var CK='tpu_report_'+DATA_URL,shown=false,touched=false,lastText='';
root.addEventListener('click',function(){touched=true;});
function store(t){try{localStorage.setItem(CK,t);}catch(e){}}
function cached(){try{return localStorage.getItem(CK)||'';}catch(e){return '';}}
function good(t){return /month\s*,\s*metric/i.test((t||'').slice(0,200));}
function show(t){if(t===lastText)return;if(shown&&touched)return;lastText=t;shown=true;build(parseCSV(t));}
var c0=cached();if(good(c0)){try{show(c0);}catch(e){}}
function load(n){
  var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){if(ctl)ctl.abort();},8000);
  fetch(n?DATA_URL+(DATA_URL.indexOf('?')>-1?'&':'?')+'t='+Date.now():DATA_URL,ctl?{signal:ctl.signal}:{}).then(function(r){if(!r.ok)throw 0;return r.text();})
    .then(function(t){clearTimeout(tm);if(!good(t))throw 0;store(t);show(t);})
    .catch(function(){clearTimeout(tm);if(shown)return;
      if(n<3){setTimeout(function(){load(n+1);},[500,1500,3000][n]);return;}
      loading.innerHTML='This report could not load right now. <button type="button" class="t-tool" id="t-retry" style="margin-left:8px">Try again</button><br><span style="font-size:13px">If it keeps happening, message your TPU team.</span>';
      var b=document.getElementById('t-retry');if(b)b.onclick=function(){loading.textContent='Loading your report…';load(0);};});
}
load(0);
})();

