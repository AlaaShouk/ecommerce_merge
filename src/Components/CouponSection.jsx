import {
  Box,
  Button,
  TextField,
} from "@mui/material";

export default function CouponSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: {
          xs: "stretch",
          sm: "center",
        },
        gap: 2,
        width: "100%",
      }}
    >
      <TextField
        placeholder="Coupon Code"
        fullWidth
        sx={{
          maxWidth: {
            xs: "100%",
            sm: 300,
          },
          "& .MuiOutlinedInput-root": {
            height: 56,
            borderRadius: 1,
          },
        }}
      />

      <Button
        variant="contained"
        sx={{
          width: {
            xs: "100%",
            sm: 210,
          },
          minHeight: 56,
          bgcolor: "#DB4444",
          textTransform: "none",
          borderRadius: 1,
          boxShadow: "none",

          "&:hover": {
            bgcolor: "#C73838",
            boxShadow: "none",
          },
        }}
      >
        Apply Coupon
      </Button>
    </Box>
  );
}