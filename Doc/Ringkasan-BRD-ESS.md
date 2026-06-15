# Ringkasan BRD — Employee Self Service (ESS)

> **Dokumen Sumber:** BRD - Employee Self Service (ESS) (1).docx  
> **Versi:** Final (Revisi)  
> **Tanggal Ringkasan:** 2026-06-12

---

## 1. Definisi & Tujuan

**ESS** adalah portal digital berbasis **web dan mobile** yang memungkinkan karyawan mengelola administrasi kepegawaian secara mandiri, tanpa ketergantungan proses manual HR. ESS menjadi fondasi awal pengembangan HRIS perusahaan.

**Pengguna Utama:** Employee · Atasan Langsung · HC Comben · FAT · Payroll · Manajemen

### Tujuan Bisnis
- Mengurangi pekerjaan administratif HC minimal **40%**
- Menyediakan *single source of truth* data karyawan
- Mendukung governance multi-cabang
- Meningkatkan employee experience

### Tujuan Operasional
- Digitalisasi kehadiran, izin & cuti, dan employee loan
- Sentralisasi data personal karyawan

---

## 2. Latar Belakang & Masalah

| Area | Kondisi Saat Ini | Dampak |
|---|---|---|
| Kehadiran | Rekap manual, tidak ada monitoring terintegrasi | Human error, sulit validasi cabang |
| Izin & Cuti | Approval via WhatsApp, tidak terdokumentasi | Sulit audit |
| Employee Loan | Pengajuan manual, tidak ada histori/simulasi/tracking | Konflik payroll |
| Monitoring Cabang | Data tidak realtime | Pengambilan keputusan lambat |
---
## 3. Stakeholder & RACI

### Business Stakeholder
| Stakeholder | Peran |
|---|---|
| BOD | Sponsor |
| Project Manager (PM/PCR) | Project Manager |
| HC Comben | Business Owner / Process Owner |
| FAT | Financial Validator |
| Employee | End User |

### Development Stakeholder
BA · UI/UX · Frontend · Backend · QA · Infrastructure

---

## 4. Scope

### MVP (In Scope)
- Dashboard
- Kehadiran
- Izin & Cuti
- Employee Loan Facility
- Profil Saya

### Out of Scope
| Phase | Fitur |
|---|---|
| Phase 2 | Payroll Slip, Overtime, Reimbursement |
| Phase 3 | Performance Management, KPI, Talent Management |

---

## 5. Modul Utama

### 5.1 Dashboard
- **Employee:** Kehadiran hari ini, saldo cuti, pengajuan aktif, outstanding loan, pengumuman
- **HC:** Total hadir/terlambat/izin, loan pending, ranking cabang

### 5.2 Kehadiran
Data yang direkam otomatis: tanggal, jam masuk/keluar, GPS, device, IP address. Foto selfie bersifat opsional.

**Status kehadiran:** Hadir · Terlambat · Alpha · Izin · Cuti · Dinas Luar · Belum Check Out

HR dapat melihat rekap harian, bulanan, per cabang, dan riwayat koreksi.

### 5.3 Izin & Cuti
**Kategori:** Sakit · Pribadi Mendesak · Dinas · Cuti Tahunan · Melahirkan · Menikah · Khusus

**Workflow:**
```
Employee → Atasan → HC → Final Status
(Draft → Submitted → Approved / Declined / Cancelled)
```

### 5.4 Employee Loan Facility
Program pinjaman internal sebagai bagian dari employee benefit.

**Syarat Pengajuan:**
- Status aktif, masa kerja ≥ 12 bulan
- Tidak ada SP aktif, tidak dalam proses resign
- Outstanding loan tidak bermasalah

**Loan Eligibility Score:**
| Faktor | Bobot |
|---|---|
| Masa Kerja | 30% |
| THP | 25% |
| Outstanding Loan | 20% |
| Status Kepegawaian | 15% |
| Disiplin | 10% |

**Business Rule:** Maksimum cicilan ≤ **30% THP**  
*(Contoh: THP Rp5.000.000 → cicilan maks Rp1.500.000)*

**Workflow Loan:**
```
Submitted → Sedang Ditinjau HC → Validasi FAT → Approved / Declined
```

### 5.5 Profil Saya
Data karyawan: Nama, NIK, Jabatan, Cabang, Unit Kerja, Lama Kerja, Atasan Langsung, Kontak Darurat, Saldo Cuti.

HR dapat melihat histori perubahan, approval perubahan data, dan validasi data payroll.

