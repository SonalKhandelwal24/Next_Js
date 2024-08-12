"use client"
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter();

    const navigate = (name: any) => {
        router.push('/topics/' + name)
    }


    return (
        <>
            <div className="album py-5 bg-light"  style={{marginTop:"56px"}}>
                <div className="container" >
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb1.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Data Science</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => navigate('Data-Science')}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">12 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb2.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Artificial Intelligence (AI)</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => navigate('AI')}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">17 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb3.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Technology </h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info"  onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-info" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">6 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb4.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Computer Security</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary"  onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">20 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb5.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Full Stack Development</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">6 months</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb6.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Robotics </h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">21 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb4.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Web Development</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">8 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb5.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3> Machine Learning </h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">21 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb6.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Cybersecurity </h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">21 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb4.jpg" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3>Game Development</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">10 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="thumb5.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3> Mobile Development: </h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success"  onClick={() => router.push("/courses")}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">10 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col"  style={{marginBottom:"56px"}}>
                            <div className="card shadow-sm">
                                <img src="thumb5.avif" width="100%" height="225" alt="" />
                                <div className="card-body">
                                    <h3> Networking</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={() => router.push("/pricing")}>Course fee</button>
                                        </div>
                                        <small className="text-muted">24 monthshs</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};
