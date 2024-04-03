import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  useScrollTrigger,
  Theme,
  useMediaQuery,
  useTheme, Box,
} from '@mui/material';

import Logo from  '../../assets/Logo_Blanco.png'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  spacer: {
    marginLeft: theme.spacing(0),
  },
  menu: {
    padding: 0,
  },
  popOverPaper: {
    width: '100%',
    marginTop: 40,
  },
}));

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));
  const trigger = useScrollTrigger({
    threshold: 80,
    disableHysteresis: true,
  });

  const isCurrentHome = (): boolean => {
    if (pathname === '/') {
      return false;
    } else if (pathname === '/home-alt') {
      return false;
    } else if (pathname === '/quotation') {
      return false;
    }
    return true;
  };



  return (
    <div className={classes.root}>
      <AppBar
        elevation={trigger || isCurrentHome() ? 4 : 0}
        position={'fixed'}
        style={{ background: '#0074ff' }}
      >
        <Container maxWidth={'xl'}>
          <Toolbar
            style={{
              width: '100%',
            }}
          >
            <Box sx={{display:'flex',width:'100%',justifyContent:{xs:'center',lg:'left'}}}>
              <Box
                  component={'img'}
                  src={Logo}
                  sx={{
                    maxWidth: { xs: 120, md: 120 },
                  }}
                  style={{
                    objectFit: 'contain',
                    cursor: 'pointer',
                  }}
                  alt={'Inter, seguro, seguro'}

              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
