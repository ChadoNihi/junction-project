import React, { Component } from 'react';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';

import CardSwiper from '../components/CardSwiper.js';

const meals = [];
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
        <CardSwiper />
        <CardSwiper />
        <CardSwiper />
      </Content>
    </Container>
  );
}

var styles = StyleSheet.create({

});
