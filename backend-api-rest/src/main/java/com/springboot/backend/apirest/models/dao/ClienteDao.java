package com.springboot.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.springboot.backend.apirest.models.entity.Cliente;

public interface ClienteDao extends CrudRepository <Cliente, Long>{

}
