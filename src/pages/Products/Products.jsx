/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getProduct } from "../../state/products/productsSelector";
import { fetchProductsData } from "../../state/products/productsThrunk";
import Card from "./assets/Card";

/*----------------------------------------------------------------------------*/
/* Products                                                                   */
/*----------------------------------------------------------------------------*/

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loaded } = useSelector(getProduct);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      {loaded ? (
        <div>
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer
              "
                onClick={() => navigate(`/item/${product.id}`)}
              >
                <Card data={product} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default Products;
