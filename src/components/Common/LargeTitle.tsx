import { Typography } from "antd";
interface Props {
  text: string;
}
const LargeTitle = (props: Props) => {
  const { text } = props;
  return (
    <Typography.Title level={1} style={{ fontSize: 48 }}>
      {text}
    </Typography.Title>
  );
};

export default LargeTitle;
