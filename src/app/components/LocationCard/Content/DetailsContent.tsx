import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { IconButton, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { ILocation } from '../../../interfaces';

interface IProps {
    location: ILocation;
}

export const DetailsContent: React.FC<IProps> = (props) => {
    const { t } = useTranslation();
    const [showMore, setShowMore] = React.useState(false);

    const toggle = () => setShowMore(!showMore);

    return (
        <Paper elevation={2} className={`location-card__details location-card__details--${showMore ? 'more' : 'less'}`}>
            <Grid container={true} justifyContent="center">
                <IconButton onClick={toggle}>{showMore ? <ExpandMore /> : <ExpandLess />}</IconButton>
            </Grid>
            <List>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.locationId')}
                        secondary={props.location.locationId}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.locationDetails')}
                        secondary={props.location.locationDetails}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.locationUserRole')}
                        secondary={props.location.locationUserRole}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.active')}
                        secondary={t(`components.locationCard.status.${props.location.active}`)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.newLocation')}
                        secondary={t(`components.locationCard.status.${props.location.newLocation}`)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.subscriptionActive')}
                        secondary={t(`components.locationCard.status.${props.location.subscriptionActive}`)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={t('components.locationCard.fields.numberofDevices')}
                        secondary={props.location.numberofDevices}
                    />
                </ListItem>
            </List>
        </Paper>
    );
};
