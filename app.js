// Dữ liệu sản phẩm Lahub Đơm Hoa (Kali Tự Nhiên)
const LAHUB_VARIANTS = [
  {
    size: "250ml",
    price: 45000,
    unit: "Chai 250ml",
    sku: "LH-DH-250",
    desc: "Kích thước nhỏ gọn tiện lợi, phù hợp cho vườn ban công, cây cảnh mini hoặc dùng thử để cảm nhận hiệu quả vượt trội.",
    image: "assets/img/z7863877559515_06426c825f22b166463a4f86754a405c.jpg" // Sử dụng tệp thật từ img
  },
  {
    size: "500ml",
    price: 80000,
    unit: "Chai 500ml",
    sku: "LH-DH-500",
    desc: "Dung tích phổ thông thích hợp cho vườn rau gia đình cỡ trung bình, tối ưu chi phí và dễ dàng bảo quản.",
    image: "assets/img/z7863878965761_116d6b329cb6a54a9c940a4ed7f0a368.jpg"
  },
  {
    size: "1 Lít",
    price: 150000,
    unit: "Chai 1 Lít",
    sku: "LH-DH-1L",
    desc: "Lựa chọn kinh tế cho các nhà vườn hoa hồng, vườn ăn trái quy mô gia đình lớn, giúp cây đơm hoa kết trái rực rỡ.",
    image: "assets/img/z7863879003654_eebc1605d2da88f0d4c09bc91bf9b18e.jpg"
  },
  {
    size: "2 Lít",
    price: 280000,
    unit: "Can 2 Lít",
    sku: "LH-DH-2L",
    desc: "Dung tích cực lớn, chuyên dụng cho nông trại hữu cơ công nghệ cao và nhà vườn chuyên nghiệp, tiết kiệm tối đa chi phí.",
    image: "assets/img/z7863879003656_8e56ee29c04cb3e5fd2615cbccdb97aa.jpg"
  }
];

// Danh sách ảnh thư viện sản phẩm (các ảnh do user gửi ởassets/img)
const GALLERY_IMAGES = [
  "assets/img/z7863877559515_06426c825f22b166463a4f86754a405c.jpg",
  "assets/img/z7863878965761_116d6b329cb6a54a9c940a4ed7f0a368.jpg",
  "assets/img/z7863879003654_eebc1605d2da88f0d4c09bc91bf9b18e.jpg",
  "assets/img/z7863879003656_8e56ee29c04cb3e5fd2615cbccdb97aa.jpg"
];

// Trạng thái ứng dụng (State)
let currentVariantIndex = 0;
let cart = [];
let galleryIndex = 0;

// Khởi chạy khi tài nguyên trang đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  // 1. Tải giỏ hàng từ localStorage
  const savedCart = localStorage.getItem('lahub_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }

  // 2. Khởi tạo hiệu ứng và tương tác mềm mại
  initPageLoader();
  initHeaderScroll();
  initVariantSelector();
  initInteractiveBenefits();
  initProductCatalog();
  initQuickViewSystem();
  initDosageCalculator();
  initNewsSystem();
  initCartSystem();
  init3DEffects();
  initChatboxSystem();

  // Render dữ liệu ban đầu
  updateVariantDisplay();
  updateCartBadge();
});

// EFFECT 1: Cinematic Page Loader (Caterpillar Stamp & Split-Gate Reveal)
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  const stage = document.getElementById('loader-stage');
  const caterpillar = document.getElementById('intro-caterpillar');
  const stampLogo = document.getElementById('active-stamp-logo');
  const splash = document.getElementById('impact-splash');

  if (loader && stage && caterpillar && stampLogo && splash) {
    // 1. Con sâu bò từ trái vào chính giữa màn hình
    setTimeout(() => {
      caterpillar.classList.add('crawl-in');
    }, 200);

    // 2. Logo rơi tự do từ trời cao đập mạnh xuống
    setTimeout(() => {
      stampLogo.classList.add('stamp');
    }, 1400);

    // 3. Khoảnh khắc va chạm (Impact): Rung màn hình, sâu tách đôi, bắn nước cốt hữu cơ
    setTimeout(() => {
      stage.classList.add('shake');
      caterpillar.classList.add('squashed');
      splash.classList.add('active');
      stampLogo.classList.add('bounce');
    }, 1900);

    // 4. Chuyển giao mượt mà sang 2 nửa logo trên cánh cổng split
    setTimeout(() => {
      loader.classList.add('ready-to-split');
      stampLogo.style.opacity = '0';
    }, 2100);

    // 5. Cánh cổng tách đôi sang hai bên và kích hoạt stagger lộ diện trang web
    setTimeout(() => {
      loader.classList.add('split-gate');

      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 150);
    }, 2300);

    // 6. Xóa bỏ hoàn toàn page loader khỏi DOM để tối ưu hóa bộ nhớ
    setTimeout(() => {
      loader.remove();
    }, 3600);
  } else {
    // Fallback if elements not present
    document.body.classList.add('loaded');
  }
}

