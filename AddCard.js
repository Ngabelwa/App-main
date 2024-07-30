// Sample database of store cards (replace with actual database integration)
const storeDatabase = [
    { name: "Clicks", image: "logos/Clicks.png", color: "#0066cc" },
    { name: "Spar", image: "logos/SPAR.png", color: "#00843D" },
    { name: "Pick n Pay", image: "logos/Pick n Pay.png", color: "#0052A0" },
    { name: "Checkers", image: "logos/Checkers.png", color: "#E30613" },
    { name: "Dis-Chem", image: "logos/Dischem.jpg", color: "#00A19B" },
    { name: "WRewards", image: "logos/woolworths.jpg", color: "#000000" },
    { name: "Makro", image: "logos/Makro.jpg", color: "#004C97" },
    { name: "Shoprite", image: "logos/Shoprite.png", color: "#E30613" }
];

function renderStoreList(stores) {
    const storeList = document.getElementById('storeList');
    storeList.innerHTML = '';

    stores.forEach(store => {
        const storeItem = document.createElement('div');
        storeItem.className = 'store-item';
        storeItem.innerHTML = `
            <img src="${store.image}" alt="${store.name} logo">
            <span>${store.name}</span>
        `;
        storeItem.addEventListener('click', () => selectStore(store));
        storeList.appendChild(storeItem);
    });
}

function selectStore(store) {
    // Here you would typically navigate to a new page or open a modal
    // to enter the specific card details for the selected store
    console.log(`Selected store: ${store.name}`);
    // For demonstration, we'll just alert the selection
    alert(`You selected ${store.name}. Here you would enter the card details.`);
}

document.getElementById('searchCard').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStores = storeDatabase.filter(store => 
        store.name.toLowerCase().includes(searchTerm)
    );
    renderStoreList(filteredStores);
});

document.getElementById('cancelBtn').addEventListener('click', () => {
    // Navigate back to the main page
    window.location.href = 'index.html';
});

document.getElementById('otherCardBtn').addEventListener('click', () => {
    // Handle adding a custom card
    alert('This would open a form to add a custom card not in the list.');
});

// Initial render of the store list
renderStoreList(storeDatabase);