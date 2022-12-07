// dayjs
import dayjs, { Dayjs } from 'dayjs';
// type
import { ProjectCategory } from 'types/categoryType';
import { ImageProps } from 'types/imageType';

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  image: ImageProps;
  postFileName: string;
  title: string;
}

const ProjectConstructor = (props: ProjectDetails): ProjectDetails => {
  const { category, date, id, image, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    image,
    postFileName,
  };
};

const projectsData: ProjectDetails[] = [
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(1, 'week'),
    id: 'bxCompanion',
    postFileName: 'BXCompanion',
    title: 'BXCompanion App',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/bxcompanion.gif',
      width: 3260,
    },
  }),
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(4, 'week'),
    id: 'moreHealth',
    postFileName: 'morehealth',
    title: 'Mais Saúde Contabilidade',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/maissaude.gif',
      width: 3260,
    },
  }),
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(19, 'week'),
    id: 'homeArena',
    postFileName: 'homearena',
    title: 'Home Arena',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/home-arena.gif',
      width: 3260,
    },
  }),
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(24, 'week'),
    id: 'iOpen',
    postFileName: 'iopen',
    title: 'IOpen',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/site-iopen.gif',
      width: 3260,
    },
  }),
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(8, 'month'),
    id: 'institutoDons',
    title: 'Instituto Dons',
    postFileName: 'institutodons',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/instituto-dons.gif',
      width: 3260,
    },
  }),
  ProjectConstructor({
    category: ['frontend'],
    date: dayjs().subtract(8, 'month'),
    id: 'checkin',
    title: 'Checkin Mudanças',
    postFileName: 'checkin',
    image: {
      alt: 'woman in gray dress sitting on stairs',
      height: 4074,
      likes: 51,
      src: '/projects/site-checkin.gif',
      width: 3260,
    },
  }),
];

export default projectsData;
