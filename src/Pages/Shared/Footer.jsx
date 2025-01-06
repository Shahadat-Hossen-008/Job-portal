import icon from "../../assets/jobicon100.png"
function Footer() {
  return (
    <div className="w-11/12 mx-auto mb-10">
        <div className="divider"></div>
        <footer className="footer text-base-content p-10 font-lato">
      <aside>
        <img src={icon} className="w-[60px]"/>
        <h2 className="font-poppins text-2xl text-gray-500">
          Job Portal
        </h2>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    <div className="divider"></div>
    </div>

  );
}

export default Footer;