// EFFECT 2: Floating Sticky Header
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// EFFECT 3: Variant Selector (Mềm mại, trượt chuyển ảnh mượt mà)
function initVariantSelector() {
  const sizeBtns = document.querySelectorAll('.size-btn');

  sizeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentVariantIndex = index;

      // Tạo hiệu ứng chuyển cảnh mượt mà cho ảnh
      const bottleImg = document.getElementById('bottle-showcase-img');
      bottleImg.style.opacity = '0';
      bottleImg.style.transform = 'translateY(15px) scale(0.95)';

      const variantInfo = document.getElementById('variant-info-block');
      variantInfo.style.opacity = '0';
      variantInfo.style.transform = 'translateX(-15px)';

      setTimeout(() => {
        updateVariantDisplay();

        // Hiện lại ảnh mượt mà
        bottleImg.style.opacity = '1';
        bottleImg.style.transform = 'translateY(0) scale(1)';

        variantInfo.style.opacity = '1';
        variantInfo.style.transform = 'translateX(0)';
      }, 300);
    });
  });

  // Nút mua hàng ngay ở Hero
  const heroBuyBtn = document.getElementById('hero-buy-btn');
  if (heroBuyBtn) {
    heroBuyBtn.addEventListener('click', () => {
      const variant = LAHUB_VARIANTS[currentVariantIndex];
      addToCart(variant, 1);
    });
  }
}

function updateVariantDisplay() {
  const variant = LAHUB_VARIANTS[currentVariantIndex];

  // Cập nhật thông tin text tối giản
  document.getElementById('variant-size').textContent = variant.size;
  document.getElementById('variant-price').textContent = formatPrice(variant.price);
  document.getElementById('variant-desc').textContent = variant.desc;

  // Cập nhật ảnh chính
  const imgNode = document.getElementById('bottle-showcase-img');
  imgNode.src = variant.image;
  imgNode.alt = `Lahub Đơm Hoa ${variant.size}`;

  // Đồng bộ nút chọn kích thước active
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach((btn, idx) => {
    if (idx === currentVariantIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// EFFECT 4: Interactive Plant Benefits Spotlight (Hiệu ứng Vòng tròn tương tác tinh tế)
function initInteractiveBenefits() {
  const benefitItems = document.querySelectorAll('.benefit-item');
  const spotlightText = document.getElementById('spotlight-desc');
  const spotlightTitle = document.getElementById('spotlight-title');
  const centralDial = document.getElementById('central-dial-svg');

  benefitItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // Bỏ kích hoạt các item khác
      benefitItems.forEach(b => b.classList.remove('active'));
      item.classList.add('active');

      // Xoay vòng quay trung tâm tinh tế
      if (centralDial) {
        const rotationAngle = idx * 90;
        centralDial.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
      }

      // Lấy dữ liệu chi tiết
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');

      // Đổi chữ mượt mà
      spotlightTitle.style.opacity = '0';
      spotlightText.style.opacity = '0';
      spotlightTitle.style.transform = 'translateY(8px)';
      spotlightText.style.transform = 'translateY(8px)';

      setTimeout(() => {
        spotlightTitle.textContent = title;
        spotlightText.textContent = desc;

        spotlightTitle.style.opacity = '1';
        spotlightText.style.opacity = '1';
        spotlightTitle.style.transform = 'translateY(0)';
        spotlightText.style.transform = 'translateY(0)';
      }, 250);
    });
  });
}

