$("#header-addrow").hide();
$("#header-delrow").hide();
$("#del_btn").hide();
$("#excelupload").hide();
$("#cust_btn3").hide();

$(
  ".editer-content2 #grid1 .tui-grid-lside-area .tui-grid-summary-area tr:first td:first"
).html(`<span style="font-weight:bold">합계</span>`);

$(`#${itmobj1["from_ser"]}`).val(moment().format("YYYY-MM-01"));
$(`#${itmobj1["to_ser"]}`).val(moment().format("YYYY-MM-DD"));

$("#cust_btn3").after(
  `<div class="right-tap-btn ajaxset" id="print_btn_cus" style=""><span class="right-btn-text"><i class="fa-regular fa-square" aria-hidden="true"></i>&nbsp;MONTHLY REPORT</span></div>`
);

//handle filter
setAllDefaultValue([itmobj1["from_ser"], itmobj1["to_ser"]]);
$("#search_btn").on("click", function () {
  //from date, to date
  const date_obj = {
    from_ser: $(`#${itmobj1["from_ser"]}`).val(),
    to_ser: $(`#${itmobj1["to_ser"]}`).val(),
  };
  $("#DUMMY15").val(JSON.stringify(date_obj));
});

grid1.on("check uncheck", function () {
  if ($("#DUMMY15").val()) {
    date_obj = JSON.parse($("#DUMMY15").val());
    $(`#${itmobj1["from_ser"]}`).val(date_obj["from_ser"]);
    $(`#${itmobj1["to_ser"]}`).val(date_obj["to_ser"]);
  }
});

$("#search_btn").trigger("click");

$("#print_btn_cus").on("click", function () {
  let from_month = $(`#${itmobj1["from_ser"]}`).val().slice(0, 7);
  let to_month = $(`#${itmobj1["to_ser"]}`).val().slice(0, 7);
  if (
    from_month == "" ||
    from_month == undefined ||
    to_month == "" ||
    to_month == undefined
  ) {
    msg("데이터를 선택하세요.");
    return;
  }
  if (from_month != to_month) {
    msg("출하지시일 초회조건은 다른 월달이라면 출력이 불가능합니다.");
    return;
  }
  $("#print_btn").trigger("click");
});

grid1.on("check", function (event) {
  const value = grid1.getRow(event.rowKey);
  if (value[itmobj1["release_no"]]) {
    const rows = grid1.getRows();
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][itmobj1["release_no"]] == value[itmobj1["release_no"]])
        grid1.check(i);
    }
  }
});

grid1.on("uncheck", function (event) {
  const value = grid1.getRow(event.rowKey);
  if (value[itmobj1["release_no"]]) {
    const rows = grid1.getRows();
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][itmobj1["release_no"]] == value[itmobj1["release_no"]])
        grid1.uncheck(i);
    }
  }
});

$(window).on("resize", function () {
  var height =
    $(".right-content").height() -
    ($(".ui-widget-header").height() + $(".editer-content1").height() + 100);
  grid1.setHeight(height);
});
