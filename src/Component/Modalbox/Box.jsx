import React from 'react'

function Box() {
  return (
    <div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="coming-item">
          <div className="coming-item-inner">
            <div className="coming-item-inner2">
              <h2>COMING SOON</h2>
              <a data-dismiss="modal" aria-label="Close" href="#">
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Box