---

## 6. Non-Functional Requirement

| Aspek | Ketentuan |
|---|---|
| Security | Role-based access, audit trail, session timeout |
| Performance | Response time < 3 detik |
| Availability | 99% uptime |
| Compatibility | Android, iOS, Web Responsive |

---

## 7. KPI & Success Metrics

| KPI | Target |
|---|---|
| Adopsi ESS | > 90% |
| Approval Izin | < 24 Jam |
| Approval Loan | < 3 Hari Kerja |
| Error Payroll karena Kehadiran | < 2% |
| Error Outstanding Loan | 0% |
| Pengurangan kerja administratif HC | > 40% |

---

## 8. Roadmap Pengembangan

| Versi | Fitur |
|---|---|
| **ESS V1 (MVP)** | Dashboard, Kehadiran, Izin & Cuti, Employee Loan, Profil Saya |
| **ESS V1.5** | Overtime, Reimbursement, Announcement Center |
| **ESS V2** | Payroll Slip, Benefit Statement, Asset Management |
| **ESS V3** | Performance Management, KPI, Career Development, Learning Management |

---

## 9. Catatan Prioritas

> Modul yang perlu diperdalam sebelum masuk ke tim developer:
> - **BAB 7 — Kehadiran**: business rule terbanyak, mempengaruhi desain database & approval matrix
> - **BAB 9 — Employee Loan**: kompleksitas workflow engine, integrasi payroll, & loan eligibility scoring

---

## 10. Arsitektur Platform — GCAO v2 (Revisi)

> **Update:** Spesifikasi diperluas menjadi **Workforce Digital Platform** yang mencakup ESS + Sales Force Management + Executive Analytics.  
> **Stack:** HTML/CSS/JS murni, mobile-first, viewport iPhone 15 Pro (393×852px), font Inter, primary color `#1D6FF3`.

### 10.1 Nama Platform

**Workforce Digital Platform** — menggabungkan:
- Employee Self Service (ESS)
- Sales Force Management
- Employee Loan Management
- Workforce Monitoring
- Executive Analytics

### 10.2 Hirarki Role (5 Level)

| Level | Role | Deskripsi |
|---|---|---|
| **Level 1** | Staff Kontrak | Karyawan internal perusahaan |
| **Level 1** | Staff Mitra (AE) | Account Executive / tenaga lapangan |
| **Level 2** | Atasan Langsung | Supervisor tim & approval |
| **Level 3** | HC Comben | Human Capital, workforce & benefit |
| **Level 4** | FAT | Finance, Accounting & Treasury |
| **Level 5** | Direksi | Executive, strategic analytics |

### 10.3 Unified Bottom Navigation (Semua Role)

Semua role menggunakan 4-tab bottom navigation yang seragam:

| Tab | Icon | Fungsi |
|---|---|---|
| **Beranda** | 🏠 | Dashboard utama role |
| **Aktivitas** | ⚡ | Sub-menu aktivitas spesifik role |
| **Notifikasi** | 🔔 | Notifikasi & alert |
| **Profil** | 👤 | Profil + Logout |

> **Perubahan dari v1:** Nav lama role-spesifik (Kehadiran/Loan/dll) diganti unified nav. Semua modul masuk ke tab **Aktivitas** sebagai sub-menu.

### 10.4 Warna Identitas per Role

| Role | Warna Hero | Gradien |
|---|---|---|
| Staff Kontrak | Biru | `#0F2B6E → #1A55D4 → #2A7CFF` |
| Staff Mitra AE | Indigo | `#1E1B4B → #3730A3 → #4F46E5` |
| Atasan / Kacab | Emerald | `#065F46 → #059669 → #10B981` |
| HC Comben | Purple | `#4A1D96 → #6D28D9 → #7C3AED` |
| FAT | Steel Blue | `#1E3A5F → #1D4ED8 → #2563EB` |
| Direksi | Dark Navy | `#0A0F1E → #111827 → #1C2130` |

---

## 11. Application Flow — Alur Lengkap

### 11.1 Alur Global

```
APP OPEN
    ↓
[Splash Screen]          auto-redirect 2–3 detik
    ↓
[Role Selection Page]    pilih workspace
    ↓
[Login Page]             validasi akun, sistem identifikasi role
    ↓
[Role Dashboard]         Beranda sesuai role
    ↓
[Daily Activities]       tab Aktivitas → sub-menu
    ↓
[Notifications]          tab Notifikasi
    ↓
[Profile]                tab Profil
    ↓
[Logout]                 konfirmasi logout
    ↓
[Login Page]             kembali ke halaman login
```

