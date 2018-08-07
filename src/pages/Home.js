
import React, {Component} from 'react';
import { connect } from 'react-redux';

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
  H1,
  Card,
  CardItem,
  variables
} from 'native-base';

import { homeActions } from '@src/actions';


type Props = {};
class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  goToDemo(){
    this.props.navigation.navigate('Demo');
  }

  render() {
    return (
      <Container>
        <Content  contentContainerStyle={{ justifyContent: 'center', flex: 1, padding: 15 }}>
          <Card>
            <CardItem>
              <Button onPress={()=>this.props.decrement()} danger>
                <Text>-</Text>
              </Button>
              <Body style={styles.cardItem}>
                <H1>
                  {this.props.count}
                </H1>
              </Body>
              <Button onPress={()=>this.props.increment()} primary>
                <Text>+</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.goToDemo()} full>
              <Text> Go To Demo Page </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  cardItem: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const mapStateToProps = state => ({
  count: state.count
})



export default connect(mapStateToProps, homeActions)(Home);
