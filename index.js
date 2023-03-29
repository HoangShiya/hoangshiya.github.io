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
        "q": "Các bạn nữ khoa kỹ thuật công nghệ có xinh không?",
        "a": "Ồ,các bạn nữ ở đây không chỉ xinh đẹp mà còn học rất giỏi nhé bạn ơi!",
        "context": ["bạn nữ", "có xinh không", "con gái", "gái xinh", "bạn nữa xinh", "xinh đẹp"]
      },
      {
        "q": "Cho tôi xin số điện thoại của bạn nữ xinh đẹp tại khoa kỹ thuật công nghệ nhé!",
        "a": "Ồ,được thôi!Nhưng bạn hãy tặng tôi 10 ly trà sữa trước nhé!",
        "context": ["xin số điện thoại", "điện thoại bạn nữ", "nữ xinh đẹp", "điện thoại gái xinh", "số điện thoại bạn nữa xinh", "số điện thoại xinh đẹp"]
      },
      {
        "q": "Xin chào bạn!",
        "a": "Vâng,Mình xin chào bạn!Mình là Hotgirl GPT!",
        "context": ["xin chào bạn", "hi bro", "hello bạn", "xin chào bro", "yo bro", "chào"]
      },
      {
        "q": "Bạn bao nhiêu tuổi!",
        "a": "Hihi,em còn trẻ lắm mấy anh ơi!",
        "context": ["how old", "tuổi", "bạn bao nhiêu tuổi", "tuổi của bạn", "bạn bao nhiêu tuổi", "nhiêu tuổi"]
      },
      {
        "q": "Bạn tên gì!",
        "a": "Dạ,em tên là HotGirlGPT!Em xin chào anh/chị ạ!",
        "context": ["tên bạn", "tên của bạn", "bạn tên là gì", "tên của bạn đẹp không", "your name", "what your name", "name of you"]
      },
      {
        "q": "Tôi là Tân!",
        "a": "Dạ,em xin chào anh Tân ạ!",
        "context": ["Tôi là Tân","tôi là", "là tôi", "chào em", "tân"]
      },
      {
        "q": "Học phần kỹ năng viết báo cáo dự kiến do ai giảng dạy?",
        "a": "Học phần kỹ năng viết báo cáo dự kiến sẽ được cô TS.Nguyễn Thu Hà giảng dạy.Theo cảm nhận của các bạn học viên,Cô Hà rất tâm huyết với sinh viên!",
        "context": ["kỹ năng viết báo cáo","báo cáo", "giảng dạy", "học phần kỹ năng viết báo cáo"]
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
        dataStruct = data[index]["context"]
        for (let idx = 0; idx < dataStruct.length; idx++) {
          if (inputQuestion.toLowerCase().search(dataStruct[idx]) > -1) {
            total = total + 1
            result = data[index]
          }
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

    inputQuestion = $("#send_content").val();
    console.log("Noi dung cau hoi: ", inputQuestion)
    outputAnswer = findAnswer(inputQuestion, data)

    content = $("#content").html();



    // alert("Value: " + $("#send_content").val());
    res += `<div class="response">
          <p class="message question">${inputQuestion}</p>
          <p class="message answer">${outputAnswer}</p>
          </div>`
    content = $("#content").html()
    $("#content").html(res)

  })
}
