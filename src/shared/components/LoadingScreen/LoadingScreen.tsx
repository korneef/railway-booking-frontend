import { LoadingScreenAnimation } from "shared";

function LoadingScreen() {
  return (
    <div className="loading-image__container">
      <img className="loading-image__image" src={LoadingScreenAnimation} alt="" />
    </div>
  );
}

export default LoadingScreen;