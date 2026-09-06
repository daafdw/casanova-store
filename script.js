const ageGate = document.querySelector('#ageGate');
const enterSite = document.querySelector('#enterSite');
const leaveSite = document.querySelector('#leaveSite');
const categoryTabs = document.querySelectorAll('.category-tab');
const productGrids = document.querySelectorAll('.product-grid');
const cartCount = document.querySelector('#cartCount');
const cartTotal = document.querySelector('#cartTotal');
const cartToast = document.querySelector('#cartToast');
const cartButton = document.querySelector('.cart-button');
const bagDrawer = document.querySelector('#bagDrawer');
const bagBackdrop = document.querySelector('#bagBackdrop');
const closeBag = document.querySelector('#closeBag');
const bagItems = document.querySelector('#bagItems');
const bagTotal = document.querySelector('#bagTotal');
const checkoutButton = document.querySelector('.checkout-button');
const checkoutModal = document.querySelector('#checkoutModal');
const closeCheckout = document.querySelector('#closeCheckout');
const paymentOptions = document.querySelectorAll('.payment-option');
const confirmPayment = document.querySelector('#confirmPayment');
const accountButton = document.querySelector('#accountButton');
const accountModal = document.querySelector('#accountModal');
const closeAccount = document.querySelector('#closeAccount');
const accountTabs = document.querySelectorAll('.account-tab');
const signInForm = document.querySelector('#signInForm');
const signUpForm = document.querySelector('#signUpForm');
const confirmForm = document.querySelector('#confirmForm');
const confirmEmail = document.querySelector('#confirmEmail');
const demoCode = document.querySelector('#demoCode');
const accountDashboard = document.querySelector('#accountDashboard');
const accountEmail = document.querySelector('#accountEmail');
const dashboardTabs = document.querySelectorAll('.dashboard-tab');
const dashboardSections = document.querySelectorAll('.dashboard-section');
const addressForm = document.querySelector('#addressForm');
const addressName = document.querySelector('#addressName');
const addressInput = document.querySelector('#addressInput');
const addressPhone = document.querySelector('#addressPhone');
const accountBagSummary = document.querySelector('#accountBagSummary');
const openBagFromAccount = document.querySelector('#openBagFromAccount');
const signOutButton = document.querySelector('#signOutButton');
const supportLink = document.querySelector('#supportLink');
const supportModal = document.querySelector('#supportModal');
const closeSupport = document.querySelector('#closeSupport');
const ageNotice = document.querySelector('#ageNotice');
const closeAgeNotice = document.querySelector('#closeAgeNotice');
const productModal = document.querySelector('#productModal');
const closeProduct = document.querySelector('#closeProduct');
const detailImage = document.querySelector('#detailImage');
const detailCategory = document.querySelector('#detailCategory');
const detailTitle = document.querySelector('#detailTitle');
const detailDescription = document.querySelector('#detailDescription');
const detailPrice = document.querySelector('#detailPrice');
const detailAdd = document.querySelector('#detailAdd');
const cartItems = [];
let selectedPayment = '';
let activeProduct = null;

closeAgeNotice.addEventListener('click', () => {
  ageNotice.classList.remove('show');
});

