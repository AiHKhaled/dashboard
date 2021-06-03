import React, { useState, useEffect } from "react";
import { Anchor } from "antd";
const { Link } = Anchor;

const AnchorExample = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <Anchor targetOffset={targetOffset}>
      <Link href="#Goals" title="Goals" />
      <Link href="#Subgoals" title="SubGoals" />
      <Link href="#KPI" title="KPI" />
    </Anchor>
  );
};

export default AnchorExample;
