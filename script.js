// ดึง Element ต่างๆ มาจาก HTML
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');

const heartBtn = document.getElementById('heart-btn');
const flame = document.getElementById('flame');

// ดึง Element เพลงที่เราเพิ่งเพิ่มเข้าไป
const bgMusic = document.getElementById('bg-music');

// เมื่อกดปุ่มหัวใจหน้าแรก
heartBtn.addEventListener('click', function() {
    // ซ่อนหน้า 1 และโชว์หน้า 2 (เค้ก)
    screen1.classList.remove('active');
    screen2.classList.add('active');

    // สั่งให้เพลงเริ่มเล่น 
    bgMusic.volume = 0.5; // ปรับระดับเสียงเบา-ดังได้ตามต้องการ (0.0 ถึง 1.0)
    bgMusic.play();
});

// เมื่อกดที่เปลวไฟ (เป่าเทียน)
flame.addEventListener('click', function() {
    // ซ่อนเปลวไฟทันทีเพื่อให้ดูเหมือนเป่าดับแล้ว
    flame.style.display = 'none';

    // หน่วงเวลา 1 วินาที (1000 มิลลิวินาที) ก่อนโชว์คำอวยพร
    setTimeout(function() {
        screen2.classList.remove('active');
        screen3.classList.add('active');
    }, 1000); 
});