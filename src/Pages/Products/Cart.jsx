import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
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
            mt: 8,
            mb: 8,
        }}
    >
      <Breadcrumbs sx={{ mb: 6 }}>
        <Link underline="none" color="text.secondary">
          Home
        </Link>

        <Typography fontWeight={600}>
          Cart
        </Typography>
      </Breadcrumbs>

      <CartTable />

      <Box
    sx={{
        mt: 6,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 6,
    }}
>
    <CouponSection />

    <CartTotal />
    </Box>
    </Container>
  );
}