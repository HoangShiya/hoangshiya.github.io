// window.onload = function(){
//   $(document).ready(function () {
//     res = ""

//     $("#btn_send").click(function () {

//       inputQuestion = $("#send_content").val();
//       outputAnswer = "Hihi"

//       content = $("#content").html();



//       // alert("Value: " + $("#send_content").val());
//       res += `<div class="response">
//       <p class="message question">${inputQuestion}</p>
//       <p class="message answer">${outputAnswer}</p>
//       </div>`
//       content = $("#content").html()
//       $("#content").html(res)
//     });
//   });
// }



window.onload = function () {
  $(document).ready(function () {
    // DATASETS:

    data = [
      {
        "q": "HUET là mã khoa trường nào?",
        "a": "HUET là mã khoa của Khoa Kỹ thuật và Công nghệ, Đại học Huế",
        "context": ["mã khoa", "mã khoa trường", "mã khoa trường nào"]
      },
      {
        "q": "Địa điểm HUET ở đâu?",
        "a": "HUET hiện tại đang ở số 1 Điện Biên Phủ, thành phố Huế",
        "context": ["ở đâu", "địa điểm", "địa chỉ"]
      },
      {
        "q": "HUET có những ngành học nào?",
        "a": "Tính từ năm học 2023, HUET có các ngành học\:\n- Khoa học dữ liệu và trí tuệ nhân tạo\n- Kỹ thuật điện\n- Tự động hóa\n- Xây dựng",
        "context": ["ngành học", "những ngành học nào", "bao nhiêu ngành", "chương trình đào tạo", "chương trình"]
      },
      {
        "q": "HUET có mấy hệ đào tạo?",
        "a": "HUET hiện có 2 hệ đào tạo là kỹ sư và cử nhân",
        "context": ["hệ đào tạo", "mấy hệ đào tạo", "bao nhiêu hệ đào tạo"]
      },
      {
        "q": "HUET có khoa trưởng là ai?",
        "a": "Khoa trưởng của HUET hiện tại là tiến sĩ Nguyễn Quang Lịch",
        "context": ["khoa trưởng", "trưởng khoa", "tên khoa trưởng", "khoa trưởng là ai", "khoa trưởng tên gì", "khoa trưởng tên là gì"]
      },
      {
        "q": "Tên miền website HUET là gì?",
        "a": "Tên miền HUET là: https://huet.hueuni.edu.vn",
        "context": ["tên miền", "website", "tên web", "tên website"]
      },
      {
        "q": "Xin chào",
        "a": "Vâng,xin chào bạn!Chúc bạn ngày tốt lành!",
        "context": ["xin chào", "hi", "2", "hello", "nihao", "Yo", "hi bro"]
      },
    ]



    function findAnswer(inputQuestion, data) {

      // console.log("data: ", data.length)
      notFound = {
        "q": inputQuestion,
        "a": "Rất tiếc,tôi chưa được train về nội dung này!"
      };
      total = 0
      result = {}
      for (let index = 0; index < data.length; index++) {
        // console.log("########################################")
        const element = data[index];
        // console.log(`index-${index}`, data[index]["context"])

        dataStruct = data[index]["context"]
        // console.log("dataStruct: ", dataStruct.length)

        for (let idx = 0; idx < dataStruct.length; idx++) {

          if (inputQuestion.toLowerCase().search(dataStruct[idx]) > -1) {
            total = total + 1
            result = data[index]
          }
        }
        console.log("total: ", total)
        if (total > 0) {
          console.log("Có tìm thấy")
          console.log('Câu hỏi: ', result["q"])
          console.log('Câu trả lời: ', result["a"])
          return result["a"]
        }
        else {
          console.log("Không tìm thấy")
          console.log('Câu hỏi: ', notFound["q"])
          console.log('Câu trả lời: ', notFound["a"])
          return notFound["a"]
        }
      }
    }

    // question = "mã khoa"=>OK
    // question = "những ngành học nào"
    // question = "Trưởng khoa khoa kỹ thuật công nghệ là ai"=>"OK"
    // question = "Khoa kỹ thuật công nghệ có bao nhiêu ngành học"=>"OK"
    // question = "giáo viên chủ nhiệm của bạn tên là gì"=>"NO"
    // question = "tên miền khoa kỹ thuật công nghệ"
    // question = "Khoa kỹ thuật công nghệ có bao nhiêu ngành học"
    // findAnswer(question, data)
  });
  // PROCESSING
  res = ""

  $("#btn_send").click(function () {

    inputQuestion = $("#send_content").val();
    outputAnswer = findAnswer(inputQuestion, data)

    content = $("#content").html();



    // alert("Value: " + $("#send_content").val());
    res = `<div class="response">
          <p class="message question">${inputQuestion}</p>
          <p class="message answer">${outputAnswer}</p>
          </div>${res}`
    content = $("#content").html()
    $("#content").html(res)
  })
}
