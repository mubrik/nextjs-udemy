// type
import { IEvent } from "../../types/dataTypes";
// material
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// next link
import {NextLinkComposed} from "../../utils/NextLink";

interface IEventItemProps {
  eventData: IEvent
}

const EventItem = ({eventData}: IEventItemProps) : JSX.Element => {

  return(
    <Card sx={{ maxWidth: 345, minWidth: "280px" }}>
      <CardContent>
        <Typography variant="body2" >
          {eventData.title}
        </Typography>
        <Typography variant="body2" >
          {eventData.description}
        </Typography>
        <Typography variant="subtitle1" >
          {eventData.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant={"outlined"}
          component={NextLinkComposed}
          to={{
            pathname: `/events/${eventData.id}`,
            query: { name: 'test' },
          }}
        >
          View Event
        </Button>
      </CardActions>
    </Card>
  );
};

export {EventItem};