import {View, StyleSheet, TextInput, Pressable} from 'react-native'
import {useState, useEffect} from 'react'
import * as Font from 'expo-font';
import Svg, {Path}  from 'react-native-svg';

function SearchBar(props){

    const [pressed, changePress] = useState(false);
    const [text, changeText] = useState('');

    useEffect(() => {
        pressed || text != ''? props.setSearchVal(true): props.setSearchVal(false);
        props.setText(text);
    },[text,pressed])

    const [loaded] = Font.useFonts({
        black: require('./../assets/fonts/Nunito-Black.ttf'),
        reg: require('./../assets/fonts/Nunito-Regular.ttf'),
        italic: require('./../assets/fonts/Nunito-Italic.ttf')
    });

    if(!loaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.magContainer}>
                <Svg style={pressed == true || text != ''? [styles.magIcon,{opacity:0}]:styles.magIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <Path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </Svg>
            </View>
            <View style={styles.xContainer}>
                <Pressable onPress={() => {changeText('');}} style={styles.xButton}>
                    <Svg style={pressed != true? [styles.xIcon,{opacity:0}]:styles.xIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <Path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </Svg>
                </Pressable>
            </View>
            <TextInput
            style={styles.input}
            maxLength={30}
            autoComplete = {false}
            autoCorrect = {false}
            onFocus={()=>{changePress(true);}}
            onEndEditing={()=>{changePress(false)}}
            placeholderTextColor= {'#717171'}
            placeholder={pressed? '':"       Search friends & users"}
            onChangeText={(content) => {changeText(content);}}
            value={text}
            />
            {pressed? 
            <View style={styles.cancel}> 

            </View>
            :
            null
            }
        </View>
    );
}

export default SearchBar;

const styles = new StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 15,
        borderRadius: 48,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    input:{
        fontSize: 16,
        fontFamily: 'reg',
        marginHorizontal: 20,
        width: '75%',
        height: '70%' ,
        textAlign: 'center',
    },
    magContainer:{
        position: 'absolute',
        height:'100%',
        width:'100%',
        justifyContent:'center',
    },
    magIcon:{
        marginLeft:'22%',
        color:'#717171',
        width:'10%',
        height:'50%',
    },
    xContainer:{
        position: 'absolute',
        height:'100%',
        width:'100%',
        justifyContent:'center',
    },
    xButton:{
        marginLeft:'88%',
        width:'10%',
        height:'80%',
        paddingVertical: 9
    },
    xIcon:{
        color:'#717171',
    },
});