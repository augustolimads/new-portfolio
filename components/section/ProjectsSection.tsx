// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Grid, Grow, Typography } from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import TypingEffect from 'components/common/TypingEffect';
// custom context
import ProjectCard from 'components/common/ProjectCard';
import ConstantsContext from 'context/constantsContext';
// type
interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = (
  props
) => {
  const { projects } = React.useContext(ConstantsContext);
  const [projectsToRender, setProjectsToRender] = React.useState(projects);
  const router = useRouter();

  const options = [
    { label: 'Most Recent', active: true },
    { label: 'Most Popular' },
    { label: 'Photography' },
    { label: 'Design' },
  ];

  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        textAlign="center"
        marginTop="20%"
      >
        My Projects
      </Typography>
      <Box
        color="text.secondary"
        sx={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}
      >
        <TypingEffect staticText="as a" text={['software engineer', 'front-end developer']} />
      </Box>
      <ContainerGrid
        justifyContent={
          projectsToRender?.length === 1 ? 'center' : 'flex-start'
        }
        sx={{
          padding: {
            xs: '0 1rem',
            sm: '0 2rem',
          },
        }}
      >
        {projectsToRender
          ? projectsToRender.map((project, index) => (
              <Grow
                in={true}
                key={project.title + index}
                timeout={(index + 1) * 500}
              >
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard
                    imageAlt={project.image.alt}
                    imageSrc={project.image.src}
                    title={project.title}
                    onButtonClick={() => router.push(`/projects/${project.id}`)}
                    sx={{
                      maxWidth: '21rem',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </Grid>
              </Grow>
            ))
          : 'no project'}
      </ContainerGrid>
    </>
  );
};

export default ProjectsSection;
