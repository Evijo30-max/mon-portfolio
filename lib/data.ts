export const NAV_LINKS = [
  { label: 'À propos', href: '#about', index: '01' },
  { label: 'Compétences', href: '#skills', index: '02' },
  { label: 'Projets', href: '#projects', index: '03' },
  { label: 'Parcours', href: '#timeline', index: '04' },
  { label: 'Lab', href: '#lab', index: '05' },
  { label: 'Contact', href: '#contact', index: '06' },
]

export const MARQUEE_WORDS = [
  'RÉSEAUX',
  'CODE',
  'TÉLÉCOM',
  'DEV',
  'CISCO',
  'LINUX',
  'PYTHON',
  'PROTOCOLES',
]

export type SkillNode = {
  id: string
  label: string
  group: 'network' | 'code' | 'systems'
  related: string[]
}

export const SKILLS: SkillNode[] = [
  { id: 'routing', label: 'Routage & Switching', group: 'network', related: ['cisco', 'bgp', 'vlan', 'linux'] },
  { id: 'cisco', label: 'Cisco IOS', group: 'network', related: ['routing', 'vlan', 'bgp'] },
  { id: 'bgp', label: 'BGP / OSPF', group: 'network', related: ['routing', 'cisco'] },
  { id: 'vlan', label: 'VLAN / VPN', group: 'network', related: ['routing', 'cisco', 'security'] },
  { id: 'security', label: 'Sécurité', group: 'network', related: ['vlan', 'linux', 'python'] },
  { id: 'python', label: 'Python', group: 'code', related: ['automation', 'api', 'security'] },
  { id: 'js', label: 'JavaScript / TS', group: 'code', related: ['react', 'api', 'node'] },
  { id: 'react', label: 'React / Next.js', group: 'code', related: ['js', 'node'] },
  { id: 'node', label: 'Node.js', group: 'code', related: ['js', 'react', 'api'] },
  { id: 'api', label: 'API REST', group: 'code', related: ['python', 'js', 'node'] },
  { id: 'linux', label: 'Linux', group: 'systems', related: ['bash', 'docker', 'security', 'routing'] },
  { id: 'bash', label: 'Bash / Shell', group: 'systems', related: ['linux', 'automation'] },
  { id: 'docker', label: 'Docker', group: 'systems', related: ['linux', 'node'] },
  { id: 'automation', label: 'Automation', group: 'systems', related: ['python', 'bash'] },
]

export const TECH_STACK = [
  { cmd: 'cat /etc/network', out: 'Cisco · Juniper · pfSense · Wireshark' },
  { cmd: 'python3 --version', out: 'Python 3.12 · Flask · Scapy · Ansible' },
  { cmd: 'node --version', out: 'Node 22 · Next.js · TypeScript · React' },
  { cmd: 'uname -a', out: 'Debian · Arch · Ubuntu Server · WSL2' },
  { cmd: 'docker ps', out: 'Docker · Compose · Proxmox · VMware' },
  { cmd: 'git config user', out: 'Git · GitHub Actions · CI/CD' },
]

export type Project = {
  id: string
  title: string
  year: string
  category: string
  description: string
  tags: string[]
  image: string
}

export const PROJECTS: Project[] = [
  {
    id: 'netmon',
    title: 'NetPulse',
    year: '2025',
    category: 'Supervision réseau',
    description:
      'Outil de supervision temps réel qui cartographie la topologie et visualise le flux de paquets nœud par nœud.',
    tags: ['Python', 'SNMP', 'React', 'WebSocket'],
    image: '/project-network-monitor.png',
  },
  {
    id: 'vpn',
    title: 'TunnelForge',
    year: '2025',
    category: 'Sécurité',
    description:
      'Générateur et gestionnaire de tunnels VPN WireGuard avec rotation de clés et interface de contrôle.',
    tags: ['WireGuard', 'Go', 'Linux', 'CLI'],
    image: '/project-vpn.png',
  },
  {
    id: 'iot',
    title: 'MeshSense',
    year: '2024',
    category: 'IoT / Edge',
    description:
      'Réseau maillé de capteurs sur Raspberry Pi remontant la télémétrie via MQTT vers un dashboard live.',
    tags: ['Raspberry Pi', 'MQTT', 'Python', 'Grafana'],
    image: '/project-iot.png',
  },
  {
    id: 'dash',
    title: 'GridBoard',
    year: '2024',
    category: 'Web App',
    description:
      'Tableau de bord analytique modulaire avec widgets temps réel et thème terminal entièrement personnalisable.',
    tags: ['Next.js', 'TypeScript', 'D3', 'Postgres'],
    image: '/project-dashboard.png',
  },
  {
    id: 'cli',
    title: 'netcli',
    year: '2023',
    category: 'Outil dev',
    description:
      'CLI d\'automatisation réseau : audit de configuration, sauvegarde et déploiement massif d\'équipements.',
    tags: ['Python', 'Netmiko', 'Click', 'YAML'],
    image: '/project-cli.png',
  },
  {
    id: 'lab',
    title: 'HomeLab',
    year: 'ongoing',
    category: 'Infrastructure',
    description:
      'Lab personnel : cluster Proxmox, routage BGP interne, DNS auto-hébergé et CI/CD complet.',
    tags: ['Proxmox', 'BGP', 'Docker', 'Ansible'],
    image: '/project-lab.png',
  },
]

