import React from "react";
import "./Home.css";

const Home = () => {
  const image = "./red.jpg";
  return (
    <div className="body">
      <div className="page_path">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Medical Darpan</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/">Search</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Fabiflu
          </li>
        </ol>
      </div>

      <div className="input-header">
        <input type="text" class="icon" name="" placeholder="Paracetamol" />
        <button className="button">Search</button>
        <p className="search_text">
          Paracetamol <span class="text-muted fs-5">(128 products)</span>
          <span className="m-3">
            <button className="button1">
              Aceclofenac
              <span className="px-2 ">×</span>
            </button>
          </span>
          <span className="m-1">
            <button className="button1">
              500mg
              <span className="px-2">×</span>
            </button>
          </span>
          <span className="m-2 fs-6 remove ">
            <strong> Remove all</strong>
          </span>
        </p>
      </div>

      <div className="row">
        <div className="col-md-2">
          <div className="cat-sidebar">
            <h5>Related category</h5>
            <div className="P__bg">
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Syrup</p>
              <p>Paracetamol Tablets</p>
              <p>
                <button className="button1">
                  Aceclofenac
                  <span className="px-2 ">×</span>
                </button>
              </p>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Tablets</p>
            </div>
          </div>
          <div className="cat-sidebar">
            <h5>Related category</h5>
            <div className="P__bg">
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Syrup</p>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Tablets</p>
            </div>
          </div>
          <div className="cat-sidebar">
            <h5>Related category</h5>
            <div className="P__bg">
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Syrup</p>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Tablets</p>
              <p className="m-1">
                <button className="button1">
                  500mg
                  <span className="px-2">×</span>
                </button>
              </p>
              <p>Paracetamol Tablets</p>
            </div>
          </div>
          <div className="cat-sidebar">
            <h5>Related category</h5>
            <div className="P__bg">
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Syrup</p>
            </div>
          </div>
          <div className="cat-sidebar">
            <h5>Related category</h5>
            <div className="P__bg">
              <p>Paracetamol Tablets</p>
            </div>
          </div>
        </div>

        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <i class="fa fa-telegram" aria-hidden="true"></i>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card card_shadow" style={{ width: "25rem" }}>
                <span class="m-2">
                  <img src={image} class="card-img-top" alt="..." />
                </span>
                <div class="card-body text-center">
                  <p class="card-title ">
                    <strong> Favipiravir 400mg(fabiflu) Tablets </strong>
                  </p>
                  <p class="text-danger fw-bold fs-4">
                    Rs1,775 <span class="text-muted">/stripe</span>
                  </p>
                  <h6> Glenmark Pharmaceutical Limited </h6>
                  <p class="text-muted">PARVAT PATIYA, SURAT, GUJARAT</p>
                </div>
                <hr/>
                <a className="contact fs-5" to="/">Contact Supplier</a>
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
              <p>Done!!</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
