import AlbumArtVinyl from '../../components/albumArtVinyl';
import insanityCover from '../../assets/insanity.jpg';
import highwayCover from '../../assets/highway.jpg';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import SectionTitle from '../../components/sectionTitle';

const DiscographySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

  const discography = [
    {
      album: 'Insanity',
      songs: [
        'Count to Five',
        'Sweet Revenge',
        'Forged',
        'Another Life',
        'Raise On The Fire',
        'Illusion',
        'The Underrated Star',
        'Insanity',
      ],
      coverImage: insanityCover,
    },
    {
      album: 'Endless Highway',
      songs: [
        'Highway',
        'Born To Fight',
        'No Help Needed',
        'Alone',
        'Sands of Summertime',
        'One More Chance',
        'Safe at Home',
        'Wake Up To The Call',
      ],
      coverImage: highwayCover,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mt: 4,
        px: 2,
      }}
    >
      <SectionTitle title="Discography" />
      {discography.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: isMobile ? 3 : 6,
            mb: 6,
            width: '100%',
            maxWidth: '900px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {item.album}
            </Typography>
            {item.songs.map((song, index) => (
              <Typography key={index} variant="body1">
                {index + 1}. {song}
              </Typography>
            ))}
          </Box>
          <AlbumArtVinyl cover={item.coverImage} />
        </Box>
      ))}
    </Box>
  );
};

export default DiscographySection;
