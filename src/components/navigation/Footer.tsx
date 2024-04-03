import React from 'react';
import { Box, Container, Grid, Link, Typography, Stack, Divider } from '@mui/material';

import LogoWhite from '../../assets/Logo_Blanco.png';
import LogoSorianaWhite from '../../assets/Logo_Blanco.png';




export const Footer: React.FC = () => (
  <Box
    component={'footer'}
    sx={{ bgcolor: '#0074ff' }}
    position="absolute"
    width="100%"
  >
    <Container maxWidth={'lg'}>
      <Grid container spacing={8} marginTop="0">
        <Grid item xs={12} md={4}>
          <Stack
            direction={'row'}
            justifyContent="left"
            alignItems={'center'}
            spacing={0}
           >

            <Box sx={{ flexShrink: 0,flex: { xs:1,lg:0}, paddingLeft: { xs:'10px',sm:0}}}>
                                      <Link underline="none">
                                          <Box component={'img'} src={LogoSorianaWhite}
                                               sx={{
                                                 width: { xs:140,sm: 160, md: 160 },
                                                 maxWidth: { xs:140,sm: 160, md: 180 },
                                               }} />
                                    </Link>
                                </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              variant={'subtitle1'}
              color={'white'}
              fontWeight={'bold'}
              style={{ cursor: 'pointer' }}
            >
              {'Contáctanos'}
            </Typography>
            <Box marginBottom={2} />
            <Typography
                variant={'subtitle2'}
                color={'white'}
                style={{ cursor: 'pointer' }}
            >
              {'Calle 23 No. 53a, Col. México, 97125 Mérida, Yuc.'}
            </Typography>

            <Box marginBottom={2} />
            <Typography
                variant={'subtitle2'}
                color={'white'}
                style={{ cursor: 'pointer' }}
            >
              {'hola@macropay.mx'}
            </Typography>

            <Box marginBottom={2} />
            <Typography
                variant={'subtitle2'}
                color={'white'}
                style={{ cursor: 'pointer' }}
            >
              {'525510345000'}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              variant={'subtitle1'}
              color={'white'}
              fontWeight={'bold'}
            >
              {'Cliente'}
            </Typography>
            <Box marginBottom={2} />
            <Typography
              variant={'subtitle1'}
              color={'white'}
              style={{ cursor: 'pointer' }}
            >
              {'Avíso de privacidad'}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box paddingY={2} />
      <Box marginBottom={4} />
      <Box
        paddingY={1}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          textAlign={'center'}
          variant={'caption'}
          color={'white'}
          style={{ fontWeight: 300 }}
        >
          {'Copyright '} {new Date().getFullYear()} {'® Macropay'}
        </Typography>
      </Box>
    </Container>
  </Box>
);
