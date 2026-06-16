# Business Requirement Document
# ESS — Workforce Digital Platform untuk Mitra AE

| **Versi**            | : 1.0                                    |
| -------------------- | ---------------------------------------- |
| **Tanggal**          | : 16 Juni 2026                           |
| **Dibuat**           | : Tim Desain & Produk WDP                |
| **Jenis**            | : BRD                                    |
| **Project Director** | : Pak Andika                             |
| **Audiens**          | : Direktur Operasional, Tim HC, Tim IT   |

---

# BAB 1
# Latar Belakang & Masalah Bisnis

## Latar Belakang Proyek

Mitra Account Executive (selanjutnya disebut Mitra AE) merupakan tulang punggung operasional akuisisi pelanggan pada perusahaan ISP. Mitra AE bertugas di lapangan secara langsung untuk melakukan canvasing, prospecting, presentasi produk, survey lokasi, follow up, hingga proses closing terhadap calon pelanggan. Keberhasilan pertumbuhan pelanggan perusahaan sangat ditentukan oleh kualitas, konsistensi, dan produktivitas aktivitas harian Mitra AE di lapangan.

Namun demikian, pada kondisi saat ini, seluruh ekosistem aktivitas Mitra AE belum didukung oleh satu platform terintegrasi yang dapat menjadi titik masuk tunggal bagi seluruh kebutuhan kerja AE. Aktivitas lapangan masih tercatat secara manual atau terpisah dalam berbagai sistem yang tidak terhubung. Data pipeline prospect — mulai dari Cold Prospect (CP), Warm Prospect (WP), Hot Prospect (HP), hingga Closing — dikelola secara terpisah oleh masing-masing AE tanpa standar pencatatan yang seragam. Akibatnya, Branch Leader maupun manajemen tidak dapat memantau kondisi pipeline dan progress target AE secara real time.

Di sisi pengembangan sumber daya, Mitra AE yang baru bergabung menjalani masa adaptasi tanpa jalur pembelajaran yang terstruktur dan terukur. Tidak ada sistem yang dapat memvalidasi bahwa seorang AE telah menyelesaikan seluruh materi pembelajaran, lulus ujian, dan memenuhi persyaratan aktivitas lapangan sebelum dinyatakan kompeten dan berstatus *Certified*. Proses onboarding yang tidak terstruktur ini berisiko menghasilkan AE yang terjun ke lapangan sebelum memiliki bekal pengetahuan dan keterampilan yang memadai, yang pada akhirnya berdampak pada kualitas interaksi dengan prospek dan tingkat closing yang rendah.

Dalam proses akuisisi pelanggan, kualitas prospect tidak selalu diperhatikan secara sistematis. AE cenderung berfokus pada kuantitas kunjungan tanpa mekanisme yang memandu mereka untuk menilai kualitas setiap prospect yang ditemui di lapangan. Tidak adanya indikator kualitas seperti Quality Prospect Score dan Closing Health Score menyebabkan AE sulit memahami di mana kelemahan pipeline mereka dan tindakan apa yang perlu diambil untuk memperbaikinya. Akibatnya, AE sering kali menghabiskan energi pada prospect yang memiliki kemungkinan closing rendah.

Dari sisi manajemen dan Branch Leader, tidak tersedianya dashboard monitoring real time membuat pengawasan terhadap produktivitas AE tidak dapat dilakukan secara efektif. Branch Leader harus mengandalkan laporan manual atau komunikasi langsung untuk mengetahui kondisi pipeline, progress target, aktivitas lapangan, dan status pembelajaran AE di bawah tanggung jawabnya. Kondisi ini memperlambat pengambilan keputusan, menghambat pembinaan AE berbasis data, dan mempersulit perencanaan kebutuhan sumber daya di tingkat branch.

Ketidaktersediaan data aktivitas lapangan yang terstruktur juga menjadi kendala bagi tim Business Intelligence (BI) dalam melakukan analisis produktivitas, efektivitas proses penjualan, serta perencanaan strategis. Data yang saat ini ada tersebar di berbagai sumber dengan format yang tidak konsisten, sehingga membutuhkan effort tambahan untuk dikumpulkan, dibersihkan, dan dianalisis. Hal ini memperlambat penyediaan insight kepada manajemen dan berpotensi menghasilkan keputusan yang tidak didasarkan pada data yang akurat.

Untuk menjawab seluruh tantangan di atas, dibutuhkan sebuah platform digital terintegrasi yang dirancang khusus sebagai *single entry point* bagi seluruh aktivitas Mitra AE. Platform ini, yang selanjutnya disebut **ESS (Employee Self Service) Workforce Digital Platform**, dirancang sebagai aplikasi mobile-first yang menggabungkan tiga dimensi utama dalam satu ekosistem: **Aktivitas Lapangan**, **Manajemen Pipeline**, dan **Learning & Development**. Ketiga dimensi ini saling terhubung dan saling menguatkan — keberhasilan AE tidak hanya diukur dari jumlah closing yang dihasilkan, tetapi dari kualitas prospek, konsistensi aktivitas lapangan, kedalaman pengetahuan produk, dan kemampuan membangun pelanggan yang sehat dengan risiko churn yang rendah.

ESS WDP dirancang dengan filosofi bahwa setiap informasi yang ditampilkan harus mendorong tindakan nyata. Dashboard bukan sekadar laporan pasif, melainkan alat navigasi aktif yang memandu AE untuk mengetahui apa yang harus dilakukan selanjutnya, mengapa hal tersebut penting, dan bagaimana cara melakukannya. Dengan pendekatan ini, ESS WDP diharapkan dapat menjadi katalisator peningkatan produktivitas Mitra AE secara menyeluruh dan berkelanjutan.

## Pernyataan Masalah (Problem Statement)

Operasional Mitra AE saat ini berlangsung tanpa dukungan platform digital terintegrasi. Seluruh aktivitas lapangan, pengelolaan pipeline prospect, pembelajaran, dan pelaporan dilakukan secara manual atau menggunakan tools yang tidak terhubung satu sama lain. Kondisi ini menyebabkan tidak adanya visibilitas real time terhadap produktivitas AE, tidak tersedianya jalur pembelajaran terstruktur untuk masa adaptasi, dan tidak adanya standar pencatatan aktivitas lapangan yang seragam di seluruh branch.

### Poin Permasalahan Utama

- **Belum tersedia single entry point untuk seluruh aktivitas AE**
  Mitra AE tidak memiliki satu platform yang dapat digunakan sebagai pusat seluruh kegiatan kerja harian. Aktivitas canvasing, prospecting, follow up, survey, presentasi, dan closing dikelola secara terpisah tanpa integrasi, sehingga AE harus berpindah antara berbagai media untuk mencatat dan memantau pekerjaannya.

- **Tidak ada sistem manajemen pipeline yang terstandarisasi**
  Status prospect mulai dari Cold Prospect, Warm Prospect, Hot Prospect, hingga Closing belum tercatat dalam sistem yang seragam. Masing-masing AE mencatat dengan cara dan format berbeda, sehingga data pipeline tidak dapat digunakan untuk monitoring terpusat atau analisis konversi secara akurat.

- **Tidak ada mekanisme untuk mengukur kualitas prospect dan kualitas closing**
  AE belum memiliki indikator yang dapat membantu mereka menilai kualitas prospect yang dimiliki dan kesehatan proses closing yang dilakukan. Tanpa Quality Prospect Score dan Closing Health Score, AE tidak dapat mengetahui di mana kelemahan pipeline mereka dan tindakan apa yang perlu diambil.

- **Belum ada jalur pembelajaran terstruktur untuk AE baru**
  Masa adaptasi AE baru berlangsung tanpa kurikulum yang jelas dan terukur. Tidak ada sistem yang memastikan AE telah memahami product knowledge, SOP penjualan, teknik komunikasi, dan kemampuan lapangan sebelum dinyatakan siap beroperasi secara mandiri.

- **Tidak ada mekanisme sertifikasi berbasis kompetensi**
  Transisi status AE dari *Adaptation* menjadi *Certified* tidak didasarkan pada pencapaian kompetensi yang terukur. Tidak ada sistem yang menggabungkan penyelesaian materi pembelajaran, hasil ujian, dan pemenuhan persyaratan aktivitas lapangan sebagai syarat sertifikasi.

- **Tidak ada keterkaitan antara aktivitas lapangan dan progress pembelajaran**
  Sistem pembelajaran AE (jika ada) berjalan terpisah dari aktivitas lapangan. Tidak ada mekanisme yang menghubungkan jumlah kunjungan lapangan, keikutsertaan dalam join visit, join presentasi, dan join survey dengan kemajuan program adaptasi AE.

- **Branch Leader tidak dapat melakukan monitoring real time**
  Tanpa dashboard yang terintegrasi, Branch Leader tidak dapat memantau aktivitas harian AE, posisi kandidat dalam pipeline, progres target bulanan, dan kemajuan program adaptasi secara langsung. Pengawasan bergantung pada laporan manual yang seringkali tidak up-to-date.

- **Data aktivitas lapangan tidak dapat dimanfaatkan untuk analisis**
  Tidak adanya pencatatan aktivitas lapangan yang terstruktur menyebabkan perusahaan kehilangan data penting yang dapat digunakan untuk menganalisis pola produktivitas AE, efektivitas canvasing, conversion rate pipeline, dan faktor-faktor yang mempengaruhi keberhasilan closing.

