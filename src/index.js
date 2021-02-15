import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

//ReactDOM.render(<App />, document.getElementById('root'));
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>📷</button>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
    </>
  );
};

ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
