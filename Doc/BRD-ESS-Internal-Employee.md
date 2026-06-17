# Business Requirement Document
# ESS — Workforce Digital Platform untuk Internal Employee (Staff Kontrak)

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

Internal Employee atau Staff Kontrak merupakan tulang punggung operasional back-office dan dukungan layanan pada perusahaan ISP. Mereka bertugas di berbagai departemen seperti operasional, layanan pelanggan, teknis, keuangan, dan administrasi. Kesejahteraan, kehadiran, hak cuti, dan akses terhadap fasilitas seperti pinjaman karyawan merupakan aspek penting yang mempengaruhi produktivitas dan loyalitas karyawan.

Namun demikian, pada kondisi saat ini, seluruh proses administrasi kepegawaian bagi Staff Kontrak masih berjalan secara manual atau melalui berbagai media yang tidak terintegrasi. Karyawan tidak memiliki satu platform yang dapat digunakan sebagai pusat informasi dan pengajuan kebutuhan mereka. Permintaan cuti dilakukan via WhatsApp tanpa jejak yang terdokumentasi, pencatatan kehadiran masih dilakukan secara manual di level supervisor, dan pengajuan pinjaman karyawan memerlukan koordinasi antar departemen yang tidak terstandarisasi.

Kondisi ini tidak hanya menimbulkan beban administratif yang tinggi bagi tim Human Capital (HC), tetapi juga menciptakan pengalaman karyawan yang tidak konsisten, kurangnya transparansi terhadap hak-hak karyawan seperti saldo cuti dan status pinjaman, serta tidak adanya audit trail yang dapat diandalkan untuk kebutuhan pelaporan dan kepatuhan.

Untuk menjawab kebutuhan ini, ESS Workforce Digital Platform untuk Internal Employee dirancang sebagai aplikasi mobile-first yang memberikan karyawan kemampuan untuk mengelola kebutuhan administrasi kepegawaian mereka secara mandiri — mulai dari pemantauan kehadiran, pengajuan izin dan cuti, hingga pengajuan dan pemantauan pinjaman karyawan — dalam satu platform yang terintegrasi, transparan, dan mudah digunakan.

## Pernyataan Masalah (Problem Statement)

Proses administrasi kepegawaian bagi Staff Kontrak saat ini berlangsung tanpa dukungan platform digital terintegrasi. Karyawan tidak memiliki akses mandiri terhadap informasi kepegawaian mereka sendiri, dan setiap proses pengajuan bergantung pada koordinasi manual yang rentan terhadap kesalahan dan keterlambatan.

### Poin Permasalahan Utama

- **Tidak ada single entry point untuk kebutuhan administrasi karyawan**
  Karyawan harus menggunakan berbagai media berbeda untuk kebutuhan yang berbeda — WhatsApp untuk izin cuti, form fisik untuk pinjaman, dan bertanya langsung ke HC untuk informasi kehadiran. Tidak ada satu platform terpadu yang dapat melayani semua kebutuhan ini.

- **Pencatatan kehadiran tidak terintegrasi dan sulit diverifikasi**
  Data kehadiran karyawan tidak tersedia secara real time bagi karyawan itu sendiri maupun atasan langsung. Rekap kehadiran bulanan dilakukan secara manual, rentan terhadap kesalahan pencatatan, dan tidak memiliki audit trail yang jelas.

- **Proses pengajuan izin dan cuti tidak terdokumentasi**
  Pengajuan izin dan cuti melalui WhatsApp atau komunikasi lisan tidak menghasilkan dokumen yang dapat diaudit. Persetujuan atau penolakan tidak tercatat, saldo cuti tidak transparan, dan karyawan tidak memiliki visibilitas terhadap status pengajuan mereka.

- **Tidak ada transparansi saldo cuti bagi karyawan**
  Karyawan seringkali tidak mengetahui saldo cuti mereka yang tersisa. Hal ini menyebabkan pengajuan yang tidak valid dan kebutuhan HC untuk melakukan verifikasi manual setiap kali ada pengajuan cuti.

- **Pengajuan dan pemantauan pinjaman karyawan tidak terstandarisasi**
  Tidak ada sistem yang membantu karyawan menghitung kelayakan pinjaman, mensimulasikan cicilan, dan memantau status pengajuan serta riwayat pinjaman mereka. Proses validasi melibatkan multiple pihak (HC dan FAT) tanpa alur yang terdokumentasi.

- **Atasan langsung tidak memiliki visibilitas terhadap kondisi tim**
  Supervisor tidak memiliki dashboard yang menampilkan kondisi kehadiran, pengajuan yang menunggu persetujuan, dan ringkasan administrasi tim mereka secara real time.

- **Beban administratif HC yang tinggi akibat proses manual**
  Tim HC menghabiskan waktu signifikan untuk memproses pengajuan yang masuk melalui berbagai kanal, memvalidasi kelayakan pinjaman secara manual, dan menghasilkan laporan kehadiran dari data yang tersebar.

### Rumusan Masalah — Fakta, Masalah, dan Dampak

**Fakta:**
Staff Kontrak beroperasi tanpa platform administrasi kepegawaian yang terintegrasi. Seluruh proses pengajuan, persetujuan, dan pemantauan dilakukan secara manual melalui komunikasi langsung atau media tidak resmi. Tidak ada satu pun sistem yang menghubungkan data kehadiran, hak cuti, dan fasilitas pinjaman karyawan dalam satu ekosistem yang terukur.

**Masalah:**
Ketiadaan platform terintegrasi menyebabkan karyawan tidak memiliki visibilitas terhadap hak-hak kepegawaian mereka, proses administrasi bergantung pada koordinasi manual yang lambat dan rentan kesalahan, dan HC tidak dapat melakukan monitoring serta pelaporan berbasis data secara efisien.

**Dampak:**
Proses administrasi yang lambat dan tidak transparan menurunkan kepuasan karyawan, meningkatkan risiko ketidakpatuhan terhadap kebijakan cuti dan pinjaman, mempersulit audit kepegawaian, dan menguras kapasitas tim HC untuk tugas-tugas strategis yang lebih bernilai.

### Pernyataan Masalah Utama

Permasalahan utama yang perlu diselesaikan adalah **belum adanya platform digital terintegrasi yang memberikan Staff Kontrak akses mandiri terhadap informasi dan layanan kepegawaian mereka — kehadiran, izin & cuti, dan pinjaman karyawan — serta menyediakan alur pengajuan dan persetujuan yang terstandarisasi, terdokumentasi, dan transparan bagi seluruh pihak yang terlibat**.

---

## Stakeholders & RACI Matrix

| Role / Stakeholder         | Responsible | Accountable | Consulted | Informed | Reviewer | Approval |
| -------------------------- | ----------- | ----------- | --------- | -------- | -------- | -------- |
| **Direktur & IT Manager**  | Mengarahkan kesiapan teknis dan keamanan data. | Bertanggung jawab atas kesiapan infrastruktur dan implementasi. | Memberi masukan terkait feasibility teknis dan keamanan. | Menerima update progres dan risiko teknis. | Meninjau desain teknis dan kesiapan deployment. | Menyetujui scope teknis dan go-live dari sisi IT. |
| **Direktur Operasional / HR** | Memberikan arahan strategis kebijakan kepegawaian. | Bertanggung jawab atas keselarasan platform dengan kebijakan HR. | Memberi masukan terkait kebijakan cuti, pinjaman, dan kehadiran. | Menerima update progres dan hasil UAT. | Meninjau kesesuaian fitur dengan kebijakan HR. | Menyetujui BRD dan go-live dari sisi operasional. |
| **Manager HC / Comben**    | Mengelola kebijakan cuti, pinjaman, dan validasi kepegawaian. | Bertanggung jawab sebagai pemilik proses administrasi kepegawaian. | Memberi masukan terkait alur persetujuan, eligibilitas pinjaman, dan saldo cuti. | Menerima update requirement, hasil testing, dan go-live. | Meninjau BRD, alur kerja, dan hasil UAT. | Menyetujui requirement dan kesiapan operasional sistem. |
| **FAT (Finance)**          | Memvalidasi pengajuan pinjaman dari sisi keuangan. | Bertanggung jawab atas validasi kelayakan finansial pinjaman karyawan. | Memberi masukan terkait batas eksposur pinjaman dan dampak terhadap payroll. | Menerima notifikasi pengajuan pinjaman yang menunggu validasi. | Meninjau kesesuaian alur validasi pinjaman. | Memberikan persetujuan final pengajuan pinjaman. |
| **Atasan Langsung (Supervisor)** | Memantau kehadiran tim dan menyetujui pengajuan izin/cuti. | Bertanggung jawab atas persetujuan awal izin dan cuti tim. | Memberi masukan terkait kebutuhan monitoring kehadiran dan fitur persetujuan. | Menerima notifikasi pengajuan yang perlu ditindaklanjuti. | Meninjau kesesuaian fitur monitoring dengan kebutuhan operasional. | Mengonfirmasi kesiapan penggunaan platform di level tim. |
| **Staff Kontrak (End User)** | Menggunakan platform untuk kebutuhan administrasi kepegawaian mandiri. | Bertanggung jawab atas keakuratan data yang diinput ke sistem. | Memberi masukan terkait kebutuhan fitur dan kemudahan penggunaan. | Menerima informasi perubahan fitur, training, dan go-live. | Meninjau kesesuaian fitur dengan kebutuhan harian pada saat UAT. | Mengonfirmasi kesiapan penggunaan platform. |
| **Tim IT**                 | Membangun fitur, workflow, role access, dan deployment. | Bertanggung jawab atas implementasi teknis sesuai requirement. | Memberi masukan terkait estimasi effort dan dependensi teknis. | Menerima requirement final dan target go-live. | Meninjau kualitas teknis dan kesiapan deployment. | Memberikan technical sign-off sebelum UAT dan go-live. |