### Rumusan Masalah — Fakta, Masalah, dan Dampak

**Fakta:**
Mitra AE beroperasi sebagai ujung tombak akuisisi pelanggan tanpa dukungan platform digital terintegrasi. Aktivitas lapangan, pengelolaan pipeline, pembelajaran, dan pelaporan dilakukan secara manual dengan standar yang berbeda-beda antar individu dan antar branch. Tidak ada satu pun sistem yang menghubungkan ketiga dimensi kinerja AE — aktivitas lapangan, kualitas pipeline, dan kompetensi — dalam satu ekosistem yang terukur.

**Masalah:**
Ketidaktersediaan platform terintegrasi menyebabkan AE bekerja tanpa panduan tindakan yang jelas, Branch Leader kehilangan visibilitas terhadap kondisi lapangan, manajemen tidak memiliki data yang dapat diandalkan untuk pengambilan keputusan, dan proses pengembangan kompetensi AE tidak berjalan secara terstruktur. Pembelajaran tidak terhubung dengan aktivitas lapangan, sehingga tidak ada mekanisme yang memastikan bahwa AE menerapkan ilmu yang dipelajari dalam pekerjaan nyata di lapangan.

**Dampak:**
Kondisi tersebut berpotensi menghasilkan AE yang tidak siap secara kompetensi, tingkat konversi pipeline yang rendah akibat pendekatan penjualan yang tidak terstandarisasi, pelanggan dengan kualitas rendah yang memiliki risiko churn tinggi, serta ketidakmampuan perusahaan untuk melakukan evaluasi dan perbaikan proses penjualan secara berbasis data. Dalam jangka panjang, tanpa ekosistem digital yang mendukung AE secara holistik, pertumbuhan akuisisi pelanggan akan berjalan lambat dan tidak scalable.

### Pernyataan Masalah Utama

Berdasarkan kondisi di atas, permasalahan utama yang perlu diselesaikan adalah **belum adanya platform digital terintegrasi yang dapat menjadi single entry point bagi seluruh aktivitas Mitra AE, menghubungkan manajemen pipeline prospect, pembelajaran berbasis kompetensi, aktivitas lapangan terverifikasi, dan monitoring kinerja dalam satu ekosistem yang memberikan panduan tindakan nyata kepada AE setiap hari**.

Tanpa platform ini, operasional Mitra AE akan terus berjalan tanpa standar yang seragam, tanpa data yang dapat dianalisis, dan tanpa mekanisme yang memastikan pertumbuhan kompetensi seiring dengan pertumbuhan kinerja penjualan. Oleh karena itu, dibutuhkan solusi berupa ESS Workforce Digital Platform — aplikasi mobile-first yang mengintegrasikan dimensi Aktivitas Lapangan, Manajemen Pipeline, Learning & Development, dan Monitoring Kinerja dalam satu platform yang mudah digunakan dan memberikan nilai nyata bagi AE setiap harinya.

---

## Stakeholders & RACI+ Matrix

Bagian ini menjelaskan seluruh pihak yang terlibat dalam proyek pengembangan ESS Workforce Digital Platform untuk Mitra AE, beserta peran dan tanggung jawab masing-masing. RACI+ digunakan untuk memastikan setiap aktivitas memiliki pemilik yang jelas dan setiap pihak memahami kontribusinya dalam keberhasilan proyek.

| Role / Stakeholder         | Responsible | Accountable | Consulted | Informed | Reviewer | Approval |
| -------------------------- | ----------- | ----------- | --------- | -------- | -------- | -------- |
| **Direktur & IT Manager**  | Mengarahkan kesiapan teknis, keamanan data, dan prioritas pengembangan platform. | Bertanggung jawab atas kesiapan infrastruktur teknologi dan implementasi sistem. | Memberi masukan terkait feasibility teknis, keamanan data, integrasi sistem, dan timeline IT. | Menerima update progres development, risiko teknis, dan readiness go-live. | Meninjau desain teknis, arsitektur sistem, dan kesiapan deployment. | Menyetujui scope teknis, keputusan deployment, dan go-live dari sisi IT. |
| **Direktur Operasional / Sales** | Memberikan arahan strategis terkait proses penjualan AE dan standar kinerja. | Bertanggung jawab atas keselarasan platform dengan strategi akuisisi pelanggan. | Memberi masukan terkait alur pipeline, standar target, indikator kinerja, dan proses lapangan. | Menerima update progres proyek, hasil UAT, dan evaluasi implementasi. | Meninjau kesesuaian fitur dengan kebutuhan operasional lapangan. | Menyetujui BRD, alur pipeline, dan go-live dari sisi operasional bisnis. |
| **Manager HC / Branch Manager** | Mengelola program adaptasi AE, kurikulum pembelajaran, dan standar sertifikasi. | Bertanggung jawab sebagai pemilik proses onboarding dan pengembangan kompetensi AE. | Memberi masukan terkait alur pembelajaran, fase adaptasi, indikator sertifikasi, dan kebutuhan field requirement. | Menerima update requirement, hasil development, testing, dan feedback user. | Meninjau BRD, kurikulum learning, hasil UAT, dan kesiapan operasional. | Menyetujui requirement, hasil UAT, SOP, dan kesiapan penggunaan sistem. |
| **Branch Leader**          | Memantau aktivitas dan kinerja AE di bawah tanggung jawabnya melalui platform. | Bertanggung jawab atas produktivitas dan perkembangan Mitra AE di branch. | Memberi masukan terkait kebutuhan monitoring harian, join visit/presentasi/survey, dan coaching AE. | Menerima informasi perubahan alur, training penggunaan platform, dan go-live. | Meninjau kesesuaian fitur monitoring dengan kebutuhan operasional branch. | Mengonfirmasi kesiapan penggunaan platform di level branch. |
| **Mitra AE (End User)**    | Menggunakan platform sebagai single entry point seluruh aktivitas kerja harian. | Bertanggung jawab atas kelengkapan dan akurasi data yang diinput ke sistem. | Memberi masukan terkait kebutuhan fitur harian, kemudahan penggunaan, dan hambatan di lapangan. | Menerima informasi perubahan fitur, training, dan go-live. | Meninjau kesesuaian fitur dengan aktivitas lapangan nyata pada saat UAT. | Mengonfirmasi kesiapan penggunaan platform sebagai tools kerja utama. |
| **Tim IT**                 | Membangun fitur, workflow status, role access, testing teknis, dan deployment. | Bertanggung jawab atas implementasi teknis sesuai requirement yang disepakati. | Memberi masukan terkait estimasi effort, dependensi sistem, risiko teknis, dan batasan aplikasi. | Menerima requirement final, perubahan scope, hasil UAT, dan target go-live. | Meninjau kualitas teknis, testing, dan kesiapan deployment. | Memberikan technical sign-off sebelum UAT dan go-live. |
| **Tim BI / Data Analytics** | Memastikan struktur data platform dapat mendukung kebutuhan analisis dan pelaporan. | Bertanggung jawab atas validitas dan usabilitas data yang dihasilkan platform. | Memberi masukan terkait struktur data, definisi metrik, dan kebutuhan reporting. | Menerima update struktur data, perubahan schema, dan kesiapan data untuk analisis. | Meninjau kesiapan data recruitment dan pipeline untuk kebutuhan dashboard analitik. | Mengonfirmasi bahwa struktur data platform sudah sesuai untuk kebutuhan analisis. |

---

## Kendala & Asumsi (Constraints & Assumptions)

### Kendala (Constraints)

| No | Kendala | Penjelasan | Dampak terhadap Proyek |
| -- | ------- | ---------- | ---------------------- |
| 1 | Platform harus mobile-first | Mitra AE beroperasi di lapangan menggunakan smartphone sebagai perangkat utama. | Seluruh fitur harus dirancang dan dioptimalkan untuk tampilan dan interaksi mobile (layar kecil, satu tangan, koneksi tidak stabil). |
| 2 | Keterbatasan koneksi internet di lapangan | Tidak semua area canvasing memiliki koneksi internet yang stabil. | Perlu mempertimbangkan skenario offline atau penyimpanan data lokal yang disinkronkan saat koneksi tersedia kembali. |
| 3 | Dua status AE yang berbeda secara fundamental | Platform harus mendukung dua kondisi pengguna: AE berstatus Adaptation (masa pelatihan) dan AE berstatus Certified (operasional penuh). | Beberapa fitur dan konten harus dikonfigurasi secara berbeda berdasarkan status AE, termasuk konten Learning Center yang berubah setelah Certified. |
| 4 | Kurikulum pembelajaran harus disusun sebelum development | Konten fase, modul, materi, dan soal kuis harus tersedia sebelum fitur learning dibangun. | Timeline development tergantung pada kesiapan konten dari tim HC. |
| 5 | Ketergantungan pada kapasitas Tim IT | Pengembangan fitur bergantung pada prioritas, resource, dan timeline Tim IT. | Timeline implementasi dapat berubah jika terdapat prioritas development lain. |
| 6 | Data historis aktivitas AE belum terstandarisasi | Data aktivitas lapangan yang ada saat ini belum dalam format yang konsisten. | Migrasi data historis membutuhkan proses cleansing terlebih dahulu dan mungkin tidak sepenuhnya dapat dimigrasi. |
| 7 | Keamanan dan kerahasiaan data prospek | Data prospek berisi informasi pribadi dan data bisnis yang perlu dikelola secara aman. | Sistem perlu menerapkan akses berbasis role, enkripsi data, dan pembatasan informasi sesuai kebutuhan. |
| 8 | Ruang lingkup fase awal perlu dibatasi | Tidak semua kebutuhan dapat dibangun dalam satu fase pengembangan. | Perlu menentukan prioritas fitur MVP (Minimum Viable Product) yang memberikan nilai tertinggi lebih dahulu. |

