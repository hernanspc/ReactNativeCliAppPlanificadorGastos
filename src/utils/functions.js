export const formatUSD = (value) => {
    "worklet";
    if (value === "") {
        const formattedValue = `$${value.toLocaleString(
            // const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
            "en-US",
            { currency: "USD" }
        )}`;
        return formattedValue;
    }

    const formattedValue = `${parseFloat(value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
};