import "font-awesome/css/font-awesome.min.css";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <p>Reach out to us</p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; UAPB GSTEM</div>
      </div>
    </div>
  );
}

export default AppFooter;
