import React from 'react';
import { Img } from '../types/Img';
import Image from './Image';
import '../styles/ImageList.css';

const ImageList = () => {
  const [imgList, setImgList] = React.useState<Img[]>([]);
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const memoImgList = React.useMemo(() => imgList, [imgList]);

  async function getImgData() {
    setIsloading(true);
    try {
      const response: Response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      const imgData = await response.json();
      setImgList(imgData);
    } catch (err) {
      console.error(`Fetching error: ${err}`);
    } finally {
      setIsloading(false);
    }
  }

  React.useEffect(() => {
    getImgData();
  }, []);

  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        id="loading"
      >
        Loading...
      </div>
    );
  return (
    <div className="row">
      {memoImgList.map((image) => (
        <div
          key={image.id}
          className="col-md-6 mb-4 animate__animated animate__fadeIn animate__faster animate__delay-1s"
        >
          <Image {...image} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
