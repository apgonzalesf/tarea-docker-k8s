package com.hero.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hero.model.Hero;
import com.hero.repository.HeroRepository;

import io.swagger.annotations.Api;

@RestController
@RequestMapping(value = "heroes")
@Api(tags= {"heroes"})
public class HeroController {

    @Autowired
    HeroRepository heroRepository;

     
    @GetMapping(produces = "application/json")
    @ResponseStatus(HttpStatus.OK) 
    public @ResponseBody Iterable<Hero> allHeroes( ) {
    	 return heroRepository.findAll();
    }

    
}
