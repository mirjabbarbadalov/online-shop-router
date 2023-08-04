import React, { useState } from "react";
import Product from "../components/Product";
import Modal from "../components/Modal";

export default function Cart({
  allFavorites,
  setAllFavorites,
  cartOpen,
  setCartOpen,
  addedCart,
  setAddedCart,
  selectedProduct,
  setSelectedProduct,
}) {
  const allAddedCart = JSON.parse(localStorage.getItem("cart"));

  function handleUnfavorite(productId) {
    setAllFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== productId)
    );

    setAddedCart((prevCart) =>
      prevCart.filter((cartProduct) => cartProduct.id !== productId)
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(allAddedCart.filter((product) => product.id !== productId))
    );
  }

  function handleOpenModal(product) {
    setSelectedProduct(product);
    setCartOpen(true);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
    setCartOpen(false);
  }

  return (
    <div>
      {allAddedCart && allAddedCart.length > 0 ? (
        <div className="product-list">
          {allAddedCart.map((product) => {
            // Check if the product is in the favorites list
            const isFavorite = allFavorites.some(
              (favorite) => favorite.id === product.id
            );

            return (
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
                onUnfavorite={handleUnfavorite}
                favorite={isFavorite} // Set the favorite prop to true or false
                inCart={true} // Set inCart prop to true for products in the cart
                onRemoveFromCart={() => handleUnfavorite(product.id)} // Use product.id instead of productId
                onOpenModal={() => handleOpenModal(product)}
              />
            );
          })}
        </div>
      ) : (
        <p className="error-message">No added cart.</p>
      )}

      {cartOpen && selectedProduct && (
        <Modal
          buttonText={"Delete from Cart"}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          name={selectedProduct.name}
          price={selectedProduct.price}
          imgUrl={selectedProduct.imgUrl}
          sku={selectedProduct.sku}
          BackgroundColor={selectedProduct.BackgroundColor}
          addToCart={handleUnfavorite}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
