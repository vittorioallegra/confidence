import React from 'react';
import { Card, CardHeader } from '@mui/material';
import { ILocation } from '../../interfaces';
import { DetailsContent, MainContent } from './Content';

interface IProps {
    location: ILocation;
}

export const LocationCard: React.FC<IProps> = (props) => {
    return (
        <Card className="location-card">
            <CardHeader title={props.location.locationName} subheader={props.location.locationType} />
            <MainContent location={props.location} />
            <DetailsContent location={props.location} />
        </Card>
    );
};
