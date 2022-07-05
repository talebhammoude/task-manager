import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 475, 'border-radius': '16px', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <CardContent>
       {props.children}
      </CardContent>
    </Card>
  );
}