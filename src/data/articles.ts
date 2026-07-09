export interface ArticleBlock {
  type: 'p' | 'h2' | 'img';
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  date: string;
  readTime: string;
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    id: "tren-arsitektur-tropis-modern-indonesia",
    title: "Tren Arsitektur Tropis Modern di Indonesia: Panduan Lengkap 2026",
    category: "Tren Desain",
    excerpt: "Ventilasi silang, material alami, dan desain hemat energi — simak tren arsitektur tropis modern yang paling relevan untuk rumah dan bangunan komersial di Indonesia.",
    metaDescription: "Simak tren arsitektur tropis modern 2026 di Indonesia: ventilasi silang, material alami, dan desain hemat energi yang cocok untuk iklim tropis.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2069",
    date: "15 Jan 2026",
    readTime: "7 min read",
    content: [
      {
        type: 'p',
        text: "Indonesia memiliki iklim tropis dengan kelembapan tinggi, curah hujan besar, dan paparan sinar matahari sepanjang tahun. Kondisi ini membuat arsitektur tropis modern semakin diminati, baik untuk hunian pribadi maupun bangunan komersial. Berbeda dari arsitektur tropis tradisional yang mengandalkan bentuk vernakular, pendekatan modern menggabungkan prinsip kenyamanan iklim dengan estetika kontemporer yang bersih dan fungsional."
      },
      {
        type: 'h2',
        text: "Apa Itu Arsitektur Tropis Modern?"
      },
      {
        type: 'p',
        text: "Arsitektur tropis modern adalah pendekatan desain yang merespons karakteristik iklim tropis — panas, lembap, dan curah hujan tinggi — melalui strategi desain pasif, tanpa mengorbankan tampilan visual yang kontemporer. Fokus utamanya ada pada sirkulasi udara alami, pencahayaan yang optimal, serta pemilihan material yang tahan terhadap kelembapan dan perubahan suhu."
      },
      {
        type: 'img',
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070",
        alt: "Interior rumah tropis modern dengan pencahayaan alami",
        caption: "Pencahayaan alami menjadi elemen kunci dalam desain tropis modern."
      },
      {
        type: 'h2',
        text: "Elemen Kunci dalam Desain Tropis Modern"
      },
      {
        type: 'p',
        text: "Ada beberapa elemen desain yang hampir selalu hadir dalam bangunan tropis modern yang berhasil. Pertama, ventilasi silang (cross ventilation) — penempatan bukaan di dua sisi berlawanan agar udara dapat mengalir bebas dan menurunkan suhu ruangan secara alami tanpa bergantung sepenuhnya pada pendingin udara. Kedua, overhang atap yang lebar untuk melindungi dinding dan bukaan dari tampias hujan sekaligus mengurangi panas matahari langsung yang masuk ke dalam ruangan."
      },
      {
        type: 'p',
        text: "Ketiga, penggunaan void atau courtyard di tengah bangunan yang berfungsi sebagai sumur cahaya sekaligus jalur sirkulasi udara vertikal. Keempat, material alami seperti kayu, batu, dan bata ekspos yang secara visual hangat namun tetap tahan terhadap kondisi iklim. Kombinasi elemen-elemen ini menghasilkan bangunan yang nyaman dihuni tanpa perlu bergantung besar pada sistem mekanis."
      },
      {
        type: 'h2',
        text: "Tren yang Berkembang di 2026"
      },
      {
        type: 'p',
        text: "Beberapa tren mulai terlihat kuat pada arsitektur tropis modern di Indonesia. Desain biofilik — mengintegrasikan tanaman dan elemen alam langsung ke dalam struktur bangunan — semakin populer, baik dalam bentuk taman vertikal, roof garden, maupun void hijau di tengah rumah. Material daur ulang dan material lokal juga semakin banyak dipilih karena pertimbangan keberlanjutan dan biaya distribusi yang lebih efisien."
      },
      {
        type: 'p',
        text: "Sistem shading pintar, seperti louver kayu yang dapat disesuaikan arahnya mengikuti pergerakan matahari, mulai diterapkan pada proyek-proyek komersial dan hunian kelas menengah ke atas. Selain estetis, sistem ini efektif menekan beban panas bangunan sehingga kebutuhan energi untuk pendinginan ruangan dapat ditekan secara signifikan."
      },
      {
        type: 'h2',
        text: "Tips Menerapkan Prinsip Tropis Modern di Rumah Anda"
      },
      {
        type: 'p',
        text: "Jika Anda berencana membangun atau merenovasi rumah dengan pendekatan tropis modern, mulailah dari orientasi bangunan terhadap arah matahari dan angin dominan di lokasi Anda. Diskusikan dengan arsitek mengenai potensi ventilasi silang sejak tahap perencanaan denah, bukan sebagai elemen tambahan di akhir. Pertimbangkan juga penggunaan atap dengan overhang yang cukup lebar, serta pemilihan material fasad yang sesuai dengan karakter iklim di daerah Anda."
      },
      {
        type: 'p',
        text: "Arsitektur tropis modern bukan sekadar tren estetika, melainkan pendekatan desain yang benar-benar merespons kondisi iklim Indonesia. Dengan perencanaan yang tepat sejak awal, rumah atau bangunan komersial Anda tidak hanya tampil menarik, tetapi juga lebih nyaman dan hemat energi dalam jangka panjang."
      }
    ]
  },
  {
    id: "panduan-memilih-arsitek-rumah-impian",
    title: "Panduan Memilih Arsitek untuk Rumah Impian: 7 Hal yang Wajib Diperhatikan",
    category: "Panduan Klien",
    excerpt: "Memilih arsitek yang tepat menentukan hasil akhir rumah impian Anda. Berikut 7 hal penting yang perlu dipertimbangkan sebelum menandatangani kontrak.",
    metaDescription: "Bingung memilih arsitek untuk membangun rumah? Simak 7 hal penting sebelum menentukan jasa arsitek yang tepat untuk proyek Anda.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070",
    date: "22 Jan 2026",
    readTime: "6 min read",
    content: [
      {
        type: 'p',
        text: "Membangun rumah adalah investasi besar yang akan digunakan bertahun-tahun ke depan. Memilih arsitek yang tepat sama pentingnya dengan memilih lokasi atau anggaran, karena arsitek yang tepat akan menerjemahkan kebutuhan dan gaya hidup Anda menjadi ruang yang benar-benar berfungsi. Berikut tujuh hal yang perlu diperhatikan sebelum memutuskan menggunakan jasa arsitek tertentu."
      },
      {
        type: 'h2',
        text: "1. Periksa Portofolio dan Spesialisasi"
      },
      {
        type: 'p',
        text: "Setiap arsitek memiliki gaya dan kekuatan yang berbeda — ada yang lebih kuat di desain residensial, ada pula yang lebih berpengalaman pada bangunan komersial atau fasilitas khusus. Pelajari portofolio proyek yang pernah mereka kerjakan, perhatikan apakah gaya desainnya sesuai dengan visi Anda, dan tanyakan proyek mana yang paling mirip dengan kebutuhan Anda saat ini."
      },
      {
        type: 'h2',
        text: "2. Pastikan Legalitas dan Keanggotaan Profesi"
      },
      {
        type: 'p',
        text: "Arsitek profesional di Indonesia idealnya terdaftar dan memiliki Sertifikat Keahlian (SKA) serta tergabung dalam Ikatan Arsitek Indonesia (IAI). Legalitas ini penting bukan hanya sebagai formalitas, tetapi juga menjamin bahwa desain yang dihasilkan memenuhi standar teknis dan dapat digunakan untuk pengurusan izin bangunan seperti PBG (Persetujuan Bangunan Gedung)."
      },
      {
        type: 'img',
        src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=2070",
        alt: "Diskusi perencanaan desain arsitektur bersama klien",
        caption: "Diskusi kebutuhan dan anggaran sejak tahap awal akan menentukan kelancaran proyek."
      },
      {
        type: 'h2',
        text: "3. Diskusikan Anggaran Sejak Awal"
      },
      {
        type: 'p',
        text: "Arsitek yang baik akan menanyakan kisaran anggaran Anda di awal pertemuan, bukan setelah desain selesai dibuat. Keterbukaan mengenai anggaran membantu arsitek merancang solusi yang realistis, menghindari kekecewaan akibat desain yang ternyata jauh melebihi kemampuan finansial Anda saat memasuki tahap konstruksi."
      },
      {
        type: 'h2',
        text: "4. Pahami Proses dan Timeline Kerja"
      },
      {
        type: 'p',
        text: "Tanyakan tahapan kerja secara jelas — mulai dari konsep desain, pengembangan desain, dokumentasi teknis, hingga pengawasan konstruksi. Pahami juga estimasi waktu untuk setiap tahap, sehingga Anda memiliki ekspektasi yang realistis mengenai kapan rumah dapat mulai dibangun dan selesai."
      },
      {
        type: 'h2',
        text: "5. Perhatikan Komunikasi dan Chemistry"
      },
      {
        type: 'p',
        text: "Proses merancang rumah biasanya berlangsung berbulan-bulan, bahkan lebih lama untuk proyek konstruksi. Pastikan Anda merasa nyaman berkomunikasi dengan arsitek yang dipilih — apakah mereka responsif, mau mendengarkan masukan, dan mampu menjelaskan keputusan desain dengan cara yang mudah dipahami."
      },
      {
        type: 'h2',
        text: "6. Tanyakan Layanan Pengawasan Konstruksi"
      },
      {
        type: 'p',
        text: "Desain yang bagus di atas kertas tidak menjamin hasil akhir yang sesuai jika tidak diawasi dengan baik selama konstruksi. Tanyakan apakah jasa arsitek yang Anda pilih juga mencakup pengawasan berkala di lapangan, untuk memastikan detail desain, kualitas material, dan pengerjaan sesuai dengan rencana."
      },
      {
        type: 'h2',
        text: "7. Baca Kontrak dengan Teliti"
      },
      {
        type: 'p',
        text: "Sebelum menandatangani kesepakatan, pastikan lingkup pekerjaan, biaya jasa, jadwal pembayaran, serta hak dan kewajiban kedua belah pihak tercantum secara jelas dalam kontrak. Jangan ragu bertanya jika ada klausul yang kurang Anda pahami — kontrak yang jelas akan melindungi kedua belah pihak sepanjang proyek berlangsung."
      },
      {
        type: 'p',
        text: "Memilih arsitek bukan sekadar mencari yang paling murah atau paling terkenal, melainkan mencari mitra yang benar-benar memahami visi dan kebutuhan Anda. Dengan mempertimbangkan ketujuh hal di atas, Anda akan lebih siap menemukan arsitek yang tepat untuk mewujudkan rumah impian."
      }
    ]
  },
  {
    id: "material-bangunan-tahan-iklim-tropis",
    title: "Material Bangunan Tahan Iklim Tropis: Panduan Lengkap untuk Rumah di Indonesia",
    category: "Material & Konstruksi",
    excerpt: "Dari batu alam hingga beton ekspos — kenali material bangunan yang tahan terhadap kelembapan dan panas iklim tropis, sekaligus tetap estetis.",
    metaDescription: "Panduan memilih material bangunan tahan iklim tropis Indonesia: dari batu alam, kayu, hingga beton ekspos yang awet dan estetis.",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=2069",
    date: "2 Feb 2026",
    readTime: "8 min read",
    content: [
      {
        type: 'p',
        text: "Iklim tropis Indonesia — dengan kelembapan tinggi, curah hujan besar, dan paparan sinar UV yang kuat — menuntut pemilihan material bangunan yang tepat. Material yang salah pilih dapat menyebabkan kerusakan dini, seperti lapuk, berjamur, atau memudar warnanya hanya dalam hitungan tahun. Berikut panduan memilih material yang tahan lama sekaligus tetap estetis untuk bangunan di iklim tropis."
      },
      {
        type: 'h2',
        text: "Kenapa Pemilihan Material Sangat Penting di Iklim Tropis?"
      },
      {
        type: 'p',
        text: "Kelembapan tinggi mempercepat pertumbuhan jamur dan lumut pada permukaan yang menyerap air, sementara paparan matahari langsung dapat memudarkan warna dan melemahkan struktur material tertentu seperti plastik atau kayu berkualitas rendah. Curah hujan yang deras juga menuntut material fasad dan atap yang benar-benar kedap air serta tahan terhadap tampias angin kencang."
      },
      {
        type: 'h2',
        text: "Material Rekomendasi untuk Fasad Tropis"
      },
      {
        type: 'p',
        text: "Batu alam, seperti andesit atau batu candi, menjadi pilihan populer karena daya tahannya terhadap cuaca ekstrem dan tampilan yang semakin menarik seiring waktu. Bata ekspos juga banyak digunakan karena selain tahan lama, teksturnya memberikan karakter visual yang hangat pada fasad bangunan. Sebagai alternatif yang lebih ringan dan efisien biaya, panel GRC (Glassfiber Reinforced Cement) semakin populer karena tahan air, ringan, dan dapat dicetak dalam berbagai bentuk dekoratif seperti kisi-kisi atau ornamen fasad."
      },
      {
        type: 'img',
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=2070",
        alt: "Tekstur material kayu alami untuk bangunan tropis",
        caption: "Kayu memberi kehangatan visual, namun butuh perawatan berkala untuk tahan lama di iklim tropis."
      },
      {
        type: 'h2',
        text: "Material untuk Atap Tahan Panas dan Hujan"
      },
      {
        type: 'p',
        text: "Untuk penutup atap, genteng beton dan genteng metal berlapis pasir menjadi pilihan yang cukup umum karena tahan terhadap panas dan hujan sekaligus relatif ekonomis. Untuk bangunan dengan pendekatan desain lebih modern, atap metal dengan lapisan insulasi panas semakin banyak dipilih karena efektif mengurangi transfer panas ke dalam ruangan sekaligus memiliki bobot yang ringan terhadap struktur."
      },
      {
        type: 'h2',
        text: "Kayu: Keindahan Alami dengan Perawatan Tepat"
      },
      {
        type: 'p',
        text: "Kayu tetap menjadi material favorit untuk elemen dekoratif seperti louver, decking, dan plafon karena kehangatan visual yang sulit ditiru material lain. Namun, kayu memerlukan perawatan berkala berupa pelapisan anti rayap dan pelindung UV agar tidak cepat lapuk atau memudar. Kayu jenis keras seperti ulin, merbau, atau bengkirai umumnya lebih tahan lama untuk penggunaan eksterior dibandingkan kayu lunak."
      },
      {
        type: 'h2',
        text: "Tips Merawat Material Agar Tahan Lama"
      },
      {
        type: 'p',
        text: "Selain pemilihan material yang tepat, perawatan rutin tetap diperlukan untuk memperpanjang usia bangunan. Bersihkan permukaan fasad secara berkala untuk mencegah penumpukan lumut dan jamur, terutama pada area yang minim sinar matahari langsung. Periksa talang air dan sistem drainase secara rutin agar air hujan tidak menggenang dan merembes ke struktur bangunan. Untuk material kayu, lakukan pelapisan ulang setiap satu hingga dua tahun tergantung tingkat paparan cuaca."
      },
      {
        type: 'p',
        text: "Memilih material yang tepat sejak awal perencanaan akan menghemat biaya perawatan dan perbaikan dalam jangka panjang. Konsultasikan dengan arsitek atau kontraktor Anda mengenai kombinasi material yang paling sesuai dengan kondisi lokasi dan anggaran proyek Anda."
      }
    ]
  }
];
