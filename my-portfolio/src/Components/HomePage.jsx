import React from "react";
// import sr from './Scroolo'
import ScrollReveal from "scrollreveal";
import "ui-neumorphism/dist/index.css";
import "../App.css";

import {
  Card,
  CardContent,
  Divider,
  Subtitle2,
  H6,
  Body2,
  overrideThemeVariables,
  Button,
  CardMedia,
  TextField,
  TextArea,
  Switch,
  H3,
  Alert,
  Tooltip,
  CardAction,
} from "ui-neumorphism";
import ContactPage from "./ContactPage";
import DemoContact from "./DemoContact";
const HomePage = () => {
  const [menu, setMenu] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [flag,setFlag] = React.useState(false)
  /*===== MENU SHOW =====*/
  // const showMenu = (toggleId, navId) => {
  //   const toggle = document.getElementById(toggleId),
  //     nav = document.getElementById(navId);

  //   if (toggle && nav) {
  //     toggle.addEventListener("click", () => {
  //       nav.classList.toggle("show");
  //     });
  //   }
  // };
  // showMenu("nav-toggle", "nav-menu");

  React.useEffect(() => {
    if(flag)
      ScrollReveal().destroy();
    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      /*Active link*/
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      /*Remove menu mobile*/
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });

    /*SCROLL HOME*/
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });

    /*SCROLL ABOUT*/
    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 400 });
    sr.reveal(".about__text", { delay: 400 });

    /*SCROLL SKILLS*/
    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 600 });

    /*SCROLL WORK*/
    sr.reveal(".work__img ", { interval: 400 });

    /*SCROLL CONTACT*/
    sr.reveal(".contact__input", { interval: 200 });
    setFlag(!flag)
  }, []);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }
  const changeTheme = () => {
    console.log(dark);
    dark
      ? overrideThemeVariables({
          "--light-bg": "#E9B7B9",
          "--light-bg-dark-shadow": "#ba9294",
          "--light-bg-light-shadow": "#ffdcde",
          "--dark-bg": "#292E35",
          "--dark-bg-dark-shadow": "#21252a",
          "--dark-bg-light-shadow": "#313740",
          "--primary": "#8672FB",
          "--primary-dark": "#4526f9",
          "--primary-light": "#c7befd",
        })
      : overrideThemeVariables({
          "--light-bg": "rgb(81,85,104)",
          "--light-bg-dark-shadow": "#21252a",
          "--light-bg-light-shadow": "rgb(93,98,120)",
          "--dark-bg": "#292E35",
          "--dark-bg-dark-shadow": "#21252a",
          "--dark-bg-light-shadow": "#313740",
          "--primary": "#8672FB",
          "--primary-dark": "#4526f9",
          "--primary-light": "#4526f9",
        });

    setDark(!dark);
    if (menu) {
      setMenu(false);
    }
  };
  return (
    <>
      <Card>
        {/* <CardContent> */}

        <header class="l-header">
          <nav class="nav bd-grid">
            <div>
              <a href="#" class="nav__logo" onClick={refreshPage}>
                Siddharth
              </a>
            </div>
            {/* <Alert type="info">
              Click On Siddharth to get enlighten again
            </Alert> */}
            <div
              className={menu ? "nav__menu show" : "nav__menu"}
              id="nav-menu"
            >
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#home" class="nav__link active">
                    Home
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#about" class="nav__link">
                    About
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#skills" class="nav__link">
                    Skills
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#work" class="nav__link">
                    Work
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#contact" class="nav__link">
                    Contact
                  </a>
                </li>
                <li class="nav__item tooltip">
                  {
                    <span class="tooltiptext">
                      {dark
                        ? "Click on Siddharth to enlighten again"
                        : "Change Theme"}
                    </span>
                  }
                  <Switch onClick={changeTheme} color="var(--error)" />
                </li>
              </ul>
            </div>

            <div class="nav__toggle " id="nav-toggle">
              <i class="bx bx-menu" onClick={() => setMenu(!menu)}></i>
            </div>
          </nav>
          <Divider />
        </header>

        <main class="l-main">
          {/* <!--===== HOME =====--> */}
          <section class="home bd-grid" id="home">
            <div class="home__data">
              <h1 class="home__title">
                Hi,
                <br />
                I'am <span class="home__title-color">Siddharth</span>
                <br /> Full Stack Developer
              </h1>
              {/* <Button className="button" color='#ccc' bgColor='var(--primary)'>colored</Button> */}
              <a
                href="https://drive.google.com/file/d/1U5DURzXGaSS_ktUgRLmD0n8AtVJbRRJT/view"
                class="button"
              >
                Get CV
              </a>
            </div>

            <div class="home__social">
              <a
                href="https://www.linkedin.com/in/prabhu-siddharth97"
                class="home__social-icon"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://prabhu-sid97.medium.com/"
                class="home__social-icon"
              >
                <i class="bx bxl-medium"></i>
              </a>
              <a
                href="https://github.com/Siddharth308"
                class="home__social-icon"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <Card className="home__img ">
              <img
                className="home__img__photo "
                src="img/sid-black.jpg"
                alt="profilr"
              />
            </Card>
          </section>

          {/* <!--===== ABOUT =====--> */}
          <section class="about section " id="about">
            <h2 class="section-title">About</h2>

            <div class="about__container bd-grid">
              <div class="about__img work__img ">
                <img src="img/siddharth.jpg" alt="" />
              </div>

              <div>
                <h2 class="about__subtitle">I'am Prabhu Siddharth</h2>
                <p class="about__text">
                  Passionate about competitive programming currently final year
                  student pursuing MCA in LPU. Good understand in DATA
                  STRUCTURE,DATABASE and OOPS.i have done certification from
                  coursera in data structure , algorithms and SQL programming. i
                  have secured 8.34/10 in my first year of mca.My Project links
                  are bellow hosted in aws and heroku.{" "}
                </p>
              </div>
            </div>
          </section>

          {/* <!--===== SKILLS =====--> */}
          <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>
            <Card className="skill__box">
              <h2 class="skills__subtitle">Profesional Skills</h2>
              <p class="skills__text">
                {" "}
                aspiring software engineer good knowledge in data structure and
                algorithms , sql programming , c , c++ , java , database . I
                have also basic understanding in web technologies htlm , css ,
                javascript.{" "}
              </p>
              <div class="skills__container ">
                <div class="work__container skill-grid">
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="tabler:brand-javascript"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:react"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "35%" }}
                        class="iconify"
                        data-icon="logos:mongodb"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card
                    style={{ padding: "8px", color: "#4070F4" }}
                    className="skill-card"
                  >
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="simple-icons:mysql"
                        data-inline="false"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "35%" }}
                        class="iconify"
                        data-icon="logos:express"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "25%" }}
                        class="iconify"
                        data-icon="logos:git"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "25%" }}
                        class="iconify"
                        data-icon="logos:nodejs"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-css"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-html"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card ">
                    <div class="CardMedia ">
                      <span
                        class="iconify"
                        data-icon="logos:bootstrap"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                </div>
              </div>

              {/*............ Tools I use ..........................*/}

              <H3
                class="skills__subtitle"
                style={{ margin: "20px 0", textAlign: "center" }}
              >
                Tools I use
              </H3>

              <div class="skills__container2 ">
                <div class="work__container skill-grid">
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:postman"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-vscode"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:slack-icon"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </section>

          {/* <!--===== WORK =====--> */}
          <section class="work section" id="work">
            <h2 class="section-title">Projects</h2>

            <div class="work__container bd-grid">
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a href="https://github.com/rishi7pillai/Auto-Suggestion-Application-of-TRIE-">
                    <img src="img/reddit.png" alt="" />
                    <H6>Reddit Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                      Number 1
                    </Subtitle2>
                    <Body2>
                      Radhanagar Beach <br />
                      Havock Island, Andaman
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a href="https://github.com/Vishal643/delta">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>
                    <Button text color="var(--primary)" disabled>
                      Explore
                    </Button>
                    {/* <a href="https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/">
                     
                    </a> */}
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a href="https://rishi7pillai.github.io/TwitterSchedular/">
                    <img src="img/al-jajeera2.png" alt="" />
                    <H6>Aljazeera Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                      Number 1
                    </Subtitle2>
                    <Body2>
                      Radhanagar Beach <br />
                      Havock Island, Andaman
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a href="https://github.com/rohanranjan25061996/hexane-aljeera-clone">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>

                    <a href="https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/">
                      <Button text color="var(--primary)">
                        Explore
                      </Button>
                    </a>
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a href="https://github.com/SmithRakesh/Beryllium">
                    <img src="img/timecamp.png" alt="" />
                    <H6>Timecamp Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                      Number 1
                    </Subtitle2>
                    <Body2>
                      Radhanagar Beach <br />
                      Havock Island, Andaman
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a href="https://github.com/SmithRakesh/Beryllium">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>
                    <Button text color="var(--primary)" disabled>
                      Explore
                    </Button>
                    {/* <a href="https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/">
                     
                    </a> */}
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a href="https://rishi7pillai.github.io/TataHome/">
                    <img src="img/work3.jpg" alt="" />
                    <H6>Auto-Suggestion-Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                      Number 1
                    </Subtitle2>
                    <Body2>
                      Radhanagar Beach <br />
                      Havock Island, Andaman
                    </Body2>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>

          <section class="work section" id="work">
            <h2 class="section-title">Profiency</h2>

            <div class="work__container bd-grid">
              <Card inset className="Proficiency">
                <img src="assets/img/work4.jpg" alt="" />
                <H3> 1200+ </H3>
                <Body2>Hours Of Coding</Body2>
              </Card>
              <Card inset className="proficiency">
                <img src="assets/img/work4.jpg" alt="" />
                <H3> 300+ </H3>
                <Body2>Hours Of Data Structure</Body2>
              </Card>
              <Card inset className="proficiency">
                <img src="assets/img/work4.jpg" alt="" />
                <H3> 100+ </H3>
                <Body2>Hours Of Softskills</Body2>
              </Card>
            </div>
          </section>
          {/* =====Git ======= */}

          <Card style={{ padding: "8px" }} className="skill__box ">
            {dark ? (
              <img src="img/github-dark.png" alt="git" />
            ) : (
              <img src="img/git-light.png" alt="git" />
            )}
          </Card>
          {/* <!--===== CONTACT =====--> */}
          {/* <ContactPage/> */}
          <DemoContact />
        </main>

        {/* <!--===== FOOTER =====--> */}
        <footer class="footer">
          <p class="footer__title">Prabhu</p>
          <div class="footer__social">
            <a
              href="https://www.facebook.com/profile.php?id=100034263770718"
              class="footer__icon"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.hackerrank.com/hrushikeshpolla2?hr_r=1"
              class="footer__icon"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://twitter.com/lordd_buddha" class="footer__icon">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
          <p>&#169; 2020 copyright all right reserved</p>
        </footer>
        {/* </CardContent> */}
      </Card>
    </>
  );
};

export default HomePage;
