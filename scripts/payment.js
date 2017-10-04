$('.landlord_mail_to_name').val($('.landlord-company-name').val());
var landlordType = 'company';
$('.individual-name').hide();
$('.landlord-company-name').attr('required', 'required');
$('.landlord-company-name').keyup(function() {
    $('.landlord_mail_to_name').val($('.landlord-company-name').val());
});

$('.individual-landlord-type').click(function() {
    if (landlordType === 'individual') {
        landlordType = 'company';
        $('.individual-landlord-type').text('I want to pay to an individual instead');
        $('.company-name').show();
        $('.individual-name').hide();
        $('.landlord-first-name').val('');
        $('.landlord-last-name').val('');
        $('.landlord-company-name').attr('required', 'required');
        $('.landlord-first-name').attr('required', false);
        $('.landlord-last-name').attr('required', false);
        $('.landlord-company-name').keyup(function() {
            $('.landlord_mail_to_name').val($('.landlord-company-name').val());
        });
        $('.landlord-first-name').off('keyup');
        $('.landlord-last-name').off('keyup');
    } else {
        landlordType = 'individual';
        $('.individual-landlord-type').text('I want to pay to a business instead');
        $('.individual-name').show();
        $('.company-name').hide();
        $('.landlord-company-name').val('');
        $('.landlord-company-name').attr('required', false);
        $('.landlord-first-name').attr('required', 'required');
        $('.landlord-last-name').attr('required', 'required');
        $('.landlord-company-name').off('keyup');
        $('.landlord-first-name').keyup(function() {
            $('.landlord_mail_to_name').val($('.landlord-first-name').val() + ' ' + $('.landlord-last-name').val());
        });
        $('.landlord-last-name').keyup(function() {
            $('.landlord_mail_to_name').val($('.landlord-first-name').val() + ' ' + $('.landlord-last-name').val());
        });
    }
});

$('.same-address').click(function() {
    if (!$('.is-same-address').is(':checked')) {
        $('.is-same-address').attr('checked', 'checked');
        $('.user-address').val($('.landlord-address').val());
        $('.user-city').val($('.landlord-city').val());
        $('.user-zip').val($('.landlord-zip').val());
        $('.user-state option[value="' + $('.landlord-state').val() + '"]').attr('selected', 'selected');

        $('.landlord-address').keyup(function() {
            $('.user-address').val($('.landlord-address').val());
        });

        $('.landlord-city').keyup(function() {
            $('.user-city').val($('.landlord-city').val());
        });

        $('.landlord-zip').keyup(function() {
            $('.user-zip').val($('.landlord-zip').val());
        });

        $('.landlord-state').change(function() {
            $('.user-state').val($('.landlord-state').val());
        });
    } else {
        $('.is-same-address').attr('checked', false);
        $('.landlord-address').off('keyup');
        $('.landlord-city').off('keyup');
        $('.landlord-zip').off('keyup');
        $('.landlord-state').off('change');
    }
});

$('.landlord-email').change(function() {
    if ($('.landlord-email').val() == $('.user-email').val()) {
        $('.same-email-warning').removeClass('ng-hide');
        $('.payment-step1-button').attr('disabled', true);
    } else {
        $('.same-email-warning').addClass('ng-hide');
        $('.payment-step1-button').attr('disabled', false);
    }
});

