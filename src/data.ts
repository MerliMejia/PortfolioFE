export type Tech = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Experience = {
  label: string;
  description: string;
  tech: string[];
};

export const techs: Tech[] = [
  {
    src: '/images/react.svg',
    alt: 'React',
    width: 60,
    height: 60,
  },
  {
    src: '/images/flutter.svg',
    alt: 'Firebase',
    width: 60,
    height: 60,
  },
  {
    src: '/images/typescript.svg',
    alt: 'TypeScript',
    width: 60,
    height: 60,
  },
  {
    src: '/images/tailwindcss.svg',
    alt: 'Tailwind CSS',
    width: 60,
    height: 60,
  },
  {
    src: '/images/next-js.svg',
    alt: 'Next.js',
    width: 60,
    height: 60,
  },
  {
    src: '/images/material-ui.svg',
    alt: 'Material UI',
    width: 60,
    height: 60,
  },
  {
    src: '/images/python.svg',
    alt: 'Python',
    width: 60,
    height: 60,
  },
  {
    src: '/images/django.svg',
    alt: 'Django',
    width: 60,
    height: 60,
  },
  {
    src: '/images/nodejs.svg',
    alt: 'Node.js',
    width: 180,
    height: 180,
  },
  {
    src: '/images/postgresql.svg',
    alt: 'PostgreSQL',
    width: 60,
    height: 60,
  },
  {
    src: '/images/mysql.svg',
    alt: 'MySQL',
    width: 120,
    height: 120,
  },
  {
    src: '/images/firebase.svg',
    alt: 'Firebase',
    width: 60,
    height: 60,
  },
];

export const experiences: Experience[] = [
  {
    label:
      'Cleveland Museum of Art, Senior Full-Stack Developer — Jun 2023 - Jan 2024',
    description:
      // eslint-disable-next-line quotes
      "Implemented a functionality facilitating users to effortlessly renew their memberships without the necessity of logging into their accounts. Conducted a thorough analysis of the pre-existing implementation of this feature using Python and subsequently refactored it in Next.JS. Introducing a token-based system was pivotal in enhancing security measures, eliminating the exposure of sensitive user information such as email or database ID in URL queries. Additionally, played a key role in the successful deployment of the organization's revamped and improved website.",
    tech: [
      'Git',
      'JavaScript',
      'React',
      'TypeSacript',
      'Axios',
      'Next.JS',
      'MaterialUI',
      'Cypress',
      'Storybook',
    ],
  },
  {
    label: 'Get Hearth, Frontend Developer — Nov 2022 - May 2023',
    description:
      // eslint-disable-next-line quotes
      'Helped move the codebase from a normal “create-react-app” to Next.JS and then to make the Next.JS project + the React Native Project a monorepo and to share components between the Mobile app and the Web app using Tamagui. I also implemented a feature that allows the user to create drafs of the different products like invoices, quotes and contracts.',
    tech: [
      'Git',
      'JavaScript',
      'Node.js',
      'React.js',
      'React Native',
      'MaterialUI',
      'Ruby on Rails',
    ],
  },
  {
    label: 'CareCentrix, Frontend Developer  — Feb 2022 - Nov 2022',
    description:
      // eslint-disable-next-line quotes
      'I built React.js components, implement new UI features and fix different bugs. My leadership in this project, constant feedback to the team, eye for details and quick adaptation to the project’s tech stack helped the company to launch a great platform on time that is now being used by thousands of users.',
    tech: [
      'Redux.js',
      'Git',
      'JavaScript',
      'Node.js',
      'React.js',
      'Ruby on Rails',
      'Chakra UI',
    ],
  },
  {
    label: 'Constant Contact, Software Engineer — Sep 2021 - Feb 2022',
    description:
      // eslint-disable-next-line quotes
      'During my stay at this company, I wrote high-quality, reusable, pixel-perfect front-end components in React. Most of those components were made from scratch following an already made UI/UX design, but I also worked on already-written code. I was in charge of researching and implementing a fix for a bug in one critical component in their custom UI library which ended up saving the team a lot of time in the development process of the newly enhanced platform.',
    tech: ['Redux.js', 'Git', 'JavaScript', 'Node.js', 'React.js'],
  },
  {
    label: 'Self Employed, Professional Freelancer — Jan 2018 - Oct 2021',
    description:
      // eslint-disable-next-line quotes
      'Worked on all kinds of projects for clients from all around the world.',
    tech: [
      'Redux.js',
      'Git',
      'Java',
      'TypeScript',
      'Flutter',
      'PostgreSQL',
      'JavaScript',
      'Node.js',
      'React.js',
      'MongoDB',
    ],
  },
  {
    label: 'Harding Media, Full-stack Developer — Jan 2017 - Oct 2018',
    description:
      // eslint-disable-next-line quotes
      'In this startup, I was completely in charge of the design and development of a web-based platform for ordering food with auth using email, Google and Facebook, PayPal API, and a real-time notification system. I provided the design of the whole backend structure used in both the web and mobile app which helped the mobile developers focus on the frontend work and accelerate the overall development time which led to a faster release.',
    tech: [
      'React.js',
      'Node.js',
      'Redux.js',
      'Git',
      'Firebase',
      'MaterialUI',
      'bootstrap',
    ],
  },
];
