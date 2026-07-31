import { useState , useEffect } from "react";
import { Box, Paper, Stack } from "@mui/material";

export default function ProductGallery({ heroImage, media }) {

  
const baseUrl = "https://ecommerce.monzeryshop.shop/";

const images = [
  ...(heroImage ? [baseUrl + heroImage.path] : []),
  ...(media?.map((img) => baseUrl + img.path) || []),
];


   const [selectedImage, setSelectedImage] = useState(images[0]);
  
useEffect(() => {
  if (images.length > 0) {
    setSelectedImage(images[0]);
  }
}, [images]);
  console.log(images);


  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        width: "100%",
        maxWidth: 650,
      }}
    >
 
      <Stack spacing={2}>
        {images.map((img, index) => (
          <Paper
            key={index}
            elevation={0}
            onClick={() => setSelectedImage(img)}
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#F5F5F5",
              borderRadius: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border:
                selectedImage === img
                  ? "2px solid #DB4444"
                  : "1px solid transparent",
              transition: "all .2s",

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
                width: "80%",
                objectFit: "contain",
              }}
            />
          </Paper>
        ))}
      </Stack>

      <Paper
        elevation={0}
        sx={{
          flex: 1,
          height: 500,
          bgcolor: "#F5F5F5",
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Main Product"
          sx={{
            width: "100%",
            maxWidth: 360,
            objectFit: "contain",
          }}
        />
      </Paper>
    </Box>
  );
}