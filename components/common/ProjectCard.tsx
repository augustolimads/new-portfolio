// react
import * as React from 'react';
// next
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
// @mui
import {
  Box,
  BoxProps,
  Card, CardActions,
  CardContent, CardProps, Skeleton, styled, Typography, useTheme
} from '@mui/material';
// @mui icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// custom component
import CustomButton from 'components/common/CustomButton';
// type
interface ProjectCardProps extends CardProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
  onButtonClick?: () => void;
}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  img: {
    transition: 'all 0.5s ease-in-out',
  },
  '&: hover': {
    img: {
      transition: 'all 0.5s ease-in-out',
      transform: 'scale(1.4)',
      filter: 'blur(2px)',
      WebkitFilter: 'blur(2px)',
    },
  },
}));

const ImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  margin: '1rem',
  height: '21rem',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (props) => {
  const { imageAlt, imageSrc, likes, title, onButtonClick, ...otherProps } =
    props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    palette: { primary },
  } = useTheme();

  return (
    <CustomCard {...otherProps}>
      <ImageContainer>
        <Image
          alt={imageAlt}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          onLoad={() => setIsLoaded(true)}
          quality={30}
        />
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            sx={{ backgroundColor: primary.main, height: '100%' }}
          />
        )}
      </ImageContainer>
      <CardContent>
        <Typography component="h3" variant="h6" textAlign="center">
          {isLoaded ? (
            title
          ) : (
            <Skeleton sx={{ backgroundColor: primary.main }} />
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CustomButton
          disableRipple
          variant="text"
          color="inherit"
          onClick={onButtonClick}
          sx={{ marginLeft: 'auto' }}
          endIcon={<ChevronRightIcon />}
        >
          more
        </CustomButton>
      </CardActions>
    </CustomCard>
  );
};

export default ProjectCard;