### 11.2 Alur Layar — Entry Point

```
[welcome.html]  ──auto 3 detik──▶  [index.html]
                                        │ Role Selection
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
                    ▼                   ▼                   ▼
          [login-kontrak.html] [login-mitra.html]  [login.html]
           Staff Kontrak        Staff Mitra AE      Manajemen
                    │                   │
                    ▼                   ▼
             [home.html]       [ae/dashboard.html]
           Dashboard SK          Dashboard AE
```

Dari `index.html`, grid Manajemen langsung menuju dashboard masing-masing tanpa halaman login terpisah (demo mode).

---

## 12. Role Journey — Detail per Role

### 12.1 Staff Kontrak

#### BERANDA
- Attendance summary (hadir hari ini, jam masuk/keluar)
- Saldo cuti
- Loan summary (outstanding, cicilan)
- Pending requests (pengajuan pending)
- Announcements / pengumuman terbaru

#### AKTIVITAS (Sub-Menu)

| Sub-Menu | Fitur |
|---|---|
| **Kehadiran** | Check In/Out, riwayat kehadiran, rekap bulanan |
| **Izin** | Ajukan izin baru, riwayat, status approval |
| **Cuti** | Saldo cuti, ajukan cuti, histori |
| **Loan** | Ajukan pinjaman, simulasi cicilan, outstanding, riwayat |

**Workflow Loan:**
```
Submitted → HC Review → FAT Validation → Approved / Declined
```

#### NOTIFIKASI
- Status izin/cuti (approved/rejected)
- Status loan
- Pengumuman perusahaan
- Update kebijakan

#### PROFIL
- Informasi karyawan (Nama, NIK, Jabatan, Cabang)
- Status kepegawaian (saldo cuti, SP, outstanding loan)
- Informasi kepegawaian
- Kontak darurat
- Rekening payroll
- Informasi aset perusahaan
- **Tombol Logout** → kembali ke Login Page

---

### 12.2 Staff Mitra AE

#### BERANDA
**Profile Header:**
- Nama, Cabang, Working Area, Branch Leader, Supervisor

**Attendance Summary:**
- Check In / Check Out / Durasi aktivitas / Jarak tempuh

**Activity Performance:**
- Canvasing · Customer Prospect · Follow Up · Survey · Closing · Customer Active

**Prospect Quality:**
- Quality Score · Cold / Warm / Hot prospect count

**Pending Tasks:**
- Follow Up Required · Overdue Prospect · Survey Waiting

**Estimated Commission:**
- Current achievement vs target

**Training Mode** *(jika Status = Training):*

| Phase | Nama | Konten |
|---|---|---|
| Phase 1 | Fundamental | Pengetahuan dasar perusahaan & produk |
| Phase 2 | Communication | Teknik komunikasi sales |
| Phase 3 | Canvasing | Praktik lapangan |
| Phase 4 | Sales Conversion | Closing & konversi |

Tampilan Training Mode:
- Module completion %
- Daily target (Canvasing: 3/10 rumah, CP: 1/5 target)
- Assessment progress (misal: 65% complete)

#### AKTIVITAS (Sub-Menu)

**Kehadiran Lapangan:**
- Check In / Check Out berbasis GPS
- Selfie evidence
- Visual timeline aktivitas harian:
  ```
  08:00 Check In → 08:45 Stop A → 09:30 Prospect → 11:00 Follow Up → 14:00 Survey → 17:00 Check Out
  ```
- Map view: route history, stop points, durasi per stop, total jarak

**Canvasing:**
- Jumlah rumah dikunjungi, durasi, prospect generated
- Per stop: GPS, timestamp, foto evidence, prospect generated (Ya/Tidak)

**Customer Prospect:**
- Nama, nomor HP, alamat, status (Cold/Warm/Hot)
- Last Follow Up, Days Since Created, Prospect Health Score

**Follow Up:**
- Queue: Due Today / Overdue / Not Contacted
- Risk Indicator: 🟢 Green / 🟡 Yellow / 🔴 Red
- Lost Prospect Risk %

**Survey:**
- Lokasi survey, tanggal, package interest
- Paket: Package 1 – 5

**Closing:**
- Histori closing, conversion rate, pending installation

**Customer Active:**
- Jumlah customer aktif, durasi berlangganan, jumlah komplain, churn risk

#### NOTIFIKASI
- Follow Up reminder
- Training reminder
- Instruksi Branch Leader / Supervisor
- Survey & Prospect reminder

