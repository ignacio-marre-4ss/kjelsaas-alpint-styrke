/* =================================================================
   KJELSÅS ALPINT STYRKE — v1.0
   All content sourced directly from sommertrening.pdf and
   Vekttabell_Styrke_1_MAL_NTG.xlsx. No AI-generated sessions.
   ================================================================= */

/* ===================== EXERCISE LIBRARY ===================== */
/* Each exercise defined once; sets/reps live on the program-session link. */
const EXERCISE_LIBRARY = {
  front_squat: { name: "Dyp frontbøy m/stang" },
  deadlift: { name: "Markløft" },
  single_leg_rdl: { name: "Ettbein strakmark med hantler" },
  bulgarian_split_bench: { name: "Bulgarsk utfall på benk m/hantler" },
  hip_thrust: { name: "Barbell hip thrust on bench" },
  step_up_knee_raise: { name: "Step up w/ knee raise" },
  toes_to_bar: { name: "Toes to bar – eksentrisk" },
  back_squat: { name: "Barbell Back Squat" },
  nordic_hamstring: { name: "Nordic Hamstrings" },
  hip_abduction_band: { name: "Abduction of the hip with elastic band" },
  barbell_deadlift: { name: "Barbell Deadlift" },
  backward_lunge: { name: "Backward lunge" },
  calf_raise: { name: "Elevated Calf Raises" },
  copenhagen_adduction: { name: "Modified Copenhagen Adduction on bench" },
  vertical_squat_jump: { name: "Vertical barbell squat jump" },
  box_jump: { name: "Box jump fra sittende, høy landing" },
  lateral_jump: { name: "Lateral jump fra side til side" },
  jumping_bulgarian: { name: "Jumping Bulgarian Split Squats on bench" },
  ball_slam: { name: "Ball Slam" },
  deadbug: { name: "Deadbug" },
  crunches: { name: "Crunches" },
  back_extension: { name: "Rygghev" },
  leg_raise: { name: "Beinhev" },
  hitlers_hund: { name: "Hitlers hund" },
  plank: { name: "Planke" },
  heel_touches: { name: "Heel touches" },
  side_plank: { name: "Sideplanke" },
  v_situp: { name: "V-situps" },
  worlds_greatest_stretch: { name: "The World's Greatest Stretch" },
  calf_stretch: { name: "Calf 1" },
  thigh_calf_stretch: { name: "Back of thigh and calf 6" },
  hip_thigh_stretch: { name: "Front side thigh and hip 1" },
  hip_flexor_stretch: { name: "Hip flexors 1" },
  upperbody_stretch: { name: "Outside of upperbody 1" },
  glute_stretch: { name: "Glute stretch" },
  lumbar_rotation: { name: "Lumbar spine rotation on stomach" },
  hip_mobilization: { name: "Mobilization hip w/ knee bent 45°" }
};

/* ===================== 1RM PROGRESSION TABLES ===================== */
/* Verified row-for-row against Vekttabell_Styrke_1_MAL_NTG.xlsx */
const PROGRESSION_TABLES = {
  styrke1: { label:"Styrke 1", rows:[
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:8},{pct:70,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:12},{pct:60,reps:10}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:9},{pct:72.5,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:13},{pct:62.5,reps:10}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:10},{pct:75,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:14},{pct:65,reps:10}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:9},{pct:72.5,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:13},{pct:62.5,reps:10}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:10},{pct:75,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:14},{pct:65,reps:10}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:65,reps:11},{pct:77.5,reps:6}], sett:4},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:55,reps:15},{pct:67.5,reps:10}], sett:3}
  ]},
  styrke2: { label:"Styrke 2", rows:[
    {session:"Økt 1", sets:[{pct:50,reps:12},{pct:60,reps:10},{pct:70,reps:8}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:10},{pct:65,reps:8}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:70,reps:7},{pct:77.5,reps:5}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:11},{pct:67.5,reps:8}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:70,reps:8},{pct:80,reps:5}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:12},{pct:70,reps:8}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:70,reps:7},{pct:77.5,reps:5}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:11},{pct:67.5,reps:8}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:70,reps:8},{pct:80,reps:5}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:12},{pct:70,reps:8}], sett:3},
    {session:"Økt 1", sets:[{pct:60,reps:10},{pct:70,reps:9},{pct:82.5,reps:5}], sett:3},
    {session:"Økt 2", sets:[{pct:50,reps:15},{pct:60,reps:13},{pct:72.5,reps:8}], sett:3}
  ]},
  styrke3: { label:"Styrke 3", rows:[
    {uke:"Uke 1", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:5},{pct:80,reps:4}], sett:4},
    {uke:"Uke 1", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:7},{pct:70,reps:6}], sett:3},
    {uke:"Uke 2", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:6},{pct:82.5,reps:4}], sett:4},
    {uke:"Uke 2", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:8},{pct:72.5,reps:6}], sett:3},
    {uke:"Uke 3", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:7},{pct:85,reps:4}], sett:4},
    {uke:"Uke 3", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:9},{pct:75,reps:6}], sett:3},
    {uke:"Uke 4", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:6},{pct:82.5,reps:4}], sett:4},
    {uke:"Uke 4", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:8},{pct:72.5,reps:6}], sett:3},
    {uke:"Uke 5", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:7},{pct:85,reps:4}], sett:4},
    {uke:"Uke 5", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:9},{pct:75,reps:6}], sett:3},
    {uke:"Uke 6", session:"Økt 1", sets:[{pct:65,reps:8},{pct:75,reps:8},{pct:87.5,reps:4}], sett:4},
    {uke:"Uke 6", session:"Økt 2", sets:[{pct:55,reps:10},{pct:65,reps:10},{pct:77.5,reps:6}], sett:3}
  ]}
};
const TABLE_ORDER = ["styrke1","styrke2","styrke3"];

const WEIGHT_GATE_CHECKLIST = [
  "Er det fysisk mulig å øke kg?",
  "Er det kvalitet i bevegelsen?",
  "Er knærne i ro, pekende rett fram?",
  "Er ryggen rett?",
  "Er hele foten i bakken? Også hælen."
];

