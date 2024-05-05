import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Receipt as ReceiptIcon } from '@phosphor-icons/react/dist/ssr/Receipt';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
export interface TotalProfitProps {
  sx?: SxProps;
  value: string;
}

export function TotalProfit({ value, sx }: TotalProfitProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
            Offline Devices
            </Typography>
            <Typography variant="h4">10</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: '#f7fafa', height: '56px', width: '56px' }}>
              <FilterListOffIcon  sx={{fontSize:"var(--icon-fontSize-lg)",color: '#0f1626'}} />
            </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}
