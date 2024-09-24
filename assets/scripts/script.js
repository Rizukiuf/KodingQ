// DROP DOWN MENU
// Get dropdown button and dropdown menu content
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

// Toggle dropdown menu when the hamburger icon is clicked
dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown menu when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropdown-btn, .dropdown-btn *')) {
    dropdownContent.classList.remove("show");
  }
});



// HERO SLIDER
let currentSlide = 0;
let autoSlideInterval;

const heroSlides = [
  {
    title: "Persiapkan Karirmu di Bidang IT Bersama KodingQ",
    description: "KodingQ adalah platform kursus IT dan komunitas programmer. Kami menyediakan berbagai kursus pemrograman, seperti Web Development, Mobile Development, dan Machine Learning. Kursus kami dirancang oleh para ahli di bidangnya dan disusun secara sistematis. Kami juga menyediakan berbagai event dan challenge untuk mengasah kemampuan pemrograman Anda.",
    image: "assets/images/programmer-amico.svg",
    alt: "hero",
  },
  {
    title: "Tingkatkan Skill Pemrogramanmu Bersama KodingQ",
    description: "Bergabunglah dalam kursus intensif yang mengajarkan pemrograman mulai dari dasar hingga mahir. Dengan bimbingan para mentor ahli, Anda dapat mempercepat karir di dunia teknologi.",
    image: "assets/images/skill-pana.svg",
    alt: "learning",
  },
  {
    title: "Dapatkan Pengalaman Nyata Melalui Challenge di KodingQ",
    description: "KodingQ memberikan berbagai challenge yang menarik untuk meningkatkan keterampilan pemrograman Anda. Tantang diri Anda dengan coding problems dan dapatkan reward menarik.",
    image: "assets/images/activity-amico.svg",
    alt: "challenge",
  }
];

const heroList = document.getElementById("hero-list");
const sliderDots = document.getElementById("slider-dots");

// Generate slides and dots secara dinamis
heroSlides.forEach((slide, index) => {
  // Create hero slide item
  const heroItem = document.createElement("div");
  heroItem.classList.add("hero-item");
  heroItem.innerHTML = `
    <div class="hero-desc">
      <h1>${slide.title}</h1>
      <p>${slide.description}</p>
      <button class="btn">Lebih Lanjut</button>
    </div>
    <img src="${slide.image}" alt="${slide.alt}" class="hero-image" />
  `;
  heroList.appendChild(heroItem);

  // Create dot for each slide
  const dot = document.createElement("span");
  dot.setAttribute("onclick", `setCurrentSlide(${index})`);
  sliderDots.appendChild(dot);
});

// Inisialisasi display slide pertama
showSlides(currentSlide);

// Menampilkan slide berdasarkan index
function showSlides(n) {
  const slides = document.getElementsByClassName("hero-item");
  const dots = document.getElementsByTagName("span");

  // Reset semua slide dan dot menjadi hidden dan inactive
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Menampilkan slide dan dot yang sedang aktif
  slides[n].style.display = "flex";
  dots[n].className += " active";
}

