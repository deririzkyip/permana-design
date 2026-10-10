const BRAND_PHOTO_URL = 'https://res.cloudinary.com/aqry5h7i/image/upload/v1786702024/logoderii.png';

document.querySelectorAll('.brand-photo').forEach((photo) => {
  photo.src = BRAND_PHOTO_URL;
  photo.alt = 'Foto Deri Rizky';
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Buka menu' : 'Tutup menu');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu');
    navigation.classList.remove('open');
  });
});

const galleryDialog = document.querySelector('#project-gallery');
if (galleryDialog) {
  const galleries = {
    ruangrasa: {
      title: 'PENGEMBANGAN SISTEM INVENTORY BARANG',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791626680/bc05ff33-5f21-459d-9b1b-520ec872e75e.png', alt: 'Tampilan login', caption: 'Eksplorasi pengalaman digital' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791626745/ed2572b8-ccfc-4231-8c8e-0fa0795a7f02.png', alt: 'Dashboard', caption: 'Eksplorasi identitas visual' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791626751/d8585067-77b8-4ab5-917b-2f6c720b625b.png', alt: 'Presentasi desain situs pada layar laptop', caption: 'Penerapan desain pada web' },
      ],
    },
    tumbuh: {
      title: 'LOMBA DESAIN GRAFIS DAN KAMPANYE DIGITAL',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628330/7e9e71bd-2b4f-4e76-836c-6f781a85b81d.png', alt: 'LOMBA LOGO INDONESIA SIPF', caption: 'KONFIGURASI LOGO' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628358/1eb1e9bb-39b4-4890-84ae-6e7b46c86bc6.png', alt: 'FILOSOFI LOGO INDONESIA SIPF', caption: 'FILOSOFI' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628316/a4201025-2d0b-4885-8bf9-c7afd9a73b5a.png', alt: 'LOGO PERPUSDA BANTEN', caption: 'LOGO UTAMA' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628278/d7d9d544-bf60-4426-9ec2-3c13645b8e98.png', alt: 'FILOSOFI LOGO PERPUSDA BANTEN', caption: 'FILOSOFI' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628614/f256a16d-4df4-4226-81b5-977821b4f92b.png', alt: 'LOGO UNSERA EKSIS', caption: 'LOGO' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628696/da510503-abc2-43f4-af3c-2ffcb2b967ea.png', alt: 'FILOSOFI UNSERA EKSIS', caption: 'FILOSOFI' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791628749/66b4e938-a263-4c5c-9727-28a4e0a20a52.png', alt: 'LOGO UNSERA EKSIS', caption: 'LOGO' },
      ],
    },
    cerita: {
      title: 'Proyek Pengembangan Map Roblox',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791630077/8744f4eb-65b9-4b82-88dc-374becf8c662.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791630135/d8d3fc7f-6071-4511-8788-90d65f528c72.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791629951/fe8ea930-6120-4dd1-918d-8551d7f87409.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791629865/25e9b2d6-1888-489d-849d-92ac9bb00631.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791629179/c498cb00-23f0-491d-97cc-289ce04e1d46.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791629132/83a12976-83ef-436b-b53e-4541613ba7be.png', alt: 'roblox', caption: '' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791630620/Screenshot_2025-09-04_225351.png', alt: 'roblox', caption: '' },
      ],
    },
  };
  const galleryImage = galleryDialog.querySelector('.gallery-image');
  const galleryTitle = galleryDialog.querySelector('#gallery-title');
  const galleryCaption = galleryDialog.querySelector('.gallery-caption');
  const galleryCount = galleryDialog.querySelector('.gallery-count');
  const galleryDots = galleryDialog.querySelector('.gallery-dots');
  const closeGallery = galleryDialog.querySelector('.gallery-close');
  let activeSlides = [];
  let activeIndex = 0;
  let galleryTrigger = null;

  const renderGallerySlide = (index) => {
    activeIndex = (index + activeSlides.length) % activeSlides.length;
    const slide = activeSlides[activeIndex];
    galleryImage.classList.remove('is-zoomed', 'slide-in');
    galleryImage.parentElement.classList.remove('is-zoomed');
    galleryImage.setAttribute('aria-pressed', 'false');
    galleryImage.setAttribute('aria-label', 'Perbesar foto');
    galleryCaption.textContent = slide.caption;
    galleryCount.textContent = `${activeIndex + 1} / ${activeSlides.length}`;
    galleryDots.querySelectorAll('button').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === activeIndex);
      dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
    });
    // Show loading shimmer, hide stale image
    galleryImage.style.opacity = '0';
    galleryImage.parentElement.classList.add('is-loading');
    const img = new Image();
    img.onload = () => {
      galleryImage.src = slide.src;
      galleryImage.alt = slide.alt;
      galleryImage.parentElement.classList.remove('is-loading');
      galleryImage.classList.add('slide-in');
      void galleryImage.offsetWidth;
      galleryImage.style.opacity = '';
    };
    img.onerror = () => {
      galleryImage.parentElement.classList.remove('is-loading');
      galleryImage.style.opacity = '';
    };
    img.src = slide.src;
  };

  document.querySelectorAll('.gallery-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      galleryTrigger = trigger;
      const gallery = galleries[trigger.dataset.project];
      activeSlides = gallery.slides;
      activeIndex = 0;
      galleryTitle.textContent = gallery.title;
      galleryDots.replaceChildren(...activeSlides.map((slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'gallery-dot';
        dot.setAttribute('aria-label', `Lihat foto ${index + 1}: ${slide.caption}`);
        dot.addEventListener('click', () => renderGallerySlide(index));
        return dot;
      }));
      renderGallerySlide(0);
      galleryDialog.showModal();
      closeGallery.focus();
    });
  });

  galleryDialog.querySelector('.gallery-prev').addEventListener('click', () => renderGallerySlide(activeIndex - 1));
  galleryDialog.querySelector('.gallery-next').addEventListener('click', () => renderGallerySlide(activeIndex + 1));
  const toggleGalleryZoom = () => {
    const isZoomed = galleryImage.classList.toggle('is-zoomed');
    galleryImage.parentElement.classList.toggle('is-zoomed', isZoomed);
    galleryImage.setAttribute('aria-pressed', String(isZoomed));
    galleryImage.setAttribute('aria-label', isZoomed ? 'Kecilkan foto' : 'Perbesar foto');
  };
  galleryImage.addEventListener('click', toggleGalleryZoom);
  galleryImage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleGalleryZoom();
    }
  });
  closeGallery.addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('close', () => galleryTrigger?.focus());
  galleryDialog.addEventListener('click', (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });
  galleryDialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      galleryDialog.close();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      renderGallerySlide(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      renderGallerySlide(activeIndex + 1);
    }
  });
}

