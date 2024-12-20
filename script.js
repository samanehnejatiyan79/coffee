document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll("#categories li");
    const contentContainer = document.getElementById("content");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalBtn = document.querySelector(".close-btn");

    // انتخاب لوگو و پنجره آدرس
    const logo = document.querySelector(".logo_LA img");
    const addressModal = document.getElementById("address-modal");
    const closeAddressModalBtn = addressModal.querySelector(".close-btn");

    const menuData = {
        "cold-coffee": [
            { 
                name: "آیس لاته", 
                description: "قهوه سرد به همراه شیر", 
                price: "85,000 تومان", 
                image: "./assets/latte.png",
                nutrition: "کالری: 150 | قند: 20 گرم"
            },
            { 
                name: "آیس آمریکانو", 
                description: "قهوه اسپرسو و یخ", 
                price: "80,000 تومان", 
                image: "./assets/americano.png",
                nutrition: "کالری: 10 | قند: 0 گرم"
            },
            { 
                name: "آیس موکا", 
                description: "قهوه سرد به همراه سس شکلات و شیر", 
                price: "98,000 تومان", 
                image: "./assets/moka.png",
                nutrition: "کالری: 200 | قند: 30 گرم"
            },
            { 
                name: "افوگاتو", 
                description: "قهوه سرد به همراه بستنی وانیل", 
                price: "92,000 تومان", 
                image: "./assets/afogato.png",
                nutrition: "کالری: 250 | قند: 35 گرم"
            }
        ]
    };

    function renderContent(category) {
        contentContainer.innerHTML = ""; // پاک کردن محتوای قبلی
        const items = menuData[category] || []; // دریافت آیتم‌ها بر اساس دسته‌بندی

        items.forEach(item => {
            const box = document.createElement("div");
            box.classList.add("drink-box");
            box.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p><strong>${item.price}</strong></p>
                </div>
            `;
            contentContainer.appendChild(box);

            // افزودن رویداد کلیک برای نمایش نیم‌پنجره
            box.addEventListener("click", () => {
                modal.style.display = "flex";
                modalTitle.innerText = item.name;
                modalDescription.innerText = item.nutrition;
            });
        });
    }

    // بستن پنجره با کلیک روی دکمه بستن
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // بستن پنجره با کلیک بیرون از آن
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // افزودن رویداد کلیک به دسته‌بندی‌ها
    categories.forEach(category => {
        category.addEventListener("click", () => {
            categories.forEach(item => item.classList.remove("active"));
            category.classList.add("active");
            renderContent(category.getAttribute("data-category"));
        });
    });

    // نمایش پیش‌فرض دسته "cold-coffee"
    renderContent("cold-coffee");

    // رویداد کلیک روی لوگو برای نمایش پنجره آدرس
    logo.addEventListener("click", () => {
        addressModal.style.display = "flex";
    });

    // بستن پنجره آدرس با کلیک روی دکمه بستن
    closeAddressModalBtn.addEventListener("click", () => {
        addressModal.style.display = "none";
    });

    // بستن پنجره آدرس با کلیک بیرون از آن
    window.addEventListener("click", (e) => {
        if (e.target === addressModal) {
            addressModal.style.display = "none";
        }
    });
});
