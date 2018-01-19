/* 
    IBM In-house {Web Coder} course Assignment Snippet.
    Javascript interactive slave file.
    For internal IBM learning usage.
*/

/*  ----- Javascript functhion() -----  */
$(function () {

    // on submitting the form
    $('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName +' :input').each(function () {
            var radioStatus = $(this).prop('checked');
            var checkboxStatus = $(this).prop('checked');

            if (this.type == 'radio' && !radioStatus) {
                // check for Radio status for NOT checked and DO nothing...
            } else if (this.type == 'checkbox' && !checkboxStatus) {
                // check for Checkbox status for NOT checked and DO nothing...
            } else {
                // otherwise executes the following to send data
                sendData[this.name] = $(this).val();
                console.log("sendData: "+ this.type +' '+ this.name +' '+ this.value);
            }
        });

        var posting = $.ajax({
            type: 'POST',
            url: $(event.target.nodeName).prop('action'),
            data: sendData
        });

        posting.done(function (response) {
            console.log(response);

            if ($('#alert-id').length > 0) {
                $('#alert-id').prop('hidden', false);
            } else {
                $('form').append('<p>Thank you</p>')
            }

            $('form :input').each(function () {
                $(this).val('');
            })
        });

        posting.fail(function (response) {
            console.log(response);
        });
    });

    // RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
    /* include the following HTML to use:
    <div class="form-group">
        <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
        <div class="alert alert-danger alert-dismissible fade-in" id="alert-id" hidden>
            <button type="button" class="close" id="close-id"><span>&times;</span></button>
            Thank you! I will get in touch.
        </div>
    </div>
    */

    // on clicking the X button
    $('#close-id').click(function () {
        // hide the alert panel by adding the hidden property
        $('#alert-id').prop('hidden', true);
        // optionally reload the webpage
        location.reload();
    });

})

// end of script!