---

## Kendala & Asumsi

### Kendala (Constraints)

| No | Kendala | Penjelasan | Dampak terhadap Proyek |
| -- | ------- | ---------- | ---------------------- |
| 1 | Platform harus mobile-first | Karyawan menggunakan smartphone sebagai perangkat utama di luar kantor. | Seluruh fitur harus dioptimalkan untuk tampilan dan interaksi mobile. |
| 2 | Integrasi dengan sistem payroll | Pemotongan cicilan pinjaman harus terintegrasi atau terkoordinasi dengan sistem penggajian. | Diperlukan API atau mekanisme sinkronisasi data dengan sistem payroll yang ada. |
| 3 | Kebijakan cuti berbeda per tipe kontrak | Jenis dan jumlah hak cuti dapat berbeda berdasarkan status kontrak karyawan. | Sistem harus mendukung konfigurasi saldo dan jenis cuti yang fleksibel per segmen karyawan. |
| 4 | Data karyawan harus dikelola terpusat | Perubahan data kepegawaian hanya dapat dilakukan oleh HC, bukan oleh karyawan secara mandiri. | Fitur profil bersifat read-only untuk karyawan; proses edit memerlukan alur tersendiri. |
| 5 | Proses persetujuan multi-level | Izin/cuti memerlukan persetujuan atasan sebelum persetujuan HC; pinjaman memerlukan validasi HC dan FAT. | Sistem harus mendukung workflow multi-level dengan notifikasi pada setiap tahap. |
| 6 | Keterbatasan kapasitas Tim IT | Pengembangan bergantung pada prioritas dan resource Tim IT. | Timeline implementasi dapat berubah sesuai kapasitas development. |

### Asumsi (Assumptions)

| No | Asumsi | Penjelasan | Risiko Jika Asumsi Tidak Terpenuhi |
| -- | ------ | ---------- | ----------------------------------- |
| 1 | Seluruh stakeholder tersedia untuk validasi | Direktur, Manager HC, FAT, dan Tim IT dapat memberikan masukan sesuai jadwal. | Requirement dapat terlambat disetujui dan berdampak pada timeline. |
| 2 | Kebijakan cuti dan pinjaman sudah terdefinisi | Jenis cuti, hak per kategori, batas pinjaman, dan aturan eligibilitas sudah final. | Jika kebijakan belum final, sistem tidak dapat dikonfigurasi dengan benar. |
| 3 | Data karyawan aktif tersedia untuk migrasi | Data master karyawan (NIK, jabatan, departemen, tanggal masuk) tersedia dan akurat. | Jika data tidak siap, proses onboarding pengguna ke sistem akan terhambat. |
| 4 | Atasan langsung akan aktif menggunakan platform | Supervisor akan menggunakan platform untuk menyetujui pengajuan, bukan tetap menggunakan WhatsApp. | Jika supervisor tidak adopsi, alur persetujuan akan terhambat dan tujuan digitalisasi tidak tercapai. |
| 5 | Sistem payroll dapat menerima data pemotongan dari platform | Tim IT dapat mengintegrasikan atau mengirimkan data cicilan pinjaman ke sistem payroll. | Jika integrasi tidak memungkinkan, pemotongan cicilan harus dilakukan secara semi-manual. |

---

# BAB 2
# Kebutuhan Bisnis & Solusi

## Ruang Lingkup (Scope)

| Kategori | In Scope | Out of Scope |
| -------- | -------- | ------------ |
| **Dashboard Beranda** | Ringkasan kehadiran bulan ini, saldo cuti, status pengajuan aktif, quick actions (Kehadiran, Izin & Cuti, Pinjaman, Profil), widget kehadiran hari ini, kartu saldo cuti, informasi pinjaman aktif, pengumuman terkini. | Dashboard analitik multi-cabang, benchmark kinerja karyawan, atau laporan produktivitas individu. |
| **Kehadiran** | Tampilan status kehadiran harian (check-in dan check-out), riwayat kehadiran bulanan dengan filter, rekap statistik (Hadir, Terlambat, Izin, Alpha), detail per hari. | Fitur check-in/check-out mandiri oleh karyawan (kehadiran dicatat oleh sistem/atasan), koreksi data kehadiran secara mandiri oleh karyawan. |
| **Izin & Cuti** | Daftar riwayat pengajuan izin dan cuti, pengajuan izin/cuti baru (jenis, tanggal, durasi, alasan, lampiran), status pengajuan real time (Pending/Disetujui/Ditolak), saldo cuti tersisa, filter berdasarkan jenis dan status. | Manajemen jadwal kerja, pengajuan lembur, reimbursement, atau cuti bersama yang dikonfigurasi sistem. |
| **Pinjaman Karyawan** | Informasi pinjaman aktif (pokok, angsuran bulanan, sisa tenor, tanggal selesai), eligibility score dengan breakdown faktor, riwayat pinjaman, pengajuan pinjaman baru dengan simulasi, status pengajuan (Pending/Disetujui/Ditolak). | Manajemen asuransi, benefit non-tunai, atau fasilitas selain pinjaman uang. |
| **Profil Karyawan** | Informasi identitas (nama, NIK, jabatan, departemen, cabang), tanggal bergabung, atasan langsung, informasi kontak, informasi rekening bank, aset yang dipinjamkan perusahaan, logout. | Edit data profil secara mandiri oleh karyawan, integrasi dengan BPJS atau sistem benefit eksternal. |
| **Pengumuman** | Daftar pengumuman perusahaan yang dapat diakses oleh karyawan, tampilan detail pengumuman, filter pengumuman terbaru. | Fitur komunikasi dua arah, forum diskusi, atau sistem survei kepuasan karyawan. |
| **Notifikasi** | Notifikasi status pengajuan (izin, cuti, pinjaman), pengingat dari atasan atau HC, informasi penting dari perusahaan. | SMS notification atau integrasi WhatsApp Business API. |
| **Alur Persetujuan Izin/Cuti** | Multi-level approval: Staff mengajukan → Atasan menyetujui/menolak → HC memfinalisasi → Status diperbarui. | Pendelegasian persetujuan atau eskalasi otomatis jika atasan tidak merespons dalam batas waktu. |
| **Alur Persetujuan Pinjaman** | Multi-level approval: Staff mengajukan → HC memverifikasi (kelayakan, status kepegawaian) → FAT memvalidasi (cashflow, dampak payroll) → Status diperbarui. | Approval pinjaman darurat dengan alur dipercepat atau pinjaman tanpa bunga berbasis kebijakan khusus. |
| **Testing & UAT** | Pengujian fitur dan UAT bersama user karyawan, atasan, HC, dan FAT sebelum go-live. | Penetration testing skala besar atau audit keamanan eksternal. |

---

## Tujuan Bisnis (SMART Goals)