const productDescriptions = {
  'Nexlim Go': 'سلسلة Nexlim بإصدار جديد وحصري Nexlim Go حيث يعتبر من أفضل البودات الجديدة في الفئة الاقتصادية من ناحية الأداء وعمر البطارية، حيث يأتي Nexlim Go ببطارية عملاقة بسعة 1800mAh وتحكم تلقائي في الوات حسب مقاومة الكارتدج، والتي تتميز بأداء ممتع يتناسب مع جميع المستخدمين. وتستطيع طلبه الآن بأفضل سعر وأسرع شحن.<br><br>مواصفات نيكسليم جو:<br>• باور من 5 وات إلى 40 وات.<br>• بطارية بسعة 1800 ملي أمبير.<br>• شحن Type-C.<br>• سعة كارتدج 4 ملي و2 ملي.<br>• تقنية الدويل ميش.',
  'OXVA Oneo': 'A refined pod device with a clean finish, balanced airflow, and a confident new-arrival profile.',
  'XLIM Go': 'جهاز OXVA XLIM Go هو الخيار الأكثر اقتصادية وبساطة في سلسلة إكسليم، حيث يركز على تقديم تجربة فيب قوية دون تعقيدات الشاشات أو الأزرار.<br><br>البطارية والأداء: يحتوي على بطارية مدمجة بسعة 1000 مللي أمبير وتصل قدرته القصوى إلى 30 واط، مما يجعله قادراً على تقديم نكهة قوية وسحب كثيف.<br><br>التصميم: يتميز بهيكل مغطى بجلد صناعي فاخر يوفر ملمساً مريحاً ومقاومة للبصمات. الجهاز يعمل بالسحب التلقائي فقط لسهولة الاستخدام القصوى.<br><br>التوافق: يتوافق الجهاز مع جميع بودات سلسلة XLIM، بما فيها V2 وV3 Top-Fill والبودات المعبأة مسبقاً.<br><br>مؤشر الشحن: مزود بإضاءة RGB ثلاثية الألوان توضح مستوى البطارية: أخضر من 60% إلى 100%، أزرق من 20% إلى 60%، وأحمر أقل من 20%.',
  'XLIM Pro 3': 'تعتبر سلسلة OXVA XLIM Pro 3 الجيل الأحدث الذي يجمع بين التصميم الأنيق والأداء المطور، وإليك أهم تفاصيل الجهاز في نقاط سريعة:<br><br>البطارية والطاقة: يأتي الجهاز ببطارية سعة 1500 مللي أمبير، وهي قفزة كبيرة مقارنة بالإصدارات السابقة، مع شحن سريع Type-C (5V/2A) يصل إلى 80% في نصف ساعة فقط.<br><br>الشاشة والواجهة: مزود بشاشة HD ملونة بحجم 1.05 بوصة، وتوفر واجهات تشغيل UI متنوعة وجذابة. نسخة Pro 3 العادية مزودة بأزرار، بينما نسخة Ultra تعمل باللمس.<br><br>ثبات النكهة Super Pulse: تقنية جديدة تضمن خروج الطاقة بشكل مستقر وموحد، مما يحافظ على قوة النكهة حتى عندما توشك البطارية على النفاذ.<br><br>الأداء والبودات: تصل القدرة إلى 30 واط، والجهاز متوافق مع جميع بودات XLIM V2 وV3 Top-Fill، مع تحسين كويلات UniTech 2.0 لتعطي عمراً أطول للنكهة.<br><br>التصميم: هيكل مصنوع من الزنك بملمس فاخر، ويدعم التشغيل عبر السحب التلقائي أو الضغط على الزر، مع مفتاح جانبي للتحكم في تدفق الهواء Airflow.',
  'XLIM SQ Pro 2': 'A distinctive square pod device with a premium screen-led design and smooth handling.',
  'XLIM Ultra 3': 'A full-featured pod device with a strong silhouette and a smooth, modern finish.',
  'XLIM Cartridge': 'A replacement cartridge made for a clean fit and dependable everyday use.',
  'Vape Station': 'A liquid selection for a considered ritual, balanced flavor, and a smooth finish.',
};
const accountStorageKey = 'cvVapeAccount';

if (sessionStorage.getItem('vantaAgeConfirmed') === 'true') {
  ageGate.remove();
  ageNotice.classList.add('show');
}

enterSite.addEventListener('click', () => {
  sessionStorage.setItem('vantaAgeConfirmed', 'true');
  ageGate.remove();
  ageNotice.classList.add('show');
});

