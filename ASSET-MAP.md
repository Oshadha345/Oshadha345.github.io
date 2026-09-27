# ASSET-MAP

Every file in `new_items/` (93) and every pre-existing file in `public/` (88) is listed once with a decision.
Not deployed (repo root only). Optimized copies are WebP (long edge ≤ 1600 px, q80) unless noted.
Gallery photos get a ≤ 900 px thumbnail (`NN-name.webp`) and a ≤ 1800 px lightbox version (`NN-name@2x.webp`).
Posters get a single ≤ 2400 px version so the text stays readable in the lightbox (a deliberate exception to the 1800 px rule).
`npm run build` (prebuild: `scripts/optimize-images.mjs`) also writes `-sm.webp` variants: 640 px for area images and covers, 480 px for gallery thumbnails. These are served through `srcset`, so phones download smaller files.

Decisions: **Place** (copied + optimized into `public/media/`), **Keep**, **Replace**, **Move**, **Retire** (left on disk, no longer referenced, excluded from the `docs/` build), **Duplicate** (byte-identical to a file already placed), **Unsorted** (not copied; see `CONTENT-TODO.md`).

## A. `new_items/`

### areas/
| Source | Decision | Destination | Placement |
|---|---|---|---|
| areas/remote-sensing.png (1536×1024, 3-panel diagram) | Place | media/areas/remote-sensing.webp | Home area tile "Remote Sensing"; Research §01 |
| areas/solar-forecasting.png (1536×1024) | Place | media/areas/solar-forecasting.webp | Home area tile "Multimodal Solar Forecasting"; Research §02 |
| areas/vision-encoders.png (1536×1024) | Place | media/areas/vision-encoders.webp | Home area tile "Vision Encoder Research"; Research §03 |

