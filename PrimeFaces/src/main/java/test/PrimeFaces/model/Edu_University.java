package test.PrimeFaces.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;

@Entity
@Table(name = "edu_univ")
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class Edu_University implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "UNIV_ID")
	private Integer univ_id;
	@Column(name = "UNIV_DESC")
	private String univ_desc;
	@Column(name = "CONTACT_USER")
	private Integer contact_User;
	@Column(name = "std_no_length")
	private Integer std_no_length;

	@Column(name = "scholar_flag")
	private Integer scholar_flag;
	@Column(name = "scholar_status")
	private Integer scholar_status;
	@Column(name = "redirectLink")
	private String redirectLink;
	@Column(name = "Insert_DAD_Flag")
	private Integer Insert_DAD_Flag;

	public Edu_University() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Edu_University(Integer univ_id, String univ_desc, Integer contact_User, Integer std_no_length,
			Integer scholar_flag, Integer scholar_status, String redirectLink, Integer insert_DAD_Flag) {
		super();
		this.univ_id = univ_id;
		this.univ_desc = univ_desc;
		this.contact_User = contact_User;
		this.std_no_length = std_no_length;
		this.scholar_flag = scholar_flag;
		this.scholar_status = scholar_status;
		this.redirectLink = redirectLink;
		Insert_DAD_Flag = insert_DAD_Flag;
	}

	public Integer getUniv_id() {
		return univ_id;
	}

	public void setUniv_id(Integer univ_id) {
		this.univ_id = univ_id;
	}

	public String getUniv_desc() {
		return univ_desc;
	}

	public void setUniv_desc(String univ_desc) {
		this.univ_desc = univ_desc;
	}

	public Integer getContact_User() {
		return contact_User;
	}

	public void setContact_User(Integer contact_User) {
		this.contact_User = contact_User;
	}

	public Integer getStd_no_length() {
		return std_no_length;
	}

	public void setStd_no_length(Integer std_no_length) {
		this.std_no_length = std_no_length;
	}

	public Integer getScholar_flag() {
		return scholar_flag;
	}

	public void setScholar_flag(Integer scholar_flag) {
		this.scholar_flag = scholar_flag;
	}

	public Integer getScholar_status() {
		return scholar_status;
	}

	public void setScholar_status(Integer scholar_status) {
		this.scholar_status = scholar_status;
	}

	public String getRedirectLink() {
		return redirectLink;
	}

	public void setRedirectLink(String redirectLink) {
		this.redirectLink = redirectLink;
	}

	public Integer getInsert_DAD_Flag() {
		return Insert_DAD_Flag;
	}

	public void setInsert_DAD_Flag(Integer insert_DAD_Flag) {
		Insert_DAD_Flag = insert_DAD_Flag;
	}

	@Override
	public String toString() {
		return "Edu_University [univ_id=" + univ_id + ", univ_desc=" + univ_desc + ", contact_User=" + contact_User
				+ ", std_no_length=" + std_no_length + ", scholar_flag=" + scholar_flag + ", scholar_status="
				+ scholar_status + ", redirectLink=" + redirectLink + ", Insert_DAD_Flag=" + Insert_DAD_Flag + "]";
	}

}