**Memberikan karyawan akses mandiri terhadap informasi dan layanan kepegawaian mereka**

Seluruh Staff Kontrak dapat mengakses informasi kehadiran, saldo cuti, status pinjaman, dan profil kepegawaian mereka secara real time melalui satu platform tanpa perlu menghubungi HC secara langsung. Ini specific karena mendefinisikan dengan jelas fitur yang disediakan dan siapa penggunanya. Measurable karena dapat dilihat dari jumlah karyawan yang aktif menggunakan platform. Achievable karena fitur self-service adalah kapabilitas standar yang dapat dibangun. Relevant karena langsung menjawab masalah kurangnya transparansi informasi kepegawaian. Time-bound karena ditargetkan tersedia pada fase pertama implementasi.

**Mendigitalisasi dan menstandarisasi proses pengajuan izin, cuti, dan pinjaman**

Seluruh pengajuan izin, cuti, dan pinjaman dilakukan melalui platform dengan alur persetujuan yang terdokumentasi dan terstandarisasi. Tidak ada lagi pengajuan melalui WhatsApp atau media informal. Measurable karena dapat dilihat dari persentase pengajuan yang diproses melalui platform dibanding total pengajuan.

**Mengurangi beban administratif HC sebesar minimal 40%**

Dengan platform yang menangani penerimaan pengajuan, notifikasi persetujuan, dan pembaruan status secara otomatis, HC dapat fokus pada tugas strategis dibanding administrasi manual. Measurable karena dapat diukur dari waktu yang dibutuhkan HC untuk memproses setiap pengajuan sebelum dan setelah implementasi.

**Memastikan proses persetujuan terjadi dalam batas waktu yang ditetapkan**

Setiap tahap persetujuan memiliki notifikasi otomatis. Target: izin/cuti disetujui dalam 24 jam, pinjaman diproses dalam 3 hari kerja. Measurable dari data timestamp pengajuan hingga keputusan final.

**Meningkatkan transparansi kebijakan fasilitas karyawan**

Karyawan dapat melihat eligibility score pinjaman mereka, saldo cuti tersisa, dan status semua pengajuan kapan saja tanpa harus bertanya ke HC. Ini meningkatkan kepercayaan karyawan terhadap proses yang adil dan transparan.

---

## KPI / Metrik Keberhasilan (OKR)

### Objective 1: Seluruh Staff Kontrak menggunakan platform sebagai single entry point layanan kepegawaian

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 1.1 | Minimal 85% Staff Kontrak aktif mengakses platform minimal 1x per minggu. |
| KR 1.2 | 100% pengajuan izin dan cuti baru diproses melalui platform (tidak ada lagi via WhatsApp). |
| KR 1.3 | 100% pengajuan pinjaman baru diproses melalui platform. |
| KR 1.4 | Karyawan dapat melihat saldo cuti dan riwayat kehadiran mereka secara mandiri tanpa menghubungi HC. |

### Objective 2: Mengurangi beban administratif HC

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 2.1 | Waktu proses pengajuan izin/cuti berkurang minimal 60% dibanding proses manual. |
| KR 2.2 | Jumlah pertanyaan langsung ke HC terkait saldo cuti dan status pinjaman berkurang minimal 70%. |
| KR 2.3 | Rekap kehadiran bulanan dapat dihasilkan secara otomatis tanpa proses manual oleh HC. |
| KR 2.4 | Seluruh riwayat pengajuan tersimpan dan dapat diaudit kapan saja. |

### Objective 3: Mempercepat alur persetujuan pengajuan

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 3.1 | Rata-rata waktu persetujuan izin/cuti ≤ 24 jam setelah pengajuan. |
| KR 3.2 | Rata-rata waktu persetujuan pinjaman ≤ 3 hari kerja. |
| KR 3.3 | Notifikasi persetujuan terkirim ke karyawan dalam ≤ 5 menit setelah keputusan dibuat. |
| KR 3.4 | Tingkat pengajuan yang di-drop karena kurang informasi berkurang ≥ 50%. |

### Objective 4: Meningkatkan transparansi dan kepatuhan kebijakan kepegawaian

| Key Results | Target Keberhasilan |
| ----------- | ------------------- |
| KR 4.1 | 100% karyawan dapat melihat eligibility score pinjaman mereka sebelum mengajukan. |
| KR 4.2 | Tidak ada karyawan yang mengajukan pinjaman melebihi batas cicilan 30% THP. |
| KR 4.3 | Saldo cuti karyawan selalu up-to-date dan dapat dilihat real time. |
| KR 4.4 | Seluruh pengajuan dan keputusan memiliki audit trail yang dapat diakses oleh HC dan manajemen. |

---

# BAB 3
# Analisis Proses Bisnis

## Gambaran Umum Proses Bisnis (High Level)

### Proses 1: Onboarding Karyawan ke Platform

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | HC mendaftarkan karyawan ke sistem | Tim HC / Admin | HC membuat akun karyawan baru dengan data identitas, departemen, cabang, jabatan, tanggal bergabung, dan atasan langsung. |
| 2 | Karyawan menerima kredensial akses | Tim HC | Karyawan menerima username dan password awal melalui media yang ditentukan (email atau langsung). |
| 3 | Karyawan melakukan login pertama | Staff Kontrak | Karyawan masuk ke platform menggunakan kredensial yang diterima. |
| 4 | Sistem menampilkan Dashboard Beranda | Sistem | Platform menampilkan dashboard dengan informasi kepegawaian yang relevan untuk karyawan tersebut. |
| 5 | Karyawan melakukan orientasi fitur | Staff Kontrak | Karyawan menjelajahi fitur yang tersedia: kehadiran, izin & cuti, pinjaman, profil. |

---

### Proses 2: Pemantauan Kehadiran

Proses ini menjelaskan bagaimana karyawan memantau data kehadiran mereka melalui platform. Data kehadiran diinput oleh sistem (melalui mekanisme check-in/check-out yang terpisah atau oleh atasan), dan platform menampilkannya kepada karyawan secara self-service.

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan membuka menu Kehadiran | Staff Kontrak | Karyawan mengakses fitur Kehadiran dari Dashboard Beranda atau menu Aktivitas. |
| 2 | Sistem menampilkan status kehadiran hari ini | Sistem | Platform menampilkan waktu check-in, waktu check-out (jika sudah), dan status kehadiran hari ini (Hadir/Terlambat/Alpha/Izin/Cuti/Dinas Luar). |
| 3 | Karyawan melihat rekap statistik bulan ini | Staff Kontrak | Bagian atas halaman menampilkan ringkasan kehadiran bulan berjalan: total hari Hadir, Terlambat, Izin, dan Alpha. |
| 4 | Karyawan memilih filter periode | Staff Kontrak | Karyawan dapat memfilter tampilan riwayat berdasarkan Hari Ini, Minggu Ini, atau Bulan Ini. |
| 5 | Sistem menampilkan daftar riwayat kehadiran | Sistem | Platform menampilkan daftar riwayat kehadiran dengan tanggal, waktu masuk, waktu keluar, durasi, dan status per hari. |
| 6 | Karyawan melihat detail hari tertentu | Staff Kontrak | Karyawan dapat mengetuk entri tertentu untuk melihat detail lengkap termasuk lokasi check-in dan keterangan tambahan. |

**Catatan Aturan Bisnis:**
- Data kehadiran tidak dapat diubah oleh karyawan secara mandiri
- Koreksi kehadiran (jika ada kesalahan) harus melalui permintaan ke HC yang akan memvalidasi dan mengoreksi data
- Status kehadiran ditentukan oleh sistem berdasarkan waktu check-in terhadap jadwal kerja yang dikonfigurasi HC

---

### Proses 3: Pengajuan Izin & Cuti

Proses ini mencakup seluruh alur pengajuan dari inisiasi oleh karyawan hingga keputusan final oleh HC, dengan persetujuan atasan sebagai syarat antara.

