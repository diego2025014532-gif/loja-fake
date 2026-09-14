import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./src/screens/Home";
import { Detail } from "./src/screens/Detail";
import { Cart } from "./src/screens/Cart";
import { Product } from "./src/types/Product";

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [screen, setScreen] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  function openDetail(product: Product) {
    setSelectedProduct(product);
    setScreen("detail");
  }

  function addToCart(product: Product, quantity: number) {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { product, quantity }];
    });

    setScreen("home");
  }

  function changeQuantity(productId: number, quantity: number) {
    setCart((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }
  function removeFromCart(productId: number) {
  setCart((current) => current.filter((item) => item.product.id !== productId));
}

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (screen === "detail" && selectedProduct) {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
        <Detail
          product={selectedProduct}
          onBack={() => setScreen("home")}
          onAddToCart={addToCart}
        />
      </SafeAreaProvider>
    );
  }

  if (screen === "cart") {
    return (
      <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
        <Cart
          items={cart}
          onBack={() => setScreen("home")}
          onChangeQuantity={changeQuantity}
          onRemoveItem={removeFromCart}
        />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#fff" }}>
      <Home
        onOpenProduct={openDetail}
        onOpenCart={() => setScreen("cart")}
        cartCount={cartCount}
      />
    </SafeAreaProvider>
  );
}