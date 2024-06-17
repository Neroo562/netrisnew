import { View, Text } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const NetrisLogo = (props) => {
  return (
    <View>
      <Svg
        width="123"
        height="38"
        viewBox="0 0 123 38"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg"
      >
        <G {...props}>
          <Path
            d="M3.75 36.509C3.75 36.509 3.75 29.069 3.75 19.5953C3.75 10.1216 19.56 10.1216 19.56 19.5953C19.56 29.069 19.56 36.509 19.56 36.509"
            stroke="#e36c68"
            stroke-width="6.045"
          />
          <Path
            d="M29.7899 23.0824C30.2987 14.7665 36.0193 12.4354 41.2198 12.491C46.4204 12.5466 50.8681 14.6347 52.1659 23.0824H41.2198H35.7592C35.7592 23.0824 31.6638 23.0824 29.7899 23.0824ZM29.7899 23.0824C30.6413 40.5253 51.0822 35.2152 52.1659 28.4182"
            stroke="#e36c68"
            stroke-width="6.045"
          />
          <Path
            d="M65.4336 0.399994V12.49M65.4336 37.6V12.49M65.4336 12.49H73.0349M65.4336 12.49H57.6899"
            stroke="#e36c68"
            stroke-width="6.045"
          />
          <Path
            d="M80.94 37.6C80.94 37.6 80.9399 29.5598 80.94 22.255C80.9401 14.9502 86.148 12.4901 91.1699 12.49"
            stroke="#e36c68"
            stroke-width="6.045"
          />
          <Path
            d="M97.6801 37.6V9.70001"
            stroke="#e36c68"
            stroke-width="6.045"
          />
          <Path
            d="M120 14.9422C117.677 11.4372 108.716 8.87995 108.716 16.6355C108.716 22.139 115.851 22.5623 118.264 26.7958C122.314 33.9024 113.924 39.0727 106.98 30.6058"
            stroke="#e36c68"
            stroke-width="5.642"
          />
        </G>
      </Svg>
    </View>
  );
};

export default NetrisLogo;
