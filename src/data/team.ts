export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamGroup {
  group: string;
  members: TeamMember[];
}

export const team: TeamGroup[] = [
  {
    group: "Principal Architect",
    members: [
      { name: "Ar. Musa Wahyu Rizqi, IAI", role: "Principal Architect", image: "/images/team/musa-wahyu-rizqi.jpg" },
      { name: "Ar. Ryan Gahara Putra, IAI", role: "Principal Architect", image: "/images/team/ryan-gahara-putra.jpg" },
    ]
  },
  {
    group: "Board of Director and Management",
    members: [
      { name: "Anugroho Fajar Islami, S.Psi", role: "Executive Director", image: "/images/team/anugroho-fajar-islami.jpg" },
      { name: "Muhammad Andy Akbar, ST", role: "Executive Director", image: "/images/team/muhammad-andy-akbar.jpg" },
      { name: "Abdul Halim, ST", role: "Project Development", image: "/images/team/abdul-halim.jpg" },
      { name: "Rizal Fakhrudi", role: "Digital Expertise", image: "/images/team/rizal-fakhrudi.jpg" },
      { name: "Yusril Rifqi Naufaly", role: "Creative Engineer", image: "/images/team/yusril-rifqi-naufaly.jpg" },
      { name: "Chalisa Amalia Putri", role: "Backoffice", image: "/images/team/chalisa-amalia-putri.jpg" },
      { name: "Muhammad Esa", role: "Visualization Engineer", image: "/images/team/muhammad-esa.jpg" },
    ]
  },
  {
    group: "Architect Team",
    members: [
      { name: "I'tishom Abdu Rahiim", role: "Senior Architect", image: "/images/team/itishom-abdu-rahiim.jpg" },
      { name: "Vino Syafara Yusuf F.", role: "Lead Architect", image: "/images/team/vino-syafara-yusuf.jpg" },
      { name: "Antony Dwi Saktian", role: "Senior Architect", image: "/images/team/antony-dwi-saktian.jpg" },
      { name: "Syamsul A. Romadlon", role: "Senior Architect", image: "/images/team/syamsul-a-romadlon.jpg" },
      { name: "Fadila Andriani", role: "Junior Architect", image: "/images/team/fadila-andriani.jpg" },
      { name: "Salsabila Ananda", role: "Interior Designer", image: "/images/team/salsabila-ananda.jpg" },
    ]
  },
  {
    group: "Engineer Team",
    members: [
      { name: "Achmad H. Fauzan", role: "Project Manager", image: "/images/team/achmad-h-fauzan.jpg" },
      { name: "Nico Yudha J.", role: "Project Manager", image: "/images/team/nico-yudha-j.jpg" },
      { name: "Jefri Abdul K.", role: "Project Engineer", image: "/images/team/jefri-abdul-k.jpg" },
      { name: "Kifny Mubarok", role: "Senior Engineer", image: "/images/team/kifny-mubarok.jpg" },
      { name: "Muhammad Ilham", role: "QC Engineer", image: "/images/team/muhammad-ilham.jpg" },
      { name: "Rahmad Endri", role: "Legal Admission", image: "/images/team/rahmad-endri.jpg" },
      { name: "Axel Devandeo", role: "Structure Engineer", image: "/images/team/axel-devandeo.jpg" },
      { name: "Dhea Shofia", role: "Structure Engineer", image: "/images/team/dhea-shofia.jpg" },
    ]
  }
];
