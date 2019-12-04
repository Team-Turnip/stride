import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, StyleSheet} from 'react-native'
import {Container, Button, Text, Content, Card, CardItem} from 'native-base'
import {me} from '../store/user'
import {getMyClassesThunk} from '../store/myClasses'
import {getMyWorkoutsThunk} from '../store/workouts'
import MyPreviousWorkouts from '../components/MyPreviousWorkouts'
import AppHeader from '../components/AppHeader'
import MyPreviousClasses from '../components/MyPreviousClasses'

class HomeClassesScreen extends Component {
  componentDidMount() {
    this.props.me()
    this.props.getMyClassesThunk()
    // this.props.getMyWorkoutsThunk()
  }

  render() {
    const {navigation} = this.props
    return (
      <Container>
        <AppHeader navigation={this.props.navigation} />
        <Content>
          <Button
            block
            danger
            style={{margin: 7}}
            onPress={() =>
              navigation.navigate('ClassesScreen', {
                loggedInUserId: this.props.user.id
              })
            }
          >
            <Text>Join Class</Text>
          </Button>

          <Button
            block
            danger
            style={{margin: 7}}
            onPress={() => this.props.navigation.navigate('CreateClassScreen')}
          >
            <Text>Create Class</Text>
          </Button>
          <Card>
            <CardItem header>
              <Text>My Upcoming Classes</Text>
            </CardItem>
            {this.props.myClasses.map((aClass, i) => {
              return (
                <CardItem key={i}>
                  <Text>{aClass.name}</Text>
                </CardItem>
              )
            })}
          </Card>

          <Card>
            <CardItem header>
              <Text>My Previous Classes</Text>
            </CardItem>
            <MyPreviousClasses myClasses={this.props.myClasses} />
            {/* {this.props.myClasses.when < dateNow ? (
                <Text>less</Text>
              ) : (
                <Text>more</Text>
              )} */}
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({user, workouts, myClasses}) => ({
  user,
  workouts,
  myClasses
})

const mapDispatchToProps = {me, getMyClassesThunk, getMyWorkoutsThunk}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClassesScreen)