const organizationDialog = document.querySelector('#organization-gallery');
if (organizationDialog) {
  const organizationGalleries = {
    osis: {
      title: 'Wakil Ketua OSIS',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791631842/bead7158-dc67-40af-8532-919fbdb219c9.png', alt: 'sertifikat', caption: 'CERTIFICATE' },
      ],
    },
    duta: {
      title: 'DUTA KAMPUS UNSERA',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634440/IMG_8556.jpg', alt: 'DUTA KAMPUS UNSERA', caption: 'DUTA KAMPUS UNSERA' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634441/IMG_4135.jpg', alt: 'DUTA KAMPUS UNSERA', caption: 'DUTA KAMPUS UNSERA' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634439/quality_restoration_20251124181513810.jpg', alt: 'DUTA KAMPUS UNSERA', caption: 'DUTA KAMPUS UNSERA' },
      ],
    },
    himatif: {
      title: 'HIMATIF UNSERA',
      slides: [
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634437/IMG-20250519-WA0021.jpg', alt: 'RAKER PERMIKOMNAS', caption: 'RAKER PERMIKOMNAS' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634444/IMG-20240928-WA0057.jpg', alt: 'P2S', caption: 'P2S' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634439/IMG-20240705-WA0006.jpg  ', alt: 'SEMNAS', caption: 'SEMINAR NASIONAL' },
        { src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791634434/IMG-20250412-WA0042.jpg', alt: 'Workshop', caption: 'Workshop dan kolaborasi' },
      ],
    },
  };
  const organizationImage = organizationDialog.querySelector('.gallery-image');
  const organizationTitle = organizationDialog.querySelector('#organization-gallery-title');
  const organizationCaption = organizationDialog.querySelector('.gallery-caption');
  const organizationCount = organizationDialog.querySelector('.gallery-count');
  const organizationDots = organizationDialog.querySelector('.gallery-dots');
  const closeOrganizationGallery = organizationDialog.querySelector('.gallery-close');
  let organizationSlides = [];
  let organizationIndex = 0;
  let organizationTrigger = null;

  const renderOrganizationSlide = (index) => {
    organizationIndex = (index + organizationSlides.length) % organizationSlides.length;
    const slide = organizationSlides[organizationIndex];
    organizationImage.classList.remove('is-zoomed', 'slide-in');
    organizationImage.parentElement.classList.remove('is-zoomed');
    organizationImage.setAttribute('aria-pressed', 'false');
    organizationImage.setAttribute('aria-label', 'Perbesar foto');
    organizationCaption.textContent = slide.caption;
    organizationCount.textContent = `${organizationIndex + 1} / ${organizationSlides.length}`;
    organizationDots.querySelectorAll('button').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === organizationIndex);
      dot.setAttribute('aria-current', dotIndex === organizationIndex ? 'true' : 'false');
    });
    // Show loading shimmer, hide stale image
    organizationImage.style.opacity = '0';
    organizationImage.parentElement.classList.add('is-loading');
    const img = new Image();
    img.onload = () => {
      organizationImage.src = slide.src;
      organizationImage.alt = slide.alt;
      organizationImage.parentElement.classList.remove('is-loading');
      organizationImage.classList.add('slide-in');
      void organizationImage.offsetWidth;
      organizationImage.style.opacity = '';
    };
    img.onerror = () => {
      organizationImage.parentElement.classList.remove('is-loading');
      organizationImage.style.opacity = '';
    };
    img.src = slide.src;
  };

  document.querySelectorAll('.org-gallery-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      organizationTrigger = trigger;
      const gallery = organizationGalleries[trigger.dataset.organization];
      organizationSlides = gallery.slides;
      organizationIndex = 0;
      organizationTitle.textContent = gallery.title;
      organizationDots.replaceChildren(...organizationSlides.map((slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'gallery-dot';
        dot.setAttribute('aria-label', `Lihat foto ${index + 1}: ${slide.caption}`);
        dot.addEventListener('click', () => renderOrganizationSlide(index));
        return dot;
      }));
      renderOrganizationSlide(0);
      organizationDialog.showModal();
      closeOrganizationGallery.focus();
    });
  });

  organizationDialog.querySelector('.gallery-prev').addEventListener('click', () => renderOrganizationSlide(organizationIndex - 1));
  organizationDialog.querySelector('.gallery-next').addEventListener('click', () => renderOrganizationSlide(organizationIndex + 1));
  const toggleOrganizationZoom = () => {
    const isZoomed = organizationImage.classList.toggle('is-zoomed');
    organizationImage.parentElement.classList.toggle('is-zoomed', isZoomed);
    organizationImage.setAttribute('aria-pressed', String(isZoomed));
    organizationImage.setAttribute('aria-label', isZoomed ? 'Kecilkan foto' : 'Perbesar foto');
  };
  organizationImage.addEventListener('click', toggleOrganizationZoom);
  organizationImage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOrganizationZoom();
    }
  });
  closeOrganizationGallery.addEventListener('click', () => organizationDialog.close());
  organizationDialog.addEventListener('close', () => organizationTrigger?.focus());
  organizationDialog.addEventListener('click', (event) => {
    if (event.target === organizationDialog) organizationDialog.close();
  });
  organizationDialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      organizationDialog.close();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      renderOrganizationSlide(organizationIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      renderOrganizationSlide(organizationIndex + 1);
    }
  });
}

