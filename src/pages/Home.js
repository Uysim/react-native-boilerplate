
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
  Text,
  H1
} from 'native-base';


type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  goToDemo(){
    this.props.navigation.navigate('Demo');
  }

  render() {
    return (
      <Container>
        <Content>
          <H1>This is Home Page</H1>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.goToDemo()} primary full>
              <Text style={{color: '#fff'}}> Go To Demo Page </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

