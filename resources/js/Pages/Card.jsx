import { Head } from '@inertiajs/react';

export default function Card() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <section>
            <div className='container my-4'>
                <div className='row'>

                    {
                        num.map(i => (
                            <div className='col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                                <div className="card">
                                    <img src="" alt="ricardo" className="card-img-top img-thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title">Event Name</h5>
                                        <p className="card-text">Description</p>
                                        <p className="card-text">
                                            <span>Start</span> | <span>Rating</span>
                                        </p>
                                        <a href="#" className="btn btn-primary">Go to detail</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
