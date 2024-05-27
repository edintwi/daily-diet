import { Button } from "@/src/components/button/Button";
import { AppStackParamsList } from "@/src/routes/appStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "react-native";
import { Container, FeedbackTitle, Message } from "./style";

type Props = NativeStackScreenProps<AppStackParamsList, "FeedbackScreen">;

export function FeedbackScreen({ navigation, route }: Props) {
  const { isDiet } = route.params;

  return (
    <Container>
      {isDiet === true ? (
        <>
          <FeedbackTitle $feedback={isDiet}>Continue assim!</FeedbackTitle>
          <Message>Você continua dentro da dieta. Muito bem!</Message>
          <Image
            source={require("../../assets/images/SucessIllustration.png")}
          />
        </>
      ) : (
        <>
          <FeedbackTitle $feedback={isDiet}>Que pena!</FeedbackTitle>
          <Message>
            Você saiu da dieta dessa vez, mas continue se esforçando e não
            desista!
          </Message>
          <Image source={require("../../assets/images/FailIllustration.png")} />
        </>
      )}

      <Button
        label="Ir para a página inicial"
        ButtonVariantions="SOLID"
        onPress={() => navigation.navigate("Home")}
      />
    </Container>
  );
}
