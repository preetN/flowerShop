import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import {
  Button,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Modal,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  deleteBouquetAction,
  getAllBouquetAction,
} from "../redux_firebase/bouquetAction";
import { useDispatch, useSelector } from "react-redux";
function Bouquet() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const { bouquetlist } = useSelector((state) => state.bouquet);
  useEffect(() => {
    dispatch(getAllBouquetAction());
  }, [dispatch, bouquetlist]);
  //Page is re-rendering too many times
  const handleOnRemove = (id) => {
    window.confirm("Are you sure you want to remove ");
    console.log("deleting ", id);
    deleteBouquetAction(id);
  };
  const handleOnUpdate = (id) => {
    console.log("update ", id);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  return (
    <AdminLayout>
      <Link to="/addbouquet">
        <Button variant="contained" color="secondary">
          Add Bouquet
        </Button>
      </Link>
      <Box component="div">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bouquet Name</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bouquetlist.map((l) => (
                <TableRow
                  key={l.bname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {l.bname}
                  </TableCell>
                  <TableCell align="right">
                    <img src={l.img} width="200px" alt="bouquet" />
                  </TableCell>
                  <TableCell align="right">{l.description}</TableCell>
                  <TableCell align="right">{l.price}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleOnUpdate(l.id)}>Update</Button>
                    <Button
                      onClick={() => handleOnRemove(l.id)}
                      color="secondary"
                    >
                      Remove
                    </Button>
                    <Modal
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
                          bgcolor: "background.paper",
                          p: 4,
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}

export default Bouquet;
