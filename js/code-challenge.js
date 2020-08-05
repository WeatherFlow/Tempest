$(document).ready(function () {
    console.log("ready");
    attachEventHandlers();
});

function attachEventHandlers() {
    console.log("attach event handlers");
    $("#generate-code-verifier").on("click touchend", function () {
        $("#code-verifier").val(random_string(48));
        createCodeChallenge();

        return false;
    });

    $("#code-verifier").on("input paste", function () {
        createCodeChallenge();
    });

    $("#code-verifier").on("keyup", function () {
        $("#character-count").html($(this).val().length);
    });
}

function createCodeChallenge() {
    var isValid = true;
    var verifier = $("#code-verifier").val();

    $("#code-challenge").html("");

    if (verifier.length < 43 || verifier.length > 128) {
        $("#error-msg").html("Invalid code verifier length.  Code verifier must be between 43 and 128 characters.");
    } else if (!/^[a-z0-9-._~]+$/i.test(verifier)) {
        $("#error-msg").html("Code verifier contains invalid characters.");
    } else {
        var challenge = base64_urlencode(sha256bin(verifier));

        $("#error-msg").html("");
        $("#code-challenge").html(challenge);
    }
}