### Asumsi (Assumptions)

| No | Asumsi | Penjelasan | Risiko Jika Asumsi Tidak Terpenuhi |
| -- | ------ | ---------- | ----------------------------------- |
| 1 | Seluruh stakeholder tersedia untuk validasi | Direktur Operasional, Manager HC, Branch Leader, dan Tim IT dapat memberikan masukan sesuai jadwal proyek. | Requirement dapat terlambat disetujui dan berdampak pada mundurnya timeline development. |
| 2 | Mitra AE memiliki smartphone yang layak | Setiap Mitra AE diasumsikan memiliki atau mendapatkan smartphone dengan spesifikasi minimum yang dapat menjalankan platform. | Jika tidak, diperlukan program pengadaan perangkat atau penyesuaian spesifikasi minimum aplikasi. |
| 3 | Alur pipeline CP→WP→HP→Closing sudah disepakati | Tahapan pipeline penjualan dan definisi setiap status sudah final dan disepakati oleh tim operasional. | Jika alur berubah, requirement dan desain sistem perlu disesuaikan ulang. |
| 4 | Kurikulum fase adaptasi (Phase 1–4) sudah tersedia | Konten materi, modul, kuis, dan final exam sudah disiapkan oleh tim HC sebelum development learning dimulai. | Jika konten belum tersedia, fitur learning tidak dapat sepenuhnya diuji dan diluncurkan. |
| 5 | Indikator kinerja AE sudah disepakati | Target CP, WP, HP, dan Closing per periode sudah ditentukan oleh manajemen sebagai basis fitur Next Milestone. | Jika target belum ditetapkan, fitur motivational insight tidak dapat dikonfigurasi dengan tepat. |
| 6 | Field requirement untuk sertifikasi sudah final | Jumlah minimum Join Visit, Join Presentasi, Join Survey, dan Canvasing Mandiri sebagai syarat Certified sudah disepakati HC. | Jika syarat berubah, mekanisme sertifikasi perlu dikonfigurasi ulang. |
| 7 | Mitra AE akan menggunakan platform sebagai sumber utama data | Setelah go-live, pencatatan seluruh aktivitas AE dilakukan melalui platform, bukan media manual atau tools terpisah lainnya. | Jika platform digunakan paralel dengan media manual tanpa kontrol, risiko inkonsistensi data tetap terjadi. |
| 8 | Data platform akan digunakan untuk analisis BI | Struktur data disiapkan dari awal agar dapat mendukung kebutuhan reporting dan dashboard analitik. | Jika kebutuhan BI tidak dilibatkan sejak awal, output data mungkin tidak sesuai untuk analisis. |

---

# BAB 2
# Kebutuhan Bisnis & Solusi

## Ruang Lingkup (Scope)

| Kategori | In Scope | Out of Scope |
| -------- | -------- | ------------ |
| **Dashboard Beranda — Performance Tab** | Next Milestone dengan insight tindakan dan CTA, Task Priority harian, Quick Actions, Pipeline Funnel CP→WP→HP→Closing dengan conversion rate, Quality Metrics (Quality Prospect Score & Closing Health Score), Achievement bulanan. | Dashboard BI lanjutan dengan predictive analytics, automated insight berbasis AI, atau benchmark industri. |
| **Dashboard Beranda — Learning Tab** | Learning & Adaptation Journey (progress fase dan persentase keseluruhan), Phase Progress expandable, Module Detail dengan status per modul, Final Exam per fase, Field Adaptation Requirement dengan progress real time, Syarat Certified, Learning Center setelah status Certified. | Pembuatan konten pembelajaran secara otomatis oleh AI, platform ujian terpisah, atau integrasi LMS eksternal. |
| **Status AE** | Dua kondisi status AE: Adaptation (selama masa pelatihan) dan Certified (setelah semua syarat terpenuhi). Transisi status otomatis oleh sistem saat semua persyaratan terpenuhi. | Status tambahan atau sub-status yang lebih granular (misal: Probation, Senior, Expert) pada fase pertama. |
| **Aktivitas Harian Lapangan** | Check-in dan Check-out harian dengan pencatatan waktu, monitoring durasi canvasing, tracking jarak tempuh lapangan. | Integrasi GPS real time yang menampilkan rute atau peta pergerakan AE secara live kepada Branch Leader. |
| **Manajemen Pipeline Prospect** | Input dan update prospect baru, perubahan status prospect (CP→WP→HP→Closing), pencatatan data prospect, monitoring funnel per AE. | Manajemen kontrak pelanggan, billing, aktivasi layanan, atau CRM pelanggan aktif pasca-closing. |
| **Follow Up** | Pencatatan follow up prospect, monitoring overdue follow up, daftar prospect yang belum dihubungi, riwayat follow up per prospect. | Integrasi otomatis dengan aplikasi WhatsApp, email automation, atau kalender digital pihak ketiga. |
| **Survey** | Pencatatan jadwal survey, update status survey, monitoring survey yang belum dijadwalkan, riwayat survey per prospect. | Pembuatan laporan survei teknis lapangan atau integrasi dengan sistem OSP (Outside Plant). |
| **Presentasi** | Pencatatan jadwal presentasi, status presentasi (dijadwalkan/selesai), dan catatan hasil presentasi. | Fitur pembuatan slide presentasi digital atau streaming materi presentasi ke layar prospek. |
| **Canvasing** | Pencatatan aktivitas canvasing mandiri, tracking jumlah canvasing, integrasi dengan syarat field adaptation learning. | Fitur peta area canvasing, heatmap coverage, atau penugasan area canvasing berbasis GPS. |
| **Learning Management — Konten** | Halaman materi per sub-modul, progress materi individual, tanda selesai per materi, navigasi antar materi dalam satu modul. | Pembuatan konten materi secara dinamis oleh TA/HC melalui CMS dalam platform (fase pertama konten di-hardcode atau dikelola terpisah). |
| **Learning Management — Kuis & Ujian** | Quiz per modul (locked sampai materi selesai), Final Exam per fase (locked sampai semua modul dan kuis selesai), timer kuis, navigasi soal, feedback jawaban, nilai akhir. | Platform pembuatan soal kuis secara mandiri oleh HC/TA melalui admin panel pada fase pertama. |
| **Field Adaptation Requirement** | Tracking Join Visit, Join Presentasi, Join Survey, dan Canvasing Mandiri sebagai persyaratan field adaptation. Progress ditampilkan secara real time di Learning Tab. | Validasi otomatis kehadiran berdasarkan GPS saat Join Visit/Presentasi/Survey. |
| **Sertifikasi AE** | Mekanisme sertifikasi berbasis penyelesaian: semua fase selesai, semua kuis lulus, semua Final Exam lulus, semua field requirement terpenuhi. Transisi status Adaptation → Certified otomatis oleh sistem. | Penerbitan sertifikat fisik atau digital berbasis PDF secara otomatis dari sistem. |
| **Learning Center (pasca-Certified)** | Setelah Certified, Learning Tab bertransformasi menjadi area pembelajaran berkelanjutan yang berisi: Product Update, Promo Update, SOP Update, Coverage Update, Knowledge Base, Best Practice, FAQ, Studi Kasus, Panduan Teknis. | Kurikulum lanjutan berbasis AI yang disesuaikan secara personal untuk setiap AE berdasarkan data kinerjanya. |
| **Notifikasi** | Notifikasi dalam aplikasi untuk pengingat tugas prioritas, update status prospect, pengingat follow up overdue, dan informasi penting dari Branch Leader. | Push notification berbasis SMS atau integrasi WhatsApp Business API pada fase pertama. |
| **Profil AE** | Informasi identitas AE, data branch, Branch Leader, perangkat kerja, aset perusahaan, pengaturan akun, dan logout. | Fitur edit data profil mandiri oleh AE (perubahan data dikontrol oleh admin/HC). |
| **Akses & Role** | Role dasar: Mitra AE (end user lapangan), Branch Leader (monitoring), Manager HC (administrasi learning & sertifikasi), Tim IT (support teknis dan admin). | Role access kompleks multi-level atau konfigurasi permission granular per fitur pada fase pertama. |
| **Testing & UAT** | Pengujian fitur dan UAT bersama user AE, Branch Leader, dan HC sebelum go-live. | Penetration testing skala besar atau audit keamanan eksternal. |
| **Training Pengguna** | Sosialisasi dan training penggunaan platform untuk Mitra AE, Branch Leader, dan stakeholder terkait. | Program change management berskala besar lintas seluruh organisasi. |

---

## Tujuan Bisnis (SMART Goals)

**Membangun single entry point digital untuk seluruh aktivitas Mitra AE**