### publications/
| Source | Decision | Destination | Placement |
|---|---|---|---|
| publications/igarss26-vssm-benchmark/cover.png (1536×1024) | Place | media/publications/igarss26-vssm-benchmark/cover.webp | Publications tile + Home selected-paper thumbnail |
| publications/igarss26-vssm-benchmark/IEEE Assistant … Jason Dixson Photography … 7645.jpg (1024×683, IGARSS room signage) | Place | media/gallery/igarss-2026/03-venue-signage.webp | Gallery album `igarss-2026`, photo 3 |
| publications/mercon26-mambarefine-cd/cover.png (1536×1024) | Place | media/publications/mercon26-mambarefine-cd/cover.webp | Publications tile + Home thumbnail |
| publications/mercon26-solar-benchmark/cover.png (1536×1024) | Place | media/publications/mercon26-solar-benchmark/cover.webp | Publications tile + Home thumbnail |
| publications/logo/igarss 2026.png (158×64, transparent) | Place | media/venues/igarss-2026.png (kept PNG, 9 KB) | Publications header venue row |
| publications/logo/mecon-2026.png (2667×532, white artwork on transparent) | Place | media/venues/mercon-2026.png (128 px tall; white lettering recoloured to #3C4043 so it reads on white, crest unchanged) | Publications header venue row |

### gallery/igarss 2026/ (album `igarss-2026`, conference)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| 1. controlled-benchmark-poster-card.webp (1400×683, the IGARSS poster) | Place | media/publications/igarss26-vssm-benchmark/poster.webp | IGARSS paper → Poster lightbox |
| poster 1.jpg (4032×3024, poster on board, sharp) | Place | media/gallery/igarss-2026/01-poster-board | Album photo 1 (hero) |
| poster 2.jpg (5120×3840, poster row) | Place | media/gallery/igarss-2026/02-poster-row | Album photo 2 |
| igarss.jpg (5120×3840, poster hall) | Place | media/gallery/igarss-2026/04-poster-hall | Album photo 4 |
| igarss (2).jpg (5120×3840, poster hall) | Place | media/gallery/igarss-2026/05-poster-session | Album photo 5 |
| IMG-20260811-WA0047.jpg (exhibit hall) | Place | media/gallery/igarss-2026/06-exhibit-hall | Album photo 6 |
| IMG-20260811-WA0049.jpg (exhibit hall, NASA booth) | Place | media/gallery/igarss-2026/07-exhibit-booths | Album photo 7 |
| IMG-20260811-WA0045.jpg (catering tables; weakest) | Place | media/gallery/igarss-2026/08-hall | Album photo 8 |
| igarss.png (158×64 logo) | Duplicate | — | same bytes as publications/logo/igarss 2026.png |
| info.md | Read → data | src/data/gallery.js, site.js | title, venue, authors (matches site.js) |

### gallery/mercon 2026/ (album `mercon-2026`, conference)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| Solarbenchmark_poster_presentation.jpg (960×640) | Place | media/gallery/mercon-2026/01-solar-poster-presentation | Album photo 1 (hero) |
| Mambarefine_poster_presentation.jpg (900×1600) | Place | media/gallery/mercon-2026/02-mambarefine-poster-presentation | Album photo 2 |
| Solar_Benchmark_MERCon_2026_Poster..jpeg (800×2000) | Place | media/publications/mercon26-solar-benchmark/poster.webp + album photo 3 | Solar paper → Poster lightbox |
| MambaRefine_CD_MERCon_2026_Poster.jpg (3600×9000) | Place | media/publications/mercon26-mambarefine-cd/poster.webp + album photo 4 | MambaRefine paper → Poster lightbox |
| info.md | Read → data | gallery.js | title, venue, date 13 Aug 2026, both author lists (match site.js) |

### gallery/Haxtreme 4.0/ (album `haxtreme-4`, competition)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| 1. Award.jpg | Place | media/gallery/haxtreme-4/01-award | Album photo 1; About → Honors |
| 3. Team.jpg | Place | media/gallery/haxtreme-4/02-team | photo 2 |
| 2. Me.jpg | Place | media/gallery/haxtreme-4/03-competing | photo 3 |
| Overall 8th.jpg (final leaderboard graphic) | Place | media/gallery/haxtreme-4/04-final-leaderboard | photo 4 |
| first round 5th.jpeg (round-1 leaderboard) | Place | media/gallery/haxtreme-4/05-round-one-leaderboard | photo 5 |
| top 30 out of 150 .jpeg (finalist list) | Place | media/gallery/haxtreme-4/06-top-30 | photo 6 |
| info.md | **Conflict** | — | contains the Coders V11 text, not HaXtreme (see CONTENT-TODO) |

### gallery/Coders V10/ (album `coders-v10`, competition)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| coders V10.jpg | Place | media/gallery/coders-v10/01-coders-v10 | photo 1 |
| Pre Coders V10.jpg | Place | media/gallery/coders-v10/02-precoders-v10 | photo 2 |
| team.jpg (768×1024 selfie) | Place | media/gallery/coders-v10/03-team | photo 3 |
| setup.jpg (4000×3000) | Place | media/gallery/coders-v10/04-setup | photo 4 |
| coders v10.mp4 (6 s story clip) | Unsorted | — | gallery is photo-only |
| video.mp4 (30 s hall pan, 11 MB) | Unsorted | — | gallery is photo-only |
| info.md | **Conflict** | — | contains HaXtreme 4.0 date/venue; used for `haxtreme-4` instead |

### gallery/Coders V11/ (album `coders-v11`, competition)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| 1. Team .jpg | Place | media/gallery/coders-v11/01-team | photo 1 |
| 2. Team 2.jpg | Place | media/gallery/coders-v11/02-team | photo 2 |
| 2.2 cheeze.jpg | Place | media/gallery/coders-v11/03-photo-frame | photo 3 |
| 3. Extra.jpg | Place | media/gallery/coders-v11/04-group | photo 4 |
| Pre coders team.jpg | Place | media/gallery/coders-v11/05-precoders-team | photo 5 |
| Pre coders.jpg | Place | media/gallery/coders-v11/06-precoders | photo 6 |
| Pre coders gang.jpg | Place | media/gallery/coders-v11/07-precoders-group | photo 7 |
| Pre coders overall first.jpg (pink phone photo of a leaderboard) | Unsorted | — | low quality; see CONTENT-TODO |
| info.md | Read → data | gallery.js | PreCoders Sep 2024, Coders V11.0 12 Oct 2024 |

### gallery/IEEE Xtreme 18/ (album `ieeextreme-18-bittopia`, competition)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| 3. All.jpg | Place | media/gallery/ieeextreme-18-bittopia/01-group | photo 1; About → Honors |
| 1. Team.jpg | Place | …/02-team | photo 2 |
| 2. Me.jpg | Place | …/03-coding | photo 3 |
| Poster.jpg (event poster) | Place | …/04-event-poster | photo 4 |
| Bittopia.mp4 | Unsorted | — | gallery is photo-only |
| info.md | Read → data | gallery.js | BITTOPIA 2.0, 26 Oct 2024, Innovator Park International, Kandy |

### gallery/UOJ Coders/ (album `uoj-coders-4`, competition)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| UoJ Coders V4.jpeg | Place | media/gallery/uoj-coders-4/01-finalists | photo 1 |
| Stay in before competition (1).jpg | Place | …/02-before-competition | photo 2 |
| Stay in before competition (2).jpg | Place | …/03-before-competition | photo 3 |
| info.md | Read → data | gallery.js | Univ. of Jaffna, 23–24 Aug 2025 |

### gallery/EngEx 2025/ (album `engex-2025`, research)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| omni robot 1.jpg | Place | media/gallery/engex-2025/01-omni-robot + media/projects/omni-wheel-robot/cover.webp | album hero; Omni-Wheel project cover |
| Team.jpg (5460×3640) | Place | media/gallery/engex-2025/02-team + projects/omni-wheel-robot/fig-3-team.webp | album; project figure |
| omni robot 2.jpg | Place | media/gallery/engex-2025/03-omni-robot + projects/omni-wheel-robot/fig-1.webp | album; project figure |
| omni robot 3.jpg | Place | media/gallery/engex-2025/04-omni-robot + projects/omni-wheel-robot/fig-2.webp | album; project figure |
| omni wheel bot video.mp4 (17 MB) | Place | media/projects/omni-wheel-robot/demo.mp4 (+ poster frame demo-poster.webp) | Project detail, click-to-load |
| info.md | Read → data | gallery.js | 23–27 Sep 2025, Faculty of Engineering, UoP |

### gallery/NIFS Research Volunteer/ (album `nifs-research-volunteer`, research)
| Source | Decision | Destination | Placement |
|---|---|---|---|
| Fabricating a super capacitor.jpg | Place | media/gallery/nifs-research-volunteer/01-fabrication | photo 1 |
| collage 1.jpg | Place | …/02-lab-collage | photo 2 |
| device inspection using scanning electron microscope and super capacitors.jpg | Place | …/03-device-inspection | photo 3 |
| volunteer.jpg (ID badge) | **Unsorted** | — | shows your NIC number; not published |
| Cocunut coal based supercapacitor.mp4 (100 MB) | Unsorted | — | too large; gallery is photo-only |
| info.md | Read → data | gallery.js | NIFS Hanthana, dept, supervisor, mentors |

### Other folders
| Source | Decision | Destination | Placement |
|---|---|---|---|
| CV/CV.pdf | Keep | public/cv/oshadha-samarakoon-cv.pdf | already identical (copied 22 Sep); nav, Home, footer, About |
| new profile picture/avatar professional.png (845×857) | Replace | media/profile/portrait.webp (cropped to 4:5, < 150 KB) | Home intro portrait; OG card |
| projeccts/contxt box/logo.png (850×200) | Place | media/projects/contxt-box/cover.webp | ConTXT BOX card + detail cover |
| projeccts/contxt box/symbol enhanced.png (960×1088) | Place | media/projects/contxt-box/fig-1-symbol.webp | ConTXT BOX detail figure |
| projeccts/contxt box/symbol.png (truncated PNG) | Unsorted | — | corrupt and a lower-res duplicate of the enhanced symbol |
| projeccts/contxt box/logo.gif (animated logo) | Unsorted | — | duplicate of logo.png |
| blogs/Apollo to AI/Apollo_to_AI.pdf | Duplicate | public/writing/from-apollo-to-ai.pdf (Keep) | Writing |
| blogs/EEES Magazine 2026/My Article - THE ETERNAL HARMONIC.pdf | Duplicate | public/writing/the-eternal-harmonic.pdf (Keep) | Writing |
| blogs/EEES Magazine 2026/EEES Magazine 2026.pdf (73 MB) | Not copied (rules.md) | — | linked via Google Drive; git-ignored |
| blogs/EEES Magazine 2026/rules.md | Read → data | site.js writing | Drive link already present |
| BioFusion …/BioMamba_Report.pdf | Duplicate → Move | media/projects/bratsmamba/report.pdf | BraTSMamba "Report" link |
| AL and OL Certificates/Advanced Level … .pdf | Duplicate | public/evidence/advanced-level-certificate.pdf (Keep) | About → A/L "Certificate" chip + archive |
| AL and OL Certificates/Ordinary Level … .pdf | Duplicate | public/evidence/ordinary-level-certificate.pdf (Keep) | About → O/L "Certificate" chip + archive |
| CodeArena25/CodeArena_Finalist.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| Haxtreme4/Haxtreme4.0_finalist.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| ICPC/ICPC_finalist.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| PreCoders and Coders V11/…Finalist.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| UOJ Coder_4.0/UOJCoders_Finalist.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| ieee xtreme 18/ieeextreme_18_certificate.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| ieee xtreme 19/ieeextreme_19_certificate.pdf | Duplicate | public/evidence copy (Keep) | archive (Participation); the participant row stays hidden |
| mora xtreme 10.0/Oshadha_Samarakoon.pdf | Duplicate | public/evidence copy (Keep) | About → award chip + archive |
| mora xtreme 10.0/Hackerrank Dashboard.png | Duplicate | public/evidence/moraxtreme-10-ranking.png (Keep) | MoraXtreme 10.0 "Ranking" chip + archive |
| mora xtreme 10.0/Moraxtreme10_finalist_poster_team_nocturnals.jpg | Duplicate | public/evidence/moraxtreme-10-finalist-poster.jpg (Keep) | MoraXtreme 10.0 "Finalist flyer" chip + archive |
| mora xtreme 9.0/Moraxtreme9.jpeg | Duplicate | public/evidence/moraxtreme-9-certificate.jpg (Keep) | archive (Participation) |

## B. Existing `public/`

| File | Used by (before) | Decision | New location / note |
|---|---|---|---|
| 404.html | GitHub Pages | Replace | rewritten for the BrowserRouter SPA pattern |
| cv/oshadha-samarakoon-cv.pdf | profile.cv | Keep | unchanged |
| images/avatars/avatar.png (658 KB) | Home | Replace | media/profile/portrait.webp |
| images/books/An_Eternal_Golden_Braid.jpg | Book Sunday | Move | media/reading/godel-escher-bach.webp |
| images/education/university-of-peradeniya.png | Education | Move | media/education/university-of-peradeniya.webp |
| images/education/sri-chandananda-buddhist-college.png | Education | Keep → Move | media/education/sri-chandananda-buddhist-college.webp (About → Education, school card crest) |
| images/projects/aiagents/dragent.png | AI Agents | Move | media/projects/ai-agents/cover.webp |
| images/projects/BraTSMamba/BraTSMamba.png | BraTSMamba | Move | media/projects/bratsmamba/cover.webp |
| images/projects/BraTSMamba/Logo.png (7 MB) | — | Move | …/bratsmamba/fig-1-overview.webp |
| images/projects/BraTSMamba/BraTS_all_modalities.png | — | Move | …/fig-2-modalities.webp |
| images/projects/BraTSMamba/normalized_samples_check.png | — | Move | …/fig-3-normalized-samples.webp |
| images/projects/BraTSMamba/error_analysis_sample_0.png | — | Move | …/fig-4-error-analysis-0.webp |
| images/projects/BraTSMamba/error_analysis_sample_1.png | — | Move | …/fig-5-error-analysis-1.webp |
| images/projects/BraTSMamba/training_curves.png | — | Move | …/fig-6-training-curves.webp |
| images/projects/BraTSMamba/class_distribution_pie.png | — | Move | …/fig-7-class-distribution.webp |
| images/projects/BraTSMamba/class_imbalance_bar.png | — | Move | …/fig-8-class-imbalance.webp |
| images/projects/BraTSMamba/tumor_volume_distribution.png | — | Move | …/fig-9-tumor-volume.webp |
| images/projects/BraTSMamba/class_correlation.png | — | Retire | EDA detail, weak on a portfolio page |
| images/projects/BraTSMamba/class_volume_boxplot.png | — | Retire | same |
| images/projects/BraTSMamba/error_distribution.png | — | Retire | same |
| images/projects/BraTSMamba/intensity_mean_distribution.png | — | Retire | same |
| images/projects/BraTSMamba/intensity_range.png | — | Retire | same |
| images/projects/BraTSMamba/intensity_std_boxplot.png | — | Retire | same |
| images/projects/BraTSMamba/sanity_check.png | — | Retire | same |
| images/projects/BraTSMamba/tumor_brain_ratio.png | — | Retire | same |
| images/projects/BraTSMamba/volume_dimensions.png | — | Retire | same |
| images/projects/codeforces/logo.jpg | Codeforces | Move | media/projects/codeforces-solutions/cover.webp |
| images/projects/CP/logo.png (7.4 MB) | CP Journey | Move | media/projects/competitive-programming-journey/cover.webp |
| images/projects/DSP/dsp.jpg | DSP | Move | media/projects/digital-signal-processing/cover.webp |
| images/projects/finger/project.png | Sensor Calibration | Move | media/projects/sensor-calibration-analysis/cover.webp |
| images/projects/image_encoder/Vcoder.png (6.3 MB) | Image Encoders | Move | media/projects/image-encoders/cover.webp |
| images/projects/image_encoder/logo.png (7.4 MB) | — | Move | …/image-encoders/fig-1-roadmap.webp |
| images/projects/JAX/JAX.jpg | JAX | Move | media/projects/jax-deep-learning/cover.webp |
| images/projects/line_follower/main.jpg | Line follower | Move | media/projects/line-following-robot/cover.webp |
| images/projects/line_follower/robo.jpg | — | Move | …/fig-1-robot.webp |
| images/projects/line_follower/team.jpg | — | Move | …/fig-2-team.webp |
| images/projects/linkage/6bar.png | 6-Bar | Move | media/projects/6-bar-linkage/cover.webp |
| images/projects/load_flow/load.png | Load flow | Move | media/projects/load-flow-analysis/cover.webp |
| images/projects/Omni Wheel Bot/logo.jpg | — | Duplicate | = new_items omni robot 1 (placed from there) → Retire |
| images/projects/Omni Wheel Bot/omni.jpg | Omni-Wheel | Duplicate | = omni robot 2 → Retire |
| images/projects/Omni Wheel Bot/omni2.jpg | — | Duplicate | = omni robot 3 → Retire |
| images/projects/Omni Wheel Bot/omni.mp4 | — | Duplicate | = EngEx video → Retire (copy at media/projects/omni-wheel-robot/demo.mp4) |
| images/projects/opencv/logo.png | OpenCV | Move | media/projects/opencv-self-study/cover.webp |
| images/projects/server_sentinel/server.png | Server Sentinel | Move | media/projects/server-sentinel-c/cover.webp |
| images/projects/sigsys/signals-systems.jpg | Signals | Move | media/projects/signals-and-systems/cover.webp |
| images/projects/Simon_Says/Game_box.jpg | Symon Says | Move | media/projects/symon-says/cover.webp |
| images/projects/Simon_Says/Game_Box_Inside_hardware.jpg | — | Move | …/fig-1-hardware.webp |
| images/projects/Simon_Says/GUI.jpg | — | Move | …/fig-2-gui.webp |
| images/projects/Simon_Says/F_and_T_domain.jpg | — | Move | …/fig-3-time-frequency.webp |
| images/projects/Simon_Says/centroid.jpg | — | Move | …/fig-4-pca-centroids.webp |
| images/projects/Simon_Says/accuracy_of_model.jpg | — | Move | …/fig-5-accuracy.webp |
| images/projects/Simon_Says/impulse_duration_clap_sample.jpg | — | Move | …/fig-6-impulse-clap.webp |
| images/projects/Simon_Says/impulse_duration_knock_sample.jpg | — | Move | …/fig-7-impulse-knock.webp |
| images/projects/Simon_Says/impulse_duration_snap_sample.jpg | — | Move | …/fig-8-impulse-snap.webp |
| images/projects/Simon_Says/Logo.png | — | Move | …/fig-9-logo.webp |
| images/projects/solar_irradiance_seg/ucloundseg_inference1.png | CV Solar | Move | media/projects/cv-solar-irradiance/cover.webp |
| images/projects/solar_irradiance_seg/logo.png (6.8 MB roadmap) | — | Move | …/fig-1-roadmap.webp |
| images/projects/solar_irradiance_seg/rbr1.png | — | Move | …/fig-2-rbr.webp |
| images/projects/solar_irradiance_seg/rbr2.png | — | Move | …/fig-3-rbr.webp |
| images/projects/solar_irradiance_seg/rbr3.png | — | Move | …/fig-4-rbr.webp |
| images/projects/solar_irradiance_seg/ucloudnet.png | — | Move | …/fig-5-ucloudnet.webp |
| images/projects/solar_irradiance_seg/ucloundnet pipeline.png | — | Move | …/fig-6-ucloudnet-pipeline.webp |
| images/projects/sync_gen/syncgen.png | Sync gen | Move | media/projects/synchronous-generator-modelling/cover.webp |
| evidence/bratsmamba-biofusion-report.pdf | BraTSMamba | Keep | also copied to media/projects/bratsmamba/report.pdf (the project "Report" link); original URL still resolves |
| evidence/*.pdf (10 certificates and result sheets) | EvidenceGrid / Education | Keep | deployed at the original URLs; linked from About inline chips and the About → Certificates & evidence archive |
| evidence/*-preview.jpg (10 files) | EvidenceGrid | Keep | superseded for display by media/evidence/<slug>.webp (re-rendered from each PDF's first page, 900 px); originals kept and deployed |
| evidence/moraxtreme-10-finalist-poster.jpg | EvidenceGrid | Keep | display copy media/evidence/moraxtreme-10-finalist-poster.webp → MoraXtreme 10.0 "Finalist flyer" chip + archive |
| evidence/moraxtreme-10-ranking.png | — | Keep | display copy media/evidence/moraxtreme-10-ranking.webp → MoraXtreme 10.0 "Ranking" chip + archive |
| evidence/moraxtreme-9-certificate.jpg | EvidenceGrid | Keep | display copy media/evidence/moraxtreme-9-certificate.webp → archive (Participation) |
| writing/the-eternal-harmonic.pdf | Writing | Keep | |
| writing/from-apollo-to-ai.pdf | Writing | Keep | |

Retired and moved originals stay in `public/` (nothing deleted). `public/images/**` is excluded from the `docs/` build by a small
plugin in `vite.config.js`. `public/evidence/**` is deployed, so every old `/evidence/*.pdf` URL still resolves.

## C. Generated assets
| File | Placement |
|---|---|
| media/profile/og-card.png (1200×630) | og:image / twitter:image |
| favicon.svg, apple-touch-icon.png (180×180) | browser icons |
| media/publications/<slug>/citation.bib (×3) | BibTeX dialog, built only from facts in site.js / info.md |
| media/projects/omni-wheel-robot/demo-poster.webp | video poster frame |
| media/evidence/<slug>.webp (13) | evidence previews (first PDF page or the original image, ≤ 900 px, uncropped): About chips (lightbox) and the archive |
| media/education/sri-chandananda-buddhist-college.webp | About → Education, school card crest |

## Missing (design expects an asset, none exists)
- `teaser.png` (a real figure from the paper) for all three papers; tiles use the generated covers.
- `poster.pdf` and `slides.pdf` for all three papers.
- Project covers for SolarMamba, ORBIT-Mamba, PatchFlow-PdM and Li-Fi File Sharing; these render text-only.
- Writing covers for both articles.
- Photos for ICPC, CodeArena, MoraXtreme 10.0 (only certificates or graphics exist).
- MARC lab photos.
