const gift = document.getElementById('giftnumber');
const LotterySheet = document.getElementById('lotterySheet');
const soun = new Audio('tabsound.wav');
const soun2 = new Audio('remaining numbers.wav');
let arr = [
  "100 Cash", "Toy Car", "Chocolate Box", "₹500 Cash", "Smartphone Cover", "Book",
  "Headphones", "₹50 Cash", "Gift Voucher", "Watch", "Teddy Bear", "Bluetooth Speaker",
  "Movie Ticket", "200 Cash", "Puzzle Game", "Perfume", "sun glasses", "₹1000 cash",
  "Board Game", "Fitness Band", "Digital Clock", "Lamp", "Shopping Voucher", "Laptop Bag",
  "Wireless Mouse", "Travel Mug", "Notebook Set", "Gaming Mousepad", "₹250 Cash", "Keychain",
  "Water Bottle", "Portable Charger", "Desk Organizer", "Cooking Set", "Action Figure",
  "₹300 Cash", "Travel Pillow", "Mini Backpack", "Personalized Mug", "Gaming Controller",
  "Camera Strap", "Toy Robot", "₹750 Cash", "Sports Equipment", "Pen Set", "Bluetooth Earbuds",
  "Digital Photo Frame", "Wallet", "Backpack", "Gift Hamper"
];
const butt = document.getElementById('butt');

butt.addEventListener('click', function () {
    // Remove final highlight if any
    for (let i = 1; i <= 50; i++) {
        document.getElementById(i).classList.remove('winningboxfinal', 'winningbox');
    }

    gift.textContent = 'please wait.....';
    let seccount = 0;

    let TimeIntervel = setInterval(function () {
        seccount += 1;
        let RandomBox = Math.random()* 50;
        let RandomNum = Math.floor(RandomBox) + 1;
       
        if (seccount === 10) {
            let finalNum = Math.floor(Math.random() * 50) + 1;
            let c = arr[finalNum - 1].toUpperCase();
            for (let X = 1; X <= 50; X++) {
                document.getElementById(X).classList.remove('winningbox');
            }
            gift.textContent = `Your number ${finalNum}, and your gift "${c}"`;
            document.getElementById(finalNum).classList.add('winningboxfinal');
            soun.play();
            butt.textContent = 'Please click here to try again';
            clearInterval(TimeIntervel);
        } else if(seccount<10) {
            for (let X = 1; X <= 50; X++) {
            if (X === RandomNum) {
                soun2.pause();
                soun2.currentTime=0;
                soun2.play();
                document.getElementById(X).classList.add('winningbox');
                butt.textContent = 'your gift loading';
            } else {
                document.getElementById(X).classList.remove('winningbox');

            }
        }

        }
    }, 500);
});

arr.forEach(function (value, I) {
    const boxelem = `<div class="box" id=${I + 1}>${I + 1}. ${value}</div>`;
    LotterySheet.insertAdjacentHTML("beforeend", boxelem);
});
