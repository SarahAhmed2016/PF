package test.PrimeFaces.beans;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.view.ViewScoped;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import test.PrimeFaces.model.Edu_University;
import test.PrimeFaces.service.ScholarshipsService;

@Component
@ManagedBean(name = "menuBean")
@ViewScoped
public class TestBean {

	private String firstName = "Sara";
	private String lastName = "Ahmad";
	private List<Edu_University> univ;

	@Autowired
	private ScholarshipsService scholarshipsService;

	public TestBean() {
		scholarshipsService = new ScholarshipsService();
		univ = new ArrayList<>();
	}

	@PostConstruct
	public void postConstruct() {
		try {
			univ = (List<Edu_University>) scholarshipsService.edu_UniversityDao.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public List<Edu_University> getUniv() {
		return univ;
	}

	public void setUniv(List<Edu_University> univ) {
		this.univ = univ;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
