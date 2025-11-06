// Products Data
const products = [
  {
    id: '1',
    name: '繽紛耐咬寵物玩具組合',
    price: 299,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1549297161-14f79605a74c?w=400',
    category: 'toys',
    badge: '熱賣',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: '2',
    name: '貓咪陶瓷雙碗餐具組',
    price: 680,
    originalPrice: 890,
    image: 'https://images.unsplash.com/photo-1722267432520-24755f9e218d?w=400',
    category: 'accessories',
    badge: '新品',
    rating: 4.9,
    reviews: 189,
  },
  {
    id: '3',
    name: '舒適寵物睡墊床墊',
    price: 1280,
    originalPrice: 1680,
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=400',
    category: 'beds',
    rating: 4.7,
    reviews: 342,
  },
  {
    id: '4',
    name: '時尚寵物外出牽繩',
    price: 450,
    image: 'https://images.unsplash.com/photo-1621101164063-ba88826cb918?w=400',
    category: 'accessories',
    rating: 4.6,
    reviews: 128,
  },
  {
    id: '5',
    name: '貓咪逗貓棒玩具',
    price: 180,
    originalPrice: 250,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
    category: 'toys',
    badge: '熱賣',
    rating: 4.9,
    reviews: 567,
  },
  {
    id: '6',
    name: '天然寵物零食點心',
    price: 320,
    image: 'https://images.unsplash.com/photo-1690876821657-1fe926211657?w=400',
    category: 'food',
    rating: 4.8,
    reviews: 445,
  },
  {
    id: '7',
    name: '時尚寵物項圈',
    price: 380,
    originalPrice: 520,
    image: 'https://images.unsplash.com/photo-1667716705760-233650f8f3fe?w=400',
    category: 'accessories',
    rating: 4.5,
    reviews: 234,
  },
  {
    id: '8',
    name: '貓咪抓柱玩具',
    price: 890,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
    category: 'toys',
    badge: '新品',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '9',
    name: '智慧寵物飲水機',
    price: 1580,
    originalPrice: 1980,
    image: 'https://images.unsplash.com/photo-1643624050871-fcb133e45037?w=400',
    category: 'accessories',
    badge: '新品',
    rating: 4.9,
    reviews: 298,
  },
  {
    id: '10',
    name: '寵物美容梳毛刷',
    price: 280,
    image: 'https://images.unsplash.com/photo-1730403257848-a38a393f1b60?w=400',
    category: 'care',
    rating: 4.6,
    reviews: 412,
  },
  {
    id: '11',
    name: '寵物外出提籠',
    price: 1680,
    originalPrice: 2200,
    image: 'https://images.unsplash.com/photo-1608060375223-c5ab552bc9a9?w=400',
    category: 'accessories',
    rating: 4.8,
    reviews: 187,
  },
  {
    id: '12',
    name: '天然寵物洗毛精',
    price: 420,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?w=400',
    category: 'care',
    badge: '熱賣',
    rating: 4.7,
    reviews: 523,
  },
  {
    id: '13',
    name: '耐咬骨頭玩具',
    price: 199,
    image: 'https://images.unsplash.com/photo-1588829009249-58d2fa22041b?w=400',
    category: 'toys',
    rating: 4.5,
    reviews: 345,
  },
  {
    id: '14',
    name: '貓砂盆全自動',
    price: 2880,
    originalPrice: 3680,
    image: 'https://images.unsplash.com/photo-1727510153658-643787acb16a?w=400',
    category: 'care',
    badge: '新品',
    rating: 4.8,
    reviews: 167,
  },
  {
    id: '15',
    name: '柔軟寵物毯子',
    price: 680,
    originalPrice: 880,
    image: 'https://images.unsplash.com/photo-1646186260227-4dfe6805d4bc?w=400',
    category: 'beds',
    rating: 4.6,
    reviews: 289,
  },
  {
    id: '16',
    name: '狗狗訓練零食',
    price: 280,
    image: 'https://images.unsplash.com/photo-1761660304474-d921d4d3f49d?w=400',
    category: 'food',
    badge: '熱賣',
    rating: 4.9,
    reviews: 612,
  },
];

