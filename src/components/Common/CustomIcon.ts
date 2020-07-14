import { createFromIconfontCN } from '@ant-design/icons';

//https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1871992
const MyIcon = createFromIconfontCN({
  scriptUrl: require('../../assets/icon/cdn') // 在 iconfont.cn 上生成
});

export default MyIcon;
