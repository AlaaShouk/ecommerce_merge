import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import BillingForm from "../../Components/BillingForm";
import OrderSummary from "../../Components/OrderSummary";

export default function Checkout() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >
      <Breadcrumbs sx={{ mb: 6 }}>
        <Link underline="hover" color="inherit">
          Account
        </Link>

        <Link underline="hover" color="inherit">
          My Account
        </Link>

        <Link underline="hover" color="inherit">
          Product
        </Link>

        <Link underline="hover" color="inherit">
          View Cart
        </Link>

        <Typography fontWeight={600}>
          CheckOut
        </Typography>
      </Breadcrumbs>

      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <BillingForm />
        </Grid>

        <Grid     item
    xs={12}
    md={6}
    sx={{
      mt: { md: 10 },
    }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
}