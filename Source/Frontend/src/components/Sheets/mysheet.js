import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Image } from "react-native";
import { useTheme, Avatar } from "react-native-paper";

function MySheet(props) {
  const payload = props.payload;

  const theme = useTheme();

  return (
    <ActionSheet id={props.sheetId}>
      <View
        style={{
          backgroundColor: theme.colors.background2,
          alignItems: "center",
          borderRadius: 40,
        }}
      >
        <View
          style={{
            width: 80,
            height: 4,
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: theme.colors.sheetTop,
          }}
        ></View>

        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
          }}
          style={{ width: 70, height: 70, borderRadius: 20, marginTop: 32 }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 20,
            color: theme.colors.primaryText,
            marginTop: 20,
          }}
        >
          UI Design Lead
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Text
            style={{
              color: theme.colors.primaryText,
              fontWeight: "500",
              fontSize: 14,
              lineHeight: 14,
            }}
          >
            Spotify
          </Text>
          <View
            style={{
              width: 15,
              height: 0,
              borderWidth: 1.5,
              borderColor: theme.colors.primaryText,
              marginLeft: 7,
            }}
          />
          <Image
            source={require("../../shapes/Location.png")}
            style={{ width: 11.5, height: 13.7, marginLeft: 13.8 }}
            resizeMode={"contain"}
          />
          <Text
            style={{
              fontSize: 14,
              lineHeight: 14,
              fontWeight: "500",
              color: theme.colors.secondaryText,
              marginLeft: 8.3,
            }}
          >
            Toronto Canada
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Hour</Text>
          <Text>Full Time</Text>
          <Text>$1200/m</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Description</Text>
          <Text>Company</Text>
          <Text>Reviews</Text>
        </View>

        <Text style={{ alignSelf: "flex-start" }}>Qualifications</Text>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet("mysheet", MySheet);

export default MySheet;
