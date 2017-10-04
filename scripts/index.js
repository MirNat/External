const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

var picker = new Pikaday({
    field: $('#datepicker')[0],
    minDate: new Date().addDays(5),
    format: 'MMMM, D YYYY',
    toString(date, format) {
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month}, ${day} ${year}`;
    },
    parse(dateString, format) {
        return new Date(dateString);
    }
});

function calculateRentFee(rentPrice) {
    const UPCHARGE_PERCENT_FOR_200_USD_AND_ABOVE = 1.5;
    const UPCHARGE_PERCENT_FOR_100_TILL_200_USD = 2.5;
    const UPCHARGE_PERCENT_FOR_UNDER_100_USD = 5;

    var upchargePercent =
        rentPrice >= 200
            ? UPCHARGE_PERCENT_FOR_200_USD_AND_ABOVE
            : rentPrice >= 100 ? UPCHARGE_PERCENT_FOR_100_TILL_200_USD : UPCHARGE_PERCENT_FOR_UNDER_100_USD;
    var fee = rentPrice * upchargePercent / 100;

    return fee.toFixed(2);
}

function handleChangeAmount() {
    var rentAmount = parseFloat($('.amount').val());
    if (!rentAmount || rentAmount < MIN_RENT_PAYMENT_AMOUNT) {
        $('.rent-too-small-message').removeClass('ng-hide');
        $('.rent-fee-message').addClass('ng-hide');
        $('.rent-total-message').addClass('ng-hide');
        $('.start-payment-flow').attr('disabled', true);
    } else {
        var feeAmount = calculateRentFee(rentAmount);
        var totalAmount = rentAmount + parseFloat(feeAmount);
        $('.rent-fee-message').removeClass('ng-hide');
        $('.rent-total-message').removeClass('ng-hide');
        $('.rent-fee').html(feeAmount);
        $('.rent-total').html(totalAmount);
        $('.rent-too-small-message').addClass('ng-hide');
        $('.start-payment-flow').attr('disabled', false);
    }
}

const MIN_RENT_PAYMENT_AMOUNT = 25;
$('.amount').change(handleChangeAmount);