#### Sub-proses 3A: Melihat Saldo & Riwayat Cuti

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan membuka menu Izin & Cuti | Staff Kontrak | Karyawan mengakses fitur dari Dashboard atau menu Aktivitas. |
| 2 | Sistem menampilkan saldo cuti | Sistem | Header halaman menampilkan saldo cuti tahunan: total hak cuti, sudah terpakai, dan sisa yang tersedia dalam bentuk visual card berwarna hijau. |
| 3 | Karyawan memilih filter tampilan | Staff Kontrak | Karyawan dapat menampilkan Semua pengajuan, hanya Izin, hanya Cuti, atau hanya yang berstatus Pending. |
| 4 | Sistem menampilkan daftar riwayat | Sistem | Platform menampilkan daftar semua pengajuan dengan ikon jenis cuti, tanggal, durasi, alasan singkat, dan badge status (Disetujui/Ditolak/Pending). |
| 5 | Karyawan melihat detail pengajuan | Staff Kontrak | Karyawan dapat mengetuk entri pengajuan untuk melihat detail: jenis, tanggal, durasi, alasan, lampiran, riwayat status, dan catatan dari atasan atau HC. |

#### Sub-proses 3B: Mengajukan Izin atau Cuti Baru

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan menekan tombol "Ajukan" | Staff Kontrak | Karyawan menekan tombol Ajukan di pojok kanan atas halaman Izin & Cuti atau dari Dashboard Quick Action. |
| 2 | Sistem menampilkan form pengajuan | Sistem | Form pengajuan menampilkan field yang perlu diisi. |
| 3 | Karyawan memilih jenis izin/cuti | Staff Kontrak | Karyawan memilih dari dropdown: Sakit, Pribadi Mendesak, Dinas, Cuti Tahunan, Melahirkan, Menikah, atau Khusus. |
| 4 | Karyawan memilih tanggal mulai dan selesai | Staff Kontrak | Karyawan memilih tanggal melalui date picker. |
| 5 | Sistem menghitung durasi otomatis | Sistem | Platform menghitung jumlah hari kerja secara otomatis berdasarkan tanggal yang dipilih (mengecualikan akhir pekan dan hari libur nasional). |
| 6 | Sistem memvalidasi saldo cuti | Sistem | Untuk jenis Cuti Tahunan, sistem memverifikasi bahwa saldo cuti karyawan mencukupi. Jika tidak cukup, sistem menampilkan peringatan. |
| 7 | Karyawan mengisi alasan/keterangan | Staff Kontrak | Karyawan mengisi field alasan dengan narasi singkat. |
| 8 | Karyawan mengunggah lampiran (opsional/wajib) | Staff Kontrak | Untuk jenis tertentu (misalnya Sakit wajib melampirkan surat dokter), karyawan mengunggah dokumen pendukung. |
| 9 | Karyawan menekan tombol Submit | Staff Kontrak | Karyawan mengirimkan pengajuan. |
| 10 | Sistem memvalidasi kelengkapan data | Sistem | Platform memvalidasi semua field wajib terisi dan lampiran tersedia (jika wajib). |
| 11 | Sistem membuat pengajuan dengan status Pending | Sistem | Pengajuan tersimpan dengan status awal "Menunggu Persetujuan Atasan". |
| 12 | Sistem mengirim notifikasi ke atasan langsung | Sistem | Atasan langsung menerima notifikasi bahwa ada pengajuan izin/cuti dari anggota timnya yang menunggu persetujuan. |
| 13 | Karyawan melihat status pengajuan | Staff Kontrak | Karyawan dapat memantau status pengajuan di halaman Izin & Cuti dengan status badge "Pending". |

#### Sub-proses 3C: Persetujuan Atasan Langsung

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Atasan membuka notifikasi atau dashboard | Atasan Langsung | Atasan menerima notifikasi di platform dan membuka detail pengajuan. |
| 2 | Atasan meninjau detail pengajuan | Atasan Langsung | Atasan melihat nama karyawan, jenis izin/cuti, tanggal, durasi, alasan, dan lampiran yang dilampirkan. |
| 3 | Atasan menambahkan catatan (opsional) | Atasan Langsung | Atasan dapat menambahkan catatan atau komentar sebelum menyetujui atau menolak. |
| 4a | Atasan menyetujui pengajuan | Atasan Langsung | Atasan menekan tombol Setujui. Sistem memperbarui status menjadi "Menunggu Persetujuan HC". |
| 4b | Atasan menolak pengajuan | Atasan Langsung | Atasan menekan tombol Tolak dan mengisi alasan penolakan. Sistem memperbarui status menjadi "Ditolak". |
| 5a | Sistem mengirim notifikasi ke HC (jika disetujui) | Sistem | HC menerima notifikasi bahwa ada pengajuan yang sudah disetujui atasan dan menunggu persetujuan final. |
| 5b | Sistem mengirim notifikasi ke karyawan (jika ditolak) | Sistem | Karyawan menerima notifikasi bahwa pengajuannya ditolak oleh atasan beserta alasan penolakan. |

#### Sub-proses 3D: Persetujuan Final oleh HC

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | HC membuka dashboard atau notifikasi | Tim HC | HC menerima notifikasi di platform dan membuka daftar pengajuan yang menunggu. |
| 2 | HC meninjau detail pengajuan | Tim HC | HC melihat seluruh data pengajuan termasuk catatan atasan, saldo cuti karyawan, dan kelengkapan dokumen. |
| 3 | HC memvalidasi kelayakan | Tim HC | HC memverifikasi: apakah karyawan memiliki saldo cuti yang cukup, apakah dokumen lengkap, dan apakah tidak ada konflik kebijakan. |
| 4 | HC menambahkan catatan (opsional) | Tim HC | HC dapat menambahkan catatan resmi. |
| 5a | HC menyetujui pengajuan | Tim HC | HC menekan Setujui. Sistem memperbarui status menjadi "Disetujui" dan mengurangi saldo cuti karyawan (untuk cuti tahunan). |
| 5b | HC menolak pengajuan | Tim HC | HC menekan Tolak dan mengisi alasan. Sistem memperbarui status menjadi "Ditolak". |
| 6 | Sistem mengirim notifikasi ke karyawan | Sistem | Karyawan menerima notifikasi keputusan final (Disetujui atau Ditolak) beserta keterangan. |
| 7 | Karyawan melihat status final | Staff Kontrak | Status pengajuan di halaman Izin & Cuti berubah menjadi badge "Disetujui" (hijau) atau "Ditolak" (merah). |

---

### Proses 4: Pengajuan & Pemantauan Pinjaman Karyawan

Proses ini mencakup pemantauan pinjaman aktif, pengajuan pinjaman baru, simulasi cicilan, dan alur validasi multi-pihak.

#### Sub-proses 4A: Melihat Informasi Pinjaman

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan membuka menu Pinjaman | Staff Kontrak | Karyawan mengakses fitur Pinjaman dari Dashboard Quick Action atau menu Aktivitas. |
| 2 | Sistem menampilkan ringkasan pinjaman aktif | Sistem | Jika karyawan memiliki pinjaman aktif, sistem menampilkan: total pokok pinjaman, saldo yang masih harus dibayar, progress pembayaran (progress bar), angsuran per bulan, sisa tenor, dan estimasi tanggal lunas. |
| 3 | Sistem menampilkan Eligibility Score | Sistem | Di bawah ringkasan pinjaman, sistem menampilkan skor kelayakan pinjaman (0–100) dengan breakdown 5 faktor: Masa Kerja (30%), THP (25%), Status Pinjaman Outstanding (20%), Status Kepegawaian (15%), dan Disiplin (10%). Setiap faktor menampilkan progress bar dan kontribusi nilai masing-masing. |
| 4 | Karyawan melihat riwayat pinjaman | Staff Kontrak | Bagian bawah halaman menampilkan daftar riwayat pinjaman (pinjaman aktif dan yang sudah lunas) dengan status badge, nominal, dan periode pinjaman. |
| 5 | Karyawan membuka detail pinjaman | Staff Kontrak | Karyawan dapat mengetuk item pinjaman tertentu untuk melihat detail lengkap: riwayat pembayaran per bulan, jadwal pembayaran ke depan, dan histori perubahan status. |

