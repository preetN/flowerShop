import React from "react";
import {
  Modal,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import CustomInput from "../custominput/CustomInput";
function CustomModal({
  setOpenModal,
  openModal,
  handleCloseModal,
  modalValue,
}) {
  const input = [
    { label: "ID", value: modalValue.id },
    { label: "price", type: "number", value: modalValue.price },
    {
      label: "name",
      type: "text",
      value: modalValue.bname,
    },
    {
      label: "Description",
      type: "text",
      value: modalValue.description,
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("You updated");
    setOpenModal(false);
  };
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
        component={"form"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          p: 4,
        }}
        onSubmit={handleOnSubmit}
      >
        {input.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}

        <Button type="submit" color="secondary" variant="contained">
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default CustomModal;
