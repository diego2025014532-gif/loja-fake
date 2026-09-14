import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;  
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 12px;
`;

export const CategoryChip = styled.Pressable`
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #000;
  margin-right: 8px;
`;

export const CategoryText = styled.Text`
  font-size: 13px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: #888;
`;
export const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const CartButton = styled.Pressable`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #000;
`;

export const CartButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;
export const CenterBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const ErrorText = styled.Text`
  color: #cc0000;
  margin-bottom: 12px;
  text-align: center;
`;

export const RetryButton = styled.Pressable`
  background-color: #000;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const RetryButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;