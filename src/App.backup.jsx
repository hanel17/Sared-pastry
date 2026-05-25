import { useState, useEffect, useRef } from "react";
const storage = window.storage;
async function load(key, def) {
  try { const r = await storage.get(key); return r ? JSON.parse(r.value) : def; } catch { return def; }
}
async function save(key, val) { try { await storage.set(key, JSON.stringify(val)); } catch {} }
function fileToBase64(file) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(file); });
}
export default function SaredPastry() {
  return <div style={{textAlign:"center",padding:"60px",fontFamily:"Georgia,serif",color:"#5e3d7a"}}><h1>🌿 Sared Pastry</h1><p>Cargando...</p></div>
}
