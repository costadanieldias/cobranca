$('#confirmacaoExclusaoModal').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget); // Button that triggered the modal
  
  var codigo = button.data('codigo'); // Extract info from data-* attributes
  var descricao = button.data('descricao');
  
  var modal = $(this);
  var form = modal.find('form');
  var action = form.data('url-base');
  
  if(!action.endsWith('/')) {
	  action += '/';
  }
  
  form.attr('action', action + codigo);
  
  modal.find('.modal-body').html('Tem certeza que deseja excluir o título <strong>' + descricao + '</strong>?');
})

$(function() {
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false, allowZero: false});
});