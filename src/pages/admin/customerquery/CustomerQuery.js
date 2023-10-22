import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import EditNoteIcon from "@mui/icons-material/EditNote";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  Button,
  TextField,
} from "@mui/material";
import {
  deleteQuery,
  getAllQueryAction,
  updateQueryAction,
} from "../../../redux_firebase/query/queryAction";
import CustomInput from "../../../components/custominput/CustomInput";
function CustomerQuery() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({});
  const [displayList, setDisplayList] = useState([]);
  const { queryList } = useSelector((state) => state.query);
  console.log(queryList);
  const handleOnEdit = (query) => {
    const { id, ...rest } = query;
    dispatch(updateQueryAction(id, rest));
    console.log("Edit ", query);
    dispatch(getAllQueryAction());
  };
  const handleOnDelete = (id) => {
    dispatch(deleteQuery(id));
  };
  useEffect(() => {
    setDisplayList(queryList);
  }, [queryList]);

  return (
    <AdminLayout>
      <Box component="div">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {queryList.map((item) => (
                <TableRow
                  key={item.fname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.lastname}
                  </TableCell>
                  <TableCell align="right">{item.firstname} </TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.message}</TableCell>

                  <TableCell align="right">
                    {item.note ? (
                      item.note
                    ) : (
                      <>
                        <TextField
                          name={"note"}
                          placeholder={"make a note"}
                          onChange={(e) =>
                            setNote({
                              ...item,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="success"
                      onClick={() => handleOnEdit(note)}
                    >
                      <SaveIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleOnDelete(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
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

export default CustomerQuery;
