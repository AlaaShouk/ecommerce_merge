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
import DeliveryInfo from "./DeliveryInfo";

export default function ProductInfo({ 
  price,
  name,
  rating,
  reviews,
  description,
  sizes = [],
  colors = [],
  }){

     const [favorite, setFavorite] = useState(false);
     const [quantity, setQuantity] = useState(1);
     const [selectedSize, setSelectedSize] = useState(sizes?.[0] || "");
     const [selectedColor, setSelectedColor] = useState("#A0BCE0");


    
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 390,
        p: 2.5,
        border: "1px solid #E5E5E5",
        borderRadius: 2,
        boxSizing: "border-box",
      }}
    >
      {/* Product Name */}
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 600,
          mb: 1,
        }}
      >
      {name}
      </Typography>


      {/* Rating */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1.5,
        }}
      >

        <Rating
            value={rating}
            readOnly
            precision={0.5}
            size="small"
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#7D8184",
          }}
        >
           ({reviews} Reviews)
        </Typography>


        <Divider
          orientation="vertical"
          flexItem
        />


        <Typography
          sx={{
            fontSize: 13,
            color: "#00C853",
          }}
        >
          In Stock
        </Typography>

      </Box>


      {/* Price */}
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 500,
          mb: 1.5,
        }}
      >
        ${Number(price).toFixed(2)}
      </Typography>


      {/* Description */}
      <Typography
        sx={{
          fontSize: 13,
          lineHeight: 1.6,
          color: "#555",
          mb: 2,
        }}
      >
      {description}
      </Typography>


      <Divider sx={{ mb: 2 }} />


      {/* Colours */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 2,
        }}
      >

        <Typography
        sx={{
          fontSize: 16,
          fontWeight: 500,
         }}
        >
          Colours:
        </Typography>

         {colors.map((color) => (
          <Box
           key={color}
           onClick={() => setSelectedColor(color)}
            sx={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              bgcolor: color,
              border:
                selectedColor === color
                  ? "2px solid #000"
                  : "1px solid #ccc",
              cursor: "pointer",
            }}
        />
         ))}
    


      </Box>


      {/* Sizes */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2.5,
        }}
      >

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            mr: 1,
          }}
        >
           Size:
        </Typography>


        {sizes.map((size) => (
          <Button
            key={size}
            onClick={() => setSelectedSize(size)}
           variant={
              selectedSize === size
                  ? "contained"
                  : "outlined"
               }
            sx={{
              width: 32,
              minWidth: 32,
              height: 30,
              p: 0,
              fontSize: 13,
              textTransform: "none",
              borderRadius: 1,
              color: selectedSize === size ? "#fff" : "#000",
              bgcolor: selectedSize === size ? "#DB4444" : "#fff",
              boxShadow: "none",
              borderColor:"#999",
              "&:hover":{
                 bgcolor: selectedSize === size ? "#DB4444" : "#f5f5f5",
                 boxShadow: "none",
              }
            }}
          >
            {size}
          </Button>

        ))}

      </Box>


      {/* Quantity */}
      <Box
        sx={{
          display:"flex",
          alignItems:"center",
          gap:1.5,
          mb:2.5,
        }}
      >

        <Box
          sx={{
            display:"flex",
            height:38,
            border:"1px solid #999",
            borderRadius:1,
            overflow:"hidden",
          }}
        >

          <Button
            onClick={() => setQuantity(Math.max(1, quantity - 1)) }
            sx={{
              minWidth:35,
              color:"#000",
            }}
          >
            -
          </Button>


          <Box
            sx={{
              width:45,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderLeft:"1px solid #999",
              borderRight:"1px solid #999",
            }}
          >
            {quantity}
          </Box>


          <Button
            onClick={() =>setQuantity(quantity + 1)}
            sx={{
              minWidth:35,
              bgcolor:"#DB4444",
              color:"#fff",

              "&:hover":{
                bgcolor:"#DB4444"
              }
            }}
          >
            +
          </Button>

        </Box>



        <Button
          variant="contained"
            onClick={() => {
                console.log({
                  quantity,
                  selectedSize,
                  selectedColor,
                });
              }}
              
          sx={{
            height:38,
            width:140,
            bgcolor:"#DB4444",
            textTransform:"none",
            fontSize:14,
            boxShadow:"none",

            "&:hover":{
              bgcolor:"#DB4444",
              boxShadow:"none",
            }
          }}
        >
          Buy Now
        </Button>



        <IconButton
          onClick={() => setFavorite(!favorite)}
          sx={{
            width:38,
            height:38,
            border:"1px solid #999",
            borderRadius:1,
          }}
        >
          <FavoriteBorderIcon
            sx={{
              fontSize:20,
              color: favorite ? "#DB4444" : "#000",
            }}
          />
        </IconButton>


      </Box>


      <DeliveryInfo />

    </Paper>
  );
}