/* ===================== PROGRAMS (data-driven) ===================== */
const PROGRAMS = [
  {
    id: "sommertrening",
    name: "Sommertrening",
    goal: "Bedre kondisjon, styrke og bevegelighet.",
    sessions: [
      { id:"beinstyrke_okt1", name:"Beinstyrke – Økt 1", type:"beinstyrke", exercises:[
        {ex:"front_squat", sets:3, reps:10, progression:true},
        {ex:"deadlift", sets:3, reps:10},
        {ex:"single_leg_rdl", sets:3, reps:12},
        {ex:"bulgarian_split_bench", sets:3, reps:12},
        {ex:"hip_thrust", sets:3, reps:8},
        {ex:"step_up_knee_raise", sets:3, reps:12},
        {ex:"toes_to_bar", sets:3, reps:10}
      ]},
      { id:"beinstyrke_okt2", name:"Beinstyrke – Økt 2", type:"beinstyrke", exercises:[
        {ex:"back_squat", sets:3, reps:6, progression:true},
        {ex:"nordic_hamstring", sets:3, reps:8},
        {ex:"hip_abduction_band", sets:3, reps:8},
        {ex:"barbell_deadlift", sets:3, reps:6},
        {ex:"hip_thrust", sets:3, reps:6},
        {ex:"backward_lunge", sets:3, reps:8},
        {ex:"calf_raise", sets:3, reps:10},
        {ex:"copenhagen_adduction", sets:3, reps:8}
      ]},
      { id:"beinstyrke_okt3", name:"Beinstyrke – Økt 3 (Eksplosivt)", type:"beinstyrke",
        note:"Maksimal innsats i satsfasen på alle øvelser.", exercises:[
        {ex:"vertical_squat_jump", sets:3, reps:6},
        {ex:"box_jump", sets:3, reps:6},
        {ex:"lateral_jump", sets:3, reps:8},
        {ex:"jumping_bulgarian", sets:3, reps:6},
        {ex:"ball_slam", sets:3, reps:10}
      ]},
      { id:"core", name:"Core", type:"core", workSec:45, restSec:15,
        videos:["https://www.youtube.com/watch?v=vOiP3kfFlrE","https://www.youtube.com/watch?v=AnYl6Nk9GOA"],
        exercises:[
        {ex:"deadbug"},{ex:"crunches"},{ex:"back_extension"},{ex:"leg_raise"},
        {ex:"hitlers_hund"},{ex:"plank"},{ex:"heel_touches"},{ex:"side_plank"},{ex:"v_situp"}
      ]},
      { id:"mobilitet", name:"Mobilitet", type:"mobilitet",
        video:"https://www.youtube.com/watch?v=s-1vMbAgYWU", exercises:[
        {ex:"worlds_greatest_stretch", meta:"2 sett"},
        {ex:"calf_stretch", meta:"2 sett · 30 sek"},
        {ex:"thigh_calf_stretch", meta:"2 sett · 30 sek"},
        {ex:"hip_thigh_stretch", meta:"2 sett · 30 sek"},
        {ex:"hip_flexor_stretch", meta:"2 sett · 30 sek"},
        {ex:"upperbody_stretch", meta:"2 sett · 30 sek"},
        {ex:"glute_stretch", meta:"2 sett"},
        {ex:"lumbar_rotation", meta:"2 sett"},
        {ex:"hip_mobilization", meta:""}
      ]},
      { id:"intervall_4x4", name:"Intervall – 4×4", type:"intervall", timerKind:"4x4" },
      { id:"intervall_pyramide", name:"Intervall – Pyramide", type:"intervall", timerKind:"pyramide" },
      { id:"intervall_4515", name:"Intervall – 45/15", type:"intervall", timerKind:"4515" },
      { id:"intervall_2x12", name:"Intervall – 2×12", type:"intervall", timerKind:"2x12" },
      { id:"langtur", name:"Rolig langkjør", type:"langtur", options:[
        {name:"Rolig jogg", suggested:"45–60 min"},
        {name:"Ellipse", suggested:"45–60 min (skånsomt for knær/ankler)"},
        {name:"Sykkel", suggested:"90–120 min"},
        {name:"Fjelltur", suggested:"2 timer +"}
      ]},
      { id:"spenst", name:"Spenst / koordinasjon", type:"spenst",
        video:"https://youtu.be/UQdmE--JWVU?si=ReUeeBZ0drm7Lqeu", options:[
        {name:"Trampoline"},{name:"Vannski / wakeboard"},{name:"Rollerblades"},
        {name:"Stige"},{name:"Hinderløyper"},{name:"Sti-/downhill-sykling"},{name:"Sjonglering"}
      ]}
    ]
  }
];

const TYPE_LABELS = {
  beinstyrke:"Beinstyrke", intervall:"Intervall", langtur:"Rolig langkjør",
  spenst:"Spenst / koordinasjon", core:"Core", mobilitet:"Mobilitet", annet:"Fridag"
};
const CATEGORY_ORDER = ["beinstyrke","intervall","langtur","spenst","core","mobilitet"];

const WEEK_GOALS = [
  {key:"beinstyrke", label:"Beinstyrke økter", min:2, max:3},
  {key:"intervall", label:"Intervall", min:1, max:1},
  {key:"langtur", label:"Rolig langkjør", min:1, max:1},
  {key:"spenst", label:"Spenst / hurtighet / koordinasjon", min:1, max:2},
  {key:"annet", label:"Fridager", min:1, max:2}
];

/* ===================== STATE / STORAGE ===================== */

const STORAGE_KEY = "kjelsaasAlpintStyrkeV1";

