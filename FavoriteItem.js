import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { IconButton } from 'react-native-paper';

export default function FavoriteItem({image, name, price}) {

      return (
            <View style={styles.container}>
                <Image source={{uri: image}} 
                    style={styles.image}/>
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <IconButton 
                    style={{alignSelf: "center"}}
                    icon = "delete"
                    size={30}
                />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            flexDirection: 'row', 
            marginBottom: 3, 
            borderBottomWidth: 0.1, 
            borderBottomColor: "#841584"
        },
        image: {
            width: 120, 
            height: 120, 
            margin: 5
        },
        content: {
            flex: 1, 
            justifyContent: 'center', 
            marginLeft: 5
        },
        name: {
            fontSize: 18, 
            color: 'green', 
            marginBottom: 5
        },
        price: {
            fontSize: 16, 
            color: 'red'
        }
    });