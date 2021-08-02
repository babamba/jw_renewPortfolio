import { FolioItem } from "@interfaces/folio";
import Carousel from "react-multi-carousel";

interface Props {
  folio: FolioItem;
}

const FolioDetailPics = (props: Props) => {
  const { folio } = props;

  const responsive = {
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
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      swipeable={true}
      containerClass="carousel-container"
    >
      {folio.detail &&
        folio.detail.map((item, idx: number) => (
          <div key={idx}>
            <img
              style={{ width: "100%", maxHeight: 700, minHeight: 450, objectFit: "contain" }}
              src={'/folio/'+item.pic}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default FolioDetailPics;
