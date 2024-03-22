var storedData = localStorage.getItem("date_data");
var parsedData = JSON.parse(storedData);
var fromSer = parsedData.from_ser;
var toSer = parsedData.to_ser;

const data_Send = {};
data_Send.menucode = "M000000938";
data_Send.type = "get_data";
data_Send.header = JSON.stringify({ from_ser: fromSer, to_ser: toSer });
$.ajax({
  type: "post",
  dataType: "JSON",
  url: "/ajax.do",
  data: data_Send,
  async: false,
  success: function (response) {
    var is_completee = "";
    for (let i = 0; i < response.length; i++) {
      let item = response[i];
      let option_1 = item.option_1 || "";
      let dateObj = new Date(item.load_finish_date);
      let load_finish_date =
        dateObj.getMonth() + 1 + "월 " + dateObj.getDate() + "일" || "";
      let sender_name = item.sender_name || "";
      let cust_name = item.cust_name || "";
      let region_agency = item.region_agency || "";
      let sales_cd = item.sales_cd || "";
      let qty = item.qty || "";
      let machine_no = item.machine_no || "";
      let car_no = item.car_no || "";
      let load_type = item.load_type || "";
      let delv_fee =
        item.delv_fee != undefined ? addCommasToNumber(item.delv_fee) : "";
      let delv_fee_vat =
        item.delv_fee_vat != undefined
          ? addCommasToNumber(item.delv_fee_vat)
          : "";
      let delv_fee_remark = item.delv_fee_remark || "";

      let header = `
       <tr style="height: 23px;">
           <td style="width: 77px; height: 45px; text-align: center;" rowspan="2"><strong>No.</strong></td>
           <td style="width: 154px; height: 45px; text-align: center;" rowspan="2"><strong>웨이트</strong><br /><strong>장착분</strong></td>
           <td style="width: 181px; height: 45px; text-align: center;" rowspan="2"><strong>작업일자</strong></td>
           <td style="width: 252px; height: 45px; text-align: center;" rowspan="2"><strong>화주명</strong></td>
           <td style="width: 177px; height: 45px; text-align: center;" rowspan="2"><strong>상차지</strong></td>
           <td style="width: 204px; height: 45px; text-align: center;" rowspan="2"><strong>도착지</strong></td>
           <td style="width: 408px; height: 23px; text-align: center;" colspan="2"><strong>작업 내용</strong></td>
           <td style="width: 257px; height: 23px; text-align: center;" rowspan="2"><strong>기대번호</strong> </td>
           <td style="width: 405.375px; height: 23px; text-align: center;" colspan="2"><strong>배차현황</strong></td>
           <td style="width: 418.625px; height: 23px; text-align: center;" colspan="2"><strong>청구현황</strong></td>
           <td style="width: 237px; height: 45px; text-align: center;" rowspan="2"><strong>비고</strong></td>
           </tr>
           <tr style="height: 22px;">
           <td style="width: 232px; height: 22px; text-align: center;"><strong>품명</strong></td>
           <td style="width: 176px; height: 22px; text-align: center;"><strong>수량</strong></td>
           <td style="width: 229px; height: 22px; text-align: center;"><strong>차량번호</strong></td>
           <td style="width: 176.375px; height: 22px; text-align: center;"><strong>차종</strong></td>
           <td style="width: 213.625px; height: 22px; text-align: center;"><strong>금액</strong></td>
           <td style="width: 205px; height: 22px; text-align: center;"><strong>부가세</strong></td>
           </tr>
         `;

      let newRow = `
             </tr>
                   <tr style="height: 35px;">
                   <td style="width: 77px; height: 35px; text-align: center;">${
                     i + 1
                   }</td>
                   <td style="width: 154px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${option_1}</td>
                   <td style="width: 181px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${load_finish_date}</td>
                   <td style="width: 252px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${sender_name}</td>
                   <td style="width: 165px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${cust_name}</td>
                   <td style="width: 172px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${region_agency}</td>
                   <td style="width: 411px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${sales_cd}</td>
                   <td style="width: 85px; height: 35px;text-align: center;">${qty}</td>
                   <td style="width: 273px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${machine_no}</td>
                   <td style="width: 273px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${car_no}</td>
                   <td style="width: 78px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${load_type}</td>
                   <td style="width: 229px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${delv_fee}</td>
                   <td style="width: 205px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${delv_fee_vat}</td>
                   <td style="width: 237px; height: 35px;text-align: center;overflow: hidden;position: relative;text-overflow: ellipsis;white-space: nowrap;">${delv_fee_remark}</td>
                   </tr>
               `;

      is_completee += newRow;

      if (i == 22) {
        is_completee += header;
      }
      if (i > 22 && (i - 22) % 26 == 0) {
        is_completee += header;
      }
    }
    $("#tr_lv2").after(is_completee);
    $("#header_date").text(fromSer.slice(0, 4) + "년 내륙운송 배차현황");
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    let print_date_data = year + "-" + month + "-" + day;
    $("#print_date").text("출력일자 : " + print_date_data);
    const date1 = new Date(toSer);
    const date2 = new Date(fromSer);

    const millisecondsDiff = date1.getTime() - date2.getTime();
    const daysDiff = millisecondsDiff / (24 * 60 * 60 * 1000);
    let send_time =
      "배차기간 : " + fromSer + " ~ " + toSer + " (" + daysDiff + "일간)";
    $("#send_time").text(send_time);
  },
  error: function (xmlHttpRequest, txtStatus, errorThrown) {
    console.log("erorr");
  },
});

function addCommasToNumber(number) {
  var numStr = number.toString();

  var decimalIndex = numStr.indexOf(".");

  if (decimalIndex === -1) {
    decimalIndex = numStr.length;
  }

  for (var i = decimalIndex - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }

  return numStr;
}
