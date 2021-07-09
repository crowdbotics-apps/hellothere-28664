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
      <View style={styles.View_0_48} />
      <View style={styles.View_0_71}>
        <View style={styles.View_0_70}>
          <Text style={styles.Text_0_70}>Register</Text>
        </View>
      </View>
      <View style={styles.View_0_73}>
        <View style={styles.View_0_72} />
        <View style={styles.View_0_74}>
          <Text style={styles.Text_0_74}>jane@example.com</Text>
        </View>
      </View>
      <View style={styles.View_0_75}>
        <View style={styles.View_I0_75_0_72} />
        <View style={styles.View_I0_75_0_74}>
          <Text style={styles.Text_I0_75_0_74}>••••••••••••</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_0_76}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_77"))
        }
      >
        <View style={styles.View_I0_76_0_43} />
        <View style={styles.View_I0_76_0_46}>
          <Text style={styles.Text_I0_76_0_46}>next</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_0_128}>
        <View style={styles.View_0_202} />
        <View style={styles.View_0_203}>
          <View style={styles.View_0_204} />
        </View>
        <View style={styles.View_0_205}>
          <View style={styles.View_0_206}>
            <View style={styles.View_0_207}>
              <View style={styles.View_0_208}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc6/5d3b/57bbab99ff4740d744eb32dd6c17106f"
                  }}
                  style={styles.ImageBackground_0_209}
                />
                <View style={styles.View_0_210} />
                <View style={styles.View_0_211} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6e1/a02f/b0c70ffd352d2c1b86f610df15fbbcd5"
                }}
                style={styles.ImageBackground_0_212}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e8/df95/f15f5f6171d371391f16aa0c92fcc0dc"
                }}
                style={styles.ImageBackground_0_213}
              />
            </View>
          </View>
          <View style={styles.View_0_214}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da38/e3b1/95cb9164b3a68a04f5818fd70460026c"
              }}
              style={styles.ImageBackground_0_215}
            />
          </View>
          <View style={styles.View_0_222}>
            <View style={styles.View_0_223} />
            <View style={styles.View_0_224}>
              <Text style={styles.Text_0_224}>return</Text>
            </View>
          </View>
          <View style={styles.View_0_225}>
            <View style={styles.View_0_226} />
            <View style={styles.View_0_227}>
              <Text style={styles.Text_0_227}>space</Text>
            </View>
          </View>
          <View style={styles.View_0_228}>
            <View style={styles.View_0_229}>
              <View style={styles.View_0_230}>
                <View style={styles.View_0_231} />
                <View style={styles.View_0_232}>
                  <Text style={styles.Text_0_232}>123</Text>
                </View>
              </View>
              <View style={styles.View_0_233}>
                <View style={styles.View_0_234} />
                <View style={styles.View_0_235}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1af/ca10/64125bc406056e97f19092d33319838c"
                    }}
                    style={styles.ImageBackground_0_236}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fd/6ec4/cf7b22ebb0116bd189e806bab98e9444"
                    }}
                    style={styles.ImageBackground_0_237}
                  />
                </View>
              </View>
              <View style={styles.View_0_240}>
                <View style={styles.View_0_241} />
                <View style={styles.View_0_242}>
                  <View style={styles.View_0_243}>
                    <View style={styles.View_0_244} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04e0/f5a6/202149341753d2c4e3a3fc16d3534077"
                      }}
                      style={styles.ImageBackground_0_245}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_0_246}>
                <View style={styles.View_0_247} />
                <View style={styles.View_0_248}>
                  <Text style={styles.Text_0_248}>m</Text>
                </View>
              </View>
              <View style={styles.View_0_249}>
                <View style={styles.View_0_250} />
                <View style={styles.View_0_251}>
                  <Text style={styles.Text_0_251}>n</Text>
                </View>
              </View>
              <View style={styles.View_0_252}>
                <View style={styles.View_0_253} />
                <View style={styles.View_0_254}>
                  <Text style={styles.Text_0_254}>b</Text>
                </View>
              </View>
              <View style={styles.View_0_255}>
                <View style={styles.View_0_256} />
                <View style={styles.View_0_257}>
                  <Text style={styles.Text_0_257}>v</Text>
                </View>
              </View>
              <View style={styles.View_0_258}>
                <View style={styles.View_0_259} />
                <View style={styles.View_0_260}>
                  <Text style={styles.Text_0_260}>c</Text>
                </View>
              </View>
              <View style={styles.View_0_261}>
                <View style={styles.View_0_262} />
                <View style={styles.View_0_263}>
                  <Text style={styles.Text_0_263}>x</Text>
                </View>
              </View>
              <View style={styles.View_0_264}>
                <View style={styles.View_0_265} />
                <View style={styles.View_0_266}>
                  <Text style={styles.Text_0_266}>z</Text>
                </View>
              </View>
              <View style={styles.View_0_267}>
                <View style={styles.View_0_268} />
                <View style={styles.View_0_269}>
                  <Text style={styles.Text_0_269}>l</Text>
                </View>
              </View>
              <View style={styles.View_0_270}>
                <View style={styles.View_0_271} />
                <View style={styles.View_0_272}>
                  <Text style={styles.Text_0_272}>k</Text>
                </View>
              </View>
              <View style={styles.View_0_273}>
                <View style={styles.View_0_274} />
                <View style={styles.View_0_275}>
                  <Text style={styles.Text_0_275}>j</Text>
                </View>
              </View>
              <View style={styles.View_0_276}>
                <View style={styles.View_0_277} />
                <View style={styles.View_0_278}>
                  <Text style={styles.Text_0_278}>h</Text>
                </View>
              </View>
              <View style={styles.View_0_279}>
                <View style={styles.View_0_280} />
                <View style={styles.View_0_281}>
                  <Text style={styles.Text_0_281}>g</Text>
                </View>
              </View>
              <View style={styles.View_0_282}>
                <View style={styles.View_0_283} />
                <View style={styles.View_0_284}>
                  <Text style={styles.Text_0_284}>f</Text>
                </View>
              </View>
              <View style={styles.View_0_285}>
                <View style={styles.View_0_286} />
                <View style={styles.View_0_287}>
                  <Text style={styles.Text_0_287}>d</Text>
                </View>
              </View>
              <View style={styles.View_0_288}>
                <View style={styles.View_0_289} />
                <View style={styles.View_0_290}>
                  <Text style={styles.Text_0_290}>s</Text>
                </View>
              </View>
              <View style={styles.View_0_291}>
                <View style={styles.View_0_292} />
                <View style={styles.View_0_293}>
                  <Text style={styles.Text_0_293}>a</Text>
                </View>
              </View>
              <View style={styles.View_0_294}>
                <View style={styles.View_0_295} />
                <View style={styles.View_0_296}>
                  <Text style={styles.Text_0_296}>p</Text>
                </View>
              </View>
              <View style={styles.View_0_297}>
                <View style={styles.View_0_298} />
                <View style={styles.View_0_299}>
                  <Text style={styles.Text_0_299}>o</Text>
                </View>
              </View>
              <View style={styles.View_0_300}>
                <View style={styles.View_0_301} />
                <View style={styles.View_0_302}>
                  <Text style={styles.Text_0_302}>i</Text>
                </View>
              </View>
              <View style={styles.View_0_303}>
                <View style={styles.View_0_304} />
                <View style={styles.View_0_305}>
                  <Text style={styles.Text_0_305}>u</Text>
                </View>
              </View>
              <View style={styles.View_0_306}>
                <View style={styles.View_0_307} />
                <View style={styles.View_0_308}>
                  <Text style={styles.Text_0_308}>y</Text>
                </View>
              </View>
              <View style={styles.View_0_309}>
                <View style={styles.View_0_310} />
                <View style={styles.View_0_311}>
                  <Text style={styles.Text_0_311}>t</Text>
                </View>
              </View>
              <View style={styles.View_0_312}>
                <View style={styles.View_0_313} />
                <View style={styles.View_0_314}>
                  <Text style={styles.Text_0_314}>r</Text>
                </View>
              </View>
              <View style={styles.View_0_315}>
                <View style={styles.View_0_316} />
                <View style={styles.View_0_317}>
                  <Text style={styles.Text_0_317}>e</Text>
                </View>
              </View>
              <View style={styles.View_0_318}>
                <View style={styles.View_0_319} />
                <View style={styles.View_0_320}>
                  <Text style={styles.Text_0_320}>w</Text>
                </View>
              </View>
              <View style={styles.View_0_321}>
                <View style={styles.View_0_322} />
                <View style={styles.View_0_323}>
                  <Text style={styles.Text_0_323}>q</Text>
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
        style={styles.TouchableOpacity_0_763}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("0_2"))
        }
      />
      <View style={styles.View_0_50}>
        <View style={styles.View_0_49}>
          <View style={styles.View_0_51}>
            <View style={styles.View_0_52} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_0_53}
            />
            <View style={styles.View_0_54} />
          </View>
          <View style={styles.View_0_55}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_0_56}
            />
          </View>
          <View style={styles.View_0_60}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_0_61}
            />
          </View>
        </View>
        <View style={styles.View_0_66}>
          <View style={styles.View_0_67}>
            <Text style={styles.Text_0_67}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_0_48: {
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
  View_0_71: {
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
  View_0_70: {
    flexGrow: 1,
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_0_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_0_73: {
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
  View_0_72: {
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
  View_0_74: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_75: {
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
  View_I0_75_0_72: {
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
  View_I0_75_0_74: {
    flexGrow: 1,
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.322404371584703%"),
    justifyContent: "center"
  },
  Text_I0_75_0_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_76: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_76_0_43: {
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
  View_I0_76_0_46: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.87662760416667%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "center"
  },
  Text_I0_76_0_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "uppercase"
  },
  View_0_128: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_202: {
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
  View_0_203: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_204: {
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
  View_0_205: {
    width: wp("100%"),
    height: hp("36.0655737704918%"),
    minHeight: hp("36.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_206: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("32.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_207: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_208: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.9581056032024444%"),
    minHeight: hp("1.9581056032024444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4571893410604417%")
  },
  ImageBackground_0_209: {
    width: wp("4%"),
    height: hp("1.4116575157707505%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_210: {
    width: wp("0.4444444338480631%"),
    height: hp("0.7741347688143371%"),
    top: hp("1.1839652973445993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.77779947916666%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_0_211: {
    width: wp("2.577777862548828%"),
    height: hp("0.22768669766806515%"),
    top: hp("1.7304133847762841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_0_212: {
    width: wp("1.5111110687255858%"),
    height: hp("2.003643030677337%"),
    top: hp("0.22768114433912956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2444661458333428%")
  },
  ImageBackground_0_213: {
    width: wp("2.4%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_0_214: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_215: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_222: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_223: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_224: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_225: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_226: {
    width: wp("48.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_227: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_0_227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_228: {
    width: wp("100%"),
    height: hp("28.96174863387978%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_229: {
    width: wp("98.4%"),
    height: hp("27.86885245901639%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_0_230: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_231: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_232: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_0_232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6000000238418579,
    textTransform: "none"
  },
  View_0_233: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_234: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_235: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_0_236: {
    width: wp("6.126923116048177%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_237: {
    width: wp("1.900779596964518%"),
    height: hp("0.9737601045702324%"),
    top: hp("0.6968597245346615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7914062500000085%")
  },
  View_0_240: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_241: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(172, 179, 191, 1)"
  },
  View_0_242: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0216796875%"),
    top: hp("1.6848788235356835%")
  },
  View_0_243: {
    width: wp("5.241212972005208%"),
    height: hp("2.3525198952096407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_244: {
    width: wp("2.577777862548828%"),
    height: hp("1.0018215153386685%"),
    top: hp("1.3506946667947375%"),
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
  ImageBackground_0_245: {
    width: wp("5.955555725097656%"),
    height: hp("1.5938069651035662%"),
    top: hp("-0.06096011302508941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.35716145833333357%")
  },
  View_0_246: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_247: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_248: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_249: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_250: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_251: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_252: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.20000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_253: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_254: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_255: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_256: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_257: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_258: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_259: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_260: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_261: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_262: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_263: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_263: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_264: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_265: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_266: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_267: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_268: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_269: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_270: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_271: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_272: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_273: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_274: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_275: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_275: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_276: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_277: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_278: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_279: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_280: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_281: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_282: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_283: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_284: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_285: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_286: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_287: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_288: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_289: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_290: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_290: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_291: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("7.377049180327873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_292: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_293: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "flex-start"
  },
  Text_0_293: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_294: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_295: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_296: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_297: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_298: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_299: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_300: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_301: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_302: {
    width: wp("1.3333333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_303: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_304: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_305: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_305: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_306: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_307: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_308: {
    width: wp("3.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_309: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_310: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_311: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_312: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_313: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_314: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_315: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_316: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_317: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_318: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_319: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_320: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_321: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_322: {
    width: wp("8.266666666666666%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_323: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("0.4098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_0_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_763: {
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
  View_0_50: {
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
  View_0_49: {
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
  View_0_51: {
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
  View_0_52: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.04553873030865763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_0_53: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_0_54: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_55: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_0_56: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%")
  },
  View_0_60: {
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
  ImageBackground_0_61: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17779947916666572%")
  },
  View_0_66: {
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
  View_0_67: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08886718749999911%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_0_67: {
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
