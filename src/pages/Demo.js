
import React, {Component} from 'react';
import { View } from 'react-native';
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
  Text
} from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation';

import { demoActions } from '@src/actions';


type Props = {};
class Demo extends Component<Props> {
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
        <Content padder>
          <View style={styles.jsonBlock}>
            <Text style={styles.jsonBlockText}>
              {JSON.stringify(this.props.demo)}
            </Text>
          </View>
          <Button onPress={()=>this.props.create()} block>
            <Text>
              Fetch Demo
            </Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={()=>this.backToHome()} full>
              <Text> Go To Home Page </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  jsonBlock: {
    marginVertical: 32
  },
  jsonBlockText: {
    textAlign: 'center'
  }
}

const mapStateToProps = state => ({
  demo: state.demo
})


export default connect(mapStateToProps, demoActions)(Demo);