function defaultAthlete(name){
  return {
    id: uid(), name,
    oneRM: {styrke1:"", styrke2:"", styrke3:""},
    checklist: [false,false,false,false,false],
    activeTable: "styrke1",
    tableRowIndex: 0,
    sessionLastDone: {}
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  const a = defaultAthlete("Meg");
  return { athletes:[a], activeId:a.id, logs:{ [a.id]: [] } };
}
let state = loadState();
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function activeAthlete(){ return state.athletes.find(a=>a.id===state.activeId) || state.athletes[0]; }

/* ===================== UTIL ===================== */

function uid(){ return "id"+Date.now()+Math.floor(Math.random()*100000); }
function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 1800);
}
function calcWeight(oneRM, pct){
  if(!oneRM || isNaN(oneRM)) return null;
  return Math.round(((oneRM*pct)/100)/2.5)*2.5;
}
function isoWeekKey(d){
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(date.getUTCFullYear(),0,4));
  const weekNum = 1 + Math.round(((date - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay()+6)%7)) / 7);
  return date.getUTCFullYear()+"-W"+weekNum;
}
function todayISO(){ return new Date().toISOString().slice(0,10); }
function fmtDateHeading(iso){
  const d = new Date(iso+"T00:00:00");
  if(isNaN(d)) return iso;
  return d.toLocaleDateString('nb-NO',{day:'numeric', month:'long', year:'numeric'});
}
function findSession(sessionId){
  for(const p of PROGRAMS){
    const s = p.sessions.find(s=>s.id===sessionId);
    if(s) return {program:p, session:s};
  }
  return null;
}
function exName(exId){ return (EXERCISE_LIBRARY[exId]||{}).name || exId; }

/* ===================== NAV ===================== */

let currentPage = "hjem";
function goTo(page){
  currentPage = page;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+page).classList.add("active");
  document.querySelectorAll("nav.bottom button").forEach(b=>b.classList.toggle("active", b.dataset.page===page));
  render();
}
function render(){
  document.getElementById("dateLabel").textContent = new Date().toLocaleDateString('nb-NO',{weekday:'long', day:'numeric', month:'long'});
  if(currentPage==="hjem") renderHjem();
  if(currentPage==="program") renderProgram();
  if(currentPage==="historikk") renderHistory(document.getElementById("historySearch").value);
  if(currentPage==="innstillinger") renderSettings();
}

/* ===================== STATS / WEEK GOALS ===================== */

function weekLogsFor(athlete){
  const logs = state.logs[athlete.id] || [];
  const wk = isoWeekKey(new Date());
  return logs.filter(l => isoWeekKey(new Date(l.date+"T00:00:00")) === wk);
}
function computeStats(athlete){
  const wl = weekLogsFor(athlete);
  const hours = wl.reduce((s,l)=>s+(l.durationSec||0),0)/3600;
  return {
    total: wl.length,
    beinstyrke: wl.filter(l=>l.type==="beinstyrke").length,
    intervall: wl.filter(l=>l.type==="intervall").length,
    hours: hours.toFixed(1)
  };
}

/* ===================== HJEM ===================== */

function suggestNextSession(athlete){
  const wl = weekLogsFor(athlete);
  const counts = {};
  WEEK_GOALS.forEach(g=>counts[g.key]=0);
  wl.forEach(l=>{ if(counts[l.type] !== undefined) counts[l.type]++; });

  const unmet = WEEK_GOALS.filter(g => g.key!=="annet" && counts[g.key] < g.min);
  if(unmet.length === 0) return null;

  const target = unmet[0];
  const program = PROGRAMS[0];
  const candidates = program.sessions.filter(s=>s.type===target.key);
  if(candidates.length===0) return null;
  candidates.sort((a,b)=>{
    const la = athlete.sessionLastDone[a.id] || 0;
    const lb = athlete.sessionLastDone[b.id] || 0;
    return la - lb;
  });
  return { program, session: candidates[0], goalLabel: target.label };
}

function renderHjem(){
  const athlete = activeAthlete();
  const next = suggestNextSession(athlete);
  const card = document.getElementById("nextSessionCard");
  if(next){
    card.innerHTML = `
      <div class="session-item" style="margin-bottom:4px;">
        <div>
          <div class="name">${next.session.name}</div>
          <div class="meta">Dekker ukemål: ${next.goalLabel}</div>
        </div>
        <button onclick="startSession('${next.program.id}','${next.session.id}')">Start</button>
      </div>`;
  } else {
    card.innerHTML = `<p class="hint">Alle ukemål er nådd denne uken. 🎉 Du kan fortsatt starte en økt fra Program-fanen.</p>
      <button class="btn secondary" onclick="goTo('program')">Gå til program</button>`;
  }

  const counts = {};
  WEEK_GOALS.forEach(g=>counts[g.key]=0);
  weekLogsFor(athlete).forEach(l=>{ if(counts[l.type] !== undefined) counts[l.type]++; });
  document.getElementById("weekGoalsList").innerHTML = WEEK_GOALS.map(g=>{
    const count = counts[g.key];
    const done = count >= g.min;
    return `<div class="goal-row">
      <div><div class="label">${g.label}</div><div class="sub">Mål: ${g.min===g.max ? g.min : g.min+'–'+g.max} / uke</div></div>
      <div class="progress-pill ${done?'done':''}">${count} / ${g.min===g.max ? g.min : g.max}</div>
    </div>`;
  }).join("") + `<div style="margin-top:10px;"><button class="btn ghost" onclick="markFridag()">+ Registrer fridag</button></div>`;

  const stats = computeStats(athlete);
  document.getElementById("statGrid").innerHTML = `
    <div class="stat-box"><div class="num">${stats.total}</div><div class="lbl">Økter denne uka</div></div>
    <div class="stat-box"><div class="num">${stats.beinstyrke}</div><div class="lbl">Styrkeøkter</div></div>
    <div class="stat-box"><div class="num">${stats.intervall}</div><div class="lbl">Intervaller</div></div>
    <div class="stat-box"><div class="num">${stats.hours}</div><div class="lbl">Timer trent</div></div>
  `;
}

function markFridag(){
  const athlete = activeAthlete();
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId:"fridag", programId:null, name:"Fridag", type:"annet",
    durationSec:0, exercises:[], notes:""
  });
  saveState();
  toast("Fridag registrert");
  renderHjem();
}

/* ===================== PROGRAM PAGE ===================== */

function renderProgram(){
  const program = PROGRAMS[0];
  let html = "";
  CATEGORY_ORDER.forEach(cat=>{
    const sessions = program.sessions.filter(s=>s.type===cat);
    if(sessions.length===0) return;
    html += `<div class="category-heading">${TYPE_LABELS[cat]}</div>`;
    sessions.forEach(s=>{
      let meta = "";
      if(s.type==="beinstyrke") meta = s.exercises.length + " øvelser";
      else if(s.type==="core") meta = s.exercises.length + " øvelser · 45/15";
      else if(s.type==="mobilitet") meta = s.exercises.length + " øvelser";
      else if(s.type==="intervall") meta = "Intervalltimer";
      else if(s.options) meta = s.options.length + " aktiviteter å velge mellom";
      html += `<div class="session-item">
        <div><div class="name">${s.name}</div><div class="meta">${meta}</div></div>
        <button onclick="startSession('${program.id}','${s.id}')">Start</button>
      </div>`;
    });
  });
  document.getElementById("programList").innerHTML = html;
}

