import { bg_primary } from "../UI/Variables";

const SideBars = () => {
    return (


        <div style={{background: `${bg_primary}`}} className={`offcanvas offcanvas-end text-white`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            ...
          </div>
        </div>
    )
}

export default SideBars;