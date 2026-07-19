/* =================================================================
   KJELSÅS ALPINT STYRKE — v1.9
   All content sourced directly from sommertrening.pdf and
   Vekttabell_Styrke_1_MAL_NTG.xlsx. No AI-generated sessions.
   ================================================================= */

const APP_VERSION = "v1.9";

/* ===================== EXERCISE LIBRARY ===================== */
/* Each exercise defined once; sets/reps live on the program-session link. */
const EXERCISE_LIBRARY = {
  front_squat: { name: "Dyp frontbøy m/stang", img:"icons/exercises/front_squat.png" },
  deadlift: { name: "Markløft", img:"icons/exercises/deadlift.png" },
  single_leg_rdl: { name: "Ettbein strakmark med hantler", img:"icons/exercises/single_leg_rdl.png" },
  bulgarian_split_bench: { name: "Bulgarsk utfall på benk m/hantler", img:"icons/exercises/bulgarian_split_bench.png" },
  hip_thrust: { name: "Barbell hip thrust on bench", img:"icons/exercises/hip_thrust.png" },
  step_up_knee_raise: { name: "Step up w/ knee raise", img:"icons/exercises/step_up_knee_raise.png" },
  toes_to_bar: { name: "Toes to bar – eksentrisk", img:"icons/exercises/toes_to_bar.png" },
  back_squat: { name: "Barbell Back Squat", img:"icons/exercises/back_squat.png" },
  nordic_hamstring: { name: "Nordic Hamstrings", img:"icons/exercises/nordic_hamstring.png" },
  hip_abduction_band: { name: "Abduction of the hip with elastic band", img:"icons/exercises/hip_abduction_band.png" },
  barbell_deadlift: { name: "Barbell Deadlift", img:"icons/exercises/barbell_deadlift.png" },
  backward_lunge: { name: "Backward lunge", img:"icons/exercises/backward_lunge.png" },
  calf_raise: { name: "Elevated Calf Raises", img:"icons/exercises/calf_raise.png" },
  copenhagen_adduction: { name: "Modified Copenhagen Adduction on bench", img:"icons/exercises/copenhagen_adduction.png" },
  vertical_squat_jump: { name: "Vertical barbell squat jump", img:"icons/exercises/vertical_squat_jump.png" },
  box_jump: { name: "Box jump fra sittende, høy landing", img:"icons/exercises/box_jump.png" },
  lateral_jump: { name: "Lateral jump fra side til side", img:"icons/exercises/lateral_jump.png" },
  jumping_bulgarian: { name: "Jumping Bulgarian Split Squats on bench", img:"icons/exercises/jumping_bulgarian.png" },
  ball_slam: { name: "Ball Slam", img:"icons/exercises/ball_slam.png" },
  deadbug: { name: "Deadbug" },
  crunches: { name: "Crunches" },
  back_extension: { name: "Rygghev" },
  leg_raise: { name: "Beinhev" },
  hitlers_hund: { name: "Hitlers hund" },
  plank: { name: "Planke" },
  heel_touches: { name: "Heel touches" },
  side_plank: { name: "Sideplanke" },
  v_situp: { name: "V-situps" },
  worlds_greatest_stretch: { name: "The World's Greatest Stretch", img:"icons/exercises/worlds_greatest_stretch.png" },
  calf_stretch: { name: "Calf 1", img:"icons/exercises/calf_stretch.png" },
  thigh_calf_stretch: { name: "Back of thigh and calf 6", img:"icons/exercises/thigh_calf_stretch.png" },
  hip_thigh_stretch: { name: "Front side thigh and hip 1", img:"icons/exercises/hip_thigh_stretch.png" },
  hip_flexor_stretch: { name: "Hip flexors 1", img:"icons/exercises/hip_flexor_stretch.png" },
  upperbody_stretch: { name: "Outside of upperbody 1", img:"icons/exercises/upperbody_stretch.png" },
  glute_stretch: { name: "Glute stretch", img:"icons/exercises/glute_stretch.png" },
  lumbar_rotation: { name: "Lumbar spine rotation on stomach", img:"icons/exercises/lumbar_rotation.png" },
  hip_mobilization: { name: "Mobilization hip w/ knee bent 45°", img:"icons/exercises/hip_mobilization.png" }
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
  spenst:"Spenst / koordinasjon", core:"Core", mobilitet:"Mobilitet", annet:"Fridag",
  annenokt:"Annen økt"
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

/* One-time (idempotent) migration: custom "Annen økt" entries used to be logged with
   type:"annet" which is also what markFridag() uses for actual fridager, so they were
   wrongly lumped into the "Fridager" week-goal count. Custom entries are identifiable
   by sessionId==="custom" (fridager always use sessionId==="fridag"), so we can safely
   reclassify them to their own "annenokt" type. */
function migrateCustomAnnetType(state){
  if(!state || !state.logs) return state;
  Object.keys(state.logs).forEach(athleteId=>{
    (state.logs[athleteId]||[]).forEach(l=>{
      if(l.sessionId==="custom" && l.type==="annet") l.type = "annenokt";
    });
  });
  return state;
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return migrateCustomAnnetType(JSON.parse(raw));
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
  document.getElementById("dateLabel").textContent = new Date().toLocaleDateString('nb-NO',{weekday:'long', day:'numeric', month:'long'}) + " · " + APP_VERSION;
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
  const annenOktCount = weekLogsFor(athlete).filter(l=>l.type==="annenokt").length;
  document.getElementById("weekGoalsList").innerHTML = WEEK_GOALS.map(g=>{
    const count = counts[g.key];
    const done = count >= g.min;
    return `<div class="goal-row">
      <div><div class="label">${g.label}</div><div class="sub">Mål: ${g.min===g.max ? g.min : g.min+'–'+g.max} / uke</div></div>
      <div class="progress-pill ${done?'done':''}">${count} / ${g.min===g.max ? g.min : g.max}</div>
    </div>`;
  }).join("") + `<div class="goal-row">
      <div><div class="label">Annen økt</div><div class="sub">Ingen ukemål satt av treneren</div></div>
      <div class="progress-pill">${annenOktCount}</div>
    </div>` + `<div style="margin-top:10px;display:flex;gap:8px;">
      <button class="btn ghost" style="flex:1;" onclick="markFridag()">+ Registrer fridag</button>
      <button class="btn ghost" style="flex:1;" onclick="openCustomSessionModal()">+ Annen økt</button>
    </div>`;

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

function openCustomSessionModal(){
  document.getElementById("customType").value = "annenokt";
  document.getElementById("customName").value = "";
  document.getElementById("customDuration").value = "";
  document.getElementById("customNotes").value = "";
  document.getElementById("customSessionModal").classList.add("open");
}
function confirmCustomSession(){
  const athlete = activeAthlete();
  const type = document.getElementById("customType").value;
  const name = document.getElementById("customName").value.trim() || TYPE_LABELS[type] || "Annen økt";
  const minutes = parseInt(document.getElementById("customDuration").value, 10) || 0;
  const notes = document.getElementById("customNotes").value.trim();
  if(!state.logs[athlete.id]) state.logs[athlete.id] = [];
  state.logs[athlete.id].unshift({
    id: uid(), date: todayISO(), timestamp: Date.now(),
    sessionId: "custom", programId: null, name, type,
    durationSec: minutes*60, exercises:[], notes
  });
  saveState();
  closeModal("customSessionModal");
  toast("Økt registrert");
  render();
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

function sortLogsByDate(logs){
  return logs.slice().sort((a,b)=>{
    if(a.date !== b.date) return a.date < b.date ? 1 : -1;
    return b.timestamp - a.timestamp;
  });
}

let editingDateLogId = null;

function renderHistory(filterText){
  const athlete = activeAthlete();
  let logs = sortLogsByDate(state.logs[athlete.id]||[]);
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
    const isEditingDate = editingDateLogId === l.id;
    html += `<div class="history-card">
      <button class="del" onclick="deleteLog('${l.id}')">Slett</button>
      <div class="top"><span class="type">${l.name || TYPE_LABELS[l.type]}</span><span class="time">${time}${durMin?' · '+durMin+' min':''} <button class="edit-date-btn" onclick="toggleEditDate('${l.id}')">✏️ dato</button></span></div>
      ${isEditingDate ? `<div class="date-edit-row">
        <input type="date" id="dateEdit_${l.id}" value="${l.date}">
        <button class="btn secondary" style="width:auto;flex-shrink:0;margin-top:0;" onclick="saveLogDate('${l.id}')">Lagre</button>
        <button class="btn ghost" style="width:auto;flex-shrink:0;margin-top:0;" onclick="toggleEditDate('${l.id}')">Avbryt</button>
      </div>` : ""}
      ${(l.exercises||[]).map(e=>{
        if(Array.isArray(e.sets)){
          const detail = e.sets.map(s=>`${s.weight||0}kg×${s.reps}`).join(", ");
          return `<div class="exline">${e.name}: ${detail}</div>`;
        }
        if(e.reps==null && e.weight==null) return `<div class="exline">${e.name}</div>`;
        return `<div class="exline">${e.name}: ${e.weight?e.weight+' kg × ':''}${e.reps} reps${e.sets?' × '+e.sets+' sett':''}</div>`;
      }).join("")}
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

function toggleEditDate(logId){
  editingDateLogId = (editingDateLogId === logId) ? null : logId;
  renderHistory(document.getElementById("historySearch").value);
}
function saveLogDate(logId){
  const athlete = activeAthlete();
  const log = (state.logs[athlete.id]||[]).find(l=>l.id===logId);
  const input = document.getElementById("dateEdit_"+logId);
  if(!log || !input || !input.value){ toast("Ugyldig dato"); return; }
  log.date = input.value;
  editingDateLogId = null;
  saveState();
  renderHistory(document.getElementById("historySearch").value);
  toast("Dato oppdatert");
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
  const aboutVer = document.getElementById("aboutVersionLine");
  if(aboutVer) aboutVer.textContent = "Versjon: " + APP_VERSION;
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

/* ===================== BACKUP / SHARE ===================== */

function periodStartDate(rangeVal){
  if(rangeVal === "all") return null;
  const d = new Date();
  d.setDate(d.getDate() - parseInt(rangeVal,10) + 1);
  return d.toISOString().slice(0,10);
}
function logsInRange(athlete, rangeVal){
  const logs = sortLogsByDate(state.logs[athlete.id]||[]);
  const start = periodStartDate(rangeVal);
  return start ? logs.filter(l=>l.date >= start) : logs;
}
function exerciseLineText(e){
  if(Array.isArray(e.sets)){
    return `  - ${e.name}: ` + e.sets.map(s=>`${s.weight||0}kg×${s.reps}`).join(", ");
  }
  if(e.reps==null && e.weight==null) return `  - ${e.name}`;
  return `  - ${e.name}: ${e.weight?e.weight+' kg × ':''}${e.reps} reps${e.sets?' × '+e.sets+' sett':''}`;
}
function rangeLabelFor(rangeVal){
  if(rangeVal==="all") return "Hele historikken";
  if(rangeVal==="7") return "Siste 7 dager";
  if(rangeVal==="28") return "Siste 4 uker";
  if(rangeVal==="90") return "Siste 3 måneder";
  return "Valgt periode";
}
function buildHistoryReportText(athlete, rangeVal){
  const logs = logsInRange(athlete, rangeVal);
  let out = `Treningslogg – ${athlete.name}\nPeriode: ${rangeLabelFor(rangeVal)}\nGenerert: ${fmtDateHeading(todayISO())}\n`;
  if(logs.length===0){
    out += "\nIngen treningsøkter registrert i denne perioden.\n";
    return out;
  }
  let lastDate = null;
  logs.forEach(l=>{
    if(l.date !== lastDate){
      out += `\n${fmtDateHeading(l.date)}\n`;
      lastDate = l.date;
    }
    const durMin = l.durationSec ? Math.round(l.durationSec/60) : null;
    out += `• ${l.name || TYPE_LABELS[l.type]}${durMin?' ('+durMin+' min)':''}\n`;
    (l.exercises||[]).forEach(e=>{ out += exerciseLineText(e) + "\n"; });
    if(l.meta && l.meta.activity) out += `  - ${l.meta.activity}\n`;
    if(l.notes) out += `  Notat: "${l.notes}"\n`;
  });
  return out;
}
function getShareRangeValue(){
  const el = document.getElementById("shareRangeSelect");
  return el ? el.value : "28";
}
function downloadFile(fileName, text, mime){
  const blob = new Blob([text], {type:(mime||"text/plain")+";charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
}
async function shareHistoryWithCoach(){
  const athlete = activeAthlete();
  const range = getShareRangeValue();
  const text = buildHistoryReportText(athlete, range);
  const fileName = `treningslogg-${athlete.name.replace(/\s+/g,'_')}-${todayISO()}.txt`;
  if(navigator.share){
    try{
      if(navigator.canShare && typeof File !== "undefined"){
        const file = new File([text], fileName, {type:"text/plain"});
        if(navigator.canShare({files:[file]})){
          await navigator.share({ files:[file], title:"Treningslogg", text:"Treningslogg fra Kjelsås Alpint Styrke" });
          return;
        }
      }
      await navigator.share({ title:"Treningslogg", text });
      return;
    }catch(e){
      if(e && e.name === "AbortError") return;
      /* fall through to download */
    }
  }
  downloadFile(fileName, text, "text/plain");
  toast("Deling ikke støttet i denne nettleseren – lastet ned som tekstfil i stedet");
}
function downloadHistoryText(){
  const athlete = activeAthlete();
  const range = getShareRangeValue();
  const text = buildHistoryReportText(athlete, range);
  const fileName = `treningslogg-${athlete.name.replace(/\s+/g,'_')}-${todayISO()}.txt`;
  downloadFile(fileName, text, "text/plain");
  toast("Tekstfil lastet ned");
}
function exportBackup(){
  const text = JSON.stringify(state, null, 2);
  downloadFile(`kjelsaas-alpint-styrke-backup-${todayISO()}.json`, text, "application/json");
  toast("Backup lastet ned");
}
function importBackup(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      if(!parsed || !Array.isArray(parsed.athletes) || !parsed.logs || !parsed.activeId){
        toast("Ugyldig backup-fil");
        return;
      }
      if(!confirm("Dette erstatter all nåværende treningsdata på denne enheten med innholdet i backup-filen. Fortsette?")) return;
      state = migrateCustomAnnetType(parsed);
      saveState();
      activeStrengthTable = null;
      updateAthleteBtn();
      render();
      toast("Backup importert");
    }catch(e){
      toast("Kunne ikke lese filen som en gyldig backup");
    }
  };
  reader.readAsText(file);
  evt.target.value = "";
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
  const logs = sortLogsByDate(state.logs[athlete.id] || []);
  for(const l of logs){
    for(const e of (l.exercises||[])){
      if(e.exerciseId !== exerciseId) continue;
      if(Array.isArray(e.sets) && e.sets.length){
        const w = e.sets[e.sets.length-1].weight;
        if(w) return w;
      } else if(e.weight){
        return e.weight;
      }
    }
  }
  return null;
}

function findPreviousLog(athlete, sessionId){
  const logs = (state.logs[athlete.id]||[]).filter(l=>l.sessionId===sessionId && (l.exercises||[]).length>0);
  if(logs.length===0) return null;
  return sortLogsByDate(logs)[0];
}
function importWeightsFromLog(prevLog){
  RUN.steps.forEach((step,si)=>{
    const prevEx = (prevLog.exercises||[]).find(e=>e.exerciseId===step.exerciseId);
    if(!prevEx) return;
    if(Array.isArray(prevEx.sets)){
      prevEx.sets.forEach((s,k)=>{
        if(RUN.values[si][k] && s.weight) RUN.values[si][k].weight = s.weight;
      });
    } else if(prevEx.weight){
      RUN.values[si].forEach(v=>{ v.weight = prevEx.weight; });
    }
  });
}

/* ---------- Exercise illustration + description (from sommertrening.pdf) ---------- */

function showExerciseInfo(exId){
  const lib = EXERCISE_LIBRARY[exId];
  if(!lib || !lib.img) return;
  document.getElementById("exerciseInfoImg").src = lib.img;
  document.getElementById("exerciseInfoModal").classList.add("open");
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
    return {
      exerciseId: exEntry.ex, name: lib.name, progression:true,
      groups, tableLabel: table.label, rowLabel: (row.uke?row.uke+' ':'')+row.session,
      defaultSetCount: row.sett
    };
  }
  return {
    exerciseId: exEntry.ex, name: lib.name, progression:false,
    baseReps: exEntry.reps, baseWeight: lastWeightFor(athlete, exEntry.ex) || 0,
    defaultSetCount: exEntry.sets
  };
}

/* Page = one individual set. pageMeta() maps a page index within an exercise
   (given the current chosen set-count) to a label + which group (warmup/work)
   it belongs to. */
function pageMeta(step, setCount, pageIdx){
  if(step.progression){
    const warmupCount = step.groups.length - 1;
    if(pageIdx < warmupCount){
      return {label:`Oppvarming ${pageIdx+1}/${warmupCount}`, shortLabel:"Oppvarming", groupIndex: pageIdx, isFirstWork:false};
    }
    const workIdx = pageIdx - warmupCount;
    return {label:`Arbeidssett ${workIdx+1}/${setCount}`, shortLabel:"Arbeidssett", groupIndex: step.groups.length-1, isFirstWork: workIdx===0};
  }
  return {label:`Sett ${pageIdx+1}/${setCount}`, shortLabel:"Sett", groupIndex:null, isFirstWork: pageIdx===0};
}
function totalPagesForStep(step, setCount){
  return step.progression ? (step.groups.length-1) + setCount : setCount;
}
function generateSetValues(step, setCount){
  const total = totalPagesForStep(step, setCount);
  const arr = [];
  for(let p=0; p<total; p++){
    const meta = pageMeta(step, setCount, p);
    const src = step.progression ? step.groups[meta.groupIndex] : {reps:step.baseReps, weight:step.baseWeight};
    arr.push({ reps: src.reps, weight: src.weight || 0 });
  }
  return arr;
}

function initBeinstyrkeRun(){
  const athlete = activeAthlete();
  RUN.steps = RUN.session.exercises.map(e=>buildBeinstyrkeStep(athlete, e));
  RUN.usedProgression = RUN.steps.some(s=>s.progression);
  RUN.setCounts = RUN.steps.map(s=>s.defaultSetCount);
  RUN.values = RUN.steps.map((s,si)=>generateSetValues(s, RUN.setCounts[si]));
  RUN.stepIndex = 0;
  RUN.setIndex = 0;

  const prevLog = findPreviousLog(athlete, RUN.session.id);
  if(prevLog){
    const dateLabel = fmtDateHeading(prevLog.date);
    if(confirm(`Importere vekter (kg) fra forrige gang du gjorde denne økten (${dateLabel})?`)){
      importWeightsFromLog(prevLog);
    }
  }
  renderBeinstyrkeSet();
}

function renderBeinstyrkeSet(){
  const si = RUN.stepIndex, pi = RUN.setIndex;
  const step = RUN.steps[si];
  const setCount = RUN.setCounts[si];
  const meta = pageMeta(step, setCount, pi);
  const val = RUN.values[si][pi];
  const totalPages = totalPagesForStep(step, setCount);

  document.getElementById("runnerStepLabel").textContent = `Øvelse ${si+1} / ${RUN.steps.length}`;
  setDots(RUN.steps.length, si);

  let progHtml = "";
  if(step.progression){
    progHtml = `<div class="progression-info">
      <div class="row"><span>${step.tableLabel} – ${step.rowLabel}</span><b></b></div>
      ${step.groups.map((g,gi)=>{
        const isActive = gi===meta.groupIndex;
        const displayWeight = isActive ? val.weight : g.weight;
        return `<div class="row ${isActive?'active-row':''}"><span>${g.label} (${g.pct}%)</span><b>${displayWeight!==null && displayWeight!==undefined ? displayWeight+' kg':'–'} × ${g.reps}</b></div>`;
      }).join("")}
    </div>`;
  } else if(step.baseWeight){
    progHtml = `<div class="progression-info"><div class="row"><span>Sist logget vekt</span><b>${step.baseWeight} kg</b></div></div>`;
  }

  const isFirstPageOfSession = (si===0 && pi===0);
  const isNewExercise = (pi===0 && si>0);
  const backBtn = !isFirstPageOfSession ? `<button class="btn ghost" style="margin-bottom:6px;" onclick="prevSet()">← Forrige sett</button>` : "";
  const lib = EXERCISE_LIBRARY[step.exerciseId];
  const infoLink = lib && lib.img ? `<a class="link-btn" style="text-align:center;margin-bottom:12px;" onclick="showExerciseInfo('${step.exerciseId}')">ℹ️ Se illustrasjon og beskrivelse</a>` : "";

  const setCountRow = meta.isFirstWork ? `
    <div class="stepper-row"><div class="lbl">Antall sett</div>
      <div class="stepper">
        <button onclick="adjSetCount(-1)">–</button>
        <div class="val" id="val_setcount">${setCount}</div>
        <button onclick="adjSetCount(1)">+</button>
      </div></div>` : "";

  const isLastPageOfExercise = (pi === totalPages-1);
  const isLastStep = (si === RUN.steps.length-1);
  let mainLabel;
  if(isLastPageOfExercise && isLastStep) mainLabel = "Fullfør økt ✓";
  else if(isLastPageOfExercise) mainLabel = "Fullført ✓ Neste øvelse →";
  else mainLabel = "Neste sett →";

  document.getElementById("runnerBody").innerHTML = `
    ${isNewExercise ? `<div class="set-badge" style="background:var(--navy);">→ Ny øvelse</div>` : ""}
    <h2 class="ex-title">${step.name}</h2>
    <div class="set-badge">${meta.label}</div>
    ${RUN.session.note ? `<p class="ex-note">${RUN.session.note}</p>` : ""}
    ${infoLink}
    ${progHtml}
    ${setCountRow}
    <div class="stepper-row"><div class="lbl">Reps</div>
      <div class="stepper">
        <button onclick="adjSetVal('reps',-1)">–</button>
        <div class="val" id="val_reps">${val.reps}</div>
        <button onclick="adjSetVal('reps',1)">+</button>
      </div></div>
    <div class="stepper-row"><div class="lbl">Vekt (kg) – ${meta.shortLabel}</div>
      <div class="stepper">
        <button onclick="adjSetVal('weight',-2.5)">–</button>
        <input class="val val-input" id="val_weight" type="number" inputmode="decimal" step="2.5" min="0" value="${val.weight}" onfocus="this.select()" oninput="onWeightInput(this.value)" onblur="onWeightBlur()">
        <button onclick="adjSetVal('weight',2.5)">+</button>
      </div></div>
    ${backBtn}
    <button class="big-btn" onclick="nextSet()">${mainLabel}</button>
  `;
}
function adjSetVal(field, delta){
  const val = RUN.values[RUN.stepIndex][RUN.setIndex];
  val[field] = Math.max(0, val[field] + delta);
  renderBeinstyrkeSet();
}
function onWeightInput(strVal){
  const v = parseFloat(strVal);
  if(isNaN(v)) return;
  RUN.values[RUN.stepIndex][RUN.setIndex].weight = v;
  updateProgressionLiveWeight(v);
}
function updateProgressionLiveWeight(v){
  const step = RUN.steps[RUN.stepIndex];
  if(!step.progression) return;
  const activeRow = document.querySelector("#runnerBody .progression-info .row.active-row b");
  if(!activeRow) return;
  const setCount = RUN.setCounts[RUN.stepIndex];
  const meta = pageMeta(step, setCount, RUN.setIndex);
  const reps = step.groups[meta.groupIndex].reps;
  activeRow.textContent = `${v} kg × ${reps}`;
}
function onWeightBlur(){
  const val = RUN.values[RUN.stepIndex][RUN.setIndex];
  if(isNaN(val.weight) || val.weight < 0) val.weight = 0;
  renderBeinstyrkeSet();
}
function adjSetCount(delta){
  const si = RUN.stepIndex;
  const step = RUN.steps[si];
  const newCount = Math.max(1, RUN.setCounts[si] + delta);
  RUN.setCounts[si] = newCount;
  RUN.values[si] = generateSetValues(step, newCount);
  RUN.setIndex = step.progression ? (step.groups.length-1) : 0;
  renderBeinstyrkeSet();
}
function prevSet(){
  if(RUN.setIndex>0){
    RUN.setIndex--;
    renderBeinstyrkeSet();
  } else if(RUN.stepIndex>0){
    RUN.stepIndex--;
    const prevStep = RUN.steps[RUN.stepIndex];
    RUN.setIndex = totalPagesForStep(prevStep, RUN.setCounts[RUN.stepIndex]) - 1;
    renderBeinstyrkeSet();
  }
}
function nextSet(){
  const si = RUN.stepIndex;
  const step = RUN.steps[si];
  const setCount = RUN.setCounts[si];
  const totalPages = totalPagesForStep(step, setCount);
  if(RUN.setIndex < totalPages-1){
    RUN.setIndex++;
    renderBeinstyrkeSet();
  } else if(si < RUN.steps.length-1){
    const nextName = RUN.steps[si+1].name;
    RUN.stepIndex++;
    RUN.setIndex = 0;
    toast("Ny øvelse: " + nextName);
    renderBeinstyrkeSet();
  } else {
    finishBeinstyrke();
  }
}
function finishBeinstyrke(){
  const athlete = activeAthlete();
  const exercises = RUN.steps.map((step,si)=>({
    exerciseId: step.exerciseId, name: step.name,
    sets: RUN.values[si].map(v=>({reps:v.reps, weight:v.weight}))
  }));
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
  renderRunnerSummary("Beinstyrke fullført", exercises.map(e=>
    `${e.name}: ` + e.sets.map(s=>`${s.weight||0}kg×${s.reps}`).join(", ")
  ));
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
    const lib = EXERCISE_LIBRARY[e.ex];
    const info = lib && lib.img ? `<button onclick="event.stopPropagation();showExerciseInfo('${e.ex}')" style="background:none;border:none;color:var(--accent);font-size:16px;flex-shrink:0;">ℹ️</button>` : "";
    return `<div class="check-item ${RUN.checked[i]?'checked':''}" onclick="toggleMobItem(${i})">
      <input type="checkbox" ${RUN.checked[i]?'checked':''} onclick="event.stopPropagation();toggleMobItem(${i})">
      <div style="flex:1;"><div class="name">${name}</div><div class="meta" style="font-size:11.5px;color:var(--muted);">${e.meta||""}</div></div>
      ${info}
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
