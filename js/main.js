// スクロール時にふわっとさせる

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // is-in-viewをつける
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");

    }
  })
})

const inViewItems = document.querySelectorAll(".is-in-view");
inViewItems.forEach((inViewItem) => {
  intersectionObserver.observe(inViewItem);
})


// to-top
jQuery(window).on("scroll", function (e) {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-scroll-top").addClass("is-show");
  } else {
    jQuery("#js-scroll-top").removeClass("is-show");
  }
})

// ページ内リンク → スムーススクロール
jQuery("a[href^='#']").on("click", function (e) {
  // 1,まず、thisで押されたIDの名前を取得する。
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  const position = jQuery(target).offset().top;

  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    1000,
    "swing"
  );
});

jQuery("#js-drawer-content a[href^='#']").on("click", function (e) {
  jQuery("#js-drawer-icon"). removeClass("is-checked");
  jQuery("#js-drawer-content"). removeClass("is-checked");
})


// modal ----------------------
jQuery(".js-modal-open").on("click", function (e) {
    e.preventDefault();
  jQuery("#js-about-modal")[0].showModal();
})
jQuery(".js-modal-close").on("click", function (e) {
    e.preventDefault();
  jQuery("#js-about-modal")[0].close();
})


// swiper -------------------
const swiper = new Swiper('#js-gallery-swiper', {

  spaceBetween: 70,

  // ループオプション
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,  //ユーザーが操作した後はautoplayを止める
  },

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },

});

// アコーディオンリスト----------------

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent() .hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();

  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }

})

// ドロワーメニュー
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// 素のjavascriptで作る場合
// document
//   .querySelector("#js-drawer-icon")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     document
//       .querySelector("#js-drawer-icon").classList.toggle("is-checked");
//     document
//       .querySelector("#js-drawer-content").classList.toggle("is-checked");
//   })
