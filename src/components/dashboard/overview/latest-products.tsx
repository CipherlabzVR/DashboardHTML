import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { DotsThreeVertical as DotsThreeVerticalIcon } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import dayjs from 'dayjs';

export interface Product {
  id: string;
  image: string;
  name: string;
  updatedAt: Date;
}

export interface LatestProductsProps {
  products?: Product[];
  sx?: SxProps;
}

export function LatestProducts({ products = [], sx }: LatestProductsProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <Grid container>
        <Grid item xs={12} m={2} display="flex" justifyContent="space-between">
          <Typography sx={{ fontWeight: 'bold' }}>Recent Presentaion</Typography>
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: '#089e22',
              height: '40px',
              width: '40px',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <AddIcon sx={{ color: '#fff' }} />
          </Box>
        </Grid>
      </Grid>

      <Divider />
      <List>
        <ListItem>
          <ListItemAvatar>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
              sx={{ borderRadius: 1, height: '48px', width: '48px' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Presentaion 1"
            primaryTypographyProps={{ variant: 'subtitle1' }}
            secondary="2024-04-23"
            secondaryTypographyProps={{ variant: 'body2' }}
          />
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: '#0f1626',
              height: '40px',
              width: '40px',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ color: '#fff' }} variant="h6">
              1
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
              sx={{ borderRadius: 1, height: '48px', width: '48px' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Presentaion 1"
            primaryTypographyProps={{ variant: 'subtitle1' }}
            secondary="2024-04-23"
            secondaryTypographyProps={{ variant: 'body2' }}
          />
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: '#0f1626',
              height: '40px',
              width: '40px',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ color: '#fff' }} variant="h6">
              1
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
              sx={{ borderRadius: 1, height: '48px', width: '48px' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Presentaion 1"
            primaryTypographyProps={{ variant: 'subtitle1' }}
            secondary="2024-04-23"
            secondaryTypographyProps={{ variant: 'body2' }}
          />
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: '#0f1626',
              height: '40px',
              width: '40px',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ color: '#fff' }} variant="h6">
              1
            </Typography>
          </Box>
        </ListItem>
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
