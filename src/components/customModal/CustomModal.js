import React from "react";
import {
  Modal,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
function CustomModal({ openModal, handleCloseModal }) {
  return (
    <Modal
      BackdropProps={{
        style: {
          backgroundColor: "rgba(240, 248, 255, 0.097)",
        },
      }}
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update Bouquet details
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" value={modalValue.name} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="des">Id</InputLabel>
        <Input id="des" value={modalValue.description} />
      </FormControl> */}
        </Typography>
      </Box>
    </Modal>
  );
}

export default CustomModal;
