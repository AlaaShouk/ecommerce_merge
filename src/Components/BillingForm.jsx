import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const fields = [
  "First Name*",
  "Company Name",
  "Street Address*",
  "Apartment, floor, etc. (optional)",
  "Town/City*",
  "Phone Number*",
  "Email Address*",
];

export default function BillingForm() {
  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight={600}
        mb={5}
      >
        Billing Details
      </Typography>

      <Stack spacing={3}>

        {fields.map((field) => (
          <Box key={field}>
            <Typography
              color="text.secondary"
              mb={1}
              fontSize={14}
            >
              {field}
            </Typography>

            <TextField
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#F5F5F5",
                  height: 50,
                },
              }}
            />
          </Box>
        ))}

      </Stack>

      <FormControlLabel
        sx={{ mt: 3 }}
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: "#DB4444",
              "&.Mui-checked": {
                color: "#DB4444",
              },
            }}
          />
        }
        label="Save this information for faster check-out next time"
      />

    </Box>
  );
}