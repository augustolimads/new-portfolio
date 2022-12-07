// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Augusto Lima',
    description:
      'My portfolio maded with Nextjs and MUI v5, based on the bag template.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as a developer in this page.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
};

export default pages;