// Menggeser slide ke kiri atau kanan
function plusSlides(n) {
  currentSlide += n;
  if (currentSlide >= heroSlides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = heroSlides.length - 1;
  showSlides(currentSlide);
}

// Set slide saat ini berdasarkan index
function setCurrentSlide(n) {
  currentSlide = n;
  showSlides(currentSlide);
}

// Auto slide setiap 5 detik
function autoSlide() {
  plusSlides(1);
}

// Mulai auto slide ketika halaman dimuat
autoSlideInterval = setInterval(autoSlide, 5000);



// COURSES
// JSON untuk data courses
const courses = [
	{
		title: "Belajar Dasar Pemrograman Web",
		image: "assets/images/course/web.jpg",
		alt: "web development",
		description: "Belajar dasar-dasar pemrograman web dengan HTML, CSS, dan JavaScript.",
		category: "web",
		difficulty: "Pemula",
		enrolled: true,
		students: 1200,
		rating: 4.5,
		url: "#"
	},
	{
		title: "Belajar Dasar Pemrograman Python",
		image: "assets/images/course/ml.jpg",
		alt: "python",
		description: "Belajar dasar-dasar pemrograman Python untuk pemula.",
		category: "machine learning",
		difficulty: "Pemula",
		enrolled: false,
		students: 900,
		rating: 4.7,
		url: "#"
	},
	{
		title: "Belajar Dasar Pemrograman Java",
		image: "assets/images/course/mobile.jpg",
		alt: "java",
		description: "Belajar dasar-dasar pemrograman Java untuk pemula.",
		category: "mobile",
		difficulty: "Pemula",
		enrolled: false,
		students: 800,
		rating: 4.6,
		url: "#"
	},
	{
		title: "Belajar Dasar Pemrograman JavaScript",
		image: "assets/images/course/web.jpg",
		alt: "javascript",
		description: "Belajar dasar-dasar pemrograman JavaScript untuk pemula.",
		category: "web",
		difficulty: "Pemula",
		enrolled: false,
		students: 1000,
		rating: 4.6,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Backend",
		image: "assets/images/course/be.jpg",
		alt: "backend",
		description: "Belajar membuat aplikasi backend menggunakan Node.js, Express, dan MongoDB.",
		category: "web",
		difficulty: "Menengah",
		enrolled: false,
		students: 500,
		rating: 4.8,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Frontend",
		image: "assets/images/course/fe.jpg",
		alt: "frontend",
		description: "Belajar membuat aplikasi frontend menggunakan React.",
		category: "web",
		difficulty: "Menengah",
		enrolled: false,
		students: 600,
		rating: 4.7,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Full Stack",
		image: "assets/images/course/fs.jpg",
		alt: "fullstack",
		description: "Belajar membuat aplikasi full stack menggunakan Node.js, Express, React, dan MongoDB.",
		category: "web",
		difficulty: "Menengah",
		enrolled: true,
		students: 400,
		rating: 4.9,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Mobile Android",
		image: "assets/images/course/mobile.jpg",
		alt: "android",
		description: "Belajar membuat aplikasi mobile Android menggunakan Java dan Android Studio.",
		category: "mobile",
		difficulty: "Menengah",
		enrolled: false,
		students: 300,
		rating: 4.8,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Mobile iOS",
		image: "assets/images/course/mobile.jpg",
		alt: "ios",
		description: "Belajar membuat aplikasi mobile iOS menggunakan Swift dan Xcode.",
		category: "mobile",
		difficulty: "Menengah",
		enrolled: false,
		students: 200,
		rating: 4.7,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Machine Learning",
		image: "assets/images/course/ml.jpg",
		alt: "machine learning",
		description: "Belajar membuat aplikasi machine learning menggunakan Python dan library machine learning.",
		category: "machine learning",
		difficulty: "Menengah",
		enrolled: true,
		students: 100,
		rating: 4.9,
		url: "#"
	},
	{
		title: "Belajar Membuat Aplikasi Cloud",
		image: "assets/images/course/cloud.jpg",
		alt: "cloud",
		description: "Belajar membuat aplikasi cloud menggunakan layanan cloud dan teknologi terkait.",
		category: "cloud",
		difficulty: "Menengah",
		enrolled: false,
		students: 50,
		rating: 4.8,
		url: "#"
	},
	{
		title: "Belajar Dasar AI",
		image: "assets/images/course/ai.jpg",
		alt: "ai",
		description: "Belajar dasar-dasar Artificial Intelligence dan penerapannya.",
		category: "machine learning",
		difficulty: "Pemula",
		enrolled: false,
		students: 150,
		rating: 4.7,
		url: "#"
	}
];


// Variables untuk pagination
let currentPage = 1;
const itemsPerPage = 6; // Ubah nilai ini untuk mengatur jumlah item per halaman

// State untuk sorting, searching, dan filtering
let currentSort = "rating";
let currentSearch = "";
let currentFilter = "all";

// Generate options untuk filter berdasarkan kategori dari data courses
const filterSelectCategory = document.getElementById("filter-select-category");
const categories = [...new Set(courses.map(course => course.category))];

categories.forEach(category => {
	const option = document.createElement("option");
	option.value = category;
	option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
	filterSelectCategory.appendChild(option);
});


// Function untuk generate rating stars
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

// Function untuk menampilkan courses dengan pagination
function displayCourses(filteredCourses) {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Hapus semua elemen

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesToDisplay = filteredCourses.slice(startIndex, endIndex);

  coursesToDisplay.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item", "card");
    courseItem.style.cursor = "pointer";

    // Setiap card bisa diklik
    courseItem.onclick = () => {
      window.location.href = course.url;
    };

    const enrollStatus = course.enrolled ? `<button class="btn" disabled>Enrolled</button>` : `<button class="btn">Daftar</button>`;
    
    courseItem.innerHTML = `
      <img src="${course.image}" alt="${course.alt}" class="featured-image" />
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Level:</strong> ${course.difficulty}</p>
      <p><strong>Enrolled:</strong> ${course.students} students</p>
      <p><strong>Rating:</strong> ${generateStars(course.rating)} ${course.rating}</p>
      ${enrollStatus}
    `;

    courseList.appendChild(courseItem);
  });

  // Update info pagination
  document.getElementById("page-info").innerText = `Page ${currentPage} of ${Math.ceil(filteredCourses.length / itemsPerPage)}`;
}

// Function untuk sorting courses
function sortCourses(courses, sortType) {
  if (sortType === "rating") {
    return courses.sort((a, b) => b.rating - a.rating);
  } else if (sortType === "students") {
    return courses.sort((a, b) => b.students - a.students);
  }
  return courses;
}

