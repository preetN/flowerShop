import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactCardFlip from "react-card-flip";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function CustomCard({
  id,
  img,
  bname,
  description,
  date,
  price,
}) {
  const [flip, setFlip] = React.useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <Card sx={{ width: 345 }}>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <Box component={"a"} onClick={handleFlip}>
          <CardMedia sx={{ height: 190 }} image={img} title="bouquet" />
          {/* <Button onClick={handleFlip}></Button> */}
        </Box>
        <Box sx={{ maxHeight: 190 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {bname}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body1" color="secondary">
              Price: ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date Added: {date}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={`/bouquetdetails/${id}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" size="small" sx={{ left: "240px" }}>
                More ...
              </Button>
            </Link>
            <Button onClick={handleFlip}>Click to flip</Button>
          </CardActions>
        </Box>
      </ReactCardFlip>
    </Card>
  );
}
