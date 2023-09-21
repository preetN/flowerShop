import React, { useEffect, useState } from "react";
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
import CustomModal from "../../../components/customModal/CustomModal";
import {
  deleteBouquetAction,
  getAllBouquetAction,
} from "../redux_firebase/bouquetAction";
import { useDispatch, useSelector } from "react-redux";
function BouquetTable() {
  const dispatch = useDispatch();
  const [displayList, setDisplayList] = useState([]);
  const { bouquetlist } = useSelector((state) => state.bouquet);
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const handleOnRemove = (id) => {
    if (window.confirm("Are you sure you want to remove ")) {
      dispatch(deleteBouquetAction(id));
    }
  };
  const handleOnUpdate = (bouquet) => {
    setOpenModal(true);
    setModalValue(bouquet);
  };
  const handleCloseModal = () => setOpenModal(false);
  useEffect(() => {
    dispatch(getAllBouquetAction());
  }, [dispatch]);
  useEffect(() => {
    setDisplayList(bouquetlist);
  }, [bouquetlist]);
  return (
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
            {displayList.map((item) => (
              <TableRow
                key={item.bname}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.bname}
                </TableCell>
                <TableCell align="right">
                  <img src={item.img} width="200px" alt="bouquet" />
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleOnUpdate(item)}>Update</Button>
                  <Button
                    onClick={() => handleOnRemove(item.id)}
                    color="secondary"
                  >
                    Remove
                  </Button>
                  <CustomModal
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    handleCloseModal={handleCloseModal}
                    modalValue={modalValue}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BouquetTable;