#### Sub-proses 4B: Mengajukan Pinjaman Baru

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan menekan tombol "Ajukan Pinjaman Baru" | Staff Kontrak | Karyawan menekan tombol yang tersedia di halaman Pinjaman. |
| 2 | Sistem memvalidasi pra-syarat pengajuan | Sistem | Sebelum form ditampilkan, sistem memvalidasi: status karyawan aktif, masa kerja ≥ 12 bulan, tidak dalam proses resign, tidak ada SP aktif, dan tidak ada pinjaman bermasalah yang outstanding. Jika ada syarat yang tidak terpenuhi, sistem menampilkan informasi mengapa karyawan belum dapat mengajukan. |
| 3 | Karyawan memasukkan nominal pinjaman | Staff Kontrak | Karyawan mengisi jumlah pinjaman yang diinginkan. |
| 4 | Karyawan memilih tenor | Staff Kontrak | Karyawan memilih tenor cicilan dari pilihan yang tersedia (6, 12, 18, atau 24 bulan). |
| 5 | Sistem menampilkan simulasi cicilan | Sistem | Platform menghitung dan menampilkan: angsuran per bulan (nominal pinjaman / tenor), persentase angsuran terhadap THP karyawan, dan perbandingan dengan batas maksimal 30% THP. Jika angsuran melebihi 30% THP, sistem menampilkan peringatan dan merekomendasikan penyesuaian nominal atau tenor. |
| 6 | Karyawan memilih tujuan/keperluan pinjaman | Staff Kontrak | Karyawan memilih dari dropdown pilihan yang tersedia (misalnya: pendidikan, kesehatan, renovasi rumah, kebutuhan mendesak, lainnya). |
| 7 | Karyawan mengisi keterangan tambahan (opsional) | Staff Kontrak | Karyawan dapat menambahkan keterangan untuk mendukung pengajuan. |
| 8 | Karyawan meninjau ringkasan pengajuan | Staff Kontrak | Sistem menampilkan ringkasan lengkap sebelum submit: nominal, tenor, angsuran per bulan, tujuan, dan catatan proses persetujuan yang akan dilalui. |
| 9 | Karyawan menekan tombol Submit | Staff Kontrak | Karyawan mengonfirmasi pengajuan. |
| 10 | Sistem membuat pengajuan dengan status Pending HC | Sistem | Pengajuan tersimpan dengan status "Menunggu Verifikasi HC". |
| 11 | Sistem mengirim notifikasi ke HC | Sistem | HC menerima notifikasi bahwa ada pengajuan pinjaman baru yang perlu diverifikasi. |

#### Sub-proses 4C: Verifikasi HC & Validasi FAT

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | HC membuka dashboard pinjaman | Tim HC | HC melihat antrian pengajuan pinjaman yang menunggu verifikasi. |
| 2 | HC meninjau detail pengajuan | Tim HC | HC memeriksa: data karyawan, masa kerja, status kepegawaian, disiplin, outstanding pinjaman, THP, dan eligibility score. |
| 3 | HC memverifikasi kelayakan | Tim HC | HC memastikan seluruh persyaratan terpenuhi dan data karyawan sesuai dengan yang tercatat di sistem kepegawaian. |
| 4a | HC merekomendasikan persetujuan | Tim HC | HC menambahkan catatan verifikasi dan meneruskan ke FAT untuk validasi financial. Status berubah menjadi "Menunggu Validasi FAT". |
| 4b | HC menolak pengajuan | Tim HC | HC menolak pengajuan dengan memberikan alasan. Status berubah menjadi "Ditolak oleh HC". Karyawan mendapat notifikasi. |
| 5 | FAT menerima notifikasi | Tim FAT | FAT mendapat notifikasi bahwa ada pengajuan pinjaman yang memerlukan validasi financial. |
| 6 | FAT meninjau dampak cashflow | Tim FAT | FAT mengevaluasi: total eksposur pinjaman karyawan aktif, dampak terhadap cashflow perusahaan, dan kemampuan karyawan melunasi berdasarkan THP (konfirmasi batas 30%). |
| 7a | FAT menyetujui pengajuan | Tim FAT | FAT menekan Setujui. Status berubah menjadi "Disetujui". Karyawan mendapat notifikasi dan saldo pinjaman muncul di profil mereka. |
| 7b | FAT menolak pengajuan | Tim FAT | FAT menolak dengan alasan. Status berubah menjadi "Ditolak oleh FAT". Karyawan mendapat notifikasi dengan penjelasan. |
| 8 | Sistem memperbarui data pinjaman karyawan | Sistem | Setelah disetujui, sistem mencatat pinjaman aktif baru, jadwal cicilan, dan memperbarui eligibility score (faktor outstanding loan diperbarui). |
| 9 | Sistem mengirim notifikasi kepada seluruh pihak | Sistem | Karyawan, HC, dan FAT mendapat konfirmasi keputusan final. |

---

### Proses 5: Manajemen Profil Karyawan

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan membuka halaman Profil | Staff Kontrak | Karyawan mengakses Profil dari bottom navigation atau quick action di Dashboard. |
| 2 | Sistem menampilkan informasi profil | Sistem | Halaman menampilkan: avatar/inisial, nama lengkap, jabatan, departemen, cabang, NIK, tanggal bergabung, dan nama atasan langsung. |
| 3 | Karyawan melihat informasi kontak | Staff Kontrak | Nomor telepon terdaftar dan kontak darurat yang tercatat di sistem HC. |
| 4 | Karyawan melihat informasi kepegawaian | Staff Kontrak | Status kepegawaian, saldo cuti, status SP (surat peringatan) jika ada, dan status pinjaman aktif. |
| 5 | Karyawan melihat informasi rekening | Staff Kontrak | Rekening bank tujuan pembayaran gaji (nama bank, nomor rekening, nama pemilik rekening). |
| 6 | Karyawan melihat daftar aset perusahaan | Staff Kontrak | Daftar perangkat atau aset yang dipinjamkan perusahaan (laptop, telepon, ID card, seragam) beserta kondisi dan tanggal peminjaman. |
| 7 | Karyawan melakukan logout | Staff Kontrak | Karyawan menekan tombol Logout. Sistem mengakhiri sesi dan mengarahkan kembali ke halaman login. |

**Catatan:** Seluruh data profil bersifat read-only bagi karyawan. Untuk perubahan data (nomor rekening, kontak darurat, dll), karyawan harus menghubungi HC secara langsung.

---

### Proses 6: Membaca Pengumuman

| No | Tahapan | PIC | Keterangan |
| -- | ------- | --- | ---------- |
| 1 | Karyawan mengakses Pengumuman | Staff Kontrak | Dari Dashboard (section pengumuman mini) atau dari menu yang tersedia, karyawan membuka halaman pengumuman. |
| 2 | Sistem menampilkan daftar pengumuman | Sistem | Platform menampilkan daftar pengumuman terbaru dari manajemen atau HC dengan judul, ringkasan, dan tanggal posting. |
| 3 | Karyawan membuka detail pengumuman | Staff Kontrak | Karyawan mengetuk pengumuman untuk membaca konten lengkap. |
| 4 | HC memperbarui konten pengumuman | Tim HC | HC mengelola konten pengumuman melalui panel admin (tidak termasuk dalam scope fitur karyawan). |

---

## Aturan Bisnis ESS Internal Employee

