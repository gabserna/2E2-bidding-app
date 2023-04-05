let bidList = document.getElementById('bidList');
let bid1Input = document.getElementById('bid1Input');
let bid2Input = document.getElementById('bid2Input');
let bid1Btn = document.getElementById('bid1Btn');
let bid2Btn = document.getElementById('bid2Btn');
let clearBtn = document.getElementById('clearBtn');

// bids en localStorage
let bids = JSON.parse(localStorage.getItem('bids')) || [];

function displayBids() {
    bidList.textContent = `Bids: ${bids.join(', ')}`;
}

// agrega bids a array de bids
function placeBid(bidInput, bidBtn) {
    let bid = bidInput.value;
    if (bid) {
        bids.push(bid);
        displayBids();
        bidInput.value = '';
        bidInput.focus();
        saveBidsToLocalStorage();
    }
}

function saveBidsToLocalStorage() {
    localStorage.setItem('bids', JSON.stringify(bids));
}

bid1Btn.addEventListener('click', () => {
    placeBid(bid1Input, bid1Btn);
});

bid2Btn.addEventListener('click', () => {
    placeBid(bid2Input, bid2Btn);
});
displayBids();

function clearLocalStorage() {
    localStorage.removeItem('bids');
    bids = [];
    displayBids();
}

// event listener para clearBtn
clearBtn.addEventListener('click', () => {
    clearLocalStorage();
});