Tujuan utama proyek ini adalah menyediakan satu platform yang dapat digunakan AE sebagai pusat seluruh aktivitas kerja harian, mulai dari aktivitas lapangan, pengelolaan pipeline, pembelajaran, hingga monitoring kinerja. Dengan satu platform, AE tidak perlu lagi berpindah antara berbagai tools yang terpisah.

Tujuan ini **specific** karena menjelaskan dengan jelas platform apa yang dibangun dan untuk siapa. Ini **measurable** karena dapat dilihat dari tersedianya fitur-fitur inti yang mencakup seluruh aktivitas AE dalam satu aplikasi. Secara **achievable**, pengembangan dapat dilakukan bertahap dengan memprioritaskan fitur aktivitas lapangan dan pipeline terlebih dahulu. Ini **relevant** karena langsung menjawab masalah tidak adanya platform terpadu. Secara **time-bound**, fitur inti ditargetkan tersedia pada fase awal implementasi.

**Meningkatkan visibilitas dan kualitas manajemen pipeline Mitra AE**

Proyek ini bertujuan memastikan setiap AE memiliki panduan tindakan yang jelas terhadap pipeline prospect mereka. Fitur Next Milestone, Pipeline Funnel dengan conversion rate, dan Quality Metrics dirancang untuk membantu AE memahami di mana posisi mereka, apa yang perlu dilakukan selanjutnya, dan bagaimana kualitas pipeline mereka dibandingkan target.

Tujuan ini **specific** karena fokus pada peningkatan kualitas manajemen pipeline melalui fitur-fitur konkret. Ini **measurable** karena dapat dilihat dari peningkatan conversion rate antar tahap pipeline dan penurunan jumlah prospect yang tidak ter-follow up. Ini **achievable** karena fitur pipeline dan insight dapat dibangun berdasarkan data yang diinput AE. Ini **relevant** karena manajemen pipeline yang baik adalah kunci peningkatan closing rate. Secara **time-bound**, fitur pipeline ditargetkan tersedia bersamaan dengan dashboard beranda pada fase awal.

**Membangun jalur pembelajaran terstruktur dan terukur untuk AE baru**

Proyek ini menyediakan kurikulum adaptasi berbasis fase (Phase 1–4) yang menggabungkan pembelajaran materi, kuis, final exam, dan field requirement dalam satu jalur yang terstruktur. AE dapat memantau progres pembelajaran mereka secara mandiri dan mengetahui apa yang perlu diselesaikan untuk maju ke fase berikutnya.

Tujuan ini **specific** karena menjelaskan struktur pembelajaran yang akan dibangun (4 fase, modul, kuis, field requirement). Ini **measurable** karena dapat dilihat dari persentase AE yang menyelesaikan setiap fase tepat waktu. Ini **achievable** karena sistem dapat dibangun bertahap sesuai konten yang disiapkan HC. Ini **relevant** karena AE yang kompeten menghasilkan kualitas interaksi dan closing yang lebih baik. Secara **time-bound**, fitur learning dasar ditargetkan tersedia pada fase implementasi awal.

**Menghubungkan pembelajaran dengan aktivitas lapangan nyata**

ESS WDP dirancang untuk memastikan bahwa proses pembelajaran AE tidak berhenti di tingkat teori, tetapi terhubung secara langsung dengan aktivitas lapangan. Field Adaptation Requirement (Join Visit, Join Presentasi, Join Survey, Canvasing Mandiri) menjadi syarat yang harus dipenuhi bersamaan dengan penyelesaian materi pembelajaran sebelum AE dapat dinyatakan Certified.

Tujuan ini **specific** karena menjelaskan mekanisme konkret penghubungan learning dan lapangan. Ini **measurable** karena dapat dilihat dari terpenuhinya field requirement oleh setiap AE sebelum sertifikasi. Ini **achievable** karena tracking field requirement dapat terintegrasi dengan modul aktivitas lapangan. Ini **relevant** karena menjawab kebutuhan bahwa kompetensi AE dibuktikan di lapangan, bukan hanya di kelas. Secara **time-bound**, integrasi ini ditargetkan tersedia bersamaan dengan fitur sertifikasi.

**Menyediakan mekanisme sertifikasi berbasis kompetensi yang terstandarisasi**

Platform menyediakan mekanisme transisi status Mitra AE dari *Adaptation* menjadi *Certified* yang didasarkan pada pencapaian komprehensif: penyelesaian semua fase pembelajaran, kelulusan semua kuis dan final exam, serta pemenuhan semua field requirement. Transisi status dilakukan otomatis oleh sistem ketika semua syarat terpenuhi.

Tujuan ini **specific** karena mendefinisikan dengan jelas syarat sertifikasi dan mekanisme transisi statusnya. Ini **measurable** karena dapat dilihat dari jumlah AE yang berhasil mencapai status Certified dalam periode adaptasi yang ditentukan. Ini **achievable** karena mekanisme validasi dapat dibangun berdasarkan data yang sudah tersedia di sistem. Ini **relevant** karena sertifikasi berbasis kompetensi memastikan kualitas AE yang masuk ke operasional mandiri. Secara **time-bound**, fitur sertifikasi ditargetkan tersedia setelah fitur learning dan field tracking selesai dibangun.

**Mendukung monitoring Branch Leader berbasis data**

Platform menyediakan informasi yang cukup bagi Branch Leader untuk memantau kondisi AE di bawah tanggung jawabnya, termasuk aktivitas lapangan harian, posisi pipeline, progress target, dan kemajuan pembelajaran. Informasi ini memungkinkan Branch Leader untuk melakukan coaching yang tepat sasaran berdasarkan data aktual.

Tujuan ini **specific** karena berfokus pada kebutuhan Branch Leader dalam memantau AE. Ini **measurable** karena dapat dilihat dari berkurangnya waktu yang dibutuhkan Branch Leader untuk mengetahui kondisi timnya. Ini **achievable** karena data yang dibutuhkan Branch Leader berasal dari aktivitas AE yang sudah tercatat di platform. Ini **relevant** karena pengawasan berbasis data meningkatkan efektivitas pembinaan AE. Secara **time-bound**, fitur monitoring Branch Leader ditargetkan tersedia pada fase implementasi awal bersama dashboard beranda.

**Mendukung kebutuhan analisis Business Intelligence**

Platform dirancang agar seluruh data yang dihasilkan — data pipeline, aktivitas lapangan, progress learning, conversion rate, dan achievement — dapat digunakan untuk kebutuhan reporting dan analisis BI. Standardisasi data dari awal akan memungkinkan BI menghasilkan insight yang akurat tanpa effort cleansing yang besar.

Tujuan ini **specific** karena berfokus pada kesiapan data platform untuk analisis BI. Ini **measurable** karena dapat dilihat dari ketersediaan data terstruktur yang dapat langsung digunakan untuk laporan. Ini **achievable** karena struktur data dan definisi metrik disepakati sejak awal. Ini **relevant** karena insight berbasis data dibutuhkan manajemen untuk evaluasi dan perencanaan. Secara **time-bound**, kualitas data dapat dievaluasi setelah platform beroperasi dalam satu periode penuh.

---

## KPI / Metrik Keberhasilan (OKR)

### Objective 1: Mitra AE menggunakan ESS WDP sebagai single entry point seluruh aktivitas kerja

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 1.1 | Minimal 90% Mitra AE aktif melakukan check-in harian melalui platform. |
| KR 1.2 | Minimal 80% aktivitas lapangan (canvasing, follow up, survey, presentasi, closing) dicatat melalui platform. |
| KR 1.3 | Tidak ada pencatatan aktivitas utama AE yang dilakukan di luar platform setelah go-live. |
| KR 1.4 | Platform digunakan sebagai referensi utama AE dalam menentukan prioritas tindakan harian. |
| KR 1.5 | Tingkat penggunaan aktif platform minimal 5 hari per minggu per AE. |

### Objective 2: Meningkatkan kualitas manajemen pipeline Mitra AE

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 2.1 | Conversion rate CP→WP meningkat minimal 5% setelah 3 bulan implementasi. |
| KR 2.2 | Jumlah prospect overdue (tidak ter-follow up > 3 hari) berkurang minimal 30%. |
| KR 2.3 | Seluruh data pipeline prospect tercatat dengan status yang standar di platform. |
| KR 2.4 | Quality Prospect Score rata-rata AE meningkat setelah 3 bulan implementasi. |
| KR 2.5 | AE dapat melihat Next Milestone dan mengambil tindakan berdasarkan insight yang ditampilkan. |

### Objective 3: Menstandarisasi proses pembelajaran dan adaptasi AE baru

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 3.1 | Tersedia 4 fase pembelajaran (Fundamental, Communication, Sales Process, Field Adaptation) di platform. |
| KR 3.2 | Minimal 80% AE baru menyelesaikan Phase 1 dalam 2 minggu pertama bergabung. |
| KR 3.3 | Seluruh materi, kuis, dan final exam dapat diakses dan diselesaikan melalui platform. |
| KR 3.4 | Progres pembelajaran setiap AE dapat dipantau oleh Branch Leader dan Manager HC. |
| KR 3.5 | Tingkat kelulusan final exam per fase minimal 85%. |

