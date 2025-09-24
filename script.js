new Vue({
    el: '#app',
    data () {
      return {
        phone: '',
        msg: '',
        linkk: '',
        baselink: 'https://wa.me/'
      }
    },
    computed: {
      phoneNumber: function() {
        return '55' + this.phone;
      },
      encodedMsg: function() {
        return '?text=' + encodeURIComponent(this.msg);
      },
      encodedLinkk: function() {
        return '%20' + encodeURIComponent(this.linkk);
      },
      whatsapplink: function() {
        if(this.phone && !this.msg){
          return this.baselink.concat(this.phoneNumber);
        }
        else if(this.phone && this.msg){
           return this.baselink.concat(this.phoneNumber).concat(this.encodedMsg).concat(this.encodedLinkk);
           }
        else{
          return this.baselink;
        }
      }
    }
});



$(document).ready(function(){
			$(".button1").click(function(){
				var texto = $(this).text();
				var $temp = $("<input>");
				$("body").append($temp);
				$temp.val(texto).select();
				document.execCommand("copy");
				$temp.remove();
				alert("Link copiado!");
			});
		});