import Navbar from "../../Layout/NavBar";
import "./About.css";

const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", img: "/image 47.png" },
  { name: "Emma Watson", role: "Managing Director", img: "/image 46.png" },
  { name: "Will Smith", role: "Product Designer", img: "/image 51.png" },
];

const stats = [
  { icon: "/icon_shop.png", value: "10.5k", label: "Sallers active our site", highlight: false },
  { icon: "/Services.png", value: "33k", label: "Mopnthly Produduct Sale", highlight: true },
  { icon: "/Icon-Shopping bag.png", value: "45.5k", label: "Customer active in our site", highlight: false },
  { icon: "/Services (1).png", value: "25k", label: "Anual gross sale in our site", highlight: false },
];

const features = [
  { icon: "/Services (2).png", title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
  { icon: "/Services (3).png", title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
  { icon: "/Services (4).png", title: "MONEY BACK GUARANTEE", desc: "We reurn money within 30 days" },
];

function About() {
  return (
    <>
      

      <div className="about-page">
        <div className="container">

          <p className="breadcrumb-text">
            Home / <span>About</span>
          </p>

          <div className="row align-items-center our-story-section">

            <div className="col-lg-6">
              <h1 className="story-title">Our Story</h1>

              <p className="story-text">
                Launced in 2015, Exclusive is South Asia's premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and
                service solutions, Exclusive has 10,500 sallers and 300
                brands and serves 3 millioons customers across the region.
              </p>

              <p className="story-text">
                Exclusive has more than 1 Million products to offer, growing
                at a very fast. Exclusive offers a diverse assotment in
                categories ranging from consumer.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).png"
                alt="our story"
                className="story-image"
              />
            </div>

          </div>

          <div className="row stats-section">
            {stats.map((stat, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div className={`stat-card ${stat.highlight ? "highlight" : ""}`}>
                  <div className="stat-icon">
                    <img src={stat.icon} alt="" />
                  </div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row team-section">
            {team.map((member, index) => (
              <div className="col-lg-4" key={index}>
                <div className="team-card">
                  <img src={member.img} alt={member.name} className="team-photo" />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <div className="team-socials">
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row features-section">
            {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default About;