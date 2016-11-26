import React, { Component } from 'react';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';

import CardSwiper from '../components/CardSwiper.js';
import HealthChart from '../components/HealthChart.js';

const meals = []; //image, title
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
        <CardSwiper />
        <CardSwiper />
        <CardSwiper />
      </Content>

      <Footer />
    </Container>
  );
}

var styles = StyleSheet.create({

});
