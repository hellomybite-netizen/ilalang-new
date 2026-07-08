export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description?: string;
  gallery?: string[];
}

export const categories = ['All', 'Educational', 'Commercial', 'Sport', 'Housing Project', 'Residential', 'Religious'];

export const projects: Project[] = [
  {
    id: "insan-cendikia-madani",
    title: "Insan Cendikia Madani",
    category: "Educational",
    image: "/images/portfolio/insan-cendikia-madani/01.jpg",
    aspect: "aspect-[4/3]",
    description: "Kompleks pendidikan Islam terpadu di lahan 10 hektar, Tangerang Selatan. Master plan dirancang menyatu dengan topografi asli lahan untuk meminimalkan cut-and-fill, mengedepankan pendekatan kampus berkelanjutan yang menyeimbangkan fungsi pendidikan dengan lanskap alami.",
    gallery: [
      "/images/portfolio/insan-cendikia-madani/01.jpg",
      "/images/portfolio/insan-cendikia-madani/02.jpg",
      "/images/portfolio/insan-cendikia-madani/03.jpg",
      "/images/portfolio/insan-cendikia-madani/04.jpg"
    ]
  },
  {
    id: "al-azhar-iibs",
    title: "Al Azhar IIBS",
    category: "Educational",
    image: "/images/portfolio/al-azhar-iibs/01.jpg",
    aspect: "aspect-[4/3]",
    description: "Kompleks pendidikan Islam berstandar internasional di Tangerang Selatan yang memadukan nilai-nilai Islami dengan desain kontemporer. Elemen kaca yang luas dan palet warna netral menciptakan estetika timeless, dengan masjid heksagonal sebagai pusat spiritual kampus.",
    gallery: [
      "/images/portfolio/al-azhar-iibs/01.jpg",
      "/images/portfolio/al-azhar-iibs/02.jpg",
      "/images/portfolio/al-azhar-iibs/03.jpg"
    ]
  },
  {
    id: "quranic-ocean-view-qov-yogyakarta",
    title: "Quranic Ocean View (QOV) Yogyakarta",
    category: "Educational",
    image: "/images/portfolio/quranic-ocean-view-qov-yogyakarta/01.jpg",
    aspect: "aspect-[5/4]",
    description: "Sekolah berasrama internasional di Parangtritis yang berorientasi ke selatan untuk memaksimalkan pemandangan Samudra Hindia. Menggunakan batu alam dan beton ekspos, dengan layar bata berlubang yang memberi karakter taktil khas kawasan tropis.",
    gallery: [
      "/images/portfolio/quranic-ocean-view-qov-yogyakarta/01.jpg",
      "/images/portfolio/quranic-ocean-view-qov-yogyakarta/02.jpg",
      "/images/portfolio/quranic-ocean-view-qov-yogyakarta/03.jpg"
    ]
  },
  {
    id: "sekolah-alam-seyf-el-falah-selfa",
    title: "Sekolah Alam Seyf El Falah (SELFA)",
    category: "Educational",
    image: "/images/portfolio/sekolah-alam-seyf-el-falah-selfa/01.jpg",
    aspect: "aspect-[4/3]",
    description: "Kampus berbasis alam di Klaten yang dirancang sebagai ekosistem hidup, menyatukan ruang kelas, area komunal, dan taman bermain dalam lanskap ramah anak. Memadukan desain kontemporer dengan elemen vernakular tropis dan strategi desain pasif.",
    gallery: [
      "/images/portfolio/sekolah-alam-seyf-el-falah-selfa/01.jpg",
      "/images/portfolio/sekolah-alam-seyf-el-falah-selfa/02.jpg",
      "/images/portfolio/sekolah-alam-seyf-el-falah-selfa/03.jpg"
    ]
  },
  {
    id: "insight-business-school-kemuning",
    title: "Insight Business School Kemuning",
    category: "Educational",
    image: "/images/portfolio/insight-business-school-kemuning/01.jpg",
    aspect: "aspect-[5/4]",
    description: "Pengembangan kampus pendidikan bisnis Insight Business School di kawasan Kemuning, bagian dari portofolio pendidikan Ilalang Architect Corp.",
    gallery: [
      "/images/portfolio/insight-business-school-kemuning/01.jpg",
      "/images/portfolio/insight-business-school-kemuning/02.jpg"
    ]
  },
  {
    id: "bsw-showroom-furniture",
    title: "BSW Showroom Furniture",
    category: "Commercial",
    image: "/images/portfolio/bsw-showroom-furniture/01.jpg",
    aspect: "aspect-[4/3]",
    description: "Fasilitas korporat di Malang yang memadukan showroom, kantor, dan gudang dalam satu pengembangan terintegrasi. Bahasa desain modern minimalis dengan bentuk geometris bersih dan komposisi seimbang antara elemen solid dan transparan.",
    gallery: [
      "/images/portfolio/bsw-showroom-furniture/01.jpg",
      "/images/portfolio/bsw-showroom-furniture/02.jpg",
      "/images/portfolio/bsw-showroom-furniture/03.jpg"
    ]
  },
  {
    id: "yarsis-international-hospital-bangkalan",
    title: "YARSIS International Hospital Bangkalan",
    category: "Commercial",
    image: "/images/portfolio/yarsis-international-hospital-bangkalan/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Fasilitas kesehatan Tipe C di Bangkalan, Madura yang dirancang sebagai landmark modern kawasan. Massa bangunan melengkung, mahkota silinder ikonik, dan planter box bertingkat dengan tanaman rambat membantu menyejukkan iklim mikro.",
    gallery: [
      "/images/portfolio/yarsis-international-hospital-bangkalan/01.jpg",
      "/images/portfolio/yarsis-international-hospital-bangkalan/02.jpg"
    ]
  },
  {
    id: "private-villa-canggu",
    title: "Private Villa Canggu",
    category: "Commercial",
    image: "/images/portfolio/private-villa-canggu/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Kompleks vila butik bergaya Contemporary Tropical Balinese di Canggu, Bali, dikembangkan bersama LaChuba Villas.",
    gallery: [
      "/images/portfolio/private-villa-canggu/01.jpg",
      "/images/portfolio/private-villa-canggu/02.jpg",
      "/images/portfolio/private-villa-canggu/03.jpg"
    ]
  },
  {
    id: "reven-leather",
    title: "Reven Leather",
    category: "Commercial",
    image: "/images/portfolio/reven-leather/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Showroom produk kulit premium di Malang yang merefleksikan identitas brand Reven Leather melalui desain retail yang berani. Fasad layar logam berlubang dengan rangka baja hitam matte menciptakan kehadiran jalanan yang kuat.",
    gallery: [
      "/images/portfolio/reven-leather/01.jpg",
      "/images/portfolio/reven-leather/02.jpg",
      "/images/portfolio/reven-leather/03.jpg"
    ]
  },
  {
    id: "padel-garden-araya",
    title: "Padel Garden Araya",
    category: "Sport",
    image: "/images/portfolio/padel-garden-araya/01.jpg",
    aspect: "aspect-[5/4]",
    description: "Kompleks olahraga premium di Malang dengan 5 lapangan padel, dirancang sebagai ruang komunitas yang menyatukan olahraga, gaya hidup, dan alam. Siluet terinspirasi barn, dibalut louver kayu hangat dan volume putih.",
    gallery: [
      "/images/portfolio/padel-garden-araya/01.jpg",
      "/images/portfolio/padel-garden-araya/02.jpg",
      "/images/portfolio/padel-garden-araya/03.jpg"
    ]
  },
  {
    id: "jungle-padel-malang",
    title: "Jungle Padel Malang",
    category: "Sport",
    image: "/images/portfolio/jungle-padel-malang/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Kompleks padel premium dengan identitas terinspirasi hutan tropis. Fasad logam berlubang dibalut taman vertikal, lobi melengkung dramatis, dan lapangan yang diselimuti dinding hijau hidup dengan koneksi visual ke alam sekitar.",
    gallery: [
      "/images/portfolio/jungle-padel-malang/01.jpg",
      "/images/portfolio/jungle-padel-malang/02.jpg",
      "/images/portfolio/jungle-padel-malang/03.jpg"
    ]
  },
  {
    id: "niscala-female-living",
    title: "Niscala Female Living",
    category: "Housing Project",
    image: "/images/portfolio/niscala-female-living/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Hunian eksklusif khusus mahasiswi di kawasan Puncak Dieng, Malang, dengan gaya Modern Tropical Classic — bukaan lengkung elegan, proporsi seimbang, dan nuansa netral yang hangat. Mengutamakan privasi, keamanan, dan efisiensi operasional jangka panjang.",
    gallery: [
      "/images/portfolio/niscala-female-living/01.jpg",
      "/images/portfolio/niscala-female-living/02.jpg",
      "/images/portfolio/niscala-female-living/03.jpg"
    ]
  },
  {
    id: "sakha-regency",
    title: "Sakha Livin Student Residence",
    category: "Housing Project",
    image: "/images/portfolio/sakha-regency/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Hunian mahasiswa premium di koridor pendidikan Malang, mengadopsi gaya Modern Tropical Scandinavian dengan siluet atap pelana berulang dan tekstur bata hangat, dirancang untuk ventilasi dan pencahayaan alami optimal.",
    gallery: [
      "/images/portfolio/sakha-regency/01.jpg",
      "/images/portfolio/sakha-regency/02.jpg"
    ]
  },
  {
    id: "geoffry-residence-malang",
    title: "Geoffry Residence",
    category: "Residential",
    image: "/images/portfolio/geoffry-residence-malang/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Rumah tinggal mewah pribadi di kawasan Taman Indrakila, Malang, dengan pendekatan Contemporary Tropical — garis horizontal bersih, kaca luas, dan overhang atap dalam. Dua volume bangunan dihubungkan courtyard tengah sebagai titik fokus hijau.",
    gallery: [
      "/images/portfolio/geoffry-residence-malang/01.jpg",
      "/images/portfolio/geoffry-residence-malang/02.jpg",
      "/images/portfolio/geoffry-residence-malang/03.jpg"
    ]
  },
  {
    id: "dr-sania-house",
    title: "Dr. Sania House",
    category: "Residential",
    image: "/images/portfolio/dr-sania-house/01.jpg",
    aspect: "aspect-[3/2]",
    description: "Hunian urban kontemporer di Surabaya dengan volume geometris bersih, overhang dalam, dan perpaduan batu alam, kayu hangat, serta kaca lebar — menyeimbangkan privasi dan keterbukaan untuk merespons iklim tropis.",
    gallery: [
      "/images/portfolio/dr-sania-house/01.jpg",
      "/images/portfolio/dr-sania-house/02.jpg",
      "/images/portfolio/dr-sania-house/03.jpg"
    ]
  },
  {
    id: "nirwana-house-bogor",
    title: "Nirwana House, Bogor",
    category: "Residential",
    image: "/images/portfolio/nirwana-house-bogor/01.jpg",
    aspect: "aspect-[5/4]",
    description: "Hunian modern di tepi air kawasan Bogor, bagian dari koleksi karya residensial Ilalang Architect Corp.",
    gallery: [
      "/images/portfolio/nirwana-house-bogor/01.jpg",
      "/images/portfolio/nirwana-house-bogor/02.jpg",
      "/images/portfolio/nirwana-house-bogor/03.jpg"
    ]
  },
  {
    id: "ppa-99-cahaya-mosque-sagalaherang",
    title: "PPA 99 Cahaya Mosque",
    category: "Religious",
    image: "/images/portfolio/ppa-99-cahaya-mosque-sagalaherang/01.jpg",
    aspect: "aspect-[5/4]",
    description: "Masjid PPA 99 Cahaya di Sagalaherang, dirancang dengan pendekatan arsitektur modern monumental sebagai pusat spiritual komunitas.",
    gallery: [
      "/images/portfolio/ppa-99-cahaya-mosque-sagalaherang/01.jpg",
      "/images/portfolio/ppa-99-cahaya-mosque-sagalaherang/02.jpg",
      "/images/portfolio/ppa-99-cahaya-mosque-sagalaherang/03.jpg"
    ]
  }
];
