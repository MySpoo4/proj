import {useState, useRef} from 'react';
import {View, StyleSheet, Text, Pressable, Animated} from 'react-native';
import Svg, {Path}  from 'react-native-svg';


function Navbar() {

    const [category, setCategory] = useState('Home');
    const home = useRef(new Animated.Value(1)).current
    const friends = useRef(new Animated.Value(1)).current
    const create = useRef(new Animated.Value(1)).current
    const lists = useRef(new Animated.Value(1)).current
    const profile = useRef(new Animated.Value(1)).current


    const fadeIn = (cate) => {
        Animated.timing(cate, {
            toValue: 0.2,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = (cate) => {
        Animated.timing(cate, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

      return (
        <View style={styles.bar}>
            <Pressable style={styles.category} onPressIn={() => {fadeIn(home)}} onPressOut={() => {fadeOut(home)}} onPress={() => setCategory("Home")}>
                <Animated.View style={{opacity:home}}>
                    <Svg style={category=='Home'? styles.pressedIcon:styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <Path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </Svg>
                    <Text style={category=='Home'? styles.pressedText:styles.text}>Home</Text>
                </Animated.View>
            </Pressable>

            <Pressable style={styles.category} onPressIn={() => {fadeIn(friends)}} onPressOut={() => {fadeOut(friends)}} onPress={() => setCategory("Friends")}>
                <Animated.View style={{opacity:friends}}>
                    <Svg style={category=='Friends'? styles.pressedIcon:styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <Path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </Svg>
                    <Text style={category=='Friends'? styles.pressedText:styles.text}>Friends</Text>
                </Animated.View>
            </Pressable>

            <Pressable style={styles.category} onPressIn={() => {fadeIn(create)}} onPressOut={() => {fadeOut(create)}} onPress={() => setCategory("Create")}>
                <Animated.View style={{opacity:create}}>
                    <Svg style={category=='Create'? styles.pressedIcon:styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </Svg>
                    <Text style={category=='Create'? styles.pressedText:styles.text}>Create</Text>
                </Animated.View>
            </Pressable>

            <Pressable style={styles.category} onPressIn={() => {fadeIn(lists)}} onPressOut={() => {fadeOut(lists)}} onPress={() => setCategory("Lists")}>
                <Animated.View style={{opacity:lists}}>
                    <Svg style={category=='Lists'? styles.pressedIcon:styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <Path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </Svg>
                    <Text style={category=='Lists'? styles.pressedText:styles.text}>Lists</Text>
                </Animated.View>
            </Pressable>

            <Pressable style={styles.category} onPressIn={() => {fadeIn(profile)}} onPressOut={() => {fadeOut(profile)}} onPress={() => setCategory("Profile")}>
                <Animated.View style={{opacity:profile}}>
                    <Svg style={category=='Profile'? styles.pressedIcon:styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </Svg>

                    <Text style={category=='Profile'? styles.pressedText:styles.text}>Profile</Text>
                </Animated.View>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
        height: '100%',
    },
    category:{
        flex: 1,
        padding: 10,
        height: '100%',
    },
    text: {
        textAlign: 'center',
        color: 'gray',
        fontWeight: '500'
    },
    icon:{
        height: '50%',
        color: 'gray',
        marginBottom: 3,
    },
    pressedIcon:{
        height: '50%',
        color: 'red',
        marginBottom: 3,
    },
    pressedText:{
        textAlign: 'center',
        color: 'red',
        fontWeight: '500'
    }
});

export default Navbar;