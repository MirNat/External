const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];Date.prototype.addDays=function(a){var b=new Date(this.valueOf());return b.setDate(b.getDate()+a),b};var picker=new Pikaday({field:$('#datepicker')[0],minDate:new Date().addDays(5),format:'MMMM, D YYYY',toString(a){const c=a.getDate(),d=monthNames[a.getMonth()],e=a.getFullYear();return`${d}, ${c} ${e}`},parse(a){return new Date(a)}});function calculateRentFee(a){var e=200<=a?1.5:100<=a?2.5:5;return(a*e/100).toFixed(2)}function handleChangeAmount(){var a=parseFloat($('.amount').val());if(!a||a<MIN_RENT_PAYMENT_AMOUNT)$('.rent-too-small-message').removeClass('ng-hide'),$('.rent-fee-message').addClass('ng-hide'),$('.rent-total-message').addClass('ng-hide'),$('.start-payment-flow').attr('disabled',!0);else{var b=calculateRentFee(a),c=a+parseFloat(b);$('.rent-fee-message').removeClass('ng-hide'),$('.rent-total-message').removeClass('ng-hide'),$('.rent-fee').html(b),$('.rent-total').html(c),$('.rent-too-small-message').addClass('ng-hide'),$('.start-payment-flow').attr('disabled',!1)}}const MIN_RENT_PAYMENT_AMOUNT=25;$('.amount').change(handleChangeAmount);