import React, { Component, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Searchbar } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import CheckBox from 'react-native-just-checkbox'
import { useLinkProps, useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AddButton from '../components/AddButton';
import { FAB } from 'react-native-paper';
import DialogInput from 'react-native-dialog-input';
import * as Random from 'expo-random';

const Tab = createBottomTabNavigator();



/*const Item = ({ image_front_thumb_url, product_name, nutriscore_grade }) => {
  const info = { image_front_thumb_url, product_name, nutriscore_grade };
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          style={styles.checkbox}
          checkBoxSize={40}
          checkColor='darkturquoise'
          squareCheckBox={true}
          onToggle={onToggle}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.description}

      ><TouchableOpacity style={styles.description}
        onPress={() => { navigation.navigate("MoreInfoScreen", info) }}>
          <View style={styles.description}>
            <Text style={styles.product_name}>{info.product_name}</Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  );

};*/

//console.log(props.carts);

const Item = ({item}) => (
<View style={[styles.item]}>
  <Text style={styles.title}>{item.title}</Text>
</View>
);


const ListArticleScreen = (props) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  
  /*const renderItem = ({ item }) => (
    <Item image_front_thumb_url={item.image_front_thumb_url}
      nutriscore_grade={item.nutriscore_grade} product_name={item.product_name} />

  );*/

  const renderItem = ({ item }) => {
    // console.log(props);
    //const backgroundColor = item.id === selectedId ? "white" : "white";

    return (
      <Item
        item={item}
      />
    );
  };
  
  const renderHiddenItem = ({ item }) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {/*this.props.deleteItemCart(item)*/}}>
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function findIndex(id)
  {
    //console.log(props.carts);
    var idx = 0;
    for (let i=0; i < props.carts.length; i++)
    {
      //console.log(props.carts[i][0]);
      if (props.carts[i][0] == id)
      {
        idx = i; 
      }
    }
    return idx;
  }

  //console.log(props.route.params.id_list);
  //console.log(findIndex(props.route.params.id_list));

    //console.log(this.props.lists.filter(x => x.id == this.props.route.params.id_list)[0].cart)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.carts[findIndex(props.route.params.id_list)][1]}//props.carts[findIndex(props.route.params.id_list)][1]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          //extraData={selectedId}

        />
        {/*<SwipeListView style={styles.list}
          data={props.cart}//this.props.lists.filter(x => x.id == this.props.route.params.id_list)[0].cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-75}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        // onRowDidOpen={onRowDidOpen}
        />*/}
        {/*<AddButton data={this.props} />*/}

        <DialogInput isDialogVisible={isDialogVisible}
          title={"Nouvelle Article"}
          message={"Entrer nom article"}
          hintInput={"Name"}
          submitInput={(inputText) => {
            //console.log(props.cart);
            props.addToCart({
              id: Random.getRandomBytes(2).toString(),
              title: inputText,
              //cart: []
            },props.route.params.id_list) && setIsDialogVisible(false);
            //console.log(props.carts);
          }}
          closeDialog={() => setIsDialogVisible(false)}>
        </DialogInput>

        <FAB
          style={styles.fab}
          // small
          icon="plus"
          onPress={() => setIsDialogVisible(true)}
          color='white'
        />

      </SafeAreaView>
    )
  }



const styles = StyleSheet.create({
  list: {
  },
  container: {
    flex: 1,
    // paddingBottom: 20

    //marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    //backgroundColor: 'white', 
    //justifyContent: 'space-around',
    // marginVertical: 8,
    //marginHorizontal: 16,
    borderWidth: 0.7,
    flexDirection: 'row',
  },
  image_front_thumb_url: {
    height: 90,
    width: 35,
    // borderRadius: 120 / 2

  },
  product_name: {
    // flex: 10,
    fontSize: 20,
    //flexDirection: 'row',
    //alignItems: 'center',
    // justifyContent: 'center',

  },
  checkbox: {
    //flex:2,
    alignSelf: "center",
    width: 50

  },
  checkBoxContainer: {
    alignSelf: "center",

  },
  description: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  nutriscore_grade: {
    flex: 1,
    fontSize: 20,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  fab: {
    right: 0,
    bottom: 2,
    backgroundColor: 'tomato',
    marginRight: '43%',
    marginLeft: '43.3%',
    justifyContent: 'center',
    position: 'absolute',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ListArticleScreen)


function mapStateToProps(state) {
  return {
    carts: state.cartReducer.carts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToLists: (newItem) => dispatch({
      type: 'ADD_TO_LISTS',
      payload: newItem
    }),
    /*addToCart: (newItem, id_list) => dispatch({
      type: 'ADD_TO_CART',
      payload: { newItem, id_list },
      //id_list: id_list
    }),*/
    addToCart: (newItem,id_list) => dispatch({
      type: 'ADD_TO_CART',
      payload: newItem,
      id_list: id_list
    }),


  }
}