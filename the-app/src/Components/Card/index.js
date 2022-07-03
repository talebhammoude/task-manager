import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 475, 'border-radius': '14px' }}>
      <CardContent>
       {props.children}
      </CardContent>
    </Card>
  );
}