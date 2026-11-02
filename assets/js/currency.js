
/* Global Real Estate Currency Configuration */
const CURRENCY_CONFIG = {
    currency: "BDT",
    locale: "en-BD",
    symbol: "৳",
    position: "before",
    decimals: 0
};

/* Format property prices */
function formatPrice(amount) {
    return new Intl.NumberFormat(
        CURRENCY_CONFIG.locale,
        {
            style: "currency",
            currency: CURRENCY_CONFIG.currency,
            minimumFractionDigits: CURRENCY_CONFIG.decimals,
            maximumFractionDigits: CURRENCY_CONFIG.decimals
        }
    ).format(amount);
}

/* Format monthly rent */
function formatRent(amount) {
    return formatPrice(amount) + " /month";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-price]").forEach(element => {
        const amount = Number(element.dataset.price);

        if (Number.isFinite(amount)) {
            element.textContent = formatPrice(amount);
        }
    });
});
