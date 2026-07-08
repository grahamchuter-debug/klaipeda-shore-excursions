#!/usr/bin/env node
/**
 * Download Klaipėda imagery from Wikimedia Commons (CC-licensed).
 * Run: node scripts/download-images.mjs
 */
import { writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from "fs";
import { join } from "path";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });
const UA = "klaipeda-shore-excursions/1.0 (image fetch; contact webmaster)";

/** 1920px Commons thumbnails — verified via Wikimedia API, July 2026. */
const KLAIPEDA_IMAGES = {
  "hero-home.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg/1920px-Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg",
  "cruise-port.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg/1920px-Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg",
  "planner.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg/1920px-Costa_Pacifica_in_Klaip%C4%97da%27s_Cruise_Ship_Terminal.jpg",
  "og-default.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Klaip%C4%97da_teatra_placo_%28teatros_aik%C5%A1t%C4%97%29_%C3%84nnchen_von_Tharau_1.jpg/1920px-Klaip%C4%97da_teatra_placo_%28teatros_aik%C5%A1t%C4%97%29_%C3%84nnchen_von_Tharau_1.jpg",
  "klaipeda.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Klaip%C4%97da_teatra_placo_%28teatros_aik%C5%A1t%C4%97%29_%C3%84nnchen_von_Tharau_1.jpg/1920px-Klaip%C4%97da_teatra_placo_%28teatros_aik%C5%A1t%C4%97%29_%C3%84nnchen_von_Tharau_1.jpg",
  "old-town.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Klaipeda_Pasaz_Fryderyka_1.jpg/1920px-Klaipeda_Pasaz_Fryderyka_1.jpg",
  "relaxed.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Theaterplatz_Klaip%C4%97da.jpg/1920px-Theaterplatz_Klaip%C4%97da.jpg",
  "historic.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Klaip%C4%97dos_Dramos_teatras%2C_2019-08-18.jpg/1920px-Klaip%C4%97dos_Dramos_teatras%2C_2019-08-18.jpg",
  "harbour.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Port_of_Klaip%C4%97da%2C_2006_%2802%29.jpg/1920px-Port_of_Klaip%C4%97da%2C_2006_%2802%29.jpg",
  "curonian-spit.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Curonian_Spit_2019-08-21-1.jpg/1920px-Curonian_Spit_2019-08-21-1.jpg",
  "highlights.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nida_Dunes.jpg/1920px-Nida_Dunes.jpg",
  "comparison.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ferry_pedestrian_Smiltyne_Klaipeda.JPG/1920px-Ferry_pedestrian_Smiltyne_Klaipeda.JPG",
  "nida.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nida%2C_Lithuania_02.jpg/1920px-Nida%2C_Lithuania_02.jpg",
  "private.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ferry_pedestrian_Smiltyne_Klaipeda.JPG/1920px-Ferry_pedestrian_Smiltyne_Klaipeda.JPG",
};

const ALLOWED = new Set([
  ...Object.keys(KLAIPEDA_IMAGES),
  "logo-mark.svg",
  "favicon.ico",
]);

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error("file too small");
  return buf;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadWithRetry(url, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await download(url);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await sleep(3000 + i * 2000);
    }
  }
  throw new Error("unreachable");
}

async function main() {
  for (const name of readdirSync(OUT)) {
    if (!ALLOWED.has(name)) {
      unlinkSync(join(OUT, name));
      console.log(`removed orphan ${name}`);
    }
  }

  const cache = new Map();
  let failed = 0;

  for (const [file, url] of Object.entries(KLAIPEDA_IMAGES)) {
    try {
      if (!cache.has(url)) {
        cache.set(url, await downloadWithRetry(url));
        await sleep(1500);
      }
      writeFileSync(join(OUT, file), cache.get(url));
      console.log(`✓ ${file}`);
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`);
      failed++;
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} image(s) failed`);
    process.exit(1);
  }
  console.log("\nAll Klaipėda images downloaded.");
}

main();