const certificateDialog = document.querySelector('#certificate-viewer');
if (certificateDialog) {
  const certificates = {
    'ux-design': { title: 'JUNIOR WEB PROGRAMMER', issuer: 'BNSP · LSP-UNSERA', src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791632063/34d1f52c-f9f8-42db-b7c0-80d952ffafa9.png' },
    'DISKOMINFO': { title: 'Divisi E-Government', issuer: 'MAGANG · DISKOMINFO KOTA SERANG', src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791631800/2cbeec7a-c534-4d67-b6a7-a79f28be1fd3.png' },
    'MIKROTIK': { title: 'BASIC MIKROTIK TRAINING', issuer: 'MAGANG · S4DULURNET', src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791631905/6123b10d-3481-4461-9f43-fcac9c058b5c.png' },
    'UKOM': { title: 'CREAT WEB-BASED HOTEL BOOKING APPLICATION', issuer: 'TELKOM AKSES · SMKN 6 PANDEGLANG', src: 'https://res.cloudinary.com/aqry5h7i/image/upload/v1791631874/26e79d65-0b70-46ee-81dc-98d58db7dcce.png' },
  };
  const certificateImage = certificateDialog.querySelector('.certificate-photo');
  const certificateTitle = certificateDialog.querySelector('#certificate-title');
  const certificateIssuer = certificateDialog.querySelector('.certificate-issuer');
  const emptyMessage = certificateDialog.querySelector('.certificate-empty p');
  const emptyHint = certificateDialog.querySelector('.certificate-empty small');
  const closeCertificate = certificateDialog.querySelector('.gallery-close');
  let certificateTrigger = null;

  document.querySelectorAll('.certificate-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      certificateTrigger = trigger;
      const certificate = certificates[trigger.dataset.certificate];
      certificateTitle.textContent = certificate.title;
      certificateIssuer.textContent = certificate.issuer;
      // Reset state: hide image, show loading spinner
      certificateImage.hidden = true;
      certificateImage.src = '';
      certificateImage.classList.remove('is-zoomed');
      certificateImage.parentElement.classList.remove('is-zoomed');
      certificateImage.setAttribute('aria-pressed', 'false');
      certificateImage.setAttribute('aria-label', 'Perbesar foto sertifikat');
      const certEmpty = certificateDialog.querySelector('.certificate-empty');
      certEmpty.hidden = false;
      certEmpty.classList.add('is-loading');
      emptyMessage.textContent = 'Memuat sertifikat...';
      emptyHint.textContent = '';
      certificateDialog.showModal();
      closeCertificate.focus();

      const img = new Image();
      img.onload = () => {
        certificateImage.src = certificate.src;
        certificateImage.hidden = false;
        certEmpty.hidden = true;
        certEmpty.classList.remove('is-loading');
      };
      img.onerror = () => {
        certEmpty.classList.remove('is-loading');
        emptyMessage.textContent = 'Foto sertifikat tidak dapat dimuat';
        emptyHint.textContent = 'Periksa koneksi internet Anda dan coba lagi.';
      };
      img.src = certificate.src;
    });
  });

  closeCertificate.addEventListener('click', () => certificateDialog.close());
  const toggleCertificateZoom = () => {
    const isZoomed = certificateImage.classList.toggle('is-zoomed');
    certificateImage.parentElement.classList.toggle('is-zoomed', isZoomed);
    certificateImage.setAttribute('aria-pressed', String(isZoomed));
    certificateImage.setAttribute('aria-label', isZoomed ? 'Kecilkan foto sertifikat' : 'Perbesar foto sertifikat');
  };
  certificateImage.addEventListener('click', toggleCertificateZoom);
  certificateImage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCertificateZoom();
    }
  });
  certificateDialog.addEventListener('close', () => certificateTrigger?.focus());
  certificateDialog.addEventListener('click', (event) => {
    if (event.target === certificateDialog) certificateDialog.close();
  });
  certificateDialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      certificateDialog.close();
    }
  });
}

