import { Card, ProductImage, DetailsContainer, Title, Price, Rating } from "./styles";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Card onPress={onPress}>
      <ProductImage source={{ uri: product.image }} resizeMode="cover" />
      <DetailsContainer>
        <Title numberOfLines={2}>{product.title}</Title>
        <Price>{`$${product.price.toFixed(2)}`}</Price>
        <Rating>{`★ ${product.rating.rate} (${product.rating.count})`}</Rating>
      </DetailsContainer>
    </Card>
  );
}