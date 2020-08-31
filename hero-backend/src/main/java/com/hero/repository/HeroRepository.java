package com.hero.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.hero.model.Hero;

public interface HeroRepository extends CrudRepository<Hero, Long> { 
     
    @Query("from Hero h where lower(h.name) like CONCAT('%', lower(:contains), '%')")
    public Iterable<Hero> findByName(@Param("contains") String name);  
}
