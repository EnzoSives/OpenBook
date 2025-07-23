// composables/useCart.ts
import { computed } from 'vue';
import type { Ref } from 'vue'; // Importamos Ref para tipado
import { useState } from '#app';

// La interfaz no cambia
export interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export const useCart = () => {
  // CORRECCIÓN CLAVE:
  // Movemos useState aquí DENTRO. Ahora solo se llama cuando un componente
  // invoca a useCart(), lo que garantiza que se ejecuta en el contexto correcto.
  const cart: Ref<CartItem[]> = useState<CartItem[]>('cart', () => []);

  const cartItems = computed(() => cart.value);

  const cartCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
  });

  const cartTotal = computed(() => {
    const total = cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  });

  const addToCart = (product: any) => {
    const existingItem = cart.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter(item => item.id !== productId);
  };

  return {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
  };
};