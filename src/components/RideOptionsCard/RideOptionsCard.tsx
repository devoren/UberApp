import React, { useState } from "react";
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { NavOptions } from "src/components/NavOptions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { COLOR, FONT, SCALE, WINDOW } from "src/styles";
import { useSelector } from "react-redux";
import { State } from "src/reducers";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";

const data = [
	{
		id: "Uber-X-1",
		title: "UberX",
		multiplier: 1,
		image: "https://links.papareact.com/3pn",
	},
	{
		id: "Uber-XL-2",
		title: "Uber XL",
		multiplier: 1.2,
		image: "https://links.papareact.com/5w8",
	},
	{
		id: "Uber-LUX-3",
		title: "Uber LUX",
		multiplier: 1.75,
		image: "https://links.papareact.com/7pf",
	},
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard: React.FC<any> = ({ navigation }) => {
	const origin = useSelector((state: State) => state.navigator.origin);
	// console.log(origin);
	const [selected, setSelected] = useState<any>(null);
	const travelTimeInformation = useSelector(
		(state: State) => state.navigator.travelTimeInformation
	);
	return (
		<SafeAreaView
			style={{
				backgroundColor: COLOR.WHITE,
				flexGrow: 1,
			}}
		>
			<View>
				<TouchableOpacity
					style={{
						position: "absolute",
						top: 14,
						left: 20,
						padding: 12,
						borderRadius: 36,
						width: 40,
						zIndex: 99,
						// backgroundColor: "red",
					}}
					onPress={() => navigation.goBack()}
				>
					<FontAwesome name="chevron-left" size={16} color={COLOR.BLACK} />
				</TouchableOpacity>
				<Text
					style={{
						color: COLOR.BLACK,
						textAlign: "center",
						paddingVertical: 20,
						fontSize: 20,
						lineHeight: 28,
					}}
				>
					Select a Ride - {travelTimeInformation?.distance?.text}
				</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => `id-${item.id}`}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 44,
							backgroundColor:
								item.id === selected?.id ? COLOR.LIGHT_GRAY[2] : undefined,
						}}
						onPress={() => setSelected(item)}
					>
						<Image
							style={{
								width: 80,
								height: 80,
								resizeMode: "contain",
							}}
							source={{ uri: item.image }}
						/>
						<View style={{ marginLeft: -24 }}>
							<Text
								style={{
									color: COLOR.BLACK,
									fontSize: 20,
									lineHeight: 28,
									...FONT.BOLD,
								}}
							>
								{item.title}
							</Text>
							<Text
								style={{
									color: COLOR.BLACK,
								}}
							>
								Travel time - {travelTimeInformation?.duration?.text}
							</Text>
						</View>
						<Text
							style={{
								color: COLOR.BLACK,
								fontSize: 20,
								lineHeight: 28,
							}}
						>
							{new Intl.NumberFormat("en-gb", {
								style: "currency",
								currency: "KZT",
							}).format(
								(travelTimeInformation?.duration.value *
									SURGE_CHARGE_RATE *
									item.multiplier) /
									100
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<View
				style={{
					paddingHorizontal: SCALE.XL,
					marginBottom: 30,
					height: 50,
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: !selected ? COLOR.LIGHT_GRAY[1] : COLOR.BLACK,
						padding: 8,
						borderRadius: SCALE.XS,
						// opacity: !selected ? 0.5 : 1,
					}}
					disabled={!selected}
				>
					<Text
						style={{
							color: COLOR.WHITE,
							fontSize: 20,
							lineHeight: 28,
							textAlign: "center",
						}}
					>
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;
