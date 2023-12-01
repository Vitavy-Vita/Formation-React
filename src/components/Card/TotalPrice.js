import React from 'react';
import { useCartProvider } from '../../context/CartContext';

export default function TotalPrice() {
  const value = useCartProvider();

  return <p>{value.totalCart}€</p>;
}
