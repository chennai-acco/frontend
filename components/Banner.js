import { Carousel } from 'react-bootstrap'

const Banner = () => (
  <div className="banner banner2">
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="banner-content">
          <div className="wrap">
            <div className="inner text-white">
              <div className="container">
                <div className="box">
                  <div className="price primary-color">
                    INR 3,000
                    <a href="#dummy" className="view-more">
                      View Details
                    </a>
                  </div>

                  <h5 className="mb-5">
                    <a href="#dummy">154, Thambaram</a>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="overlay overlay2">
          <img src="../static/images/banner-slide1.jpg" alt="" />
        </figure>
      </Carousel.Item>

      <Carousel.Item>
        <div className="banner-content">
          <div className="wrap">
            <div className="inner text-white">
              <div className="container">
                <div className="box">
                  <div className="price primary-color">
                    INR 3,000
                    <a href="#dummy" className="view-more">
                      View Details
                    </a>
                  </div>

                  <h5 className="mb-5">
                    <a href="#dummy">154, Thambaram</a>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="overlay overlay2">
          <img src="../static/images/banner-slide2.jpg" alt="" />
        </figure>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner
