const React = require('react');
const {Component, } = React;
const {View, StyleSheet, } = require('react-native');

const StaticContainer = require('./StaticContainer');

const SceneComponent = (Props) => {
  const {shouldUpdated, ...props, } = Props;
  return <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
  </View>;
};

module.exports = SceneComponent;