#### PROFIL
- Informasi personal (Nama, ID, Cabang, Working Area, Supervisor)
- Kontak darurat
- **Work Device Information:** Brand, Model, IMEI, Registered Date, Last Active Date
- **Company Asset Information:** Company Phone, Uniform, ID Card, Marketing Tools
  - Per aset: Nomor, Nilai, Kondisi, Tanggung jawab
  - Warning: *Karyawan bertanggung jawab atas aset yang ditetapkan*
- **Tombol Logout** → kembali ke Login Page

---

### 12.3 Atasan Langsung

#### BERANDA
- Team attendance (rekap hadir tim hari ini)
- Team productivity (performa AE di bawahnya)
- Pending approval (izin/cuti menunggu)
- Team ranking

#### AKTIVITAS
- Approve izin & cuti
- Recommend loan
- Monitor AE activity (map & timeline bawahan)
- Team performance report

#### NOTIFIKASI
- Approval request dari bawahan
- Escalation alert

#### PROFIL
- Informasi personal
- Struktur tim
- **Tombol Logout**

---

### 12.4 HC Comben

#### BERANDA
- Workforce summary (total karyawan, baru, keluar)
- Attendance summary (hadir/terlambat/izin/alpha hari ini)
- Leave summary (cuti pending, saldo massal)
- Loan summary (outstanding, pending review)

#### AKTIVITAS
- Attendance monitoring (per cabang, per karyawan)
- Leave management (review & approval)
- Loan review (verifikasi sebelum FAT)
- Employee database

#### NOTIFIKASI
- Pending HR actions
- Policy alerts

#### PROFIL
- Informasi HC
- **Tombol Logout**

---

### 12.5 FAT

#### BERANDA
- Loan exposure (total outstanding seluruh karyawan)
- Outstanding loan summary
- Pending validation queue

#### AKTIVITAS
- Financial validation (approve/reject loan dari HC)
- Loan approval final
- Payroll deduction monitoring

#### NOTIFIKASI
- Validation queue alerts
- Financial alerts

#### PROFIL
- Informasi FAT
- **Tombol Logout**

---

### 12.6 Direksi

#### BERANDA
- Workforce analytics (total karyawan, turnover, kehadiran)
- Sales analytics (revenue, closing, pipeline)
- Branch comparison (peringkat cabang)
- Executive KPI

#### AKTIVITAS
- Executive dashboard
- Strategic reports
- Productivity analytics

#### NOTIFIKASI
- Critical alerts
- Strategic alerts

#### PROFIL
- Informasi executive
- **Tombol Logout**

---

## 13. Struktur File Mockup

```
ESS/mockup/
├── index.html               ← ENTRY POINT: role selector (2 kartu + grid manajemen)
├── welcome.html             ← Splash screen animasi (auto → index.html)
├── login-kontrak.html       ← Login Staff Kontrak (→ home.html)
├── login-mitra.html         ← Login Staff Mitra AE (→ ae/dashboard.html)
├── login.html               ← Role selector alternatif (legacy alias)
│
│  ── Staff Kontrak Pages ──
├── home.html                ← Dashboard Beranda SK
├── kehadiran.html           ← Aktivitas > Kehadiran
├── izin-cuti.html           ← Aktivitas > Izin & Cuti
├── ajukan-izin.html         ← Form pengajuan izin
├── status-approved.html     ← Status: disetujui
├── status-rejected.html     ← Status: ditolak
├── loan.html                ← Aktivitas > Loan
├── ajukan-loan.html         ← Form pengajuan loan + simulasi
├── detail-loan.html         ← Detail riwayat loan
├── status-loan-review.html  ← Status: sedang ditinjau
├── profil.html              ← Profil + Logout (shared SK & mgmt)
├── pengumuman.html          ← Notifikasi / Pengumuman
│
│  ── Staff Mitra AE Pages ──
├── ae/
│   ├── dashboard.html           ← Beranda AE
│   ├── kehadiran-lapangan.html  ← Aktivitas > Kehadiran (GPS + timeline)
│   ├── canvasing.html           ← Aktivitas > Canvasing
│   ├── follow-up.html           ← Aktivitas > Follow Up
│   ├── survey.html              ← Aktivitas > Survey
│   ├── closing.html             ← Aktivitas > Closing
│   ├── customer-prospect.html   ← Aktivitas > Customer Prospect
│   └── customer-active.html     ← Aktivitas > Customer Active
│
│  ── Management Pages ──
├── mgmt/
│   ├── dashboard-atasan.html    ← Beranda Atasan
│   ├── dashboard-hc.html        ← Beranda HC Comben
│   ├── dashboard-fat.html       ← Beranda FAT
│   └── dashboard-direksi.html   ← Beranda Direksi
│
├── css/
│   └── design-system.css        ← Tokens, komponen, layout
└── js/
    └── app.js

Total: 30 file HTML + 1 CSS + 1 JS
```

