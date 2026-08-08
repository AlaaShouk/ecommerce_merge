import { useTranslation } from "react-i18next";
import i18n from "../Translation/index.jsx";
import {
  Box,
  Container,
  Typography,
  Link,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

export default function Header() {
   const { t } = useTranslation();


  const handleLanguageChange = (event) => {
    const lang = event.target.value;

    i18n.changeLanguage(lang);

    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    console.log("Language changed to:", lang);
  };

  return (
    <Box
      component="header"
      sx={{
        bgcolor: "#000",
        color: "#fff",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr auto",
            },
            alignItems: "center",
            gap: {
              xs: 1,
              md: 2,
            },
          }}
        >
          {/* Sale Message */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "14px",
              },
              lineHeight: 1.6,
            }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "#fff",
                fontWeight: 700,
                ml: 0.5,
              }}
            >
              Shop Now
            </Link>
          </Typography>

          {/* Language */}
          <FormControl
            size="small"
            sx={{
              minWidth: 110,
              justifySelf: {
                xs: "center",
                md: "end",
              },

              "& .MuiOutlinedInput-root": {
                color: "#fff",
                fontSize: 14,

                "& fieldset": {
                  border: "none",
                },

                "& .MuiSvgIcon-root": {
                  color: "#fff",
                },
              },
            }}
          >
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              defaultValue="en"
              variant="outlined"
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: 1,
                  },
                },
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ar">العربية</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
}