import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

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
                        borderColor: item.active ? 'black' : 'none',
                        borderBottomWidth: item.active ? 4 : 0,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginHorizontal: 10
                    }}

                    onPress={(e) => handleMenuChange(item)}
                >
                    <Text style={{
                        fontWeight: 'bold'
                    }}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}