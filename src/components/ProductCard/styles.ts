import styled from "styled-components/native";

export const Card = styled.Pressable`
  flex: 1;
  background-color: #fff;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  border-radius: 12px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 12px;
`;

export const DetailsContainer = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  min-height: 36px;
`;

export const Price = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: #1a8927;
  margin-top: 4px;
`;

export const Rating = styled.Text`
  font-size: 12px;
  color: #888;
  margin-top: 2px;
`;