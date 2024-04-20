package test.PrimeFaces.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import test.PrimeFaces.model.Edu_University;
 

@Repository
public interface Edu_UniversityDao  extends CrudRepository<Edu_University, Integer> { 

}
