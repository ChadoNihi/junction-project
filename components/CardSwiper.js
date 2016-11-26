import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

import SuggestionCard from './SuggestionCard.js';

export const CardSwiper = ({meals})=> {
    return (
      <View>
          <DeckSwiper
              dataSource={meals}
              renderItem={item =>
                  <SuggestionCard mealKey={mealKey} image={item.image} ingredients={item.ingredients} optIngredients={item.optIngredients} tags={item.tags} title={item.title} />
              }
          />
      </View>
    );
}
