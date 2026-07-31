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
    width: 450,
    minHeight: 300,
    p: 3,
    border: "2px solid #000",
    borderRadius: 1,
     flexShrink: 0,
  }}
    >
      <Typography
        fontSize={18}
        fontWeight={600}
        mb={2}
      >
        Cart Total
      </Typography>

      <Row
        title="Subtotal:"
        value="$1750"
      />

      <Divider sx={{my:2 ,  borderBottom: "2px solid #5c5757",}}/>

      <Row
        title="Shipping:"
        value="Free"
      />

      <Divider sx={{my:2 , borderBottom: "2px solid #5c5757",}}/>

      <Row
        title="Total:"
        value="$1750"
      />

      <Button
        fullWidth
        variant="contained"
      sx={{
        mt:3,
        width:220,
        height:52,
        alignSelf:"center",
        display:"block",
        mx:"auto",
        textTransform:"none",
        borderRadius:"4px",
        bgcolor:"#DB4444"
    }}
      >
        Proceed to checkout
      </Button>

    </Paper>
  );
}

function Row({title,value}){

    return(
        <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
  }}
        >
            <Typography>{title}</Typography>

            <Typography fontWeight={500}>
                {value}
            </Typography>
        </Box>
    )
}