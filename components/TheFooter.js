import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
​
export const TheFooter = ()=> {
    return (
        <Container>
            <Footer>
                <FooterTab>
                    <Button active>
                      Today
                    </Button>
                    <Button>
                      This Week
                    </Button>
                    <Button>
                      <Badge>2</Badge>
                      Your Health
                    </Button>
                    <Button>
                      Setting
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
