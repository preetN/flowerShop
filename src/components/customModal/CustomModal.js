import React, { useEffect, useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import CustomInput from "../custominput/CustomInput";
import { useDispatch } from "react-redux";
import { updateBouquetAction } from "../../pages/admin/redux_firebase/bouquetAction";
function CustomModal({
  setOpenModal,
  openModal,
  handleCloseModal,
  modalValue,
}) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(modalValue);
  }, [modalValue]);
  const input = [
    { label: "price", type: "number", name: "price", value: form.price },
    {
      label: "name",
      type: "text",
      name: "bname",
      value: form.bname,
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      value: form.description,
    },
  ];
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("You updated");
    console.log(form);
    dispatch(updateBouquetAction(form));
    setOpenModal(false);
  };
  return (
    <Modal
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.076)",
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
          <CustomInput
            key={i}
            {...item}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
        ))}

        <Button type="submit" color="secondary" variant="contained">
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default CustomModal;
