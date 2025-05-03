const headerHTML = `<div class="border-bottom text-white py-3 pe-md-4 pe-3 px-3 ps-md-0 top-navbar">
        <div class="d-flex justify-content-between align-items-center gap-3">

            <!-- Left Section -->
            <div class="d-flex align-items-md-center gap-4 flex-md-row flex-column">
                <a href="https://maps.app.goo.gl/LAhZpv8omu58pLy79" target="_blank"
                    class="d-md-flex d-none align-items-center"><i
                        class="fa fa-map-marker-alt me-3 text-primary fs-3"></i>
                    <div> #60C, 2nd Floor, Near Arjun Theater, <br>
                        Western Hills, KPHB Hyderabad-72</div>
                </a>

                <!-- Contact Number -->
                <div class="d-flex align-items-center">
                    <i class="fas fa-phone-alt me-1 text-primary fs-4 me-2"></i>
                    <div>
                        <a class="d-flex align-items-center" href="tel:9395191219">
                            <span class="fw-bold">+91 9395191219</span>
                        </a>
                        
                    </div>
                </div>
            </div>

            <!-- Middle Section (Buttons with Blinking Text) -->
            <div class="d-flex gap-3 justify-content-center align-items-center topbtn">
                <a href="img/SAPFICOContent.pdf" class="btn btn-primary big-btn blink-text" target="_blank" download>
    Download Course Content Here
</a>
                <a href="https://youtu.be/ZRLNIkb8osc" class="btn btn-secondary big-btn blink-text" target="_blank">Recorded Demo</a>
            </div>

            <!-- Right Section (Social Icons) -->
            <div class="d-flex align-items-center">
                <div class="d-flex gap-2 social-icons">
                    <a href="https://www.youtube.com/@sapficohub" class=""><i class="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/sapficotrainingandplacementinhyderabad" target="_blank" class=""><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/99382837/admin/dashboard/" target="_blank" class=""><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/sapfico_hub/" target="_blank" class=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>

        </div>
        
    </div>
<!-- Middle Section (Buttons with Blinking Text) -->
            <div class=" gap-3 justify-content-center align-items-center topbtn1">
                <a href="img/SAPFICOContent.pdf" style="font-size: 1rem !important;" class="btn btn-primary big-btn blink-text" target="_blank" download>
    Download Course Content Here
</a>
                <a href="https://youtu.be/ZRLNIkb8osc" style="font-size: 1rem !important;" class="btn btn-secondary big-btn blink-text" target="_blank">Recorded Demo</a>
            </div>
    <!-- Floating Icons -->
    <div class="floating-icons">
        <!-- WhatsApp Icon -->
        <a href="https://wa.me/9395191219" class="whatsapp-icon" target="_blank" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <!-- Call Icon -->
        <a href="tel:9395191219" class="call-icon" aria-label="Call">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>`;

document.getElementById('topHeader').innerHTML = headerHTML;