### Objective 4: Menghubungkan pembelajaran dengan aktivitas lapangan secara nyata

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 4.1 | Progress field requirement (Join Visit, Join Presentasi, Join Survey, Canvasing Mandiri) tercatat real time di platform. |
| KR 4.2 | AE tidak dapat mendapatkan status Certified tanpa memenuhi seluruh field requirement. |
| KR 4.3 | Minimal 80% AE dalam masa adaptasi aktif melaksanakan field requirement yang tertera di platform. |
| KR 4.4 | Branch Leader dapat memantau progress field requirement setiap AE di bawah tanggung jawabnya. |

### Objective 5: Mewujudkan mekanisme sertifikasi berbasis kompetensi yang terstandarisasi

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 5.1 | Tersedia mekanisme validasi sertifikasi yang mencakup: penyelesaian semua fase, kelulusan semua kuis & final exam, dan pemenuhan semua field requirement. |
| KR 5.2 | Transisi status Adaptation → Certified dilakukan otomatis oleh sistem saat semua syarat terpenuhi. |
| KR 5.3 | Rata-rata waktu AE mencapai status Certified dapat diukur dan dievaluasi. |
| KR 5.4 | Tidak ada AE yang berstatus Certified tanpa memenuhi seluruh persyaratan yang ditetapkan. |

### Objective 6: Mendukung monitoring dan coaching Branch Leader berbasis data

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 6.1 | Branch Leader dapat melihat aktivitas harian dan progress pipeline setiap AE di bawah tanggung jawabnya. |
| KR 6.2 | Branch Leader dapat memantau progress learning dan field requirement setiap AE. |
| KR 6.3 | Waktu yang dibutuhkan Branch Leader untuk mengetahui kondisi timnya berkurang secara signifikan. |
| KR 6.4 | Branch Leader menggunakan data dari platform sebagai dasar sesi coaching AE. |

### Objective 7: Mendukung kebutuhan analisis Business Intelligence

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 7.1 | Data pipeline, aktivitas lapangan, dan learning memiliki struktur yang konsisten dan dapat digunakan untuk analisis. |
| KR 7.2 | Tersedia data conversion rate CP→WP→HP→Closing per AE dan per branch. |
| KR 7.3 | Tersedia data aktivitas lapangan (check-in, canvasing, durasi, jarak) per AE. |
| KR 7.4 | Effort data cleansing oleh BI berkurang karena data sudah distandarkan sejak input di platform. |
| KR 7.5 | Tersedia data durasi masa adaptasi dan tingkat kelulusan pembelajaran per batch AE. |

### Ringkasan KPI Utama

| Area Keberhasilan | KPI Utama |
| ----------------- | --------- |
| Adopsi Platform | Minimal 90% AE aktif menggunakan platform sebagai tools utama kerja harian. |
| Kualitas Pipeline | Conversion rate CP→WP meningkat dan jumlah prospect overdue berkurang minimal 30%. |
| Pembelajaran Terstruktur | Minimal 80% AE baru menyelesaikan Phase 1 dalam 2 minggu pertama. |
| Field Adaptation | Progress field requirement tercatat real time dan menjadi syarat sertifikasi yang tidak bisa dilewati. |
| Sertifikasi Terstandarisasi | 100% AE Certified telah memenuhi seluruh syarat yang ditentukan oleh platform. |
| Monitoring Branch Leader | Branch Leader dapat memantau seluruh kondisi AE tanpa memerlukan laporan manual. |
| Data untuk BI | Data platform tersedia dalam struktur konsisten untuk reporting tanpa cleansing tambahan. |

---

# BAB 3
# Analisis Proses Bisnis

Analisis proses bisnis disesuaikan dengan seluruh ruang lingkup fitur yang ada pada ESS Workforce Digital Platform untuk Mitra AE. Analisis mencakup gambaran proses utama, aturan bisnis, dan analisis risiko beserta mitigasinya.

## Gambaran Umum Proses Bisnis (High Level)

### Proses Onboarding Mitra AE Baru

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE baru didaftarkan ke sistem | Tim HC / Admin | HC membuat akun AE baru di platform dengan data identitas, branch, dan Branch Leader. |
| 2 | AE menerima akun dan melakukan login pertama | Mitra AE | AE masuk ke platform untuk pertama kali dengan kredensial yang diberikan HC. |
| 3 | Sistem menampilkan status Adaptation | Sistem | AE baru secara otomatis mendapatkan status *Adaptation* sejak login pertama. |
| 4 | AE diarahkan ke Learning Tab | Sistem | Platform menampilkan panduan awal untuk memulai Learning Journey dari Phase 1 — Fundamental. |
| 5 | Branch Leader dikonfirmasi sebagai pembimbing | Sistem / HC | Platform menghubungkan AE baru dengan Branch Leader yang bertanggung jawab atas monitoring dan bimbingannya. |
| 6 | AE mulai mengakses materi Phase 1 | Mitra AE | AE membuka dan mempelajari modul-modul dalam Phase 1 — Fundamental. |
| 7 | AE mulai mencatat aktivitas lapangan pertama | Mitra AE | AE melakukan check-in dan mencatat aktivitas canvasing pertamanya melalui platform. |

### Proses Aktivitas Harian Mitra AE di Lapangan

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE melakukan check-in | Mitra AE | AE membuka platform dan melakukan check-in di awal hari kerja. Sistem mencatat waktu check-in. |
| 2 | AE memeriksa Dashboard Beranda — Tab Performance | Mitra AE | AE melihat Next Milestone untuk mengetahui target terdekat yang belum terpenuhi beserta insight tindakan dan CTA. |
| 3 | AE memeriksa Tugas Prioritas Hari Ini | Mitra AE | AE melihat daftar tugas prioritas: follow up overdue, survey belum dijadwalkan, presentasi hari ini, prospect baru. |
| 4 | AE menentukan rencana aktivitas hari ini | Mitra AE | Berdasarkan panduan dari platform, AE menentukan urutan aktivitas yang akan dilakukan di lapangan. |
| 5 | AE melakukan canvasing | Mitra AE | AE melakukan kunjungan door-to-door mencari prospect baru. Aktivitas dicatat melalui fitur Canvasing. |
| 6 | AE menemukan prospect baru (CP) | Mitra AE | AE menginput data prospect baru ke dalam sistem dengan status Cold Prospect. |
| 7 | AE melakukan follow up prospect | Mitra AE | AE mencatat aktivitas follow up dan mengubah status prospect yang sesuai (CP → WP jika ada ketertarikan). |
| 8 | AE menjadwalkan dan melakukan survey | Mitra AE | AE mencatat jadwal survey, melaksanakan survey lokasi, dan mengupdate status. |
| 9 | AE melakukan presentasi produk | Mitra AE | AE mencatat jadwal presentasi, melaksanakan presentasi, dan mencatat hasil presentasi. |
| 10 | AE mengubah status prospect menjadi HP | Mitra AE | Prospect yang sudah disurvey dan dipresentasikan diubah statusnya menjadi Hot Prospect. |
| 11 | AE melakukan closing | Mitra AE | AE mencatat proses closing dan mengubah status prospect menjadi Closing. |
| 12 | AE melakukan check-out | Mitra AE | Di akhir hari kerja, AE melakukan check-out. Sistem mencatat waktu check-out, durasi, dan jarak tempuh. |
| 13 | Platform merekap aktivitas harian | Sistem | Sistem menyimpan seluruh data aktivitas harian sebagai histori yang dapat digunakan untuk monitoring dan reporting. |

### Proses Manajemen Pipeline Prospect

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE menginput prospect baru | Mitra AE | AE menginput data calon pelanggan baru yang ditemui di lapangan dengan status awal Cold Prospect (CP). |
| 2 | Sistem mencatat prospect di pipeline | Sistem | Sistem menambahkan prospect ke dalam pipeline AE dan menghitung jumlah CP terkini. |
| 3 | AE melakukan kualifikasi prospect | Mitra AE | AE menghubungi dan menggali kebutuhan prospect. Jika ada ketertarikan, status diubah ke Warm Prospect (WP). |
| 4 | AE melakukan survey lokasi | Mitra AE | AE menjadwalkan dan melakukan survey lokasi untuk WP yang sudah siap disurvey. Status diupdate. |
| 5 | AE melakukan presentasi produk | Mitra AE | AE mempresentasikan produk kepada WP. Jika prospect tertarik dan siap closing, status diubah ke Hot Prospect (HP). |
| 6 | AE melakukan negosiasi dan follow up HP | Mitra AE | AE melakukan follow up intensif terhadap HP untuk mendorong keputusan pembelian. |
| 7 | AE melakukan closing | Mitra AE | Prospect yang setuju berlangganan diubah statusnya menjadi Closing. Data closing dicatat di sistem. |
| 8 | Platform menampilkan update Pipeline Funnel | Sistem | Dashboard Pipeline Funnel diperbarui secara real time, menampilkan conversion rate antar tahap terkini. |
| 9 | Sistem menghitung Quality Prospect Score | Sistem | Sistem menghitung Quality Prospect Score berdasarkan kualitas data dan pola aktivitas pada setiap prospect. |
| 10 | Sistem menghitung Closing Health Score | Sistem | Sistem menghitung Closing Health Score berdasarkan kualitas proses dari prospect hingga closing. |
| 11 | Platform memperbarui Next Milestone | Sistem | Sistem mengidentifikasi target terdekat yang belum terpenuhi dan memperbarui insight pada Next Milestone. |
| 12 | AE mengambil tindakan berdasarkan insight | Mitra AE | AE menekan CTA yang relevan ("Cari Prospect Baru", "Lanjutkan Follow Up") untuk melanjutkan aktivitas. |

