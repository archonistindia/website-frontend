import { Box, useMediaQuery, useTheme } from '@mui/material';
import './AlbumArtVinyl.css';

interface AlbumArtVinylProps {
  cover: string;
}

const AlbumArtVinyl: React.FC<AlbumArtVinylProps> = ({ cover }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="album-container">
      <Box className="cover-wrapper">
        {!isMobile && (
          <div className="vinyl-overlap">
            <div
              className="vinyl-disc"
              style={{ backgroundImage: `url(${cover})` }}
            >
              <div className="vinyl-center-hole" />
              <div className="vinyl-glare" />
            </div>
          </div>
        )}
        <div className="album-cover-container">
          <img src={cover} alt="Album Cover" className="album-cover" />
        </div>
      </Box>
    </Box>
  );
};

export default AlbumArtVinyl;
