package com.cibertec.vidafarma.entity;

import com.cibertec.vidafarma.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cliente")
public class ClienteEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCliente")
    private Long idCliente;

    @Column(name = "dniCliente")
    private String dniCliente;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apePaterno")
    private String apePaterno;

    @Column(name = "apeMaterno")
    private String apeMaterno;

    @Column(name = "fechaNacimiento")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date fechaNacimiento;

    @Column(name = "correo")
    private String correo;

    @Column(name = "celular")
    private String celular;

    @Basic
    @Column(nullable = false, name = "username")
    String username;

    @Column(name = "password")
    String password;

    @Enumerated(EnumType.STRING)
    Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((role.name())));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