// EFFECT 5: Premium E-commerce Product Catalog Grid with category tabs and animations
const CATALOG_PRODUCTS = [
  // Category 1: Chế Phẩm Sinh Học (che-pham)
  {
    id: 1,
    sku: "LH-TS-250",
    name: "Thuốc Trừ Sâu Hữu Cơ Lahub",
    category: "che-pham",
    categoryLabel: "Chế phẩm sinh học",
    price: 95000,
    oldPrice: 120000,
    badge: "Bán Chạy",
    image: "assets/img/z7863877559515_06426c825f22b166463a4f86754a405c.jpg",
    hoverImage: "assets/veggies.png",
    desc: "Chế phẩm trừ sâu sinh học thế hệ mới chiết xuất từ dịch tỏi, ớt, gừng và tinh chất dầu neem nguyên chất. Giúp phòng ngừa và tiêu diệt cực mạnh sâu xanh, sâu vẽ bùa, bọ trĩ, nhện đỏ mà không cần dùng hóa chất độc hại.",
    unit: "Chai 250ml"
  },
  {
    id: 2,
    sku: "LH-TT-500",
    name: "Lahub Tăng Trưởng - Đạm Cá Hữu Cơ",
    category: "che-pham",
    categoryLabel: "Chế phẩm sinh học",
    price: 120000,
    oldPrice: 150000,
    badge: "Khuyên Dùng",
    image: "assets/img/z7863878965761_116d6b329cb6a54a9c940a4ed7f0a368.jpg",
    hoverImage: "assets/veggies.png",
    desc: "Phân bón đạm cá thủy phân sinh học cô đặc sản xuất theo công nghệ lên men vi sinh của Nhật Bản. Cung cấp đầy đủ hàm lượng đa trung vi lượng, khoáng chất giúp cành ra đọt nhanh, lá to dày mướt, rễ vươn sâu cực khỏe.",
    unit: "Chai 500ml"
  },
  {
    id: 3,
    sku: "LH-DH-1L",
    name: "Lahub Đơm Hoa - Kali Sinh Học (1 Lít)",
    category: "che-pham",
    categoryLabel: "Chế phẩm sinh học",
    price: 150000,
    oldPrice: 180000,
    badge: "-15%",
    image: "assets/img/z7863879003654_eebc1605d2da88f0d4c09bc91bf9b18e.jpg",
    hoverImage: "assets/fruits.png",
    desc: "Tinh chất Kali hữu cơ hàm lượng cao chiết xuất hoàn toàn từ nguyên liệu thực vật tự nhiên giúp thúc đẩy quá trình tích lũy đường bột trong cành hoa, tăng tỷ lệ ra mầm, đậu trái non và ngăn ngừa quả chín bị nứt, rụng cuống.",
    unit: "Chai 1 Lít"
  },
  {
    id: 4,
    sku: "LH-DH-2L",
    name: "Lahub Đơm Hoa - Kali Sinh Học (2 Lít)",
    category: "che-pham",
    categoryLabel: "Chế phẩm sinh học",
    price: 280000,
    oldPrice: 320000,
    badge: "Tiết Kiệm",
    image: "assets/img/z7863879003656_8e56ee29c04cb3e5fd2615cbccdb97aa.jpg",
    hoverImage: "assets/fruits.png",
    desc: "Can dung tích cực lớn chuyên dùng cho trang trại organic và nhà vườn cây ăn quả lâu năm. Nâng tầm chất lượng quả ngọt đậm vị thơm tự nhiên, đạt tiêu chuẩn VietGAP, GlobalGAP xuất khẩu quốc tế.",
    unit: "Can 2 Lít"
  },

  // Category 2: Hạt Giống Hữu Cơ (hat-giong)
  {
    id: 5,
    sku: "HG-CC-F1",
    name: "Hạt Giống Cà Chua Bi Lùn F1",
    category: "hat-giong",
    categoryLabel: "Hạt giống hữu cơ",
    price: 25000,
    badge: "Mới",
    image: "assets/fruits.png",
    hoverImage: "assets/veggies.png",
    desc: "Giống cà chua bi lùn sinh trưởng vô hạn, tỷ lệ nảy mầm >90%, cây kháng bệnh cực tốt, cho chùm sai trĩu quả chín mọng đỏ ngọt lim tự nhiên, rất thích hợp trồng chậu sân thượng hoặc ban công chung cư.",
    unit: "Gói 50 hạt"
  },
  {
    id: 6,
    sku: "HG-DL-BY",
    name: "Hạt Giống Dưa Leo Baby Nhật Bản",
    category: "hat-giong",
    categoryLabel: "Hạt giống hữu cơ",
    price: 30000,
    image: "assets/veggies.png",
    hoverImage: "assets/fruits.png",
    desc: "Hạt giống dưa leo baby nhập khẩu trực tiếp từ Nhật Bản, chịu nhiệt tốt, năng suất cao vượt bậc. Quả dưa thon dài giòn ngọt, vỏ xanh đậm mướt rượt, ruột không hạt, ăn sống cực giòn mát.",
    unit: "Gói 20 hạt"
  },
  {
    id: 7,
    sku: "HG-XL-MD",
    name: "Hạt Giống Xà Lách Mỹ Giòn Cao Cấp",
    category: "hat-giong",
    categoryLabel: "Hạt giống hữu cơ",
    price: 20000,
    image: "assets/veggies.png",
    hoverImage: "assets/veggies.png",
    desc: "Xà lách Mỹ cuốn bắp chặt, lá xòe xoắn đẹp mắt, giòn ngọt mát dịu. Sinh trưởng nhanh chỉ 35-40 ngày thu hoạch, thích hợp trồng thủy canh hoặc bồn rau đất sạch hữu cơ tại nhà.",
    unit: "Gói 200 hạt"
  },

  // Category 3: Đất Sạch & Phân Bón (dat-phan)
  {
    id: 8,
    sku: "DP-DS-10K",
    name: "Đất Sạch Hữu Cơ Đa Dụng Lahub",
    category: "dat-phan",
    categoryLabel: "Đất trồng & Phân bón",
    price: 45000,
    badge: "Khuyên Dùng",
    image: "assets/veggies.png",
    hoverImage: "assets/fruits.png",
    desc: "Đất trồng trộn sẵn giàu dinh dưỡng từ xơ dừa băm nhỏ, phân trùn quế, tro trấu hun và men vi sinh Trichoderma hữu ích. Tơi xốp, giữ ẩm tốt và thoát nước nhanh, không cần bón lót thêm.",
    unit: "Bao 10kg"
  },
  {
    id: 9,
    sku: "DP-PTQ-5K",
    name: "Phân Trùn Quế Sấy Khô Nguyên Chất",
    category: "dat-phan",
    categoryLabel: "Đất trồng & Phân bón",
    price: 35000,
    image: "assets/veggies.png",
    hoverImage: "assets/veggies.png",
    desc: "Phân trùn quế 100% nguyên chất được sấy giảm ẩm và sàng lọc mịn màng. Chứa hàm lượng mùn hữu cơ cực cao và kích thích tố tăng trưởng giúp rễ phát triển thần tốc, tăng đề kháng dịch bệnh.",
    unit: "Bao 5kg"
  },

  // Category 4: Dụng Cụ Làm Vườn (dung-cu)
  {
    id: 10,
    sku: "DC-BC-2L",
    name: "Bình Xịt Áp Suất Phun Sương Lahub",
    category: "dung-cu",
    categoryLabel: "Dụng cụ làm vườn",
    price: 65000,
    badge: "Bền Bỉ",
    image: "assets/img/z7863877559515_06426c825f22b166463a4f86754a405c.jpg",
    hoverImage: "assets/veggies.png",
    desc: "Bình phun sương áp suất khí nén dung tích 2 lít bằng nhựa ABS cao cấp siêu bền chịu va đập tốt. Đầu vòi phun đồng thau có thể điều chỉnh độ phun từ tia thẳng mạnh sang màn phun sương siêu mịn.",
    unit: "Chiếc"
  }
];

