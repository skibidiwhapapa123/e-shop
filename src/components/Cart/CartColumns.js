import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">produkty</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">jméno produktu</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">cena</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">počet</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">smazat</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">celkem</p>
        </div>
      </div>
    </div>
  );
}
