import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "./ProductCard";
import { callApiGet } from "../services/http";

export default function RelatedProducts({ relatedProdsIds = [] }) {
     if (!relatedProdsIds.length) return null;
      // const [products, setProducts] = useState([]);
       
     

//       useEffect(() => {
//         async function fetchProducts() {
//         const response = await callApiGet(`product/${id}`,
//               (err) => err.message || "حدث خطأ"
//           );

//           if (response) {
//               console.log("response.data", response.data.related_products
// );
//               // setProducts(response.data);
//           }
//           console.log("response", response);
//         }

//         fetchProducts();
//     }, [id]);
  

   return (
    <Box mt={10}>
      {/* Section Title */}
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
          fontSize={{
            xs: 18,
            sm: 20,
            md: 22,
          }}
        >
          Related Items
        </Typography>
      </Box>

      {/* Products */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          justifyItems: "center",
        }}
      >
        {relatedProdsIds.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
          />
        ))}
      </Box>
    </Box>
  );
}