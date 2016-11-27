import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
​
export const TheFooter = ()=> {
    return (
        <Container>
            <Footer>
                <FooterTab>
                    <Button active>
                      <ion-icon name="ios-timer-outline"></ion-icon>
                      Today
                    </Button>
                    <Button>
                      <ion-icon name="ios-calendar-outline"></ion-icon>
                      This Week
                    </Button>
                    <Button>
                      <Badge>2</Badge>
                      <ion-icon name="ios-analytics-outline"></ion-icon>
                      Your Health
                    </Button>
                    <Button>
                      <ion-icon name="md-settings"></ion-icon>
                      Setting
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
