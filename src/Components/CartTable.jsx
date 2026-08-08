import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import monitor from "../../public/assets/Side_Image.png";
import gamepad from "../../public/assets/Side_Image.png";

const items = [
  {
    id: 1,
    image: monitor,
    name: "LCD Monitor",
    price: 650,
    qty: 1,
  },
  {
    id: 2,
    image: gamepad,
    name: "H1 Gamepad",
    price: 550,
    qty: 2,
  },
];

export default function CartTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: "100%",
          overflowX: "auto",
          boxShadow: "0 5px 20px rgba(0,0,0,.06)",
          borderRadius: 2,
        }}
      >
        <Table
          sx={{
            minWidth: 700,
            borderCollapse: "separate",
            borderSpacing: "0 12px",

            "& td": {
              borderBottom: "12px solid #F5F5F5",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={header}>Product</TableCell>

              <TableCell sx={header}>Price</TableCell>

              <TableCell sx={header}>Quantity</TableCell>

              <TableCell sx={header} align="right">
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={body}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: {
                          xs: 36,
                          sm: 45,
                        },
                        height: {
                          xs: 36,
                          sm: 45,
                        },
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />

                      <IconButton
                        size="small"
                        sx={{
                          position: "absolute",
                          top: -8,
                          left: -8,
                          bgcolor: "#DB4444",
                          color: "#fff",
                          width: 18,
                          height: 18,

                          "&:hover": {
                            bgcolor: "#c63737",
                          },
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 13 }} />
                      </IconButton>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 14,
                          sm: 16,
                        },
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={body}>${item.price}</TableCell>

                <TableCell sx={body}>
                  <Select
                    value={item.qty}
                    size="small"
                    sx={{
                      width: {
                        xs: 70,
                        sm: 80,
                      },
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <MenuItem key={n} value={n}>
                        {String(n).padStart(2, "0")}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>

                <TableCell sx={body} align="right">
                  ${item.price * item.qty}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button sx={button}>
          Return To Shop
        </Button>

        <Button sx={button}>
          Update Cart
        </Button>
      </Box>
    </>
  );
}

const header = {
  py: 3,
  fontWeight: 500,
  fontSize: {
    xs: 14,
    sm: 16,
  },
  whiteSpace: "nowrap",
};

const body = {
  py: 2,
};

const button = {
  border: "1px solid #999",
  color: "#000",
  textTransform: "none",
  borderRadius: 1,

  width: {
    xs: "100%",
    sm: "auto",
  },

  px: {
    xs: 2,
    sm: 5,
  },

  py: 1.8,

  "&:hover": {
    borderColor: "#000",
    bgcolor: "#f8f8f8",
  },
};