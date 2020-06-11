// Requires jQuery!
jQuery.ajax({
    url: "https://visualbi.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/8ur02a/b/23/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=7a33e6c8",
    type: "get",
    cache: true,
    dataType: "script"
});

window.ATL_JQ_PAGE_PROPS = {
    "triggerFunction": function (showCollectorDialog) {
        //Requires that jQuery is available! 
        $("#newIssue").click(function (e) {
            e.preventDefault();
            showCollectorDialog();
        });
    }
};

$(document).ready(function () {
    $('.statusTrigger').click(function () {
        $('.overlay').show();
        $('.status').show();
    })

    $('.close').click(function () {
        $('.overlay').hide();
        $('.status').hide();
    })

})
