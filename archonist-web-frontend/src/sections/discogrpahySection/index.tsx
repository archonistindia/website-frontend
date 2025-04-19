import AlbumArtVinyl from '../../components/albumArtVinyl'
import insanityCover from '../../assets/insanity.jpg';
import highwayCover from '../../assets/highway.jpg';
import { Box, Typography } from '@mui/material';
import SectionTitle from '../../components/sectionTitle';

const DiscographySection = () => {
    const covers = [
        insanityCover, highwayCover
    ]
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mt: 4,
      }}
    >
        <SectionTitle title="Discography" />
        {covers && covers.length && covers.map((cover, i) => (
            <AlbumArtVinyl cover={cover} key={i}/>
        ))}
    </Box>
  )
}

export default DiscographySection