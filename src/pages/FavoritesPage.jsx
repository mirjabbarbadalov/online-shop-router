import React from "react";
import Product from "../components/Product";

export default function Favorites({
  allFavorites,
  setAllFavorites,
  cartOpen,
  setCartOpen,
  setSelectedProduct,
}) {
  function handleUnfavorite(productId) {
    setAllFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== productId)
    );
  }

  return (
    <div>
      {allFavorites && allFavorites.length > 0 ? (
        <div className="product-list">
          {allFavorites.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              imgUrl={product.imgUrl}
              sku={product.sku}
              BackgroundColor={product.BackgroundColor}
              allFavorites={allFavorites}
              setAllFavorites={setAllFavorites}
              id={product.id}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              setSelectedProduct={setSelectedProduct}
              favorite={true}
              onUnfavorite={handleUnfavorite}
            />
          ))}
        </div>
      ) : (
        <p className="error-message">No favorites found.</p>
      )}
    </div>
  );
}