/* ===================== HISTORY PAGE ===================== */

document.addEventListener("DOMContentLoaded", ()=>{
  const search = document.getElementById("historySearch");
  if(search) search.addEventListener("input", ()=>renderHistory(search.value));
});

function renderHistory(filterText){
  const athlete = activeAthlete();
  let logs = (state.logs[athlete.id]||[]).slice().sort((a,b)=>b.timestamp-a.timestamp);
  const f = (filterText||"").trim().toLowerCase();
  if(f){
    logs = logs.filter(l=>{
      const hay = [l.name, TYPE_LABELS[l.type]||l.type, l.notes||"", l.meta&&l.meta.activity||""]
        .concat((l.exercises||[]).map(e=>e.name))
        .join(" ").toLowerCase();
      return hay.includes(f);
    });
  }
  const wrap = document.getElementById("historyList");
  if(logs.length===0){
    wrap.innerHTML = `<div class="empty">Ingen treningsøkter funnet${f?' for «'+filterText+'»':' ennå'}.</div>`;
    return;
  }
  let html = "";
  let lastDate = null;
  logs.forEach(l=>{
    if(l.date !== lastDate){
      html += `<div class="history-date">${fmtDateHeading(l.date)}</div>`;
      lastDate = l.date;
    }
    const time = new Date(l.timestamp).toLocaleTimeString('nb-NO',{hour:'2-digit',minute:'2-digit'});
    const durMin = l.durationSec ? Math.round(l.durationSec/60) : null;
    html += `<div class="history-card">
      <button class="del" onclick="deleteLog('${l.id}')">Slett</button>
      <div class="top"><span class="type">${l.name || TYPE_LABELS[l.type]}</span><span class="time">${time}${durMin?' · '+durMin+' min':''}</span></div>
      ${(l.exercises||[]).map(e=>`<div class="exline">${e.name}: ${e.weight?e.weight+' kg × ':''}${e.reps} reps${e.sets?' × '+e.sets+' sett':''}</div>`).join("")}
      ${l.meta && l.meta.activity ? `<div class="exline">${l.meta.activity}</div>` : ""}
      ${l.notes ? `<div class="notes">"${l.notes.replace(/</g,'&lt;')}"</div>` : ""}
    </div>`;
  });
  wrap.innerHTML = html;
}

function deleteLog(id){
  const athlete = activeAthlete();
  state.logs[athlete.id] = (state.logs[athlete.id]||[]).filter(l=>l.id!==id);
  saveState();
  renderHistory(document.getElementById("historySearch").value);
}

/* ===================== SETTINGS PAGE ===================== */

let activeStrengthTable = null;

function renderSettings(){
  const athlete = activeAthlete();
  if(!activeStrengthTable) activeStrengthTable = athlete.activeTable;

  document.getElementById("athleteListFull").innerHTML = state.athletes.map(a=>renderAthleteChip(a,true)).join("");

  document.getElementById("strengthTabs").innerHTML = TABLE_ORDER.map(key=>{
    return `<button class="${key===activeStrengthTable?'active':''}" onclick="switchStrengthTable('${key}')">${PROGRESSION_TABLES[key].label}</button>`;
  }).join("");

  const input = document.getElementById("oneRmInput");
  input.value = athlete.oneRM[activeStrengthTable] || "";
  input.oninput = ()=>{
    athlete.oneRM[activeStrengthTable] = input.value;
    saveState();
    renderStrengthTable();
  };

  renderProgressionStatus();
  renderStrengthTable();
  renderChecklist();
}

function renderAthleteChip(a, inModal){
  const active = a.id === state.activeId;
  return `<div class="athlete-chip ${active?'active-chip':''}" onclick="${inModal?`selectAthlete('${a.id}')`:''}">
    <span>${a.name}${active?' ✓':''}</span>
    ${state.athletes.length>1 ? `<button class="remove" onclick="event.stopPropagation();removeAthlete('${a.id}')">Fjern</button>` : ''}
  </div>`;
}

function switchStrengthTable(key){
  activeStrengthTable = key;
  renderSettings();
}

function renderStrengthTable(){
  const athlete = activeAthlete();
  const table = PROGRESSION_TABLES[activeStrengthTable];
  const oneRM = parseFloat(athlete.oneRM[activeStrengthTable]);
  const hasWeeks = table.rows.some(r=>r.uke);
  let html = `<table class="plan"><thead><tr>`;
  if(hasWeeks) html += `<th>Uke</th>`;
  html += `<th>Økt</th><th>%</th><th>Vekt</th><th>Reps</th><th>%</th><th>Vekt</th><th>Reps</th><th>%</th><th>Vekt</th><th>Reps</th><th>Sett</th></tr></thead><tbody>`;
  table.rows.forEach((row,i)=>{
    const isCurrent = key_matches(i);
    html += `<tr style="${isCurrent && activeStrengthTable===athlete.activeTable ? 'outline:2px solid var(--accent);' : ''}">`;
    if(hasWeeks) html += `<td class="week-cell">${row.uke || ""}</td>`;
    html += `<td class="session-cell">${row.session}</td>`;
    row.sets.forEach(s=>{
      const w = calcWeight(oneRM, s.pct);
      html += `<td>${s.pct}%</td><td class="weight-cell">${w!==null ? w+' kg' : '–'}</td><td>${s.reps}</td>`;
    });
    html += `<td>${row.sett}</td></tr>`;
  });
  html += `</tbody></table>`;
  document.getElementById("strengthTableWrap").innerHTML = html;

  function key_matches(i){
    return i === clamp(athlete.tableRowIndex,0,table.rows.length-1);
  }
}