### Proses Learning & Adaptation Journey

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE membuka Learning Tab | Mitra AE | AE mengakses tab Learning dari Dashboard Beranda untuk melihat progres pembelajaran. |
| 2 | Sistem menampilkan Learning & Adaptation Journey | Sistem | Platform menampilkan progress keseluruhan (fase saat ini / total fase / persentase). |
| 3 | AE memilih fase aktif | Mitra AE | AE membuka fase yang sedang berjalan (misalnya Phase 2 — Communication) untuk melihat detail modul. |
| 4 | AE membuka modul yang aktif | Mitra AE | AE memilih modul yang sedang dalam status In Progress (misalnya Handling Objection). |
| 5 | AE mempelajari materi modul | Mitra AE | AE membaca dan memahami materi yang tersedia di setiap sub-modul. |
| 6 | AE menandai materi sebagai selesai | Mitra AE | Setelah selesai membaca, AE menandai materi sebagai selesai. Sistem memperbarui progress modul. |
| 7 | AE mengerjakan kuis modul | Mitra AE | Setelah semua materi dalam modul selesai, kuis modul terbuka. AE mengerjakan kuis dengan batas waktu. |
| 8 | Sistem mengevaluasi hasil kuis | Sistem | Sistem menampilkan hasil kuis dan menentukan apakah AE lulus atau perlu mengulang. |
| 9 | AE melanjutkan ke modul berikutnya | Mitra AE | Setelah kuis modul lulus, modul berikutnya terbuka dan AE dapat melanjutkan pembelajaran. |
| 10 | AE menyelesaikan semua modul dalam satu fase | Mitra AE | Setelah semua modul dan kuis dalam satu fase selesai, Final Exam fase tersebut terbuka. |
| 11 | AE mengerjakan Final Exam fase | Mitra AE | AE mengerjakan Final Exam dengan batas waktu dan minimum nilai kelulusan. |
| 12 | Sistem memperbarui progress fase | Sistem | Jika Final Exam lulus, sistem menandai fase sebagai Selesai dan membuka fase berikutnya. |

### Proses Field Adaptation Requirement

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE melihat Field Adaptation Requirement | Mitra AE | AE membuka Learning Tab dan melihat progress field requirement pada bagian Field Adaptation Requirement. |
| 2 | Branch Leader mengajak AE Join Visit | Branch Leader / Mitra AE | Branch Leader mengajak AE untuk menemani kunjungan lapangan (join visit) sebagai bagian dari pembelajaran praktis. |
| 3 | Aktivitas Join Visit dicatat | Branch Leader / Sistem | Aktivitas Join Visit dicatat di sistem dan progress Join Visit AE bertambah (contoh: 3/5). |
| 4 | Branch Leader mengajak AE Join Presentasi | Branch Leader / Mitra AE | AE ikut serta dalam presentasi produk bersama Branch Leader. Aktivitas dicatat. Progress bertambah (contoh: 1/3). |
| 5 | AE ikut serta dalam Join Survey | Branch Leader / Mitra AE | AE mendampingi Branch Leader dalam proses survey lokasi. Aktivitas dicatat. Progress bertambah (contoh: 2/3). |
| 6 | AE melakukan Canvasing Mandiri | Mitra AE | AE melakukan canvasing secara mandiri sesuai target. Setiap canvasing yang dicatat menambah progress (contoh: 40/100). |
| 7 | Sistem menampilkan progress real time | Sistem | Seluruh progress field requirement ditampilkan secara real time di Learning Tab AE. |
| 8 | AE memenuhi semua field requirement | Mitra AE | Semua indikator field requirement (Join Visit, Join Presentasi, Join Survey, Canvasing Mandiri) mencapai target. |

### Proses Sertifikasi AE (Adaptation → Certified)

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Sistem memantau seluruh syarat sertifikasi | Sistem | Platform secara otomatis memantau status pemenuhan seluruh syarat Certified pada setiap AE. |
| 2 | AE menyelesaikan Phase 1 — Fundamental | Mitra AE / Sistem | Semua modul, kuis, dan final exam Phase 1 selesai. Sistem menandai Phase 1 sebagai Selesai. |
| 3 | AE menyelesaikan Phase 2 — Communication | Mitra AE / Sistem | Semua modul, kuis, dan final exam Phase 2 selesai. Sistem menandai Phase 2 sebagai Selesai. |
| 4 | AE menyelesaikan Phase 3 — Sales Process | Mitra AE / Sistem | Semua modul, kuis, dan final exam Phase 3 selesai. Sistem menandai Phase 3 sebagai Selesai. |
| 5 | AE menyelesaikan Phase 4 — Field Adaptation | Mitra AE / Sistem | Semua modul, kuis, dan final exam Phase 4 selesai. Sistem menandai Phase 4 sebagai Selesai. |
| 6 | Semua kuis modul dinyatakan lulus | Sistem | Sistem memvalidasi bahwa seluruh kuis di semua modul semua fase sudah lulus. |
| 7 | Semua Final Exam dinyatakan lulus | Sistem | Sistem memvalidasi bahwa seluruh Final Exam dari semua fase sudah lulus dengan nilai minimum yang ditetapkan. |
| 8 | Semua field requirement terpenuhi | Sistem | Sistem memvalidasi bahwa Join Visit, Join Presentasi, Join Survey, dan Canvasing Mandiri sudah mencapai target. |
| 9 | Sistem mengubah status AE menjadi Certified | Sistem | Ketika semua syarat terpenuhi, sistem secara otomatis mengubah status AE dari Adaptation menjadi Certified. |
| 10 | Learning Tab bertransformasi menjadi Learning Center | Sistem | Setelah status Certified, Learning Tab tidak lagi menampilkan Adaptation Journey, melainkan Learning Center untuk pengembangan berkelanjutan. |
| 11 | HC dan Branch Leader menerima notifikasi | Sistem | Sistem mengirimkan notifikasi ke HC dan Branch Leader bahwa AE terkait telah mencapai status Certified. |

### Proses Monitoring oleh Branch Leader

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Branch Leader membuka platform | Branch Leader | Branch Leader masuk ke platform untuk memantau kondisi AE di bawah tanggung jawabnya. |
| 2 | Branch Leader melihat daftar AE | Branch Leader / Sistem | Sistem menampilkan daftar Mitra AE yang berada di bawah branch terkait beserta status dan ringkasan kinerja. |
| 3 | Branch Leader melihat aktivitas harian AE | Branch Leader | Branch Leader dapat melihat siapa yang sudah check-in, aktivitas apa yang sedang dilakukan, dan jam berapa. |
| 4 | Branch Leader melihat progress pipeline per AE | Branch Leader | Branch Leader dapat memeriksa pipeline setiap AE: jumlah CP, WP, HP, dan Closing serta posisi terhadap target. |
| 5 | Branch Leader melihat progress learning per AE | Branch Leader | Branch Leader dapat memantau fase yang sedang dijalani, persentase progress, dan status field requirement setiap AE. |
| 6 | Branch Leader mengidentifikasi AE yang perlu pembinaan | Branch Leader | Berdasarkan data, Branch Leader menentukan AE mana yang membutuhkan coaching atau bantuan. |
| 7 | Branch Leader melakukan join activity bersama AE | Branch Leader | Aktivitas join visit, join presentasi, atau join survey dicatat untuk memenuhi field requirement AE. |
| 8 | Branch Leader memperbarui catatan pembinaan | Branch Leader | Branch Leader mencatat hasil coaching atau catatan perkembangan AE di sistem. |

### Proses Dashboard Beranda — Tab Performance

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE membuka Dashboard Beranda | Mitra AE | AE membuka tab Performance (default) di Dashboard Beranda. |
| 2 | Sistem menampilkan Next Milestone | Sistem | Platform mengidentifikasi metrik pipeline yang paling dekat dengan target namun belum terpenuhi, menampilkan insight tindakan dan dua CTA utama. |
| 3 | AE membaca insight dan memilih tindakan | Mitra AE | AE membaca insight ("Butuh 4 WP lagi untuk target bulan ini") dan menekan CTA yang relevan. |
| 4 | Sistem menampilkan Tugas Prioritas Hari Ini | Sistem | Platform menampilkan daftar tugas yang perlu diselesaikan hari ini, lengkap dengan indikator prioritas dan tombol aksi langsung per tugas. |
| 5 | AE mengambil tindakan dari tugas prioritas | Mitra AE | AE menekan tombol aksi ("Hubungi →", "Jadwalkan →", "Mulai →") untuk langsung mengerjakan tugas. |
| 6 | Sistem menampilkan Quick Actions | Sistem | Grid Aksi Cepat menampilkan 6 shortcut: Canvasing, Prospecting, Survey, Presentasi, Follow Up, dan Closing. |
| 7 | AE menggunakan Quick Actions untuk navigasi cepat | Mitra AE | AE menekan salah satu tombol aksi cepat untuk langsung masuk ke fitur yang dibutuhkan. |
| 8 | AE membaca Pipeline Funnel | Mitra AE | AE melihat visualisasi funnel CP→WP→HP→Closing beserta conversion rate antar tahap untuk memahami kesehatan pipelinenya. |
| 9 | AE membaca Quality Metrics | Mitra AE | AE melihat Quality Prospect Score dan Closing Health Score untuk memahami kualitas pipeline dibandingkan standar. |
| 10 | AE melihat Achievement bulan berjalan | Mitra AE | Di bagian bawah, AE melihat pencapaian bulan ini: jumlah closing, revenue, dan estimasi komisi. |

