$(document).ready(function() {
    console.log("Documento listo");

    function getCart() {
        const cart = localStorage.getItem('cart');
        console.log("Obtener carrito: ", cart);
        return cart ? JSON.parse(cart) : [];
    }

    function saveCart(cart) {
        console.log("Guardar carrito: ", cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        const cart = getCart();
        const cartItemsContainer = $('.cart-items');
        const cartTotalContainer = $('#cart-total');
        let total = 0;

        cartItemsContainer.empty();

        cart.forEach(item => {
            const cartItem = $(`
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>Precio: $${item.price}</p>
                    <button class="remove-btn" data-name="${item.name}">Eliminar</button>
                </div>
            `);
            cartItemsContainer.append(cartItem);
            total += parseFloat(item.price);
        });

        cartTotalContainer.text(`$${total.toFixed(2)}`);
    }

    $('.buy-btn').on('click', function() {
        const name = $(this).data('name');
        const price = $(this).data('price');
        console.log("Añadir al carrito: ", name, price);

        const cart = getCart();
        cart.push({ name, price });
        saveCart(cart);

        alert(`${name} ha sido añadido al carrito`);
    });

    $(document).on('click', '.remove-btn', function() {
        const name = $(this).data('name');
        console.log("Eliminar del carrito: ", name);

        let cart = getCart();
        cart = cart.filter(item => item.name !== name);
        saveCart(cart);
        updateCartUI();
    });

    if ($('.cart-items').length) {
        updateCartUI();
    }
});
