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
        alignItems: "center",
        columnGap: "24px",
    }}
    >
      <TextField
        placeholder="Coupon Code"
        sx={{
           width: 300,
          "& .MuiOutlinedInput-root": {
            height: 56,
            borderRadius: "4px",
          }
        }}
      />

      <Button
        variant="contained"
        sx={{
              width: 210,
        height: 56,
        bgcolor: "#DB4444",
        textTransform: "none",
        borderRadius: "4px",
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