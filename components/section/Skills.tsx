// react
import * as React from 'react';
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  styled,
  Typography
} from '@mui/material';
//icons
import { ImHtmlFive } from 'react-icons/im';
import { RiReactjsLine } from 'react-icons/ri';
import { SiChakraui } from 'react-icons/si';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import SkillProgress from 'components/common/SkillProgress';
// custom icons
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <ImHtmlFive size={32} />,
      title: 'HTML/CSS/JS/TS',
      progressValue: 100,
    },
    {
      Icon: <RiReactjsLine size={32} />,
      title: 'ReactJS/Nextjs',
      progressValue: 100,
    },
    {
      Icon: <SiChakraui size={32} />,
      title: 'Chakra UI/Tailwind',
      progressValue: 100,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title}`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
