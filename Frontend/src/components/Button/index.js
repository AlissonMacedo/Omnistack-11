import React, { useEffect } from "react";
import ReactLoading from "react-loading";

import { Container, Text, Loading } from "./styles";

export default function DefaultButton(props) {
  return (
    <div>
      <Container
        primary={props.primary}
        width={props.width}
        height={props.height}
      >
        {props.text}
        {props.loading ? (
          <Loading>
            <ReactLoading
              type="spinningBubbles"
              color="#999"
              height={15}
              width={15}
            />
          </Loading>
        ) : null}
      </Container>
    </div>
  );
}
