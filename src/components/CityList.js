import {  Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import './CityList.css';

export default function CityList({items, onItemClick} ) {
  return (
    <div>
      <ul className="list">
        {items.map(({ capital}) => {
          return (
            <Card className="card">
              <CardContent>
                <Typography color="textSecondary">
                  <p>{capital}</p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onItemClick(capital)} variant="contained" color="primary"  size="medium">Click to know about Weather</Button>
              </CardActions>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}