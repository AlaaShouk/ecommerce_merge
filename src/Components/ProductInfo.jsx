import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeliveryInfo from "./DeliveryInfo";

export default function ProductInfo({
  price,
  name,
  rating,
  reviews,
  description,
  sizes = [],
  colors = [],
}) {
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: 420,
          md: 390,
        },
        mx: "auto",
        p: {
          xs: 2,
          sm: 3,
        },
        border: "1px solid #E5E5E5",
        borderRadius: 2,
      }}
    >
      {/* Product Name */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: 22,
            sm: 26,
          },
          mb: 1,
        }}
      >
        {name}
      </Typography>

      {/* Rating */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Rating
          value={rating}
          readOnly
          precision={0.5}
          size="small"
        />

        <Typography
          variant="body2"
          color="text.secondary"
        >
          ({reviews} Reviews)
        </Typography>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", sm: "block" } }}
        />

        <Typography
          variant="body2"
          color="success.main"
        >
          In Stock
        </Typography>
      </Box>

      {/* Price */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: 24,
            sm: 28,
          },
          mb: 2,
        }}
      >
        ${Number(price).toFixed(2)}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: {
            xs: 14,
            sm: 15,
          },
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        {description}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Colors */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1.5,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mr: 1,
          }}
        >
          Colours:
        </Typography>

        {colors.map((color) => (
          <Box
            key={color}
            onClick={() => setSelectedColor(color)}
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              bgcolor: color,
              cursor: "pointer",
              border:
                selectedColor === color
                  ? "2px solid #000"
                  : "1px solid #ccc",
            }}
          />
        ))}
      </Box>

      {/* Sizes */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mr: 1,
          }}
        >
          Size:
        </Typography>

        {sizes.map((size) => (
          <Button
            key={size}
            variant={
              selectedSize === size
                ? "contained"
                : "outlined"
            }
            onClick={() => setSelectedSize(size)}
            sx={{
              minWidth: 42,
              height: 36,
              textTransform: "none",
              borderRadius: 1,
              boxShadow: "none",
              bgcolor:
                selectedSize === size
                  ? "#DB4444"
                  : "#fff",
              color:
                selectedSize === size
                  ? "#fff"
                  : "#000",

              "&:hover": {
                bgcolor:
                  selectedSize === size
                    ? "#DB4444"
                    : "#f5f5f5",
                boxShadow: "none",
              },
            }}
          >
            {size}
          </Button>
        ))}
      </Box>

      {/* Quantity + Buy */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          mb: 3,
        }}
      >
        {/* Quantity */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #ccc",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
            sx={{
              minWidth: 40,
              color: "#000",
            }}
          >
            -
          </Button>

          <Box
            sx={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
            }}
          >
            {quantity}
          </Box>

          <Button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            sx={{
              minWidth: 40,
              bgcolor: "#DB4444",
              color: "#fff",

              "&:hover": {
                bgcolor: "#DB4444",
              },
            }}
          >
            +
          </Button>
        </Box>

        {/* Buy */}
        <Button
          variant="contained"
          sx={{
            flexGrow: {
              xs: 1,
              sm: 0,
            },
            width: {
              xs: "100%",
              sm: 180,
              md: 150,
            },
            height: 42,
            bgcolor: "#DB4444",
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              bgcolor: "#DB4444",
              boxShadow: "none",
            },
          }}
        >
          Buy Now
        </Button>

        {/* Favorite */}
        <IconButton
          onClick={() => setFavorite(!favorite)}
          sx={{
            width: 42,
            height: 42,
            border: "1px solid #ccc",
          }}
        >
          {favorite ? (
            <FavoriteIcon sx={{ color: "#DB4444" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      <DeliveryInfo />
    </Paper>
  );
}