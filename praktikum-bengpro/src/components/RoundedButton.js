import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {fontSizes, paddingSizes} from '../utils/sizes'

export const RoundedButton =({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles(size).radius, style]}>
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )

}; 
const styles = (size) => StyleSheet.create({
  radius : {
    borderRadius : size /2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  text : {color :'#fff',  fontSize: size/3},
})