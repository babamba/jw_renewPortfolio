import { Link } from "react-router-dom";
import { Tooltip, Typography, Grid } from "antd";
import {
  ReadOutlined,
  PictureOutlined,
  IdcardOutlined,
  CoffeeOutlined,
  SmileOutlined
} from "@ant-design/icons";
import COLOR from "@core/colors";
import styled from "styled-components";
import { useAppSelector } from "@store/useAppStore";

interface Props {
  url: string;
  title: string;
  subTitle: string;
  selected: string;
  icon: string;
}

interface MenuTextProps {
  selected?: string;
  current?: string;
  usedark: string;
}

const MenuText = styled(Typography.Text)<MenuTextProps>`
  padding-left: 4px;
  font-size: 16px;
  /* transition: all 0.3s; */
  color: ${props =>
    props.selected === props.current &&
    (props.usedark === "true"
      ? "rgba(255, 255, 255, 0.95) !important"
      : "rgba(0, 0, 0, 0.95) !important")};
  @media only screen and (min-width: 200px) and (max-width: 991px) {
    font-weight: ${props => (props.selected === props.current ? 600 : 400)};
    padding-left: 4px;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
`;

const Box = styled.div`
  cursor: pointer;
`;

const MenuItem = (props: Props) => {
  const { useDark } = useAppSelector(state => state.appStore);
  const screens = Grid.useBreakpoint();
  const { selected, url, title, icon, subTitle } = props;

  const style = {
    color:
      selected === url && useDark
        ? `${COLOR.MENU_SELECT_TEXT_DARK} !important`
        : `${COLOR.MENU_SELECT_TEXT_LIGHT} !important`,
    fontSize: selected === url ? (screens.lg ? 24 : 14) : screens.lg ? 20 : 14,
    background:
      selected === url
        ? screens.lg
          ? `linear-gradient(to top, ${COLOR.MENU_SELECT_BACK_COLOR} 50%, transparent 30%)`
          : "transparent"
        : "transparent",
    padding: selected === url ? (screens.lg ? 8 : 0) : 0,
    transition: screens.lg ? " 0.3s" : "0s"
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
        placement={screens.lg ? "left" : "topLeft"}
        title={title}
        trigger={screens.lg ? "hover" : "click"}
      >
        {findIcon()}
        {screens.lg === false && screens.md === true && (
          <MenuText selected={url} current={selected} usedark={useDark ? "true" : "false"}>
            {subTitle}
          </MenuText>
        )}
      </Tooltip>
    </Box>
  );
};

export default MenuItem;
