import React, { Component } from 'react';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';

import CardSwiper from '../components/CardSwiper.js';
import HealthChart from '../components/HealthChart.js';
import TheFooter from '../components/TheFooter.js';

const allMeals = {
  breakfasts: [], // arr of {title, image, ingredients, optIngredients, tags}
  lunches: [],
  dinners: [],
  snacks: [] //cashews!1
}; //image, title, main ingredients(?),
​
export const MainScreen = ({acceptMeal, onForward, onBack})=> {
  return (
    <Container>
      <Header searchBar rounded>
        <InputGroup>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
            </InputGroup>
            <Button transparent>
              Search
            </Button>
      </Header>

      <Content>
        <Container>
          <H3>Your Latest Health Data</H3>
          <Button bordered info> See more </Button>
        </Container>
        <HealthChart />

        <Container>
          <H3>Your Menu for Today</H3>
          <Button bordered info> This week </Button>
        </Container>
        {Object.keys(allMeals).forEach(function(key) {
          const meals = allMeals[key];

          return <CardSwiper acceptMeal={acceptMeal} meals={meals} mealKey={key} />;
        })}
      </Content>

      <TheFooter />
    </Container>
  );
}

var styles = StyleSheet.create({

});
