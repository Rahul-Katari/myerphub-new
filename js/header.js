const headerHTML = `
<header>
    <!-- Top Bar -->
    <div class="bg-gray-100 text-sm py-2 px-4 md:flex hidden justify-between items-center">
        <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
                <a href="tel:9395191219" class="text-black hover:underline font-semibold"><i
                        class="fas fa-phone pe-2"></i>+91 9395191219</a>
            </div>
            <div class="flex items-center space-x-1">
                <a href="mailto:info@myerphub.com" class="text-black hover:underline font-semibold"><i
                        class="fas fa-envelope pe-2"></i>info@myerphub.com</a>
            </div>
        </div>
        <div class="space-x-6">
            <a href="./about.html" class="text-black hover:underline font-semibold">About Us</a>
            <a href="tel:9395191219" class="text-black hover:underline font-semibold">Support</a>
        </div>
    </div>

    <!-- Main Navbar -->
    <div class="flex items-center justify-between md:px-4 max-sm:pe-4 py-2 border-b">
        <!-- Logo -->
        <a href="/">
            <img src="./img/logo.png" alt="MyERP Hub Logo" class="h-16" />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8 text-lg flex-wrap justify-center md:justify-start">
            <a href="./course.html" class="hover:text-blue-600 font-semibold">Courses</a>
            <a href="https://www.google.com/maps/place/SAP+FICO+Training+%26+Placement/@17.4974233,78.3974909,841m/data=!3m1!1e3!4m8!3m7!1s0x3bcb91bf7409c79b:0x6273beac5f3270e9!8m2!3d17.4974233!4d78.3974909!9m1!1b1!16s%2Fg%2F11tcxl_mp_?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank" class="hover:text-blue-600 font-semibold">Our Reviews</a>
            <a href="./blogs.html" class="hover:text-blue-600 font-semibold">Blogs</a>
            <a href="./contact.html" class="hover:text-blue-600 font-semibold">Contact Us</a>
        </div>

        <!-- Hamburger Menu for Mobile -->
        <button id="mobile-menu-button" class="md:hidden text-gray-600 focus:outline-none">
            <i class="fas fa-bars text-2xl"></i>
        </button>
    </div>

    <!-- Off-Canvas Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-gray-800 bg-opacity-90 text-white hidden z-50">
        <div class="absolute top-0 right-0 w-3/4 max-w-sm bg-white text-gray-800 h-full shadow-lg">
            <button id="close-mobile-menu" class="absolute top-4 right-4 text-gray-600">
                <i class="fas fa-times text-2xl"></i>
            </button>
            <nav class="flex flex-col space-y-6 mt-16 px-6">
                <a href="./course.html" class="hover:text-blue-600 font-semibold">Courses</a>
                <a href="https://www.google.com/maps/place/SAP+FICO+Training+%26+Placement/@17.4974233,78.3974909,841m/data=!3m1!1e3!4m8!3m7!1s0x3bcb91bf7409c79b:0x6273beac5f3270e9!8m2!3d17.4974233!4d78.3974909!9m1!1b1!16s%2Fg%2F11tcxl_mp_?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" class="hover:text-blue-600 font-semibold">Our Reviews</a>
                <a href="./blogs.html" class="hover:text-blue-600 font-semibold">Blogs</a>
                <a href="./contact.html" class="hover:text-blue-600 font-semibold">Contact Us</a>
                <a href="./about.html" class="hover:text-blue-600 font-semibold">About Us</a>
                <a href="tel:9395191219" class="hover:text-blue-600 font-semibold">Support</a>
            </nav>
        </div>
    </div>
</header>
`;

document.getElementById('header').innerHTML = headerHTML;

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});
