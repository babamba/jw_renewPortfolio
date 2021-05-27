import { FolioItem } from "@interfaces/folio";
import Carousel from "react-multi-carousel";

interface Props {
  folio: FolioItem;
}

const FolioDetailPics = (props: Props) => {
  const { folio } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} showDots={true} swipeable={true}>
      {folio.detail &&
        folio.detail.map((item, idx: number) => (
          <img
            key={idx}
            style={{ width: "100%" }}
            src={`${process.env.REACT_APP_STRAPI_URL}/uploads/${item.pic}`}
          />
        ))}
    </Carousel>
  );
};

export default FolioDetailPics;
