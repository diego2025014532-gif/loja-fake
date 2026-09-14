import { FlatList } from "react-native";
import { Product } from "../../types/Product";
import {
  Container,
  TopBar,
  BackButton,
  BackButtonText,
  ScreenTitle,
  ItemRow,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  StepperRow,
  StepperButton,
  StepperButtonText,
  QuantityValue,
  RemoveButton,
  RemoveButtonText,
  EmptyText,
  Summary,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  CheckoutButtonText,
} from "./styles";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onBack: () => void;
  onChangeQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function Cart({ items, onBack, onChangeQuantity, onRemoveItem }: CartProps)  {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? 12 : 0;
  const total = subtotal + shipping;

  return (
    <Container>
      <TopBar>
        <BackButton onPress={onBack}>
          <BackButtonText>‹ Voltar</BackButtonText>
        </BackButton>
        <ScreenTitle>{`Carrinho (${items.length})`}</ScreenTitle>
      </TopBar>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.product.id)}
        renderItem={({ item }) => (
      <ItemRow>
        <ItemImage source={{ uri: item.product.image }} resizeMode="contain" />
        <ItemInfo>
          <ItemTitle numberOfLines={1}>{item.product.title}</ItemTitle>
          <ItemPrice>{`$${item.product.price.toFixed(2)}`}</ItemPrice>
        </ItemInfo>
        <StepperRow>
          <StepperButton
            onPress={() => onChangeQuantity(item.product.id, Math.max(1, item.quantity - 1))}
          >
            <StepperButtonText>-</StepperButtonText>
          </StepperButton>
          <QuantityValue>{item.quantity}</QuantityValue>
          <StepperButton
            onPress={() => onChangeQuantity(item.product.id, item.quantity + 1)}
          >
            <StepperButtonText>+</StepperButtonText>
          </StepperButton>
        </StepperRow>
        <RemoveButton onPress={() => onRemoveItem(item.product.id)}>
          <RemoveButtonText>Remover</RemoveButtonText>
        </RemoveButton>
      </ItemRow>
    )}
        ListEmptyComponent={<EmptyText>Seu carrinho está vazio</EmptyText>}
      />

      <Summary>
        <SummaryRow>
          <SummaryLabel>Subtotal</SummaryLabel>
          <SummaryValue>{`$${subtotal.toFixed(2)}`}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>Frete</SummaryLabel>
          <SummaryValue>{`$${shipping.toFixed(2)}`}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>{`$${total.toFixed(2)}`}</TotalValue>
        </SummaryRow>

        <CheckoutButton>
          <CheckoutButtonText>Finalizar compra</CheckoutButtonText>
        </CheckoutButton>
      </Summary>
    </Container>
  );
}