import { AppRegistry, LogBox } from "react-native";

import App from "./src/App";
import { name as appName } from "app.json";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
	"VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);
LogBox.ignoreLogs(["Require ..."]);
LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
AppRegistry.registerComponent(appName, () => App);