function initProductCatalog() {
  const productsGrid = document.getElementById('products-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');

  if (!productsGrid) return;

  // Lấy danh sách sản phẩm yêu thích từ localStorage để duy trì trạng thái
  let wishlist = JSON.parse(localStorage.getItem('lahub_wishlist') || '[]');

  // Hàm render lưới sản phẩm dựa theo category
  const renderCatalog = (filterCategory = 'all') => {
    productsGrid.style.opacity = '0';
    productsGrid.style.transform = 'translateY(15px)';

    setTimeout(() => {
      productsGrid.innerHTML = '';
      
      const filtered = filterCategory === 'all' 
        ? CATALOG_PRODUCTS 
        : CATALOG_PRODUCTS.filter(p => p.category === filterCategory);

      if (filtered.length === 0) {
        productsGrid.innerHTML = `
          <div class="empty-catalog-message">
            <p>Hiện tại chưa có sản phẩm nào thuộc danh mục này.</p>
          </div>
        `;
        productsGrid.style.opacity = '1';
        productsGrid.style.transform = 'translateY(0)';
        return;
      }

      filtered.forEach(p => {
        const isFav = wishlist.includes(p.sku);
        const card = document.createElement('div');
        card.className = 'product-card-premium';
        card.setAttribute('data-category', p.category);

        const discountBadge = p.oldPrice 
          ? `<span class="prod-badge discount">${p.badge || 'Giảm giá'}</span>`
          : (p.badge ? `<span class="prod-badge new">${p.badge}</span>` : '');

        const oldPriceHtml = p.oldPrice 
          ? `<span class="prod-price-old">${p.oldPrice.toLocaleString('vi-VN')} ₫</span>` 
          : '';

        card.innerHTML = `
          <div class="prod-image-wrapper">
            ${discountBadge}
            <img src="${p.image}" class="prod-img-main" alt="${p.name}">
            <img src="${p.hoverImage || p.image}" class="prod-img-hover" alt="${p.name} Hover">
            
            <!-- Quick Actions float on right side -->
            <div class="prod-actions-panel">
              <button class="prod-action-btn btn-fav ${isFav ? 'active' : ''}" data-sku="${p.sku}" title="Thêm vào yêu thích">
                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
              </button>
              <button class="prod-action-btn btn-quickview" data-id="${p.id}" title="Xem nhanh">
                <i class="far fa-eye"></i>
              </button>
            </div>
            
            <!-- Quick Add to Cart sliding up on hover -->
            <button class="prod-quick-add-btn" data-id="${p.id}">
              <i class="fas fa-shopping-basket"></i> Thêm Vào Giỏ
            </button>
          </div>
          <div class="prod-info-panel">
            <span class="prod-cat">${p.categoryLabel}</span>
            <h3 class="prod-name-title">${p.name}</h3>
            <span class="prod-unit-label">${p.unit}</span>
            <div class="prod-price-row">
              <span class="prod-price-current">${p.price.toLocaleString('vi-VN')} ₫</span>
              ${oldPriceHtml}
            </div>
          </div>
        `;

        // Đăng ký các sự kiện tương tác
        // 1. Nút yêu thích
        const favBtn = card.querySelector('.btn-fav');
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const sku = favBtn.getAttribute('data-sku');
          let currentWish = JSON.parse(localStorage.getItem('lahub_wishlist') || '[]');
          
          if (currentWish.includes(sku)) {
            currentWish = currentWish.filter(s => s !== sku);
            favBtn.classList.remove('active');
            favBtn.querySelector('i').className = 'far fa-heart';
            showToast(`Đã xóa khỏi danh sách yêu thích!`, 'info');
          } else {
            currentWish.push(sku);
            favBtn.classList.add('active');
            favBtn.querySelector('i').className = 'fas fa-heart';
            showToast(`Đã thêm vào sản phẩm yêu thích! 💖`, 'success');
          }
          wishlist = currentWish;
          localStorage.setItem('lahub_wishlist', JSON.stringify(currentWish));
        });

        // 2. Nút xem nhanh Quickview
        const qvBtn = card.querySelector('.btn-quickview');
        qvBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openQuickView(p.id);
        });

        // 3. Nút thêm nhanh vào giỏ hàng
        const addBtn = card.querySelector('.prod-quick-add-btn');
        addBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart({
            sku: p.sku,
            size: p.name + " (" + p.unit + ")",
            price: p.price,
            unit: p.unit,
            image: p.image
          }, 1);
        });

        productsGrid.appendChild(card);
      });

      productsGrid.style.opacity = '1';
      productsGrid.style.transform = 'translateY(0)';
    }, 200);
  };

  // Lắng nghe sự kiện click tab chuyển danh mục
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderCatalog(cat);
    });
  });

  // Render danh mục mặc định ban đầu là "Tất Cả"
  renderCatalog('all');
}

function initQuickViewSystem() {
  const modal = document.getElementById('quickview-modal');
  const overlay = document.getElementById('quickview-overlay');
  const closeBtn = document.getElementById('quickview-close');
  const qvQtyInput = document.getElementById('qv-qty-input');
  const qvQtyMinus = document.getElementById('qv-qty-minus');
  const qvQtyPlus = document.getElementById('qv-qty-plus');
  const qvAddToCart = document.getElementById('qv-add-to-cart-btn');

  if (!modal) return;

  let activeProduct = null;

  window.openQuickView = (productId) => {
    const p = CATALOG_PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    activeProduct = p;

    // Thiết lập nội dung modal
    document.getElementById('qv-main-img').src = p.image;
    document.getElementById('qv-badge').textContent = p.categoryLabel;
    document.getElementById('qv-title').textContent = p.name;
    document.getElementById('qv-price').textContent = p.price.toLocaleString('vi-VN') + " ₫";
    
    const oldPriceEl = document.getElementById('qv-old-price');
    if (p.oldPrice) {
      oldPriceEl.style.display = 'inline-block';
      oldPriceEl.textContent = p.oldPrice.toLocaleString('vi-VN') + " ₫";
    } else {
      oldPriceEl.style.display = 'none';
    }

    document.getElementById('qv-desc').textContent = p.desc;
    qvQtyInput.value = "1";

    // Mở modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền
  };

  const closeQuickView = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeQuickView);
  overlay.addEventListener('click', closeQuickView);

  // Xử lý tăng giảm số lượng trong modal
  qvQtyMinus.addEventListener('click', () => {
    let val = parseInt(qvQtyInput.value);
    if (val > 1) {
      qvQtyInput.value = val - 1;
    }
  });

  qvQtyPlus.addEventListener('click', () => {
    let val = parseInt(qvQtyInput.value);
    qvQtyInput.value = val + 1;
  });

  // Xử lý nút Thêm vào giỏ
  qvAddToCart.addEventListener('click', () => {
    if (!activeProduct) return;
    const qty = parseInt(qvQtyInput.value) || 1;
    addToCart({
      sku: activeProduct.sku,
      size: activeProduct.name + " (" + activeProduct.unit + ")",
      price: activeProduct.price,
      unit: activeProduct.unit,
      image: activeProduct.image
    }, qty);
    closeQuickView();
  });
}

