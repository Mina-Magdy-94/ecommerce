function cloneImg(img) {
  let clonedImg = $(img).clone().addClass("clonedImg");
  clonedImg.appendTo("#newContainer");
  console.log($(this));
}

$(document).ready(function () {
  $("img").click(function (e) {
    let newContainer = $("<div></div>").insertAfter("#container");
    newContainer.attr("id", "newContainer");
    let nextBtn = $("<button></button>").text(">").attr("id", "nextBtn");
    let prevBtn = $("<button></button>").text("<").attr("id", "prevBtn");
    let closeBtn = $("<button></button>").text("X").attr("id", "closeBtn");
    $("#newContainer").append(nextBtn, prevBtn, closeBtn);

    // let nextBtn = $("#newContainer").append("button");
    // nextBtn.attr("id", "nextBtn").text(">");
    // let prevBtn = $("#newContainer").append("button");
    // prevBtn.attr("id", "prevBtn").text("<");
    // let closeBtn = $("#newContainer").append("button");
    // closeBtn.attr("id", "closeBtn").text("X");

    // let clonedImg = $(this).clone().addClass("clonedImg");
    // clonedImg.appendTo("#newContainer");
    // console.log($(this));
    cloneImg(this);

    closeBtn.click(function (e) {
      $("#newContainer").remove();
    });

    nextBtn.click(function (e) {
      let imgId = $(".clonedImg").attr("id");
      console.log(imgId);
      $(".clonedImg").remove();
      let nextImgId = (Number(imgId) + 1) % $("#container img").length;
      console.log(nextImgId);
      cloneImg($(`#${nextImgId}`));
    });

    prevBtn.click(function (e) {
      let imgId = $(".clonedImg").attr("id");
      console.log(imgId);
      $(".clonedImg").remove();
      let prevImgId = Number(imgId) - 1;
      if (prevImgId < 0) {
        prevImgId = $("#container img").length - 1;
      }
      console.log(prevImgId);
      cloneImg($(`#${prevImgId}`));
    });
  });
});