---

## 14. Design System

### 14.1 Identitas Visual

| Token | Nilai |
|---|---|
| Primary | `#1D6FF3` |
| Primary Dark | `#1558C8` |
| Primary Light | `#EEF4FF` |
| Font | Inter (Google Fonts) |
| Viewport | 393 × 852px (iPhone 15 Pro) |
| Border Radius | 16px (default) · 10px (sm) · 20px (lg) |
| Bottom Nav Height | 72px (`--nav-h`) |
| Status Bar Height | 50px (`--status-h`) |
| Header Height | 56px (`--header-h`) |

### 14.2 Komponen Utama (design-system.css)

| Kategori | Kelas |
|---|---|
| Layout | `.phone`, `.app`, `.page`, `.status-bar` |
| Navigation | `.bottom-nav`, `.nav-item`, `.nav-icon`, `.nav-label`, `.nav-badge` |
| Header | `.screen-header`, `.btn-back` |
| Cards | `.card`, `.kpi-card`, `.attend-card`, `.loan-card`, `.ann-card` |
| Badges | `.badge .b-primary/success/warning/danger/info/neutral/white` |
| Forms | `.form-group`, `.form-label`, `.form-control` |
| Tabs | `.tab-bar`, `.tab-item` |
| Lists | `.list-item`, `.li-icon`, `.li-body`, `.li-right` |
| Progress | `.prog-wrap`, `.prog-bar`, `.score-bar-row` |
| Quick Menu | `.quick-chips`, `.q-chip`, `.q-chip-icon` |
| Status | `.status-screen`, `.ss-icon`, `.ss-title`, `.ss-desc`, `.ss-detail-card` |
| Workflow | `.workflow`, `.wf-step`, `.wf-dot`, `.wf-content` |
| Role Tag | `.role-tag` |
| Branch | `.branch-item`, `.br-rank`, `.br-body`, `.br-right` |

### 14.3 Aturan Bottom Nav Spacer

```html
<!-- Untuk halaman dengan padding-bottom:0 (override) -->
<div style="height:calc(var(--nav-h) + 20px)"></div>

<!-- Untuk halaman tanpa override, CSS default otomatis: padding-bottom: 72px -->
```

---

## 15. Perubahan & Keputusan Desain

| Tanggal | Versi | Keputusan | Alasan |
|---|---|---|---|
| 2026-06-12 | v1 | `index.html` = role selector | Entry point langsung ke pilihan role |
| 2026-06-12 | v1 | Dashboard SK dipindah ke `home.html` | Pisahkan entry point dari konten role |
| 2026-06-12 | v1 | `welcome.html` sebagai splash screen | Branding sebelum login |
| 2026-06-12 | v1 | Demo Role Switcher dihapus | Tidak diperlukan setelah flow login benar |
| 2026-06-12 | v1 | Folder `ae/` dan `mgmt/` | Isolasi modul Sales Force & Executive |
| 2026-06-12 | v2 | **Unified bottom nav** (Beranda/Aktivitas/Notifikasi/Profil) | Konsistensi UX lintas role; semua modul masuk sub-menu Aktivitas |
| 2026-06-12 | v2 | **Training Mode** untuk AE | AE baru punya journey berbeda; progress 4 fase |
| 2026-06-12 | v2 | **Visual Timeline + Map View** kehadiran AE | Tracking lapangan berbasis GPS dengan rute harian |
| 2026-06-12 | v2 | **Prospect Health Score + Risk Indicator** | Prioritas follow up otomatis; kurangi lost prospect |
| 2026-06-12 | v2 | **Estimated Commission** di Beranda AE | Motivasi & transparansi insentif |
| 2026-06-12 | v2 | **Work Device & Company Asset** di Profil AE | Accountability aset lapangan |
| 2026-06-12 | v2 | **Loan Simulation** di modul Loan SK | Karyawan bisa hitung cicilan sebelum mengajukan |
| 2026-06-12 | v2 | **Logout → kembali ke Login Page** untuk semua role | Session management & security |
