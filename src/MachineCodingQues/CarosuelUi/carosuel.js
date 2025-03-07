import React, { useEffect, useRef, useCallback } from "react";
import MyCard from "./MyCard";
import "./Carousel.css";

const Carousel = () => { 
    const boxRef = useRef(null);

    // Previous Button Scroll
    const btnPressPrev = useCallback(() => {
        const box = boxRef.current;
        if (box) {
            let width = box.clientWidth;
            box.scrollBy({ left: -width, behavior: "smooth" });
        }
    }, []);

    // Next Button Scroll
    const btnPressNext = useCallback(() => {
        const box = boxRef.current;
        if (box) {
            let width = box.clientWidth;
            if (box.scrollLeft + width >= box.scrollWidth) {
                box.scrollTo({ left: 0, behavior: "smooth" }); // Loop to start
            } else {
                box.scrollBy({ left: width, behavior: "smooth" });
            }
        }
    }, []);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            requestAnimationFrame(btnPressNext);
        }, 5000);
        return () => clearInterval(interval);
    }, [btnPressNext]);

    return (
        <div className="product-carousel">
            <button className="prev-btn" onClick={btnPressPrev}>
                <p>&lt;</p>
            </button>
            <div className="product-container" ref={boxRef}>
                <MyCard cardno="1" />
                <MyCard cardno="2" />
                <MyCard cardno="3" />
                <MyCard cardno="4" />
                <MyCard cardno="5" />
                <MyCard cardno="6" />
                <MyCard cardno="7" />
                <MyCard cardno="8" />
                <MyCard cardno="9" />
                <MyCard cardno="10" />
                <MyCard cardno="11" />
      </div>
            <button className="next-btn" onClick={btnPressNext}>
                <p>&gt;</p>
            </button>
        </div>
    );
};

export default Carousel;
