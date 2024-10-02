import { ReactNode } from "react";
import { View } from "react-native"

type SpacerType = {
    children: ReactNode
};

export const Spacer = ({children}:SpacerType) => {
  return (
    <View className="m-10"></View>
  )
}