// State Management
let state = {
  currentView: 'home',
  activeCategory: 'all',
  currentPage: 1,
  itemsPerPage: 8,
  cartItems: [],
  wishlistItems: [],
  selectedProduct: null,
};

// Load state from localStorage
function loadState() {
  const savedCart = localStorage.getItem('cartItems');
  const savedWishlist = localStorage.getItem('wishlistItems');
  
  if (savedCart) {
    state.cartItems = JSON.parse(savedCart);
  }
  if (savedWishlist) {
    state.wishlistItems = JSON.parse(savedWishlist);
  }
  
  updateBadges();
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
}

// Update badges
function updateBadges() {
  const cartCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = state.wishlistItems.length;
  
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  
  if (cartCount > 0) {
    cartBadge.textContent = cartCount;
    cartBadge.classList.add('active');
  } else {
    cartBadge.classList.remove('active');
  }
  
  if (wishlistCount > 0) {
    wishlistBadge.textContent = wishlistCount;
    wishlistBadge.classList.add('active');
  } else {
    wishlistBadge.classList.remove('active');
  }
}

// Filter products by category
function getFilteredProducts() {
  if (state.activeCategory === 'all') {
    return products;
  }
  return products.filter(p => p.category === state.activeCategory);
}

// Get paginated products
function getPaginatedProducts() {
  const filtered = getFilteredProducts();
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  return filtered.slice(startIndex, endIndex);
}

// Render product card
function renderProductCard(product) {
  const isInWishlist = state.wishlistItems.some(item => item.id === product.id);
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  
  const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
  
  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image-container" onclick="viewProductDetail('${product.id}')">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        ${discount > 0 ? `<div class="product-discount">-${discount}%</div>` : ''}
        <div class="wishlist-icon ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
          ${isInWishlist ? '❤️' : '🤍'}
        </div>
      </div>
      <div class="product-info">
        <div class="product-name" onclick="viewProductDetail('${product.id}')">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="review-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">NT$ ${product.price}</span>
          ${product.originalPrice ? `<span class="original-price">NT$ ${product.originalPrice}</span>` : ''}
        </div>
        <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">
          🛒 加入購物車
        </button>
      </div>
    </div>
  `;
}

// Render products
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const productsCount = document.getElementById('productsCount');
  const pagination = document.getElementById('pagination');
  
  const filtered = getFilteredProducts();
  const paginated = getPaginatedProducts();
  const totalPages = Math.ceil(filtered.length / state.itemsPerPage);
  
  // Update count
  productsCount.textContent = `共 ${filtered.length} 件商品${totalPages > 1 ? ` · 第 ${state.currentPage} / ${totalPages} 頁` : ''}`;
  
  // Render products or empty state
  if (paginated.length === 0) {
    productsGrid.innerHTML = '';
    emptyState.style.display = 'block';
    pagination.style.display = 'none';
  } else {
    productsGrid.innerHTML = paginated.map(p => renderProductCard(p)).join('');
    emptyState.style.display = 'none';
    
    // Render pagination
    if (totalPages > 1) {
      renderPagination(totalPages);
      pagination.style.display = 'flex';
    } else {
      pagination.style.display = 'none';
    }
  }
}

// Render pagination
function renderPagination(totalPages) {
  const paginationNumbers = document.getElementById('paginationNumbers');
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  
  prevBtn.disabled = state.currentPage === 1;
  nextBtn.disabled = state.currentPage === totalPages;
  
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="page-number ${i === state.currentPage ? 'active' : ''}" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }
  paginationNumbers.innerHTML = html;
}

// Change page
function changePage(page) {
  state.currentPage = page;
  renderProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category change
function changeCategory(category) {
  state.activeCategory = category;
  state.currentPage = 1;
  
  // Update active category button
  document.querySelectorAll('.category-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  renderProducts();
}

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = state.cartItems.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cartItems.push({ ...product, quantity });
  }
  
  saveState();
  updateBadges();
  renderCart();
  openDrawer('cart');
}

// Update cart quantity
function updateCartQuantity(productId, delta) {
  const item = state.cartItems.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity = Math.max(1, item.quantity + delta);
  saveState();
  updateBadges();
  renderCart();
}

// Remove from cart
function removeFromCart(productId) {
  state.cartItems = state.cartItems.filter(item => item.id !== productId);
  saveState();
  updateBadges();
  renderCart();
}

// Render cart
function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (state.cartItems.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>購物車是空的</p>
      </div>
    `;
    cartTotal.textContent = 'NT$ 0';
    return;
  }
  
  const total = state.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartItems.innerHTML = state.cartItems.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">NT$ ${item.price}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">移除</button>
        </div>
      </div>
    </div>
  `).join('');
  
  cartTotal.textContent = `NT$ ${total}`;
}

// Toggle wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const index = state.wishlistItems.findIndex(item => item.id === productId);
  
  if (index >= 0) {
    state.wishlistItems.splice(index, 1);
  } else {
    state.wishlistItems.push(product);
  }
  
  saveState();
  updateBadges();
  renderProducts();
  renderWishlist();
}

// Remove from wishlist
function removeFromWishlist(productId) {
  state.wishlistItems = state.wishlistItems.filter(item => item.id !== productId);
  saveState();
  updateBadges();
  renderProducts();
  renderWishlist();
}

// Render wishlist
function renderWishlist() {
  const wishlistItems = document.getElementById('wishlistItems');
  
  if (state.wishlistItems.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">❤️</div>
        <p>收藏清單是空的</p>
      </div>
    `;
    return;
  }
  
  wishlistItems.innerHTML = state.wishlistItems.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">NT$ ${item.price}</div>
        <div class="wishlist-actions">
          <button class="btn btn-secondary" onclick="addToCart('${item.id}'); closeDrawer('wishlist');">加入購物車</button>
          <button class="btn btn-secondary" onclick="removeFromWishlist('${item.id}')">移除</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Open drawer
