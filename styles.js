import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  sav: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  homeContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  homeTitleContainer: {
    left: "5%",
  },
  homeDateText: {
    color: "gray",
    fontSize: RFValue(20),
    marginTop: RFValue(10),
  },
  homeTitleText: {
    color: "#000000",
    fontSize: RFValue(25),
    marginTop: RFValue(10),
    fontStyle: "bold",
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    marginVertical: 20,
    alignSelf: "center",
  },
  dataScreenNavButton: {
    borderRadius: 50,
    borderColor: "#00000015",
    backgroundColor: "#00000015",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 0.2,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    width: "90%",
  },
  dataScreenNavButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#555555",
    marginHorizontal: 10,
  },
  bottomTabStyle: {
    backgroundColor: "#c1c7f7",
    borderRadius: 40,
    paddingTop: 20,
    marginBottom: 20,
    height: 84,
    width: "90%",
    left: "5%",
    alignSelf: "center",
    overflow: "hidden",
    position: "absolute",
  },
  icons: {},
  focusedBottomTabText: {
    fontSize: 20,
  },
  unfocusedBottomTabText: {},
  homeWeatherImage: {
    width: 100,
    height: 100,
    // position:"absolute",
    // right: 50
  },
  input: {
    marginVertical: 12,
    borderWidth: 3,
    borderColor: "#777777",
    borderRadius: 50,
    padding: 10,
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    borderColor: "dimgray",
    alignSelf: "center",
  },
  currentText: {
    color: "gray",
    fontSize: 40,
    alignSelf: "center",
    fontStyle: "italic",
    marginBottom: 5,
  },
  tempText: {
    color: "black",
    fontWeight: "bold",
    fontSize: RFValue(60),
    alignSelf: "center",
  },
  tempView: {
    width: RFValue(220),
    height: RFValue(220),
    backgroundColor: "white",
    borderColor: "black",
    // borderBottomColor: "grey",
    // borderWidth: 15,
    borderRadius: 1000,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 20,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignSelf: "center",
  },
  dataText: {
    color: "black",
    fontSize: 25,
    alignSelf: "center",
  },
  dataTextTitle: {
    color: "gray",
    fontSize: 15,
    alignSelf: "center",
  },
  dashboardBottomDataSeparator: {
    flex: 0.3,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
  usaColorButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 10,
  },
  usaColorButton: {
    flex: 1,
    height: 60,
    backgroundColor: "red",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  labelText: {
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
    fontSize: 20,
  },
  stateSelectButton: {
    backgroundColor: "#00000015",
    margin: 3,
    borderRadius: 5,
    padding: 5,
    paddingVertical: 20,
    flexGrow: 0.5,
    alignItems: "center",
    textAlign: "center",
  },
  stateSelectButtonText: {
    fontSize: 20,
    textAlign: "center",
  },
  disasterBlock: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#00000022",
    padding: 20,
    marginVertical: 10,
    width: "80%",
  },
  disasterBlockTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  disasterBlockDescription: {
    fontSize: 20,
  },
  barGraph: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  barGraphBar: {
    flex: 1,
    backgroundColor: "black",
    marginHorizontal: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  horizontalArrangement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionButtonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  optionButton: {
    marginHorizontal: 20,
    width: "80%",
    backgroundColor: "#f57e42",
    padding: 20,
    borderRadius: 200,
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 20,
  },
  optionButtonText: {
    fontSize: 25,
    color: "whitesmoke",
    fontWeight: "bold",
  },
  subOptionButton: {
    marginHorizontal: 20,
    width: "80%",
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  subOptionButtonText: {
    fontSize: 25,
    color: "#f57e42",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  optionTextInput: {
    marginHorizontal: 20,
    width: "80%",
    backgroundColor: "whitesmoke",
    borderColor: "dimgray",
    borderWidth: 4,
    padding: 20,
    borderRadius: 200,
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 20,
    fontSize: 20,
    color: "#f57e42",
    fontWeight: "bold",
  },
  errorText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "red",
    width: "100%",
    textAlign: "center",
  },
  subText: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  alertItem: {
    backgroundColor: "pink",
    padding: 15,
    paddingVertical: 8,
    borderRadius: 10,
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  alertText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "whitesmoke",
    flex: 0.8,
    textAlignVertical: "center",
    marginRight: 20,
  },
  alertButton: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#ffffff44",
  },
  alertButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "whitesmoke",
    textAlign: "center",
  },
  personItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#ffffff44",
    alignSelf: "center",
    marginVertical: 10,
  },
  workoutSet: {
    backgroundColor: "#00000011",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    padding: 5,
    paddingTop: 10,
    borderRadius: 18,
  },
  workoutSetTitle: {
    fontSize: RFValue(30),
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.7,
  },
  workoutSetSubtitle: {
    fontSize: RFValue(20),
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.7,
  },
  workoutSetGraph: {
    margin: 10,
    backgroundColor: "#00000011",
    padding: 10,
    borderRadius: 10,
    // height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  bigRepContainer: {
    marginTop: 50,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "#f57e42",
    width: 300,
    paddingTop: 30,
    alignSelf: "center"
  },
  bigRepText: {
    fontSize: 200,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 0,
    marginTop: -40,
    padding: 0,
    color: "#f57e42"
  },
  lastRepText: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 0,
    marginBottom: 0,
    alignSelf: "center",
    color: "#f57e42"
  }
});

export default styles;