// Function untuk filtering dan searching courses
function filterAndSearchCourses() {
  let filteredCourses = courses;

  if (currentFilter !== "all") {
    filteredCourses = filteredCourses.filter(course => course.category === currentFilter);
  }

  if (currentSearch !== "") {
    filteredCourses = filteredCourses.filter(course => {
      return course.title.toLowerCase().includes(currentSearch) || course.description.toLowerCase().includes(currentSearch);
    });
  }

  // Mengurutkan hasil filter dan search berdasarkan setting sort
  return sortCourses(filteredCourses, currentSort);
}

// Kontrol pagination
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayCourses(filterAndSearchCourses());
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  const totalItems = filterAndSearchCourses().length;
  if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
    currentPage++;
    displayCourses(filterAndSearchCourses());
  }
});

// Event listener untuk filter, search, dan sort
document.getElementById("search-input-course").addEventListener("input", function() {
  currentSearch = this.value.toLowerCase();
  currentPage = 1; // Reset ke halaman pertama saat search
  displayCourses(filterAndSearchCourses());
});

document.getElementById("filter-select-category").addEventListener("change", function() {
  currentFilter = this.value;
  currentPage = 1; // Reset ke halaman pertama saat filter
  displayCourses(filterAndSearchCourses());
});

document.getElementById("sort-select").addEventListener("change", function() {
  currentSort = this.value;
  displayCourses(filterAndSearchCourses());
});

// Inisialisasi menampilkan courses
displayCourses(filterAndSearchCourses());



// PROGRAMS
// JSON untuk data program
const programs = [
	{
		title: "Front End Developer",
		image: "assets/images/program/fe.jpg",
		alt: "front end developer",
		description: "Front End Developer bertanggung jawab dalam mengembangkan tampilan website. Menguasai HTML, CSS, dan JavaScript."
	},
	{
		title: "Back-End Developer",
		image: "assets/images/program/be.jpg",
		alt: "back end developer",
		description: "Back-End Developer bertanggung jawab mengembangkan sisi server dari website. Menguasai bahasa pemrograman server-side."
	},
	{
		title: "Mobile Developer",
		image: "assets/images/program/md.jpg",
		alt: "mobile developer",
		description: "Mobile Developer bertanggung jawab mengembangkan aplikasi mobile. Menguasai pengembangan aplikasi untuk platform Android dan iOS."
	},
	{
		title: "Machine Learning Engineer",
		image: "assets/images/program/ml.jpg",
		alt: "machine learning engineer",
		description: "Machine Learning Engineer bertanggung jawab mengembangkan algoritma dan model machine learning. Menguasai Python dan library machine learning."
	},
	{
		title: "Cloud Engineer",
		image: "assets/images/program/ce.jpg",
		alt: "cloud engineer",
		description: "Cloud Engineer bertanggung jawab mengelola infrastruktur cloud. Menguasai layanan cloud dan teknologi terkait."
	},
	{
		title: "Cyber Security Specialist",
		image: "assets/images/program/cs.jpg",
		alt: "cyber security specialist",
		description: "Cyber Security Specialist bertanggung jawab melindungi sistem informasi dari serangan cyber. Menguasai teknik keamanan informasi."
	},
	{
		title: "Data Scientist",
		image: "assets/images/program/ds.jpg",
		alt: "data scientist",
		description: "Data Scientist bertanggung jawab melakukan analisis data. Menguasai Python, R, dan teknik analisis data."
	},
	{
		title: "DevOps Engineer",
		image: "assets/images/program/devops.jpg",
		alt: "devops engineer",
		description: "DevOps Engineer bertanggung jawab dalam proses development dan operasi. Menguasai otomatisasi, deployment, dan monitoring."
	},
	{
		title: "UI/UX Designer",
		image: "assets/images/program/uiux.jpg",
		alt: "ui/ux designer",
		description: "UI/UX Designer bertanggung jawab dalam merancang tampilan website. Menguasai User Interface (UI) dan User Experience (UX)."
	},
	{
		title: "Digital Marketing Specialist",
		image: "assets/images/program/dm.jpg",
		alt: "digital marketing specialist",
		description: "Digital Marketing Specialist bertanggung jawab dalam strategi pemasaran digital. Menguasai SEO, SEM, dan social media marketing."
	},
];

// Function untuk menampilkan program
function displayPrograms(programsToDisplay) {
  const programList = document.getElementById("program-list");
  programList.innerHTML = ""; // Hapus semua elemen
  
  programsToDisplay.forEach(program => {
    const programItem = document.createElement("section");
    programItem.classList.add("program-item", "card");

    programItem.innerHTML = `
      <h3>${program.title}</h3>
      <img src="${program.image}" alt="${program.alt}" class="featured-image" />
      <p>${program.description}</p>
    `;
    
    programList.appendChild(programItem);
  });
}

// Inisialisasi menampilkan semua program
displayPrograms(programs);

// Event listener untuk input search
document.getElementById("search-input-program").addEventListener("input", function() {
  const searchQuery = this.value.toLowerCase();
  
  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery) ||
    program.description.toLowerCase().includes(searchQuery)
  );
  
  displayPrograms(filteredPrograms);
});