function renderProgressionStatus(){
  const athlete = activeAthlete();
  const table = PROGRESSION_TABLES[athlete.activeTable];
  const idx = clamp(athlete.tableRowIndex, 0, table.rows.length-1);
  const row = table.rows[idx];
  let html = `<div class="progression-info">
    <div class="row"><span>Aktiv tabell</span><b>${table.label}</b></div>
    <div class="row"><span>Neste rad</span><b>${idx+1} av ${table.rows.length} (${row.uke?row.uke+' ':''}${row.session})</b></div>
  </div>
  <select id="activeTableSelect" onchange="onActiveTableChange()">
    ${TABLE_ORDER.map(k=>`<option value="${k}" ${k===athlete.activeTable?'selected':''}>${PROGRESSION_TABLES[k].label}</option>`).join("")}
  </select>
  <label class="field-label">Hopp til rad (1–${table.rows.length})</label>
  <input type="number" id="rowJumpInput" value="${idx+1}" min="1" max="${table.rows.length}" onchange="onRowJumpChange()">`;
  document.getElementById("progressionStatus").innerHTML = html;
}
function onActiveTableChange(){
  const athlete = activeAthlete();
  athlete.activeTable = document.getElementById("activeTableSelect").value;
  athlete.tableRowIndex = 0;
  activeStrengthTable = athlete.activeTable;
  saveState();
  renderSettings();
  toast("Aktiv tabell endret");
}
function onRowJumpChange(){
  const athlete = activeAthlete();
  const table = PROGRESSION_TABLES[athlete.activeTable];
  const v = parseInt(document.getElementById("rowJumpInput").value,10) || 1;
  athlete.tableRowIndex = clamp(v-1, 0, table.rows.length-1);
  saveState();
  renderSettings();
}

function renderChecklist(){
  const athlete = activeAthlete();
  const wrap = document.getElementById("checklistWrap");
  wrap.innerHTML = WEIGHT_GATE_CHECKLIST.map((item,i)=>{
    return `<div class="checklist-item">
      <input type="checkbox" id="chk${i}" ${athlete.checklist[i]?'checked':''} onchange="toggleChecklist(${i})">
      <span>${item}</span>
    </div>`;
  }).join("");
  const allChecked = athlete.checklist.every(v=>v);
  const banner = document.getElementById("gateBanner");
  banner.className = "gate-banner " + (allChecked ? "unlocked":"locked");
  banner.textContent = allChecked ? "✓ Klar til å øke kg neste økt" : "Ikke klar for vektøkning ennå";

  const advWrap = document.getElementById("advanceTableWrap");
  const curIdx = TABLE_ORDER.indexOf(athlete.activeTable);
  if(allChecked && curIdx < TABLE_ORDER.length-1){
    const nextKey = TABLE_ORDER[curIdx+1];
    advWrap.innerHTML = `<button class="btn" onclick="advanceToNextTable()">Sjekkliste bestått → Bytt til ${PROGRESSION_TABLES[nextKey].label}</button>`;
  } else {
    advWrap.innerHTML = "";
  }
}
function toggleChecklist(i){
  const athlete = activeAthlete();
  athlete.checklist[i] = !athlete.checklist[i];
  saveState();
  renderChecklist();
}
function advanceToNextTable(){
  const athlete = activeAthlete();
  const curIdx = TABLE_ORDER.indexOf(athlete.activeTable);
  if(curIdx >= TABLE_ORDER.length-1) return;
  athlete.activeTable = TABLE_ORDER[curIdx+1];
  athlete.tableRowIndex = 0;
  athlete.checklist = [false,false,false,false,false];
  activeStrengthTable = athlete.activeTable;
  saveState();
  renderSettings();
  toast("Byttet til " + PROGRESSION_TABLES[athlete.activeTable].label);
}

function openAthleteModal(){
  document.getElementById("athleteListModal").innerHTML = state.athletes.map(a=>renderAthleteChip(a,true)).join("");
  document.getElementById("athleteModal").classList.add("open");
}
function closeModal(id){ document.getElementById(id).classList.remove("open"); }
function selectAthlete(id){
  state.activeId = id;
  activeStrengthTable = null;
  saveState();
  updateAthleteBtn();
  closeModal("athleteModal");
  render();
}
function addAthlete(){
  const nameInput = document.getElementById("newAthleteName");
  const name = nameInput.value.trim();
  if(!name){ toast("Skriv inn et navn"); return; }
  const a = defaultAthlete(name);
  state.athletes.push(a);
  state.logs[a.id] = [];
  nameInput.value = "";
  saveState();
  renderSettings();
  toast("Utøver lagt til");
}
function removeAthlete(id){
  if(state.athletes.length<=1) return;
  state.athletes = state.athletes.filter(a=>a.id!==id);
  delete state.logs[id];
  if(state.activeId===id) state.activeId = state.athletes[0].id;
  activeStrengthTable = null;
  saveState();
  updateAthleteBtn();
  renderSettings();
}
function updateAthleteBtn(){
  document.getElementById("athleteBtn").textContent = activeAthlete().name;
}
function resetAllData(){
  if(confirm("Slette all lagret treningsdata på denne enheten?")){
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    activeStrengthTable = null;
    updateAthleteBtn();
    render();
    toast("Data nullstilt");
  }
}

/* ===================== SESSION RUNNER ===================== */

let RUN = null;

function startSession(programId, sessionId){
  const found = findSession(sessionId);
  if(!found) return;
  const { program, session } = found;

  if(session.type==="langtur" || session.type==="spenst"){
    openOptionModal(program, session);
    return;
  }

  RUN = { program, session, type: session.type, startedAt: Date.now() };

  if(session.type==="beinstyrke") initBeinstyrkeRun();
  else if(session.type==="intervall") initIntervalRun();
  else if(session.type==="core") initCoreRun();
  else if(session.type==="mobilitet") initMobilitetRun();

  document.getElementById("runnerOverlay").classList.add("open");
}

function exitRunner(force){
  if(!force && RUN && (RUN.type==="intervall" || RUN.type==="core")){
    if(!confirm("Avslutte økten uten å lagre?")) return;
  } else if(!force && RUN){
    if(!confirm("Avslutte uten å lagre resten av økten?")) return;
  }
  if(RUN && RUN.timerId) clearInterval(RUN.timerId);
  RUN = null;
  document.getElementById("runnerOverlay").classList.remove("open");
  render();
}

