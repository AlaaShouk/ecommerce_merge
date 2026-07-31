import {
  Box,
  Divider,
  Typography,
} from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

export default function DeliveryInfo() {
  return (
    <Box
      sx={{
        mt: 4,
        width: "100%",
        maxWidth: 400,
        border: "1px solid #000",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >

      {/* Free Delivery */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3,
          py: 2.5,
        }}
      >

        <Box
          sx={{
            width: 45,
            height: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocalShippingOutlinedIcon
            sx={{
              fontSize: 32,
              color: "#000",
            }}
          />
        </Box>


        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            Free Delivery
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "#000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Enter your postal code for Delivery Availability
          </Typography>
        </Box>

      </Box>


      <Divider
        sx={{
          borderColor: "#000",
        }}
      />


      {/* Return Delivery */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3,
          py: 2.5,
        }}
      >

        <Box
          sx={{
            width: 45,
            height: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReplayOutlinedIcon
            sx={{
              fontSize: 32,
              color: "#000",
            }}
          />
        </Box>


        <Box>

          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            Return Delivery
          </Typography>


          <Typography
            sx={{
              fontSize: 13,
              color: "#000",
            }}
          >
            Free 30 Days Delivery Returns.
            <Box
              component="span"
              sx={{
                ml: 0.5,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Details
            </Box>
          </Typography>

        </Box>

      </Box>

    </Box>
  );
}