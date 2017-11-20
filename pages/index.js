import React from 'react';
import Layout from '../components/layout';
import Slider from 'react-slick';
import slick_css from '../node_modules/slick-carousel/slick/slick.css';
import slick_theme from '../node_modules/slick-carousel/slick/slick-theme.css';
import Head from 'next/head'
import $ from "jquery";
import AboutUs from '../components/home/about_us';
import Spacer from '../components/spacer';

export default class extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            slides: [
                {
                    "title": "Service Offering",
                    "sub_title": "Hey we're real happy to offer you this thing. We think you'll like it",
                    "img": "images/home/autumn.jpg",
                    "link": "/service-1"
                },
                {
                    "title": "Service Offering 2",
                    "sub_title": "Hey, We think you'll like it. We're real happy to offer you this thing. ",
                    "img": "images/home/apples.jpg",
                    "link": "/service-2"
                },
                {
                    "title": "Service Offering 3",
                    "sub_title": "Hey we're real happy to offer you this thing. We think you'll like it",
                    "img": "images/home/sunlight.jpg",
                    "link": "/service-3"
                }
            ],
            settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true
            }

        };

    }

    componentDidMount() {
        $('.slick-slider').addClass('slider-in');
    }

    renderSlides() {

        return this.state.slides.map(item => {

            return (
                <div key={item.title}>
                    <div className="page-slide d-flex flex-column justify-content-center align-items-start p-5" style={{ backgroundImage: 'url(' + item.img + ')' }}>
                        <h3 className="text-white">{item.title}</h3>
                        <p className="text-white">{item.sub_title}</p>
                        <a href={item.link} className="btn btn-lg btn-primary">
                            Learn More
                        </a>
                    </div>
                </div>
            )

        });

    }

    render() {

        return (
            <div>

                <Layout>
                    <Slider {...this.state.settings}>
                        {this.renderSlides()}
                    </Slider>
                    <Spacer/>
                    <AboutUs />
                </Layout>

                <Head>
                    <style>{slick_css}</style>
                    <style>{slick_theme}</style>
                </Head>

                <style jsx global>{`

                    $slide-height: 400px;

                    .slick-slider {
                        opacity: 0;
                        position: relative;
                        transition: all .4s ease-in-out!important;
                    }

                    .slider-in {
                        opacity: 1;
                    }

                    .slick-slide {
                        min-height: $slide-height;
                        position: relative;           
                    }

                    .page-slide {

                        min-height: $slide-height;
                        width: 100%;
                        background-size: cover;
                        background-position: center center;
                        
                        h3 {
                            font-size: 4em;
                            font-weight: 100;
                        }

                        p {
                            font-size: 2em;
                            font-weight: 100;
                        }

                        h3, p, a {
                            z-index: 2;
                        }
 
                        &:after {
                            content: ' ';
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: rgba(0,0,0,.6); 
                            width: 100%;
                            height: 100%;
                            z-index: 1;
                        }
                    }
                    
                `}</style>

            </div>
        )
    }

}