function lastWeightFor(athlete, exerciseId){
  const logs = state.logs[athlete.id] || [];
  for(const l of logs){
    for(const e of (l.exercises||[])){
      if(e.exerciseId === exerciseId && e.weight) return e.weight;
    }
  }
  return null;
}

function beep(){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    o.start();
    o.stop(ctx.currentTime + 0.18);
  }catch(e){}
}
function buzz(){ if(navigator.vibrate) navigator.vibrate(200); }

function setDots(total, current){
  document.getElementById("runnerDots").innerHTML =
    Array.from({length:total}).map((_,i)=>`<span class="${i===current?'on':''}"></span>`).join("");
}

/* ---------- BEINSTYRKE runner ---------- */

function buildBeinstyrkeStep(athlete, exEntry){
  const lib = EXERCISE_LIBRARY[exEntry.ex];
  if(exEntry.progression){
    const table = PROGRESSION_TABLES[athlete.activeTable];
    const idx = clamp(athlete.tableRowIndex, 0, table.rows.length-1);
    const row = table.rows[idx];
    const oneRM = parseFloat(athlete.oneRM[athlete.activeTable]) || 0;
    const groups = row.sets.map((s,i)=>({
      label: i < row.sets.length-1 ? "Oppvarming "+(i+1) : "Arbeidssett",
      pct: s.pct, reps: s.reps, weight: calcWeight(oneRM, s.pct)
    }));
    const work = groups[groups.length-1];
    return {
      exerciseId: exEntry.ex, name: lib.name, progression:true,
      groups, tableLabel: table.label, rowLabel: (row.uke?row.uke+' ':'')+row.session,
      sets: row.sett, reps: work.reps, weight: work.weight
    };
  }
  return {
    exerciseId: exEntry.ex, name: lib.name, progression:false,
    sets: exEntry.sets, reps: exEntry.reps,
    weight: lastWeightFor(athlete, exEntry.ex)
  };
}

function initBeinstyrkeRun(){
  const athlete = activeAthlete();
  RUN.steps = RUN.session.exercises.map(e=>buildBeinstyrkeStep(athlete, e));
  RUN.stepIndex = 0;
  RUN.values = RUN.steps.map(s=>({sets:s.sets, reps:s.reps, weight:s.weight||0}));
  RUN.usedProgression = RUN.steps.some(s=>s.progression);
  renderBeinstyrkeStep();
}

function renderBeinstyrkeStep(){
  const i = RUN.stepIndex;
  const step = RUN.steps[i];
  const val = RUN.values[i];
  document.getElementById("runnerStepLabel").textContent = `Øvelse ${i+1} / ${RUN.steps.length}`;
  setDots(RUN.steps.length, i);

  let progHtml = "";
  if(step.progression){
    progHtml = `<div class="progression-info">
      <div class="row"><span>${step.tableLabel} – ${step.rowLabel}</span><b></b></div>
      ${step.groups.map(g=>`<div class="row"><span>${g.label} (${g.pct}%)</span><b>${g.weight!==null?g.weight+' kg':'–'} × ${g.reps}</b></div>`).join("")}
    </div>`;
  } else if(step.weight){
    progHtml = `<div class="progression-info"><div class="row"><span>Sist logget vekt</span><b>${step.weight} kg</b></div></div>`;
  }

  const backBtn = i>0 ? `<button class="btn ghost" style="margin-bottom:6px;" onclick="prevBeinstyrkeStep()">← Forrige øvelse</button>` : "";

  document.getElementById("runnerBody").innerHTML = `
    <h2 class="ex-title">${step.name}</h2>
    ${RUN.session.note ? `<p class="ex-note">${RUN.session.note}</p>` : ""}
    ${progHtml}
    <div class="stepper-row"><div class="lbl">Sett</div>
      <div class="stepper">
        <button onclick="adjBeinstyrke('sets',-1)">–</button>
        <div class="val" id="val_sets">${val.sets}</div>
        <button onclick="adjBeinstyrke('sets',1)">+</button>
      </div></div>
    <div class="stepper-row"><div class="lbl">Reps</div>
      <div class="stepper">
        <button onclick="adjBeinstyrke('reps',-1)">–</button>
        <div class="val" id="val_reps">${val.reps}</div>
        <button onclick="adjBeinstyrke('reps',1)">+</button>
      </div></div>
    <div class="stepper-row"><div class="lbl">Vekt (kg)</div>
      <div class="stepper">
        <button onclick="adjBeinstyrke('weight',-2.5)">–</button>
        <div class="val" id="val_weight">${val.weight}</div>
        <button onclick="adjBeinstyrke('weight',2.5)">+</button>
      </div></div>
    ${backBtn}
    <button class="big-btn" onclick="nextBeinstyrkeStep()">${i===RUN.steps.length-1 ? "Fullfør økt ✓" : "Fullført ✓ Neste øvelse"}</button>
  `;
}
function adjBeinstyrke(field, delta){
  const val = RUN.values[RUN.stepIndex];
  val[field] = Math.max(0, val[field] + delta);
  document.getElementById("val_"+field).textContent = val[field];
}
function prevBeinstyrkeStep(){
  if(RUN.stepIndex>0){ RUN.stepIndex--; renderBeinstyrkeStep(); }
}
function nextBeinstyrkeStep(){
  const i = RUN.stepIndex;
  const step = RUN.steps[i];
  const val = RUN.values[i];
  step.logged = {exerciseId: step.exerciseId, name: step.name, sets: val.sets, reps: val.reps, weight: val.weight};
  if(i < RUN.steps.length-1){
    RUN.stepIndex++;
    renderBeinstyrkeStep();
  } else {
    finishBeinstyrke();
  }
}
function finishBeinstyrke(){
  const athlete = activeAthlete();
  const exercises = RUN.steps.map(s=>s.logged);
  const durationSec = Math.round((Date.now()-RUN.startedAt)/1000);
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId: RUN.session.id, programId: RUN.program.id, name: RUN.session.name,
    type:"beinstyrke", durationSec, exercises, notes:""
  });
  athlete.sessionLastDone[RUN.session.id] = Date.now();
  if(RUN.usedProgression){
    const table = PROGRESSION_TABLES[athlete.activeTable];
    athlete.tableRowIndex = clamp(athlete.tableRowIndex+1, 0, table.rows.length-1);
  }
  saveState();
  renderRunnerSummary("Beinstyrke fullført", exercises.map(e=>`${e.name}: ${e.weight?e.weight+' kg × ':''}${e.reps} reps × ${e.sets} sett`));
}

