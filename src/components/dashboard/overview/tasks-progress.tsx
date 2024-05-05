import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ListBullets as ListBulletsIcon } from '@phosphor-icons/react/dist/ssr/ListBullets';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

export interface TasksProgressProps {
  sx?: SxProps;
  value: number;
}

export function TasksProgress({ value, sx }: TasksProgressProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Online Devices
              </Typography>
              <Typography variant="h4">16</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: '#f7fafa', height: '56px', width: '56px' }}>
              <OnlinePredictionIcon  sx={{fontSize:"var(--icon-fontSize-lg)",color: '#0f1626'}} />
            </Avatar>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
