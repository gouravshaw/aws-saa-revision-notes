(function () {
  "use strict";

  var detailEl = document.getElementById("topic-detail");
  var backdrop = detailEl && detailEl.querySelector(".topic-detail-backdrop");
  var closeBtn = detailEl && detailEl.querySelector(".topic-detail-close");
  var detailNumber = document.getElementById("detail-number");
  var detailTitle = document.getElementById("detail-title");
  var detailBody = document.getElementById("detail-body");

  function openDetail(card) {
    if (!detailEl || !detailNumber || !detailTitle || !detailBody) return;

    var header = card.querySelector(".card-header");
    var body = card.querySelector(".card-body");
    var numEl = header && header.querySelector(".card-number");
    var titleEl = header && header.querySelector("h2");

    if (!body || !titleEl) return;

    detailNumber.textContent = numEl ? numEl.textContent.trim() : "";
    detailTitle.textContent = titleEl ? titleEl.textContent.trim() : "";
    detailBody.innerHTML = body.innerHTML;

    var detailHeader = detailEl.querySelector(".topic-detail-header");
    detailHeader.classList.remove("card-iam", "card-final");
    if (card.classList.contains("card-iam")) detailHeader.classList.add("card-iam");
    if (card.classList.contains("card-final")) detailHeader.classList.add("card-final");

    detailEl.setAttribute("aria-hidden", "false");
    detailEl.classList.add("is-visible");
  }

  function closeDetail() {
    if (!detailEl) return;
    detailEl.classList.remove("is-visible");
    detailEl.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".card").forEach(function (card) {
    var header = card.querySelector(".card-header");
    if (!header) return;

    header.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openDetail(card);
    });

    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(card);
      }
    });
  });

  if (backdrop) backdrop.addEventListener("click", closeDetail);
  if (closeBtn) closeBtn.addEventListener("click", closeDetail);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && detailEl && detailEl.classList.contains("is-visible")) {
      closeDetail();
    }
  });
})();
