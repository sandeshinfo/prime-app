import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomTabComponent({ menu, handleMenuChange }) {





    return (
        <View style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
        }}>
            {menu.map(item => (
                <TouchableOpacity
                    key={item.id}
                    style={{
                        borderColor: item.active ? 'white' : 'none',
                        borderBottomWidth: item.active ? 4 : 0,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginHorizontal: 10
                    }}

                    onPress={(e) => handleMenuChange(item)}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}