leaveSite.addEventListener('click', () => {
  document.querySelector('.age-panel').innerHTML = '<span class="eyebrow">CASANOVA VAPE</span><h2>COME BACK<br><em>WHEN READY.</em></h2><p>Thanks for stopping by. Please enjoy responsibly.</p>';
});

const showCategory = (category) => {
  categoryTabs.forEach((tab) => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  productGrids.forEach((grid) => {
    grid.style.display = category === 'all' || grid.id === category ? '' : 'none';
  });
};

categoryTabs.forEach((tab) => {
  tab.addEventListener('click', () => showCategory(tab.dataset.category));
});

showCategory('pods');

const renderBag = () => {
  const groupedItems = cartItems.reduce((groups, item) => {
    const existing = groups.find((group) => group.name === item.name);
    if (existing) existing.quantity += 1;
    else groups.push({ ...item, quantity: 1 });
    return groups;
  }, []);

  bagItems.innerHTML = groupedItems.length
    ? groupedItems.map((item) => `<div class="bag-line"><div><strong>${item.name}</strong><small>${item.quantity} × ${item.price} EGP</small></div><strong>${item.quantity * item.price} EGP</strong></div>`).join('')
    : '<p class="bag-empty">Your bag is empty.</p>';
  bagTotal.textContent = `${cartItems.reduce((total, item) => total + item.price, 0)} EGP`;
  cartCount.textContent = cartItems.length;
  cartTotal.textContent = `${cartItems.reduce((total, item) => total + item.price, 0)} EGP`;
};

const setBagOpen = (isOpen) => {
  bagDrawer.classList.toggle('open', isOpen);
  bagBackdrop.classList.toggle('open', isOpen);
  bagDrawer.setAttribute('aria-hidden', String(!isOpen));
};

const setCheckoutOpen = (isOpen) => {
  checkoutModal.classList.toggle('open', isOpen);
  checkoutModal.setAttribute('aria-hidden', String(!isOpen));
};

const setAccountOpen = (isOpen) => {
  accountModal.classList.toggle('open', isOpen);
  accountModal.setAttribute('aria-hidden', String(!isOpen));
};

const setProductOpen = (isOpen) => {
  productModal.classList.toggle('open', isOpen);
  productModal.setAttribute('aria-hidden', String(!isOpen));
};

const setSupportOpen = (isOpen) => {
  supportModal.classList.toggle('open', isOpen);
  supportModal.setAttribute('aria-hidden', String(!isOpen));
};

const openProductDetails = (card) => {
  activeProduct = card;
  const name = card.querySelector('h3').textContent;
  const image = card.querySelector('img');
  detailImage.src = image.src;
  detailImage.alt = image.alt;
  detailCategory.textContent = card.querySelector('.product-tag').textContent;
  detailTitle.textContent = name;
  detailDescription.innerHTML = productDescriptions[name] || card.querySelector('.product-meta p').textContent;
  detailDescription.classList.toggle('arabic-description', name === 'Nexlim Go' || name === 'XLIM Go' || name === 'XLIM Pro 3');
  detailPrice.textContent = card.querySelector('strong').textContent;
  setProductOpen(true);
};

const showAccountDashboard = () => {
  const savedAccount = JSON.parse(localStorage.getItem(accountStorageKey) || '{}');
  accountEmail.textContent = savedAccount.email || '';
  const savedAddress = JSON.parse(localStorage.getItem('cvVapeAddress') || '{}');
  addressName.value = savedAddress.name || '';
  addressInput.value = savedAddress.address || '';
  addressPhone.value = savedAddress.phone || '';
  accountTabs.forEach((tab) => { tab.hidden = true; });
  signInForm.hidden = true;
  signUpForm.hidden = true;
  accountDashboard.hidden = false;
  accountBagSummary.textContent = cartItems.length ? `${cartItems.length} item${cartItems.length === 1 ? '' : 's'} in your bag.` : 'Your bag is empty.';
  setAccountOpen(true);
};

cartButton.addEventListener('click', () => setBagOpen(true));
closeBag.addEventListener('click', () => setBagOpen(false));
bagBackdrop.addEventListener('click', () => setBagOpen(false));
checkoutButton.addEventListener('click', () => {
  if (!cartItems.length) {
    cartToast.textContent = 'Your bag is empty.';
    cartToast.classList.add('show');
    window.clearTimeout(cartToast.hideTimer);
    cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2200);
    return;
  }
  setCheckoutOpen(true);
});
closeCheckout.addEventListener('click', () => setCheckoutOpen(false));
checkoutModal.addEventListener('click', (event) => {
  if (event.target === checkoutModal) setCheckoutOpen(false);
});
paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    selectedPayment = option.dataset.payment;
    paymentOptions.forEach((item) => item.classList.toggle('selected', item === option));
    confirmPayment.disabled = false;
    confirmPayment.textContent = `CONTINUE WITH ${selectedPayment.toUpperCase()}`;
  });
});
confirmPayment.addEventListener('click', () => {
  cartToast.textContent = `${selectedPayment} selected.`;
  cartToast.classList.add('show');
  setCheckoutOpen(false);
  setBagOpen(false);
  window.clearTimeout(cartToast.hideTimer);
  cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2600);
});
accountButton.addEventListener('click', () => {
  if (localStorage.getItem('cvVapeSignedIn') === 'true') showAccountDashboard();
  else setAccountOpen(true);
});
closeAccount.addEventListener('click', () => setAccountOpen(false));
accountModal.addEventListener('click', (event) => {
  if (event.target === accountModal) setAccountOpen(false);
});
accountTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const view = tab.dataset.accountView;
    accountTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    signInForm.hidden = view !== 'signin';
    signUpForm.hidden = view !== 'signup';
  });
});
dashboardTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const section = tab.dataset.dashboardSection;
    dashboardTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
    dashboardSections.forEach((item) => { item.hidden = item.id !== `${section}Section` && item.id !== `account${section.charAt(0).toUpperCase()}${section.slice(1)}Section`; });
  });
});
addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.setItem('cvVapeAddress', JSON.stringify({ name: addressName.value, address: addressInput.value, phone: addressPhone.value }));
  cartToast.textContent = 'Address saved successfully.';
  cartToast.classList.add('show');
  window.clearTimeout(cartToast.hideTimer);
  cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2600);
});
openBagFromAccount.addEventListener('click', () => {
  setAccountOpen(false);
  setBagOpen(true);
});
closeProduct.addEventListener('click', () => setProductOpen(false));
productModal.addEventListener('click', (event) => {
  if (event.target === productModal) setProductOpen(false);
});
supportLink.addEventListener('click', (event) => {
  event.preventDefault();
  setSupportOpen(true);
});
closeSupport.addEventListener('click', () => setSupportOpen(false));
supportModal.addEventListener('click', (event) => {
  if (event.target === supportModal) setSupportOpen(false);
});
detailAdd.addEventListener('click', () => {
  if (!activeProduct) return;
  activeProduct.querySelector('.add-to-cart').click();
  setProductOpen(false);
});
signOutButton.addEventListener('click', () => {
  localStorage.removeItem('cvVapeSignedIn');
  accountDashboard.hidden = true;
  accountTabs.forEach((tab, index) => {
    tab.hidden = false;
    tab.classList.toggle('active', index === 0);
    tab.setAttribute('aria-selected', String(index === 0));
  });
  signInForm.hidden = false;
  signUpForm.hidden = true;
  confirmForm.hidden = true;
  setAccountOpen(false);
  cartToast.textContent = 'Signed out successfully.';
  cartToast.classList.add('show');
  window.clearTimeout(cartToast.hideTimer);
  cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2600);
});
[signInForm, signUpForm].forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const details = Object.fromEntries(new FormData(form));

    if (form === signUpForm) {
      const confirmationCode = String(Math.floor(100000 + Math.random() * 900000));
      sessionStorage.setItem('cvVapePendingAccount', JSON.stringify({ details, confirmationCode }));
      confirmEmail.textContent = details.email;
      demoCode.textContent = `Demo code for this static site: ${confirmationCode}`;
      accountTabs.forEach((tab) => { tab.hidden = true; });
      signUpForm.hidden = true;
      confirmForm.hidden = false;
      return;
    } else {
      let savedAccount = null;
      try {
        savedAccount = JSON.parse(localStorage.getItem(accountStorageKey));
      } catch {
        savedAccount = null;
      }

      if (!savedAccount || savedAccount.email !== details.email || savedAccount.password !== details.password) {
        cartToast.textContent = 'No account detected with this information.';
        cartToast.classList.add('show');
        window.clearTimeout(cartToast.hideTimer);
        cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 3000);
        return;
      }

      localStorage.setItem('cvVapeSignedIn', 'true');
      cartToast.textContent = 'Signed in successfully.';
    }

    cartToast.classList.add('show');
    setAccountOpen(false);
    window.clearTimeout(cartToast.hideTimer);
    cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2600);
  });
});

confirmForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const pendingAccount = JSON.parse(sessionStorage.getItem('cvVapePendingAccount') || 'null');
  const enteredCode = new FormData(confirmForm).get('code');

  if (!pendingAccount || enteredCode !== pendingAccount.confirmationCode) {
    cartToast.textContent = 'Invalid confirmation code.';
    cartToast.classList.add('show');
    window.clearTimeout(cartToast.hideTimer);
    cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2600);
    return;
  }

  localStorage.setItem(accountStorageKey, JSON.stringify(pendingAccount.details));
  sessionStorage.removeItem('cvVapePendingAccount');
  confirmForm.hidden = true;
  cartToast.textContent = 'Email confirmed. Account created successfully.';
  cartToast.classList.add('show');
  setAccountOpen(false);
  window.clearTimeout(cartToast.hideTimer);
  cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 3000);
});

document.querySelectorAll('.product-card').forEach((card) => {
  const status = document.createElement('span');
  status.className = 'stock-status';
  status.textContent = 'IN STOCK';
  const details = card.querySelector('.product-meta > div');
  details.append(status);

  const addButton = document.createElement('button');
  addButton.className = 'add-to-cart';
  addButton.type = 'button';
  addButton.textContent = 'ADD TO CART';
  addButton.setAttribute('aria-label', `Add ${card.querySelector('h3').textContent} to cart`);
  details.append(addButton);

  addButton.addEventListener('click', () => {
    if (localStorage.getItem('cvVapeSignedIn') !== 'true') {
      accountDashboard.hidden = true;
      accountTabs.forEach((tab) => { tab.hidden = false; });
      signInForm.hidden = true;
      signUpForm.hidden = false;
      confirmForm.hidden = true;
      accountTabs[0].classList.remove('active');
      accountTabs[0].setAttribute('aria-selected', 'false');
      accountTabs[1].classList.add('active');
      accountTabs[1].setAttribute('aria-selected', 'true');
      setAccountOpen(true);
      return;
    }

    cartItems.push({
      name: card.querySelector('h3').textContent,
      price: Number(card.querySelector('strong').textContent.replace(/[^0-9]/g, '')),
    });
    renderBag();
    cartToast.textContent = `${card.querySelector('h3').textContent} added to cart.`;
    cartToast.classList.add('show');
    window.clearTimeout(cartToast.hideTimer);
    cartToast.hideTimer = window.setTimeout(() => cartToast.classList.remove('show'), 2200);
  });

  card.querySelector('.product-image').addEventListener('click', () => {
    card.querySelector('.product-image').classList.toggle('flipped');
  });
  card.addEventListener('click', (event) => {
    if (!event.target.closest('.add-to-cart')) openProductDetails(card);
  });
});
