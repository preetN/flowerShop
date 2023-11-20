import { Box, Button, TextField } from "@mui/material";
import React from "react";

function QuantityPicker({ qty, setQty, Increment, Decrement }) {
  return (
    <Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ minWidth: 0 }}
          onClick={() => Decrement(qty)}
        >
          -
        </Button>
        <TextField
          type="number"
          color="secondary"
          variant="outlined"
          size="small"
          value={qty}
          sx={{ maxWidth: "50px" }}
          onChange={(e) => setQty(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ minWidth: 0 }}
          onClick={() => Increment(qty)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
}

export default QuantityPicker;