// EFFECT 6: Interactive Dosage Guide Calculator (Tính toán liều lượng sinh động)
function initDosageCalculator() {
  const cropSelect = document.getElementById('crop-select');
  const dosageVal = document.getElementById('dosage-value');
  const methodVal = document.getElementById('method-value');
  const cycleVal = document.getElementById('cycle-value');
  const calcCard = document.getElementById('calc-card-result');

  const dosageData = {
    rau: {
      dosage: "2 - 3 ml / 1 Lít nước",
      method: "Phun ướt đều hai mặt lá hoặc tưới đẫm vùng rễ cây.",
      cycle: "Định kỳ 7 - 10 ngày / lần giai đoạn phát triển và kích nụ."
    },
    trai: {
      dosage: "3 - 5 ml / 1 Lít nước",
      method: "Phun đều tán lá giai đoạn phân hóa mầm hoa và khi hoa chớm nở.",
      cycle: "Định kỳ 10 - 15 ngày / lần đến khi đậu quả và nuôi quả chín."
    },
    hoa: {
      dosage: "2 - 4 ml / 1 Lít nước",
      method: "Phun sương nhẹ mặt lá lúc sáng sớm hoặc chiều mát.",
      cycle: "Định kỳ 7 ngày / lần từ khi chớm nụ hoa đến lúc nở rộ sắc thắm."
    }
  };

  if (cropSelect) {
    cropSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      const data = dosageData[val];

      if (!data) return;

      // Hiệu ứng chuyển động mượt mà
      calcCard.style.opacity = '0.3';
      calcCard.style.transform = 'scale(0.98)';

      setTimeout(() => {
        dosageVal.textContent = data.dosage;
        methodVal.textContent = data.method;
        cycleVal.textContent = data.cycle;

        calcCard.style.opacity = '1';
        calcCard.style.transform = 'scale(1)';
      }, 200);
    });
  }

  // Custom premium dropdown interaction
  const customDropdown = document.getElementById('custom-crop-dropdown');
  const trigger = document.getElementById('custom-dropdown-trigger');
  const options = document.querySelectorAll('.custom-dropdown-option');

  if (customDropdown && trigger && cropSelect) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      customDropdown.classList.toggle('active');
    });

    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = opt.getAttribute('data-value');
        const text = opt.querySelector('.option-text').textContent;
        const iconHtml = opt.querySelector('.option-icon').innerHTML;

        // 1. Cập nhật giao diện Trigger
        trigger.querySelector('.trigger-text').textContent = text;
        trigger.querySelector('.trigger-icon').innerHTML = iconHtml;

        // 2. Chuyển đổi trạng thái active
        options.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        // 3. Cập nhật giá trị hidden select & kích hoạt thay đổi
        cropSelect.value = val;
        cropSelect.dispatchEvent(new Event('change'));

        // 4. Đóng dropdown
        customDropdown.classList.remove('active');
      });
    });

    // Click ra ngoài thì đóng dropdown
    document.addEventListener('click', () => {
      customDropdown.classList.remove('active');
    });
  }
}

// EFFECT 7: Minimalist Cart System
function initCartSystem() {
  const cartToggle = document.getElementById('cart-toggle');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClose = document.getElementById('cart-close');
  const checkoutBtn = document.getElementById('checkout-btn');

  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    renderCart();
  });

  const closeCart = () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  };

  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast("Giỏ hàng của bạn đang trống!", "warning");
      return;
    }
    showToast("Đặt hàng thành công! Đại lý Lahub sẽ liên hệ hỗ trợ bạn giao nhận.", "success");
    cart = [];
    saveCart();
    updateCartBadge();
    closeCart();
  });
}

function addToCart(variant, quantity = 1) {
  const existingItemIndex = cart.findIndex(item => item.sku === variant.sku);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      sku: variant.sku,
      size: variant.size,
      price: variant.price,
      unit: variant.unit,
      image: variant.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`Đã thêm can/chai <b>Lahub Đơm Hoa ${variant.size}</b> vào giỏ hàng!`, "success");

  // Mở giỏ tự động để tăng phản hồi
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  renderCart();
}

function updateQuantity(sku, newQty) {
  if (newQty < 1) {
    removeFromCart(sku);
    return;
  }

  const item = cart.find(item => item.sku === sku);
  if (item) {
    item.quantity = newQty;
    saveCart();
    updateCartBadge();
    renderCart();
  }
}

function removeFromCart(sku) {
  const item = cart.find(item => item.sku === sku);
  cart = cart.filter(item => item.sku !== sku);
  saveCart();
  updateCartBadge();
  renderCart();
  if (item) {
    showToast(`Đã xóa <b>Lahub Đơm Hoa ${item.size}</b> khỏi giỏ.`, "info");
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const totalVal = document.getElementById('cart-total-val');

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message">
        <div class="empty-cart-icon">🌱</div>
        <h3>Giỏ hàng của bạn đang trống</h3>
        <p>Chọn các dung tích Kali Tự Nhiên để giúp khu vườn của bạn đơm hoa kết trái ngọt nhé!</p>
      </div>
    `;
    totalVal.textContent = formatPrice(0);
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="Lahub Đơm Hoa ${item.size}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">Lahub Đơm Hoa</h4>
        <p class="cart-item-meta">Dung tích: ${item.size} x ${formatPrice(item.price)}</p>
        <div class="cart-item-actions">
          <div class="quantity-selector">
            <button class="qty-btn dec-btn">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn inc-btn">+</button>
          </div>
          <span class="cart-item-price">${formatPrice(subtotal)}</span>
        </div>
      </div>
      <button class="cart-item-remove" title="Xóa"><i class="fas fa-trash-alt"></i></button>
    `;

    div.querySelector('.dec-btn').addEventListener('click', () => updateQuantity(item.sku, item.quantity - 1));
    div.querySelector('.inc-btn').addEventListener('click', () => updateQuantity(item.sku, item.quantity + 1));
    div.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.sku));

    container.appendChild(div);
  });

  totalVal.textContent = formatPrice(total);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge-count');
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function saveCart() {
  localStorage.setItem('lahub_cart', JSON.stringify(cart));
}

// EFFECT 8: 3D Parallax Bottle Tilt (Hiệu ứng nghiêng 3D chai tinh tế khi di chuột)
function init3DEffects() {
  const card = document.getElementById('interactive-bottle-card');
  const img = document.getElementById('bottle-showcase-img');

  if (!card || !img) return;

  card.addEventListener('mousemove', (e) => {
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - (box.width / 2);
    const y = e.clientY - box.top - (box.height / 2);

    // Tính toán góc xoay tinh tế tối đa 8 độ để tạo hiệu ứng mềm mại
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;

    img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-10px)`;
    card.style.boxShadow = `
      ${-rotateY * 2}px ${-rotateX * 2}px 40px rgba(9, 73, 44, 0.15),
      0 20px 50px rgba(9, 73, 44, 0.1)
    `;
  });

  card.addEventListener('mouseleave', () => {
    // Trả về vị trí ban đầu mượt mà
    img.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    img.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1) translateY(0)';
    card.style.boxShadow = 'var(--shadow-lg)';

    setTimeout(() => {
      img.style.transition = '';
    }, 500);
  });
}

// Fullscreen Image Lightbox
function openFullscreenImage(imgSrc) {
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(9, 73, 44, 0.9)';
  modal.style.backdropFilter = 'blur(10px)';
  modal.style.zIndex = '2000';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.4s ease';

  modal.innerHTML = `
    <span class="lightbox-close" style="position: absolute; top: 30px; right: 30px; color: #FFFFFF; font-size: 2rem; cursor: pointer;"><i class="fas fa-times"></i></span>
    <img src="${imgSrc}" alt="Ảnh phóng to Lahub" style="max-width: 90%; max-height: 85%; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); transform: scale(0.9); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
  `;

  document.body.appendChild(modal);

  // Triggers entry animation
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.querySelector('img').style.transform = 'scale(1)';
  }, 10);

  const closeModal = () => {
    modal.style.opacity = '0';
    modal.querySelector('img').style.transform = 'scale(0.9)';
    setTimeout(() => {
      modal.remove();
    }, 400);
  };

  modal.addEventListener('click', closeModal);
}

// Reusable Toast Message helper
function showToast(message, type = "success") {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  let icon = '🌸';
  if (type === 'warning') icon = '⚠️';
  if (type === 'info') icon = '🌱';

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// Bổ trợ: Định dạng tiền tệ VNĐ
function formatPrice(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// EFFECT 12: Premium News & Blog Post Reader Modal
const ARTICLES_DATABASE = {
  1: {
    title: "Làm sao phòng bọ trĩ, nhện đỏ hại hoa hồng mà không dùng chất độc hóa học?",
    category: "Mẹo làm vườn",
    date: "26 Tháng 5, 2026",
    image: "assets/veggies.png",
    content: `
      <p><strong>Bọ trĩ, nhện đỏ</strong> luôn là nỗi ám ảnh đối với các tín đồ mê hoa hồng, đặc biệt là giai đoạn cây đang đơm nụ. Sử dụng hóa chất thường gây độc hại trực tiếp cho sức khỏe gia đình, con nhỏ và vật nuôi trong nhà.</p>
      <p>Giải pháp sinh học từ <strong>Lahub</strong> chính là sự kết hợp tuyệt vời giữa dịch chiết tỏi, ớt và tinh chất dầu neem nguyên chất ép lạnh. Dầu neem có chứa hoạt chất <em>Azadirachtin</em> tự nhiên làm ức chế hệ hormone của bọ trĩ, khiến chúng ngừng phá hoại lá non và suy giảm khả năng sinh sản nhanh chóng.</p>
      <p><strong>Hướng dẫn sử dụng thực tế:</strong></p>
      <ul>
        <li>Pha 3ml chế phẩm trừ sâu Lahub hữu cơ với 1 lít nước ấm, lắc đều.</li>
        <li>Phun ướt đẫm hai mặt lá lúc sáng sớm hoặc chiều mát khi mặt trời đã tắt nắng.</li>
        <li>Thực hiện định kỳ 5-7 ngày một lần để phòng ngừa hiệu quả và giữ cho vườn hoa hồng luôn xanh tươi rực rỡ!</li>
      </ul>
    `
  },
  2: {
    title: "Bí quyết bón đạm cá thủy phân giúp rau ăn lá xanh mướt và ngọt vị",
    category: "Dinh dưỡng cây",
    date: "24 Tháng 5, 2026",
    image: "assets/veggies.png",
    content: `
      <p><strong>Đạm cá</strong> là nguồn phân bón hữu cơ tuyệt hảo giàu axit amin tự nhiên, giúp rau trồng hấp thụ tức thì qua lá và bộ rễ. Tuy nhiên, bón thế nào để tối ưu và làm sao để <strong>không có mùi hôi tanh khó chịu</strong> luôn là thắc mắc lớn.</p>
      <p>Chế phẩm <strong>Lahub Tăng Trưởng</strong> được chế biến bằng công nghệ ủ lên men vi sinh Nhật Bản khử hoàn toàn mùi hôi tanh khó chịu, giữ lại trọn vẹn dinh dưỡng đa trung vi lượng dạng ion dễ hấp thụ.</p>
      <p><strong>Bí quyết bón rau ăn lá xanh mướt ngọt lịm:</strong></p>
      <ul>
        <li>Pha loãng chế phẩm tỷ lệ 1:200 với nước sạch (khoảng 5ml cho 1 lít nước).</li>
        <li>Tưới đều mặt đất vùng rễ hoặc phun sương nhẹ lên lá vào lúc chiều tối mát mẻ.</li>
        <li>Vi khuẩn có lợi <em>Trichoderma</em> trong đất sẽ giúp phân giải nhanh đạm hữu cơ, tăng sinh khối rễ và bảo vệ rễ cây khỏi nấm bệnh thối cổ rễ nguy hiểm.</li>
      </ul>
    `
  },
  3: {
    title: "Tầm quan trọng của Kali sinh học đối với tỷ lệ đậu quả chín mọng ngọt vị",
    category: "Kỹ thuật canh tác",
    date: "20 Tháng 5, 2026",
    image: "assets/fruits.png",
    content: `
      <p>Nhiều nhà vườn trồng cây ăn quả thường gặp hiện tượng <strong>nứt vỏ quả, rụng quả non hàng loạt</strong> lúc thời tiết thay đổi. Nguyên nhân sâu xa là do thiếu hụt nguồn <strong>Kali hữu cơ dễ tiêu</strong> trong giai đoạn tích lũy đường bột.</p>
      <p>Sử dụng chế phẩm <strong>Lahub Đơm Hoa</strong> chiết xuất từ Kali sinh học thực vật dễ hấp thụ giúp hạn chế tối đa hiện tượng rụng quả non, thúc đẩy lưu thông nhựa sống nuôi trái chín đều căng bóng.</p>
      <p><strong>Cách bón đạt năng suất bội thu:</strong></p>
      <ul>
        <li>Pha 3ml Lahub Đơm Hoa với 1 lít nước sạch.</li>
        <li>Phun đều tán lá giai đoạn hoa chớm nở để tăng tỷ lệ thụ phấn đậu trái.</li>
        <li>Phun định kỳ 10 ngày một lần giai đoạn trái đang lớn. Đặc biệt, bón Kali sinh học trước ngày thu hoạch 15 ngày sẽ nâng cao đáng kể độ ngọt brix tự nhiên, tạo mùi thơm dễ chịu và giúp bảo quản nông sản được tươi ngon lâu hơn sau khi hái.</li>
      </ul>
    `
  }
};

function initNewsSystem() {
  const modal = document.getElementById('article-modal');
  const overlay = document.getElementById('article-overlay');
  const closeBtn = document.getElementById('article-close');

  if (!modal) return;

  window.openArticleModal = (articleId) => {
    const art = ARTICLES_DATABASE[articleId];
    if (!art) return;

    document.getElementById('art-hero-img').src = art.image;
    document.getElementById('art-badge').textContent = art.category;
    document.getElementById('art-title').textContent = art.title;
    document.getElementById('art-date').textContent = art.date;
    document.getElementById('art-body-text').innerHTML = art.content;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeArticle);
  if (overlay) overlay.addEventListener('click', closeArticle);
}

// EFFECT 13: Premium Botanical AI Chatbot Assistant
function initChatboxSystem() {
  const trigger = document.getElementById('chatbox-trigger');
  const panel = document.getElementById('chatbox-panel');
  const closeBtn = document.getElementById('chatbox-close');
  const chatBody = document.getElementById('chatbox-body');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');

  if (!trigger || !panel || !chatBody) return;

  // Toggle chatbox window
  trigger.addEventListener('click', () => {
    panel.classList.toggle('open');
    // Hide notification badge
    const badge = trigger.querySelector('.chatbox-trigger-badge');
    if (badge) badge.style.display = 'none';
    
    // Scroll to bottom on open
    setTimeout(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 300);
  });

  const closeChat = () => {
    panel.classList.remove('open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  // Intent responses dataset
  const BOT_RESPONSES = {
    "hoa-hong": `
      <p>🌹 <strong>Mẹo chăm sóc & trị Bọ Trĩ nhện đỏ Hoa Hồng:</strong></p>
      <p>1. Pha <strong>3ml Chế phẩm trừ sâu Lahub</strong> hữu cơ với 1 lít nước ấm, lắc đều.</p>
      <p>2. Phun ướt đẫm toàn bộ cành, lá và hai mặt lá vào lúc <em>chiều tối mát mẻ</em> (khoảng sau 5h30 chiều).</p>
      <p>3. Phun định kỳ <strong>5-7 ngày một lần</strong>. Khi hồng đóng nụ, bạn có thể phun bổ sung <strong>Lahub Đơm Hoa</strong> giúp nụ mập, nở hoa to rực rỡ sắc thắm!</p>
    `,
    "rau-an-la": `
      <p>🥬 <strong>Kỹ thuật trồng Rau Ăn Lá hữu cơ giòn ngọt tại nhà:</strong></p>
      <p>1. <strong>Làm đất</strong>: Trộn đất sạch với xơ dừa tơi xốp và phân trùn quế sấy khô Lahub.</p>
      <p>2. <strong>Kích rễ giai đoạn nhỏ</strong>: Khi rau có 2-3 lá thật, tưới loãng <strong>Lahub Tăng Trưởng (Đạm Cá)</strong> tỷ lệ 5ml cho 1 lít nước để kích bộ rễ khỏe mạnh.</p>
      <p>3. <strong>Dưỡng lá dày, mướt mát</strong>: Phun định kỳ 7-10 ngày một lần. Ngưng tưới trước khi thu hoạch 5 ngày để rau đạt vị giòn ngọt thanh khiết nhất!</p>
    `,
    "cay-an-trai": `
      <p>🍅 <strong>Cách bón Kích Hoa & Nuôi Quả ngọt lịm căng bóng:</strong></p>
      <p>1. <strong>Trước ra hoa</strong>: Phun <strong>Lahub Đơm Hoa (Kali sinh học)</strong> 2-3ml/L nước định kỳ 7 ngày/lần để phân hóa mầm hoa cực mạnh.</p>
      <p>2. <strong>Giai đoạn đậu trái non</strong>: Tiếp tục phun lá để nuôi cuống trái dẻo dai, chống nứt vỏ quả hoặc rụng quả non lý sinh do thời tiết thay đổi đột ngột.</p>
    `,
    "lieu-luong": `
      <p>🌱 <strong>Cẩm nang liều lượng sử dụng các chế phẩm Lahub:</strong></p>
      <p>- <strong>Dưỡng cây/Phòng sâu bệnh</strong>: Pha 2ml chế phẩm với 1 lít nước sạch, phun định kỳ 10 ngày một lần.</p>
      <p>- <strong>Kích hoa/Trị sâu vẽ bùa bọ trĩ</strong>: Pha 3ml - 5ml với 1 lít nước sạch, phun định kỳ 5 - 7 ngày một lần.</p>
      <p>💡 <em>Lưu ý vàng</em>: Luôn phun tưới lúc sáng sớm hoặc sau 5h chiều để tránh cháy lá và giúp cây hấp thụ ion sinh học tối đa!</p>
    `
  };

  // Hàm append message vào chat body
  const appendMessage = (text, sender = 'user') => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = `
      <div class="chat-bubble">
        ${text}
      </div>
    `;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  // Hàm tạo hiệu ứng ba dấu chấm nhấp nháy "Bot đang soạn tin..."
  const showTypingIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'chat-msg bot typing-indicator-wrapper';
    indicator.id = 'chat-typing-indicator';
    indicator.innerHTML = `
      <div class="chat-bubble typing-bubble">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `;
    chatBody.appendChild(indicator);
    chatBody.scrollTop = chatBody.scrollHeight;
    return indicator;
  };

  // Xử lý gửi tin nhắn của Bot
  const triggerBotResponse = (intentOrText) => {
    const indicator = showTypingIndicator();

    setTimeout(() => {
      // Xóa typing indicator
      if (indicator) indicator.remove();

      let reply = "";
      if (BOT_RESPONSES[intentOrText]) {
        reply = BOT_RESPONSES[intentOrText];
      } else {
        // Simple NLP keyword matching
        const query = intentOrText.toLowerCase().trim();
        if (query.includes("hồng") || query.includes("hong") || query.includes("trĩ") || query.includes("sâu") || query.includes("sau")) {
          reply = BOT_RESPONSES["hoa-hong"];
        } else if (query.includes("rau") || query.includes("cải") || query.includes("xà lách") || query.includes("cây con")) {
          reply = BOT_RESPONSES["rau-an-la"];
        } else if (query.includes("quả") || query.includes("cà chua") || query.includes("trái") || query.includes("đơm hoa") || query.includes("kali")) {
          reply = BOT_RESPONSES["cay-an-trai"];
        } else if (query.includes("liều lượng") || query.includes("lieu luong") || query.includes("phun") || query.includes("tưới") || query.includes("tỉ lệ")) {
          reply = BOT_RESPONSES["lieu-luong"];
        } else {
          reply = `
            <p>🌿 Cảm ơn bạn đã quan tâm đến nông nghiệp hữu cơ Lahub!</p>
            <p>Câu hỏi của bạn đã được chuyển tới kỹ sư trưởng của chúng tôi. Để nhận được giải đáp chuyên sâu miễn phí, bạn hãy gọi hotline <strong>1900 6868</strong> hoặc nhập số điện thoại bên dưới để kỹ sư gọi lại tư vấn nhé!</p>
          `;
        }
      }

      appendMessage(reply, 'bot');
    }, 1000);
  };

  // Lắng nghe click các nút gợi ý bấm nhanh
  chatBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.chat-suggest-btn');
    if (!btn) return;

    const intent = btn.getAttribute('data-intent');
    const text = btn.textContent;

    // 1. Thêm tin nhắn của User
    appendMessage(text, 'user');

    // 2. Chạy bot trả lời
    triggerBotResponse(intent);
  });

  // Gửi tin nhắn qua ô nhập liệu
  const handleUserSend = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = "";

    triggerBotResponse(text);
  };

  if (sendBtn) sendBtn.addEventListener('click', handleUserSend);

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserSend();
      }
    });
  }
}
