package test.PrimeFaces.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.PrimeFaces.dao.Edu_UniversityDao;

@Service
public class ScholarshipsService {

	@Autowired
	public Edu_UniversityDao edu_UniversityDao;

	public ScholarshipsService() {
		
	}  
	

}
