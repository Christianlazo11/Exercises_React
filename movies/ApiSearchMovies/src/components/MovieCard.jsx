import { AiFillHeart } from "react-icons/ai";

export function MovieCard(props) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      <div className="d-flex flex-row align-items-center justify-content-center m-0 p-0">
        <div className="card w-auto">
          <div
            className="d-flex flex-wrap align-items-center justify-content-center m-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${props.cardnumber}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
              alt="Movie Poster"
            />
            <div
              className="modal fade"
              id={`exampleModal${props.cardnumber}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-center">
                    <h5 className="modal-title " id="exampleModalLabel">
                      {props.movie.title}
                    </h5>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-center pb-3">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
                        className=""
                        alt=""
                      />
                    </div>
                    <div>{props.movie.overview}</div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-warning">
                      <AiFillHeart className="fs-3 me-1" />
                      Add to favorites
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Close{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divTitleMovie p-3 d-flex align-items-center justify-content-evenly gap-3">
            <p className="m-0 text-center fw-bold">{props.movie.title}</p>
            <p className="m-0 score text-center p-1 fw-bold rounded-3">
              {props.movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
