import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { showSnackbar } from "../store/snackbarSlice";

const GlobalDialog = () => {
    
  const dispatch = useDispatch();

  const { isOpen, title, message } = useSelector(
    (state) => state.dialog
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(closeDialog())}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{message}</DialogContent>

      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())}>
          إغلاق
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GlobalDialog;