/* ---------- INTERVALL runner (timer engine) ---------- */

function reps(n, workSec, restSec, restAfterLast){
  const arr = [];
  for(let i=0;i<n;i++){
    arr.push({label:"Arbeid", seconds:workSec});
    if(i<n-1 || restAfterLast) arr.push({label:"Pause", seconds:restSec});
  }
  return arr;
}
function buildIntervalPhases(kind){
  const cooldown = [{label:"Nedjogg", seconds:600, note:"Rolig"}];
  if(kind==="4x4"){
    return [{label:"Oppvarming", seconds:600, note:"Rolig jogg + 3 stigningsløp"}]
      .concat(reps(4,240,60,false)).concat(cooldown);
  }
  if(kind==="pyramide"){
    const seq = [60,120,180,240,300,300,240,180,120,60];
    const main = seq.flatMap((s,i)=> i<seq.length-1 ? [{label:"Arbeid",seconds:s},{label:"Pause",seconds:60}] : [{label:"Arbeid",seconds:s}]);
    return [{label:"Oppvarming", seconds:600, note:"Rolig jogg + 3 stigningsløp"}].concat(main).concat(cooldown);
  }
  if(kind==="4515"){
    let main = [];
    for(let r=0;r<5;r++){
      main = main.concat(reps(4,45,15,false));
      if(r<4) main.push({label:"Pause mellom runder", seconds:60});
    }
    return [{label:"Oppvarming", seconds:600, note:"Rolig jogg + 5 korte sprinter"}].concat(main).concat(cooldown);
  }
  if(kind==="2x12"){
    return [{label:"Oppvarming", seconds:600, note:"Rolig jogg"}]
      .concat(reps(12,120,60,false)).concat(cooldown);
  }
  return [{label:"Arbeid", seconds:60}];
}

function initIntervalRun(){
  RUN.phases = buildIntervalPhases(RUN.session.timerKind);
  RUN.phaseIndex = 0;
  RUN.secondsLeft = RUN.phases[0].seconds;
  RUN.paused = false;
  renderTimerScreen();
  startTick();
}
function startTick(){
  if(RUN.timerId) clearInterval(RUN.timerId);
  RUN.timerId = setInterval(()=>{
    if(RUN.paused) return;
    RUN.secondsLeft--;
    if(RUN.secondsLeft <= 0){
      advancePhase();
    } else {
      updateTimerNumbers();
    }
  }, 1000);
}
function advancePhase(){
  beep(); buzz();
  RUN.phaseIndex++;
  if(RUN.phaseIndex >= RUN.phases.length){
    finishTimerSession();
    return;
  }
  RUN.secondsLeft = RUN.phases[RUN.phaseIndex].seconds;
  renderTimerScreen();
}
function skipPhase(){ advancePhase(); }
function togglePause(){
  RUN.paused = !RUN.paused;
  const btn = document.getElementById("pauseBtn");
  if(btn) btn.textContent = RUN.paused ? "▶ Fortsett" : "⏸ Pause";
}
function fmtClock(sec){
  const m = Math.floor(sec/60), s = sec%60;
  return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
}
function renderTimerScreen(){
  const phase = RUN.phases[RUN.phaseIndex];
  document.getElementById("runnerStepLabel").textContent = `Fase ${RUN.phaseIndex+1} / ${RUN.phases.length}`;
  setDots(Math.min(RUN.phases.length,20), Math.min(RUN.phaseIndex,19));
  document.getElementById("runnerBody").innerHTML = `
    <h2 class="ex-title">${RUN.session.name}</h2>
    <div class="timer-display">
      <div class="timer-phase">${phase.label}</div>
      <div class="timer-count" id="timerCount">${fmtClock(RUN.secondsLeft)}</div>
      ${phase.note ? `<div class="timer-sub">${phase.note}</div>` : ""}
    </div>
    <div class="timer-controls">
      <button class="pause" id="pauseBtn" onclick="togglePause()">⏸ Pause</button>
      <button class="skip" onclick="skipPhase()">Hopp over ⏭</button>
    </div>
  `;
}
function updateTimerNumbers(){
  const el = document.getElementById("timerCount");
  if(el) el.textContent = fmtClock(RUN.secondsLeft);
}
function finishTimerSession(){
  if(RUN.timerId) clearInterval(RUN.timerId);
  const athlete = activeAthlete();
  const totalSec = RUN.phases.reduce((s,p)=>s+p.seconds,0);
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId: RUN.session.id, programId: RUN.program.id, name: RUN.session.name,
    type: RUN.type, durationSec: totalSec, exercises:[], notes:""
  });
  athlete.sessionLastDone[RUN.session.id] = Date.now();
  saveState();
  renderRunnerSummary(RUN.session.name + " fullført", [`Total tid: ${Math.round(totalSec/60)} min`]);
}

/* ---------- CORE runner (uses same timer engine, per-exercise) ---------- */

