import React from 'react';
import { Map, Marker, Point } from 'pigeon-maps';
import { CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Place } from '@mui/icons-material';
import { ILocation } from '../../../interfaces';

interface IProps {
    location: ILocation;
}

export const MainContent: React.FC<IProps> = (props) => {
    const center: Point = [props.location.latitude, props.location.longitude];

    return (
        <CardContent>
            <div className="location-card__map">
                <Map defaultCenter={center} defaultZoom={14} mouseEvents={false} touchEvents={false}>
                    <Marker width={50} anchor={center} />
                </Map>
            </div>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Place />
                    </ListItemIcon>
                    <ListItemText
                        primary={props.location.address.addressLine1}
                        secondary={`${props.location.address.city}, ${props.location.address.state} ${props.location.address.zip}`}
                    />
                </ListItem>
            </List>
        </CardContent>
    );
};
