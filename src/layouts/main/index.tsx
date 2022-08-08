import React from "react";
import { Wrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function MainpageLayout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
