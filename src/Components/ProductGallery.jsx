import { useState, useEffect, useMemo } from "react";
import { Box, Paper, Stack } from "@mui/material";

export default function ProductGallery({ heroImage, media }) {
  const baseUrl = "https://ecommerce.monzeryshop.shop/";

  const images = useMemo(() => {
    return [
      ...(heroImage ? [baseUrl + heroImage.path] : []),
      ...(media?.map((img) => baseUrl + img.path) || []),
    ];
  }, [heroImage, media]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: {
          xs: 2,
          md: 3,
        },
        width: "100%",
      }}
    >
      {/* Thumbnails */}
      <Stack
        direction={{
          xs: "row",
          md: "column",
        }}
        spacing={2}
        sx={{
          overflowX: {
            xs: "auto",
            md: "visible",
          },
          overflowY: "hidden",
          pb: {
            xs: 1,
            md: 0,
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {images.map((img, index) => (
          <Paper
            key={index}
            elevation={0}
            onClick={() => setSelectedImage(img)}
            sx={{
              flexShrink: 0,
              width: {
                xs: 70,
                sm: 80,
                md: 90,
              },
              height: {
                xs: 70,
                sm: 80,
                md: 90,
              },
              bgcolor: "#F5F5F5",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "2px solid #DB4444"
                  : "1px solid transparent",
              transition: ".2s",

              "&:hover": {
                border: "2px solid #DB4444",
              },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Product ${index + 1}`}
              sx={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
              }}
            />
          </Paper>
        ))}
      </Stack>

      {/* Main Image */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          width: "100%",
          minHeight: {
            xs: 300,
            sm: 400,
            md: 500,
          },
          bgcolor: "#F5F5F5",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Main Product"
          sx={{
            width: "100%",
            maxWidth: {
              xs: 220,
              sm: 300,
              md: 380,
            },
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Paper>
    </Box>
  );
}