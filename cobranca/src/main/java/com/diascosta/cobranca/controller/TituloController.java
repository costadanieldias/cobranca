package com.diascosta.cobranca.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.diascosta.cobranca.model.StatusTitulo;
import com.diascosta.cobranca.model.Titulo;
import com.diascosta.cobranca.repository.Titulos;

@Controller
@RequestMapping("/titulos")
public class TituloController {
	
	@Autowired
	private Titulos titulos;

	@RequestMapping("/novo")
	public ModelAndView novo() {
		ModelAndView mv = new ModelAndView("CadastroTitulo");
		mv.addObject(new Titulo());
		return mv;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView salvar(@Validated Titulo titulo, Errors errors) {				
		ModelAndView mv = new ModelAndView("CadastroTitulo");		
		if(errors.hasErrors()) {
			return mv;
		}		
		titulos.save(titulo);						
		mv.addObject("mensagem", "Título salvo com sucesso!");		
		return mv;
	}
	
	@RequestMapping
	public ModelAndView pesquisar() {
		List<Titulo> listaTitulos = titulos.findAll();
		ModelAndView mv = new ModelAndView("PesquisaTitulos");
		mv.addObject("titulos", listaTitulos);
		return mv;
	}
	
	@ModelAttribute
	public List<StatusTitulo> listaStatusTitulo() {
		return Arrays.asList(StatusTitulo.values());
	}
	
}
