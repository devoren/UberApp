import React from "react";

import RootReducer from "src/reducers";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "src/styles";
import { HomeScreen, MapScreen } from "./screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";

const App = () => {
	const Stack = createStackNavigator();

	return (
		<Provider store={RootReducer}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator
						screenOptions={{
							gestureEnabled: true,
							...TransitionPresets.SlideFromRightIOS,
						}}
					>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MapScreen"
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLOR.WHITE,
	},
});

export default App;
