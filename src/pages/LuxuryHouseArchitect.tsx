import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  Compass,
  Home,
  Layers3,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  SunMedium,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, organizationSchema } from '../components/seo/Seo';
import { projects } from '../data/projects';

const PAGE_PATH = '/arsitek-rumah-mewah';
const WHATSAPP_NUMBER = '628113198800';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Halo Ilalang Architect, saya tertarik konsultasi desain rumah mewah. Lokasi proyek saya di ... dan luas lahannya sekitar ... m².',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const featuredProjectIds = [
  'geoffry-residence-malang',
  'dr-sania-house',
  'nirwana-house-bogor',
];

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const painPoints = [
  'Tampak depan terlihat menarik, tetapi alur ruang tidak sesuai rutinitas keluarga.',
  'Material mahal dipilih tanpa mempertimbangkan iklim, perawatan, dan usia pakai.',
  'Desain terlihat bagus di gambar, namun sulit diwujudkan sesuai batas anggaran.',
  'Arsitektur, interior, dan pelaksanaan berjalan sendiri-sendiri tanpa satu arah desain.',
];

const principles = [
  {
    icon: Home,
    title: 'Karakter yang Personal',
    description:
      'Program ruang disusun dari kebiasaan, kebutuhan privasi, cara menerima tamu, hingga rencana keluarga di masa depan.',
  },
  {
    icon: SunMedium,
    title: 'Cahaya & Udara Alami',
    description:
      'Orientasi, bukaan, naungan, dan courtyard dipertimbangkan agar rumah terasa lega, nyaman, dan relevan dengan iklim tropis.',
  },
  {
    icon: Layers3,
    title: 'Fungsi yang Terukur',
    description:
      'Sirkulasi, area servis, struktur, dan pilihan material dikembangkan sebagai satu kesatuan, bukan keputusan yang terpisah.',
  },
];

const services = [
  {
    number: '01',
    title: 'Desain Arsitektur',
    description:
      'Dari pengolahan kebutuhan ruang dan konsep hingga gambar teknis serta visualisasi 3D.',
  },
  {
    number: '02',
    title: 'Desain Interior',
    description:
      'Menyelaraskan suasana, material, pencahayaan, dan furnitur dengan bahasa arsitektur rumah.',
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      'Pendampingan menuju pelaksanaan dengan kontrol kualitas dan arah desain yang tetap terjaga.',
  },
];

const process = [
  {
    number: '01',
    title: 'Konsultasi Awal',
    description: 'Kami memahami lokasi, kebutuhan ruang, preferensi desain, dan batas anggaran Anda.',
  },
  {
    number: '02',
    title: 'Konsep Desain',
    description: 'Alternatif tata ruang, bentuk, suasana, dan respons tapak dikembangkan untuk menemukan arah yang tepat.',
  },
  {
    number: '03',
    title: 'Pengembangan',
    description: 'Konsep terpilih diterjemahkan menjadi visualisasi dan gambar teknis yang lebih rinci.',
  },
  {
    number: '04',
    title: 'Menuju Realisasi',
    description: 'Kami membantu menjaga keputusan desain tetap konsisten saat proyek masuk tahap pelaksanaan.',
  },
];

const faqs = [
  {
    question: 'Apakah Ilalang Architect hanya melayani proyek di Malang?',
    answer:
      'Tidak. Studio kami berbasis di Malang dan melayani perencanaan proyek di berbagai kota di Indonesia. Alur koordinasi akan disesuaikan dengan lokasi dan kebutuhan proyek.',
  },
  {
    question: 'Apakah bisa mulai dari lahan kosong?',
    answer:
      'Bisa. Tahap awal justru ideal untuk membaca potensi tapak, orientasi matahari, akses, kebutuhan ruang, dan batasan yang perlu diperhitungkan sejak konsep.',
  },
  {
    question: 'Apakah layanan dapat mencakup interior dan pelaksanaan?',
    answer:
      'Ya. Selain desain arsitektur, Ilalang menyediakan layanan desain interior dan design & build. Ruang lingkupnya akan ditentukan sesuai kebutuhan proyek Anda.',
  },
  {
    question: 'Apa yang perlu disiapkan sebelum konsultasi?',
    answer:
      'Cukup siapkan lokasi dan perkiraan ukuran lahan, kebutuhan ruang, referensi suasana yang disukai, serta kisaran anggaran bila sudah ada. Tim kami akan membantu menyusun langkah berikutnya.',
  },
  {
    question: 'Berapa biaya jasa arsitek rumah mewah?',
    answer:
      'Biaya bergantung pada luas, kompleksitas, lokasi, serta ruang lingkup layanan. Setelah kebutuhan awal dipahami, tim kami dapat menjelaskan lingkup kerja dan estimasi yang relevan secara transparan.',
  },
];

