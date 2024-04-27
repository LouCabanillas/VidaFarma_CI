package com.cibertec.vidafarma.config;

import com.cibertec.vidafarma.services.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
				.csrf(AbstractHttpConfigurer::disable)
				.authorizeHttpRequests(
	            auth -> auth
	            	.requestMatchers(
							"/api/producto/**",
							"/api/producto/buscarProductoPorNombre/**",
							"/api/producto/buscarProductosPorFragmentoNombre/**",
							"/login",
							"/",
							"/login.html",
							"/api/producto")
	            	.permitAll()
	            	.requestMatchers(
	                        "/js/**",
	                        "/css/**",
							"/assets/css/**",
							"/assets/fonts/**",
							"/assets/gif/**",
							"/assets/images/**",
							"/assets/img/**",
							"/assets/js/**",
							"/assets/sources/**",
							"/assets/svg/**",
	                        "/img/**",
	                        "/webjars/**"
	                        )
	            	.permitAll()
	            	.anyRequest()
	            	.authenticated()
	           )
	            .formLogin(formLogin -> formLogin
	                    .loginPage("/login")
	                    .defaultSuccessUrl("/dashboard", true)
	                    .permitAll()
	            )
	            .logout(logout -> logout.logoutUrl("/signout").permitAll());

	    return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
