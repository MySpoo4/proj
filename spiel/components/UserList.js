import {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions,FlatList} from 'react-native';
import User from './User';

const url = "http://192.168.1.4:5000/users/";
function UserList(props) {
  const { height, width } = Dimensions.get('window');
    const [users,setUsers] = useState([]);

    var end = '';
    if(props.text.trim() !=''){
      end = `search/${props.text.trim()}`
    }
    useEffect(() => {
      fetch(url + end)
          .then(response => response.json())
          .then(json => {
            setUsers(json);
          })
          .catch(error => {
            console.log(error);
          });
    },[props.text])

      return (
        <View style={styles.container}>
          <FlatList 
          showsVerticalScrollIndicator = {false}
          contentContainerStyle = {{flexGrow: 1,}}
          data={users} 
          renderItem={({item}) => {
            return(
              <User
                id = {item.id}
                tag={item.user_tag}
                first={item.first_name}
                last={item.last_name}
                height={height *0.65 / 8}
            />)
          }}
          />
        
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

});

export default UserList;