const landingSchemas = [
  organizationSchema,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jasa Arsitek Rumah Mewah',
    serviceType: 'Desain arsitektur rumah mewah',
    provider: { '@id': 'https://ilalang.id/#organization' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    url: `https://ilalang.id${PAGE_PATH}`,
    description:
      'Layanan desain arsitektur rumah mewah yang personal, responsif terhadap iklim tropis, dan terarah dari konsep hingga pelaksanaan.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
  breadcrumbSchema([
    { name: 'Beranda', path: '/' },
    { name: 'Arsitek Rumah Mewah', path: PAGE_PATH },
  ]),
];

function trackWhatsAppClick(position: string) {
  const browserWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  browserWindow.dataLayer?.push({
    event: 'generate_lead',
    lead_method: 'whatsapp',
    landing_page: 'arsitek_rumah_mewah',
    cta_position: position,
  });
}

function WhatsAppCta({ position, inverse = false }: { position: string; inverse?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(position)}
      className={`inline-flex items-center justify-center gap-3 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 group sm:px-9 sm:py-5 ${
        inverse
          ? 'bg-brand-beige text-brand-dark hover:bg-white'
          : 'bg-brand-dark text-white hover:bg-brand-earth'
      }`}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="sm:hidden">Konsultasi WhatsApp</span>
      <span className="hidden sm:inline">Konsultasikan Rumah Anda</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function LuxuryHouseArchitect() {
  return (
    <div className="bg-brand-beige pb-24">
      <Seo
        title="Arsitek Rumah Mewah | Desain Eksklusif Ilalang"
        description="Jasa arsitek rumah mewah untuk hunian personal, nyaman, dan sesuai iklim tropis. Dari konsep, interior, hingga design & build. Konsultasi sekarang."
        path={PAGE_PATH}
        image="/images/portfolio/geoffry-residence-malang/01.jpg"
        structuredData={landingSchemas}
      />

      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-12 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 lg:col-span-6"
          >
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">
              Jasa Arsitek Rumah Mewah • Indonesia
            </span>
            <h1 className="max-w-3xl text-[40px] font-medium leading-[1.04] tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-6xl lg:text-[74px]">
              Rumah Mewah yang Benar-Benar{' '}
              <span className="font-light text-brand-dark/55">Mencerminkan Anda</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-brand-dark/65 md:text-base">
              Ilalang Architect merancang hunian yang tidak berhenti di fasad—tata ruang dibangun dari cara Anda hidup, respons terhadap iklim tropis, dan keputusan material yang terukur sejak awal.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppCta position="hero" />
              <a
                href="#portfolio-rumah"
                className="inline-flex items-center justify-center px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark ring-1 ring-brand-dark/20 transition-colors hover:bg-white sm:px-9 sm:py-5"
              >
                <span className="sm:hidden">Lihat Portofolio</span>
                <span className="hidden sm:inline">Lihat Proyek Residensial</span>
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 border-t border-brand-border pt-6 text-[10px] font-semibold uppercase tracking-wider text-brand-dark/60 sm:grid-cols-3">
              {['Konsultasi awal tanpa biaya', 'Desain personal', 'Konsep hingga pelaksanaan'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-earth" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-tr-[100px] bg-brand-border md:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src="/images/portfolio/geoffry-residence-malang/01.jpg"
                alt="Desain rumah mewah tropis kontemporer karya Ilalang Architect"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/65">Featured Residential</p>
                <p className="mt-2 text-2xl font-medium">Geoffry Residence, Malang</p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-white/70">Contemporary Tropical dengan courtyard sebagai titik fokus hijau.</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 max-w-[220px] bg-white p-5 shadow-xl md:-left-10 md:p-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-earth">Better Design, Better Value</p>
              <p className="mt-3 text-sm leading-6 text-brand-dark/70">Keindahan, kenyamanan, dan keterbangunan dipikirkan sebagai satu kesatuan.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white px-6 py-7 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/55 md:flex-row md:gap-12">
          <span>Studio berbasis di Malang</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-earth md:block" />
          <span>Melayani proyek di berbagai kota</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-earth md:block" />
          <span>Arsitektur • Interior • Design & Build</span>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Bukan Sekadar Fasad</span>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Kemewahan yang terasa setiap hari, bukan hanya terlihat.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-brand-dark/60">
              Rumah bernilai tinggi lahir dari keputusan yang saling terhubung—cara ruang mengalir, cahaya masuk, privasi terjaga, dan material menua dengan baik.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {painPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-brand-earth/10 bg-white p-7"
              >
                <span className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-beige text-[10px] font-bold text-brand-earth">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-sm leading-6 text-brand-dark/70">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-6 py-24 text-brand-beige md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Pendekatan Ilalang</span>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-brand-beige md:text-6xl">
              Karakter, cahaya, dan fungsi dalam satu bahasa desain.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-dark p-8 md:p-10"
                >
                  <Icon className="mb-9 h-8 w-8 text-brand-earth" />
                  <h3 className="text-2xl font-medium text-brand-beige">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-beige/55">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Ruang Lingkup</span>
              <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">Satu visi, dijaga dari konsep menuju realisasi.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-brand-dark/55">Pilih ruang lingkup yang sesuai. Tim kami akan membantu menyusun tahapan berdasarkan kebutuhan proyek Anda.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.number} className="border-t border-brand-dark/20 py-8">
                <span className="text-5xl font-bold text-brand-earth/20">{service.number}</span>
                <h3 className="mt-6 text-2xl font-medium">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-dark/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-rumah" className="scroll-mt-28 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Selected Residential Works</span>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">Rumah yang dirancang untuk konteks dan penghuninya.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-brand-border">
                    <img
                      src={project.image}
                      alt={`${project.title}, portofolio arsitek rumah mewah Ilalang Architect`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium transition-colors group-hover:text-brand-earth">{project.title}</h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-6 text-brand-dark/55">{project.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark underline decoration-brand-earth/40 underline-offset-8 hover:text-brand-earth">
              Lihat Seluruh Portofolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Cara Kami Bekerja</span>
              <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">Jelas di setiap tahap.</h2>
              <p className="mt-6 text-sm leading-7 text-brand-dark/60">Setiap keputusan penting dibahas dan dikembangkan bertahap agar desain tidak kehilangan arah saat diwujudkan.</p>
            </div>
            <div className="lg:col-span-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid grid-cols-[48px_1fr] gap-5 border-t border-brand-border py-7 md:grid-cols-[72px_200px_1fr] md:gap-7"
                >
                  <span className="text-sm font-bold text-brand-earth">{item.number}</span>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="col-start-2 text-sm leading-7 text-brand-dark/55 md:col-start-3">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Kecocokan Proyek</span>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">Ilalang cocok untuk Anda jika…</h2>
          </div>
          <div className="space-y-5 lg:col-span-7">
            {[
              'Anda menginginkan rumah yang dirancang dari kebutuhan, bukan mengambil desain template.',
              'Anda menghargai kualitas ruang, cahaya alami, detail material, dan kenyamanan jangka panjang.',
              'Anda ingin anggaran dibicarakan sejak awal agar keputusan desain tetap realistis.',
              'Anda mencari partner desain yang dapat mendampingi proses secara terarah.',
            ].map((item) => (
              <div key={item} className="flex gap-4 border-b border-brand-border pb-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-earth" />
                <p className="text-sm leading-7 text-brand-dark/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-6 py-20 text-brand-beige md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Punya Lahan atau Rencana Renovasi?</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-brand-beige md:text-5xl">Ceritakan rumah yang ingin Anda bangun.</h2>
            <p className="mt-5 text-sm leading-7 text-brand-beige/55">Mulai dari lokasi, ukuran lahan, kebutuhan ruang, dan kisaran anggaran. Tim kami akan membantu memetakan langkah awalnya.</p>
          </div>
          <WhatsAppCta position="mid_page" inverse />
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Pertanyaan Umum</span>
            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">Sebelum memulai konsultasi.</h2>
            <div className="mt-8 flex gap-4 text-brand-earth">
              <Compass className="h-6 w-6" />
              <Lightbulb className="h-6 w-6" />
            </div>
          </div>
          <div className="lg:col-span-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-t border-brand-border py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium marker:content-none">
                  {faq.question}
                  <span className="text-2xl font-light text-brand-earth transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-5 text-sm leading-7 text-brand-dark/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.32em] text-brand-earth">Mulai dari Percakapan</span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">Rumah yang tepat dimulai dari brief yang dipahami dengan baik.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-brand-dark/60">Klik WhatsApp untuk konsultasi awal. Ceritakan lokasi, luas lahan, kebutuhan ruang, dan gambaran rumah yang Anda inginkan.</p>
          <div className="mt-10">
            <WhatsAppCta position="final" />
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-brand-dark/45">Respons langsung dari tim Ilalang Architect</p>
        </div>
      </section>
    </div>
  );
}
