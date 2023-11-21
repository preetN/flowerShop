import React, { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
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
  TextField,
} from "@mui/material";
import {
  deleteQuery,
  updateQueryAction,
} from "../../../redux_firebase/query/queryAction";
function CustomerQuery() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({});
  const { queryList } = useSelector((state) => state.query);
  const handleOnSave = (query) => {
    const { id, ...rest } = query;
    console.log(note);
    dispatch(updateQueryAction(id, rest, note));
  };
  const handleOnDelete = (id) => {
    dispatch(deleteQuery(id));
  };

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
            {queryList.length !== 0 ? (
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
                      <TextField
                        name={"note"}
                        placeholder={"make a note"}
                        onChange={(e) =>
                          setNote({
                            note: e.target.value,
                          })
                        }
                      />
                      {note && <p>{item.note}</p>}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="success"
                        onClick={() => handleOnSave(item)}
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
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    ------ No querries to show -----
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}

export default CustomerQuery;
