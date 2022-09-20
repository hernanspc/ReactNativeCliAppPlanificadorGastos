export const formatearCantidad = cantidad => {
    "worklet";
    if (cantidad === "") {
        const formattedValue = `$${cantidad.toLocaleString(
            // const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
            "en-US",
            { currency: "USD" }
        )}`;
        return formattedValue;
    }

    const formattedValue = `${parseFloat(cantidad)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const generarId = () => {
    const random = Math.random().toString(36).substring(2, 11)
    const fecha = Date.now().toString(36)
    return random + fecha
}