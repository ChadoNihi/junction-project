import React, { Component } from 'react';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';

import CardSwiper from '../components/CardSwiper.js';
import HealthChart from '../components/HealthChart.js';
import TheFooter from '../components/TheFooter.js';

const allMeals = {
  breakfasts: [], // arr of {title, image, ingredients, optional ingredients, tags}
  lunches: [],
  dinners: [],
  snacks: [] //cashews!1
}; //image, title, main ingredients(?),
​
export const MainScreen = ({onForward, onBack})=> {
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
        <HealthChart />

        <Container>
          <H3>Your Menu for Today</H3>
          <Button bordered info> This week </Button>
        </Container>
        {Object.keys(allMeals).forEach(function(key) {
          const meals = allMeals[key];

          return <CardSwiper meals={meals} />;
        })}
      </Content>

      <TheFooter />
    </Container>
  );
}

var styles = StyleSheet.create({

});
