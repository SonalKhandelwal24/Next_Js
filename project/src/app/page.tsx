"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Make sure to import the bundle, not the main JS file
import '../../src/app/style.css'; // If you have other global styles
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const router = useRouter();

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "calc(100% - 112px)", marginTop:"56px"}}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <button className="btn btn-success mx-2" onClick={() => router.push('/courses')}>Full stack</button>
              <button className="btn btn-danger" onClick={() => router.push('/courses')}>Technology</button>
              <button className="btn btn-primary mx-2" onClick={() => router.push('/courses')}>Coding</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
              <button className="btn btn-success mx-2"onClick={() => router.push('/courses')}>Full stack</button>
              <button className="btn btn-primary"onClick={() => router.push('/courses')}>Technology</button>
              <button className="btn btn-danger mx-2"onClick={() => router.push('/courses')}>Coding</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
              <button className="btn btn-danger mx-2"onClick={() => router.push('/courses')}>Full stack</button>
              <button className="btn btn-primary"onClick={() => router.push('/courses')}>Technology</button>
              <button className="btn btn-success mx-2"onClick={() => router.push('/courses')}>Coding</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Coding Technology</strong>
                <h3 className="mb-0">Learn Coding</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  Coding, also known as programming, is the process of writing instructions for computers to perform specific tasks.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Technology</strong>
                <h3 className="mb-0">Data Science</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  Codings are written in languages such as Python, JavaScript, Java, C++, Ruby, etc.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-danger">Artificial Intelligence</strong>
                <h3 className="mb-0">Artificial Intelligence (AI)</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb6.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-info">Designing</strong>
                <h3 className="mb-0">Web Designing</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  AI systems can analyze vast amounts of data, recognize patterns, and perform tasks that typically require human intelligence.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb5.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-warning">Advance Robotics</strong>
                <h3 className="mb-0">Robotics</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb6.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{marginBottom:"60px"}}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Full stack</strong>
                <h3 className="mb-0">Full Web Development</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  AI systems can analyze vast amounts of data, recognize patterns, and perform tasks that typically require human intelligence.
                </p>
                <Link href="/courses" className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="/thumb5.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
