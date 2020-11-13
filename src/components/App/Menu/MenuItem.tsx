import React, { FC, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Tooltip, Typography, Grid } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "hooks/useStore";
import styled from "styled-components";
import { useRouter } from "hooks/useRouter";

interface Props {
  url: string;
  title: string;
  subTitle: string;
  selected: string;
  icon: string;
}

const MenuText = styled(Typography.Text)`
  padding-left: 4px;
  font-size: 16px;
  transition: all 0.5s ease;
  color: ${(props) =>
    props.selected === props.current &&
    (props.usedark === "true"
      ? "rgba(255, 255, 255, 0.95) !important"
      : "rgba(0, 0, 0, 0.95) !important")};
  @media only screen and (min-width: 200px) and (max-width: 1199px) {
    font-weight: ${(props) => (props.selected === props.current ? 600 : 300)};
    padding-left: 4px;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
`;

const Box = styled.div`
  cursor: pointer;
`;

const MenuItem: FC<Props> = (props: Props) => {
  const { useDark } = useStore("common");
  const screens = Grid.useBreakpoint();
  const { selected, url, title, icon, subTitle } = props;
  const history = useHistory();
  const match = useRouteMatch();
  const router = useRouter();
  useEffect(() => {
    console.log("history : ", router);
    console.log("selected : ", selected);
    console.log("include", router.location.pathname.includes(selected));
  }, [router]);

  const style = {
    color:
      (selected === url || selected === "") && useDark
        ? "rgba(255, 255, 255, 0.95) !important"
        : "rgba(0, 0, 0, 0.95) !important",
    fontSize:
      selected === url || selected === ""
        ? screens.xl
          ? 24
          : 14
        : screens.xl
        ? 20
        : 14,
    background:
      selected === url || selected === ""
        ? screens.xl
          ? "linear-gradient(to top, rgba(152, 44, 255, 0.4) 50%, transparent 30%)"
          : "transparent"
        : "transparent",
    padding: selected === url || selected === "" ? (screens.xl ? 8 : 0) : 0,
    transition: "0.8s",
  };

  const findIcon = () => {
    switch (icon) {
      case "IdcardOutlined":
        return <IdcardOutlined style={style} />;
      case "PictureOutlined":
        return <PictureOutlined style={style} />;
      case "ReadOutlined":
        return <ReadOutlined style={style} />;
      case "CoffeeOutlined":
        return <CoffeeOutlined style={style} />;
      case "SmileOutlined":
        return <SmileOutlined style={style} />;
      default:
        return <IdcardOutlined style={style} />;
    }
  };

  return (
    <Box>
      <Link to={url} />
      <Tooltip
        placement="topLeft"
        title={title}
        trigger={screens.xl ? "hover" : "click"}
      >
        {findIcon()}
        {screens.xl === false && screens.md === true && (
          <MenuText
            selected={url}
            current={selected}
            usedark={useDark ? "true" : "false"}
          >
            {subTitle}
          </MenuText>
        )}
      </Tooltip>
    </Box>
  );
};

export default observer(MenuItem);
