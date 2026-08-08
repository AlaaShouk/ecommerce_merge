import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography,
} from "@mui/material";

import CartTable from "../../Components/CartTable";
import CouponSection from "../../Components/CouponSection";
import CartTotal from "../../Components/CartTotal";

export default function Cart() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 4, md: 8 },
        mb: { xs: 4, md: 8 },
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs sx={{ mb: { xs: 3, md: 6 } }}>
        <Link underline="hover" color="text.secondary">
          Home
        </Link>

        <Typography fontWeight={600}>
          Cart
        </Typography>
      </Breadcrumbs>

      {/* Cart Table */}
      <CartTable />

      {/* Coupon + Cart Total */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "stretch",
            md: "flex-start",
          },
          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          <CouponSection />
        </Box>

        <Box
          sx={{
            width: {
              xs: "100%",
              md: 420,
            },
            flexShrink: 0,
          }}
        >
          <CartTotal />
        </Box>
      </Box>
    </Container>
  );
}