$(document).ready(function() {
    // Array para almacenar los productos del carrito
    var carrito = [];

    // Función para agregar un producto al carrito
    function agregarProducto(producto) {
      carrito.push(producto);
      actualizarModal();
    }

    // Función para actualizar el contenido del modal con los productos del carrito
    function actualizarModal() {
      var listaProductos = $("#listaProductos");
      listaProductos.empty(); // Limpiar la lista antes de agregar los productos

      // Recorrer los productos del carrito y agregarlos a la lista
      for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var listItem = $("<li>").addClass("list-group-item").text(producto);
        listaProductos.append(listItem);
      }
    }

    // Manejar el evento de clic en el botón "Agregar al carrito"
    $(".agregar-carrito").click(function() {
      var producto = $(this).data("producto");
      agregarProducto(producto);
    });
  });