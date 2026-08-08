import {
  Box,
  Typography,
  Button,
  Breadcrumbs,
  Link,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          md: "flex-start",
        },
        pt: {
          xs: 4,
          sm: 6,
          md: 8,
        },
        pb: 4,
      }}
    >
      {/* Breadcrumb */}
      <Box
        sx={{
          width: "100%",
          mb: {
            xs: 4,
            sm: 6,
            md: 8,
          },
        }}
      >
        <Breadcrumbs separator="/">
          <Link
            underline="hover"
            color="inherit"
            sx={{
              cursor: "pointer",
              fontSize: {
                xs: 12,
                sm: 13,
                md: 14,
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Link>

          <Typography
            color="text.primary"
            sx={{
              fontSize: {
                xs: 12,
                sm: 13,
                md: 14,
              },
            }}
          >
            404 Error
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Title */}
      <Typography
        component="h1"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.1,
          fontSize: {
            xs: "42px",
            sm: "60px",
            md: "80px",
            lg: "100px",
          },
          mb: 2,
        }}
      >
        404 Not Found
      </Typography>

      {/* Description */}
      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 500,
          textAlign: "center",
          fontSize: {
            xs: 14,
            sm: 15,
            md: 16,
          },
          px: {
            xs: 2,
            sm: 0,
          },
          mb: {
            xs: 4,
            sm: 5,
          },
        }}
      >
        Your visited page not found. You may go home page.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          bgcolor: "#ef5350",
          textTransform: "none",
          borderRadius: 2,
          fontSize: {
            xs: 14,
            sm: 15,
            md: 16,
          },
          px: {
            xs: 3,
            sm: 4,
            md: 5,
          },
          py: {
            xs: 1.2,
            sm: 1.4,
          },
          width: {
            xs: "100%",
            sm: "auto",
          },
          maxWidth: 300,
          "&:hover": {
            bgcolor: "#e53935",
          },
        }}
      >
        Back to home page
      </Button>
    </Container>
  );
}