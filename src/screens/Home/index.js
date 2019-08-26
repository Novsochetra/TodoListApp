import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import Header from 'src/components/Header'
import DefaultList from 'src/components/SwipeList/'
import Colors from 'src/utils/Colors'
import { connect } from 'react-redux'
import { getCategories, insertCategories, insertTasks, getTasks } from 'src/redux/actions/database'

WINDOW_WIDTH = Dimensions.get('window').width - 30

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDone: false,
      windowWidth: 0
    }

  }

  async componentDidMount() {
    await this.props.getCategories()
    // console.log("componentDidMount")
    // await this.props.insertTasks()
    // await this.props.getTasks()
  }

  handleToggleCheckbox = () => {
    this.setState({ isDone: !this.state.isDone })
  }

  render() {
    return (
      <View>
        <Header />

        <View style={{ padding: 15 }}>
          <Text style={{ color: Colors.LIGHT_GRAY2, fontWeight: 'bold', fontSize: 13, marginBottom: 10 }}>Today</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: 65, marginBottom: 10 }}
        >
          <DefaultList width={WINDOW_WIDTH} />
        </ScrollView>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: 65, marginBottom: 10 }}
        >
          <DefaultList width={WINDOW_WIDTH} />
        </ScrollView>
      </View >
    )
  }
}

const mapStateToProps = state => ({
  database: state.database
})

export default connect(mapStateToProps, { getCategories, insertCategories, insertTasks, getTasks })(index)