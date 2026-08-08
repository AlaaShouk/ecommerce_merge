import React, { useEffect, useState } from "react";
import { callApiGet } from "../services/http";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function ProductCard({ id }) {
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const response = await callApiGet(
      `product/${id}`,
      (err) => err.message || "حدث خطأ"
    );

    if (response) {
      setProduct({
        title: response.data.name,
        image:
          "https://ecommerce.monzeryshop.shop/" +
          response.data.hero_image?.path,
        price: response.data.price,
        oldPrice: response.data.price_before_discount,
        rating: response.data.rating,
        reviews: response.data.reviews_count,
        discount: response.data.discount_percentage,
      });
    }
  }

  useEffect(() => {
    if (!id) return;
    fetchProduct();
  }, [id]);

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 220,
        mx: "auto",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        transition: ".3s",
        height: "100%",
        display: "flex",
        flexDirection: "column",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,.08)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#F5F5F5",
          height: {
            xs: 180,
            sm: 200,
            md: 220,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        {/* Discount */}
        {!!product?.discount && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "#DB4444",
              color: "#fff",
              px: 1,
              py: 0.3,
              borderRadius: 1,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            -{product.discount}%
          </Box>
        )}

        {/* Icons */}
        <Box
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            sx={{
              bgcolor: "#fff",
              width: 34,
              height: 34,
              "&:hover": {
                bgcolor: "#fff",
              },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              bgcolor: "#fff",
              width: 34,
              height: 34,
              "&:hover": {
                bgcolor: "#fff",
              },
            }}
          >
            <VisibilityOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          component="img"
          src={product?.image}
          alt={product?.title}
          sx={{
            width: "70%",
            maxWidth: 150,
            maxHeight: "80%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Info */}
      <CardContent
        sx={{
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: {
              xs: 14,
              sm: 15,
              md: 16,
            },
            mb: 1,
            minHeight: 45,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product?.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            flexWrap: "wrap",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: "#DB4444",
              fontWeight: 600,
              fontSize: {
                xs: 14,
                md: 16,
              },
            }}
          >
            ${product?.price}
          </Typography>

          {product?.oldPrice && (
            <Typography
              sx={{
                color: "#999",
                textDecoration: "line-through",
                fontSize: {
                  xs: 12,
                  md: 14,
                },
              }}
            >
              ${product.oldPrice}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mt: "auto",
          }}
        >
          <Rating
            value={Number(product?.rating) || 0}
            readOnly
            precision={0.5}
            size="small"
          />

          <Typography
            sx={{
              color: "#777",
              fontSize: {
                xs: 12,
                md: 14,
              },
            }}
          >
            ({product?.reviews})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}