| No | Kategori | Aturan Bisnis | Keterangan |
| -- | -------- | ------------- | ---------- |
| 1 | Kehadiran | Status kehadiran ditentukan otomatis oleh sistem berdasarkan waktu check-in terhadap jam kerja yang dikonfigurasi HC. | Status yang mungkin: Hadir, Terlambat (check-in melewati batas waktu), Alpha (tidak check-in tanpa izin), Izin, Cuti, Dinas Luar. |
| 2 | Kehadiran | Karyawan tidak dapat mengedit data kehadiran mereka sendiri. | Koreksi kehadiran hanya dapat dilakukan oleh HC setelah melalui mekanisme verifikasi yang ditetapkan. |
| 3 | Izin & Cuti | Alur persetujuan izin dan cuti mengikuti urutan: Karyawan → Atasan → HC. Tidak dapat dilewati. | Pengajuan yang ditolak di salah satu tahap tidak diteruskan ke tahap berikutnya. |
| 4 | Izin & Cuti | Saldo cuti hanya berkurang setelah pengajuan cuti tahunan mendapatkan persetujuan final dari HC. | Jika pengajuan ditolak di tahap manapun, saldo cuti tidak berkurang. |
| 5 | Izin & Cuti | Karyawan tidak dapat mengajukan dua izin/cuti untuk tanggal yang sama atau saling tumpang tindih. | Sistem memvalidasi tumpang tindih tanggal saat karyawan mengisi form dan menampilkan peringatan jika terdeteksi konflik. |
| 6 | Izin & Cuti | Pengajuan cuti tahunan hanya dapat dilakukan jika saldo cuti karyawan mencukupi durasi yang diminta. | Sistem memvalidasi saldo dan mencegah pengajuan jika saldo tidak mencukupi. |
| 7 | Izin & Cuti | Jenis izin Sakit wajib melampirkan surat keterangan dokter. | Sistem menandai field lampiran sebagai wajib jika jenis izin "Sakit" dipilih. |
| 8 | Izin & Cuti | Karyawan dapat membatalkan pengajuan yang masih berstatus Pending (belum ada keputusan atasan). | Setelah atasan atau HC memberikan keputusan, pembatalan tidak dapat dilakukan melalui platform. |
| 9 | Pinjaman | Pinjaman hanya dapat diajukan oleh karyawan yang memenuhi seluruh kriteria eligibilitas: status aktif, masa kerja ≥ 12 bulan, tidak ada SP aktif, tidak dalam proses resign, dan tidak ada pinjaman bermasalah. | Sistem memvalidasi semua kriteria secara otomatis sebelum form pengajuan ditampilkan. |
| 10 | Pinjaman | Angsuran bulanan tidak boleh melebihi 30% dari THP (Take Home Pay) karyawan. | Sistem menghitung dan menampilkan simulasi cicilan. Jika angsuran melebihi 30% THP, sistem memberikan peringatan dan merekomendasikan penyesuaian. |
| 11 | Pinjaman | Eligibility Score dihitung otomatis oleh sistem berdasarkan 5 faktor dengan bobot: Masa Kerja 30%, THP 25%, Status Pinjaman Outstanding 20%, Status Kepegawaian 15%, dan Disiplin 10%. | Eligibility Score diperbarui secara otomatis setiap kali ada perubahan pada faktor yang relevan. |
| 12 | Pinjaman | Karyawan tidak dapat memiliki lebih dari satu pengajuan pinjaman yang sedang dalam proses (status Pending). | Tombol "Ajukan Pinjaman Baru" dinonaktifkan jika ada pengajuan yang sedang diproses. |
| 13 | Pinjaman | Alur validasi pinjaman mengikuti urutan: Karyawan → HC → FAT. Tidak dapat dilewati. | FAT hanya dapat memvalidasi pengajuan yang sudah diverifikasi oleh HC. |
| 14 | Pinjaman | Cicilan pinjaman dipotong secara otomatis dari gaji karyawan setiap bulan sesuai jadwal yang disepakati. | Sistem mengirimkan data cicilan ke sistem payroll sesuai mekanisme integrasi yang ditetapkan. |
| 15 | Profil | Data profil karyawan (identitas, jabatan, departemen, rekening) hanya dapat diubah oleh HC, bukan oleh karyawan sendiri. | Halaman profil bersifat view-only untuk karyawan. |
| 16 | Notifikasi | Sistem mengirimkan notifikasi in-app kepada karyawan setiap kali ada perubahan status pada pengajuan mereka (izin, cuti, atau pinjaman). | Badge jumlah notifikasi belum terbaca ditampilkan di bottom navigation. |
| 17 | Notifikasi | Sistem mengirimkan notifikasi kepada atasan langsung setiap ada pengajuan izin/cuti baru dari anggota timnya yang menunggu persetujuan. | Atasan juga mendapat pengingat jika pengajuan belum ditindaklanjuti dalam batas waktu tertentu. |
| 18 | Notifikasi | Sistem mengirimkan notifikasi kepada HC setiap ada pengajuan izin/cuti yang sudah disetujui atasan dan menunggu persetujuan final, serta setiap pengajuan pinjaman baru. | — |
| 19 | Notifikasi | Sistem mengirimkan notifikasi kepada FAT setiap ada pengajuan pinjaman yang sudah diverifikasi HC dan menunggu validasi financial. | — |
| 20 | Audit Trail | Setiap perubahan status pada pengajuan izin/cuti dan pinjaman tersimpan sebagai histori lengkap. | Histori mencatat: timestamp perubahan, PIC yang melakukan perubahan, status sebelumnya, status baru, dan catatan yang ditambahkan. |
| 21 | Bottom Navigation | Bottom navigation terdiri dari empat item: Beranda, Aktivitas, Notifikasi, dan Profil. | Fitur Kehadiran, Izin & Cuti, dan Pinjaman dapat diakses melalui Quick Actions di Beranda atau melalui tab Aktivitas. |
| 22 | Sesi | Sesi pengguna akan berakhir otomatis setelah periode tidak aktif yang ditetapkan. | Karyawan harus login kembali setelah sesi berakhir. |

---

## Analisis Risiko & Mitigasi

| No | Risiko | Penyebab | Dampak | Tingkat Risiko | Mitigasi | PIC |
| -- | ------ | -------- | ------ | -------------- | -------- | --- |
| 1 | Atasan langsung tidak aktif menggunakan platform untuk persetujuan | Kebiasaan menggunakan WhatsApp sulit diubah; atasan tidak melihat notifikasi | Pengajuan izin/cuti tertunda; karyawan tidak mendapat keputusan tepat waktu | Tinggi | Training khusus atasan; menetapkan SLA persetujuan dan escalation path jika tidak ditindaklanjuti dalam batas waktu; sosialisasi kebijakan bahwa persetujuan hanya valid melalui platform | Tim HC, Direktur |
| 2 | Data master karyawan tidak lengkap atau tidak akurat saat go-live | Proses migrasi data dari sistem lama tidak dipersiapkan dengan baik | Karyawan tidak dapat menggunakan platform karena data tidak tersedia atau salah | Tinggi | Melakukan audit dan cleansing data karyawan sebelum go-live; menetapkan cut-off date untuk migrasi data | Tim HC, Tim IT |
| 3 | Integrasi dengan sistem payroll tidak tersedia tepat waktu | Sistem payroll menggunakan platform berbeda yang memerlukan custom integration | Cicilan pinjaman tidak dapat dipotong otomatis; potensi keterlambatan atau kesalahan pemotongan | Sedang | Menyiapkan workaround manual (export data cicilan untuk diinput manual ke payroll) sambil integrasi disiapkan | Tim IT, FAT |
| 4 | Karyawan tidak memahami cara menggunakan platform | Desain UI tidak intuitif atau kurangnya sosialisasi sebelum go-live | Tingkat adopsi rendah; karyawan tetap menggunakan cara manual | Sedang | Melakukan training onboarding sebelum go-live; menyiapkan panduan singkat (quick guide); menunjuk champion di setiap departemen sebagai go-to person | Tim HC, Branch Manager |
| 5 | Manipulasi data kehadiran | Tidak ada verifikasi biometrik atau foto saat check-in | Data kehadiran tidak mencerminkan kondisi aktual | Sedang | Memastikan mekanisme check-in memiliki validasi yang memadai (GPS, waktu, foto); HC dapat meninjau dan menandai anomali | Tim IT, Tim HC |
| 6 | Saldo cuti tidak akurat saat go-live | Data saldo cuti awal tidak dimigrasi dengan benar | Karyawan mengajukan cuti berdasarkan saldo yang salah; konflik kebijakan | Tinggi | Melakukan rekonsiliasi saldo cuti secara manual sebelum go-live; meminta HC untuk memvalidasi saldo setiap karyawan sebelum sistem diaktifkan | Tim HC |
| 7 | Karyawan mengajukan pinjaman melebihi kemampuan bayar | Karyawan salah menghitung cicilan atau tidak memahami batas 30% THP | Gagal bayar cicilan; dampak pada payroll dan hubungan karyawan | Sedang | Menampilkan simulasi cicilan yang jelas dan perbandingan dengan batas 30% THP sebelum karyawan submit; sistem memblokir pengajuan jika melebihi batas | Tim IT, FAT |
| 8 | Penumpukan antrian persetujuan di HC | HC kewalahan dengan volume pengajuan yang masuk bersamaan saat awal go-live | Waktu persetujuan melebihi SLA yang ditetapkan | Sedang | Menyiapkan kapasitas HC untuk periode awal; menetapkan prioritas jenis pengajuan; memberikan visibilitas antrian kepada HC | Tim HC |
| 9 | Kebocoran data pribadi karyawan | Platform menyimpan data sensitif kepegawaian (rekening bank, THP, status SP) | Risiko penyalahgunaan data | Tinggi | Menerapkan role-based access control; enkripsi data sensitif; audit trail akses; review keamanan sebelum go-live | Tim IT, Direktur IT |
| 10 | Pengajuan ganda (double submission) | Karyawan mengajukan ulang tanpa menunggu keputusan pengajuan sebelumnya | Data pengajuan tidak konsisten; beban kerja HC bertambah | Rendah | Sistem membatasi satu pengajuan aktif per jenis pada periode yang sama; status pengajuan aktif selalu terlihat di halaman utama | Tim IT |

