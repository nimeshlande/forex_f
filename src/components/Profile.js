import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./profile.css";
import addCurrency from "../services/addCurrency";
import deleteCurrencyByCode from "../services/deleteCurrency";
import updateCurrency from "../services/updateCurrency";
import axios from "axios";

function Profile() {
  const user = useSelector((state) => state.loggedInUser);

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setUpdate] = useState(false);
  const [openTotalExchange, setTotalExchange] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const [data, setData] = useState({
    name: "",
    code: "",
    rate: "",
  });

  const { name, code, rate } = data;

  const changeHandlar = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  const submitAddCurrency = (e) => {
    e.preventDefault();
    addCurrency(data);
    setOpen(false);
    setData({
      name: "",
      code: "",
      rate: "",
    });
    console.log("Currency Added");
  };

  const handleClickOpenDeleteCurrency = () => {
    setOpenDelete(true);
  };

  const [deleteData, setDeleteData] = useState({
    currency_code: "",
  });

  const { currency_code } = deleteData;

  const changeDeleteHandlar = (e) => {
    setDeleteData({
      ...deleteData,
      [e.target.name]: [e.target.value],
    });
  };
  const submitDeleteCurrency = (e) => {
    e.preventDefault();
    deleteCurrencyByCode(deleteData);

    setOpenDelete(false);
    setDeleteData({
      currency_code: "",
    });
    console.log("Currency Added");
  };

  const handleClickOpenUpdateCurrency = () => {
    setUpdate(true);
  };

  const handleCloseUpdate = () => {
    setUpdate(false);
  };

  const [updateData, setUpdateData] = useState({
    c_code: "",
    ex_rate: "",
  });

  const { c_code, ex_rate } = updateData;

  const changeUpdateHandlar = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: [e.target.value],
    });
  };

  const submitUpdateCurrency = (e) => {
    e.preventDefault();
    updateCurrency(updateData);

    setUpdate(false);
    setDeleteData({
      c_code: "",
      ex_rate: "",
    });
    console.log("Currency Updated.....");
  };

  const [totalRate, setTotalRate] = useState("");

  const handleClickOpenTotalExhange = async () => {
    setTotalExchange(true);
    const res = await axios.get(
      "http://localhost:2000/currency/totalExchangeRate"
    );
    console.log(res.data);
    setTotalRate(res.data);
  };

  const handleTotalExchangeRate = () => {
    setTotalExchange(false);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="ex_rate">
          {/* Welcome Back: {user.username} */}
          {user !== null ? <>Welcome Back: {user.username}</> : ""}
        </h2>
        <hr />
        <div className="profile_btns">
          <Button onClick={handleClickOpen} variant="contained">
            Add Currency
          </Button>
          <Button onClick={handleClickOpenDeleteCurrency} variant="contained">
            Delete Currency
          </Button>
          <Button variant="contained" onClick={handleClickOpenUpdateCurrency}>
            Update Currency
          </Button>
          <Button variant="contained" onClick={handleClickOpenTotalExhange}>
            Total Exchange
          </Button>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <form>
            <DialogTitle>Add Currency</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                value={name}
                onChange={changeHandlar}
                label="Name of Currency"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="code"
                name="code"
                value={code}
                onChange={changeHandlar}
                label="Code of Currency"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="rate"
                name="rate"
                value={rate}
                onChange={changeHandlar}
                label="Exchange Rate"
                type="number"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={submitAddCurrency}>ADD</Button>
            </DialogActions>
          </form>
        </Dialog>

        <Dialog open={openDelete} onClose={handleClose}>
          <form>
            <DialogTitle>Delete Currency</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="currency_code"
                value={currency_code}
                onChange={changeDeleteHandlar}
                label="Code of Currency"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDelete}>Cancel</Button>
              <Button onClick={submitDeleteCurrency}>Delete</Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Update Code-------- */}
        <Dialog open={openUpdate} onClose={handleClose}>
          <form>
            <DialogTitle>Update Currency</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="c_code"
                name="c_code"
                value={c_code}
                onChange={changeUpdateHandlar}
                label="Code of Currency"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="ex_rate"
                name="ex_rate"
                value={ex_rate}
                onChange={changeUpdateHandlar}
                label="Rate of Currency"
                type="number"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate}>Cancel</Button>
              <Button onClick={submitUpdateCurrency}>Update</Button>
            </DialogActions>
          </form>
        </Dialog>

        <Dialog open={openTotalExchange} onClose={handleClose}>
          <DialogTitle>Total Exchange Rate is: </DialogTitle>
          <h2 className="ex_rate">{totalRate}</h2>
          <DialogActions>
            <Button onClick={handleTotalExchangeRate}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Profile;
