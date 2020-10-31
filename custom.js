$( document ).ready(function() {

    var razorpay =  {
        init: function(amount){
            var options = {
                "key": "rzp_test_K8Mipoiqrzk9uq", // Enter the Key ID generated from the Dashboard
                "amount": amount,
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "logo_url",
                "handler": function (response){
                    console.log(instance.payments);
                },
                "prefill": {
                    "name"   : "Customer Name",
                    "email"  : "customer email",
                    "contact": "customer mobile",
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#F37254"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (error){
                console.log(error);
            });
            rzp1.open();
        }
    }
    $(".rzp-button").on("click", function(e){
        razorpay.init($(this).val()*100);
        e.preventDefault();
    });

});