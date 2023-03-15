import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Container, Divider, Typography} from '@mui/material';
import Skaleton from '../partials/Skaleton'
import Card from '../Playlist/Card'
import { Item } from '../styled/Item';

const PlaylistContainer = ({playlistItem , heading }) => {
  return (
    <div>
    <Container maxWidth="lg" sx={{ my:5 }}>
    <Typography variant='h5' sx={{ marginBottom: 4 , fontWeight : 'bold' }}>{heading}</Typography>
      {
        playlistItem.length == 0  ? (
          <Skaleton></Skaleton>
        ) : (
        <Box sx={{ flexGrow : 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {
            playlistItem.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={4}  key={item.playlistId}>
                <Card  item={item} heading={heading}></Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
        )
      }
    </Container>

    <Divider></Divider>
    </div>
  )
}

export default PlaylistContainer