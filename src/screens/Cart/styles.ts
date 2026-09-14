import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
`;

export const BackButton = styled.Pressable`
  padding: 4px 8px;
`;

export const BackButtonText = styled.Text`
  font-size: 16px;
`;

export const ScreenTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ItemImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 8px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
`;

export const ItemPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  color: #1a8927;
`;

export const StepperRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const StepperButton = styled.Pressable`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
`;

export const StepperButtonText = styled.Text`
  font-size: 14px;
`;

export const QuantityValue = styled.Text`
  font-size: 14px;
  min-width: 16px;
  text-align: center;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: #888;
`;

export const Summary = styled.View`
  padding: 16px;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const SummaryLabel = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const SummaryValue = styled.Text`
  font-size: 14px;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CheckoutButton = styled.Pressable`
  background-color: #000;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const RemoveButton = styled.Pressable`
  margin-left: 8px;
`;

export const RemoveButtonText = styled.Text`
  font-size: 12px;
  color: #cc0000;
`;