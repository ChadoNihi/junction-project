import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

import SuggestionCard from './SuggestionCard.js';

/*const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./img/swiper-1.png'),
    },
    .  .  .
];*/

export const DeckSwiperExample = ({meals})=> {
    return (
      <View>
          <DeckSwiper
              dataSource={meals}
              renderItem={item =>
                  <SuggestionCard image={item.image} title={item.title} />
              }
          />
      </View>
    );
}
