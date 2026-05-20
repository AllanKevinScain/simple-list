const techs = [
  'ReactJS',
  'TypeScript',
  'Next.js',
  'React Native',
  'TailwindCSS',
  'Prisma',
];
const techDiv = document.getElementById('tech');
techs.forEach((tech) => {
  const span = document.createElement('span');
  span.className = 'bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg';
  span.innerHTML = tech;

  techDiv.appendChild(span);
});

const formations = [
  {
    id: '1',
    title: 'Análise e Desenvolvimento de Sistemas',
    entity: 'FACCAT',
    status: '',
  },
  {
    id: '2',
    title: 'Cursos focados em Front-end e Mobile',
    entity: 'Udemy - Alura',
    status: '',
  },
];
const formationsUl = document.getElementById('formations');
formations.forEach((formation) => {
  const li = document.createElement('li');
  li.className =
    'bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500 transition';
  li.innerHTML = `
    <h3 class="text-xl font-semibold text-white">
        ${formation.title}
    </h3>

    <p class="text-slate-400">${formation.entity} — ${formation.status ? formation.status : 'Em andamento'}</p>
  `;

  formationsUl.appendChild(li);
});

const experiences = [
  {
    id: '1',
    title: 'Desenvolvedor Front-end',
    status: '2022 — Atualmente',
    description:
      'Desenvolvimento de interfaces modernas e responsivas utilizando ReactJS, Next.js e TailwindCSS. Criação de aplicações mobile com React Native e Expo, integração com APIs, gerenciamento de estado, animações avançadas e otimização de performance.',
  },
  {
    id: '2',
    title: 'Projetos Freelancer',
    status: '2021 — Atualmente',
    description:
      'Criação de landing pages, dashboards administrativos, sistemas web e aplicativos mobile personalizados para diferentes clientes, focando em usabilidade, visual moderno e escalabilidade.',
  },
];
const expDiv = document.getElementById('exp');
experiences.forEach((exp) => {
  const article = document.createElement('article');
  article.className = 'bg-slate-900 border border-slate-800 rounded-2xl p-6';
  article.innerHTML = `
    <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3"
    >
        <h3 class="text-2xl font-bold text-cyan-400">
            ${exp.title}
        </h3>

        <p class="text-slate-500">${exp.status}</p>
    </div>

    <p class="text-slate-300 leading-relaxed">
        ${exp.description}
    </p>
  `;

  expDiv.appendChild(article);
});

const projects = [
  {
    id: '1',
    title: 'Dashboard Empresarial com IA',
    description:
      'Plataforma desenvolvida em Next.js com geração de relatórios e insights utilizando inteligência artificial.',
    ulr: '#',
  },
  {
    id: '2',
    title: 'Aplicativo Mobile em React Native',
    description:
      'Aplicativo focado em experiência mobile moderna utilizando Expo, animações e integração com APIs.',
    ulr: '#',
  },
  {
    id: '3',
    title: 'Landing Pages Responsivas',
    description:
      'Desenvolvimento de páginas modernas com foco em performance, acessibilidade e SEO.',
    ulr: '#',
  },
  {
    id: '4',
    title: 'Sistema de Gestão Web',
    description:
      'Sistema administrativo completo com autenticação, gráficos, formulários e integração com banco de dados.',
    ulr: '#',
  },
];
const projectsUl = document.getElementById('projects');
projects.forEach((project) => {
  const li = document.createElement('li');
  li.className =
    'bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3';
  li.innerHTML = `
    <h3 class="text-xl font-semibold text-white">
        ${project.title}
    </h3>

    <p class="text-slate-400">
        ${project.description}
    </p>

    <a
        href="${project.ulr}"
        target="_blank"
        class="text-cyan-400 hover:text-cyan-300 font-medium"
    >
        Visualizar projeto →
    </a>
  `;

  projectsUl.appendChild(li);
});
