import SearchBar from '../components/SearchBar'

const Intro = () => (
  <section className="intro pri-pad-b">
    <div className="container">
      <SearchBar />

      <div className="row intro-content">
        <div className="col-md-7 col-sm-7">
          <div className="content-wrap">
            <h2>Easy Leasing Medical homes</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#8217;s standard dummy
              text ever since the 1500s, when an unknown printer took. There are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>

          <a
            href="#dummy"
            className="btn btn-border btn-lg faa-parent animated-hover"
          >
            View Properties <i className="fa fa-long-arrow-right faa-passing" />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