export const TIMELINE = [
  {
    year: '2025',
    title: 'Stage — Ingénierie réseau',
    place: 'Opérateur télécom',
    text: 'Déploiement et supervision d\'infrastructures fibre, automatisation des configurations.',
  },
  {
    year: '2024',
    title: 'Cycle Ingénieur Télécom',
    place: 'École d\'ingénieurs',
    text: 'Spécialisation réseaux, systèmes distribués et cybersécurité.',
  },
  {
    year: '2023',
    title: 'Projet associatif — Admin réseau',
    place: 'Association étudiante',
    text: 'Gestion du réseau et des serveurs, mise en place du monitoring.',
  },
  {
    year: '2022',
    title: 'Premiers pas — Développement',
    place: 'Autodidacte',
    text: 'Découverte de Python et du web, premiers scripts d\'automatisation.',
  },
]

export const EDUCATION = [
  {
    school: 'École d\'Ingénieurs',
    degree: 'Cycle Ingénieur — Télécommunications & Réseaux',
    period: '2023 — 2026',
    detail: 'Réseaux, systèmes, signal, cybersécurité et développement logiciel.',
  },
  {
    school: 'Classes préparatoires',
    degree: 'CPGE — Mathématiques & Physique',
    period: '2021 — 2023',
    detail: 'Fondations scientifiques solides, rigueur analytique et algorithmique.',
  },
]

export const GITHUB_STATS = [
  { label: 'Repositories', value: 48 },
  { label: 'Commits (an)', value: 1240 },
  { label: 'Stars', value: 96 },
  { label: 'Pull Requests', value: 210 },
]

export const LAB_ITEMS = [
  { title: 'Packet Visualizer', tag: 'canvas', text: 'Animation de flux de paquets sur un graphe.' },
  { title: 'ASCII Cam', tag: 'webgl', text: 'Rendu vidéo en art ASCII temps réel.' },
  { title: 'Subnet Calc', tag: 'tool', text: 'Calculateur de sous-réseaux instantané.' },
  { title: 'Latency Map', tag: 'data', text: 'Carte de latence entre datacenters.' },
]

export const SERVICES = [
  {
    id: '01',
    title: 'Architecture Réseau',
    text: 'Conception, segmentation et sécurisation d\'infrastructures réseau performantes et scalables.',
    points: ['Topologie & routage', 'VLAN / VPN', 'Supervision', 'Haute disponibilité'],
  },
  {
    id: '02',
    title: 'Développement Web',
    text: 'Applications web modernes, rapides et accessibles, du front-end à l\'API.',
    points: ['Next.js / React', 'API & back-end', 'UI temps réel', 'Performance'],
  },
  {
    id: '03',
    title: 'SysAdmin & Automation',
    text: 'Administration système Linux et automatisation des tâches et déploiements.',
    points: ['Linux / Docker', 'Ansible / scripts', 'CI/CD', 'Monitoring'],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Rigoureux et curieux, il comprend aussi bien la couche réseau que le code applicatif. Rare et précieux.',
    author: 'Tuteur de stage',
    role: 'Ingénieur réseau senior',
  },
  {
    quote:
      'Une capacité d\'automatisation impressionnante. Il transforme les corvées en scripts élégants.',
    author: 'Chef de projet',
    role: 'Association étudiante',
  },
  {
    quote:
      'Autonome, méthodique et toujours prêt à creuser un protocole jusqu\'au bout.',
    author: 'Professeur référent',
    role: 'École d\'ingénieurs',
  },
]

export const POSTS = [
  { title: 'Comprendre BGP en 10 minutes', read: '6 min', tag: 'Réseaux', date: 'Août 2025' },
  { title: 'Automatiser Cisco avec Python & Netmiko', read: '9 min', tag: 'Automation', date: 'Juin 2025' },
  { title: 'Mon HomeLab : architecture complète', read: '12 min', tag: 'Infra', date: 'Avr. 2025' },
]

export const CERTS = [
  { name: 'CCNA', org: 'Cisco', status: 'Certifié' },
  { name: 'Linux Essentials', org: 'LPI', status: 'Certifié' },
  { name: 'Network+', org: 'CompTIA', status: 'En cours' },
  { name: 'Python (PCAP)', org: 'OpenEDG', status: 'Certifié' },
  { name: 'AWS Cloud', org: 'Amazon', status: 'En cours' },
  { name: 'Security+', org: 'CompTIA', status: 'Visé' },
]

export const SOCIALS = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:hello@reso.dev' },
  { label: 'Twitter', href: '#' },
]