### Proses Dashboard Beranda — Tab Learning

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE beralih ke Tab Learning | Mitra AE | AE menekan tab Learning dari Dashboard Beranda. |
| 2 | Sistem menampilkan Learning & Adaptation Journey | Sistem | Platform menampilkan ringkasan: fase saat ini, total fase, dan persentase progress keseluruhan. |
| 3 | AE melihat daftar fase | Mitra AE | AE melihat 4 fase pembelajaran dengan status masing-masing (Selesai / In Progress / Terkunci). |
| 4 | AE membuka fase aktif | Mitra AE | AE mengetuk fase yang sedang In Progress untuk melihat detail modul di dalamnya. |
| 5 | AE melihat daftar modul dalam fase | Mitra AE | Modul ditampilkan dengan status (Selesai / In Progress / Terkunci) dan persentase masing-masing. |
| 6 | AE menekan tombol CTA untuk melanjutkan | Mitra AE | Tombol "Lanjutkan — [nama modul aktif]" membawa AE langsung ke halaman modul yang sedang dikerjakan. |
| 7 | Sistem menampilkan Field Adaptation Requirement | Sistem | Di bawah fase, platform menampilkan 4 indikator field requirement dengan progress bar masing-masing. |
| 8 | AE melihat Syarat Menjadi Certified | Mitra AE | Bagian bawah Learning Tab menampilkan checklist lengkap syarat Certified dengan status terkini setiap syarat. |

### Proses Akses Learning Center (Setelah Certified)

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | AE berstatus Certified membuka Tab Learning | Mitra AE | AE yang sudah Certified membuka tab Learning di Dashboard Beranda. |
| 2 | Sistem menampilkan Learning Center | Sistem | Learning Tab bertransformasi menjadi Learning Center — tidak lagi menampilkan Adaptation Journey. |
| 3 | AE mengakses konten Learning Center | Mitra AE | AE dapat mengakses konten pengembangan berkelanjutan: Product Update, Promo Update, SOP Update, Coverage Update, Knowledge Base, Best Practice, FAQ, Studi Kasus, dan Panduan Teknis. |
| 4 | AE memperbarui pengetahuan produk dan kebijakan | Mitra AE | AE secara rutin mengakses Learning Center untuk tetap update dengan informasi terbaru yang relevan dengan pekerjaan lapangan. |
| 5 | HC memperbarui konten Learning Center | Tim HC | HC mengelola dan memperbarui konten di Learning Center secara berkala sesuai perkembangan produk, promo, dan kebijakan. |

---

## Aturan Bisnis ESS Workforce Digital Platform

| No | Kategori | Aturan Bisnis | Keterangan |
| -- | -------- | ------------- | ---------- |
| 1 | Status AE | Setiap Mitra AE hanya memiliki dua status: Adaptation atau Certified. | Status Adaptation diberikan secara otomatis sejak AE pertama kali login. Status Certified diperoleh setelah memenuhi semua syarat yang ditentukan. |
| 2 | Status AE | Status Certified tidak dapat diberikan secara manual oleh HC atau Branch Leader. | Sistem hanya mengubah status AE menjadi Certified setelah seluruh validasi syarat terpenuhi secara otomatis. |
| 3 | Dashboard Beranda | Tab Performance adalah tab default yang ditampilkan saat AE membuka Dashboard Beranda. | AE dapat beralih ke Tab Learning dengan mengetuk tab yang tersedia. |
| 4 | Next Milestone | Sistem secara otomatis mengidentifikasi metrik pipeline (CP/WP/HP/Closing) yang memiliki gap terbesar terhadap target dalam persentase dan menampilkannya sebagai Next Milestone. | Next Milestone diperbarui setiap kali ada perubahan data pipeline AE. |
| 5 | Pipeline Funnel | Conversion rate antar tahap dihitung otomatis oleh sistem: CP→WP = (jumlah WP / jumlah CP) × 100%, WP→HP = (jumlah HP / jumlah WP) × 100%, HP→Closing = (jumlah Closing / jumlah HP) × 100%. | Data conversion rate digunakan untuk menampilkan insight kesehatan pipeline kepada AE. |
| 6 | Pipeline — Status Prospect | Status prospect mengikuti urutan CP → WP → HP → Closing. Perpindahan status hanya dapat dilakukan secara berurutan. | Sistem membatasi perpindahan status prospect agar tidak melompat tahapan tanpa alasan yang tercatat. |
| 7 | Check-in / Check-out | AE hanya dapat melakukan satu check-in dan satu check-out per hari. | Sistem mencatat waktu check-in, waktu check-out, durasi total aktivitas, dan jarak tempuh pada hari tersebut. |
| 8 | Learning — Urutan Akses | Modul dalam satu fase harus diselesaikan secara berurutan. Modul berikutnya terbuka hanya setelah modul sebelumnya selesai. | Sistem mengunci modul yang belum dapat diakses dan menampilkan status "Terkunci" pada modul tersebut. |
| 9 | Learning — Kuis Modul | Kuis Modul hanya dapat dikerjakan setelah semua sub-materi dalam modul tersebut selesai dibaca dan ditandai selesai. | Sistem memvalidasi status semua materi sebelum membuka akses ke kuis modul. |
| 10 | Learning — Final Exam | Final Exam suatu fase hanya dapat dikerjakan setelah semua modul dan semua kuis dalam fase tersebut selesai dan lulus. | Sistem memvalidasi bahwa semua kuis modul dalam fase terkait sudah lulus sebelum membuka Final Exam. |
| 11 | Learning — Timer | Setiap kuis modul dan final exam memiliki batas waktu pengerjaan yang ditetapkan. Jika waktu habis, sistem menghentikan ujian dan memproses jawaban yang sudah diisi. | Timer berjalan secara real time dan tidak dapat dijeda oleh AE. |
| 12 | Learning — Nilai Minimum | Final Exam memiliki nilai minimum kelulusan yang ditetapkan (contoh: minimal 75 dari 100). AE yang tidak mencapai nilai minimum harus mengulang Final Exam. | Sistem menampilkan nilai yang diperoleh AE dan status lulus atau tidak lulus setelah ujian selesai. |
| 13 | Learning — Urutan Fase | Fase berikutnya hanya terbuka setelah fase sebelumnya dinyatakan selesai (semua modul, kuis, dan final exam lulus). | Sistem mengunci fase yang belum dapat diakses dan menampilkan status "Terkunci". |
| 14 | Field Adaptation Requirement | Progress field requirement (Join Visit, Join Presentasi, Join Survey, Canvasing Mandiri) dicatat secara real time setiap kali aktivitas terkait dilakukan dan diverifikasi. | Sistem memperbarui indikator progress secara otomatis tanpa input manual dari AE. |
| 15 | Sertifikasi | AE hanya dapat menjadi Certified jika memenuhi semua syarat berikut secara bersamaan: semua fase pembelajaran selesai, semua kuis modul lulus, semua final exam lulus, dan semua field requirement terpenuhi. | Jika satu syarat belum terpenuhi, sistem tidak akan mengubah status AE menjadi Certified. |
| 16 | Learning Center | Konten Learning Center hanya dapat diakses oleh AE berstatus Certified. | AE berstatus Adaptation tidak melihat Learning Center di Learning Tab, melainkan Adaptation Journey. |
| 17 | Quick Actions | Tombol Quick Actions (Canvasing, Prospecting, Survey, Presentasi, Follow Up, Closing) mengarahkan AE langsung ke halaman fitur terkait tanpa perlu navigasi tambahan. | Quick Actions tersedia di Tab Performance untuk memastikan setiap aksi dapat dilakukan dengan satu ketukan. |
| 18 | Tugas Prioritas | Sistem secara otomatis menentukan dan menampilkan tugas prioritas harian berdasarkan data: follow up overdue (> 3 hari tidak dihubungi), survey yang belum dijadwalkan, presentasi yang sudah terjadwal hari ini, dan prospect baru yang belum dihubungi. | Setiap tugas prioritas memiliki CTA langsung yang membawa AE ke tindakan yang relevan. |
| 19 | Profil AE | Data profil utama AE (identitas, branch, Branch Leader, perangkat kerja) tidak dapat diubah sendiri oleh AE. | Perubahan data profil dilakukan melalui permintaan ke HC atau admin sistem. |
| 20 | Achievement | Data Achievement (Closing, Revenue, Komisi) ditampilkan untuk periode bulan berjalan. Data diperbarui secara otomatis ketika ada prospect yang berhasil masuk ke tahap Closing. | Komisi yang ditampilkan bersifat estimasi dan dapat berbeda dengan perhitungan final dari sistem penggajian. |
| 21 | Notifikasi | Sistem mengirimkan notifikasi in-app untuk: follow up prospect yang overdue, tugas prioritas yang belum diselesaikan, dan informasi penting dari Branch Leader atau HC. | Jumlah notifikasi yang belum dibaca ditampilkan sebagai badge pada ikon Notifikasi di bottom navigation. |
| 22 | Bottom Navigation | Bottom navigation hanya memiliki empat item: Beranda, Aktivitas, Notifikasi, dan Profil. | Fitur tambahan di luar empat menu utama dapat diakses melalui Quick Actions atau navigasi dalam masing-masing halaman. |
| 23 | Audit Trail | Setiap perubahan status prospect, update aktivitas lapangan, dan perubahan progress learning tersimpan sebagai histori. | Histori mencakup waktu perubahan, PIC, status sebelumnya, dan status baru. |
| 24 | Akses Data | Data pipeline dan aktivitas AE hanya dapat dilihat oleh AE yang bersangkutan, Branch Leader yang bertanggung jawab, dan Manager HC. | Tim IT mendapatkan akses terbatas untuk keperluan support teknis tanpa dapat melihat data bisnis sensitif. |
| 25 | Duplikasi Data | Sistem mencegah input prospect yang sama (berdasarkan identitas atau nomor telepon) lebih dari satu kali oleh satu AE. | AE mendapatkan peringatan jika prospect yang diinput sudah pernah tercatat sebelumnya. |

---

## Analisis Risiko & Mitigasi

| No | Risiko | Penyebab | Dampak | Tingkat Risiko | Mitigasi | PIC |
| -- | ------ | -------- | ------ | -------------- | -------- | --- |
| 1 | AE tidak mengadopsi platform sebagai tools utama | Kebiasaan kerja manual sulit diubah; platform dianggap membebani dibanding cara lama | Aktivitas tetap dicatat manual, data tidak tersedia, tujuan integrasi tidak tercapai | Tinggi | Training intensif, desain UX yang sangat mudah dan cepat digunakan (≤ 3 detik dipahami), pendampingan Branch Leader selama masa adopsi awal | Branch Leader, Tim HC, Tim IT |
| 2 | Konten pembelajaran (materi, kuis, final exam) belum siap saat go-live | Tim HC belum menyiapkan kurikulum dan soal ujian sesuai jadwal development | Fitur Learning tidak dapat diluncurkan sesuai rencana | Tinggi | Menyusun kurikulum dan konten pembelajaran secara paralel dengan development platform; menetapkan deadline konten sebelum development fitur learning dimulai | Tim HC |
| 3 | Koneksi internet tidak stabil di area canvasing | Beberapa area lapangan memiliki sinyal yang lemah atau tidak tersedia | AE tidak dapat menginput data real time; aktivitas tidak tercatat | Tinggi | Menyediakan fitur penyimpanan offline yang menyinkronkan data secara otomatis saat koneksi kembali tersedia | Tim IT |
| 4 | Data pipeline tidak diperbarui secara konsisten oleh AE | AE lupa atau menunda update status prospect setelah aktivitas lapangan | Pipeline Funnel tidak mencerminkan kondisi aktual; Next Milestone tidak akurat | Tinggi | Membuat reminder otomatis, menyederhanakan alur update status (minimal tap), dan menjadikan update status sebagai bagian dari alur check-out harian | Tim IT, Branch Leader |
| 5 | Kualitas data prospect tidak sesuai standar | AE menginput data tidak lengkap atau tidak akurat karena tidak ada validasi | Quality Prospect Score tidak akurat; analisis BI tidak dapat diandalkan | Sedang | Menerapkan mandatory field pada form input prospect, validasi format nomor telepon dan data penting, serta memberikan feedback langsung jika data tidak lengkap | Tim IT, Tim HC |
| 6 | Field requirement tidak terverifikasi secara akurat | Join Visit/Presentasi/Survey tidak dapat diverifikasi tanpa kehadiran fisik yang terkonfirmasi | AE dapat memanipulasi data field requirement; sertifikasi tidak mencerminkan kompetensi nyata | Tinggi | Verifikasi field requirement dilakukan oleh Branch Leader yang memberikan konfirmasi kehadiran AE; sistem mencatat nama Branch Leader sebagai verifikator | Branch Leader, Tim HC |
| 7 | AE lulus sertifikasi namun kompetensi lapangan masih lemah | Sistem hanya memvalidasi penyelesaian materi dan field requirement secara kuantitatif, bukan kualitas | AE berstatus Certified namun kinerja penjualan tidak meningkat signifikan | Sedang | Menambahkan evaluasi kualitatif oleh Branch Leader sebagai salah satu komponen rekomendasi sertifikasi; melakukan review periodik AE Certified | Branch Leader, Tim HC |
| 8 | Fitur Next Milestone menampilkan metrik yang tidak relevan | Algoritma penentuan milestone tidak mempertimbangkan konteks periode atau prioritas bisnis | AE mendapatkan panduan tindakan yang tidak tepat sasaran | Sedang | Mendefinisikan logika prioritas milestone secara jelas bersama tim operasional sebelum development; melakukan testing skenario dengan data riil | Tim IT, Direktur Operasional |
| 9 | Sync data antara modul aktivitas lapangan dan field requirement tidak akurat | Bug atau keterlambatan pembaruan data lintas modul | Progress field requirement tidak mencerminkan aktivitas nyata AE | Sedang | Melakukan testing integrasi antar modul secara menyeluruh sebelum go-live; menyediakan mekanisme rekonsiliasi data jika terjadi perbedaan | Tim IT |
| 10 | Learning Center tidak dimanfaatkan AE yang sudah Certified | AE menganggap tidak ada motivasi untuk mengakses Learning Center setelah sertifikasi | Pengembangan berkelanjutan tidak terjadi; pengetahuan AE stagnan | Sedang | Membuat notifikasi berkala untuk konten baru di Learning Center; menjadikan pengetahuan produk terkini sebagai bagian dari evaluasi kinerja AE | Branch Leader, Tim HC |
| 11 | Timeline development mundur akibat kapasitas IT terbatas | Terlalu banyak prioritas development yang berjalan bersamaan | Go-live terlambat; proses manual berlangsung lebih lama | Tinggi | Menentukan MVP dengan prioritas fitur utama (Dashboard, Pipeline, Learning dasar); menetapkan timeline realistis dengan checkpoint rutin | Direktur & IT Manager, Tim IT, Tim HC |
| 12 | Requirement berubah di tengah proses development | Stakeholder memiliki kebutuhan tambahan atau perubahan prioritas setelah BRD disetujui | Scope creep; fitur yang sudah dibangun perlu direvisi | Tinggi | Melakukan validasi requirement secara menyeluruh sebelum development dimulai; menerapkan change control process untuk setiap perubahan scope | Manager HC, Direktur Operasional, Tim IT |
| 13 | Keamanan data prospect dan data AE | Platform menyimpan data bisnis sensitif (data prospect, data pipeline, data pribadi AE) | Risiko kebocoran data, penyalahgunaan informasi, dan risiko kepatuhan | Tinggi | Menerapkan role-based access control, enkripsi data, audit trail, dan pembatasan akses sesuai kebutuhan role; melakukan review keamanan sebelum go-live | Direktur & IT Manager, Tim IT |
| 14 | Branch Leader tidak menggunakan platform untuk monitoring | Branch Leader lebih nyaman dengan cara monitoring konvensional | Data dari lapangan tidak dapat dikonfirmasi; field requirement tidak terverifikasi | Sedang | Training khusus Branch Leader; menyederhanakan tampilan monitoring; menunjukkan nilai langsung yang didapat dari menggunakan platform | Tim HC, Branch Leader |
| 15 | Data dari platform tidak dapat dimanfaatkan untuk analisis BI | Struktur data tidak sesuai kebutuhan analisis sejak awal | Data perlu cleansing besar sebelum dapat dianalisis; insight terlambat | Sedang | Melibatkan tim BI sejak tahap perencanaan untuk mendefinisikan struktur data dan metrik yang dibutuhkan | Tim BI, Tim IT, Tim HC |
| 16 | Tingkat kelulusan Final Exam sangat rendah | Materi terlalu sulit, kuis tidak sesuai dengan materi yang diajarkan, atau AE tidak siap | AE tidak dapat maju ke fase berikutnya; proses adaptasi terhambat | Sedang | Melakukan review kesesuaian soal dengan materi; menyediakan fitur retake ujian dengan jumlah percobaan yang ditetapkan; Branch Leader mendampingi AE yang kesulitan | Tim HC, Branch Leader |
| 17 | Platform lambat atau tidak responsif di perangkat AE dengan spesifikasi rendah | Animasi atau konten yang terlalu berat untuk smartphone entry-level | AE frustrasi dan enggan menggunakan platform | Sedang | Melakukan performance testing di berbagai spesifikasi perangkat; mengoptimalkan aset gambar dan animasi; menetapkan spesifikasi minimum perangkat yang didukung | Tim IT |

---

*Dokumen ini merupakan Business Requirement Document versi 1.0 untuk ESS Workforce Digital Platform — Mitra AE. Seluruh requirement, scope, dan proses bisnis yang tercantum di atas didasarkan pada analisis desain mockup dan kebutuhan operasional Mitra AE pada perusahaan ISP. Dokumen ini perlu divalidasi dan disetujui oleh seluruh stakeholder sebelum proses development dimulai.*
