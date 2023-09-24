import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ img, bname, description, price }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="bouquet" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" sx={{ left: "240px" }}>
          More ...
        </Button>
      </CardActions>
    </Card>
  );
}