const profilePhoto = document.querySelector('.portrait-photo');
const portraitFrame = document.querySelector('#profile-portrait');
if (portraitFrame) {
  let portraitAnimationTimer;
  const playPortraitAnimation = () => {
    portraitFrame.classList.remove('is-clicked');
    void portraitFrame.offsetWidth;
    portraitFrame.classList.add('is-clicked');
    clearTimeout(portraitAnimationTimer);
    portraitAnimationTimer = setTimeout(() => portraitFrame.classList.remove('is-clicked'), 720);
  };

  portraitFrame.addEventListener('pointerdown', playPortraitAnimation);
  portraitFrame.addEventListener('click', (event) => {
    if (event.detail === 0) playPortraitAnimation();
  });
}

if (profilePhoto) {
  const showProfilePhoto = () => profilePhoto.closest('.portrait-frame').classList.add('has-photo');
  profilePhoto.addEventListener('load', showProfilePhoto);
  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) showProfilePhoto();
}

document.querySelector('#year').textContent = new Date().getFullYear();

// ─── Contact Form ────────────────────────────────────────────────
// Ganti URL di bawah dengan Web App URL hasil deploy Google Apps Script Anda
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKwYYsuMzejEKwXij7WqdwqH-6fWHB6No1fEcvxTRkPdv30B7GxeglCY8KizKTTUVMBQ/exec';

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const submitBtn = contactForm.querySelector('#cf-submit');
  const statusBox = contactForm.querySelector('#form-status');
  const inputs = {
    nama: { el: contactForm.querySelector('#cf-nama'), err: contactForm.querySelector('#err-nama') },
    email: { el: contactForm.querySelector('#cf-email'), err: contactForm.querySelector('#err-email') },
    pesan: { el: contactForm.querySelector('#cf-pesan'), err: contactForm.querySelector('#err-pesan') },
  };

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const clearError = (field) => {
    inputs[field].el.classList.remove('is-invalid');
    inputs[field].err.textContent = '';
  };
  const setError = (field, msg) => {
    inputs[field].el.classList.add('is-invalid');
    inputs[field].err.textContent = msg;
  };

  // Hapus error saat pengguna mulai mengetik
  Object.keys(inputs).forEach((key) => {
    inputs[key].el.addEventListener('input', () => clearError(key));
  });

  const validate = () => {
    let ok = true;
    const nama = inputs.nama.el.value.trim();
    const email = inputs.email.el.value.trim();
    const pesan = inputs.pesan.el.value.trim();

    if (!nama) { setError('nama', 'Nama tidak boleh kosong.'); ok = false; }
    else clearError('nama');

    if (!email) { setError('email', 'Email tidak boleh kosong.'); ok = false; }
    else if (!EMAIL_RE.test(email)) { setError('email', 'Format email tidak valid.'); ok = false; }
    else clearError('email');

    if (!pesan) { setError('pesan', 'Pesan tidak boleh kosong.'); ok = false; }
    else if (pesan.length < 10) { setError('pesan', 'Pesan terlalu singkat (min. 10 karakter).'); ok = false; }
    else clearError('pesan');

    return ok;
  };

  const setStatus = (type, msg) => {
    statusBox.className = 'form-status';
    statusBox.textContent = '';
    if (type) {
      void statusBox.offsetWidth; // reflow for animation
      statusBox.classList.add(type === 'success' ? 'is-success' : 'is-error');
      statusBox.textContent = msg;
    }
  };

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus(null, '');
    if (!validate()) return;

    // Pastikan URL sudah diisi
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('GANTI')) {
      setStatus('error', '⚠ URL Google Apps Script belum dikonfigurasi. Ikuti panduan setup terlebih dahulu.');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');

    const params = new URLSearchParams({
      nama: inputs.nama.el.value.trim(),
      email: inputs.email.el.value.trim(),
      pesan: inputs.pesan.el.value.trim(),
    });

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('success', '✓ Pesan berhasil dikirim! Saya akan menghubungi Anda segera.');
        contactForm.reset();
      } else {
        setStatus('error', `✕ Gagal mengirim: ${data.message || 'Coba lagi nanti.'}`);
      }
    } catch {
      setStatus('error', '✕ Koneksi gagal. Periksa internet Anda dan coba lagi.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-loading');
    }
  });
}
