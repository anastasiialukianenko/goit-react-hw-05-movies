import { MutatingDots } from 'react-loader-spinner'
import React from "react";


export function Loader() {
      return (
<MutatingDots 
  height="100"
  width="100"
  color="#3f51b5"
  secondaryColor= '#303f9f'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  visible={true}
/>
    );

}