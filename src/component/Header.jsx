import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary ">
        <div className="container d-flex align-items-center sm:justify-content-center">
          <a className="navbar-brand" href="#">
            <img
              src="../assets/logo.png"
              className="img-fluid"
              style={{ width: "150px" }}
            />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Chats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Images
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Maps
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>. . .</b>
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Translate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Travel
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MSN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Start.gg
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Take Lessons
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Online Games
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* // right side content  */}
            <ul className="navbar-nav d-flex rightside_menu gap-3 mb-2 mb-lg-0">
              <li className="nav-item items-center justify-center">
                <a className="nav-link active" aria-current="page" href="#">
                  Sign In <i class="fa-solid fa-circle-user fs-4"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Rewards <i class="fa-solid fa-trophy fs-5"></i>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active dropdown-toggle dropstart"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-bars fs-4 "></i>
                </a>
                {/* humber menu dropdown  */}

                <ul className="dropdown-menu humberger_menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-sharp fa-solid fa-gear"></i> Setting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-lock"></i> Safe Search
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-clock"></i> Search History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-shield-halved"></i> Privacy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-comment"></i> Feedback
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i class="fa-solid fa-house"></i> Customize your home page
                    </a>
                  </li>

                  <li className="customize_radio">
                    <a className="dropdown-item" href="#">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Show menu bar
                      </label>
                      <span class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </span>
                    </a>
                  </li>

                  <li className="customize_radio">
                    <a className="dropdown-item" href="#">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Show news and intrest
                      </label>
                      <span class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked
                        />
                      </span>
                    </a>
                  </li>

                  <li className="customize_radio">
                    <a className="dropdown-item" href="#">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Show homepage image
                      </label>
                      <span class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked
                        />
                      </span>
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <p>
                      Privacy and Cookies• Legal• Advertise• About our ads• Help
                      © 2023 Microsoft
                    </p>
                  </li>
                </ul>

                {/* humber menu dropdown end  */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
