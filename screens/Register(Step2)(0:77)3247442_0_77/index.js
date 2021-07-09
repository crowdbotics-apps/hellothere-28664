import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_453} />
      <View style={styles.View_0_454}>
        <View style={styles.View_I0_454_0_70}>
          <Text style={styles.Text_I0_454_0_70}>Register</Text>
        </View>
      </View>
      <View style={styles.View_0_455}>
        <View style={styles.View_I0_455_0_72} />
        <View style={styles.View_I0_455_0_74}>
          <Text style={styles.Text_I0_455_0_74}>the_jane</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_456}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_78"))
        }
      >
        <View style={styles.View_I0_456_0_43} />
        <View style={styles.View_I0_456_0_46}>
          <Text style={styles.Text_I0_456_0_46}>sign up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_678}>
        <Text style={styles.Text_0_678}>
          By signing up, you agree to Photo’s Terms of Service and Privacy
          Policy.
        </Text>
      </View>
      <View style={styles.View_0_457}>
        <View style={styles.View_0_458} />
        <View style={styles.View_0_459}>
          <View style={styles.View_0_460} />
        </View>
        <View style={styles.View_0_461}>
          <View style={styles.View_0_462}>
            <View style={styles.View_0_463}>
              <View style={styles.View_0_464}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc6/5d3b/57bbab99ff4740d744eb32dd6c17106f"
                  }}
                  style={styles.ImageBackground_0_465}
                />
                <View style={styles.View_0_466} />
                <View style={styles.View_0_467} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e1/a02f/b0c70ffd352d2c1b86f610df15fbbcd5"
                }}
                style={styles.ImageBackground_0_468}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e8/df95/f15f5f6171d371391f16aa0c92fcc0dc"
                }}
                style={styles.ImageBackground_0_469}
              />
            </View>
          </View>
          <View style={styles.View_0_470}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da38/e3b1/95cb9164b3a68a04f5818fd70460026c"
              }}
              style={styles.ImageBackground_0_471}
            />
          </View>
          <View style={styles.View_0_478}>
            <View style={styles.View_0_479} />
            <View style={styles.View_0_480}>
              <Text style={styles.Text_0_480}>return</Text>
            </View>
          </View>
          <View style={styles.View_0_481}>
            <View style={styles.View_0_482} />
            <View style={styles.View_0_483}>
              <Text style={styles.Text_0_483}>space</Text>
            </View>
          </View>
          <View style={styles.View_0_484}>
            <View style={styles.View_0_485}>
              <View style={styles.View_0_486}>
                <View style={styles.View_0_487} />
                <View style={styles.View_0_488}>
                  <Text style={styles.Text_0_488}>123</Text>
                </View>
              </View>
              <View style={styles.View_0_489}>
                <View style={styles.View_0_490} />
                <View style={styles.View_0_491}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1af/ca10/64125bc406056e97f19092d33319838c"
                    }}
                    style={styles.ImageBackground_0_492}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fd/6ec4/cf7b22ebb0116bd189e806bab98e9444"
                    }}
                    style={styles.ImageBackground_0_493}
                  />
                </View>
              </View>
              <View style={styles.View_0_496}>
                <View style={styles.View_0_497} />
                <View style={styles.View_0_498}>
                  <View style={styles.View_0_499}>
                    <View style={styles.View_0_500} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e0/f5a6/202149341753d2c4e3a3fc16d3534077"
                      }}
                      style={styles.ImageBackground_0_501}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_0_502}>
                <View style={styles.View_0_503} />
                <View style={styles.View_0_504}>
                  <Text style={styles.Text_0_504}>m</Text>
                </View>
              </View>
              <View style={styles.View_0_505}>
                <View style={styles.View_0_506} />
                <View style={styles.View_0_507}>
                  <Text style={styles.Text_0_507}>n</Text>
                </View>
              </View>
              <View style={styles.View_0_508}>
                <View style={styles.View_0_509} />
                <View style={styles.View_0_510}>
                  <Text style={styles.Text_0_510}>b</Text>
                </View>
              </View>
              <View style={styles.View_0_511}>
                <View style={styles.View_0_512} />
                <View style={styles.View_0_513}>
                  <Text style={styles.Text_0_513}>v</Text>
                </View>
              </View>
              <View style={styles.View_0_514}>
                <View style={styles.View_0_515} />
                <View style={styles.View_0_516}>
                  <Text style={styles.Text_0_516}>c</Text>
                </View>
              </View>
              <View style={styles.View_0_517}>
                <View style={styles.View_0_518} />
                <View style={styles.View_0_519}>
                  <Text style={styles.Text_0_519}>x</Text>
                </View>
              </View>
              <View style={styles.View_0_520}>
                <View style={styles.View_0_521} />
                <View style={styles.View_0_522}>
                  <Text style={styles.Text_0_522}>z</Text>
                </View>
              </View>
              <View style={styles.View_0_523}>
                <View style={styles.View_0_524} />
                <View style={styles.View_0_525}>
                  <Text style={styles.Text_0_525}>l</Text>
                </View>
              </View>
              <View style={styles.View_0_526}>
                <View style={styles.View_0_527} />
                <View style={styles.View_0_528}>
                  <Text style={styles.Text_0_528}>k</Text>
                </View>
              </View>
              <View style={styles.View_0_529}>
                <View style={styles.View_0_530} />
                <View style={styles.View_0_531}>
                  <Text style={styles.Text_0_531}>j</Text>
                </View>
              </View>
              <View style={styles.View_0_532}>
                <View style={styles.View_0_533} />
                <View style={styles.View_0_534}>
                  <Text style={styles.Text_0_534}>h</Text>
                </View>
              </View>
              <View style={styles.View_0_535}>
                <View style={styles.View_0_536} />
                <View style={styles.View_0_537}>
                  <Text style={styles.Text_0_537}>g</Text>
                </View>
              </View>
              <View style={styles.View_0_538}>
                <View style={styles.View_0_539} />
                <View style={styles.View_0_540}>
                  <Text style={styles.Text_0_540}>f</Text>
                </View>
              </View>
              <View style={styles.View_0_541}>
                <View style={styles.View_0_542} />
                <View style={styles.View_0_543}>
                  <Text style={styles.Text_0_543}>d</Text>
                </View>
              </View>
              <View style={styles.View_0_544}>
                <View style={styles.View_0_545} />
                <View style={styles.View_0_546}>
                  <Text style={styles.Text_0_546}>s</Text>
                </View>
              </View>
              <View style={styles.View_0_547}>
                <View style={styles.View_0_548} />
                <View style={styles.View_0_549}>
                  <Text style={styles.Text_0_549}>a</Text>
                </View>
              </View>
              <View style={styles.View_0_550}>
                <View style={styles.View_0_551} />
                <View style={styles.View_0_552}>
                  <Text style={styles.Text_0_552}>p</Text>
                </View>
              </View>
              <View style={styles.View_0_553}>
                <View style={styles.View_0_554} />
                <View style={styles.View_0_555}>
                  <Text style={styles.Text_0_555}>o</Text>
                </View>
              </View>
              <View style={styles.View_0_556}>
                <View style={styles.View_0_557} />
                <View style={styles.View_0_558}>
                  <Text style={styles.Text_0_558}>i</Text>
                </View>
              </View>
              <View style={styles.View_0_559}>
                <View style={styles.View_0_560} />
                <View style={styles.View_0_561}>
                  <Text style={styles.Text_0_561}>u</Text>
                </View>
              </View>
              <View style={styles.View_0_562}>
                <View style={styles.View_0_563} />
                <View style={styles.View_0_564}>
                  <Text style={styles.Text_0_564}>y</Text>
                </View>
              </View>
              <View style={styles.View_0_565}>
                <View style={styles.View_0_566} />
                <View style={styles.View_0_567}>
                  <Text style={styles.Text_0_567}>t</Text>
                </View>
              </View>
              <View style={styles.View_0_568}>
                <View style={styles.View_0_569} />
                <View style={styles.View_0_570}>
                  <Text style={styles.Text_0_570}>r</Text>
                </View>
              </View>
              <View style={styles.View_0_571}>
                <View style={styles.View_0_572} />
                <View style={styles.View_0_573}>
                  <Text style={styles.Text_0_573}>e</Text>
                </View>
              </View>
              <View style={styles.View_0_574}>
                <View style={styles.View_0_575} />
                <View style={styles.View_0_576}>
                  <Text style={styles.Text_0_576}>w</Text>
                </View>
              </View>
              <View style={styles.View_0_577}>
                <View style={styles.View_0_578} />
                <View style={styles.View_0_579}>
                  <Text style={styles.Text_0_579}>q</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e2b/3b79/3b131daa6e5004a91fff8dfd86246a7b"
        }}
        style={styles.TouchableOpacity_0_765}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_47"))
        }
      />
      <View style={styles.View_0_891}>
        <View style={styles.View_I0_891_0_49}>
          <View style={styles.View_I0_891_0_51}>
            <View style={styles.View_I0_891_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I0_891_0_53}
            />
            <View style={styles.View_I0_891_0_54} />
          </View>
          <View style={styles.View_I0_891_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I0_891_0_56}
            />
          </View>
          <View style={styles.View_I0_891_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I0_891_0_61}
            />
          </View>
        </View>
        <View style={styles.View_I0_891_0_66}>
          <View style={styles.View_I0_891_0_67}>
            <Text style={styles.Text_I0_891_0_67}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_453: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_454: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_454_0_70: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I0_454_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_0_455: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_455_0_72: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_I0_455_0_74: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_I0_455_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_456: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("33.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_456_0_43: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_I0_456_0_46: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.2099609375%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_I0_456_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_678: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("44.80874316939891%"),
    justifyContent: "flex-start"
  },
  Text_0_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_457: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_458: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 211, 217, 1)",
    opacity: 0.8999999761581421
  },
  View_0_459: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_460: {
    width: wp("36%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_461: {
    width: wp("100%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_462: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("32.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_463: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_464: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.9581056032024444%"),
    minHeight: hp("1.9581056032024444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4572060173326378%")
  },
  ImageBackground_0_465: {
    width: wp("4%"),
    height: hp("1.4116575157707505%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_466: {
    width: wp("0.4444444338480631%"),
    height: hp("0.7741347688143371%"),
    top: hp("1.1839819736168096%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.77779947916666%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_467: {
    width: wp("2.577777862548828%"),
    height: hp("0.22768669766806515%"),
    top: hp("1.7304300610485086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_0_468: {
    width: wp("1.5111110687255858%"),
    height: hp("2.003643030677337%"),
    top: hp("0.2276978206113398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2444661458333428%")
  },
  ImageBackground_0_469: {
    width: wp("2.4%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_0_470: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_471: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_478: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_479: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_480: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_481: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_482: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_483: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_484: {
    width: wp("100%"),
    height: hp("28.96174863387978%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_485: {
    width: wp("98.4%"),
    height: hp("27.86885245901639%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_0_486: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_487: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_488: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_0_488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_489: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_490: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_491: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_0_492: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_493: {
    width: wp("1.900779596964518%"),
    height: hp("0.9737601045702324%"),
    top: hp("0.6968680626707595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7914062500000085%")
  },
  View_0_496: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_497: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_498: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0216796875%"),
    top: hp("1.6848704853995997%")
  },
  View_0_499: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_500: {
    width: wp("2.577777862548828%"),
    height: hp("1.0018215153386685%"),
    top: hp("1.3507113430669335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3317057291666665%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 1.6666666269302368,
    borderBottomRightRadius: 1.6666666269302368
  },
  ImageBackground_0_501: {
    width: wp("5.955555725097656%"),
    height: hp("1.5938069651035662%"),
    top: hp("-0.06096845116120164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.35716145833333357%")
  },
  View_0_502: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_503: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_504: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_506: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_507: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_508: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.20000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_509: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_510: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_511: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_512: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_513: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_514: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_515: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_516: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_517: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_518: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_519: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_519: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_520: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_521: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_522: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_523: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_524: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_525: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_525: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_526: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_527: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_528: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_529: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_530: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_531: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_531: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_532: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_533: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_534: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_534: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_535: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_536: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_537: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_537: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_538: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_539: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_540: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_541: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_542: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_543: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_544: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_545: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_546: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_546: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_547: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_548: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_549: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_549: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_550: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_551: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_552: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_552: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_553: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_554: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_555: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_556: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_557: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_558: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_558: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_559: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_560: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_561: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_562: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_563: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_564: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_564: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_565: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_566: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_567: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_568: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_569: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_570: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_570: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_571: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_572: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_573: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_574: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_575: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_576: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_577: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_578: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_579: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_765: {
    width: wp("3.255228678385417%"),
    minWidth: wp("3.255228678385417%"),
    height: hp("1.5510325874787212%"),
    minHeight: hp("1.5510325874787212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.19672131147541%")
  },
  View_0_891: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_49: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_51: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666683%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_52: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.045542899376707524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_891_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I0_891_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187669430925544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_891_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_891_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215492123463095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%")
  },
  View_I0_891_0_60: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_891_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09106912248121546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17779947916666572%")
  },
  View_I0_891_0_66: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08886718749999911%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I0_891_0_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
