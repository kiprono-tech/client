import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
              <img src="hotel1.png" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kenya</h1>
                <h2>123 properties</h2>
            </div>
        </div>
          <div className="featuredItem">
              <img src="hotel1.png" alt="" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Austine</h1>
                  <h2>123 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="hotel1.png" alt="" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Reno</h1>
                  <h2>123 properties</h2>
              </div>
          </div>
    </div>
  );
};

export default Featured;