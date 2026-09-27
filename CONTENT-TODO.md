# CONTENT-TODO

Everything below needs your input. Items marked `TODO(content)` in `src/data/site.js` are hidden on the site until you fill them, so nothing half-written is visible.
This file lives at the repo root and is not deployed.

## 1. Text only you can write (`src/data/site.js`)

| Field | Where it shows | Notes |
|---|---|---|
| `profile.headline` | Home intro, under the name | one-line identity statement |
| `profile.status` | Home intro, About → Contact | currently the old site's wording, "Open to research internship opportunities". Confirm it and add the period, e.g. "Seeking a research internship · <months/year>" |
| `profile.interests[].detail` (×3) | Home → Research interests | short parenthetical detail per area |
| `profile.researchStatement` | Research page, top | 2–3 short paragraphs |
| `profile.longBio` | About → Bio | falls back to `profile.bio` until filled |
| `areas[].description` (×3) | Research page, per-area section | short description |
| `areas[].subtitle` (×3) | Home tiles, Research | **taken from the text inside your area images**; confirm or replace |
| `publications[].tldr` (×3) | Publications tiles | one sentence each |
| Image Encoders title + one-liner (`researchProjects`, id 19) | Home "Ongoing research", Projects | kept as-is; confirm, since your focus is now interpretability of vision encoders |

## 2. News dates (`news[]`)
- IGARSS 2026 acceptance: exact month unknown (shown as "2026").
- MERCon 2026 acceptance: exact month unknown (shown as "2026").
- IGARSS 2026 poster: dated **Aug 2026** from the photo filenames (`IMG-20260811…`, `…260811…`). Confirm.
- "Presented two papers at MERCon 2026" (Aug 2026, date from `mercon 2026/info.md`): confirm the wording.
- MERCon papers on IEEE Xplore: Sep 2026 (you told me they were published on 21 Sep 2026).

## 3. Author-name checks (not changed; please check against the papers)
- **MERCon solar benchmark**: site.js mixes full names and initials ("O. Samarakoon, **Dilshara Herath**, I. Ranmandala, **Dushan Herath**, R. Godaliyadda, …"). The CV writes both as "D. Herath".
- **ORBIT-Mamba manuscript**: the CV writes "Dineth Perera, O. Samarakoon, Thaariq Firdous"; site.js uses "D. Perera, O. Samarakoon, T. Firdous". site.js was kept.
- **SolarMamba manuscript**: I added † (equal contribution) to O. Samarakoon and D. Herath because the CV states "First-listed author, equal contribution with D. Herath". Confirm.
- `igarss 2026/info.md` and `mercon 2026/info.md` write your name as `*O. Samarakoon`. What does the asterisk mean (presenting or corresponding author)? It is not shown on the site.

## 4. Conflicts (not resolved; site.js kept for now)
1. **Misfiled info.md files.** `gallery/Coders V10/info.md` contains the **HaXtreme 4.0** date and venue. `gallery/Haxtreme 4.0/info.md` contains the **Coders V11** text.
   I used the HaXtreme facts (14 Dec 2025, OCC, University of Ruhuna, Galle) for the HaXtreme album. Coders V10 has no info.md facts, so its album uses site.js ("2023"; month unknown).
2. **NIFS supervisor title.** info.md says "Dr. GRA Kumara"; site.js and the CV say "Prof. G. R. A. Kumara".
3. **NIFS role.** info.md says "Research Volunteer", site.js "Volunteer Assistant Researcher", the CV "Research Assistant".
4. **NIFS dates.** Your ID badge shows validity 01.11.2022–30.04.2023; site.js says Oct 2022–Mar 2023.
5. **ORBIT-Mamba role.** The CV says you "lead architecture design, training, and experimental work for the ORBIT-Mamba and SolarMamba projects". site.js says ORBIT-Mamba is "Dineth Perera-led" and you are a co-author.
6. **Education metrics.** About shows the two GPA lines from site.js. The first-year rank (41/457) was dropped per "only what my transcript states". Re-add it if it is on the transcript. (The CV lists only "CGPA 3.504".)
7. **IGARSS status.** The CV says "Accepted", so the site shows ACCEPTED even though the conference has taken place. Switch to `published` once the IEEE Xplore DOI exists, then add the DOI link.

## 5. Gallery (`src/data/gallery.js`)
- **Alt text** for every photo was written by me from what is visible. Please skim it.
- **EngEx 2025** is filed under "Research & Lab" (exhibition). Move it if you prefer another category.
- **Coders V10**: month unknown.
- **MERCon 2026**: the location is "Sri Lanka" (from info.md); the venue city isn't stated.
- No album has a `url` or `mapsUrl`; add them if you want linked titles or locations.
- IGARSS photos show the venue and your poster, not you. Swap in any photos of you presenting.

## 6. Unsorted assets (not copied from `new_items/`)
| File | Why | Suggestion |
|---|---|---|
| gallery/NIFS Research Volunteer/volunteer.jpg | **shows your NIC number** | keep private, or crop the ID number out |
| gallery/NIFS Research Volunteer/Cocunut coal based supercapacitor.mp4 (100 MB) | too large; the gallery is photo-only | trim to ~10 s and compress, then use it on a NIFS research page |
| gallery/Coders V10/coders v10.mp4, video.mp4 | the gallery is photo-only | skip |
| gallery/IEEE Xtreme 18/Bittopia.mp4 | the gallery is photo-only | skip |
| gallery/Coders V11/Pre coders overall first.jpg | pink, blurry phone photo of a leaderboard | skip, or replace with a screenshot |
| projeccts/contxt box/symbol.png | truncated or corrupt PNG, duplicate of "symbol enhanced" | skip |
| projeccts/contxt box/logo.gif | animated duplicate of logo.png | skip |

## 7. Missing assets
- `teaser.png` (a real figure from each paper) for all three papers. Drop them in `public/media/publications/<slug>/teaser.png`, run `npm run build`, and they appear in the tile lightbox.
- `poster.pdf` and `slides.pdf` for the three papers (the buttons appear automatically).
- Project covers (3:2) for SolarMamba, ORBIT-Mamba, PatchFlow-PdM and Li-Fi File Sharing.
- Writing covers: `public/media/writing/<slug>/cover.jpg`.
- A portrait of at least 900×1125. The current source is 845×857 (cropped to 685×857).
- Photos for ICPC, CodeArena, MoraXtreme 10.0, and the MARC lab.
- **BibTeX**: the three `citation.bib` files were built only from facts in site.js and info.md (title, authors, venue, year, arXiv id, DOI). Replace them with the official IEEE Xplore exports when you can; IGARSS has no DOI yet.
- **Omni-Wheel video**: 17 MB, loads only on click. Compress it when you have ffmpeg:
  `ffmpeg -i demo.mp4 -vf scale=-2:960 -c:v libx264 -crf 28 -an demo-small.mp4`

## 8. Retired files you can delete yourself
These are still in `public/` but no longer referenced or deployed (the build skips `public/images/` and `public/evidence/`). See ASSET-MAP.md §B.
The root `favicon.svg` and `vite.svg` are also unused now; the favicon is served from `public/favicon.svg`.