---

# BAB 4
# Rincian Fitur & Layar Aplikasi

Bagian ini menjelaskan secara rinci setiap layar dan fitur aplikasi yang harus dibangun untuk modul ESS Internal Employee, sesuai dengan desain mockup yang telah dibuat.

## Layar 1: Login (login-kontrak.html)

**Deskripsi:** Layar masuk untuk Staff Kontrak. Karyawan memasukkan kredensial (NIK/username dan password) untuk masuk ke platform.

**Elemen UI:**
- Logo perusahaan di bagian atas
- Label/judul login
- Field input NIK atau Username
- Field input Password dengan toggle show/hide
- Tombol "Masuk" (primary button, full width)
- Link "Lupa Password?" untuk reset kredensial
- Footer informasi aplikasi (versi)

**Validasi:**
- Kedua field wajib diisi
- Tampilkan pesan error yang jelas jika kredensial tidak valid
- Batasi percobaan login yang gagal (maksimal 5 kali, kemudian akun terkunci sementara)

**Navigasi:** Setelah login berhasil → Dashboard Beranda (home.html)

---

## Layar 2: Dashboard Beranda (home.html)

**Deskripsi:** Halaman utama karyawan. Menampilkan ringkasan informasi kepegawaian yang paling relevan dan akses cepat ke fitur utama.

**Elemen UI:**

