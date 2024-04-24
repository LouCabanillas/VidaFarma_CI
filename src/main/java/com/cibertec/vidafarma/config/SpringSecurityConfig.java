package com.cibertec.vidafarma.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http.authorizeHttpRequests(
	            auth -> auth
	            	.requestMatchers("/login", "/login.html", "/api/clientes")
	            	.permitAll()
	            	.requestMatchers(
	                        "/js/**",
	                        "/css/**",
	                        "/img/**",
	                        "/webjars/**"
	                        )
	            	.permitAll()
	            	.anyRequest()
	            	.authenticated()
	           )
	            .formLogin(formLogin -> formLogin
	                    .loginPage("/login")
	                    .defaultSuccessUrl("/", true)
	                    .permitAll()
	            )
	            .logout(logout -> logout.logoutUrl("/signout").permitAll());
	 
	    return http.build();
	}

	@Bean
    public UserDetailsService userDetailsService() {
    UserDetails user =
         User.builder()
            .username("root")
            .password(passwordEncoder().encode("Cl@v3990"))
            .roles("USER")
            .build();

    return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
    }
    
}
