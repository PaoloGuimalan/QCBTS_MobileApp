import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const MainMap = () => {
  return (
    <View style={mainstyles.mainview}>
        <MapView
            onRegionChange={function(){return;}}
            style={mainstyles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    </View>
  )
}

const mainstyles = StyleSheet.create({
    mainview:{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: "100%",
        height: "100%"
    }
})

export default MainMap