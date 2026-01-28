const BreadCrumbs = ({ FirstRef,firstName,secondName }) => {
    return (
        <>
            <div className="shopfirst-outer" ref={FirstRef}>
                <div className="container">
                    <div className="shopfirst-inner">
                        <div className="shopfirst-item">
                            <a href="#"> {firstName}   </a>
                        </div>
                        <div className="shopfirst-item">
                            <a href="#">/ {secondName}</a>
                        </div>
                        <div className="shopfirst-item mains-title">
                            <p>shop</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreadCrumbs;