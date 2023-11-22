import React from "react";
import "../../src/Products.css";
import { v4 as uuidv4 } from "uuid";
import { StarIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { color } from "framer-motion";
function Products() {
  const [postName, setPostName] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postStock, setPostStock] = useState("");
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    axios(
      "https://6556137684b36e3a431ef611.mockapi.io/usernameProducts/products"
    ).then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(fav);
  console.log(basket);
  return (
    <div className="products">
      <h1>Products</h1>
      <SimpleGrid spacing={4}>
        {products.map((product, i) => {
          return (
            <div>
              <Card key={i}>
                <CardHeader>
                  <Heading size="md">{product.name}</Heading>
                </CardHeader>
                <CardBody>
                  <p>{product.price}</p>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={(e) => {
                      let findProduct = products.find(
                        (elem) => elem.id == e.target.getAttribute("data-id")
                      );
                      console.log(findProduct);
                      // console.log(findProduct);
                      setBasket([...basket, findProduct]);
                    }}
                    data-id={product.id}
                  >
                    Add to Card
                  </Button>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      let find = products.find(
                        (elem) => elem.id == e.target.getAttribute("name")
                      );
                      console.log(e.target.getAttribute("name"));
                      setFav([...fav, find]);

                      // console.log(e.target);
                    }}
                    name={product.id}
                    colorScheme="gray"
                  >
                    <FontAwesomeIcon
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      icon={faHeart}
                    />
                  </Button>
                </CardFooter>
              </Card>
              ;
            </div>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Products;
