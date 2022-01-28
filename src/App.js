import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img
                src="https://picsum.photos/200/100"
                className="card-img-top"
                alt="..."

              />
              <div className="card-body">
                <h5 className="card-title">Movement</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                src="https://picsum.photos/200/101"
                className="card-img-top"
                alt="..."
                
              />
              <div className="card-body">
                <h5 className="card-title">Scenario</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                src="https://picsum.photos/200/103"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Fallen</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