switch ($('.step').val()) {
    case '1':
        $('.payment-step-1').show();
        $('.payment-step-2').hide();
        $('.payment-step-3').hide();
        $('.nav-crumb-step-1').addClass('current-step');
        $('.nav-crumb-step-2').removeClass('current-step');
        $('.nav-crumb-step-3').removeClass('current-step');
        $('.nav-label-step-1').addClass('current-step');
        $('.nav-label-step-2').removeClass('current-step');
        $('.nav-crumb-step-3').removeClass('current-step');
        break;
    case '2':
        $('.payment-step-1').hide();
        $('.payment-step-2').show();
        $('.payment-step-3').hide();
        $('.nav-crumb-step-1').removeClass('current-step');
        $('.nav-crumb-step-2').addClass('current-step');
        $('.nav-crumb-step-3').removeClass('current-step');
        $('.nav-label-step-1').removeClass('current-step');
        $('.nav-label-step-2').addClass('current-step');
        $('.nav-crumb-step-3').removeClass('current-step');
        break;
    case '3':
        $('.payment-step-1').hide();
        $('.payment-step-2').hide();
        $('.payment-step-3').show();
        $('.nav-crumb-step-1').removeClass('current-step');
        $('.nav-crumb-step-2').removeClass('current-step');
        $('.nav-crumb-step-3').addClass('current-step');
        $('.nav-label-step-1').removeClass('current-step');
        $('.nav-label-step-2').removeClass('current-step');
        $('.nav-crumb-step-3').addClass('current-step');
        break;
}

$('.nav-label-step-1').click(function() {
    $('.payment-step-1').show();
    $('.payment-step-2').hide();
    $('.payment-step-3').hide();
    $('.nav-crumb-step-1').addClass('current-step');
    $('.nav-crumb-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
    $('.nav-label-step-1').addClass('current-step');
    $('.nav-label-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
});
$('.nav-label-step-2').click(function() {
    $('.payment-step-1').hide();
    $('.payment-step-2').show();
    $('.payment-step-3').hide();
    $('.nav-crumb-step-1').removeClass('current-step');
    $('.nav-crumb-step-2').addClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
    $('.nav-label-step-1').removeClass('current-step');
    $('.nav-label-step-2').addClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
});
$('.nav-label-step-3').click(function() {
    $('.payment-step-1').hide();
    $('.payment-step-2').hide();
    $('.payment-step-3').show();
    $('.nav-crumb-step-1').removeClass('current-step');
    $('.nav-crumb-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').addClass('current-step');
    $('.nav-label-step-1').removeClass('current-step');
    $('.nav-label-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').addClass('current-step');
});
$('.nav-crumb-step-1').click(function() {
    $('.payment-step-1').show();
    $('.payment-step-2').hide();
    $('.payment-step-3').hide();
    $('.nav-crumb-step-1').addClass('current-step');
    $('.nav-crumb-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
    $('.nav-label-step-1').addClass('current-step');
    $('.nav-label-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
});
$('.nav-crumb-step-2').click(function() {
    $('.payment-step-1').hide();
    $('.payment-step-2').show();
    $('.payment-step-3').hide();
    $('.nav-crumb-step-1').removeClass('current-step');
    $('.nav-crumb-step-2').addClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
    $('.nav-label-step-1').removeClass('current-step');
    $('.nav-label-step-2').addClass('current-step');
    $('.nav-crumb-step-3').removeClass('current-step');
});
$('.nav-crumb-step-3').click(function() {
    $('.payment-step-1').hide();
    $('.payment-step-2').hide();
    $('.payment-step-3').show();
    $('.nav-crumb-step-1').removeClass('current-step');
    $('.nav-crumb-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').addClass('current-step');
    $('.nav-label-step-1').removeClass('current-step');
    $('.nav-label-step-2').removeClass('current-step');
    $('.nav-crumb-step-3').addClass('current-step');
});

var frequency = 10000;
if ($('.step').val() == 2) {
    var interval = setInterval(checkPayment, frequency);
}

function checkPayment() {
    $.ajax({
        type: 'GET',
        url: '/check',
        data: { bitpay_id: $('.bitpay_id').val() },
        success: function(data) {
            if (data.paid) {
                clearInterval(interval);
                $('.payment-step2-button').attr('disabled', false);
                $('.bitpay_id').val(data.bitpay_id);
            }
        },
        error: function(xhr, status, error) {
            console.log('Error: ' + error.message);
            $('.error-message-label').html('Error connecting to the server.');
        }
    });
}
