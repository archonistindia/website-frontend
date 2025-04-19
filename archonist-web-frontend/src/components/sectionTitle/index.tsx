import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h2" fontWeight="bold" color="text.primary">
        {title}
      </Typography>
      <Box
        sx={{
          width: '80px',
          height: '4px',
          backgroundColor: 'red',
          borderRadius: '2px',
          mt: 1,
          mb: 3,
          mx: 'auto', // center the line horizontally
        }}
      />
    </Box>
  );
};

export default SectionTitle;
