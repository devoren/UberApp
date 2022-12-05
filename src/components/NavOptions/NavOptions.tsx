import React from "react";
import {
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLOR, FONT } from "src/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { State } from "src/reducers";
const data = [
	{
		id: "1",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "2",
		title: "Order a food",
		image: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const navigation = useNavigation() as any;
	const origin: undefined = useSelector(
		(state: State) => state.navigator.origin
	);

	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id}
			style={{
				marginTop: 70,
			}}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={{
						marginLeft: 16,
					}}
					onPress={() => navigation.navigate(item.screen)}
					disabled={origin}
				>
					<View style={[styles.container, { opacity: origin && 0.4 }]}>
						<Image
							style={{
								width: 120,
								height: 120,
								resizeMode: "contain",
							}}
							source={{ uri: item.image }}
						/>
						<Text style={styles.headline}>{item.title}</Text>
						<AntDesign
							name="arrowright"
							color="white"
							style={{
								backgroundColor: COLOR.BLACK,
								width: 32,
								borderRadius: 100,
								padding: 4,
								marginTop: 8,
							}}
							size={24}
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 14,
		paddingLeft: 20,
		paddingRight: 8,
		paddingBottom: 20,
		borderRadius: 10,
		backgroundColor: COLOR.LIGHT_GRAY[2],
	},
	headline: {
		color: COLOR.BLACK,
		marginTop: 2,
		fontSize: 18,
		lineHeight: 28,
		...FONT.BOLD,
	},
});

export default NavOptions;
