import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const ScrollArea = styled.ScrollView``;

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

export const DetailImage = styled.Image`
  width: 100%;
  height: 260px;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const CategoryLabel = styled.Text`
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
`;

export const DetailTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 6px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const DetailPrice = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #1a8927;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: #888;
`;

export const DetailDescription = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  color: #444;
`;

export const QuantityRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
`;

export const StepperButton = styled.Pressable`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
`;

export const StepperButtonText = styled.Text`
  font-size: 18px;
`;

export const QuantityValue = styled.Text`
  font-size: 16px;
  min-width: 20px;
  text-align: center;
`;

export const AddToCartBar = styled.View`
  padding: 16px;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const AddToCartButton = styled.Pressable`
  background-color: #000;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
`;

export const AddToCartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;