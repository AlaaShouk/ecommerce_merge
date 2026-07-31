import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../store/snackbarSlice";

function AppSnackbar() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AppSnackbar;
