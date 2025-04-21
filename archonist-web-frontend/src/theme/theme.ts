import { createTheme } from '@mui/material';

// Custom color constants
const COLORS = {
  red: {
    main: 'rgb(158, 27, 27)',
    light: 'rgb(110, 2, 2)',
    dark: 'rgb(47, 0, 0)',
    hover: 'rgb(128, 0, 0)',
  },
  dark: {
    main: '#050505',      // Darker main background
    paper: 'rgb(24, 25, 28)',     // Darker paper background
    light: 'rgb(28, 29, 32)',     // Slightly lighter for hover states
    overlay: 'rgba(18, 19, 21, 0.95)', // For overlays
  }
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 255, 255)',
      light: '#FFFFFF',
      dark: '#CCCCCC',
    },
    secondary: {
      main: 'rgb(135, 139, 116)',
      light: '#ABA891',
      dark: '#8B8B71',
    },
    error: {
      main: COLORS.red.main,
      light: COLORS.red.light,
      dark: COLORS.red.dark,
    },
    background: {
      default: COLORS.dark.main,
      paper: COLORS.dark.paper,
    },
    text: {
      primary: 'rgb(216, 216, 216)',
      secondary: '#9B9B81',
    },
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 255, 255, 0.2)',
    },
    divider: 'rgba(155, 155, 129, 0.12)',
  },
  typography: { 
    fontFamily: '"Slumber","Antone", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '6rem',
      fontWeight: 700,
      // letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    h5: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.05em',

    },
    h6: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.03em',
      fontFamily: 'Antone',

    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      color: '#9B9B81',
      fontFamily: 'Antone',

    },
    button: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 500,
      fontFamily: 'Antone',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          '&:hover': {
            backgroundColor: 'rgba(155, 155, 129, 0.1)',
          },
        },
        contained: {
          backgroundColor: COLORS.dark.paper,
          '&:hover': {
            backgroundColor: COLORS.dark.light,
          },
          '&.MuiButton-containedError': {
            backgroundColor: COLORS.red.main,
            '&:hover': {
              backgroundColor: COLORS.red.dark,
            },
          },
        },
        outlined: {
          borderColor: '#9B9B81',
          '&:hover': {
            borderColor: '#FFFFFF',
            backgroundColor: 'rgba(155, 155, 129, 0.1)',
          },
          '&.MuiButton-outlinedError': {
            borderColor: COLORS.red.main,
            color: COLORS.red.main,
            '&:hover': {
              borderColor: COLORS.red.light,
              backgroundColor: COLORS.red.hover,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark.paper,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.dark.paper,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark.overlay,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(155, 155, 129, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(155, 155, 129, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFFFF',
            },
            '&.error fieldset': {
              borderColor: COLORS.red.main,
            },
          },
        },
      },
    },
  },
});

// Custom mixins for common styles
export const commonStyles = {
  gradientText: {
    background: 'linear-gradient(45deg, #FFFFFF 30%, #9B9B81 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  redGradientText: {
    background: `linear-gradient(45deg, ${COLORS.red.main} 30%, ${COLORS.red.light} 90%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  glassMorphism: {
    backgroundColor: COLORS.dark.overlay,
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(155, 155, 129, 0.12)',
  },
  redGlassMorphism: {
    backgroundColor: COLORS.dark.overlay,
    backdropFilter: 'blur(8px)',
    border: `1px solid ${COLORS.red.main}`,
    boxShadow: `0 0 10px ${COLORS.red.hover}`,
  },
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: COLORS.dark.main,
    backgroundImage: `radial-gradient(circle at center, ${COLORS.dark.paper} 0%, ${COLORS.dark.main} 100%)`,
  },
  sectionPadding: {
    padding: '4rem 0',
  },
  highlightGradient: {
    background: `linear-gradient(90deg, transparent, ${COLORS.red.main}, transparent)`,
  },
};

// Export colors for direct usage
export const themeColors = {
  ...COLORS,
};