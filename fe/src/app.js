
/** For retrieving current review */

  // const rv_placeholders = document.getElementById('dynamic-reviews');
  // REVIEW_DATA.map(data => {
  //   rv_placeholders.innerHTML = '<p>' + data.id + '</p>';
  // });
  // console.log(REVIEW_DATA.length);


  // REVIEW_DATA.map(data => {
  //   const inside =
  //     '<p>' + data.id + '</p>'
  //     + '<ul>'
  //       + '<li>'
  //         + '<span>' + data.id + '</span>'
  //         + '<i class="far fa-star" style="color: #FFCC33; cursor: pointer" data-num="1"></i>'
  //         + '<i class="far fa-star" style="color: #FFCC33; cursor: pointer" data-num="2"></i>'
  //         + '<i class="far fa-star" style="color: #FFCC33; cursor: pointer" data-num="3"></i>'
  //         + '<i class="far fa-star" style="color: #FFCC33; cursor: pointer" data-num="4"></i>'
  //         + '<i class="far fa-star" style="color: #FFCC33; cursor: pointer" data-num="5"></i>'
  //         + '<span>' + data.product + '</span>'
  //         + '<span class="edit" style="display: none"><i class="fas fa-pen"></i></span>'
  //         + '<span class="delete" style="display: none"><i class="fas fa-times"></i></span>'
  //       + '</li>'
  //     + '</ul>';
  //
  // })

  function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
