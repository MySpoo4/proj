import {useState, useEffect} from 'react';
import {StyleSheet, View, Text,Image,Pressable, Animated} from 'react-native';
import * as Font from 'expo-font';
import {IP_ADDRESS} from '@env'

if(IP_ADDRESS == null){
    console.log('error')
  }

const url = `http://${IP_ADDRESS}:5000/users/picture/`

function User(props){
    const [image, setImage] = useState(null);
    const animated = new Animated.Value(1);

    const fadeIn = () => {
        Animated.timing(animated, {
          toValue: 0.4,
          duration: 150,
          useNativeDriver: true,
        }).start();
      };
      const fadeOut = () => {
        Animated.timing(animated, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      };

    useEffect(() => {
        fetch(url + props.id)
            .then((response) => response.blob())
            .then((blob) => {
            setImage(URL.createObjectURL(blob));
            })
            .catch((error) => console.log(error));
    }, []);

    const [loaded] = Font.useFonts({
        black: require('./../assets/fonts/Nunito-Black.ttf'),
        reg: require('./../assets/fonts/Nunito-Regular.ttf'),
      });

    if(!loaded){
        return null;
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View style={{opacity: animated}}>
                <View style={container(props.height).container}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} src={image}/>
                    </View>
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{props.first} {props.last}</Text>
                        </View>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tag}>{props.tag}</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </Pressable>
    );
}

export default User;

const container = (height) => {
    return (StyleSheet.create({
        container: {
            marginHorizontal: '7%',
            flex: 1,
            flexDirection: 'row',
            height: height,
            marginBottom: 7,
        },
    }));
}


const styles = StyleSheet.create({
    imgContainer:{
        justifyContent: 'center',
        marginRight: 10,
    },
    nameContainer:{
        flex:1,
        justifyContent: 'center',
        marginTop: '5%'
    },
    tagContainer:{
        flex:1,
        justifyContent: 'center',
        marginBottom: '5%'
    },
    img:{
        height: '85%',
        minHeight: 55,
        aspectRatio: 1
    },
    name:{
        fontFamily: 'black',
        fontSize: 16,
    },
    tag:{
        color: '#717171',
        fontFamily: 'reg',
        fontSize: 16,
    },
});