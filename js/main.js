document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("mobileAccount");
    const menu = wrapper.querySelector(".account_hover_manu");

    wrapper.querySelector(".nav-icon").addEventListener("click", function (e) {
      e.preventDefault(); // prevent default anchor behavior
      menu.classList.toggle("show");
    });

    // Optional: Click outside to close
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });

// ========== Banner / Hero Slider Js 
$('.banner_slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    // pauseOnHover: false,
  });
  $('.review_slider_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow: $('.review_left_arrow'),
    nextArrow: $('.review_right_arrow'),
    responsive: [
      {
        breakpoint: 768, // tablet and below
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  

  // ==========================================================
  // Cart Page Scrit 
  // ==========================================================
    let favToRemove = null;
    let itemToRemove = null;

    // Handle all heart toggle buttons
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('heart-toggle')) {
            const icon = e.target;
            const isActive = icon.classList.contains('fa-heart');
            if (!isActive) {
                icon.classList.remove('fa-heart-o');
                icon.classList.add('fa-heart', 'active');
                const popup = document.getElementById('favoritePopup');
                popup.style.display = 'flex';
                document.addEventListener('click', closePopupOnOutsideClick);
            } else {
                favToRemove = icon;
                document.getElementById('confirmRemoveFavorite').style.display = 'flex';
                document.getElementById('fav_page').style.display = 'none';
            }
            e.stopPropagation();
        }
    });

    document.getElementById('favYes').addEventListener('click', function () {
        if (favToRemove) {
            favToRemove.classList.remove('fa-heart', 'active');
            favToRemove.classList.add('fa-heart-o');
            favToRemove = null;
        }
        document.getElementById('confirmRemoveFavorite').style.display = 'none';
    });

    document.getElementById('favNo').addEventListener('click', function () {
        favToRemove = null;
        document.getElementById('confirmRemoveFavorite').style.display = 'none';
    });

    function closePopupOnOutsideClick(e) {
        const popup = document.getElementById('favoritePopup');
        if (!popup.contains(e.target)) {
            popup.style.display = 'none';
            document.removeEventListener('click', closePopupOnOutsideClick);
        }
    }

    document.getElementById('favoritePopup').addEventListener('click', e => e.stopPropagation());
    document.querySelector('#favoritePopup .popup-btn').addEventListener('click', e => e.stopPropagation());

    // Counter buttons
    document.querySelectorAll('.cart_card_items').forEach(function (card) {
        let count = 1;
        const countEl = card.querySelector('.count');
        const incrementBtn = card.querySelector('.increment');
        const decrementBtn = card.querySelector('.decrement');

        function updateDisplay() {
            countEl.textContent = count;
            decrementBtn.disabled = count <= 1;
        }

        incrementBtn.addEventListener('click', function () {
            count++;
            updateDisplay();
        });

        decrementBtn.addEventListener('click', function () {
            if (count > 1) {
                count--;
                updateDisplay();
            }
        });

        updateDisplay();
    });

    // Close buttons for cart items
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('items_close_btn')) {
            itemToRemove = e.target.closest('.cart_card_items');
            document.getElementById('confirmRemoveCart').style.display = 'flex';
        }
    });

    document.getElementById('cartYes').addEventListener('click', function () {
        if (itemToRemove) {
            itemToRemove.remove();
            itemToRemove = null;
        }
        document.getElementById('confirmRemoveCart').style.display = 'none';
    });

    document.getElementById('cartNo').addEventListener('click', function () {
        itemToRemove = null;
        document.getElementById('confirmRemoveCart').style.display = 'none';
    });

    document.getElementById('remove_and_fav').addEventListener('click', function () {
        if (itemToRemove) {
            const heartIcon = itemToRemove.querySelector('.heart-toggle');
            if (heartIcon && !heartIcon.classList.contains('fa-heart')) {
                heartIcon.classList.remove('fa-heart-o');
                heartIcon.classList.add('fa-heart', 'active');

                const popup = document.getElementById('favoritePopup');
                popup.style.display = 'flex';
                document.addEventListener('click', closePopupOnOutsideClick);
            }

            itemToRemove.remove();
            itemToRemove = null;
        }
        document.getElementById('confirmRemoveCart').style.display = 'none';
    });




const popup = document.getElementById('popup');
  const backdrop = document.getElementById('popupBackdrop');
  const openBtn = document.querySelector('.pop_show_one');

  function openPopup() {
    popup.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('popup-open');
  }

  function closePopup() {
    popup.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('popup-open');
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
  });

  backdrop.addEventListener('click', () => {
    closePopup();
  });

  // Swipe down to close
  let startY = 0;
  popup.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
  });

  popup.addEventListener('touchmove', e => {
    const moveY = e.touches[0].clientY;
    if (moveY - startY > 100) {
      closePopup();
    }
  });

  // Prevent click inside popup from closing it
  popup.addEventListener('click', e => {
    e.stopPropagation();
  });


  // popup 2 
  const customPopup = document.getElementById('customPopup');
const customBackdrop = document.getElementById('customPopupBackdrop');
const customOpenBtn = document.querySelector('.customPopTrigger');

function openCustomPopup() {
  customPopup.classList.add('active');
  customBackdrop.classList.add('active');
  document.body.classList.add('popup-open');
}

function closeCustomPopup() {
  customPopup.classList.remove('active');
  customBackdrop.classList.remove('active');
  document.body.classList.remove('popup-open');
}

customOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openCustomPopup();
});

customBackdrop.addEventListener('click', () => {
  closeCustomPopup();
});

// Swipe down to close
let startYY = 0;
customPopup.addEventListener('touchstart', e => {
  startYY = e.touches[0].clientY;
});
customPopup.addEventListener('touchmove', e => {
  const moveY = e.touches[0].clientY;
  if (moveY - startYY > 100) {
    closeCustomPopup();
  }
});

// Prevent click inside popup from closing it
customPopup.addEventListener('click', e => {
  e.stopPropagation();
});




  
  