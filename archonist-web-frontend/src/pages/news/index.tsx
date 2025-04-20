import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  styled,
  useTheme,
} from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';

const NewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 24px ${theme.palette.error.main}20`,
  },
}));

const NewsImage = styled(CardMedia)(({}) => ({
  height: 240,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  },
}));

const NewsDate = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(1),
}));

const NewsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  lineHeight: 1.4,
  '&:hover': {
    color: theme.palette.error.main,
  },
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderColor: theme.palette.error.main,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  },
}));

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Album 'Insanity' Out Now!",
    excerpt: "Experience the raw power and intensity of our latest album 'Insanity'. Available now on all major streaming platforms.",
    date: "March 15, 2024",
    readTime: "3 min",
    image: "/news/album-release.jpg",
    category: "Release"
  },
  {
    id: 2,
    title: "Upcoming Tour Dates Announced",
    excerpt: "Get ready to rock! We're hitting the road this summer. Check out our tour dates and secure your tickets now.",
    date: "March 10, 2024",
    readTime: "4 min",
    image: "/news/tour-announcement.jpg",
    category: "Tour"
  },
  {
    id: 3,
    title: "Behind the Scenes: Making of 'Insanity'",
    excerpt: "Take an exclusive look into our creative process and the journey of creating our most ambitious album yet.",
    date: "March 5, 2024",
    readTime: "5 min",
    image: "/news/behind-scenes.jpg",
    category: "Studio"
  },
  {
    id: 4,
    title: "New Merchandise Collection Launched",
    excerpt: "Check out our latest merchandise collection featuring exclusive designs and limited edition items.",
    date: "March 1, 2024",
    readTime: "2 min",
    image: "/news/merch-launch.jpg",
    category: "Merch"
  },
];

const News = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            mb: 6,
          }}
        >
                  <Typography
            variant="h2"
                    sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: theme.palette.error.main,
                    }}
                  >
            Latest News
                  </Typography>
    </Box>

        <Grid 
          container 
          spacing={4}
          sx={{
            width: '100%',
            margin: 0,
            justifyContent: 'center',
          }}
        >
          {newsItems.map((item) => (
            <Grid 
              
            >
              <NewsCard
                sx={{
                  width: '100%',
                  maxWidth: 600,
                }}
              >
                <NewsImage
                  image={item.image}
                  title={item.title}
                  sx={{
                    width: '100%',
                    height: { xs: 200, sm: 240 },
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      bgcolor: theme.palette.error.main,
                      color: theme.palette.primary.main,
                      px: 2,
                      py: 0.5,
                      borderRadius: '4px',
                      mb: 2,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    {item.category}
                  </Box>

                  <NewsDate>
                    <CalendarToday fontSize="small" />
                    {item.date}
                    <AccessTime fontSize="small" sx={{ ml: 2 }} />
                    {item.readTime} read
                  </NewsDate>

                  <NewsTitle variant="h5">
                    {item.title}
                  </NewsTitle>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 2,
                    }}
                  >
                    {item.excerpt}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <ReadMoreButton
                      variant="outlined"
                      size="large"
                      sx={{
                        minWidth: 200,
                      }}
                    >
                      Read More
                    </ReadMoreButton>
                  </Box>
                </CardContent>
              </NewsCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default News;