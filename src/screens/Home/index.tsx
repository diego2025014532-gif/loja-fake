import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { Product } from "../../types/Product";
import {
  Container,
  TopRow,
  SearchInput,
  CartButton,
  CartButtonText,
  CategoryChip,
  CategoryText,
  EmptyText,
  ErrorText,
  RetryButton,
  RetryButtonText,
  CenterBox,
} from "./styles";

interface HomeProps {
  onOpenProduct: (product: Product) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export function Home({ onOpenProduct, onOpenCart, cartCount }: HomeProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function loadProducts() {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch(() => setError("Não foi possível carregar os produtos"))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredProducts = products
    .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
    .filter((p) => p.title.toLowerCase().includes(search.trim().toLowerCase()));

  const allCategories = ["all", ...categories];

  return (
    <Container>
      <TopRow>
        <SearchInput
          placeholder="Buscar produtos"
          value={search}
          onChangeText={setSearch}
        />
        <CartButton onPress={onOpenCart}>
          <CartButtonText>{`Carrinho (${cartCount})`}</CartButtonText>
        </CartButton>
      </TopRow>

      <FlatList
        data={allCategories}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, marginBottom: 12 }}
        renderItem={({ item }) => (
          <CategoryChip
            style={{ backgroundColor: item === selectedCategory ? "#000" : "#fff" }}
            onPress={() => setSelectedCategory(item)}
          >
            <CategoryText style={{ color: item === selectedCategory ? "#fff" : "#000" }}>
              {item === "all" ? "Todos" : item}
            </CategoryText>
          </CategoryChip>
        )}
      />

      {loading && (
        <CenterBox>
          <ActivityIndicator size="large" color="#000" />
        </CenterBox>
      )}

      {!loading && error && (
        <CenterBox>
          <ErrorText>{error}</ErrorText>
          <RetryButton onPress={loadProducts}>
            <RetryButtonText>Tentar de novo</RetryButtonText>
          </RetryButton>
        </CenterBox>
      )}

      {!loading && !error && (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => onOpenProduct(item)} />
          )}
          ListEmptyComponent={<EmptyText>Nenhum produto encontrado</EmptyText>}
        />
      )}
    </Container>
  );
}