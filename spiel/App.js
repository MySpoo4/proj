import { StyleSheet, View, Animated} from 'react-native';
import {useState, useRef} from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Invite from './components/Invite';
import SearchBar from './components/SearchBar';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [search,setSearch] = useState(false);
  const [text,setText] = useState('');
  const ycor = useRef(new Animated.ValueXY({x:0,y:500})).current;

  function moveUp(){
    Animated.timing(ycor, {
        toValue: {x:0,y:0},
        duration: 300,
        useNativeDriver: true,
    }).start()
  };

  !search ? ycor.setValue({x:0,y:500}):moveUp()
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      { !search?
        <View style={styles.innerContainer}>
          <View style={styles.searchBarContainer}>
            <SearchBar setText={setText} setSearchVal={setSearch}/>
          </View>
          <View style={styles.inviteContainer}>
            <Invite/>
          </View>
          <View style={styles.userlist}>
            <UserList text={text}/>
          </View>
          <View style={styles.navbar}><Navbar/></View>
        </View>
        :
        <View style={styles.innerContainer}>
          <View style={styles.searchBarContainer}>
            <SearchBar setText={setText} setSearchVal={setSearch}/>
          </View>
            <View style={styles.searchList}>
              <Animated.View style={{transform: ycor.getTranslateTransform()}}>
                <UserList text={text}/>
              </Animated.View>
            </View>
          <View style={styles.navbar}><Navbar/></View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flex:5,
    width: '100%',
    height: '100%',
  },
  userlist:{
    flex:30,
    width: '100%',
    height: '100%',
  },
  searchList:{
    flex:37,
    width: '100%',
    height: '100%',
    marginTop: 15,
  },
  searchBarContainer:{
    flex:7, 
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  inviteContainer:{
    flex:8, 
    width: '100%',
  }
});
