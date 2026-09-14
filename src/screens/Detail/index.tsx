import { useState } from "react";
import {
  Container,
  ScrollArea,
  TopBar,
  BackButton,
  BackButtonText,
  DetailImage,
  Content,
  CategoryLabel,
  DetailTitle,
  PriceRow,
  DetailPrice,
  RatingText,
  DetailDescription,
  QuantityRow,
  StepperButton,
  StepperButtonText,
  QuantityValue,
  AddToCartBar,
  AddToCartButton,
  AddToCartButtonText,
} from "./styles";
import { Product } from "../../types/Product";


interface DetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function Detail({ product, onBack, onAddToCart }: DetailProps) {
  const [quantity, setQuantity] = useState<number>(1);

  function decrease() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increase() {
    setQuantity((current) => current + 1);
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={onBack}>
          <BackButtonText>{"< Voltar"}</BackButtonText>
        </BackButton>
      </TopBar>

      <ScrollArea>
        <DetailImage source={{ uri: product.image }} resizeMode="contain" />

        <Content>
          <CategoryLabel>{product.category}</CategoryLabel>
          <DetailTitle>{product.title}</DetailTitle>

          <PriceRow>
            <DetailPrice>{`$${product.price.toFixed(2)}`}</DetailPrice>
            <RatingText>{`★ ${product.rating.rate} (${product.rating.count})`}</RatingText>
          </PriceRow>

          <DetailDescription>{product.description}</DetailDescription>
        </Content>
      </ScrollArea>

      <QuantityRow>
        <StepperButton onPress={decrease}>
          <StepperButtonText>{"-"}</StepperButtonText>
        </StepperButton>
        <QuantityValue>{quantity}</QuantityValue>
        <StepperButton onPress={increase}>
          <StepperButtonText>{"+"}</StepperButtonText>
        </StepperButton>
      </QuantityRow>

      <AddToCartBar>
        <AddToCartButton onPress={() => onAddToCart(product, quantity)}>
          <AddToCartButtonText>Adicionar ao carrinho</AddToCartButtonText>
        </AddToCartButton>
      </AddToCartBar>
    </Container>
  );
}