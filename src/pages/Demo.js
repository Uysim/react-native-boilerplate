
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation';


type Props = {};
export default class Demo extends Component<Props> {
  static navigationOptions = {
    title: 'Demo',
  };

  backToHome(){
    // Reset when back to parent screen
    // This prevent memory leak
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>
            This is Demo Page
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.backToHome()} primary full>
              <Text style={{color: '#fff'}}> Go To Demo Page </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

