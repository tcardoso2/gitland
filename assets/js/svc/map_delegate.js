/******************************************************************
** MapDelegate:  Contains a class for calling and managing the
**               map service.
*******************************************************************
** Requires:
**
**
** Created on 20-Nov-2016 by Tiago:
******************************************************************/

var MapDelegate = function () {
    //TODO: (GIT issue #16) Find a way to map to the correct URL dynamically
    this.url = 'map/';
    this.interval_ms = 10000;
    this.interval_fn;

    this.call = function (handler_fn, _method) {
        try{
            $.ajax({
                dataType: "json",
                url: this.url + _method,
                success: function (response) {
                    if(!response) {
                        alert("No response from server!");
                    }
                    try {
                        handler_fn(response);
                    } catch(e) {
                        throw e;
                    }
                }
            })
            .fail(function (response) {
                console.log(response); // server response
                console.log("error");
                handler_fn();
            });
        } catch (e) {
            console.error("RPG Error: ", e);
        }
    };
    
    this.size = function (handler_fn) {
        this.call(handler_fn, 'size');
    }
};
