$(function() {
    $("body").append("<div id='test'><button id='buttonTest'>送信</button></div>");
    let modalHtml = `<div id='checkModal'>
                        <div id='checkModalContent'>
                            <h3>送信確認</h3><br>
                            <h4 class='modalLabel'>宛先</h4><br>
                            <h4 class='modalLabel'>CC</h4><br>
                            <h4 class='modalLabel'>BCC</h4><br>
                            <h4 class='modalLabel'>件名</h4><br>
                            <h4 class='modalLabel'>添付ファイル</h4><br>
                            <button class='btn_close'>送信</button>
                        </div>
                    </div>`;
    $('body').append(modalHtml);
    $(function() {
        let buttonOverLay = setInterval(function() {
            try {
                let offsetTop = $('.y8XIN4EAeheOqsn4BJB7R').offset().top;
                let offsetLeft = $('.y8XIN4EAeheOqsn4BJB7R').offset().left;
                //console.log(top);
                //console.log(left);
                $('#test').show();
                $('#test').offset({top:offsetTop, left:offsetLeft})

                $('#buttonTest').on('click', function() {
                    //clearInterval(buttonOverLay);
                    let modal = $('#checkModal');
                    modal.show();
                })
                
                $('.btn_close').on('click', function() {
                    $('#checkModal').hide();
                })
            }
            catch{
                try {
                    $('#test').hide();
                }
                catch {

                }
            }
            
        }, 300)
    })
})