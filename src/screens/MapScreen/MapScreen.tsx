import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavOptions } from "src/components/NavOptions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Map } from "src/components/Map";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { COLOR, FONT, SCALE, WINDOW } from "src/styles";
import NavigateCard from "src/components/NavigateCard/NavigateCard";
import RideOptionsCard from "src/components/RideOptionsCard/RideOptionsCard";

const MapScreen = () => {
	const Stack = createStackNavigator();

	return (
		<View style={styles.container}>
			<View style={{ height: WINDOW.HEIGHT / 2 }}>
				<Map />
			</View>
			<View style={{ height: WINDOW.HEIGHT / 2 }}>
				<Stack.Navigator
					screenOptions={{
						gestureEnabled: true,
						...TransitionPresets.SlideFromRightIOS,
					}}
				>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOR.WHITE,
	},
});

export default MapScreen;