function openDrawer(type) {
  const drawer = document.getElementById(type + 'Drawer');
  drawer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close drawer
function closeDrawer(type) {
  const drawer = document.getElementById(type + 'Drawer');
  drawer.classList.remove('active');
  document.body.style.overflow = '';
}

// View product detail
function viewProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  state.selectedProduct = product;
  state.currentView = 'product-detail';
  
  // Hide home view, show detail view
  document.getElementById('homeView').classList.remove('active');
  document.getElementById('productDetailView').classList.add('active');
  
  // Render product detail
  renderProductDetail(product);
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render product detail
function renderProductDetail(product) {
  const isInWishlist = state.wishlistItems.some(item => item.id === product.id);
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  
  const stars = Array(5).fill(0).map((_, i) => 
    i < Math.floor(product.rating) ? '★' : '☆'
  ).join('');
  
  const detailView = document.getElementById('productDetailView');
  detailView.innerHTML = `
    <div class="container" style="padding: 2rem 1rem;">
      <button class="btn btn-secondary" onclick="backToHome()" style="margin-bottom: 2rem; width: auto;">
        ← 返回商品列表
      </button>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
        <div style="position: relative;">
          <div style="background: white; border: 1px solid #fed7aa; border-radius: 0.75rem; overflow: hidden;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; aspect-ratio: 1; object-fit: cover;">
          </div>
          ${product.badge ? `<div style="position: absolute; top: 1rem; left: 1rem; background: #f472b6; color: white; padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem;">${product.badge}</div>` : ''}
          ${discount > 0 ? `<div style="position: absolute; top: 1rem; right: 1rem; background: #fb923c; color: white; padding: 0.25rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem;">-${discount}%</div>` : ''}
        </div>
        
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">${product.name}</h1>
          
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="color: #fb923c; font-size: 1.25rem;">${stars}</span>
            <span style="color: #6b7280;">${product.rating.toFixed(1)} (${product.reviews} 則評價)</span>
          </div>
          
          <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
            <span style="font-size: 2rem; color: #ea580c; font-weight: 700;">NT$ ${product.price}</span>
            ${product.originalPrice ? `<span style="font-size: 1.25rem; color: #9ca3af; text-decoration: line-through;">NT$ ${product.originalPrice}</span>` : ''}
          </div>
          
          <div style="border-top: 1px solid #fed7aa; padding-top: 1.5rem; margin-bottom: 1.5rem;">
            <h3>商品描述</h3>
            <p style="color: #6b7280; line-height: 1.8;">精選優質材料製作，為您的愛寵提供最好的照顧。適合各種體型的寵物使用，安全無毒，品質保證。</p>
          </div>
          
          <div style="border-top: 1px solid #fed7aa; padding-top: 1.5rem; margin-bottom: 1.5rem;">
            <h3>數量</h3>
            <div style="display: flex; align-items: center; gap: 1rem; margin-top: 0.5rem;">
              <button class="quantity-btn" onclick="updateDetailQuantity(-1)">−</button>
              <span id="detailQuantity" style="font-size: 1.125rem; min-width: 3rem; text-align: center;">1</span>
              <button class="quantity-btn" onclick="updateDetailQuantity(1)">+</button>
            </div>
          </div>
          
          <div style="display: flex; gap: 1rem;">
            <button class="btn btn-primary" onclick="addToCartFromDetail()" style="flex: 1;">
              🛒 加入購物車
            </button>
            <button class="btn ${isInWishlist ? 'btn-primary' : 'btn-secondary'}" onclick="toggleWishlist('${product.id}')" style="width: 3rem;">
              ${isInWishlist ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
      
      <div style="background: white; border: 1px solid #fed7aa; border-radius: 0.75rem; padding: 2rem;">
        <h2>顧客評價</h2>
        <div style="text-align: center; padding: 3rem; color: #9ca3af;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">💭</div>
          <p>目前還沒有評價，成為第一個評價的人吧！</p>
        </div>
      </div>
    </div>
  `;
}

// Update detail quantity
let detailQuantity = 1;
function updateDetailQuantity(delta) {
  detailQuantity = Math.max(1, Math.min(99, detailQuantity + delta));
  document.getElementById('detailQuantity').textContent = detailQuantity;
}

// Add to cart from detail
function addToCartFromDetail() {
  if (state.selectedProduct) {
    addToCart(state.selectedProduct.id, detailQuantity);
    detailQuantity = 1;
  }
}

// Back to home
function backToHome() {
  state.currentView = 'home';
  document.getElementById('productDetailView').classList.remove('active');
  document.getElementById('homeView').classList.add('active');
  detailQuantity = 1;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
function init() {
  loadState();
  renderProducts();
  renderCart();
  renderWishlist();
  
  // Category buttons
  document.querySelectorAll('.category-item').forEach(btn => {
    btn.addEventListener('click', () => {
      changeCategory(btn.dataset.category);
    });
  });
  
  // Cart button
  document.getElementById('cartBtn').addEventListener('click', () => {
    openDrawer('cart');
  });
  
  document.getElementById('closeCartBtn').addEventListener('click', () => {
    closeDrawer('cart');
  });
  
  document.querySelector('#cartDrawer .drawer-overlay').addEventListener('click', () => {
    closeDrawer('cart');
  });
  
  // Wishlist button
  document.getElementById('wishlistBtn').addEventListener('click', () => {
    openDrawer('wishlist');
  });
  
  document.getElementById('closeWishlistBtn').addEventListener('click', () => {
    closeDrawer('wishlist');
  });
  
  document.querySelector('#wishlistDrawer .drawer-overlay').addEventListener('click', () => {
    closeDrawer('wishlist');
  });
  
  // Pagination buttons
  document.getElementById('prevPageBtn').addEventListener('click', () => {
    if (state.currentPage > 1) {
      changePage(state.currentPage - 1);
    }
  });
  
  document.getElementById('nextPageBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredProducts().length / state.itemsPerPage);
    if (state.currentPage < totalPages) {
      changePage(state.currentPage + 1);
    }
  });
  
  // Checkout button
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (state.cartItems.length === 0) {
      alert('購物車是空的！');
      return;
    }
    alert('結帳功能開發中...');
  });
  
  // Profile button
  document.getElementById('profileBtn').addEventListener('click', () => {
    alert('個人資料功能開發中...');
  });
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
