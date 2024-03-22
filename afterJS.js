var height =
  $(".right-content").height() -
  ($(".ui-widget-header").height() + $(".editer-content1").height() + 100);
grid1.setHeight(height);

//rowspan
let release_no;
let status;
let load_type;
let driver_name;
let driver_tel_no;
let car_no;
let delv_fee_default;
let delv_fee_vat_default;
let delv_fee;
let delv_fee_vat;
let delv_fee_remark;
let load_file;
let release_no_text = "";
let release_no_span = 1;
$(
  `#grid1 .tui-grid-rside-area td[data-column-name="${itmobj1["release_no"]}"]`
).each(function (index) {
  if (index == 0) {
    release_no = $(this);
    status = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["status"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    load_type = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["load_type"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    driver_name = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["driver_name"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    driver_tel_no = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["driver_tel_no"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    car_no = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["car_no"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    delv_fee = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["delv_fee"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    delv_fee_vat = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["delv_fee_vat"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    delv_fee_remark = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["delv_fee_remark"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();
    load_file = $(
      `#grid1 .tui-grid-rside-area td[data-column-name="${
        itmobj1["load_file"]
      }"][data-row-key="${$(this).attr("data-row-key")}"]`
    ).first();

    release_no_text = grid1.getValue(
      $(this).attr("data-row-key"),
      itmobj1["release_no"]
    );
  } else {
    if (
      release_no_text !=
      grid1.getValue($(this).attr("data-row-key"), itmobj1["release_no"])
    ) {
      release_no.attr("rowspan", release_no_span);
      status.attr("rowspan", release_no_span);
      load_type.attr("rowspan", release_no_span);
      driver_name.attr("rowspan", release_no_span);
      driver_tel_no.attr("rowspan", release_no_span);
      car_no.attr("rowspan", release_no_span);
      delv_fee.attr("rowspan", release_no_span);
      delv_fee_vat.attr("rowspan", release_no_span);
      delv_fee_remark.attr("rowspan", release_no_span);
      load_file.attr("rowspan", release_no_span);

      release_no = $(this);
      load_type = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["load_type"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      driver_name = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["driver_name"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      driver_tel_no = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["driver_tel_no"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      car_no = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["car_no"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      delv_fee = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      delv_fee_vat = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee_vat"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      delv_fee_remark = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee_remark"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();
      load_file = $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["load_file"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      ).first();

      release_no_text = grid1.getValue(
        $(this).attr("data-row-key"),
        itmobj1["release_no"]
      );
      release_no_span = 1;
    } else {
      release_no_span += 1;

      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["status"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["load_type"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["driver_name"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["driver_tel_no"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["car_no"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee_vat"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["delv_fee_remark"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(
        `#grid1 .tui-grid-rside-area td[data-column-name="${
          itmobj1["load_file"]
        }"][data-row-key="${$(this).attr("data-row-key")}"]`
      )
        .first()
        .remove();
      $(this).remove();
    }
  }
});

function sumValue(item) {
  let colValue = "";
  let colValueIdDeposit = "";
  const listCheck = grid1.getColumnValues(itmobj1["release_no"]);
  const listValue = grid1.getColumnValues(itmobj1[item]);
  let sum = 0;

  for (let i = 0; i <= listValue.length; i++) {
    if (listValue[i] === undefined) continue;

    if (i === 0) {
      colValue = listValue[i];
      colValueIdDeposit = listCheck[i];
      sum += Number(colValue);
    } else {
      if (colValue !== listValue[i] && colValueIdDeposit !== listCheck[i]) {
        colValue = listValue[i];
        colValueIdDeposit = listCheck[i];
        sum += Number(colValue);
      }
    }
  }
  if (item == "delv_fee_vat") console.log(sum);

  $(
    `.editer-content2 #grid1 .tui-grid-rside-area .tui-grid-summary-area td[data-column-name="${itmobj1[item]}"]`
  ).html(
    `<div style="text-align:right;width:100%;font-weight:bold;">${sum.toLocaleString()}<div></div></div>`
  );
}
let arrCheck = ["delv_fee", "delv_fee_vat"];

arrCheck.forEach(function (item) {
  sumValue(item);
});
