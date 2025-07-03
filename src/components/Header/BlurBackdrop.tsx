const BlurBackdrop = () => {
    return (
        <div id="BlurBackdrop" className="absolute right-0 left-0 -z-100">
            <div className="slick-slider slick-initialized" dir="ltr">
                <div className="slick-list">
                    <div
                        className="slick-track"
                        style={{
                            // width: "6798px",
                            opacity: 1,
                        }}
                    >
                        <div
                            data-index="0"
                            className="slick-slide"
                            tabIndex={-1}
                            aria-hidden="true"
                            style={{
                                outline: "none",
                                // width: "3399px",
                                position: "relative",
                                left: "0px",
                                opacity: 0,
                                transition: "opacity 2000ms, visibility 2000ms",
                            }}
                        >
                            <div>
                                <div
                                    className="tab:h-[40rem] h-[20rem] w-full overflow-hidden"
                                    tabIndex={-1}
                                    style={{
                                        width: "100%",
                                        display: "inline-block",
                                    }}
                                >
                                    <img
                                        className="tab:blur-[40px] h-auto w-full scale-x-105 scale-y-110 object-cover blur-[20px]"
                                        alt=""
                                        src="https://mapstudy.sgp1.digitaloceanspaces.com/ui/slider/2k8-xps-1747810214128.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            data-index="1"
                            className="slick-slide slick-active slick-current"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{
                                outline: "none",
                                width: "3399px",
                                position: "relative",
                                left: "-3399px",
                                opacity: 1,
                                transition: "opacity 2000ms, visibility 2000ms",
                            }}
                        >
                            <div>
                                <div
                                    className="tab:h-[40rem] h-[20rem] w-full overflow-hidden"
                                    tabIndex={-1}
                                    style={{
                                        width: "100%",
                                        display: "inline-block",
                                    }}
                                >
                                    <img
                                        className="tab:blur-[40px] h-auto w-full scale-x-105 scale-y-110 object-cover blur-[20px]"
                                        alt=""
                                        src="https://mapstudy.sgp1.digitaloceanspaces.com/ui/slider/map-book-1736140098369.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-0 h-[65rem] overflow-hidden">
                <div className="h-[40rem] w-full bg-gradient-to-b from-[rgba(233,238,255,0.84)] to-[rgba(247,248,249,1)]"></div>
                <div className="mt-[-20rem] h-[40rem] w-full scale-110 bg-[rgba(247,248,249,0.75)] blur-[80px]"></div>
            </div>
        </div>
    );
};

export default BlurBackdrop;
