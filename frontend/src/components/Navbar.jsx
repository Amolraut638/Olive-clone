import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <h2 className="logo">Olive</h2>
      </div>

      {/* MOBILE ICON */}
      <div className="mobile-toggle" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </div>

      {/* CENTER */}
      <div className={`nav-center ${open ? "show" : ""}`}>

        {/* SOLUTIONS */}
        <div className="nav-item" onClick={() => toggleDropdown("solutions")}>
          <span>Solutions</span>
          <ChevronDown size={16} />

          {/* DESKTOP */}
          <div className="dropdown desktop-only">
            <div className="dropdown-grid">

              <div className="drop-item">
                <h4>Allergy Scanning</h4>
                <p>Reveal hidden ingredients</p>
              </div>

              <div className="drop-item">
                <h4>Gluten Free</h4>
                <p>Detect gluten instantly</p>
              </div>

              <div className="drop-item">
                <h4>Dairy & Lactose</h4>
                <p>Find dairy ingredients</p>
              </div>

              <div className="drop-item">
                <h4>Ingredient Checking</h4>
                <p>Understand labels easily</p>
              </div>

              <div className="drop-item">
                <h4>Nutrition Insights</h4>
                <p>Get expert-backed data</p>
              </div>

              <div className="drop-item">
                <h4>Food Ratings</h4>
                <p>Score products instantly</p>
              </div>

            </div>
          </div>

          {/* MOBILE */}
          {mobileDropdown === "solutions" && (
            <div className="mobile-dropdown">
              <h3>Solutions</h3>

              {[
                "Allergy Scanning",
                "Gluten Free",
                "Dairy & Lactose",
                "Ingredient Checking",
                "Nutrition Insights",
                "Food Ratings",
              ].map((item, i) => (
                <div key={i} className="mobile-item">
                  <div>
                    <h4>{item}</h4>
                    <p>Learn more about {item.toLowerCase()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="nav-item">Features</div>
        <div className="nav-item">Pricing</div>

        {/* BLOG */}
        <div className="nav-item" onClick={() => toggleDropdown("blog")}>
          <span>Blog</span>
          <ChevronDown size={16} />

          <div className="dropdown blog desktop-only">
            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" />
              <p>Modern-Day Miracle</p>
            </div>

            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
              <p>Eggs Comparison</p>
            </div>

            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443" />
              <p>Healthy Snacks Guide</p>
            </div>
          </div>

          {mobileDropdown === "blog" && (
            <div className="mobile-dropdown">
              <h3>Blog</h3>
              <div className="mobile-item">
                <h4>Modern-Day Miracle</h4>
              </div>
              <div className="mobile-item">
                <h4>Eggs Comparison</h4>
              </div>
              <div className="mobile-item">
                <h4>Healthy Snacks Guide</h4>
              </div>
            </div>
          )}
        </div>

        <div className="nav-item">Restaurants</div>

        {/* FOOD */}
        <div className="nav-item" onClick={() => toggleDropdown("food")}>
          <span>Food</span>
          <ChevronDown size={16} />

          <div className="dropdown food desktop-only">
            <div className="food-grid">
              <span>Breakfast Cereals</span>
              <span>Sauces</span>
              <span>Snacks Salty</span>
              <span>Snacks Sweet</span>
              <span>Ice Cream</span>
              <span>Baby Food</span>
              <span>Beverages</span>
              <span>Organic Foods</span>
            </div>
          </div>

          {mobileDropdown === "food" && (
            <div className="mobile-dropdown">
              <h3>Food</h3>
              <div className="food-grid mobile-food">
                <span>Breakfast Cereals</span>
                <span>Sauces</span>
                <span>Snacks Salty</span>
                <span>Snacks Sweet</span>
                <span>Ice Cream</span>
                <span>Baby Food</span>
                <span>Beverages</span>
                <span>Organic Foods</span>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE EXTRA */}
        <div className="mobile-extra">
          <span className="signin">Sign in</span>
          <button className="btn">
            Get Olive <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <span className="signin">Sign in</span>
        <button className="btn">
          Get Olive <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
}