**Hero Section (Gradient Biru #0F2B6E → #2A7CFF):**
- Avatar dengan inisial nama karyawan
- Nama lengkap dan jabatan
- Nama cabang/lokasi kerja

**Quick Stats Strip (3 card horizontal):**
- Kehadiran: jumlah hari hadir bulan ini
- Saldo Cuti: sisa hari cuti tahunan
- Pengajuan: jumlah pengajuan yang sedang dalam proses (pending)

**Quick Actions Grid (2×2):**
- Kehadiran → Halaman Kehadiran
- Izin & Cuti → Halaman Izin & Cuti
- Pinjaman → Halaman Pinjaman
- Profil → Halaman Profil

**Widget Kehadiran Hari Ini:**
- Status kehadiran hari ini (badge)
- Waktu check-in dan check-out
- Tanggal hari ini

**Kartu Saldo Cuti (gradient hijau):**
- Sisa hari cuti
- Total hak cuti
- Hari yang sudah terpakai

**Informasi Pinjaman Aktif:**
- Saldo pinjaman yang masih harus dibayar
- Angsuran per bulan
- Progress bar pembayaran
- Hanya tampil jika karyawan memiliki pinjaman aktif

**Pengumuman Terbaru (mini list, max 3 item):**
- Judul pengumuman
- Tanggal posting
- Tombol "Lihat Semua"

**Bottom Navigation:**
- Beranda (aktif)
- Aktivitas
- Notifikasi (dengan badge jika ada notif belum terbaca)
- Profil

---

## Layar 3: Kehadiran (kehadiran.html)

**Deskripsi:** Halaman rekap dan riwayat kehadiran karyawan.

**Elemen UI:**

**Header:**
- Tombol kembali
- Judul "Kehadiran"
- Date selector (navigasi bulan)

**Kartu Status Hari Ini:**
- Tanggal hari ini
- Waktu check-in
- Waktu check-out
- Status kehadiran (badge berwarna sesuai status)
- Lokasi (jika tersedia)

**Rekap Statistik Bulan Ini (4 kotak grid 2×2):**
- Hadir (count, warna hijau)
- Terlambat (count, warna oranye)
- Izin (count, warna biru)
- Alpha (count, warna merah)

**Filter Tab:**
- Hari Ini | Minggu Ini | Bulan Ini

**Daftar Riwayat Kehadiran:**
- Setiap baris menampilkan: hari & tanggal, waktu masuk–waktu keluar, durasi, status badge
- Diurutkan dari yang terbaru
- Status menggunakan warna berbeda: Hadir (hijau), Terlambat (oranye), Alpha (merah), Izin/Cuti (biru)

---

## Layar 4: Izin & Cuti (izin-cuti.html)

**Deskripsi:** Halaman daftar riwayat pengajuan izin dan cuti, sekaligus titik masuk untuk pengajuan baru.

**Elemen UI:**

**Header:**
- Tombol kembali
- Judul "Izin & Cuti"
- Tombol "Ajukan" (primary, pojok kanan atas)

**Kartu Saldo Cuti (gradient hijau):**
- "Sisa Cuti" — angka hari tersisa (besar, putih)
- "Hak Cuti: [total] hari | Terpakai: [jumlah] hari"

**Filter Tab:**
- Semua | Izin | Cuti | Pending

**Daftar Riwayat Pengajuan:**
Setiap item menampilkan:
- Ikon jenis cuti (berbeda per tipe)
- Jenis izin/cuti (misalnya: "Cuti Tahunan")
- Tanggal mulai – selesai
- Durasi (misalnya: "3 hari")
- Alasan/keterangan singkat
- Badge status: Disetujui (hijau), Ditolak (merah), Pending (oranye)
- Tanggal pengajuan

---

## Layar 5: Form Pengajuan Izin/Cuti (ajukan-izin.html)

**Deskripsi:** Form untuk mengajukan izin atau cuti baru.

**Elemen UI:**

**Header:**
- Tombol kembali
- Judul "Ajukan Izin & Cuti"

**Form Fields:**
- **Jenis** (dropdown, wajib): Sakit, Pribadi Mendesak, Dinas, Cuti Tahunan, Melahirkan, Menikah, Khusus
- **Tanggal Mulai** (date picker, wajib)
- **Tanggal Selesai** (date picker, wajib)
- **Durasi** (auto-calculated, read-only): "X hari kerja"
- **Alasan** (text area, wajib): deskripsi singkat
- **Lampiran** (file upload, wajib untuk Sakit): surat dokter atau dokumen pendukung lainnya

**Info Box:** Menampilkan alur persetujuan yang akan dilalui: "Pengajuan Anda akan ditinjau oleh [nama atasan] kemudian oleh HC."

**Tombol:**
- "Batalkan" (secondary, kiri)
- "Kirim Pengajuan" (primary, kanan)

---

## Layar 6: Pinjaman (loan.html)

**Deskripsi:** Halaman utama modul pinjaman. Menampilkan status pinjaman aktif, eligibility score, dan riwayat pinjaman.

**Elemen UI:**

**Hero Card (gradient gelap):**
- Label "Pinjaman Aktif" atau "Tidak Ada Pinjaman Aktif"
- Nominal saldo yang masih harus dibayar (font besar)
- Progress bar: visual perbandingan yang sudah dibayar vs sisa
- Footer 3 stat: Angsuran/Bulan | Sisa Tenor | Est. Selesai

**Eligibility Score Card:**
- Judul "Kelayakan Pinjaman"
- Total skor (angka 0–100) dengan label kategori (Sangat Baik / Baik / Cukup / Kurang)
- 5 baris faktor masing-masing dengan:
  - Nama faktor dan bobot persentase
  - Progress bar kontribusi nilai
  - Skor kontribusi faktor tersebut

**Tombol:**
- "+ Ajukan Pinjaman Baru" (primary, full width) — dinonaktifkan jika ada pinjaman pending atau karyawan belum eligible

**Riwayat Pinjaman (list):**
- Setiap item: nominal, periode, badge status (Aktif/Lunas/Ditolak), tanggal mulai
- Dapat diketuk untuk melihat detail

---

## Layar 7: Form Pengajuan Pinjaman (ajukan-loan.html)

**Deskripsi:** Form untuk mengajukan pinjaman baru dengan fitur simulasi cicilan.

**Elemen UI:**

**Header:**
- Tombol kembali
- Judul "Ajukan Pinjaman"

**Form Fields:**
- **Nominal Pinjaman** (number input, wajib): input jumlah yang diinginkan
- **Tenor** (selector/radio, wajib): 6 bulan | 12 bulan | 18 bulan | 24 bulan
- **Tujuan Pinjaman** (dropdown, wajib): Pendidikan, Kesehatan, Renovasi Rumah, Kebutuhan Mendesak, Lainnya
- **Keterangan** (text area, opsional)

**Simulasi Cicilan (auto-update):**
- Angsuran per bulan: Rp [hasil hitung]
- % dari THP: [persentase]% dari Rp [THP]
- Batas Aman: ≤30% THP = Rp [batas maksimal]
- Indikator: hijau (aman) atau merah (melebihi batas)

**Info Proses:**
- "Pengajuan Anda akan diverifikasi oleh HC, kemudian divalidasi oleh FAT. Estimasi proses: 3 hari kerja."

**Tombol:**
- "Batalkan" (secondary)
- "Kirim Pengajuan" (primary) — dinonaktifkan jika angsuran melebihi 30% THP

---

## Layar 8: Detail Pinjaman (detail-loan.html)

**Deskripsi:** Halaman detail pinjaman yang menampilkan riwayat pembayaran dan jadwal cicilan ke depan.

**Elemen UI:**

**Info Pinjaman:**
- Total pokok pinjaman
- Tanggal disetujui
- Tenor total dan sisa tenor
- Angsuran per bulan
- Estimasi tanggal lunas

**Riwayat Pembayaran (list):**
- Setiap baris: bulan ke-, tanggal potong, nominal, status (Terbayar/Tertunda)

**Jadwal ke Depan:**
- Daftar cicilan yang belum terbayar dengan tanggal jatuh tempo

---

## Layar 9: Halaman Status

### Status Disetujui (status-approved.html)
- Ikon checkmark berwarna hijau dalam lingkaran
- Judul "Pengajuan Disetujui"
- Detail keputusan: jenis pengajuan, tanggal, durasi/nominal
- Nama approver dan tanggal persetujuan
- Catatan dari approver (jika ada)
- Tombol "Kembali ke Beranda"

### Status Ditolak (status-rejected.html)
- Ikon silang berwarna merah dalam lingkaran
- Judul "Pengajuan Ditolak"
- Detail pengajuan yang ditolak
- Alasan penolakan dari atasan atau HC
- Tombol "Ajukan Ulang" (jika memungkinkan)
- Tombol "Kembali ke Beranda"

### Status Dalam Review — Khusus Pinjaman (status-loan-review.html)
- Ikon jam pasir atau proses dalam lingkaran biru
- Judul "Pengajuan Dalam Proses"
- Progress indicator tahapan: Diajukan ✓ | Verifikasi HC (aktif) | Validasi FAT | Selesai
- Estimasi waktu: "Proses membutuhkan 3 hari kerja"
- Informasi: "Kami akan mengirimkan notifikasi setelah ada keputusan."
- Tombol "Kembali ke Beranda"

---

## Layar 10: Profil Karyawan (profil.html)

**Deskripsi:** Halaman informasi profil karyawan yang bersifat read-only.

**Seksi Identitas:**
- Avatar dengan inisial (lingkaran warna primer)
- Nama lengkap (font besar)
- Jabatan | Departemen
- Cabang

**Seksi Data Kepegawaian:**
- NIK Karyawan
- Tanggal Bergabung
- Atasan Langsung
- Status Kepegawaian (Aktif/Kontrak)

**Seksi Status & Fasilitas:**
- Saldo Cuti Tahunan: [sisa] hari dari [total] hari
- Status SP: Tidak Ada SP / [jenis SP] aktif
- Pinjaman Aktif: [nominal] atau "Tidak Ada"

**Seksi Informasi Pembayaran:**
- Bank: [nama bank]
- No. Rekening: [nomor tersensor sebagian]
- A.N.: [nama pemilik rekening]

**Seksi Aset Perusahaan:**
- Setiap aset: ikon + nama aset + kondisi + tanggal pinjam
- Disclaimer: "Karyawan bertanggung jawab atas seluruh aset yang dipinjamkan perusahaan."

**Seksi Akun:**
- Tombol Logout (warna merah/danger)

---

## Layar 11: Pengumuman (pengumuman.html)

**Deskripsi:** Halaman daftar pengumuman resmi dari manajemen atau HC.

**Elemen UI:**
- Daftar pengumuman dengan: judul, tanggal, ringkasan singkat (1–2 baris), badge kategori (HR/Operasional/Umum)
- Diurutkan dari yang terbaru
- Filter berdasarkan kategori (opsional)

**Detail Pengumuman:**
- Judul lengkap
- Tanggal dan pembuat
- Konten pengkumuman lengkap
- Lampiran (jika ada)

---

# BAB 5
# Alur Notifikasi

## Matriks Notifikasi

| Trigger | Penerima | Isi Notifikasi |
| ------- | -------- | -------------- |
| Karyawan mengajukan izin/cuti baru | Atasan Langsung | "[Nama] mengajukan [jenis] pada [tanggal]. Mohon ditinjau." |
| Atasan menyetujui pengajuan | Tim HC | "Pengajuan [jenis] [Nama] sudah disetujui atasan. Menunggu persetujuan HC." |
| Atasan menolak pengajuan | Karyawan | "Pengajuan [jenis] Anda pada [tanggal] ditolak. Alasan: [alasan]." |
| HC menyetujui pengajuan | Karyawan | "Pengajuan [jenis] Anda pada [tanggal] telah disetujui oleh HC." |
| HC menolak pengajuan | Karyawan | "Pengajuan [jenis] Anda pada [tanggal] ditolak oleh HC. Alasan: [alasan]." |
| Karyawan mengajukan pinjaman baru | Tim HC | "[Nama] mengajukan pinjaman Rp [nominal]. Mohon diverifikasi." |
| HC memverifikasi pinjaman | Tim FAT | "Pinjaman [Nama] Rp [nominal] sudah diverifikasi HC. Menunggu validasi FAT." |
| HC menolak pinjaman | Karyawan | "Pengajuan pinjaman Anda ditolak oleh HC. Alasan: [alasan]." |
| FAT menyetujui pinjaman | Karyawan + HC | "Pinjaman Anda sebesar Rp [nominal] telah disetujui. Cicilan Rp [angsuran]/bulan mulai [tanggal]." |
| FAT menolak pinjaman | Karyawan + HC | "Pengajuan pinjaman Anda ditolak oleh FAT. Alasan: [alasan]." |

---

# BAB 6
# Rencana Implementasi

## Prioritas Fitur (MVP Phase 1)

| Prioritas | Fitur | Alasan |
| --------- | ----- | ------ |
| P1 | Dashboard Beranda | Titik masuk utama; memberikan nilai langsung sejak hari pertama |
| P1 | Kehadiran (read-only) | Transparansi data kehadiran adalah kebutuhan paling dasar |
| P1 | Izin & Cuti (pengajuan + approval workflow) | Menggantikan proses WhatsApp; mengurangi beban HC paling cepat |
| P1 | Profil Karyawan | Dasar identitas dan data referensi untuk fitur lain |
| P2 | Pinjaman (pemantauan + pengajuan) | Proses lebih kompleks; memerlukan integrasi payroll |
| P2 | Pengumuman | Nilai tambah; tidak menghalangi penggunaan fitur inti |
| P3 | Notifikasi lanjutan | Meningkatkan pengalaman; dapat dimulai dari in-app notification dasar |

## Target Timeline

| Fase | Konten | Target |
| ---- | ------ | ------ |
| Fase 1 | Dashboard, Kehadiran, Profil, Login | Bulan 1–2 |
| Fase 2 | Izin & Cuti (pengajuan + approval workflow) | Bulan 2–3 |
| Fase 3 | Pinjaman (lengkap + simulasi + approval) | Bulan 3–4 |
| Fase 4 | Pengumuman, notifikasi lanjutan | Bulan 4–5 |
| UAT & Go-live | Testing, training, deployment | Bulan 5–6 |

---

*Dokumen ini merupakan Business Requirement Document versi 1.0 untuk ESS Workforce Digital Platform — Internal Employee (Staff Kontrak). Seluruh requirement, scope, dan proses bisnis yang tercantum didasarkan pada analisis desain mockup dan kebutuhan operasional internal pada perusahaan ISP. Dokumen ini perlu divalidasi dan disetujui oleh seluruh stakeholder sebelum proses development dimulai.*
