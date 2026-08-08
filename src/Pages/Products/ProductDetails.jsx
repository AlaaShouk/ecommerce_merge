import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApiGet } from "../../services/http";

import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Link,
  Box,
  CircularProgress,
} from "@mui/material";

import ProductGallery from "../../Components/ProductGallery";
import ProductInfo from "../../Components/ProductInfo";
import RelatedProducts from "../../Components/RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const response = await callApiGet(
        `product/${id}`,
        (err) => err.message || "حدث خطأ"
      );

      if (response) {
        setProduct(response.data);
      }
    }

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const sizes = [
    ...new Set(
      product.attributes
        .filter((item) => item.name === "size")
        .map((item) => item.value)
    ),
  ];

  const colors = [
    ...new Set(
      product.attributes
        .filter((item) => item.name === "color")
        .map((item) => item.value)
    ),
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: {
          xs: 3,
          sm: 5,
          md: 8,
        },
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumbs
        separator="/"
        sx={{
          mb: {
            xs: 3,
            md: 6,
          },
          flexWrap: "wrap",
        }}
      >
        <Link underline="hover" color="inherit">
          Account
        </Link>

        <Link underline="hover" color="inherit">
          Gaming
        </Link>

        <Typography color="text.primary">
          {product.name}
        </Typography>
      </Breadcrumbs>

      {/* Product */}
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{
          xs: 2,
          md: 6,
        }}
        alignItems="flex-start"
      >
        {/* Images */}
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
        >
          <ProductGallery
            heroImage={product.hero_image}
            media={product.media}
          />
        </Grid>

        {/* Info */}
        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
        >
          <ProductInfo
            name={product.name}
            price={product.price}
            rating={Number(product.reviews)}
            reviews={product.reviews_count}
            description={product.description}
            sizes={sizes}
            colors={colors}
          />
        </Grid>
      </Grid>

      {/* Related Products */}
      <Box
        sx={{
          mt: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <RelatedProducts
          relatedProdsIds={product.related_products}
        />
      </Box>
    </Container>
  );
}