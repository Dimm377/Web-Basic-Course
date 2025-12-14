function getData() {
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((items) => {
      const productList = document.getElementById("productList");
      items.forEach((item) => {
        const card = document.createElement("div");

        // tambahkan href ini
        const href = `detail.html?id=${encodeURIComponent(item.id)}`;

        card.className = "product";
        card.style.backgroundImage = `url(${item.image})`;

        card.innerHTML = `
                    <div class="product-content">
 
                      <h1 class="title">${item.title}</h1>
                      <p class="subtitle">${item.subtitle}</p>
 
                      <div class="product-stats">
 
                        <div class="stat">
                            <span class="label">Warna</span>
                            <span class="value">${item.color}</span>
                        </div>
 
                        <div class="stat">
                            <span class="label">Baterai</span>
                            <span class="value">${item.battery}</span>
                        </div>
 
                        <div class="stat">
                            <span class="label">Bobot</span>
                            <span class="value">${item.weight}</span>
                        </div>
 
                        <div class="stat">
                            <span class="label">Latency</span>
                            <span class="value">${item.latency}</span>
                        </div>
 
                        <div class="stat">
                            <span class="label">Harga</span>
                            <span class="value">${item.price}</span>
                        </div>
 
                      </div>
                    </div>
                `;

        // tambahkan handler direction
        const content = card.querySelector(".product-content");

        if (content) {
          content.onclick = () => {
            window.location.href = href;
          };
        }

        productList.appendChild(card);
      });
    });
}

getData();
