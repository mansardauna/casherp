function footerComponent() {
  return {
    footerHtml: `
            <footer class="footer">
                <div class="container text-grey-4 text-xs">
                    <div class="d-md-flex d-grid justify-content-between">
                        <div class="col-lg-4 col-md-5">
                            <img src="./assets/images/casherp logo.svg" alt="logo" class="">
                            <p class="body-small-font-size my-4 text-white">An All-In-One tools to manage people, projects,
                                and
                                everything
                                in between. Invoicing,
                                Purchasing, HRM, CRM, Project, Manufacturing & POS</p>
                            <div class="social-icons">
                                <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="d-flex col-md-6 col-12 justify-content-between">
                            <div class="">
                                <span class="">Features</span>
                                <ul class="list-unstyled body-small-font-size">
                                    <li><a href="#">Accounting</a></li>
                                    <li><a href="#">Invoicing</a></li>
                                    <li><a href="#">Purchase Management</a></li>
                                    <li><a href="#">Recruitment Management</a></li>
                                    <li><a href="#">Assets Management</a></li>
                                    <li><a href="#">Fleet Management</a></li>
                                    <li><a href="#">File Sharing</a></li>
                                    <li><a href="#">Advisors</a></li>
                                </ul>
                            </div>
                            <div class="">
                                <span class="">Casherp</span>
                                <ul class="list-unstyled body-small-font-size">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div class="">
                                <span class="">Quick Links</span>
                                <ul class="list-unstyled body-small-font-size">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">How support works</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="row body-small-font-size">
                        <div class="col-md-6 text-center text-md-start  mb-3 mb-md-0">
                            <p class="mb-0 text-white">&copy; 2024 Casherp</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mx-2"><a href="#">Terms of Use</a></li>
                                <li class="list-inline-item mx-2"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `,
  };
}
