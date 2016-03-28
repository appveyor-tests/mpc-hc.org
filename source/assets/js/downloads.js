/* jshint browser:true */

(function() {
    "use strict";

    var el = document.querySelectorAll(".toggleLink");
    var collapsedToggleLinkCount = document.querySelectorAll(".toggleLink.collapsed").length;
    var totalToggleLink = document.querySelectorAll(".toggleLink:not(.in)");
    var totalToggleLinkCount = totalToggleLink.length;
    var closeAll = document.getElementById("closeAll");
    var expandAll = document.getElementById("expandAll");

    if (el.length) {

        var checkButtonState = function () {
            if (collapsedToggleLinkCount === 0) {
                // All elements are expanded
                closeAll.removeAttribute("disabled");
                expandAll.setAttribute("disabled", "");
            } else if (collapsedToggleLinkCount === totalToggleLinkCount) {
                // All elements are collapsed
                closeAll.setAttribute("disabled", "");
                expandAll.removeAttribute("disabled");
            } else {
                closeAll.removeAttribute("disabled");
                expandAll.removeAttribute("disabled");
            }
        };

        // Loop through all `totalToggleLink`s
        [].forEach.call(totalToggleLink, function(item) {
            item.onclick = function() {
                // If the `.toggleLink` element has the `.collapsed` class,
                // decrease or increase the `collapsedToggleLinkCount`
                if (this.classList.contains("collapsed")) {
                    collapsedToggleLinkCount--;
                } else {
                    collapsedToggleLinkCount++;
                }

                checkButtonState();
            };
        });

        closeAll.onclick = function() {
            var elem = document.querySelectorAll(".panel-collapse.in");
            var len = elem.length;

            if (elem) {
                for (var i = 0; i < len; i++) {
                    elem[i].classList.remove("in");
                    elem[i].setAttribute("aria-expanded", "false");
                    elem[i].classList.add("collapse");
                }
                collapsedToggleLinkCount = totalToggleLinkCount;    // reset the global count
                checkButtonState();
            }
        };

        expandAll.onclick = function() {
            var elem = document.querySelectorAll(".panel-collapse:not(.in)");
            var len = elem.length;

            if (elem) {
                for (var i = 0; i < len; i++) {
                    elem[i].classList.add("in");
                    elem[i].setAttribute("aria-expanded", "true");
                }
                collapsedToggleLinkCount = 0;                       // reset the global count
                checkButtonState();
            }
        };
    }

})();
