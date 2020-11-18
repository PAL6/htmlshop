window.addEventListener('load', function () {
  // 获取事件源
  let nav = document.querySelector('.logoNav');
  let productBox = document.querySelector('.productBox');

  // 添加鼠标经过和离开事件
  for (let i = 0; i < nav.children.length; i++) {
    // 经过
    nav.children[i].addEventListener('mouseenter', function () {
      productBox.style.display = 'block';
    });
    // 离开
    nav.children[i].addEventListener('mouseleave', function () {
      productBox.style.display = 'none';
    })
  }

  // 鼠标移上显示商品盒子
  let navLis = document.querySelector('.swiperNav').querySelector('ul');
  console.log(navLis.children);
  let navProduct = document.querySelector('.rightProduct');
  for (let i = 0; i < navLis.children.length; i++) {
    // 经过
    navLis.children[i].addEventListener('mouseenter', function () {
      navProduct.style.display = 'block';
      navProduct.innerHTML = this.innerText
    });
    // 离开
    navLis.children[i].addEventListener('mouseleave', function () {
      navProduct.style.display = 'none';
    })
  }
});