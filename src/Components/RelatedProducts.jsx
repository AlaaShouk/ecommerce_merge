import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "./ProductCard";
import { callApiGet } from "../services/http";

export default function RelatedProducts({id}) {

     const [products, setProducts] = useState([]);
        useEffect(() => {
        async function fetchProducts() {
        const products = await callApiGet(
           `product/${id}`,
            (err) => err.message || "حدث خطأ"
        );

        if (response) {
            setProducts(response.data);
        }
        }

        fetchProducts();
    }, [id]);

   return (
    <Box mt={10}>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 40,
            bgcolor: "#DB4444",
            borderRadius: 1,
          }}
        />

        <Typography
          color="#DB4444"
          fontWeight={600}
        >
          Related Item
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Box
          sx={{
                mt: 8,
                display: "grid",
                gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
                },
                gap: 4,
            }}
        >
        {products.map((product) => (
            <ProductCard
            // key={product.id}
            // image={product.image}
            // title={product.title}
            // price={product.price}
            // oldPrice={(product.price * 1.25).toFixed(2)}
            // discount={20}
            // rating={product.rating.rate}
            // reviews={product.rating.count}
            />
        ))}
        </Box>
      </Grid>

    </Box>
  );
}