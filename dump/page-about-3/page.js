'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {useState} from 'react'
import Layout from '../../components/layout/Layout'

function About3() {
    // Open modal
    const [modal, setModal] = useState(false)
    const [videoLoading, setVideoLoading] = useState(true)
    const openModal = () => {
        setModal(!modal)
    }
    const spinner = () => {
        setVideoLoading(!videoLoading)
    }

    return (
        <>
            <Layout>
                <section className='section-box'>
                    <div className='banner-hero bg-about-3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 text-center'>
                                    <h1 className='text-display-2 color-gray-900'>Our Story</h1>
                                    <p className='text-heading-4 color-gray-600 mt-40'>
                                        We supply enterprises, organizations and institutes of high-
                                        <br className='d-lg-block d-none' />
                                        tech industries with modern components. We build long-
                                        <br className='d-lg-block d-none' />
                                        term trusting relationships with our customers and partnes
                                        <br className='d-lg-block d-none' />
                                        for further fruitful cooperations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='section-box mt-40'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-1' />
                            <div className='col-lg-10'>
                                <div className='box-image'>
                                    <a className='popup-youtube btn-play-video btn-play-middle' onClick={openModal}>
                                        {' '}
                                    </a>

                                    <img
                                        className='img-responsive bdrd-16'
                                        src='assets/imgs/page/about/3/img.png'
                                        alt='Agon'
                                    />
                                </div>
                            </div>
                            <div className='col-lg-1' />
                        </div>
                    </div>
                </div>
                <section className='section-box mt-100'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-1 col-sm-1 col-12' />
                            <div className='col-lg-10 col-sm-10 col-12 text-center'>
                                <h2 className='text-heading-1 color-gray-900 mb-10'>
                                    Providing solutions of every kind
                                </h2>
                                <p className='text-body-lead-large color-gray-600 mt-20'>
                                    In a professional context it often happens that private or
                                    <br className='d-lg-block d-none' />
                                    corporate clients order a publication to publish news.
                                </p>
                            </div>
                            <div className='col-lg-1 col-sm-1 col-12' />
                        </div>
                    </div>
                    <div className='container mt-40'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='list-icons mt-50'>
                                    <div className='item-icon none-bd'>
                                        <span className='icon-left'>
                                            <img src='/assets/imgs/page/homepage2/icon-acquis.svg' alt='Agon' />
                                        </span>
                                        <h4 className='text-heading-4'>1. Acquisition</h4>
                                        <p className='text-body-text color-gray-600 mt-15'>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit laborum — semper quis lectus nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='list-icons mt-50'>
                                    <div className='item-icon none-bd'>
                                        <span className='icon-left'>
                                            <img src='/assets/imgs/page/homepage2/icon-active.svg' alt='Agon' />
                                        </span>
                                        <h4 className='text-heading-4'>2. Activation</h4>
                                        <p className='text-body-text color-gray-600 mt-15'>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit laborum — semper quis lectus nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div className='list-icons mt-50'>
                                    <div className='item-icon none-bd'>
                                        <span className='icon-left'>
                                            <img src='/assets/imgs/page/homepage2/icon-retent.svg' alt='Agon' />
                                        </span>
                                        <h4 className='text-heading-4'>3. Retention</h4>
                                        <p className='text-body-text color-gray-600 mt-15'>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit laborum — semper quis lectus nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-box pt-100 pb-100 mt-100 bg-6'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 mb-30'>
                                <span className='tag-1 color-gray-900'>Built Exclusively For You</span>
                                <h3 className='text-heading-1 mt-30'>
                                    Don’t take our word for it. See what our clients say.
                                </h3>
                                <p className='text-body-lead-large color-gray-600 mt-30'>
                                    Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero
                                    tempus, blandit
                                </p>
                                <div className='mt-40'>
                                    <Link href='/page-service-2' legacyBehavior>
                                        <a className='btn btn-default btn-white icon-arrow-right'>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='card-grid-style-2 card-square hover-up mb-20'>
                                            <p className='text-body-text color-gray-600 text-comment'>
                                                "No matter where you go, Its is the coolest, most happening thing
                                                around! Not able to tell you how happy I am with it. "
                                            </p>
                                            <div className='box-img-user'>
                                                <div className='img-user img-user-round'>
                                                    <img src='/assets/imgs/page/homepage2/user-1.png' alt='Agon' />
                                                </div>
                                                <h4 className='text-body-lead color-gray-900 mb-5'>Jane Cooper</h4>
                                                <p className='text-body-text-md'>Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='card-grid-style-2 card-square hover-up mb-20'>
                                            <p className='text-body-text color-gray-600 text-comment'>
                                                "Wow what great service, I love it! Its is the most valuable business
                                                resource we have EVER purchased. We cant understand how weve been living
                                                without it. I couldnt have asked for more than this."
                                            </p>
                                            <div className='box-img-user'>
                                                <div className='img-user img-user-round'>
                                                    <img src='/assets/imgs/page/homepage2/user-2.png' alt='Agon' />
                                                </div>
                                                <h4 className='text-body-lead color-gray-900 mb-5'>Wade Warren</h4>
                                                <p className='text-body-text-md'>Krusty Krab</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='card-grid-style-2 card-square hover-up mb-20'>
                                            <p className='text-body-text color-gray-600 text-comment'>
                                                "Your company is truly upstanding and is behind its product 100%. Its
                                                the perfect solution for our business. It has really helped our
                                                business. Needless to say we are extremely satisfied with the results. "
                                            </p>
                                            <div className='box-img-user'>
                                                <div className='img-user img-user-round'>
                                                    <img src='/assets/imgs/page/homepage2/user-3.png' alt='Agon' />
                                                </div>
                                                <h4 className='text-body-lead color-gray-900 mb-5'>Leslie Alexander</h4>
                                                <p className='text-body-text-md'>Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='card-grid-style-2 card-square hover-up mb-20'>
                                            <p className='text-body-text color-gray-600 text-comment'>
                                                "Its is both attractive and highly adaptable. Its exactly what Ive been
                                                looking for. Definitely worth the investment."
                                            </p>
                                            <div className='box-img-user'>
                                                <div className='img-user img-user-round'>
                                                    <img src='/assets/imgs/page/homepage2/user-4.png' alt='Agon' />
                                                </div>
                                                <h4 className='text-body-lead color-gray-900 mb-5'>Jenny Wilson</h4>
                                                <p className='text-body-text-md'>Soylent Corp</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-box'>
                    <div className='container mt-120'>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12 block-img-we-do'>
                                <img
                                    className='bdrd-16 img-responsive'
                                    src='assets/imgs/page/about/3/img-2.png'
                                    alt='Agon'
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12 block-we-do'>
                                <span className='tag-1 bg-6 color-green-900'>What We Do, What You Get</span>
                                <h3 className='text-heading-1 mt-30'>
                                    An Exceptionally unique experience Tailored to you
                                </h3>
                                <p className='text-body-lead-large color-gray-600 mt-30'>
                                    In a professional context it often happens that private or corporate clients order a
                                    publication news while still not being ready. Business advisory service advises
                                    current and future businesses prospects of a client
                                </p>
                                <div className='line-bd-green mt-50' />
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-6 col-12 mt-50'>
                                        <h4 className='text-heading-6 icon-leaf'>Boost your sale</h4>
                                        <p className='text-body-excerpt color-gray-600 mt-15'>
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 col-12 mt-50'>
                                        <h4 className='text-heading-6 icon-leaf'>Smart Installation Tools</h4>
                                        <p className='text-body-excerpt color-gray-600 mt-15'>
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 col-12 mt-50'>
                                        <h4 className='text-heading-6 icon-leaf'>Introducing New Features</h4>
                                        <p className='text-body-excerpt color-gray-600 mt-15'>
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className='col-lg-6 col-sm-6 col-12 mt-50'>
                                        <h4 className='text-heading-6 icon-leaf'>Dynamic Boosting</h4>
                                        <p className='text-body-excerpt color-gray-600 mt-15'>
                                            The latest design trends meet hand-crafted templates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='section-box mt-100'>
                    <div className='container'>
                        <div className='bd-bottom pb-70'>
                            <ul className='list-5-col'>
                                <li>
                                    <span className='text-display-3 color-green-900'>
                                        +<span className='count'>6</span>k
                                    </span>
                                    <p className='text-body-text color-gray-500 pl-40'>
                                        Years in
                                        <br />
                                        Business
                                    </p>
                                </li>
                                <li>
                                    <span className='text-display-3 color-green-900'>
                                        +<span className='count'>12</span>k
                                    </span>
                                    <p className='text-body-text color-gray-500 pl-40'>
                                        Projects
                                        <br />
                                        Done
                                    </p>
                                </li>
                                <li>
                                    <span className='text-display-3 color-green-900'>
                                        +<span className='count'>14</span>k
                                    </span>
                                    <p className='text-body-text color-gray-500 pl-40'>
                                        Countries
                                        <br />/ Offices
                                    </p>
                                </li>
                                <li>
                                    <span className='text-display-3 color-green-900'>
                                        +<span className='count'>16</span>k
                                    </span>
                                    <p className='text-body-text color-gray-500 pl-40'>
                                        Constant
                                        <br />
                                        Clients
                                    </p>
                                </li>
                                <li>
                                    <span className='text-display-3 color-green-900'>
                                        +<span className='count'>27</span>k
                                    </span>
                                    <p className='text-body-text color-gray-500 pl-40'>Paid Customers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className='section-box mt-90 mb-mobile mb-150'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-1 col-12' />
                            <div className='col-lg-8 col-sm-10 col-12 text-center mt-40'>
                                <h2 className='text-heading-1 color-gray-900 mb-10'>
                                    Building the
                                    <br className='d-lg-block d-none' />
                                    Work Ecosystem
                                </h2>
                                <p className='text-body-lead-large color-gray-600 mt-20'>
                                    From year to year we strive to invent the most innovative
                                    <br className='d-lg-block d-none' />
                                    technology that is used by both small and big enterprises
                                </p>
                            </div>
                            <div className='col-lg-2 col-sm-1 col-12' />
                        </div>
                    </div>
                    <div className='container mt-90 mb-100'>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <div className='bg-2 box-square hover-up'>
                                    <h4 className='text-heading-4 color-gray-900 mb-15'>Cross-Platform</h4>
                                    <p className='text-body-text-md color-gray-600'>
                                        Your site is not complete with only landings. Get essential inner pages using
                                        our ready demos.
                                    </p>
                                    <div className='box-image-inner bg-color-1'>
                                        <img src='/assets/imgs/page/homepage2/temp-1.png' alt='Agon' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <div className='bg-6 box-square hover-up'>
                                    <h4 className='text-heading-4 color-gray-900 mb-15'>Extremely Flexible</h4>
                                    <p className='text-body-text-md color-gray-600'>
                                        Your site is not complete with only landings. Get essential inner pages using
                                        our ready demos.
                                    </p>
                                    <div className='box-image-inner bg-color-2'>
                                        <img src='/assets/imgs/page/homepage2/temp-2.png' alt='Agon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-box'>
                    <div className='container mt-30'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <h3 className='text-heading-1 mb-10'>From Our Blog</h3>
                                <p className='text-body-lead-large color-gray-600'>From Our blog and Event fanpage</p>
                            </div>
                            <div className='col-lg-4 text-lg-end text-start pt-30'>
                                <Link href='/blog-2' legacyBehavior>
                                    <a className='btn btn-black icon-arrow-right-white'>View More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='container mt-90'>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-12 pr-30'>
                                <div className='card-grid-style-4'>
                                    <span className='tag-dot'>Company</span>
                                    <Link href='/blog-single' legacyBehavior>
                                        <a className='text-heading-4'>
                                            We can blend colors multiple ways, the most common
                                        </a>
                                    </Link>

                                    <div className='grid-4-img'>
                                        <Link href='/blog-single' legacyBehavior>
                                            <a>
                                                <img src='/assets/imgs/page/homepage1/img-news-1.png' alt='Agon' />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 pr-30'>
                                <div className='card-grid-style-4'>
                                    <span className='tag-dot'>Marketing Event</span>
                                    <Link href='/blog-single' legacyBehavior>
                                        <a className='text-heading-4'>
                                            How To Blow Through Capital At An Incredible Rate
                                        </a>
                                    </Link>

                                    <div className='grid-4-img'>
                                        <Link href='/blog-single' legacyBehavior>
                                            <a>
                                                <img src='/assets/imgs/page/homepage1/img-news-2.png' alt='Agon' />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 pr-30'>
                                <div className='card-grid-style-4'>
                                    <span className='tag-dot'>Customer Services</span>
                                    <Link href='/blog-single' legacyBehavior>
                                        <a className='text-heading-4'>
                                            Design Studios That Everyone Should Know About?
                                        </a>
                                    </Link>

                                    <div className='grid-4-img color-bg-4'>
                                        <Link href='/blog-single' legacyBehavior>
                                            <a>
                                                <img src='/assets/imgs/page/homepage1/img-news-3.png' alt='Agon' />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-box overflow-visible mb-100'>
                    <div className='container mt-100'>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <div className='bg-2 box-newsletter position-relative'>
                                    <div className='row'>
                                        <div className='col-lg-5 col-md-7'>
                                            <span className='text-body-capitalized color-gray-500 text-uppercase'>
                                                newsletter
                                            </span>
                                            <h4 className='text-heading-2 mb-10 mt-10'>Subscribe our newsletter</h4>
                                            <p className='text-body-text color-gray-500'>
                                                By clicking the button, you are agreeing with our
                                            </p>
                                            <Link href='/page-terms' legacyBehavior>
                                                <a>Term and Conditions</a>
                                            </Link>

                                            <div className='box-form-newsletter mt-30'>
                                                <form className='form-newsletter'>
                                                    <input
                                                        className='input-newsletter'
                                                        placeholder='Enter you mail ..'
                                                    />
                                                    <button className='btn btn-send' />
                                                </form>
                                            </div>
                                        </div>
                                        <div className='col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end'>
                                            <div className='block-chart shape-1'>
                                                <img src='/assets/imgs/template/chart.png' alt='Agon' />
                                            </div>
                                            <img
                                                className='img-responsive img-newsletter'
                                                src='assets/imgs/template/img-newsletter.png'
                                                alt='Agon'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {modal ? (
                    <section className='modal__bg' onClick={openModal}>
                        <div className='modal__align'>
                            <div className='modal__content' modal={modal}>
                                <div className='modal__video-align'>
                                    {videoLoading ? (
                                        <div className='modal__spinner'>
                                            <i className='fi-rr-refresh'></i>
                                        </div>
                                    ) : null}
                                    <iframe
                                        className='modal__video-style'
                                        onLoad={spinner}
                                        loading='lazy'
                                        width='800'
                                        height='500'
                                        src='https://www.youtube.com/embed/oRI37cOPBQQ'
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
            </Layout>
        </>
    )
}

export default About3
