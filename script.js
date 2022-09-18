$.getJSON('data.json',function(data) {
    $.each(data,function(i,data){
        $('#daftar-prestasie').append(
            `<div class="col-md-4">
                <div class="card m-2">
                <div class="card-body">
                    <a href="https://raw.githubusercontent.com/ppelbayan/haul2022/main/Twibbon%20Jadi/`+data.foto+`">
                    <div class="col-sm-8">
                        <div class="card-body">
                        <p class="card-text">`+data.khataman+`</p>
                        <h5 class="card-title">`+data.nama+`</h5>
                        <p class="card-text">Putra Bapak `+data.bapak+`</p>
                        <p class="card-text">Alamat: `+data.alamat+`</p>
                        </div>
                    </div>
                    </a>    
                </div>
                </div>
               
                </div>`
        );
    });
});



$('.nav-link').on('click',function(){

    $('.nav-link').removeClass('active');
    $(this).addClass('actives');

    let kategori=$(this).html();
    console.log(kategori)
    $('h2').html(kategori);
    
    let content='';

    $.getJSON('data.json', function(data){
        $.each(data, function(i,data ){
            if(data.khataman == kategori){
                content += `<div class="col-md-4">
                <div class="card m-2">
                <div class="card-body">
                    <a href="https://raw.githubusercontent.com/ppelbayan/haul2022/main/Twibbon%20Jadi/`+data.foto+">
                    <div class="col-sm-8">
                        <div class="card-body">
                        <p class="card-text">`+data.khataman+`</p>
                        <h5 class="card-title">`+data.nama+`</h5>
                        <p class="card-text">Putra Bapak `+data.bapak+`</p>
                        <p class="card-text">Alamat: `+data.alamat+`</p>
                        </div>
                    </div>
                    </a>    
                </div>
                </div>
               
                </div>`;
            }
          
        });
        $('#daftar-prestasie').html(content);
    });
});
