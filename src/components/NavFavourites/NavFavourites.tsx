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
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR, FONT } from "src/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { State } from "src/reducers";
const data = [
	{
		id: "1",
		icon: "home",
		location: "Home",
		destination: "Code Street, London, UK",
	},
	{
		id: "2",
		icon: "briefcase",
		location: "Work",
		destination: "London Eye, London, UK",
	},
];

const NavFavourites: React.FC<any> = ({ route }) => {
	const navigation = useNavigation() as any;
	const origin: undefined = useSelector(
		(state: State) => state.navigator.origin
	);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={[
						styles.container,
						{
							marginLeft: 16,
							flexDirection: "row",
						},
					]}
					// onPress={() => navigation.navigate(route)}
					disabled={origin}
				>
					<Ionicons
						name={item.icon}
						color="white"
						style={{
							backgroundColor: COLOR.LIGHT_GRAY[1],
							width: 40,
							borderRadius: 100,
							padding: 8,
							marginRight: 16,
						}}
						size={24}
					/>
					<View>
						<Text style={styles.headline}>{item.location}</Text>
						<Text style={{ color: "rgb(107, 114 ,128)" }}>
							{item.destination}
						</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
	},
	headline: {
		color: COLOR.BLACK,
		fontSize: 18,
		lineHeight: 28,
		...FONT.BOLD,
	},
});

export default NavFavourites;
