// react
import * as React from 'react';
// @mui
import { Box, BoxProps, Grid, styled, Typography } from '@mui/material';
// custom component
import MainLayout from 'components/layout/MainLayout';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import ContainerGrid from 'components/common/ContainerGrid';
import TextLink from 'components/common/TextLink';
import type { NextPage } from 'next';

const CustomBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '30% 1rem 5% 1rem',
  [theme.breakpoints.up(350)]: {
    margin: '20% 1rem 5% 1rem',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '15% 2rem 5% 2rem',
  },
  [theme.breakpoints.up('md')]: {
    margin: '10% 2rem 5% 2rem',
  },
}));

const HireMe: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.hireMe}>
      <CustomBox>
        <ContainerGrid>
          <Grid
            item           
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height='50vh'
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: '70%',
                },
              }}
            >
              <Typography component="h2" variant="h4">
                Contact Me
              </Typography>
              <Typography component="p" variant="body1">
                I'm happy to answer any questions about web development. Send me
                an email and start a conversation, or reach out to me on
                twitter.
              </Typography>
              <Typography component="address" variant="body1" mt={2}>
                send me an email at <TextLink href="mailto:augustolimads@gmail.com">augustolimads@gmail.com</TextLink>
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <ContactForm />
          </Grid> */}
        </ContainerGrid>
      </CustomBox>
    </MainLayout>
  );
};

export default HireMe;
