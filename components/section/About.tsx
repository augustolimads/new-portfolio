// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardContent,
  CardProps,
  Collapse,
  Grid,
  Skeleton,
  styled,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import ExpandMoreIconButton from 'components/common/ExpandMoreIconButton';
import InstagramIconLink from 'components/common/InstagramIconLink';
import TwitterIconLink from 'components/common/TwitterIconLink';
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: '100%' }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="John Doe profile image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/profile.jpg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: 'currentcolor',
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: '2rem', position: 'relative' }}
          >
            <Card
              sx={{ boxShadow: 'none', height: '100%', position: 'relative' }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold">
                A bit about me
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1">
                  I started my journey in the technology universe as an UI
                  designer using Adobe XD and website development using
                  Wordpress. My first contact with programming was with the
                  Python language, in which I have great affection.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: '0.5rem',
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1">
                    However, I decided to direct my career towards the
                    Front-End, bringing together the skills of designer and
                    programmer. After forming a good foundation with HTML, CSS
                    and Javascript I chose ReactJS as the main technology
                    ecosystem for its flexibility to work both in web systems
                    with ReactJS and mobile applications with React Native. In
                    my professional career I've worked on the creation of
                    landing pages to web systems with various integrations,
                    interactions and technologies; Since before the pandemic,
                    I've worked as a semi-remote and I identified a lot with
                    remote work. I enjoy working on building products and
                    solutions that make people's lives easier. I aim to create
                    simple, intuitive and attractive products. I'm currently
                    focusing on specializing in React for both web platforms
                    with NextJS and mobile with Native. Using clean code best
                    practices, good architecture and unit tests using Jest,
                    React Testing Library, and other technologies like
                    Storybook.
                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: 'flex-start',
                    }}
                  />
                )}
                <div>
                  <InstagramIconLink />
                  <TwitterIconLink />
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
