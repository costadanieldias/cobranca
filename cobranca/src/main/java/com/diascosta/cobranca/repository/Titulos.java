package com.diascosta.cobranca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diascosta.cobranca.model.Titulo;

public interface Titulos extends JpaRepository<Titulo, Long> {

}
