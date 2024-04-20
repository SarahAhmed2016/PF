package test.PrimeFaces;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@ComponentScan(basePackages = "test.PrimeFaces")
@EnableJpaRepositories("test.PrimeFaces")
@EntityScan("test.PrimeFaces")
public class ApplicationConfig extends WebMvcConfigurationSupport {

	@Override
	protected void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("bootstrap/**", "img/**", "resources/**", "oldResources/**").addResourceLocations(
				"classpath:/bootstrap/", "classpath:/img/", "classpath:/oldResources/", "classpath:/");
	}

	@Bean
	public InternalResourceViewResolver jspviewResolver() {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/WEB-INF/jsp/");
		viewResolver.setSuffix(".xhtml");
		viewResolver.setViewClass(JstlView.class);
		return viewResolver;
	}

	@Bean
	public CommonsMultipartResolver commonsMultipartResolver() {
		final CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
		commonsMultipartResolver.setMaxUploadSize(-1);
		return commonsMultipartResolver;
	}

}
