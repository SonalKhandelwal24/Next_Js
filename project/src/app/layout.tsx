import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid" style={{ paddingLeft: "30px" }}>
            <a className="navbar-brand" href="#">Hacker-Rank</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" style={{ paddingLeft: "60px" }} aria-current="page" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/topics">Topics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact" tabIndex={-1}>Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/todo-list">Todo List</Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
              </form> */}
              <button className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#signupModal">Sign-Up</button>
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            </div>
          </div>
        </nav>

        {/* Sign up Modal */}
        <div className="modal fade" id="signupModal" tabIndex={-1} aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="signupModalLabel">Sign up Form</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="p-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputContact" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="exampleInputContact" aria-describedby="contactHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Login Modal */}
        <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="loginModalLabel">Login Form</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="p-4">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer 
          className="container text-dark py-3 px-5 fixed-bottom"
          style={{
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: 'rgb(184, 184, 184)',
          }}
        >
          <p
            className="float-end"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <a href="#" className="text-dark">Back to top</a>
          </p>
          <p
            style={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }}
          >
            © 2017–2021 Company, Inc. ·{' '}
            <a href="#" className="text-dark">Privacy</a> ·{' '}
            <a href="#" className="text-dark">Terms</a>
          </p>
        </footer>

        {children}
      </body>
    </html>
  );
}