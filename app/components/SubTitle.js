import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubTitle = ({ subtitle }) => (
  <View style={styles.subTitleContainer}>
    <Text style={styles.subTitleText}>{subtitle.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  subTitleContainer: {
    marginTop: 40
  },
  subTitleText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  }
});

export default SubTitle;