function initCoreRun(){
  const session = RUN.session;
  let phases = [];
  session.exercises.forEach((e,i)=>{
    phases.push({label:"Arbeid", seconds:session.workSec, exName: exName(e.ex)});
    if(i < session.exercises.length-1) phases.push({label:"Pause", seconds:session.restSec});
  });
  RUN.phases = phases;
  RUN.phaseIndex = 0;
  RUN.secondsLeft = phases[0].seconds;
  RUN.paused = false;
  renderCoreTimerScreen();
  startTick_core();
}
function startTick_core(){
  if(RUN.timerId) clearInterval(RUN.timerId);
  RUN.timerId = setInterval(()=>{
    if(RUN.paused) return;
    RUN.secondsLeft--;
    if(RUN.secondsLeft <= 0){
      beep(); buzz();
      RUN.phaseIndex++;
      if(RUN.phaseIndex >= RUN.phases.length){ finishTimerSession(); return; }
      RUN.secondsLeft = RUN.phases[RUN.phaseIndex].seconds;
      renderCoreTimerScreen();
    } else {
      updateTimerNumbers();
    }
  }, 1000);
}
function renderCoreTimerScreen(){
  const phase = RUN.phases[RUN.phaseIndex];
  document.getElementById("runnerStepLabel").textContent = `${RUN.phaseIndex+1} / ${RUN.phases.length}`;
  setDots(Math.min(RUN.phases.length,20), Math.min(RUN.phaseIndex,19));
  document.getElementById("runnerBody").innerHTML = `
    <h2 class="ex-title">${phase.exName || RUN.session.name}</h2>
    <div class="timer-display">
      <div class="timer-phase">${phase.label}</div>
      <div class="timer-count" id="timerCount">${fmtClock(RUN.secondsLeft)}</div>
    </div>
    <div class="timer-controls">
      <button class="pause" id="pauseBtn" onclick="togglePause()">⏸ Pause</button>
      <button class="skip" onclick="skipCorePhase()">Hopp over ⏭</button>
    </div>
  `;
}
function skipCorePhase(){
  beep();
  RUN.phaseIndex++;
  if(RUN.phaseIndex >= RUN.phases.length){ finishTimerSession(); return; }
  RUN.secondsLeft = RUN.phases[RUN.phaseIndex].seconds;
  renderCoreTimerScreen();
}

/* ---------- MOBILITET runner (simple checklist) ---------- */

function initMobilitetRun(){
  RUN.checked = RUN.session.exercises.map(()=>false);
  renderMobilitetScreen();
}
function renderMobilitetScreen(){
  document.getElementById("runnerStepLabel").textContent = "Mobilitet";
  setDots(1,0);
  const items = RUN.session.exercises.map((e,i)=>{
    const name = exName(e.ex);
    return `<div class="check-item ${RUN.checked[i]?'checked':''}" onclick="toggleMobItem(${i})">
      <input type="checkbox" ${RUN.checked[i]?'checked':''} onclick="event.stopPropagation();toggleMobItem(${i})">
      <div><div class="name">${name}</div><div class="meta" style="font-size:11.5px;color:var(--muted);">${e.meta||""}</div></div>
    </div>`;
  }).join("");
  document.getElementById("runnerBody").innerHTML = `
    <h2 class="ex-title">Mobilitet</h2>
    <p class="ex-note">Trykk av øvelsene du gjør. Ingen streng rekkefølge.</p>
    ${items}
    ${RUN.session.video ? `<a class="link-btn" href="${RUN.session.video}" target="_blank" rel="noopener">▶ Se video</a>` : ""}
    <button class="big-btn" style="margin-top:16px;" onclick="finishMobilitet()">Fullfør økt ✓</button>
  `;
}
function toggleMobItem(i){
  RUN.checked[i] = !RUN.checked[i];
  renderMobilitetScreen();
}
function finishMobilitet(){
  const athlete = activeAthlete();
  const done = RUN.session.exercises.filter((e,i)=>RUN.checked[i]).map(e=>({exerciseId:e.ex, name:exName(e.ex), sets:null, reps:null, weight:null}));
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId: RUN.session.id, programId: RUN.program.id, name:"Mobilitet",
    type:"mobilitet", durationSec:0, exercises: done, notes:""
  });
  athlete.sessionLastDone[RUN.session.id] = Date.now();
  saveState();
  renderRunnerSummary("Mobilitet fullført", done.map(e=>e.name));
}

/* ---------- SUMMARY screen (shared) ---------- */

function renderRunnerSummary(title, lines){
  document.getElementById("runnerStepLabel").textContent = "Oppsummering";
  document.getElementById("runnerDots").innerHTML = "";
  document.getElementById("runnerBody").innerHTML = `
    <h2 class="ex-title">${title} ✓</h2>
    <div class="progression-info">
      ${lines.map(l=>`<div class="summary-row"><span>${l}</span></div>`).join("")}
    </div>
    <button class="big-btn" onclick="exitRunner(true)">Ferdig</button>
  `;
}

/* ---------- LANGTUR / SPENST (option modal, no timer) ---------- */

let PENDING_OPTION = null;

function openOptionModal(program, session){
  PENDING_OPTION = { program, session, selectedIndex: null };
  document.getElementById("optionModalTitle").textContent = session.name;
  document.getElementById("optionDuration").value = "";
  renderOptionList();
  document.getElementById("optionModal").classList.add("open");
}
function renderOptionList(){
  const session = PENDING_OPTION.session;
  document.getElementById("optionModalList").innerHTML = session.options.map((o,i)=>{
    const sel = PENDING_OPTION.selectedIndex === i;
    return `<div class="option-list-item ${sel?'selected':''}" onclick="selectOption(${i})">
      <span>${o.name}</span><span style="font-size:11.5px;opacity:.8;">${o.suggested||""}</span>
    </div>`;
  }).join("") + (session.video ? `<a class="link-btn" href="${session.video}" target="_blank" rel="noopener">▶ Se video</a>` : "");
}
function selectOption(i){
  PENDING_OPTION.selectedIndex = i;
  renderOptionList();
}
function confirmOptionSession(){
  if(PENDING_OPTION.selectedIndex === null){ toast("Velg en aktivitet først"); return; }
  const minutes = parseInt(document.getElementById("optionDuration").value, 10);
  if(!minutes || minutes<=0){ toast("Skriv inn varighet i minutter"); return; }
  const athlete = activeAthlete();
  const opt = PENDING_OPTION.session.options[PENDING_OPTION.selectedIndex];
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId: PENDING_OPTION.session.id, programId: PENDING_OPTION.program.id,
    name: PENDING_OPTION.session.name, type: PENDING_OPTION.session.type,
    durationSec: minutes*60, exercises:[], meta:{activity:opt.name}, notes:""
  });
  athlete.sessionLastDone[PENDING_OPTION.session.id] = Date.now();
  saveState();
  closeModal("optionModal");
  toast("Økt logget");
  PENDING_OPTION = null;
  render();
}

/* ===================== INIT ===================== */

function init(){
  updateAthleteBtn();
  goTo("hjem");
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }
  const search = document.getElementById("historySearch");
  if(search) search.addEventListener("input", ()=>renderHistory(search.value));
}
init();
