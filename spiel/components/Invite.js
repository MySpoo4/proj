import {View,StyleSheet,Pressable,Text, Animated} from 'react-native'
import Svg, {Path}  from 'react-native-svg';
import * as Font from 'expo-font';

function Invite(){
    const [loaded] = Font.useFonts({
        black: require('./../assets/fonts/Nunito-Black.ttf'),
        reg: require('./../assets/fonts/Nunito-Regular.ttf'),
        italic: require('./../assets/fonts/Nunito-Italic.ttf')
    });

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

    if(!loaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Invite Friends
                    </Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        <Text style={{fontFamily: 'italic',}}>
                            Spiel {''}
                        </Text>
                            is better with your closest friends.
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <Animated.View style={[{opacity:animated},styles.animatedContainer]}>
                    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} style={styles.iconContainer}>
                            <Svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <Path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </Svg>
                    </Pressable>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    container:{
        height: '80%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 24,
        marginBottom: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    left:{
        flex: 2,
    },
    right:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer:{
        flex: 5,
        justifyContent: 'center',
    },
    descriptionContainer:{
        flex: 6,
        flexWrap: 'wrap',
        flexDirection:'row'
    },
    title:{
        fontSize: 20,
        fontFamily: 'black',
        marginLeft: 16,
        marginTop: 8
    },
    description:{
        flex: 1,
        fontSize: 16,
        fontFamily: 'reg',
        marginLeft: 16,
        marginRight: 16,
        color: '#717171'

    },
    iconContainer:{
        borderWidth: 1,
        borderColor: '#DDDDDD',
        height: '55%',
        aspectRatio: 1,
        borderRadius: 999,
        justifyContent: 'center'
    },
    icon:{
        height: '70%',
        color: 'black',
        marginBottom: 3,
    },
    animatedContainer:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Invite