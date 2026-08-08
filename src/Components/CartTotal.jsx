import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

export default function CartTotal() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: {
          xs: "100%",
          sm: 400,
          md: 450,
        },
        minHeight: 300,
        p: {
          xs: 2,
          sm: 3,
        },
        border: "2px solid #000",
        borderRadius: 1,
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: 16,
            sm: 18,
          },
          fontWeight: 600,
          mb: 2,
        }}
      >
        Cart Total
      </Typography>

      <Row title="Subtotal:" value="$1750" />

      <Divider
        sx={{
          my: 2,
          borderBottom: "2px solid #5c5757",
        }}
      />

      <Row title="Shipping:" value="Free" />

      <Divider
        sx={{
          my: 2,
          borderBottom: "2px solid #5c5757",
        }}
      />

      <Row title="Total:" value="$1750" />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          maxWidth: 220,
          height: 52,
          mx: "auto",
          display: "block",
          textTransform: "none",
          borderRadius: 1,
          bgcolor: "#DB4444",

          "&:hover": {
            bgcolor: "#c53737",
          },
        }}
      >
        Proceed to checkout
      </Button>
    </Paper>
  );
}

function Row({ title, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: 14,
            sm: 16,
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontWeight: 500,
          fontSize: {
            xs: 14,
            sm: 16,
          },
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}