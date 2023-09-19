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
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  deleteBouquetAction,
  getAllBouquetAction,
  getBouquetInfoAction,
} from "../redux_firebase/bouquetAction";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../components/customModal/CustomModal";
function Bouquet() {
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const dispatch = useDispatch();
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const { bouquet } = useSelector((state) => state.bouquet);
  useEffect(() => {
    dispatch(getAllBouquetAction());
  }, [dispatch, bouquetlist]);
  useEffect(() => {
    setModalValue(bouquet);
  }, [bouquet]);
  //Page is re-rendering too many times
  const handleOnRemove = (id) => {
    window.confirm("Are you sure you want to remove ");
    console.log("deleting ", id);
    deleteBouquetAction(id);
  };
  const handleOnUpdate = (id) => {
    console.log("update ", id);
    setOpenModal(true);
    dispatch(getBouquetInfoAction(id));
    console.log(bouquet);
    setModalValue(bouquet);
    console.log("Bouquet: ", modalValue);
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
                    <CustomModal
                      openModal={openModal}
                      handleCloseModal={handleCloseModal}
                    />
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
