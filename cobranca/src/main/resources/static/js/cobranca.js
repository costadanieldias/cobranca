$('#confirmacaoExclusaoModal').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget); // Button that triggered the modal
  
  var codigo = button.data('codigo'); // Extract info from data-* attributes
  var descricao = button.data('descricao');
  
  var modal = $(this);
  var form = modal.find('form');
  var action = form.data('url-base');
  
//  if(!action.endsWith('/')) { // Não funciona no IE
//	  action += '/';
//  }
  
  if(!'/' == action.charAt(action.length-1)) {
	  action += '/';
  }
  
  form.attr('action', action + codigo);
  
  modal.find('.modal-body').html('Tem certeza que deseja excluir o título <strong>' + descricao + '</strong>?');
})

$(function() {
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({prefix:'R$ ', thousands:'.', decimal:',', affixesStay: false, allowZero: false});
	$('.js-atualizar-status').on('click', function(event){
		
		event.preventDefault();
		var botaoReceber = $(event.currentTarget);
		var urlBotaoReceber = botaoReceber.attr('href');
		
		var response = $.ajax({
			url: urlBotaoReceber,
			type: 'PUT'
		});
		
		response.done(function(e){
			var codigoTitulo = botaoReceber.data('codigo');
			$('[data-rule=' + codigoTitulo + ']').html('<span class="badge badge-success">' + e + '</span>');
			botaoReceber.hide();
		});
		
		response.fail(function(e){
			console.log(e);
			alert('Erro ao mudar status do registro.');
		});
		
		//console.log('urlBotaoReceber', urlBotaoReceber);
		
	});
});