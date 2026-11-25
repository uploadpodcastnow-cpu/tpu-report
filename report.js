/* TPU Podcast Impact Report — shared design. Every client's portal loads this one file.
   Change the design here once; every client sees it the next time their report opens.
   Each portal sets window.TPU_DATA_URL (the client's published Data tab) before loading this file. */
(function(){
  var host=document.getElementById('tpu-report');
  if(!host){host=document.createElement('div');host.id='tpu-report';document.body.appendChild(host);}
  var st=document.createElement('style');st.textContent="\n#tpu-report{--accent:#7d8261;--c-ep:var(--accent);--c-reel:#46555e;--c-clip:color-mix(in srgb,var(--accent) 55%,#fff);--ink:#1c1c1a;--muted:#6b6b66;--line:#e7e4dc;--card:#f7f5f0;--good:#2e7d4f;--bad:#b3412e;\n  font-family:'Poppins','Segoe UI',Helvetica,Arial,sans-serif;color:var(--ink);background:#fff;max-width:1040px;margin:0 auto;padding:28px 22px 36px;box-sizing:border-box}\n#tpu-report *{box-sizing:border-box}\n.t-head{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:16px;padding-bottom:18px;border-bottom:1px solid var(--line)}\n.t-logo img{max-height:64px;max-width:220px;display:block}\n.t-badge{display:inline-block;background:#46555e;color:#fff;padding:8px 14px;border-radius:4px;font-size:13px;letter-spacing:.08em;text-transform:uppercase}\n.t-title{margin:14px 0 0;font-size:clamp(26px,4.6vw,40px);font-weight:800;letter-spacing:-.01em;line-height:1.05}\n.t-title span,.t-h2 span{color:var(--accent)}\n.t-right{display:flex;align-items:center;gap:14px}\n.t-art{width:104px;height:104px;border-radius:10px;object-fit:cover;box-shadow:0 2px 10px rgba(0,0,0,.12);display:block}\n.t-period{font-size:15px;color:var(--muted);text-align:right;padding-top:4px}\n@media(max-width:560px){.t-art{width:72px;height:72px}.t-right{flex-direction:column-reverse;align-items:flex-end;gap:6px}.t-period{font-size:12px;padding-top:0}.t-badge{font-size:11px;padding:6px 10px}}\n.t-period b{color:var(--ink)}\n.t-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0 6px}\n.t-tab{border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:8px;padding:7px 14px;font:inherit;font-size:13px;cursor:pointer;min-width:54px;transition:border-color .15s,background .15s}\n.t-tab:hover{border-color:var(--accent)}\n.t-tab[aria-selected=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}\n.t-lede{font-size:18px;line-height:1.5;margin:18px 0 6px;max-width:none}\n.t-sec{margin-top:30px}\n.t-h2{font-size:15px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;margin:0 0 4px;display:flex;align-items:center;gap:8px}\n.t-h2::before{content:'';width:4px;height:16px;border-radius:2px;background:var(--accent);flex:none}\n.t-h2 span{margin-left:-4px}\n.t-sub{font-size:13px;color:var(--muted);margin:0 0 14px}\n.t-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}\n.t-card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px}\n.t-kpi.hero{border-left:4px solid var(--accent);background:color-mix(in srgb,var(--accent) 10%,#fff)}\n.t-klabel{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}\n.t-kval{font-size:clamp(26px,3.6vw,34px);font-weight:800;margin:6px 0 4px;font-variant-numeric:tabular-nums}\n.t-kchg{font-size:12.5px;color:var(--muted)}\n.t-kchg b.up{color:var(--good)} .t-kchg b.down{color:var(--bad)}\n.t-seg{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}\n.t-seg button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}\n.t-seg button[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff}\n.t-chart{position:relative}\n.t-chart svg{display:block;width:100%;height:auto;overflow:visible}\n.t-chart text{font-size:11px;fill:var(--muted)}\n.t-tip{position:absolute;pointer-events:none;background:#fff;border:1px solid var(--line);box-shadow:0 4px 14px rgba(0,0,0,.08);border-radius:8px;padding:6px 10px;font-size:12px;opacity:0;white-space:nowrap}\n.t-tip b{display:block;font-size:14px}\n.t-grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px}\n.t-mixtot{font-size:13px;color:var(--muted);margin:4px 0 14px}\n.t-mixtot b{color:var(--ink)}\n.t-row{display:grid;grid-template-columns:minmax(84px,1fr) 2fr auto;gap:8px;align-items:center;font-size:12.5px;margin-bottom:9px}\n.t-track{height:10px;background:rgba(0,0,0,.06);border-radius:5px;overflow:hidden}\n.t-bar{height:100%;background:var(--accent);border-radius:5px}\n.t-val{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}\n.t-val span{color:var(--muted);margin-left:6px}\n.t-wrap{overflow-x:auto}\n.t-table{width:100%;border-collapse:collapse;font-size:14px}\n.t-table th{text-align:left;font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--ink);font-weight:700;padding:8px 10px;border-bottom:2px solid var(--accent);white-space:nowrap}\n.t-table td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}\n.t-num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.t-strong{font-weight:700}\n.t-boost{color:var(--accent);font-weight:800;margin-left:3px;cursor:help}\n.t-rank{width:34px;font-weight:800;font-size:18px;color:var(--accent);font-variant-numeric:tabular-nums}\n.t-small{display:block;font-size:12px;color:var(--muted);margin-top:2px}\n.t-callout{text-align:center;font-weight:700;font-size:17px;margin:16px 0 0}\n.t-callout b{color:var(--accent)}\n.t-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:12px}\n.t-ins{display:grid;gap:12px}\n.t-insc{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:14px 16px;line-height:1.55;font-size:14.5px}\n.t-insc b{display:block;margin-bottom:2px;color:var(--ink)}\n.t-insc{background:color-mix(in srgb,var(--accent) 5%,#fff)}\n.t-wait p{margin:8px 0 0;font-size:15px;line-height:1.6;max-width:none}\n.t-empty{color:var(--muted);font-size:13px;margin:0}\n.t-foot{margin-top:30px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;font-size:12px;color:var(--muted)}\n.t-foot details summary{cursor:pointer;color:var(--ink);font-weight:600}\n.t-foot dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 12px;margin:8px 0 0}\n.t-foot dt{font-weight:600;color:var(--ink)} .t-foot dd{margin:0}\n.t-brand{font-size:18px;font-weight:700;color:var(--ink)} .t-brand span{color:#c9a46a}\n.t-msg{padding:40px 0;text-align:center;color:var(--muted)}\n.t-nav{margin:18px 0 6px;display:grid;gap:0;padding:4px 18px;border:1px solid var(--line);border-color:color-mix(in srgb,var(--accent) 28%,#fff);border-left:4px solid var(--accent);border-radius:12px;background:#fbfaf7;background:color-mix(in srgb,var(--accent) 6%,#fff)}\n.t-navrow{display:grid;grid-template-columns:118px minmax(0,1fr);align-items:start;gap:10px;padding:12px 0}\n.t-navrow+.t-navrow{border-top:1px solid color-mix(in srgb,var(--accent) 18%,#fff)}\n.t-navctl{display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.t-nav .t-tabs{margin:0;gap:6px;display:contents}\n.t-nav .t-navctl.t-tabs{display:flex}\n.t-lbl{font-size:11.5px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.08em;padding-top:9px}\n.t-year{appearance:none;-webkit-appearance:none;border:1px solid var(--line);background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%236b6b66' stroke-width='1.5'/%3E%3C/svg%3E\") no-repeat right 10px center/10px;border-radius:8px;padding:7px 28px 7px 12px;font:inherit;font-size:13px;font-weight:600;color:var(--ink);cursor:pointer}\n.t-tools{display:flex;gap:6px;flex-wrap:wrap}\n.t-tool{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:8px;padding:6px 11px;font:inherit;font-size:12.5px;cursor:pointer}\n.t-tool:hover{border-color:var(--accent)}\n.t-tool svg{width:14px;height:14px}\n.t-tab.t-range[aria-selected=\"true\"]{background:var(--accent);border-color:var(--accent)}\n@media(max-width:560px){.t-navrow{grid-template-columns:1fr;gap:6px}.t-lbl{padding-top:0}}\n.t-mlink{background:none;border:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px;text-align:left}\n.t-mlink:hover{text-decoration-color:var(--accent)}\n.t-hl{display:grid;gap:8px}\n.t-hl div{font-size:14px;line-height:1.5}\n.t-hl b{display:inline-block;min-width:76px;color:var(--accent)}\n#tpu-report a.t-link{color:inherit;text-decoration:underline;text-decoration-color:var(--accent);text-decoration-thickness:2px;text-underline-offset:3px}\n#tpu-report a.t-link:hover{color:var(--accent)}\n#tpu-report a.t-nlink{color:inherit;text-decoration:none;border-bottom:1px dotted var(--muted)}\n#tpu-report a.t-nlink:hover{color:var(--accent);border-color:var(--accent)}\n.t-watch{display:inline-block;margin-top:6px;font-size:13px;font-weight:600}\n#tpu-report .t-watch a{color:var(--accent);text-decoration:none}\n.t-pnote{display:none}\n.t-page+.t-page{break-before:page;page-break-before:always}\n@page{margin:12mm}\n@media print{\n  #tpu-report{max-width:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}\n  .t-nav,.t-seg,.t-tip,.t-foot summary{display:none!important}\n  .t-mlink{text-decoration:none}\n  .t-pnote{display:block;font-size:11px;color:var(--muted);margin:4px 0 0}\n  .t-card,.t-kpi,.t-insc,.t-table tr,.t-head{break-inside:avoid;page-break-inside:avoid}\n  .t-sec{margin-top:18px}\n  .t-two{grid-template-columns:1fr!important}\n  .t-grid3{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n  .t-wrap{overflow:visible}\n  .t-scr{display:none}\n  .t-h2,.t-sub{break-after:avoid;page-break-after:avoid}\n  .t-keep{break-inside:avoid;page-break-inside:avoid}\n  .t-kpis{grid-template-columns:repeat(4,minmax(0,1fr))}\n  .t-lede{font-size:15px}\n  .t-foot details>*{display:block}\n  #tpu-report a.t-link,#tpu-report a.t-nlink{text-decoration:none;border:0}\n  #tpu-report.t-all #t-root{display:none!important}\n}\n.t-newhead{font-size:15.5px;line-height:1.5;margin:4px 0 16px}.t-newhead b{color:var(--accent);font-size:18px}\n.t-nrow{display:grid;grid-template-columns:110px minmax(0,1fr) 250px;gap:12px;align-items:center;font-size:13px;margin-bottom:12px}\n.t-nlbl{font-weight:600}.t-ntrack{height:16px;border-radius:8px;overflow:hidden;background:color-mix(in srgb,var(--accent) 22%,#fff)}\n.t-nnew{height:100%;background:var(--accent)}.t-nval{white-space:nowrap;text-align:right;font-variant-numeric:tabular-nums;color:var(--muted)}\n.t-dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--accent);margin:0 5px 0 0;vertical-align:0}.t-dot2{background:color-mix(in srgb,var(--accent) 22%,#fff);margin-left:10px}\n.t-nkey{display:flex;gap:18px;font-size:12px;color:var(--muted);margin-top:6px}.t-nkey .t-dot2{margin-left:0}\n@media(max-width:560px){.t-nrow{grid-template-columns:1fr}}\n.t-tdot{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:7px;vertical-align:-1px}\n.t-seg button[aria-pressed=\"true\"]{background:var(--sc,var(--accent));border-color:var(--sc,var(--accent))}\n.t-kpi.t-typed{border-top:5px solid var(--tc);background:color-mix(in srgb,var(--tc) 7%,#fff)}\n.t-kpi.t-typed .t-klabel{color:var(--tc)}\n.t-tcard{border-top:5px solid var(--tc)!important;background:color-mix(in srgb,var(--tc) 5%,#fff)!important}.t-tcard>.t-klabel{color:var(--tc)}\n.t-rel .t-cv{background:color-mix(in srgb,var(--c-ep) 11%,#fff);width:130px}\n.t-rel th.t-cv svg,.t-rel th.t-cl svg{vertical-align:-1px;margin-right:3px}\n.t-rel .t-cl{background:color-mix(in srgb,var(--ink) 4%,#fff);width:130px}\n.t-rel .t-num.t-strong{width:110px}\n.t-rel .t-grp th{font-size:10.5px;letter-spacing:.08em;text-align:center;border-bottom:0;padding:6px 10px 2px;color:var(--muted)}\n.t-rel .t-grp th svg,.t-key svg{vertical-align:-1px;margin-right:2px}\n.t-rel .t-grp th.t-cv{border-radius:8px 8px 0 0;color:color-mix(in srgb,var(--c-ep) 70%,#1c1c1a)}\n.t-rel .t-grp th.t-cl{border-radius:8px 8px 0 0}\n.t-rel .t-totrow td{border-top:2px solid var(--line);border-bottom:0}\n.t-key{display:inline-block;padding:1px 7px;border-radius:6px;font-weight:600;color:var(--ink);white-space:nowrap}\n.t-kv{background:color-mix(in srgb,var(--c-ep) 14%,#fff)}.t-kl{background:color-mix(in srgb,var(--ink) 6%,#fff)}\n.t-dash{color:#c9c6bd}\n.t-hnote{font-size:13.5px;line-height:1.5;margin:8px 0 0;padding:10px 14px;border-radius:10px;background:color-mix(in srgb,var(--accent) 8%,#fff);border:1px dashed color-mix(in srgb,var(--accent) 45%,#fff);color:var(--ink)}\n.t-dseg{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}\n.t-dseg button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}\n.t-dseg button[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:#fff}\n.t-gbar{display:flex;height:22px;border-radius:6px;overflow:hidden;margin:4px 0 10px}\n.t-gbar div{height:100%}\n.t-gkey{display:flex;flex-direction:column;gap:6px;font-size:12.5px}\n.t-gkey span.t-sw{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:7px;vertical-align:-1px}\n.t-donut{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.t-donut svg{flex:none}\n.t-dhint{font-size:11.5px;color:var(--muted);margin:10px 0 0}\n.t-vtab .t-vg td{border-bottom:1px solid var(--line);padding-top:14px}\n.t-vtab .t-vmeta{color:var(--muted);font-size:12.5px;font-weight:400;margin-left:6px}\n.t-vtab .t-vp td{border-bottom:0;padding-top:5px;padding-bottom:5px;font-size:13.5px}\n.t-vtab .t-vp td:first-child{padding-left:38px;color:var(--ink)}\n.t-vkpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:4px 0 16px}\n.t-vkpis div{background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 14px;text-align:center}\n.t-vkpis b{display:block;font-size:clamp(22px,3vw,30px);font-weight:800;color:var(--accent);font-variant-numeric:tabular-nums}\n.t-vkpis span{font-size:12.5px;color:var(--muted)}\n.t-vrow{display:grid;grid-template-columns:170px minmax(0,1fr) 90px;gap:12px;align-items:center;padding:12px 0;border-top:1px solid var(--line)}\n.t-vname{font-size:14.5px}.t-vlines div{margin:2px 0}\n.t-vlbl{display:inline-block;min-width:66px;font-size:12px;color:var(--muted);font-weight:600}\n.t-chip{display:inline-block;border:1px solid var(--line);background:#fff;border-radius:999px;padding:3px 10px;font-size:12.5px;margin:2px 5px 2px 0;white-space:nowrap}\n.t-vposts{text-align:right;font-size:13px;color:var(--muted);white-space:nowrap}.t-vposts b{font-size:17px;color:var(--ink)}\n@media(max-width:560px){.t-vrow{grid-template-columns:1fr}.t-vposts{text-align:left}}\n.t-dnote{font-size:12.5px;color:var(--muted);margin:-6px 0 12px}\n#t-print{display:none}\n@media print{#tpu-report.t-all #t-print{display:block}}\n.t-bp{display:grid;grid-template-columns:190px minmax(0,1fr);gap:28px;align-items:start}\n.t-bpring{text-align:center;padding-top:4px}.t-bpring svg{display:block;margin:0 auto}\n.t-bplabel{display:inline-block;padding:4px 14px;border-radius:999px;color:#fff;font-weight:700;font-size:13px;margin-top:8px}\n.t-bpchg{font-size:12.5px;color:var(--muted);margin-top:8px;line-height:1.4}.t-bpchg b.up{color:var(--good)}.t-bpchg b.down{color:var(--bad)}\n.t-bpcat{padding:11px 0;border-top:1px solid var(--line)}.t-bpcat:first-child{border-top:0;padding-top:0}\n.t-bptop{display:flex;justify-content:space-between;gap:10px;font-size:14px;font-weight:600}.t-bptop b{font-variant-numeric:tabular-nums}\n.t-bptrack{height:8px;background:rgba(0,0,0,.06);border-radius:4px;overflow:hidden;margin:6px 0 5px}.t-bptrack div{height:100%;border-radius:4px}\n.t-bpask{font-size:13px;font-weight:400;color:var(--muted)}.t-bpsec{position:relative}.t-bphw{position:absolute;top:14px;right:14px;z-index:6}.t-bphelp{width:17px;height:17px;border-radius:50%;border:1px solid rgba(140,115,80,.22);background:rgba(160,130,90,.10);color:rgba(90,75,55,.65);font:inherit;font-weight:700;font-size:10px;letter-spacing:0;cursor:help;padding:0;line-height:1;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box}.t-bphelp:hover,.t-bphelp:focus{border-color:color-mix(in srgb,var(--accent) 45%,transparent);color:var(--accent);background:rgba(160,130,90,.16);outline:none}.t-bptip{display:none;position:absolute;top:calc(100% + 8px);right:0;width:min(400px,80vw);background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:14px 16px;font-size:13px;line-height:1.5;color:var(--ink);text-align:left}.t-bptip::before{content:'';position:absolute;top:-10px;left:0;right:0;height:10px}.t-bphw:hover .t-bptip,.t-bphw:focus-within .t-bptip{display:block}.t-bptip b{display:block;margin-bottom:4px}.t-bptip ul{margin:6px 0;padding-left:16px}.t-bptip li{margin:3px 0}.t-bptip p{margin:6px 0 0;color:var(--muted)}@media print{.t-bphw{display:none!important}}.t-hsec{position:relative}.t-hsec>.t-bphw{top:2px;right:0}.t-card.t-hsec>.t-bphw{top:14px;right:14px}.t-hsec>.t-h2{padding-right:34px}.t-h2 .t-bphw{position:relative;top:-1.5px;right:auto;margin-left:-3px;display:inline-flex;color:inherit}.t-h2 .t-bptip{left:-8px;right:auto;margin-left:0;color:var(--ink);text-transform:none;letter-spacing:normal;font-weight:400;font-size:13px}.t-bpnote{font-size:13px;color:var(--muted);line-height:1.45}.t-bpns{color:var(--muted);font-weight:500;font-style:italic}\n.t-bptips{margin-top:18px;padding:12px 16px;border-radius:10px;background:color-mix(in srgb,var(--accent) 7%,#fff);border:1px solid color-mix(in srgb,var(--accent) 25%,#fff)}\n.t-bptips b{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);margin-bottom:6px}\n.t-bptips ul{margin:0;padding-left:18px;font-size:14px;line-height:1.6}\n.t-bpmh{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:18px 0 8px}.t-bpms{display:flex;flex-wrap:wrap;gap:8px}.t-bpm{border:1px solid var(--line);border-radius:10px;padding:8px 12px;font-size:12.5px;color:var(--muted);background:#fff}.t-bpm b{display:block;font-size:20px;font-variant-numeric:tabular-nums}\n@media(max-width:640px){.t-bp{grid-template-columns:1fr;gap:16px}}\n";document.head.appendChild(st);
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
  // Early-history months (before full reporting started) only include the platforms that keep old records.
  var HB=/^\d{4}-\d{2}$/.test(S.history_before||'')?S.history_before:'';
  var isH=function(m){return !!HB&&m<HB;};
  var sameSide=function(a,b){return isH(a)===isH(b);};
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
    if(st.kind==='all'){ms=months.slice();label='Lifetime';}
    else if(st.kind==='last'){ms=months.slice(-st.n);label='Last '+st.n+' months';}
    else {ms=months.filter(function(m){return yearOf(m)===st.year;});label=st.year+' at a glance';}
    var span=ms.length>1?monthShort(ms[0]).replace(" '",' ')+' – '+monthShort(ms[ms.length-1]).replace(" '",' '):monthName(ms[0]);
    span=span.replace(/ (\d\d)( |$)/g,' 20$1$2');
    var note=(st.kind==='last'&&ms.length<st.n)?' ('+ms.length+' months of data so far)':'';
    return {kind:'range',months:ms,label:label,note:note,short:span};
  }
  function prevOf(v){var r=prevOf0(v);if(r&&!r.months.concat(v.months).every(function(m){return sameSide(m,v.months[0]);}))return null;return r;}
  function prevOf0(v){var i=months.indexOf(v.months[0]),n=v.months.length;
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
    if(months.length>1)opts.push(['all','all','Lifetime']);
    h+='<div class="t-navrow"><span class="t-lbl">At a glance</span><div class="t-navctl t-tabs">'+opts.map(function(o){var on=state.kind===o[0]&&(o[0]==='all'||(o[0]==='last'?state.n===o[1]:state.year===o[1]));
      return '<button class="t-tab t-range" data-kind="'+o[0]+'" data-v="'+o[1]+'" aria-selected="'+on+'">'+o[2]+'</button>';}).join('')+'</div></div>';
    h+='<div class="t-navrow"><span class="t-lbl">Print</span><div class="t-navctl t-tools"><button class="t-tool" data-print="view">'+ICON_PRINT+(v.kind==='month'?'This month':'This view')+'</button>'+(months.length>1?'<button class="t-tool" data-print="all">'+ICON_PRINT+'Every month</button>':'')+'</div></div>';
    return h+'</div>';
  }

  // Blueprint alignment: how closely the month's content followed the client's Show Blueprint (scored by TPU, approved with the month).
  var HELP=function(t,b){return '<span class="t-bphw"><button type="button" class="t-bphelp" aria-label="'+t+'">?</button><span class="t-bptip" role="tooltip"><b>'+t+'</b>'+b+'</span></span>';};
  function blueprint(ms,multi){
    var B=data.filter(function(r){return r.metric==='blueprint_score'&&ms.indexOf(r.month)>-1;});
    if(!B.length)return '';
    var band=function(n){return n>=85?['On blueprint','#2e7d4f']:n>=70?['Close','#b7791f']:['Drifting','#b3412e'];};
    var overallOf=function(m){var o=data.filter(function(r){return r.metric==='blueprint_score'&&r.month===m&&/^overall$/i.test(r.platform)&&num(r.value)!=null;})[0];return o?num(o.value):null;};
    var h='<section class="t-sec t-card t-keep t-bpsec"><span class="t-bphw"><button type="button" class="t-bphelp" aria-label="How this score works">?</button><span class="t-bptip" role="tooltip"><b>How we score this</b>Each month we compare your new episodes and your audience data with the Show Blueprint you created with us.<ul><li><b style="display:inline">Content pillars:</b> each new episode\'s topics, from its transcript, against your content pillars.</li><li><b style="display:inline">Message fit:</b> who each episode is speaking to, against the audience described in your blueprint.</li><li><b style="display:inline">Audience match:</b> the ages and countries behind your YouTube (and Spotify) views, against your target audience, plus whether more views come from subscribers, search and suggested videos.</li><li><b style="display:inline">Format &amp; length:</b> each episode\'s length and style (solo, coaching or interview), against your plan.</li><li><b style="display:inline">Tone &amp; episode structure:</b> from each transcript: the opening hook, practical action steps and the closing call to action.</li></ul><p>The overall score is a weighted average of these areas. Your TPU team reviews every score before it appears here.</p></span></span><h2 class="t-h2">Blueprint <span>alignment</span></h2>';
    var ASK={'content pillars':'Are we talking about the right things?','message fit':'Is each episode made for the person you want to reach?','audience fit':'Is each episode made for the person you want to reach?','audience match':'Are the views and listens coming from that person?','format & length':'Are episodes the length and style you planned?','tone & episode structure':'Does it sound and flow like your show?','posting consistency':'Did episodes go out on your planned schedule?'};
    var askOf=function(r){return r.title||ASK[String(r.platform).trim().toLowerCase()]||'';};
    var ringOf=function(v,sub){var R=52,C=2*Math.PI*R,bd=band(v);return '<svg viewBox="0 0 132 132" width="150" height="150" role="img" aria-label="Blueprint alignment '+Math.round(v)+' out of 100"><circle cx="66" cy="66" r="'+R+'" fill="none" stroke="#ece9e2" stroke-width="12"/><circle cx="66" cy="66" r="'+R+'" fill="none" stroke="'+bd[1]+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+(C*v/100).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 66 66)"/><text x="66" y="72" text-anchor="middle" style="font-size:36px;font-weight:800;fill:#1c1c1a">'+Math.round(v)+'</text><text x="66" y="92" text-anchor="middle" style="font-size:11px;fill:#6b6b66">'+sub+'</text></svg><span class="t-bplabel" style="background:'+bd[1]+'">'+bd[0]+'</span>';};
    if(multi){var sc=ms.map(function(m){return [m,overallOf(m)];}).filter(function(x){return x[1]!=null;});if(!sc.length)return '';
      var avg=sc.reduce(function(a,x){return a+x[1];},0)/sc.length,n=sc.length;
      var ar={},ord=[];B.forEach(function(r){if(/^overall$/i.test(r.platform))return;var k=r.platform;if(!ar[k]){ar[k]={r:r,v:[]};ord.push(k);}var v=num(r.value);if(v!=null)ar[k].v.push(v);});
      h+='<p class="t-sub">Your average across the '+(n===1?'scored month':n+' scored months')+' in this time frame, for the overall score and each area. Each month\'s score is below; click one to open it.</p><div class="t-bp"><div class="t-bpring">'+ringOf(avg,'average')+'<div class="t-bpchg">Average of '+n+' scored month'+(n===1?'':'s')+'</div></div><div>';
      ord.forEach(function(k){var o=ar[k],v=o.v.length?o.v.reduce(function(a,x){return a+x;},0)/o.v.length:null;
        h+='<div class="t-bpcat"><div class="t-bptop"><span>'+esc(k)+(askOf(o.r)?':<span class="t-bpask"> '+esc(askOf(o.r))+'</span>':'')+'</span>'+(v==null?'<span class="t-bpns">Not scored yet</span>':'<b style="color:'+band(v)[1]+'">'+Math.round(v)+'</b>')+'</div>';
        if(v!=null)h+='<div class="t-bptrack"><div style="width:'+Math.max(2,Math.min(100,v))+'%;background:'+band(v)[1]+'"></div></div><div class="t-bpnote">Average of '+o.v.length+' month'+(o.v.length===1?'':'s')+'</div>';
        h+='</div>';});
      h+='</div></div><div class="t-bpmh">Month by month</div><div class="t-bpms">';
      sc.slice().reverse().forEach(function(x){h+='<button class="t-bpm t-mlink" data-m="'+x[0]+'" style="text-decoration:none"><b style="color:'+band(x[1])[1]+'">'+Math.round(x[1])+'</b>'+monthName(x[0])+'</button>';});
      return h+'</div></section>';}
    var m=ms[0],ov=overallOf(m);if(ov==null)return '';var bd=band(ov);
    var i=months.indexOf(m),pm=null,po=null;for(var k=i-1;k>=0;k--){var q=overallOf(months[k]);if(q!=null){pm=months[k];po=q;break;}}
    var R=52,C=2*Math.PI*R;
    h+='<p class="t-sub">How closely this month\'s content followed the plan in your Show Blueprint: your topics, who you\'re speaking to, who\'s actually watching and listening, your format and your tone. Each area is scored from 0 to 100.</p><div class="t-bp"><div class="t-bpring">';
    h+='<svg viewBox="0 0 132 132" width="150" height="150" role="img" aria-label="Blueprint alignment '+Math.round(ov)+' out of 100"><circle cx="66" cy="66" r="'+R+'" fill="none" stroke="#ece9e2" stroke-width="12"/><circle cx="66" cy="66" r="'+R+'" fill="none" stroke="'+bd[1]+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+(C*ov/100).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 66 66)"/><text x="66" y="72" text-anchor="middle" style="font-size:36px;font-weight:800;fill:#1c1c1a">'+Math.round(ov)+'</text><text x="66" y="92" text-anchor="middle" style="font-size:11px;fill:#6b6b66">out of 100</text></svg>';
    h+='<span class="t-bplabel" style="background:'+bd[1]+'">'+bd[0]+'</span><div class="t-bpchg">'+(po!=null?(ov>=po?'<b class="up">▲ +'+Math.round(ov-po)+'</b>':'<b class="down">▼ '+Math.round(ov-po)+'</b>')+' from '+monthName(pm):'Your first scored month')+'</div></div><div>';
    B.filter(function(r){return r.month===m&&!/^overall$/i.test(r.platform);}).forEach(function(r){var v=num(r.value);
      h+='<div class="t-bpcat"><div class="t-bptop"><span>'+esc(r.platform)+(askOf(r)?':<span class="t-bpask"> '+esc(askOf(r))+'</span>':'')+'</span>'+(v==null?'<span class="t-bpns">Not scored yet</span>':'<b style="color:'+band(v)[1]+'">'+Math.round(v)+'</b>')+'</div>';
      if(v!=null)h+='<div class="t-bptrack"><div style="width:'+Math.max(2,Math.min(100,v))+'%;background:'+band(v)[1]+'"></div></div>';
      h+=(r.detail?'<div class="t-bpnote"'+(v==null?' style="margin-top:4px"':'')+'>'+esc(r.detail)+'</div>':'')+'</div>';});
    h+='</div></div>';
    var tips=data.filter(function(r){return r.metric==='blueprint_tip'&&r.month===m&&r.detail;});
    if(tips.length)h+='<div class="t-bptips"><b>To stay on blueprint next month</b><ul>'+tips.map(function(r){return '<li>'+esc(r.detail)+'</li>';}).join('')+'</ul></div>';
    return h+'</section>';
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
    if(ms.some(isH))h+='<p class="t-hnote"><b>Early history:</b> before '+monthName(HB)+', these numbers include YouTube and podcast apps only. Other platforms don\'t keep records that far back. Full reporting with every platform starts in '+monthName(HB)+'.</p>';
    var cards=[['total','Total views &amp; listens',1],['episodes','Episode listens &amp; views']];if(SR)cards.push(['reels','Reel views']);if(SC)cards.push(['clips','Clip views']);
    h+='<section class="t-sec t-hsec">'+HELP('Where these numbers come from','Every view and listen during the period, on all of your content (new and older), taken from each platform\'s own analytics: YouTube Studio, Meta (Facebook and Instagram), TikTok, X, LinkedIn, Spotify, Apple Podcasts and your podcast host for other apps. Every play counts, so these are total views and listens. The percent compares with the period before.')+'<h2 class="t-h2">Overview <span>metrics</span></h2><p class="t-sub">Everything viewed or listened to '+(multi?'during these '+ms.length+' months':'during the month')+', on all of your content.'+(pv?' The green or red percent shows how much each number went up or down compared with '+pv.label+'.':'')+'</p><div class="t-kpis">';
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
      h+='<section class="t-sec t-card t-rel t-hsec">'+HELP('How this is counted','For each full episode released in this period: views are video plays on YouTube and Facebook, and listens are plays in podcast apps (from your podcast host), from release day to the end of the month.')+'<h2 class="t-h2">Full episodes <span>released '+(multi?'in this time frame':'this month')+'</span></h2><p class="t-sub">Every full episode we released'+(multi?' from '+v.short:' in '+monthName(ms[0]))+'. <span class="t-key t-kv">'+ICV+' Views</span> are video plays on YouTube and Facebook. <span class="t-key t-kl">'+ICL+' Listens</span> are audio plays in podcast apps.</p>';
      h+='<div class="t-wrap"><table class="t-table"><thead><tr><th>Episode</th><th class="t-num t-cv">'+ICV+' Views</th><th class="t-num t-cl">'+ICL+' Listens</th><th class="t-num">Total</th></tr></thead><tbody>';
      var TV=0,TL=0;ro.forEach(function(e,ri){var vw=sm(e,VC),ls=sm(e,LC);TV+=vw;TL+=ls;var lk=e.links.YouTube||e.links.Facebook||e.links.Audio||'';
        h+='<tr'+(ri>=10&&!printing?' class="t-more" hidden':'')+'><td>'+A(lk,esc(e.title))+'<span class="t-small">'+esc(e.detail)+(multi?(e.detail?' · ':'')+monthName(e.month):'')+'</span></td>'+cell(e,VC,'t-cv')+cell(e,LC,'t-cl')+'<td class="t-num t-strong">'+fmt(vw+ls)+'</td></tr>';});
      if(ro.length>1)h+='<tr class="t-totrow"><td><b>All '+ro.length+' episodes</b></td><td class="t-num t-cv"><b>'+fmt(TV)+'</b></td><td class="t-num t-cl"><b>'+fmt(TL)+'</b></td><td class="t-num t-strong">'+fmt(TV+TL)+'</td></tr>';
      h+='</tbody></table></div>'+(ro.length>10&&!printing?'<button type="button" class="t-tool t-seemore t-scr" style="margin-top:12px">See 10 more <span>('+(ro.length-10)+' more episodes)</span></button>':'')+'<p class="t-sub t-scr" style="margin:10px 0 0">Click a title to watch it.</p></section>';
    }
    h+='<section class="t-sec t-card"><h2 class="t-h2">Views <span>over time</span></h2><p class="t-sub">'+(multi?'The months in this view are highlighted.':'The 12 months up to '+monthName(ms[0])+'.')+'<span class="t-scr"> Click a month to open it.</span></p>';
    if(printing){h+='<div class="t-chart">'+trendSVG(680,ms,'total')+'</div>';}
    else{h+='<div class="t-seg">';[['total','Total'],['episodes','Episodes']].concat(SR?[['reels','Reels']]:[]).concat(SC?[['clips','Clips']]:[]).forEach(function(b){h+='<button data-k="'+b[0]+'" style="--sc:'+CV[b[0]]+'" aria-pressed="'+(state.metric===b[0])+'">'+b[1]+'</button>';});
      h+='</div><div class="t-chart" id="t-trend"></div>';}
    h+='</section>';
    if(multi){
      h+='<section class="t-sec t-card"><h2 class="t-h2">Month <span>by month</span></h2><p class="t-sub">Each month in this view. <b>Change</b> is how much that month\'s total views and listens went up or down compared with the month before it.<span class="t-scr"> Click a month to open its full report.</span></p><div class="t-wrap"><table class="t-table"><thead><tr><th>Month</th><th class="t-num">'+TD('episodes')+'Episodes</th>'+(SR?'<th class="t-num">'+TD('reels')+'Reels</th>':'')+''+(SC?'<th class="t-num">'+TD('clips')+'Clips</th>':'')+'<th class="t-num">Total</th><th class="t-num">Change</th></tr></thead><tbody>';
      ms.slice().reverse().forEach(function(m){var t=series[months.indexOf(m)],pi=months.indexOf(m)-1,pt=pi>=0&&sameSide(m,months[pi])?series[pi]:null,c=pt&&pt.total?(t.total-pt.total)/pt.total*100:null;
        h+='<tr><td><button class="t-mlink" data-m="'+m+'">'+monthName(m)+'</button></td><td class="t-num">'+fmt(t.episodes)+'</td>'+(SR?'<td class="t-num">'+fmt(t.reels)+'</td>':'')+(SC?'<td class="t-num">'+fmt(t.clips)+'</td>':'')+'<td class="t-num t-strong">'+fmt(t.total)+'</td><td class="t-num t-kchg">'+(c==null?'—':'<b class="'+(c>=0?'up':'down')+'">'+(c>=0?'+':'')+c.toFixed(1)+'%</b>')+'</td></tr>';});
      h+='</tbody></table></div></section>';
    }
    function audience(ms,printing){
      var DM=[['demo_age','Age'],['demo_gender','Gender'],['demo_country','Top countries'],['demo_city','Top cities'],['demo_device','How they watch'],['demo_source','How they found you'],['demo_subscribed','Subscribers vs. everyone else']];
      var all=data.filter(function(r){return ms.indexOf(r.month)>-1&&/^demo_/.test(r.metric)&&num(r.value)!=null;});
      if(!all.length)return '';
      var ORD=['YouTube','Facebook','Instagram','TikTok','Spotify','Apple Podcasts','Other apps'],plats=[];
      all.forEach(function(r){if(plats.indexOf(r.platform)<0)plats.push(r.platform);});
      plats.sort(function(a,b){var x=ORD.indexOf(a),y=ORD.indexOf(b);return (x<0?99:x)-(y<0?99:y);});
      var tabs=plats.length>1?['All'].concat(plats):plats;
      var sel=tabs.indexOf(state.demoP)>-1?state.demoP:tabs[0];
      var ageN=function(t){var m=String(t).match(/\d+/);return m?+m[0]:999;};
      var DC=['var(--c-ep)','var(--c-reel)','var(--c-clip)','#b9b6ad','var(--accent)'];
      var LBM={'Browse features':'YouTube home page & subscriptions','Suggested videos':'Suggested next to other videos','External':'Links from other sites & apps','Channel pages':'Your channel page','Direct or unknown':'Direct links or unknown','Other YouTube features':'Other YouTube pages','Shorts feed':'Shorts feed','YouTube search':'YouTube search','End screens':'End screens of other videos','Hashtag pages':'Hashtag pages','Shorts content links':'Links in Shorts','Not subscribed':'Not subscribed','Subscribed':'Subscribers','User-specified':'Other'};
      var LB=function(t){return LBM[t]||t;};
      var latest=function(p){var rs=all.filter(function(r){return r.platform===p;}),lm=rs.map(function(r){return r.month;}).sort().pop();return {lm:lm,rs:rs.filter(function(r){return r.month===lm;})};};
      // Views a platform had in a month (episodes, reels, clips, or listens for audio apps).
      var pviews=function(p,m){var names=p==='YouTube'?['YouTube','YouTube Shorts']:[p];return data.filter(function(r){return r.month===m&&names.indexOf(r.platform)>-1&&/^(episode_video|episode_audio|reel|clip)$/.test(r.metric)&&num(r.value)!=null;}).reduce(function(a,r){return a+num(r.value);},0);};
      var allBlock=function(){
        var P=plats.map(function(p){var L=latest(p);return {p:p,lm:L.lm,rs:L.rs,w:pviews(p,L.lm)};}).filter(function(x){return x.w>0;});
        if(!P.length)return block(plats[0]);
        var out=[],src={},blended=[];
        DM.forEach(function(d){if(d[0]==='demo_source')return;var have=P.filter(function(x){return x.rs.some(function(r){return r.metric===d[0];});});if(!have.length)return;
          if(have.length===1){have[0].rs.filter(function(r){return r.metric===d[0];}).forEach(function(r){out.push(r);});src[d[0]]=have[0].p;return;}
          var W=have.reduce(function(a,x){return a+x.w;},0),acc={},ord=[];
          have.forEach(function(x){x.rs.filter(function(r){return r.metric===d[0];}).forEach(function(r){if(!(r.title in acc)){acc[r.title]=0;ord.push(r.title);}acc[r.title]+=num(r.value)*x.w/W;});});
          ord.forEach(function(t){out.push({metric:d[0],title:t,value:String(Math.round(acc[t]*10)/10)});});blended.push(d[1].toLowerCase());});
        var ms2=P.map(function(x){return x.lm;}).filter(function(m,i,a){return a.indexOf(m)===i;}).map(monthName).join(', ');
        var note='<b>All Platforms</b> · '+ms2+' · '+(blended.length?'blended by each platform\'s views ('+P.map(function(x){return esc(x.p)+' '+fmt(x.w);}).join(', ')+')':'')+'</p><p class="t-dnote" style="margin-top:-8px">'+P.map(function(x){var b=(x.rs.filter(function(r){return r.detail;})[0]||{}).detail||'% of views';return esc(x.p)+': '+esc(b);}).join(' · ');
        return block(null,out,note,src);};
      var block=function(p,rs0,note0,src){
        var L=rs0?{rs:rs0}:latest(p),rs=L.rs,lm=L.lm;src=src||{};
        var basis=rs0?'':(rs.filter(function(r){return r.detail;})[0]||{}).detail||'share of views';
        var s='<p class="t-dnote">'+(note0||('<b>'+esc(p)+'</b> · '+monthName(lm)+' · '+esc(basis)))+'</p><div class="t-grid3">';
        DM.forEach(function(d){var g=rs.filter(function(r){return r.metric===d[0];});if(!g.length)return;
          if(d[0]==='demo_age')g.sort(function(a,b){return ageN(a.title)-ageN(b.title);});else g.sort(function(a,b){return num(b.value)-num(a.value);});
          if(/country|city|source/.test(d[0]))g=g.slice(0,5);
          s+='<div class="t-card"><div class="t-klabel" style="margin-bottom:12px">'+d[1]+(src[d[0]]?' <span style="font-weight:600;text-transform:none;letter-spacing:0">· '+esc(src[d[0]])+'</span>':'')+'</div>';
          if(/gender|device|subscribed/.test(d[0])){var tot=g.reduce(function(a,r){return a+num(r.value);},0)||1,C=2*Math.PI*38,off=0,ctr=d[0]==='demo_subscribed'?(g.filter(function(r){return /^subscribed$/i.test(r.title);})[0]||g[0]):g[0];
            var sv='<svg viewBox="0 0 100 100" width="124" height="124" role="img" aria-label="'+d[1]+'"><circle cx="50" cy="50" r="38" fill="none" stroke="#ece9e2" stroke-width="15"/>';
            var pt=function(f){var a=f*2*Math.PI-Math.PI/2;return (50+38*Math.cos(a)).toFixed(3)+' '+(50+38*Math.sin(a)).toFixed(3);};
            g.forEach(function(r,i){var f=num(r.value)/tot;if(f<=0)return;var c=DC[i%DC.length];
              if(f>=0.9999)sv+='<circle cx="50" cy="50" r="38" fill="none" stroke="'+c+'" stroke-width="15"/>';
              else sv+='<path d="M '+pt(off)+' A 38 38 0 '+(f>0.5?1:0)+' 1 '+pt(off+f)+'" fill="none" stroke="'+c+'" stroke-width="15" stroke-linecap="butt"/>';
              off+=f;});
            sv+='<text x="50" y="47" text-anchor="middle" style="font-size:17px;font-weight:800;fill:#1c1c1a">'+Math.round(num(ctr.value))+'%</text><text x="50" y="62" text-anchor="middle" style="font-size:8.5px;fill:#6b6b66">'+esc(LB(ctr.title))+'</text></svg>';
            s+='<div class="t-donut">'+sv+'<div class="t-gkey">'+g.map(function(r,i){return '<div><span class="t-sw" style="background:'+DC[i%DC.length]+'"></span>'+esc(LB(r.title))+' <b>'+num(r.value).toFixed(1)+'%</b></div>';}).join('')+'</div></div>';}
          else{var mx=Math.max.apply(null,g.map(function(r){return num(r.value);}).concat([1]));
            g.forEach(function(r){s+='<div class="t-row"><div>'+esc(LB(r.title))+'</div><div class="t-track"><div class="t-bar" style="width:'+Math.max(1.5,num(r.value)/mx*100)+'%"></div></div><div class="t-val">'+num(r.value).toFixed(1)+'%</div></div>';});}
          if(d[0]==='demo_source')s+='<p class="t-dhint">Where viewers were on YouTube when they clicked play.</p>';
          s+='</div>';});
        return s+'</div>';};
      var h2='<section class="t-sec t-hsec">'+HELP('Where this comes from','Percentages from each platform\'s own audience reports. YouTube and Spotify show the month itself; Facebook, Instagram and TikTok only show your current followers. Platforms share these as percentages only, and hide them when a month has too few views.')+'<h2 class="t-h2">Your <span>audience</span></h2><p class="t-sub">Who is watching and listening, from each platform\'s own audience data. Platforms share this as percentages only, and only when there are enough views to keep it anonymous.'+(ms.length>1?' For a range of months, this shows the most recent month with audience data.':'')+'</p>';
      var show=function(p){return p==='All'?allBlock():block(p);};
      if(printing)h2+=tabs.map(show).join('');
      else{if(tabs.length>1)h2+='<div class="t-dseg">'+tabs.map(function(p){return '<button data-dp="'+esc(p)+'" aria-pressed="'+(p===sel)+'">'+(p==='All'?'All Platforms':esc(p))+'</button>';}).join('')+'</div>';h2+=show(sel);}
      return h2+'</section>';
    }
    function mix(title,rows,unit,k){rows=byPlatform(rows);var t=rows.reduce(function(a,r){return a+r.value;},0),mx=Math.max.apply(null,rows.map(function(r){return r.value;}).concat([1]));
      rows.sort(function(a,b){return b.value-a.value;});
      var s='<div class="t-card t-tcard" style="--tc:'+CV[k]+'"><div class="t-klabel">'+TD(k)+title+'</div><div class="t-mixtot"><b>'+fmt(t)+'</b> '+unit+'</div>';
      if(!rows.length)return s+'<p class="t-empty">No numbers recorded for this period.</p></div>';
      rows.forEach(function(r){var v2=r.value;s+='<div class="t-row"><div>'+esc(r.platform)+'</div><div class="t-track"><div class="t-bar" style="background:'+CV[k]+';width:'+Math.max(1.5,v2/mx*100)+'%"></div></div><div class="t-val">'+fmt(v2)+'<span>'+(t?(v2/t*100).toFixed(1):'0')+'%</span></div></div>';});
      return s+'</div>';}
    h+='<section class="t-sec t-keep t-hsec">'+HELP('How this is counted','Each platform\'s views (or podcast-app listens) during the period, from that platform\'s own analytics. Videos are sorted by length, so reels are videos under 3 minutes and full episodes are the long-form uploads. Podcast apps combines Spotify, Apple Podcasts and every other app.')+'<h2 class="t-h2">Views <span>by platform</span></h2><p class="t-sub">Where your audience found you'+(multi?' across these months':' in '+monthName(ms[0]))+', and each platform\'s share of the total.</p><div class="t-grid3">';
    h+=mix('Core episodes',by(ms,'episode_audio').map(function(r){return {platform:'Podcast apps',value:r.value};}).concat(by(ms,'episode_video')),'listens &amp; views','episodes')+(SR?mix('Reels',by(ms,'reel'),'views','reels'):'')+(SC?mix('Clips',by(ms,'clip'),'views','clips'):'');
    h+='</div></section>';
    h+=blueprint(ms,multi);
    h+=audience(ms,printing);
    var NT=[['Core episodes','new_episode',by(ms,'episode_audio').concat(by(ms,'episode_video')),'listens &amp; views','episodes']];if(SR)NT.push(['Reels','new_reel',by(ms,'reel'),'views','reels']);if(SC)NT.push(['Clips','new_clip',by(ms,'clip'),'views','clips']);
    NT=NT.map(function(t){var nr=by(ms,t[1]),nm={};nr.forEach(function(r){nm[r.month]=1;});return {label:t[0],has:nr.length>0,nw:sum(nr),all:sum(t[2].filter(function(r){return nm[r.month];})),unit:t[3],col:CV[t[4]]};}).filter(function(t){return t.has&&t.all>0;});
    if(NT.length){var tn=0,ta=0;NT.forEach(function(t){t.nw=Math.min(t.nw,t.all);tn+=t.nw;ta+=t.all;});var pn=Math.round(tn/ta*100);
      h+='<section class="t-sec t-card t-keep t-hsec">'+HELP('How this is counted','We add up the views and listens on posts released during this period. Everything else came from posts released earlier that are still being found. Some platforms count a post\'s views to date, so a new post can include a few days from the next month.')+'<h2 class="t-h2">'+(multi?'Content posted in this time frame':'This month\'s content')+' <span>vs. content still working for you</span></h2><p class="t-sub">'+(multi?'Views and listens on what we released from '+v.short+', compared with everything released before.':'Views and listens on what we released this month, compared with everything released in past months.')+'</p>';
      h+='<p class="t-newhead"><b>'+pn+'%</b> of your views and listens came from posts released '+(multi?'in this time frame':'this month')+'. The other <b>'+(100-pn)+'%</b> came from past posts that are still working for you.</p>';
      NT.forEach(function(t){var a=Math.round(t.nw/t.all*100);
        h+='<div class="t-nrow"><div class="t-nlbl">'+t.label+'</div><div class="t-ntrack" style="background:color-mix(in srgb,'+t.col+' 22%,#fff)"><div class="t-nnew" style="background:'+t.col+';width:'+a+'%"></div></div><div class="t-nval"><span class="t-dot" style="background:'+t.col+'"></span>'+fmt(t.nw)+(multi?' new':' this month')+' <span class="t-dot t-dot2" style="background:color-mix(in srgb,'+t.col+' 22%,#fff)"></span>'+fmt(t.all-t.nw)+' past</div></div>';});
      h+='<div class="t-nkey"><span><span class="t-dot" style="background:#6b6b66"></span>Released '+(multi?'in this time frame':'this month')+'</span><span><span class="t-dot t-dot2" style="background:#dcdad4"></span>Released in past months</span></div></section>';}
    var cr={};by(ms,'created').forEach(function(r){cr[r.platform]=(cr[r.platform]||0)+num(r.value);});
    if(Object.keys(cr).length){var ce=cr['Core episodes']||0,rl=cr['Reels']||0,cl=SC?(cr['Clips']||0):0;
      var ap=num(S.audio_platforms)||0,rp=num(S.reel_platforms)||0,cp=num(S.clip_platforms)||0;
      // Platforms come from where this client has numbers in the period; most-viewed first.
      var platsOf=function(metric){var t={},o=[];by(ms,metric).forEach(function(r){if(!(r.platform in t)){t[r.platform]=0;o.push(r.platform);}t[r.platform]+=num(r.value);});return o.sort(function(a,b){return t[b]-t[a];});};
      var NAMED=/^(apple podcasts|spotify|amazon music|youtube music|iheartradio|pandora|audible)$/i,rows2=[],uniq={},nOther=0;
      var chip=function(t){return '<span class="t-chip">'+esc(t)+'</span>';};
      if(ce){var an=platsOf('episode_audio'),named=an.filter(function(x){return NAMED.test(x);}),hasO=an.some(function(x){return !NAMED.test(x);}),oc=ap?Math.max(ap-named.length,0):(hasO?1:0);
        var lines=[];if(named.length||oc){var ac=named.map(chip);if(oc)ac.push(chip(oc>1?oc+' other podcast apps':(named.length?'Other podcast apps':'Podcast apps')));lines.push(['As audio',ac.join(''),named.length+oc]);named.forEach(function(x){uniq[x]=1;});nOther+=oc;}
        var vn=platsOf('episode_video');if(vn.length){lines.push(['As video',vn.map(chip).join(''),vn.length]);vn.forEach(function(x){uniq[x]=1;});}
        if(lines.length)rows2.push([ce,ce===1?'full episode':'full episodes','episodes',lines]);}
      var simple=function(n,one,many,key,metric,cnt){if(!n)return;var pn=platsOf(metric);pn.forEach(function(x){uniq[x==='YouTube Shorts'?'YouTube':x]=1;});
        var line=pn.length?['',pn.map(chip).join(''),pn.length]:(cnt?['',chip(cnt+' platforms'),cnt]:null);if(line)rows2.push([n,n===1?one:many,key,[line]]);};
      if(SR)simple(rl,'reel','reels','reels','reel',rp);
      if(SC)simple(cl,'clip','clips','clips','clip',cp);
      var pcs=0,pl=0;rows2.forEach(function(r){pcs+=r[0];r[3].forEach(function(l){pl+=r[0]*l[2];});});
      var nPlat=Object.keys(uniq).length+nOther;
      h+='<section class="t-sec t-card t-hsec">'+HELP('How this is counted','Pieces are the episodes, reels and clips we released for you in this period. Each piece posted to one platform counts as one post, and platforms are the places your content had views or listens.')+'<h2 class="t-h2">The value <span>snapshot</span></h2><p class="t-sub">What we created for you'+(multi?' over these months':' this month')+' and everywhere it was posted.</p>';
      h+='<div class="t-vkpis"><div><b>'+fmt(pcs)+'</b><span>pieces of content</span></div><div><b>'+fmt(pl)+'</b><span>posts</span></div><div><b>'+fmt(nPlat)+'</b><span>platforms</span></div></div>';
      rows2.forEach(function(r){var posts=r[3].reduce(function(a,l){return a+r[0]*l[2];},0);
        h+='<div class="t-vrow"><div class="t-vname">'+TD(r[2])+'<b>'+fmt(r[0])+'</b> '+r[1]+'</div><div class="t-vlines">'+r[3].map(function(l){return '<div>'+(l[0]?'<span class="t-vlbl">'+l[0]+'</span>':'')+l[1]+'</div>';}).join('')+'</div><div class="t-vposts"><b>'+fmt(posts)+'</b> posts</div></div>';});
      h+='<p class="t-sub" style="margin:12px 0 0">Each piece posted to a platform counts as one post'+(ce&&rows2.length&&rows2[0][3].length>1?'. Full episodes go out as both audio and video, so each one is posted in several places':'')+'.</p></section>';}
    var tc=topContent(ms),tes=tc.eps,tr=tc.reels;
    if(!multi&&(tes.length||tr.length)){h+='<div class="t-two t-sec">';
      if(tes.length){h+='<section class="t-card t-hsec">'+HELP('How these are picked','Your episodes with the most views and listens during the month, new or older. Each number links to that platform\'s copy. ✱ means it was boosted (paid promotion).')+'<h2 class="t-h2">Top performing <span>episodes</span></h2><div class="t-wrap"><table class="t-table"><thead><tr><th>Episode</th><th class="t-num">YouTube</th><th class="t-num">Facebook</th><th class="t-num">Audio</th><th class="t-num">Total</th></tr></thead><tbody>';
        var cell=function(e,p){return '<td class="t-num">'+(e.links[p]&&e.p[p]!=null?A(e.links[p],fmt(e.p[p]),'t-nlink'):fmt(e.p[p]))+'</td>';};
        tes.forEach(function(e){h+='<tr><td>'+A(e.link,esc(e.title))+(e.boosted?BST:'')+'<span class="t-small">'+esc(e.detail)+'</span></td>'+cell(e,'YouTube')+cell(e,'Facebook')+cell(e,'Audio')+'<td class="t-num t-strong">'+fmt(e.total)+'</td></tr>';});
        h+='</tbody></table></div>'+(tes.some(function(e){return e.boosted;})?BNOTE:'')+'</section>';}
      if(tr.length){h+='<section class="t-card t-hsec">'+HELP('How these are picked','The most-viewed reel on each platform during the month. Click a title to watch it. ✱ means it was boosted (paid promotion).')+'<h2 class="t-h2">Top performing <span>reels</span></h2><div class="t-wrap"><table class="t-table"><thead><tr><th>Platform</th><th>Title</th><th class="t-num">Views</th></tr></thead><tbody>';
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
    if(ins.length&&!multi){h+='<section class="t-sec t-hsec">'+HELP('Where these come from','Written by your TPU team from this month\'s numbers, and reviewed before your report is published.')+'<h2 class="t-h2">Key insights <span>&amp; recommendations</span></h2><div class="t-ins">';
      ins.forEach(function(r){h+='<div class="t-insc">'+(r.title?'<b>'+esc(r.title)+'</b>':'')+linkify(r.detail,tc)+(okUrl(r.link)?'<div class="t-watch">'+A(r.link,'Watch it &rarr;','')+'</div>':'')+'</div>';});h+='</div></section>';}
    if(ins.length&&multi){h+='<section class="t-sec t-card"><h2 class="t-h2">Highlights <span>by month</span></h2><p class="t-sub">The headline from each month\'s insights.<span class="t-scr"> Open a month to read them all.</span></p><div class="t-hl">';
      ms.slice().reverse().forEach(function(m){var mi=ins.filter(function(r){return r.month===m&&!/^recommend/i.test(r.title);});if(!mi.length)return;
        h+='<div><b>'+MONTHS[+m.slice(5)-1].slice(0,3)+' '+m.slice(0,4)+'</b> '+mi.map(function(r){var t=(r.title||'').replace(/:$/,'')||(r.detail||'').split(/(?<=[.!?])\s/)[0];return esc(t.replace(/\.$/,''));}).join(' · ')+'</div>';});
      h+='</div></section>';}
    h+='<footer class="t-foot"><details'+(printing?' open':'')+'><summary>How these numbers are counted</summary><dl><dt>Total views &amp; listens</dt><dd>Episode listens and views, plus reel and clip views, for everything viewed during the month.</dd><dt>Core episodes</dt><dd>Full episodes: video over 15 minutes, plus every audio listen.</dd>'+(SR?'<dt>Reels</dt><dd>Short videos under 3 minutes.</dd>':'')+(SC?'<dt>Clips</dt><dd>Videos from 3 to 15 minutes.</dd>':'')+'<dt>This month\'s content vs. content still working for you</dt><dd>Views and listens on episodes, reels and clips released during the month, compared with everything released before it. Some platforms count a post\'s views to date, so new posts can include views from the first few days of the next month. For a range of months, each post is counted as new in the month it came out.</dd>'+(data.some(function(r){return r.metric==="blueprint_score";})?'<dt>Blueprint alignment</dt><dd>Scored by your TPU team each month against the Show Blueprint you created with us. When your plans change, we update your blueprint so the score stays fair.</dd>':'')+'<dt>Posts</dt><dd>Each piece of content posted to a platform counts as one post. Platforms are the ones your content had views or listens on.</dd></dl></details><div class="t-brand">The<span>Podcast</span>Upload</div></footer>';
    return h;
  }

  function openMonth(m){state.kind='month';state.month=m;state.year=yearOf(m);render();}
  function render(){
    var v=viewFor(state);
    root.innerHTML=html(v,false);
    root.querySelectorAll('.t-tab[data-m],.t-mlink').forEach(function(b){b.onclick=function(){openMonth(b.dataset.m);};});
    root.querySelectorAll('.t-range').forEach(function(b){b.onclick=function(){state.kind=b.dataset.kind;if(state.kind==='last')state.n=+b.dataset.v;else if(state.kind==='year')state.year=b.dataset.v;render();};});
    var ys=root.querySelector('.t-year');if(ys)ys.onchange=function(){var y=ys.value,ym=months.filter(function(m){return yearOf(m)===y;});
      if(state.kind==='year'){state.year=y;render();}else openMonth(ym[ym.length-1]);};
    root.querySelectorAll('.t-seg button').forEach(function(b){b.onclick=function(){state.metric=b.dataset.k;render();};});
    root.querySelectorAll('[data-dp]').forEach(function(b){b.onclick=function(){state.demoP=b.dataset.dp;render();};});
    root.querySelectorAll('.t-seemore').forEach(function(b){b.onclick=function(){var hid=b.closest('section').querySelectorAll('tr.t-more[hidden]');for(var i=0;i<10&&i<hid.length;i++)hid[i].hidden=false;var left=hid.length-Math.min(10,hid.length);if(left<=0)b.remove();else b.querySelector('span').textContent='('+left+' more episodes)';};});
    root.querySelectorAll('.t-hsec>.t-bphw,.t-bpsec>.t-bphw').forEach(function(w){var t=w.parentNode.querySelector('.t-h2');if(t)t.appendChild(w);});
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

