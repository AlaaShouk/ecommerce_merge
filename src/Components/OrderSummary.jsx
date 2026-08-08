import {
  Box,
  Button,
  Divider,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import monitor from "../../public/assets/Side_Image.png";
import gamepad from "../../public/assets/Side_Image.png";
import payment from "../../public/assets/Side_Image.png";


const items = [
  {
    image: monitor,
    name: "LCD Monitor",
    total: "$650",
  },
  {
    image: gamepad,
    name: "H1 Gamepad",
    total: "$1100",
  },
];

export default function OrderSummary() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 470,
      }}
    >
      {/* Products */}
      <Stack spacing={3}>
        {items.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 54,
                  height: 54,
                  objectFit: "contain",
                }}
              />

              <Typography fontSize={16}>
                {item.name}
              </Typography>
            </Box>

            <Typography
              fontSize={16}
              fontWeight={500}
            >
              {item.total}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Totals */}
      <Box mt={4}>
        <Row title="Subtotal:" value="$1750" />
        <Divider />

        <Row title="Shipping:" value="Free" />
        <Divider />

        <Row title="Total:" value="$1750" />
      </Box>

      {/* Payment */}
      <Box mt={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Radio checked size="small" />

            <Typography fontSize={16}>
              Bank
            </Typography>
          </Box>

          <Box
            component="img"
            src={payment}
            alt="Payment Methods"
            sx={{
              width: {
                xs: 150,
                sm: 180,
                md: 210,
              },
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Radio size="small" />

          <Typography fontSize={16}>
            Cash on delivery
          </Typography>
        </Box>
      </Box>

      {/* Coupon */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 2,
          mt: 4,
        }}
      >
        <TextField
          fullWidth
          placeholder="Coupon Code"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 56,
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            width: {
              xs: "100%",
              sm: 180,
            },
            height: 56,
            bgcolor: "#DB4444",
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              bgcolor: "#C73B3B",
              boxShadow: "none",
            },
          }}
        >
          Apply Coupon
        </Button>
      </Box>

      {/* Place Order */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          width: {
            xs: "100%",
            sm: 190,
          },
          height: 56,
          bgcolor: "#DB4444",
          textTransform: "none",
          fontSize: 16,
          boxShadow: "none",

          "&:hover": {
            bgcolor: "#C73B3B",
            boxShadow: "none",
          },
        }}
      >
        Place Order
      </Button>
    </Box>
  );
}

function Row({ title, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
      }}
    >
      <Typography fontSize={16}>
        {title}
      </Typography>

      <Typography
        fontSize={16}
        fontWeight={600}
      >
        {value}
      </Typography>
    </Box>
  );
}