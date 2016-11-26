import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Button } from 'native-base';
import { FontAwesome } from '@exponent/vector-icons';

export const SuggestionCard = ({title, image, ingredients, optIngredients, tags})=> {
  return (
    <Card style={{ elevation: 3 }>
        <CardItem>
            <Thumbnail source={item.image} />
            <Text>{title}</Text>
            <Text note>NativeBase</Text>
        </CardItem>
        <CardItem>
            <Image style={{ resizeMode: 'cover', width: null }} source={image} />
        </CardItem>
        <CardItem>
          <Button primary onClick={}>
            <FontAwesome name="check" size={32} /*color="white"*/ />
          </Button>
        </CardItem>
    </Card>
  );
}

var styles = StyleSheet.create({

});
