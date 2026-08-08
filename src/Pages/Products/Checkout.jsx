import {
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
      maxWidth="xl"
      sx={{
        py: {
          xs: 4,
          sm: 6,
          md: 8,
        },
        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 8,
        },
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs
        separator="/"
        sx={{
          mb: {
            xs: 4,
            md: 8,
          },
          flexWrap: "wrap",
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          sx={{ fontSize: 14 }}
        >
          Account
        </Link>

        <Link
          underline="hover"
          color="inherit"
          sx={{ fontSize: 14 }}
        >
          My Account
        </Link>

        <Link
          underline="hover"
          color="inherit"
          sx={{ fontSize: 14 }}
        >
          Product
        </Link>

        <Link
          underline="hover"
          color="inherit"
          sx={{ fontSize: 14 }}
        >
          View Cart
        </Link>

        <Typography
          color="text.primary"
          sx={{
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Checkout
        </Typography>
      </Breadcrumbs>

      {/* Checkout Content */}
      <Grid
        container
        alignItems="flex-start"
        rowSpacing={{
          xs: 6,
          md: 0,
        }}
        columnSpacing={{
          xs: 2,
          sm: 6,
          md: 10,
          lg: 16,
        }}
      >
        {/* Billing Form */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <BillingForm />
        </Grid>

        {/* Order Summary */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              md: "flex-end",
            },
            mt: {
              xs: 0,
              md: 10,
            },
          }}
        >
          <OrderSummary />
        </Grid>
      </Grid>
    </Container>
  );
}